-- Run in the Supabase SQL Editor after deploying the no-code app update.
-- Existing planner_state rows are preserved and remain private to their owner.

create table if not exists public.planner_state (
  user_id uuid primary key references auth.users (id) on delete cascade,
  state jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

alter table public.planner_state enable row level security;
revoke all on public.planner_state from anon, authenticated;
grant select, insert, update on public.planner_state to authenticated;
grant all on public.planner_state to service_role;

-- Clear every older policy before installing the account-isolated policies.
do $$
declare
  existing_policy record;
begin
  for existing_policy in
    select policyname
    from pg_policies
    where schemaname = 'public'
      and tablename = 'planner_state'
  loop
    execute format('drop policy %I on public.planner_state', existing_policy.policyname);
  end loop;
end
$$;

create policy "Users can read their own planner state"
  on public.planner_state
  for select
  to authenticated
  using ((select auth.uid()) = user_id);

create policy "Users can create their own planner state"
  on public.planner_state
  for insert
  to authenticated
  with check ((select auth.uid()) = user_id);

create policy "Users can update their own planner state"
  on public.planner_state
  for update
  to authenticated
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);

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

-- Remove the obsolete enrolment table and its saved code hashes.
drop table if exists public.planner_access cascade;
