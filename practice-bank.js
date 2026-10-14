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
