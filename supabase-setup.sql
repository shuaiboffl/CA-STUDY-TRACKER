-- Run this once in the Supabase SQL Editor for the planner project.
-- Keep writes to planner_access in the Vercel function; students must not be
-- able to grant themselves paid access from the browser.

create table if not exists public.planner_access (
  user_id uuid primary key references auth.users (id) on delete cascade,
  email text not null,
  display_name text not null default 'Student',
  enrollment_code_hash text not null unique,
  created_at timestamptz not null default now()
);

alter table public.planner_access enable row level security;
revoke all on public.planner_access from anon, authenticated;
grant select on public.planner_access to authenticated;
grant all on public.planner_access to service_role;

drop policy if exists "Students can read their own planner access" on public.planner_access;
create policy "Students can read their own planner access"
  on public.planner_access
  for select
  to authenticated
  using ((select auth.uid()) = user_id);

create table if not exists public.planner_state (
  user_id uuid primary key references auth.users (id) on delete cascade,
  state jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

alter table public.planner_state enable row level security;
revoke all on public.planner_state from anon, authenticated;
grant select, insert, update on public.planner_state to authenticated;
grant all on public.planner_state to service_role;

drop policy if exists "Enrolled students can read their own planner state" on public.planner_state;
create policy "Enrolled students can read their own planner state"
  on public.planner_state
  for select
  to authenticated
  using (
    (select auth.uid()) = user_id
    and exists (
      select 1 from public.planner_access a
      where a.user_id = (select auth.uid())
    )
  );

drop policy if exists "Enrolled students can create their own planner state" on public.planner_state;
create policy "Enrolled students can create their own planner state"
  on public.planner_state
  for insert
  to authenticated
  with check (
    (select auth.uid()) = user_id
    and exists (
      select 1 from public.planner_access a
      where a.user_id = (select auth.uid())
    )
  );

drop policy if exists "Enrolled students can update their own planner state" on public.planner_state;
create policy "Enrolled students can update their own planner state"
  on public.planner_state
  for update
  to authenticated
  using (
    (select auth.uid()) = user_id
    and exists (
      select 1 from public.planner_access a
      where a.user_id = (select auth.uid())
    )
  )
  with check (
    (select auth.uid()) = user_id
    and exists (
      select 1 from public.planner_access a
      where a.user_id = (select auth.uid())
    )
  );

-- Apply only changed browser keys. The JSONB merge is atomic, so activity on
-- separate dates/devices does not replace unrelated planner data.
create or replace function public.merge_planner_state(p_state jsonb)
returns void
language sql
security invoker
set search_path = ''
as $$
  insert into public.planner_state as current_state (user_id, state, updated_at)
  values ((select auth.uid()), coalesce(p_state, '{}'::jsonb), now())
  on conflict (user_id)
  do update set
    state = current_state.state || excluded.state,
    updated_at = now();
$$;

revoke all on function public.merge_planner_state(jsonb) from public, anon;
grant execute on function public.merge_planner_state(jsonb) to authenticated;
