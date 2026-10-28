/* Original CA Foundation practice, aligned to the syllabus topics (not copied from ICAI papers). */
window.AETHEL_QUESTIONS = (() => {
  const make = (s, prefix, rows) => rows.map((r, i) => ({
    id: prefix + (i + 1), s, c: r[0], type: 'mcq', q: r[1], o: r[2], a: r[3], e: r[4]
  }));
  const written = (s, prefix, rows) => rows.map((r, i) => ({
    id: prefix + (i + 1), s, c: r[0], type: 'written', q: r[1], e: r[2]
  }));

  const accounting = [
    [0,'A proprietor pays a personal electricity bill from the business bank account. Under the business entity concept, how should it be recorded?',['Business electricity expense','Drawings of the proprietor','Capital introduced','Purchase of equipment'],1,'It is a personal payment by the owner, so it is drawings, not a business expense.'],
    [0,'A business buys a delivery van for cash. Which accounting equation effect is correct?',['Assets rise and liabilities rise','One asset rises and another asset falls','Expenses rise and capital rises','Liabilities fall and capital rises'],1,'The vehicle asset increases while the bank/cash asset decreases.'],
    [0,'Rent for March is unpaid on 31 March. Under accrual accounting, it is generally recognised:',['Only when paid','In March, with a payable recorded','In the next financial year','When the landlord sends a reminder'],1,'Accrual accounting records expense when incurred and recognises the unpaid liability.'],
    [0,'A machine is expected to be used for several years. The going-concern assumption supports:',['Writing off its full cost immediately in every case','Allocating its depreciable amount over its useful life','Recording only its resale value','Ignoring depreciation'],1,'The cost is allocated over the periods expected to benefit from use.'],
    [0,'Goods costing ₹18,000 are bought for cash. Which entry records the dual aspect?',['Purchases Dr ₹18,000; Cash Cr ₹18,000','Cash Dr ₹18,000; Purchases Cr ₹18,000','Capital Dr ₹18,000; Purchases Cr ₹18,000','Purchases Dr ₹18,000; Capital Cr ₹18,000'],0,'The purchase is debited and cash, which decreases, is credited.'],
    [1,'A credit purchase of goods for resale is first recorded in the:',['Sales book','Purchases book','Cash book','Journal proper only'],1,'Credit purchases of goods for resale are recorded in the purchases book.'],
    [1,'A credit sale of goods to Neha is recorded by:',['Neha Dr; Sales Cr','Sales Dr; Neha Cr','Cash Dr; Sales Cr','Purchases Dr; Neha Cr'],0,'The customer is debited and sales is credited.'],
    [1,'A trial balance agrees. Which statement is correct?',['It proves every transaction is complete','It proves there are no errors of omission','Some errors may still remain undetected','It proves all assets exist physically'],2,'Errors such as complete omission or an error of principle may not disturb agreement.'],
    [2,'The cash book shows a favourable balance. A cheque issued but not yet presented usually means the passbook balance is:',['Higher than the cash-book balance','Lower than the cash-book balance','Exactly the same','Always an overdraft'],0,'The cash book already records the payment; the bank has not yet recorded it.'],
    [2,'Bank charges of ₹450 appear in the passbook but not the cash book. To reconcile from the cash-book balance, the charges should be:',['Added','Deducted','Ignored permanently','Added to capital'],1,'The bank has reduced the bank balance, so deduct the charges in the cash-book reconciliation.'],
    [2,'A deposit recorded in the cash book has not yet been credited by the bank. Starting with a favourable cash-book balance, deduct it to find the:',['Passbook balance','Closing inventory','Petty cash balance','Trial balance total'],0,'Until credited, the passbook balance is lower by the deposit in transit.'],
    [3,'Inventory is generally measured at:',['Cost only','Net realisable value only','Lower of cost and net realisable value','Higher of cost and net realisable value'],2,'The lower-of-cost-and-NRV rule prevents inventory from being overstated.'],
    [3,'When purchase prices are rising, FIFO generally leaves closing inventory containing:',['The oldest cost layers','The newest cost layers','Only damaged goods','No purchase cost'],1,'FIFO issues older layers first, leaving more recent purchases in closing inventory.'],
    [3,'Opening inventory is ₹32,000, net purchases ₹1,28,000 and closing inventory ₹40,000. Cost of goods sold is:',['₹1,20,000','₹1,60,000','₹1,68,000','₹2,00,000'],0,'₹32,000 + ₹1,28,000 − ₹40,000 = ₹1,20,000.'],
    [4,'A machine costs ₹2,10,000, has residual value ₹30,000 and a 6-year useful life. Annual straight-line depreciation is:',['₹25,000','₹30,000','₹35,000','₹40,000'],1,'(₹2,10,000 − ₹30,000) ÷ 6 = ₹30,000.'],
    [4,'A machine with a written-down value of ₹80,000 is depreciated at 10% under the diminishing-balance method. Depreciation for the year is:',['₹800','₹8,000','₹10,000','₹72,000'],1,'₹80,000 × 10% = ₹8,000.'],
    [5,'A bill of exchange becomes accepted when the drawee:',['Signs assent to the order','Pays the drawer before issue','Registers the bill with a court','Transfers it to the bank'],0,'The drawee signifies assent by acceptance and becomes the acceptor.'],
    [5,'A bill for ₹24,000 is discounted by a bank for ₹600. The drawer receives:',['₹600','₹23,400','₹24,000','₹24,600'],1,'Cash received equals the bill amount less bank discount: ₹23,400.'],
    [6,'Closing inventory appearing outside the trial balance is normally shown:',['Only as a liability','As an asset in the balance sheet and credited to trading account','Only as a capital receipt','As a debit to purchases'],1,'The adjustment affects both trading account and the balance sheet.'],
    [6,'Wages of ₹3,500 are outstanding at year-end. The adjustment is:',['Debit wages and credit outstanding wages','Credit wages and debit cash','Debit capital and credit wages','No entry until payment'],0,'Recognise the expense in the period and a current liability.'],
    [8,'Under incomplete records, opening capital is commonly determined by preparing a:',['Bank reconciliation statement','Statement of affairs','Cash-flow statement','Stock exchange return'],1,'A statement of affairs estimates assets and liabilities to derive capital.'],
    [9,'A partner withdraws ₹12,000 on 1 October. Interest on drawings at 10% p.a. for six months is:',['₹300','₹600','₹1,200','₹6,000'],1,'₹12,000 × 10% × 6/12 = ₹600.'],
    [9,'In the absence of an agreement to the contrary, a partner is entitled to remuneration for work done for the firm:',['Always','Only if the other partners agree','No, not merely by being a partner','At the minimum-wage rate'],2,'A partner is not automatically entitled to remuneration under the default rule.'],
    [10,'A company issues 1,000 shares of ₹10 each at par. Share capital credited is:',['₹1,000','₹10,000','₹11,000','₹100,000'],1,'1,000 shares × ₹10 face value = ₹10,000.'],
    [10,'A company receives ₹50,000 application money for shares and later allots the shares. The application money is first recorded as:',['Share application money received','Sales revenue','Debenture interest','A bank overdraft'],0,'Receipt is initially credited to share application money pending allotment.']
  ];

  const law = [
    [0,'The Institute of Chartered Accountants of India was established under the:',['Companies Act, 2013','Chartered Accountants Act, 1949','Indian Contract Act, 1872','Negotiable Instruments Act, 1881'],1,'ICAI is a statutory body established under the Chartered Accountants Act, 1949.'],
    [0,'A rule made under authority delegated by an Act is an example of:',['Delegated legislation','A private contract','A judicial precedent only','A constitutional convention'],0,'Rules made under powers delegated by the legislature are delegated legislation.'],
    [0,'A law is generally distinguished from a moral preference because law is:',['Enforced by recognised public authority','Always written by a company','Never subject to interpretation','Applicable only when accepted by contract'],0,'Legal rules are backed by recognised state authority and enforcement.'],
    [1,'An acceptance that changes the terms of an offer is generally treated as:',['An unconditional acceptance','A counter-offer','A completed contract','A past consideration'],1,'A counter-offer rejects the original offer and proposes different terms.'],
    [1,'For a valid acceptance under the Contract Act, it must generally be:',['Absolute and unqualified','Kept secret by the acceptor','Different from the proposal','Made only before a witness'],0,'Acceptance must be absolute and unqualified.'],
    [1,'A person competent to contract must generally be of majority age, of sound mind and:',['Not disqualified by law','A company director','A government employee','A property owner'],0,'The Act also requires that the person is not disqualified from contracting by law.'],
    [1,'An agreement with a minor is generally:',['Void ab initio','Valid if notarised','Voidable only by the seller','Enforceable after one month'],0,'A minor’s agreement is void from the beginning.'],
    [1,'Under Indian contract law, consideration may move from:',['Only the promisee','The promisee or any other person','Only the promisor','Only a close relative'],1,'Indian law permits consideration to move from the promisee or another person.'],
    [1,'Threatening to commit an act forbidden by the criminal law to obtain consent is an example of:',['Coercion','Undue influence in every case','Misrepresentation','Novation'],0,'Coercion includes committing or threatening an act forbidden by the relevant criminal law to cause a person to enter an agreement.'],
    [1,'Where one party can dominate another’s will and uses that position to obtain an unfair advantage, the issue is:',['Undue influence','Assignment','Remission','Contingent consideration'],0,'This describes the central idea of undue influence.'],
    [2,'A stipulation essential to the main purpose of a contract of sale is a:',['Condition','Warranty','Consignment','Promissory note'],0,'A condition is essential to the main purpose; breach can permit repudiation, subject to the Act.'],
    [2,'A stipulation collateral to the main purpose of a sale contract is a:',['Condition','Warranty','Proposal','Lien'],1,'A warranty is collateral to the main purpose of the contract.'],
    [2,'An unpaid seller may have a right of stoppage in transit when the buyer becomes:',['Insolvent','A minor after sale','A partner of the seller','A secured creditor'],0,'Stoppage in transit is available when the buyer becomes insolvent and goods remain in transit.'],
    [2,'For specific goods in a deliverable state, property generally passes when:',['The parties intend it to pass','The goods are advertised','The buyer resells them','The seller issues a reminder'],0,'The parties’ intention governs, subject to the statutory rules.'],
    [3,'The mutual agency relationship in partnership means each partner may, within authority, act as:',['An agent of the firm and other partners','A creditor of every customer','A separate company','A trustee for the government'],0,'A partner is an agent of the firm for its business.'],
    [3,'Sharing profits is:',['Conclusive proof of partnership in every case','Relevant but not by itself conclusive proof of partnership','Never relevant','The same as share capital'],1,'Profit sharing is evidence, but the full relationship and mutual agency must be considered.'],
    [3,'Partners are generally liable for firm acts done while they are partners:',['Jointly and severally','Only up to their capital contribution in all cases','Only if they signed each invoice','Not at all'],0,'The Partnership Act generally imposes joint and several liability for acts of the firm.'],
    [4,'A Limited Liability Partnership is:',['A separate legal entity from its partners','The same legal person as every partner','A sole proprietorship','A temporary contract with no legal status'],0,'An LLP is a body corporate and separate legal entity.'],
    [4,'An LLP partner is an agent of:',['The LLP, but not of the other partners','Every other partner personally','The Registrar only','Its creditors'],0,'A partner is an agent of the LLP, not of the other partners.'],
    [5,'A company incorporated under company law has:',['A legal identity separate from its members','No identity separate from its shareholders','A life ending whenever a member leaves','Only contractual rights, not legal status'],0,'Separate legal personality distinguishes the company from its members.'],
    [5,'The memorandum of association primarily sets out:',['The company’s constitution and scope','Each employee’s monthly salary','The auditor’s personal assets','The company’s daily cash book'],0,'The memorandum defines the company’s constitutional framework and permitted scope.'],
    [5,'A private company under the Companies Act, 2013 must generally have at least:',['One member','Two members','Seven members','Fifty members'],1,'A private company ordinarily has a minimum of two members, subject to statutory exceptions.'],
    [6,'A cheque is a bill of exchange drawn on a specified banker and:',['Payable on demand','Payable only after three years','Always payable to bearer only','Not transferable'],0,'A cheque is payable on demand and drawn on a specified banker.'],
    [6,'An endorsement of a negotiable instrument is generally made by:',['Signing it for the purpose of negotiation','Destroying the instrument','Changing the amount without signature','Depositing it as inventory'],0,'Endorsement is signing for the purpose of negotiation, subject to statutory requirements.'],
    [6,'A holder in due course must acquire the instrument for consideration, before it is overdue, and:',['Without sufficient cause to believe the transferor’s title is defective','Only as a gift','After maturity in every case','Without taking possession'],0,'These are core statutory elements of holder-in-due-course status.']
  ];

  const qa = [
    [0,'Simplify the ratio 42:56.',['2:3','3:4','4:5','6:7'],1,'Divide both terms by their highest common factor, 14: 42:56 = 3:4.'],
    [1,'Solve 5x − 7 = 18.',['3','4','5','6'],2,'5x = 25, so x = 5.'],
    [2,'Solve 4x + 3 > 19.',['x > 4','x < 4','x > 5','x < 5'],0,'4x > 16, so x > 4.'],
    [3,'₹12,000 is invested at 5% compound interest annually for 2 years. The amount is:',['₹12,600','₹13,200','₹13,230','₹13,500'],2,'₹12,000 × 1.05² = ₹13,230.'],
    [4,'How many arrangements of 2 different letters can be made from 6 distinct letters?',['12','15','30','36'],2,'6P2 = 6 × 5 = 30.'],
    [5,'An arithmetic progression has first term 7 and common difference 4. Its 9th term is:',['35','39','43','47'],1,'a₉ = 7 + 8 × 4 = 39.'],
    [6,'If |A| = 18, |B| = 14 and |A ∩ B| = 5, then |A ∪ B| is:',['27','32','37','9'],0,'|A ∪ B| = |A| + |B| − |A ∩ B| = 18 + 14 − 5 = 27.'],
    [7,'If f(x)=x³, then f′(2) is:',['6','8','12','16'],2,'f′(x)=3x², so f′(2)=12.'],
    [8,'Find the next term: 3, 8, 15, 24, 35, __.',['42','46','48','50'],2,'The differences are 5, 7, 9, 11; next difference is 13, giving 48.'],
    [9,'A person walks 6 km north and then 8 km east. Their straight-line distance from the starting point is:',['10 km','12 km','14 km','2 km'],0,'By Pythagoras, √(6²+8²)=10 km.'],
    [10,'In how many ways can 5 distinct students sit in a row?',['25','60','100','120'],3,'There are 5! = 120 arrangements.'],
    [11,'A is B’s mother. C is B’s brother. How is A related to C?',['Mother','Sister','Aunt','Daughter'],0,'A is the mother of B and therefore also the mother of B’s brother C.'],
    [12,'A subset selected from a population to represent it is called a:',['Census','Sample','Parameter','Frequency'],1,'A sample is a selected subset used to study a population.'],
    [13,'The arithmetic mean of 5, 7, 10 and 18 is:',['9','10','11','12'],1,'The sum is 40; 40 ÷ 4 = 10.'],
    [14,'A bag has 3 red and 5 blue balls. The probability of drawing a red ball is:',['3/5','5/8','3/8','1/3'],2,'There are 3 favourable outcomes among 8 equally likely balls.'],
    [15,'A binomial experiment has 4 trials and success probability 1/2. Probability of exactly 4 successes is:',['1/4','1/8','1/16','1/2'],2,'P(X=4) = (1/2)^4 = 1/16.'],
    [16,'The coefficient of correlation must lie between:',['0 and 1 only','−1 and +1','−∞ and +∞','−100 and +100'],1,'The correlation coefficient r lies in the closed interval [−1,+1].'],
    [17,'In a simple price index, base-year price is ₹20 and current-year price is ₹25. The price relative is:',['80','100','125','145'],2,'Price relative = (25 ÷ 20) × 100 = 125.'],
    [0,'If a:b = 5:7 and a+b=72, then a is:',['25','30','35','42'],1,'There are 12 equal parts; each is 6, so a=5×6=30.'],
    [3,'The present value of ₹1,210 due in 2 years at 10% compound discount is:',['₹900','₹1,000','₹1,100','₹1,210'],1,'PV = 1,210 ÷ 1.1² = ₹1,000.'],
    [6,'If A={1,2,3} and B={3,4}, then A∩B is:',['{1,2}','{3}','{1,2,3,4}','{4}'],1,'The only element common to both sets is 3.'],
    [7,'For y=4x²−3x, dy/dx at x=2 is:',['5','8','13','16'],2,'dy/dx=8x−3; at x=2, the value is 13.'],
    [12,'A census differs from sampling because a census collects data from:',['Every unit in the population','Only the largest units','A random half only','One time period only'],0,'A census attempts to enumerate every unit of the population.'],
    [13,'The median of 2, 4, 7, 9, 12 is:',['4','7','8','9'],1,'The middle observation in the ordered list is 7.'],
    [17,'A weighted price index uses weights to reflect:',['The relative importance of items','Only the highest price','Only current-year quantities','The number of sellers'],0,'Weights reflect the relative importance of the commodities included.']
  ];

  const economics = [
    [0,'The central economic problem arises mainly because:',['Resources are scarce relative to wants','All wants are already satisfied','Resources have no alternative uses','Prices are always fixed'],0,'Scarcity and competing wants require choices and allocation.'],
    [0,'The opportunity cost of choosing one option is:',['The value of the next best alternative forgone','Every cost already paid','The selling price only','The sum of all possible alternatives'],0,'Opportunity cost is the value of the best alternative sacrificed.'],
    [1,'Other things being equal, a rise in a good’s own price usually causes:',['A contraction in quantity demanded','A rightward shift of demand','An increase in supply','No movement on the demand curve'],0,'A change in own price causes movement along the demand curve.'],
    [1,'If price elasticity of demand is 1.5 in absolute value, demand is:',['Elastic','Inelastic','Perfectly inelastic','Unitary elastic'],0,'An absolute elasticity greater than one is elastic demand.'],
    [1,'A rise in consumer income that increases demand for a normal good shifts its demand curve:',['Rightward','Leftward','Vertically downward only','Nowhere'],0,'Higher income generally raises demand for a normal good.'],
    [2,'The law of diminishing marginal returns applies when:',['More variable input is added to fixed inputs in the short run','All inputs are increased proportionately','No input can change','A firm is always loss-making'],0,'It describes output changes as variable input rises while some inputs remain fixed.'],
    [2,'If total fixed cost is ₹4,000 at every output level, average fixed cost at 200 units is:',['₹10','₹20','₹200','₹4,000'],1,'Average fixed cost = ₹4,000 ÷ 200 = ₹20 per unit.'],
    [2,'Marginal cost is the change in:',['Total cost from producing one additional unit','Fixed cost when output is zero','Total revenue from a price change','Average revenue per seller'],0,'Marginal cost measures the addition to total cost from one more unit.'],
    [3,'An individual firm under perfect competition is generally a:',['Price taker','Price maker','Single seller','Price discriminator'],0,'The market sets price; each small firm accepts it.'],
    [3,'Product differentiation and many sellers are typical of:',['Monopolistic competition','Pure monopoly','Perfect competition only','Bilateral monopoly only'],0,'Monopolistic competition combines many sellers with differentiated products.'],
    [3,'In an oligopoly, a firm’s decisions are strongly affected by:',['The expected reactions of rival firms','Only its historical cost','The weather in every case','A single fixed market price'],0,'Strategic interdependence is a central feature of oligopoly.'],
    [3,'A monopolist practising price discrimination charges different prices for the same product based mainly on:',['Differences between buyer groups or market conditions','Identical marginal costs only','The same price to every buyer','The number of accountants employed'],0,'Price discrimination involves charging different prices where market conditions permit.'],
    [4,'A broad and sustained fall in economic activity is a feature of:',['Contraction','Peak','Expansion','Recovery'],0,'During contraction, aggregate activity declines.'],
    [4,'The highest turning point before a downturn in a business cycle is the:',['Peak','Trough','Recovery','Expansion'],0,'A peak is the upper turning point before contraction.'],
    [5,'Gross Domestic Product measures final output produced:',['Within the domestic territory during a period','Only by citizens overseas','Only by government enterprises','Only for export'],0,'GDP is based on production within domestic territory.'],
    [5,'If GDP at current prices is ₹660 crore and the GDP deflator is 110, GDP at base-year prices is:',['₹550 crore','₹600 crore','₹660 crore','₹726 crore'],1,'Real GDP = nominal GDP ÷ deflator × 100 = 660÷110×100 = ₹600 crore.'],
    [5,'National income at factor cost is commonly expressed as:',['NNP at factor cost','GDP at market price','NDP at market price only','Personal disposable income'],0,'NNP at factor cost is the traditional national income measure.'],
    [6,'A direct tax is one for which the legal burden is generally:',['Not shifted to another person','Always shifted fully to consumers','Paid only by importers','Paid only in cash'],0,'The incidence and impact are generally intended to fall on the same person.'],
    [6,'A progressive tax rate structure means that the average tax rate generally:',['Rises as the tax base rises','Falls to zero for every taxpayer','Stays fixed at one rate','Applies only to exports'],0,'Under a progressive structure, the average rate increases with the base.'],
    [7,'The Reserve Bank of India is India’s:',['Central bank','Stock exchange','Commercial bank association','Insurance regulator'],0,'RBI is the central bank and monetary authority of India.'],
    [7,'An increase in the cash reserve ratio generally reduces banks’ ability to:',['Lend a portion of their deposits','Accept deposits','Issue account statements','Hold government securities'],0,'A higher required reserve ratio leaves less deposit funding available for lending.'],
    [8,'Comparative advantage is based on lower:',['Opportunity cost','Absolute money price in every case','Population','Tax rate'],0,'Trade gains can arise when parties specialise according to relative opportunity cost.'],
    [8,'A tariff on imports is a:',['Tax on imported goods','Subsidy to foreign producers','Limit on domestic wages','Tax on all exports only'],0,'A tariff is a customs duty imposed on imports.'],
    [9,'The primary sector mainly includes activities such as:',['Agriculture and extraction','Banking and insurance','Software consulting','Retail trade only'],0,'Primary activities obtain or harvest natural resources.'],
    [9,'An increase in productive skills and education most directly improves:',['Human capital','Physical depreciation','The trade deficit automatically','The money supply'],0,'Education and skills are components of human capital.']
  ];

  const writtenAcc = [
    [6,'Prepare the adjusting entries for closing inventory of ₹36,000 and outstanding wages of ₹4,500, and state where each appears in the final accounts.','Closing inventory: debit Closing Inventory and credit Trading Account (or the prescribed closing-stock adjustment); show it as a current asset in the balance sheet. Outstanding wages: debit Wages and credit Outstanding Wages; include wages as an expense and the payable as a current liability.'],
    [8,'A trader has opening capital of ₹1,20,000, closing capital of ₹1,75,000, drawings of ₹24,000 and additional capital introduced of ₹15,000. Calculate profit for the year using the statement-of-affairs method.','Profit = closing capital + drawings − additional capital − opening capital = ₹1,75,000 + ₹24,000 − ₹15,000 − ₹1,20,000 = ₹64,000.'],
    [9,'A and B share profits 3:2. Profit before interest on capital is ₹1,00,000. The deed allows interest on capital of ₹12,000 to A and ₹8,000 to B. Show the appropriation.','Appropriate interest on capital of ₹20,000 first; remaining profit is ₹80,000. Divide ₹80,000 in 3:2: A ₹48,000 and B ₹32,000. Total allocations: A ₹60,000 and B ₹40,000.'],
    [7,'A club receives subscriptions of ₹72,000 during the year. Opening subscriptions outstanding are ₹5,000; closing outstanding ₹8,000; opening subscriptions received in advance ₹3,000; closing advance ₹2,000. Calculate subscription income.','Income = cash received + closing outstanding − opening outstanding − opening advance + closing advance = 72,000 + 8,000 − 5,000 − 3,000 + 2,000 = ₹74,000.'],
    [10,'A company issues 2,000 equity shares of ₹10 each at a premium of ₹2 per share, payable fully on application. Write the receipt entry and calculate the credit to share capital and securities premium.','Bank Dr ₹24,000; To Equity Share Capital ₹20,000; To Securities Premium ₹4,000. Share capital is credited with face value and securities premium with the excess.']
  ];

  const writtenLaw = [
    [1,'Explain the difference between a condition and a warranty under the Sale of Goods Act, and state the usual remedy for breach of each.','A condition is essential to the main purpose of the contract; breach usually permits repudiation and damages, subject to statutory exceptions. A warranty is collateral; breach ordinarily gives a claim for damages but not rejection of goods solely on that basis.'],
    [1,'A promises to sell a laptop to B for ₹30,000. B replies, “I accept if you include a printer.” Has B accepted the original offer? Explain.','No. B has added a new term, so the reply is a counter-offer rather than an absolute and unqualified acceptance. It generally rejects the original offer.'],
    [3,'State two features that distinguish a partnership from a company.','A partnership arises from agreement and is founded on mutual agency; partners generally have personal liability for firm acts. A company is incorporated, has separate legal personality and perpetual succession, and members’ liability is generally limited according to the Act and share structure.'],
    [4,'Explain the separate legal status of an LLP and the capacity in which an LLP partner acts.','An LLP is a separate legal entity from its partners. A partner is an agent of the LLP for its business, but is not merely by being a partner an agent of the other partners.'],
    [6,'Define a cheque and state what an endorsement does to a negotiable instrument.','A cheque is a bill of exchange drawn on a specified banker and payable on demand. An endorsement is a signature made for the purpose of negotiating the instrument, subject to the statutory rules.']
  ];

  return [
    ...make('acc','acc-',accounting), ...make('law','law-',law),
    ...make('qa','qa-',qa), ...make('eco','eco-',economics),
    ...written('acc','acc-w-',writtenAcc), ...written('law','law-w-',writtenLaw)
  ];
})();

/* Aethel generated practice variants: original drill questions, not ICAI papers. */
(function () {
  const bank = window.AETHEL_QUESTIONS || [];
  const rows = [];
  const people = ['Aarav','Diya','Kabir','Mira','Ishaan','Zoya','Rohan','Anaya','Dev','Sara','Neel','Tara'];
  const goods = ['books','furniture','a laptop','office supplies','a calculator','goods for resale','a printer','a study desk'];
  const fmt = n => Math.round(n).toLocaleString('en-IN');
  const cash = n => '₹' + fmt(n);
  function options(correct, wrong, seed) {
    const c = String(correct);
    const list = [c];
    for (const value of wrong) {
      const text = String(value);
      if (!list.includes(text)) list.push(text);
      if (list.length === 4) break;
    }
    let fallback = 1;
    while (list.length < 4) {
      const candidate = fallback++ === 1 ? 'None of the above choices' : 'More than one choice';
      if (!list.includes(candidate)) list.push(candidate);
    }
    const index = seed % 4;
    [list[0], list[index]] = [list[index], list[0]];
    return { o: list, a: index };
  }
  function add(subject, chapter, id, question, correct, wrong, explanation, seed) {
    const choice = options(correct, wrong, seed);
    rows.push({ id: id, s: subject, c: chapter, type: 'mcq', q: question, o: choice.o, a: choice.a, e: explanation });
  }
  function numeric(subject, chapter, id, question, answer, explanation, seed, suffix) {
    const delta = Math.max(1, Math.round(Math.abs(answer) * 0.1) || 1);
    const wrong = [answer + delta, answer - delta, answer + 2 * delta, answer - 2 * delta, answer * 2, answer + 3].filter(x => x !== answer).map(x => suffix === '₹' ? cash(x) : fmt(x));
    add(subject, chapter, id, question, suffix === '₹' ? cash(answer) : fmt(answer), wrong, explanation, seed);
  }
  function word(subject, chapter, id, question, answer, wrong, explanation, seed) {
    add(subject, chapter, id, question, answer, wrong, explanation, seed);
  }
  const generated = { acc: 0, law: 0, qa: 0, eco: 0 };

  for (let i = 0; i < 10000; i++) {
    const c = i % 11, v = Math.floor(i / 11), id = 'acc-gen-' + String(i + 1).padStart(5, '0');
    const p = people[v % people.length], buyer = people[(v + 5) % people.length], item = goods[v % goods.length];
    if (c === 0) {
      const amount = 500 + (v % 90) * 250;
      word('acc', c, id, p + ' pays a personal ' + item + ' bill of ' + cash(amount) + ' from the business bank account. How is the payment recorded?', 'Drawings of the proprietor', ['Business expense', 'Capital introduced', 'Purchase of inventory'], 'The owner’s personal payment is drawings; it is not a business expense.', i);
    } else if (c === 1) {
      const amount = 1200 + (v % 160) * 375;
      const entry = buyer + ' Dr; Sales Cr';
      word('acc', c, id, 'Goods for resale worth ' + cash(amount) + ' are sold on credit to ' + buyer + '. Which entry records the sale?', entry, ['Sales Dr; ' + buyer + ' Cr', 'Cash Dr; Sales Cr', 'Purchases Dr; ' + buyer + ' Cr'], 'A credit customer is debited and Sales is credited.', i);
    } else if (c === 2) {
      const balance = 18000 + (v % 200) * 500, amount = 500 + (v % 30) * 100;
      const issued = v % 2 === 0;
      const result = balance + (issued ? amount : -amount);
      numeric('acc', c, id, 'The favourable cash-book balance is ' + cash(balance) + '. A cheque of ' + cash(amount) + ' ' + (issued ? 'issued has not yet been presented' : 'deposited has not yet been credited by the bank') + '. What is the passbook balance, ignoring other items?', result, issued ? 'The cash book already records the issued cheque; until presentation the passbook remains higher by that amount.' : 'The cash book records the deposit first; until the bank credits it the passbook is lower by that amount.', i, '₹');
    } else if (c === 3) {
      const cost = 8000 + (v % 80) * 500, nrv = cost + ((v % 7) - 3) * 250;
      const value = Math.min(cost, nrv);
      numeric('acc', c, id, 'Inventory has a cost of ' + cash(cost) + ' and a net realisable value of ' + cash(nrv) + '. At what amount is it generally valued?', value, 'Inventory is measured at the lower of cost and net realisable value.', i, '₹');
    } else if (c === 4) {
      const life = [4,5,8,10][v % 4], cost = 20000 + (v % 40) * 5000, residual = Math.floor((cost / 10) / 1000) * 1000;
      const dep = (cost - residual) / life;
      numeric('acc', c, id, 'A machine costs ' + cash(cost) + ', has residual value ' + cash(residual) + ' and a useful life of ' + life + ' years. Find annual straight-line depreciation.', dep, 'Annual depreciation = (cost − residual value) ÷ useful life.', i, '₹');
    } else if (c === 5) {
      word('acc', c, id, 'A bill of exchange is drawn by ' + p + ' on ' + buyer + '. Which party is directed to pay the amount?', buyer + ' · the drawee', [p + ' · the drawer', 'The payee only', 'The bank in every case'], 'The drawee is the person on whom the bill is drawn and who is directed to pay.', i);
    } else if (c === 6) {
      const sales = 150000 + (v % 120) * 2500, opening = 6000 + (v % 20) * 500, purchases = 12000 + (v % 60) * 1500, closing = 5000 + (v % 30) * 500;
      const gp = sales - (opening + purchases - closing);
      numeric('acc', c, id, 'Sales are ' + cash(sales) + ', opening inventory ' + cash(opening) + ', purchases ' + cash(purchases) + ' and closing inventory ' + cash(closing) + '. Calculate gross profit.', gp, 'Cost of goods sold = opening inventory + purchases − closing inventory; gross profit = sales − cost of goods sold.', i, '₹');
    } else if (c === 7) {
      const received = 30000 + (v % 150) * 1000, openDue = 500 + (v % 12) * 250, closeDue = 1000 + (v % 16) * 250, openAdv = 500 + (v % 8) * 250, closeAdv = 500 + (v % 10) * 250;
      const income = received + closeDue - openDue + openAdv - closeAdv;
      numeric('acc', c, id, 'A club receives subscriptions of ' + cash(received) + '. Opening outstanding: ' + cash(openDue) + '; closing outstanding: ' + cash(closeDue) + '; opening advance: ' + cash(openAdv) + '; closing advance: ' + cash(closeAdv) + '. Find subscription income.', income, 'Income = cash received + closing outstanding − opening outstanding + opening advance − closing advance.', i, '₹');
    } else if (c === 8) {
      const opening = 50000 + (v % 80) * 2500, closing = opening + 5000 + (v % 50) * 2000, drawings = 3000 + (v % 24) * 500, introduced = 2000 + (v % 8) * 500;
      const profit = closing + drawings - introduced - opening;
      numeric('acc', c, id, 'Opening capital is ' + cash(opening) + ', closing capital ' + cash(closing) + ', drawings ' + cash(drawings) + ' and additional capital introduced ' + cash(introduced) + '. Using the statement-of-affairs method, find profit.', profit, 'Profit = closing capital + drawings − additional capital introduced − opening capital.', i, '₹');
    } else if (c === 9) {
      const a = 2 + (v % 5), b = 2 + ((v + 2) % 5), total = (a + b) * (1000 + (v % 40) * 250);
      const share = total * a / (a + b);
      numeric('acc', c, id, p + ' and ' + buyer + ' share profit in the ratio ' + a + ':' + b + '. If profit is ' + cash(total) + ', what is ' + p + '’s share?', share, 'Divide total profit in the agreed ratio: total × ' + a + ' ÷ (' + a + ' + ' + b + ').', i, '₹');
    } else {
      const shares = 100 + (v % 90) * 50, premium = 1 + (v % 12);
      numeric('acc', c, id, 'A company issues ' + fmt(shares) + ' shares at a premium of ' + cash(premium) + ' per share. What amount is credited to Securities Premium?', shares * premium, 'Securities Premium is the premium per share multiplied by the number of shares issued.', i, '₹');
    }
    generated.acc++;
  }

  const lawNames = ['Riya','Arun','Meera','Kabir','Nisha','Dev','Asha','Imran','Tara','Neel','Zoya','Rohan'];
  const articles = ['a laptop','a set of books','a calculator','a study desk','a printer','office equipment','a bicycle','a camera'];
  for (let i = 0; i < 10000; i++) {
    const c = i % 7, v = Math.floor(i / 7), id = 'law-gen-' + String(i + 1).padStart(5, '0');
    const A = lawNames[v % lawNames.length], B = lawNames[(v + 4) % lawNames.length], item = articles[v % articles.length], amount = 2000 + v * 250;
    if (c === 0) {
      const mode = v % 3;
      if (mode === 0) word('law',c,id,A+' and '+B+' review a contract for '+item+' worth '+cash(amount)+'. Which source of Indian law is the Indian Contract Act, 1872?','A statute enacted by Parliament',['A private contract between traders','A judgment made by a local business','A rule made by an individual company'],'The Act is central legislation enacted by Parliament.',i);
      else if (mode === 1) word('law',c,id,'Which institution interprets and applies legislation when '+A+' and '+B+' dispute a contract concerning '+item+' valued at '+cash(amount)+'?','The courts',['A private auditor','A trade association acting alone','A company’s board in every dispute'],'Courts interpret and apply legislation when deciding legal disputes.',i);
      else word('law',c,id,A+' and '+B+' are preparing documents for an entity that will own '+item+' worth '+cash(amount)+'. Which subject does the Companies Act, 2013 primarily govern?','Companies incorporated under the Act',['Every personal loan between individuals','Only the sale of movable goods','Only partnership firms'],'The Companies Act provides the statutory framework for companies.',i);
    } else if (c === 1) {
      const mode = v % 4;
      if (mode === 0) word('law',c,id,A+' offers to sell '+item+' to '+B+' for '+cash(amount)+'. '+B+' replies, “I accept only if you deliver within '+(2+v%20)+' days.” What is the reply?','A counter-offer, not an unconditional acceptance',['An absolute acceptance of the original offer','A completed performance of the contract','A valid acceptance that cannot change the terms'],'Acceptance must be absolute and unqualified; adding a new term is ordinarily a counter-offer.',i);
      else if (mode === 1) word('law',c,id,A+' is a minor and agrees to buy '+item+' for '+cash(amount)+'. What is the general status of the agreement under the Indian Contract Act?','Void ab initio',['A valid contract enforceable personally against the minor','A contract that becomes valid automatically at majority','A contract enforceable only by the seller’s friends'],'A minor is not competent to contract; an agreement with a minor is generally void from the beginning.',i);
      else if (mode === 2) word('law',c,id,A+' threatens to commit an unlawful act unless '+B+' signs an agreement for '+cash(amount)+'. Which factor most directly affects free consent?','Coercion',['A mistake in arithmetic only','A lawful offer','A completed sale of goods'],'Consent obtained by committing or threatening an act forbidden by law can amount to coercion.',i);
      else word('law',c,id,A+' promises to pay '+B+' '+cash(amount)+' if '+B+' delivers '+item+'. Which element is shown by the promised delivery?','Consideration moving at the promisor’s desire',['A court decree','A negotiable instrument in every case','A guarantee by a third person'],'Consideration must be at the desire of the promisor and may consist of an act, abstinence or promise.',i);
    } else if (c === 2) {
      const mode = v % 3;
      if (mode === 0) word('law',c,id,A+' sells '+item+' to '+B+' for '+cash(amount)+'. A term essential to the main purpose of that sale is breached. That term is most likely a:','Condition',['Warranty','Trade usage only','Bill of exchange'],'A condition is essential to the main purpose of the contract; statutory exceptions can affect the remedy.',i);
      else if (mode === 1) word('law',c,id,A+' freely chooses '+item+' from '+B+' after inspecting it, with no seller misrepresentation. Which general rule places responsibility on the buyer to examine suitability, subject to statutory exceptions?','Caveat emptor',['Mutual agency','Separate legal personality','Holder in due course'],'Caveat emptor means let the buyer beware, subject to recognised exceptions in the Act.',i);
      else word('law',c,id,A+' has not received '+cash(amount)+' from buyer '+B+' and still possesses the sold goods. Which right may allow the unpaid seller to retain possession, subject to the Act?','Right of lien',['Right to create a company','Right to convert the sale into a partnership','Right to endorse every cheque'],'An unpaid seller in possession may have a lien over the goods in the circumstances set out by the Act.',i);
    } else if (c === 3) {
      const mode = v % 3;
      if (mode === 0) word('law',c,id,A+' and '+B+' are partners running a business that sells '+item+'. In ordinary firm business, which principle explains why each partner can bind the firm as its agent?','Mutual agency',['Separate legal personality of a company','Limited liability of every partner in every partnership','Transfer of shares by endorsement'],'Mutual agency is the defining relationship: each partner is an agent of the firm for its business.',i);
      else if (mode === 1) word('law',c,id,A+' and '+B+' agree to share profits from selling '+item+' worth '+cash(amount)+'. Which additional feature is central to deciding whether their relationship is a partnership?','Mutual agency',['Using the same office address','Having equal capital contributions in every case','Registering a private company'],'Profit sharing alone is not conclusive; the real relationship and mutual agency are central.',i);
      else word('law',c,id,A+' is a partner in an unregistered firm with '+B+'. If '+A+' sues to enforce a contractual right against the firm over a transaction worth '+cash(amount)+', which statement is generally correct, subject to statutory exceptions?','Certain suits to enforce contractual rights are barred',['All contracts of the firm automatically become criminal','The firm automatically becomes a company','The partner loses ownership of personal property'],'Non-registration has specified consequences, including restrictions on suits to enforce contractual rights.',i);
    } else if (c === 4) {
      const mode = v % 3;
      if (mode === 0) word('law',c,id,A+' and '+B+' register an LLP to provide services involving '+item+'. What legal status does the LLP have?','A body corporate and separate legal entity from its partners',['A branch of every partner’s personal estate','A partnership with no separate identity','A company whose shares must be publicly traded'],'An LLP is a body corporate with a legal identity separate from its partners.',i);
      else if (mode === 1) word('law',c,id,'For an LLP transaction involving '+item+' worth '+cash(amount)+', a partner is generally an agent of whom?','The LLP, but not of the other partners merely because they are partners',['Each other partner personally in every matter','The Registrar of Companies','Every customer of the LLP'],'An LLP partner is an agent of the LLP for its business, not an agent of the other partners.',i);
      else word('law',c,id,A+' and '+B+' are partners in an LLP. If '+B+' independently commits a wrongful act in LLP business, which statement about '+A+'’s liability is generally accurate?','A is not personally liable solely for another partner’s independent wrongful act',['A is automatically liable for every act of every partner','The LLP ceases to have separate legal status','A must pay all LLP debts from personal funds in every case'],'The LLP structure generally separates a partner’s liability from another partner’s independent wrongful act, subject to statutory exceptions.',i);
    } else if (c === 5) {
      const mode = v % 3;
      if (mode === 0) word('law',c,id,A+' and '+B+' incorporate a company to trade in '+item+' worth '+cash(amount)+'. Which statement about the company and its members is correct?','The company has a legal personality separate from its members',['The company and every member are always the same legal person','The company ends whenever one member leaves','The company has no capacity to own property'],'Incorporation creates a separate legal person with perpetual succession, subject to the Act.',i);
      else if (mode === 1) word('law',c,id,A+' and '+B+' are incorporating a company that will trade in '+item+'. Which constitutional document states fundamental matters such as the company’s objects?','Memorandum of Association',['Cash book','Bill of exchange','Partnership deed in every company'],'The Memorandum of Association sets out fundamental matters including the company’s objects, subject to the Act.',i);
      else word('law',c,id,A+' and '+B+' are reviewing internal governance rules for their company after a purchase of '+item+' worth '+cash(amount)+'. Which company document primarily contains those rules?','Articles of Association',['A bank reconciliation statement','A purchase invoice','A promissory note'],'The Articles of Association contain regulations for the company’s internal management, subject to the Act.',i);
    } else {
      const mode = v % 3;
      if (mode === 0) word('law',c,id,A+' receives a negotiable instrument for consideration, before maturity, and without notice of a defect in title. The holder may qualify as a:','Holder in due course',['Drawee in every case','Company member','Unpaid seller'],'These are core statutory elements of holder-in-due-course status; other requirements in the Act also apply.',i);
      else if (mode === 1) word('law',c,id,A+' draws a cheque for '+cash(amount)+' in favour of '+B+'. Under the Negotiable Instruments Act, when is a cheque generally payable?','On demand',['Only after six months','Only after a court order','Only when endorsed by the drawer twice'],'A cheque is a bill of exchange drawn on a specified banker and payable on demand.',i);
      else word('law',c,id,A+' signs a negotiable instrument for '+cash(amount)+' to transfer it to '+B+'. What is that signature called?','An endorsement',['A depreciation entry','A condition of sale','A subscription receipt'],'An endorsement is a signature made for the purpose of negotiating an instrument, subject to statutory rules.',i);
    }
    generated.law++;
  }

  const qaChapters = 18;
  const factorial = n => { let x = 1; for (let j = 2; j <= n; j++) x *= j; return x; };
  const shiftWord = (text, shift) => text.split('').map(ch => String.fromCharCode(65 + (ch.charCodeAt(0) - 65 + shift + 26) % 26)).join('');
  const codeWords = ['CAT','MATH','BOOK','LAW','EXAM','BUS'];
  for (let i = 0; i < 10000; i++) {
    const c = i % qaChapters, v = Math.floor(i / qaChapters), id = 'qa-gen-' + String(i + 1).padStart(5, '0');
    if (c === 0) {
      const a = 2 + v % 8, b = 2 + (v * 3) % 7, unit = 5 + v % 36, total = (a + b) * unit, answer = a * unit;
      numeric('qa',c,id,'A sum of '+fmt(total)+' is divided in the ratio '+a+':'+b+'. What is the first share?',answer,'The first share is total × first ratio term ÷ sum of ratio terms.',i,'');
    } else if (c === 1) {
      const x = 2 + v % 70, coef = 2 + v % 5, shift = v % 21 - 10, target = coef * x + shift;
      numeric('qa',c,id,'Solve '+coef+'x '+(shift < 0 ? '− '+Math.abs(shift) : '+ '+shift)+' = '+target+'.',x,'Isolate x: add or subtract the constant, then divide by the coefficient.',i,'');
    } else if (c === 2) {
      const bound = 2 + v % 100;
      numeric('qa',c,id,'If x > '+bound+' and x is an integer, what is the least possible value of x?',bound + 1,'The least integer strictly greater than '+bound+' is '+(bound + 1)+'.',i,'');
    } else if (c === 3) {
      const principal = 1000 * (1 + v % 80), rate = 5 + (v % 8) * 2.5, years = 1 + v % 5;
      const si = principal * rate * years / 100;
      numeric('qa',c,id,'Find the simple interest on '+cash(principal)+' at '+rate+'% per year for '+years+' years.',si,'Simple interest = principal × rate × time ÷ 100.',i,'₹');
    } else if (c === 4) {
      const n = 6 + v % 15, count = n * (n - 1) * (n - 2) / 6;
      numeric('qa',c,id,'How many ways can 3 students be selected from '+n+' students?',count,'Use combinations: nC3 = n(n−1)(n−2) ÷ 6.',i,'');
    } else if (c === 5) {
      const first = 2 + v % 50, diff = 2 + v % 15, term = 5 + v % 30, answer = first + (term - 1) * diff;
      numeric('qa',c,id,'An arithmetic progression starts at '+first+' and has common difference '+diff+'. What is its '+term+'th term?',answer,'The nth term of an AP is a + (n−1)d.',i,'');
    } else if (c === 6) {
      const a = 30 + v % 400, b = 25 + (v * 3) % 350, overlap = 5 + v % Math.min(a,b);
      numeric('qa',c,id,'In a survey, '+a+' people are in set A, '+b+' are in set B, and '+overlap+' are in both. How many are in A ∪ B?',a+b-overlap,'For two sets, n(A ∪ B) = n(A) + n(B) − n(A ∩ B).',i,'');
    } else if (c === 7) {
      const a = 1 + v % 12, b = v % 30, x = 1 + v % 20, derivative = 2 * a * x + b;
      numeric('qa',c,id,'For f(x) = '+a+'x² + '+b+'x, find f′('+x+').',derivative,'Differentiate term by term: f′(x) = 2ax + b.',i,'');
    } else if (c === 8) {
      const w = codeWords[v % codeWords.length], k = 1 + v % 5, answer = shiftWord(w,k);
      word('qa',c,id,'In a code, each letter is moved '+k+' place'+(k===1?'':'s')+' forward in the alphabet (wrapping after Z). How is '+w+' coded?',answer,[shiftWord(w,k+1),shiftWord(w,k-1),shiftWord(w,k+2)],'Move each letter forward by the stated number of positions, wrapping from Z to A.',i);
    } else if (c === 9) {
      const unit = 1 + v % 30, east = 3 * unit, north = 4 * unit;
      numeric('qa',c,id,'A student walks '+east+' m east and then '+north+' m north. What is the straight-line distance from the starting point?',5*unit,'The route forms a right triangle; distance = √(east² + north²), using the 3:4:5 ratio.',i,'');
    } else if (c === 10) {
      const n = 3 + v % 7, count = factorial(n);
      numeric('qa',c,id,'In how many ways can '+n+' distinct students be seated in a row?',count,'The number of linear arrangements of n distinct objects is n!.',i,'');
    } else if (c === 11) {
      word('qa',c,id,'A is the mother of B. B is the brother of C. How is A related to C?','Mother',['Aunt','Sister','Grandmother'],'B and C are siblings, so B’s mother A is also C’s mother.',i);
    } else if (c === 12) {
      const low = 10 + v % 150, span = 5 + v % 80, high = low + span;
      numeric('qa',c,id,'A sample has a highest observation of '+high+' and a lowest observation of '+low+'. Find its range.',span,'Range = maximum observation − minimum observation.',i,'');
    } else if (c === 13) {
      const mean = 20 + v % 100, a = mean - (v % 10), b = mean + ((v * 3) % 10), d = 3 * mean - a - b;
      
      numeric('qa',c,id,'Find the arithmetic mean of '+a+', '+b+' and '+d+'.',mean,'Arithmetic mean = sum of observations ÷ number of observations.',i,'');
    } else if (c === 14) {
      const total = 10 + v % 90, favourable = 1 + v % (total - 1), divisor = (function(a,b){while(b){const t=b;b=a%b;a=t}return a})(favourable,total);
      const numerator = favourable/divisor, denominator = total/divisor;
      word('qa',c,id,'An event has '+favourable+' favourable outcomes among '+total+' equally likely outcomes. What is its probability in simplest form?',numerator+'/'+denominator,[Math.min(1,numerator+1)+'/'+denominator,numerator+'/'+(denominator+1),(denominator-numerator)+'/'+denominator],'Probability = favourable outcomes ÷ total equally likely outcomes, then simplify.',i);
    } else if (c === 15) {
      const trials = 5 + v % 40, probability = (1 + v % 9) / 10, expected = trials * probability;
      numeric('qa',c,id,'A binomial experiment has '+trials+' trials and success probability '+probability.toFixed(1)+'. What is the expected number of successes?',expected,'For a binomial distribution, the mean is n × p.',i,'');
    } else if (c === 16) {
      const mode = v % 2;
      word('qa',c,id,mode===0?'As advertising expenditure rises and sales also tend to rise, what type of correlation is suggested?':'As the price of a product rises and its quantity demanded tends to fall, what type of correlation is suggested?',mode===0?'Positive correlation':'Negative correlation',['Zero correlation','Perfect causation in every observation','No relationship can ever exist'],'The direction is positive when both variables tend to move together, and negative when they tend to move oppositely.',i);
    } else {
      const base = 40 + v % 300, current = base * (100 + v % 80) / 100, index = current / base * 100;
      numeric('qa',c,id,'The price of a basket rises from '+cash(base)+' to '+cash(current)+'. Using the simple price-relative formula, calculate the index number (base = 100).',index,'Price index = current-period price ÷ base-period price × 100.',i,'');
    }
    generated.qa++;
  }

  const ecoChapters = 10;
  for (let i = 0; i < 10000; i++) {
    const c = i % ecoChapters, v = Math.floor(i / ecoChapters), id = 'eco-gen-' + String(i + 1).padStart(5, '0');
    if (c === 0) {
      const mode = v % 2;
      word('eco',c,id,mode===0?'The study of pricing and output decisions in the market for '+goods[v%goods.length]+' is mainly part of:':'The study of one household’s choice between two products is mainly part of:','Microeconomics',['Macroeconomics','Public finance only','International accounting'],'Microeconomics studies individual consumers, firms and markets.',i);
    } else if (c === 1) {
      const price = 2 + v % 40, b = 1 + v % 5, d = 1 + (v * 3) % 5, interceptS = 10 + v % 90, interceptD = interceptS + (b + d) * price, quantity = interceptS + d * price;
      numeric('eco',c,id,'Market demand is Qd = '+interceptD+' − '+b+'P and supply is Qs = '+interceptS+' + '+d+'P. Find the equilibrium price P.',price,'At equilibrium, set demand equal to supply and solve: '+interceptD+' − '+b+'P = '+interceptS+' + '+d+'P.',i,'₹');
    } else if (c === 2) {
      const outputChange = 1 + v % 10, costChange = outputChange * (100 + v % 90) * 10;
      numeric('eco',c,id,'Total cost rises by '+cash(costChange)+' when output increases by '+outputChange+' units. What is marginal cost per additional unit over this change?',costChange/outputChange,'Marginal cost over the interval = change in total cost ÷ change in output.',i,'₹');
    } else if (c === 3) {
      const mode = v % 3;
      word('eco',c,id,mode===0?'Under perfect competition, an individual firm is generally a:':mode===1?'In a perfectly competitive market, the market price is primarily determined by:':'A firm that accepts the prevailing market price is called a:',mode===0?'Price taker':mode===1?'Market demand and market supply':'Price taker',mode===1?['One firm’s decision alone','A fixed price chosen by every consumer','The accounting period']:['Price maker with complete control','Sole buyer','Monopolist by definition'],'In perfect competition, many buyers and sellers interact, and an individual firm has no meaningful control over the market price.',i);
    } else if (c === 4) {
      const mode = v % 2;
      word('eco',c,id,mode===0?'During a contraction in the business cycle, output and employment generally:':'A sustained fall in economic activity across many sectors is most closely associated with:',mode===0?'Decline':'Recession',['Rise continuously','Remain fixed by definition','Increase only because prices are sticky'],'A contraction is a downturn phase in which economic activity generally weakens.',i);
    } else if (c === 5) {
      const consumption=10000+(v%80)*1000, investment=5000+(v%50)*1000, government=3000+(v%40)*1000, exports=2000+(v%30)*500, imports=1000+(v%25)*400;
      const gdp=consumption+investment+government+exports-imports;
      numeric('eco',c,id,'Using the expenditure approach, C = '+cash(consumption)+', I = '+cash(investment)+', G = '+cash(government)+', exports = '+cash(exports)+', and imports = '+cash(imports)+'. Calculate GDP.',gdp,'GDP by the expenditure approach = C + I + G + (exports − imports).',i,'₹');
    } else if (c === 6) {
      const mode = v % 2;
      word('eco',c,id,mode===0?'Which is a direct tax because it is imposed directly on a person’s income?':'A tax whose burden is generally intended to be borne by the same person on whom it is imposed is called:',mode===0?'Income tax':'Direct tax',['Customs duty on an imported item','A sales tax collected through a seller','An indirect tax only'],'A direct tax is imposed directly on income or wealth; its burden is not ordinarily shifted through market prices in the same way as an indirect tax.',i);
    } else if (c === 7) {
      const mode = v % 2;
      word('eco',c,id,mode===0?'In India, which institution is the central bank responsible for monetary policy?':'A change in the repo rate is an example of which type of policy action?',mode===0?'Reserve Bank of India (RBI)':'Monetary policy',['Securities and Exchange Board of India (SEBI)','Competition Commission of India (CCI)','Fiscal policy by a municipal body'],'The RBI is India’s central bank; repo-rate actions are part of monetary policy.',i);
    } else if (c === 8) {
      const mode = v % 2;
      word('eco',c,id,mode===0?'A customs duty imposed on an imported product is an example of a:':'A tax placed on goods as they enter a country is generally called a:', 'Tariff',['Subsidy paid to a domestic buyer','Quota issued by a bank','Depreciation allowance'],'A tariff is a customs duty on imports (and in some cases exports).',i);
    } else {
      const mode = v % 3;
      word('eco',c,id,mode===0?'Cultivation of crops and extraction of natural resources belong mainly to which sector?':mode===1?'Fishing and forestry are generally classified in which sector?':'A person engaged in crop farming works in which broad economic sector?','Primary sector',['Secondary sector','Tertiary sector','Quaternary sector'],'Primary activities obtain products directly from nature, including agriculture, fishing and forestry.',i);
    }
    generated.eco++;
  }

  window.AETHEL_QUESTIONS = bank.concat(rows);
  window.AETHEL_GENERATED_COUNTS = generated;
})();
