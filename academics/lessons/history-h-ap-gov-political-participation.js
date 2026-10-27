/* Original course unit. Review record: docs/review/lessons/high-completion/ap-gov-u5-accuracy.json.
   Deterministic choices preserve prompt-derived identities. */
const sections=[
 {
  "code": "5.1",
  "name": "Voting rights and voting models",
  "skill": "s1",
  "teach": [
   "The Constitution expanded protection against particular reasons for denying the vote. The Fifteenth Amendment prohibits denial based on race, color or previous servitude; the Nineteenth prohibits denial based on sex. The Twenty-fourth prohibits poll taxes in federal elections, and the Twenty-sixth protects citizens eighteen or older from age-based denial. These protections did not instantly remove every practical barrier. Identify the specific barrier before choosing the amendment: a tax requirement in a federal election invokes the Twenty-fourth, not the amendment about age.",
   "Voting models describe the reasoning behind a choice. Retrospective voting judges an officeholder’s past performance; prospective voting compares promises and expected future policies. Rational-choice voting weighs expected benefits against costs, including the cost of participating. Party-line voting supports candidates of the same party. In a fictional election, a voter rewarding a mayor for a completed bridge uses retrospective reasoning. A voter comparing proposed transit plans reasons prospectively. The candidate’s party alone does not tell us which reasoning a voter used."
  ],
  "boards": [
   [
    "15th: race, color, previous servitude",
    "19th: sex",
    "24th: federal poll taxes",
    "26th: voting age protection at 18+"
   ],
   [
    "Past performance → retrospective",
    "Future proposals → prospective",
    "Expected costs/benefits → rational choice",
    "Same party across offices → party-line"
   ]
  ],
  "questions": [
   [
    "A fictional registrar rejects a qualified citizen because of the citizen’s race. Which amendment directly prohibits that ground for denial?",
    "Fifteenth",
    "Nineteenth",
    "Twenty-sixth",
    "The Fifteenth Amendment addresses race, color and previous servitude; the other two address sex and age."
   ],
   [
    "A fictional federal-election rule requires otherwise qualified voters to pay a poll tax. Which amendment directly addresses this barrier?",
    "Twenty-fourth",
    "Twenty-sixth",
    "Nineteenth",
    "The Twenty-fourth prohibits poll taxes in federal elections. Do not confuse a monetary requirement with an age restriction."
   ],
   [
    "A fictional state denies otherwise eligible women a ballot solely because they are women. Which amendment directly applies?",
    "Nineteenth",
    "Fifteenth",
    "Twenty-fourth",
    "The Nineteenth prohibits sex-based denial of the vote. It does not describe a tax or a race-based rule."
   ],
   [
    "A fictional state bars otherwise eligible nineteen-year-old citizens solely for being under twenty-one. Which amendment directly applies?",
    "Twenty-sixth",
    "Twenty-fourth",
    "Fifteenth",
    "The Twenty-sixth protects citizens eighteen or older against denial on account of age."
   ],
   [
    "A fictional voter supports the incumbent because unemployment fell during the completed term. Which voting model best describes the stated reason?",
    "Retrospective",
    "Prospective",
    "Party-line",
    "The voter evaluates past performance. A future policy promise would support a prospective interpretation."
   ],
   [
    "A fictional voter compares two candidates’ proposed housing plans and picks the one expected to lower future rent. Which model fits?",
    "Prospective",
    "Retrospective",
    "Party-line",
    "The stated comparison concerns expected future policy, not completed performance or a party label alone."
   ],
   [
    "A fictional voter chooses the same party’s candidates for every office without comparing individual platforms. Which voting model fits?",
    "Party-line",
    "Retrospective",
    "Prospective",
    "Support follows party affiliation across offices; the scenario supplies no assessment of past results or future proposals."
   ],
   [
    "A fictional citizen compares the expected benefit of voting with the travel time and lost wages required. Which model focuses on this calculation?",
    "Rational-choice",
    "Party-line",
    "Retrospective",
    "Rational-choice reasoning weighs expected benefits and costs. It need not depend on loyalty to a party."
   ],
   [
    "A student claims that constitutional voting amendments immediately eliminated every obstacle to participation. Which evidence most directly challenges that claim?",
    "Later enforcement efforts against continuing discriminatory barriers",
    "The amendments have different numbers",
    "Some voters change party preference",
    "Continued enforcement needs distinguish formal legal protection from full practical access; numbering and preferences do not address barriers."
   ],
   [
    "Two fictional voters pick the same candidate: one praises last term’s services, the other favors next term’s plan. What follows?",
    "Identical choices can reflect different voting models",
    "Both necessarily use party-line voting",
    "Both necessarily use retrospective voting",
    "The first reason looks backward and the second forward. A shared selection does not establish shared reasoning."
   ]
  ],
  "check": [
   "A fictional voter says, “I will replace the governor because last term’s emergency response failed.” Which model best fits?",
   "Retrospective",
   "Prospective",
   "Party-line",
   "The reason evaluates the incumbent’s completed performance."
  ]
 },
 {
  "code": "5.2",
  "name": "Voter turnout",
  "skill": "s2",
  "teach": [
   "Turnout is a fraction with a specified denominator. Voting-age population includes adults who may not be eligible; voting-eligible population excludes ineligible adults; registered-voter turnout uses the reported registration total for the election. In fictional data, 600 ballots among 1,000 eligible people gives 60% turnout, while 600 among 800 registered people gives 75%. Neither number is wrong if labeled correctly. Use comparable populations and election types before interpreting differences, and distinguish percentage-point gaps from relative percent changes.",
   "Participation reflects resources, motivation and access. Political efficacy is a belief that one can understand or influence politics; mobilization can connect that belief to action. Registration requirements, transportation and work schedules can raise participation costs. Competitive elections and presidential contests often attract more participation, but these are tendencies. A fictional survey associating education with turnout does not prove education alone caused participation. Groups contain diverse voters, so a group average cannot determine whether a particular person will vote."
  ],
  "boards": [
   [
    "Eligible turnout: 600 / 1000 = 60%",
    "Registered turnout: 600 / 800 = 75%",
    "Always name the denominator"
   ],
   [
    "Resources + motivation + access",
    "Efficacy: belief in political influence",
    "Association alone does not prove cause"
   ]
  ],
  "questions": [
   [
    "Fictional election data show 420 voters among 700 eligible residents. What is turnout as a percent of eligible residents?",
    "60%",
    "42%",
    "70%",
    "Divide voters by eligible residents: 420 divided by 700 is 0.60, or 60 percent."
   ],
   [
    "A fictional town records 480 voters, 600 registered residents and 800 eligible residents. What is registered-voter turnout?",
    "80%",
    "60%",
    "75%",
    "The requested denominator is 600 registered residents. Dividing 480 by 800 would instead give eligible-population turnout."
   ],
   [
    "Fictional turnout rises from 45% to 54% of eligible residents. By how many percentage points does it rise?",
    "9",
    "20",
    "54",
    "Subtract the two percentages: 54 minus 45 equals 9 percentage points. Twenty percent is the relative increase."
   ],
   [
    "Two fictional reports give turnout as 70% of registered voters and 56% of eligible people. Why can both be correct?",
    "They use different denominators",
    "One necessarily counts fraudulent ballots",
    "Registered and eligible populations must be equal",
    "The same ballot count divided by different population totals gives different percentages. For example, 560 ballots divided by 800 registered people is 70%, while 560 divided by 1,000 eligible people is 56%."
   ],
   [
    "A fictional worker wants to vote but cannot leave a shift while polls are open. Which explanation fits the evidence?",
    "A participation cost limits access",
    "The worker necessarily lacks political interest",
    "The worker is constitutionally ineligible",
    "The scenario identifies a schedule barrier, not lack of interest or a legal disqualification."
   ],
   [
    "A fictional resident joins a campaign after deciding that collective action can influence officials. Which concept best fits that belief?",
    "Political efficacy",
    "Judicial review",
    "Retrospective voting",
    "Efficacy concerns perceived capacity to understand or influence politics; joining a campaign is one possible response."
   ],
   [
    "A fictional study finds that older residents voted more often, but supplies no random assignment or controls. Which conclusion is supported?",
    "Age and turnout are associated in the sample",
    "Age alone caused every turnout difference",
    "Every older resident voted",
    "The evidence establishes an association, not a universal rule or an isolated causal effect."
   ],
   [
    "A fictional campaign offers registration information and reminders about an election. What activity is it conducting?",
    "Voter mobilization",
    "Reapportionment",
    "Judicial enforcement",
    "Mobilization encourages participation. It differs from allocating legislative seats or enforcing a court order."
   ],
   [
    "A fictional analyst compares a presidential election with a low-profile local election. What should be considered before attributing turnout differences solely to registration rules?",
    "Election salience and competitiveness",
    "The alphabetical order of candidates’ names alone",
    "Only the number of campaign colors",
    "Different election stakes and competition may affect motivation, so the registration rule is not the only possible explanation."
   ],
   [
    "A fictional district reports 1,000 voting-age adults, including 120 adults ineligible to vote. Which denominator is appropriate for eligible-population turnout?",
    "880",
    "1000",
    "120",
    "Subtract the specified ineligible adults from the voting-age population: 1,000 minus 120 equals 880."
   ]
  ],
  "check": [
   "A fictional county has 900 eligible residents and 540 voters. What percent of eligible residents voted?",
   "60%",
   "54%",
   "90%",
   "Divide the 540 voters by the 900 eligible residents, then multiply by 100."
  ]
 },
 {
  "code": "5.3",
  "name": "Political parties",
  "skill": "s3",
  "teach": [
   "Political parties link people to government by recruiting candidates, presenting platforms, raising campaign resources and mobilizing voters. Unlike an interest group focused on influencing policy, a party seeks to win public offices under a common label. Parties also help organize legislative leadership and policy agendas after elections. In a fictional town, an organization selecting a slate of council candidates acts as a party; a river association pressing every candidate for clean-water commitments acts as an interest group.",
   "A party coalition brings together groups with partly shared priorities. A platform states general commitments, but it is not a legally binding contract and party members may disagree. Party identification can help voters choose without studying every candidate, yet it does not guarantee straight-ticket voting. A fictional coalition of commuters and businesses may agree on transit while disagreeing over taxes. Party leaders must negotiate those differences; the party itself is a linkage institution, not a constitutionally established branch of government."
  ],
  "boards": [
   [
    "Recruit candidates and present platforms",
    "Mobilize voters and contest offices",
    "Organize government after elections"
   ],
   [
    "Coalition: groups with overlapping goals",
    "Platform: commitments, not binding law",
    "Party label can inform a vote"
   ]
  ],
  "questions": [
   [
    "A fictional organization recruits candidates for mayor and council under one shared label. Which institution does this most closely describe?",
    "Political party",
    "Trial court",
    "Administrative agency",
    "Recruiting candidates and contesting public offices under a common label are central party functions."
   ],
   [
    "A fictional association asks candidates of both major parties to support river cleanup but fields no candidates. How does it differ from a party?",
    "It seeks policy influence rather than office under its label",
    "It necessarily controls the legislature",
    "It can never participate politically",
    "The association acts as an interest group; policy advocacy does not require running a party slate."
   ],
   [
    "A fictional party publishes shared priorities on education and transportation. What is this statement usually called?",
    "Platform",
    "Court judgment",
    "Electoral district",
    "A platform states a party’s policy commitments. Publishing one does not itself enact those commitments into law."
   ],
   [
    "After a fictional election, a legislative party chooses its floor leader and coordinates a policy agenda. Which party function is illustrated?",
    "Organizing government",
    "Counting census residents",
    "Reviewing constitutional cases",
    "Parties coordinate officeholders and legislative priorities as well as campaigning before an election."
   ],
   [
    "A fictional party joins rural businesses and suburban commuters around a road plan despite disagreement on taxes. What does this illustrate?",
    "Coalition building",
    "A single unanimous ideology",
    "A constitutional amendment",
    "Coalitions can share some goals while retaining disagreements; unanimity is not required for electoral cooperation."
   ],
   [
    "A fictional voter uses party affiliation as a shortcut when comparing unfamiliar candidates. What function does the party label serve?",
    "An informational cue",
    "A legal command to vote",
    "Proof of identical candidate beliefs",
    "Party labels provide cues about likely priorities, but do not compel choices or eliminate variation among candidates."
   ],
   [
    "A fictional platform promises a new school law, but elected legislators reject the bill. What does this show?",
    "Platforms are not legally binding enactments",
    "Platforms automatically override legislators",
    "Political parties cannot propose policies",
    "A platform announces priorities; ordinary lawmaking is still needed to implement them."
   ],
   [
    "A fictional party contacts supporters to remind them when and where an election occurs. Which function is most directly illustrated?",
    "Mobilizing voters",
    "Apportioning House seats",
    "Issuing judicial rulings",
    "The activity encourages electoral participation. Apportionment and judicial decisions belong to different processes."
   ],
   [
    "A student lists parties alongside the executive, legislature and judiciary as a fourth constitutional branch. Which correction is best?",
    "Parties are linkage institutions, not a constitutional branch",
    "Parties are a chamber of Congress",
    "Parties exercise judicial review",
    "Parties connect citizens with political institutions but are not one of the three constitutional branches."
   ],
   [
    "A fictional coalition loses members because its platform neglects their central concern. Which strategy most directly addresses this problem?",
    "Negotiate priorities with the departing groups",
    "Declare platforms enforceable court orders",
    "Eliminate all candidate recruitment",
    "Parties sustain coalitions by responding to priorities; coercive platform claims and abandoning candidates miss the issue."
   ]
  ],
  "check": [
   "A fictional party trains volunteers to contact infrequent voters before an election. Which party function is this?",
   "Mobilization",
   "Judicial review",
   "Reapportionment",
   "The volunteers encourage participation rather than decide court cases or allocate legislative seats."
  ]
 },
 {
  "code": "5.4",
  "name": "Party change and adaptation",
  "skill": "s4",
  "teach": [
   "Parties change when voters, issues and campaign methods change. A realignment is a lasting change in party coalitions and electoral support, often associated with a critical election or a series of elections. Dealignment is a weakening of party attachment, not necessarily a transfer to the rival party. A fictional region that shifts its support from one party to another and sustains that shift across several elections may illustrate realignment. One unusual election result alone does not establish a lasting shift; examine evidence across time and compare the groups involved.",
   "Candidate-centered campaigns place the candidate’s organization, image and fundraising at the center of competition. Primaries, television and digital communication can help candidates reach voters without relying entirely on party leaders. Parties nevertheless still provide resources, labels and networks. In a fictional campaign, direct online fundraising reduces dependence on a local party organization, but does not abolish the party. Platforms may adapt to demographic change and new issues; changes in communication tools and changes in voter coalitions are related but distinct processes."
  ],
  "boards": [
   [
    "Realignment: durable coalition shift",
    "Dealignment: weaker party attachments",
    "One election is not proof of permanence"
   ],
   [
    "Candidate builds an individual organization",
    "New media can bypass some gatekeepers",
    "Parties still supply resources and labels"
   ]
  ],
  "questions": [
   [
    "Fictional records show one occupational group shifting its support to a different party and sustaining that shift across five elections. Which interpretation fits best?",
    "Possible realignment",
    "Proof of random assignment",
    "Automatic dealignment",
    "A durable shift toward another party supports realignment; dealignment specifically concerns weakening attachment rather than switching sides."
   ],
   [
    "A fictional survey finds more voters saying they identify with neither major party. Which process does this most directly indicate?",
    "Dealignment",
    "Reapportionment",
    "Judicial restraint",
    "Declining party identification points to dealignment. It does not by itself identify a lasting new governing coalition."
   ],
   [
    "A fictional party loses one election after a scandal but regains its usual supporters next time. Why is calling this a realignment premature?",
    "The shift did not show durable coalition change",
    "Every defeat constitutes realignment",
    "Realignment requires eliminating elections",
    "An exceptional loss followed by restoration does not establish an enduring change in electoral coalitions."
   ],
   [
    "A fictional candidate builds a personal fundraising network and emphasizes an individual brand more than the party platform. Which trend is illustrated?",
    "Candidate-centered campaigning",
    "Legislative reapportionment",
    "Interest-group litigation",
    "The candidate’s own organization and image dominate campaign activity; the other options concern different institutions."
   ],
   [
    "A fictional party changes its transportation platform after many commuters join its coalition. What best explains the adaptation?",
    "Changing coalition priorities",
    "An automatic constitutional requirement",
    "A ban on policy disagreement",
    "Parties respond to the interests of potential supporters; a platform change is not automatically constitutionally required."
   ],
   [
    "A fictional candidate uses online donations to finance a primary without local party leaders’ backing. What is a reasonable conclusion?",
    "Candidates can reduce dependence on party gatekeepers",
    "Political parties have ceased to exist",
    "Donations guarantee election victory",
    "Direct fundraising can reduce dependence on party organizations, but neither eliminates parties nor guarantees electoral success."
   ],
   [
    "Fictional data show party attachment falling while independent identification rises. Which further evidence would establish realignment rather than only dealignment?",
    "A durable transfer of groups into a new coalition",
    "A single decline in newspaper circulation",
    "One candidate purchasing advertisements",
    "Realignment requires evidence of a lasting coalition shift, beyond weakening identification with existing parties."
   ],
   [
    "A fictional party attracts a new group by adopting its central issue but alienates some old supporters. Which tradeoff is illustrated?",
    "Coalition expansion can strain existing alliances",
    "Platforms always satisfy every voter",
    "Realignment prevents all policy disagreements",
    "Adapting priorities can gain support from one group while creating tension with another group in the coalition."
   ],
   [
    "A fictional primary lets voters choose nominees previously selected by party insiders. What party power is most directly reduced?",
    "Control over candidate selection",
    "Congress’s constitutional lawmaking power",
    "The courts’ jurisdiction",
    "Changing nomination rules shifts influence over selecting candidates, not the constitutional powers of Congress or courts."
   ],
   [
    "A fictional historian identifies a critical election by showing new issues and lasting group shifts afterward. Which evidence is essential to that interpretation?",
    "Persistence of the electoral changes",
    "The election’s campaign slogan alone",
    "An unusually rainy election day alone",
    "A lasting realignment requires evidence that changes endured; a slogan or isolated weather event cannot establish that."
   ]
  ],
  "check": [
   "A fictional voter leaves a party but joins neither rival and rejects strong party labels. Which process does this individual example illustrate?",
   "Dealignment",
   "Realignment toward a named rival",
   "Reapportionment",
   "The evidence concerns weakening party attachment, not a durable transfer into another party coalition."
  ]
 },
 {
  "code": "5.5",
  "name": "Third parties",
  "skill": "s5",
  "teach": [
   "In a single-member plurality election, one seat goes to the candidate with the most votes, even without an absolute majority. A fictional district with vote shares of 42%, 38% and 20% elects the 42% candidate under that rule. This can disadvantage smaller parties whose support is spread across many districts. Supporters may vote strategically for a larger party to avoid splitting similar preferences. Proportional representation can translate dispersed support into seats differently, but it is not the rule for U.S. House elections.",
   "Third parties can introduce neglected issues, mobilize dissatisfied voters and pressure major parties to change platforms even when they win few offices. Ballot-access requirements and limited resources can present additional barriers. A spoiler claim says a minor candidate affected the winner by attracting votes that would otherwise have favored another candidate. Vote totals alone cannot prove that counterfactual: some supporters might abstain or choose a different major candidate. Distinguish influencing public debate from actually winning office, and distinguish a plausible effect from a demonstrated one."
  ],
  "boards": [
   [
    "Single-member plurality: highest vote wins",
    "42%, 38%, 20% → 42% candidate wins",
    "Dispersed votes may yield no seats"
   ],
   [
    "Third parties can introduce neglected issues",
    "Major parties may adopt those issues",
    "Vote transfers cannot simply be assumed"
   ]
  ],
  "questions": [
   [
    "In a fictional single-seat plurality election, candidates receive 44%, 36% and 20%. Who wins under the stated rule?",
    "The candidate with 44%",
    "No one unless a candidate exceeds 50%",
    "The candidate with 36% after automatic redistribution",
    "Plurality means the highest total, not necessarily a majority. The scenario supplies no runoff or redistribution rule."
   ],
   [
    "A fictional minor party wins 15% in every single-member district but finishes third everywhere. What barrier does this illustrate?",
    "Dispersed support may produce no seats",
    "Fifteen percent guarantees fifteen percent of seats",
    "All its voters are legally ineligible",
    "Single-member plurality rewards district victories, not a proportional share of aggregate votes."
   ],
   [
    "A fictional voter prefers a small party but chooses a larger party to prevent a least-preferred candidate from winning. What is this?",
    "Strategic voting",
    "Mandatory party membership",
    "Judicial selection",
    "The voter adjusts the choice in light of likely outcomes rather than simply voting for the first preference."
   ],
   [
    "A fictional minor party loses elections, but a major party adopts its conservation proposal. What influence did the minor party exercise?",
    "Agenda and policy influence",
    "Direct control of all legislative seats",
    "A constitutional veto",
    "A minor party can shift issues and platforms even without winning enough seats to govern."
   ],
   [
    "A fictional state requires extensive petition signatures for a new party’s ballot listing. Which obstacle is described?",
    "Ballot access",
    "Electoral College apportionment",
    "A judicial lifetime term",
    "Petition requirements govern whether candidates appear on the ballot; they are distinct from allocating electors or judicial tenure."
   ],
   [
    "In a fictional race, A wins 48%, B wins 46% and C wins 6%. What is needed to establish that C changed the winner?",
    "Evidence of how C’s voters would otherwise behave",
    "Only the fact that 6 exceeds 2",
    "Assume C’s votes automatically transfer to B",
    "The margin makes a spoiler effect possible, but preference transfers or abstention cannot be inferred from totals alone."
   ],
   [
    "A fictional third-party candidate attracts people who otherwise planned not to vote. How could this affect participation?",
    "It can mobilize previously disengaged voters",
    "It necessarily reduces total turnout",
    "It proves a major-party vote was stolen",
    "New participation may add voters rather than transfer existing support, so a spoiler interpretation cannot be assumed."
   ],
   [
    "A fictional proportional system awards seats approximately by each party’s vote share. How does that differ from single-member plurality?",
    "Smaller dispersed parties may gain representation",
    "Every district must have only one candidate",
    "The largest party automatically gets every seat",
    "Proportional allocation can represent dispersed support that fails to win any individual plurality district."
   ],
   [
    "A fictional minor party focuses on one neglected issue while major parties cover many policy areas. Which strategy may reduce that party’s distinct appeal?",
    "A major party credibly adopts its issue",
    "Courts abolish all campaign discussion",
    "Legislators eliminate all constituency contact",
    "Major-party adoption may attract issue-focused voters, although it does not guarantee the minor party will disappear."
   ],
   [
    "A fictional editorial calls minor parties irrelevant because they seldom win the presidency. Which evidence most directly challenges that reasoning?",
    "Their proposals later enter major-party platforms",
    "Some party logos use similar colors",
    "Every presidential election has polling",
    "Platform adoption demonstrates influence beyond winning the presidency; logos and polling do not establish that influence."
   ]
  ],
  "check": [
   "A fictional single-seat plurality race ends at 39%, 35% and 26%. Which share belongs to the winner?",
   "39%",
   "35%",
   "No winner without 50%",
   "The stated plurality rule awards the seat to the highest vote total, even below a majority."
  ]
 },
 {
  "code": "5.6",
  "name": "Interest-group strategies",
  "skill": "s6",
  "teach": [
   "Interest groups organize around shared concerns and try to influence policy. Direct lobbying communicates with officials; grassroots lobbying mobilizes members or the public to contact officials. Litigation asks courts to resolve a legal dispute, while an amicus brief offers a nonparty’s relevant argument to a court. In a fictional water-policy debate, giving technical evidence to a committee is lobbying; urging residents to call that committee is grassroots mobilization. These strategies may be combined, and using one does not prove that the group obtained its desired policy.",
   "An iron triangle describes a relatively stable relationship among a congressional committee, an agency and an interest group, with each supplying resources or support the others value. An issue network is typically broader and more fluid, involving experts, advocates, journalists and officials. For example, a fictional transportation dispute may bring together researchers, riders, businesses and several agencies in an issue network. Neither model means every participant has equal power. An interest group can seek influence across parties; a political party additionally competes for office under its own label."
  ],
  "boards": [
   [
    "Official contact → direct lobbying",
    "Mobilize public contacts → grassroots",
    "Court argument → litigation or amicus"
   ],
   [
    "Iron triangle: committee, agency, group",
    "Issue network: broader, changing participants",
    "Access is not proof of policy success"
   ]
  ],
  "questions": [
   [
    "A fictional medical association presents research to a legislative committee about a proposed funding bill. Which strategy is illustrated?",
    "Direct lobbying",
    "Reapportionment",
    "Retrospective voting",
    "The association directly communicates policy information to officials. It is not reallocating seats or explaining a vote choice."
   ],
   [
    "A fictional environmental group asks members to call senators about a bill. Which strategy does this illustrate?",
    "Grassroots lobbying",
    "Judicial review",
    "Candidate nomination",
    "The group mobilizes citizens to contact policymakers, rather than speaking only through its own representatives."
   ],
   [
    "A fictional organization challenges an agency rule in court, arguing that it violates a statute. Which strategy is this?",
    "Litigation",
    "Party-line voting",
    "Reapportionment",
    "The organization uses a lawsuit to seek legal relief. Voting models and seat allocation describe different processes."
   ],
   [
    "A fictional association is not a party to a lawsuit but submits relevant legal arguments to the court. What document fits?",
    "Amicus curiae brief",
    "Party platform",
    "Electoral certificate",
    "An amicus brief lets a nonparty contribute arguments or information; it is not a nomination platform or vote certificate."
   ],
   [
    "A fictional committee, regulator and industry group maintain a stable exchange of expertise, oversight support and access. Which model fits best?",
    "Iron triangle",
    "A proportional voting system",
    "A primary election",
    "The three-way committee-agency-interest-group relationship matches the iron-triangle model of policy influence."
   ],
   [
    "A fictional policy debate brings together shifting coalitions of scientists, journalists, advocates and several agencies. Which model fits best?",
    "Issue network",
    "A single closed iron triangle",
    "An electoral district",
    "The broad, changing range of participants fits an issue network more closely than a stable three-party relationship."
   ],
   [
    "A fictional group holds a meeting with a senator, but the senator later votes against the group’s proposal. What does the evidence demonstrate?",
    "Access does not guarantee policy success",
    "All lobbying is ineffective",
    "The group had no access",
    "The meeting establishes access, while the vote shows the desired outcome was not guaranteed. One case does not settle all lobbying."
   ],
   [
    "A fictional farm group endorses candidates from both parties who support its priorities. What explains this strategy?",
    "Policy goals can cross party lines",
    "Interest groups must become judicial agencies",
    "Endorsements legally compel candidate compliance",
    "Groups may support allies across parties to advance policy; endorsement does not legally bind an officeholder."
   ],
   [
    "A fictional group seeks public office under its own candidate label, rather than only lobbying officeholders. Which activity resembles a party function?",
    "Contesting elections with a slate",
    "Submitting an amicus brief",
    "Providing technical testimony",
    "Running candidates under a common label is central to parties; briefs and testimony are ordinary group influence strategies."
   ],
   [
    "A fictional consumer group supplies an agency with evidence of defective products during rulemaking. Why might the agency value this input?",
    "It provides specialized information",
    "It automatically replaces statutory authority",
    "It legally eliminates all other viewpoints",
    "Groups can supply information useful to policy design, but their input does not replace statutes or exclude other participants."
   ]
  ],
  "check": [
   "A fictional rights organization persuades residents to email legislators while its attorneys file a lawsuit. Which pair of strategies is being used?",
   "Grassroots lobbying and litigation",
   "Reapportionment and nomination",
   "Judicial review and party-line voting",
   "Public contacts mobilize grassroots pressure, while filing a lawsuit uses litigation."
  ]
 },
 {
  "code": "5.7",
  "name": "Unequal influence and collective action",
  "skill": "s7",
  "teach": [
   "Collective action is difficult when people can enjoy a public benefit without helping pay for it. That is the free-rider problem, not simply laziness. A fictional neighborhood benefits from cleaner air even if some residents never join the advocacy group. Selective incentives, such as member-only training, can encourage participation because they are available only to contributors. Small groups with concentrated stakes may organize more readily than large groups with diffuse benefits, but size alone does not determine influence or legitimacy.",
   "Pluralism emphasizes competition among groups as a route for representing interests. Critics note that money, staff, expertise and access are distributed unequally, so formal freedom to organize does not ensure equal influence. A fictional industry can afford full-time lobbyists while scattered consumers face high coordination costs. That difference supports a claim about resources; it does not prove bribery or guarantee a policy outcome. Evaluate influence using evidence of decisions and mechanisms, while considering public opinion, officials’ goals and competing groups."
  ],
  "boards": [
   [
    "Shared benefit without contributing → free rider",
    "Member-only benefit → selective incentive",
    "Concentrated stakes can ease organization"
   ],
   [
    "Formal access is not equal resources",
    "Compare staff, money, expertise and intensity",
    "Policy results require separate evidence"
   ]
  ],
  "questions": [
   [
    "A fictional resident enjoys cleaner air after a group’s successful campaign but never contributes. Which problem does this illustrate?",
    "Free riding",
    "Redistricting",
    "Prospective voting",
    "The resident receives a collective benefit without bearing the organizational cost; no district boundary or voting judgment is involved."
   ],
   [
    "A fictional association offers training only to dues-paying members. What is the training intended to provide?",
    "A selective incentive",
    "A universal public good",
    "An electoral district",
    "Restricting the benefit to contributors can encourage membership; a universal public good would also reach nonmembers."
   ],
   [
    "A fictional industry has twenty firms with large stakes in one rule, while millions of consumers each face a tiny cost. Why might the industry organize more easily?",
    "Its benefits are concentrated and coordination is easier",
    "Small groups are always more democratic",
    "Consumers are constitutionally forbidden to organize",
    "Concentrated stakes and fewer participants can reduce collective-action barriers. This does not establish democratic superiority or a legal prohibition."
   ],
   [
    "A fictional political system allows many groups to compete over policy. Which theory emphasizes this competition?",
    "Pluralism",
    "Absolute monarchy",
    "Judicial supremacy",
    "Pluralist accounts emphasize competing organized interests; they do not require all participants to possess equal resources."
   ],
   [
    "A fictional business group employs ten lobbyists while a volunteer residents’ group can rarely attend hearings. What does this comparison support?",
    "Unequal resources can affect opportunities for influence",
    "The business group automatically wins every vote",
    "The residents have no legal rights",
    "The evidence shows unequal capacity for participation, not guaranteed victory or loss of rights."
   ],
   [
    "A fictional study counts group meetings with lawmakers but never examines decisions. What limitation affects claims about group success?",
    "Meetings measure access, not necessarily policy effects",
    "More meetings prove every demand succeeded",
    "Policy decisions are irrelevant to influence",
    "Access can be an influence mechanism, but meeting counts alone do not establish that a group changed outcomes."
   ],
   [
    "A fictional minority group cares intensely about one policy and organizes sustained contact; a larger group pays little attention. What factor besides size matters?",
    "Intensity of preferences",
    "Alphabetical order of group names",
    "The physical size of campaign signs alone",
    "Strong stakes can motivate sustained participation, so head counts alone cannot explain all differences in political influence."
   ],
   [
    "A fictional group supports a proposal, but an opposing coalition persuades legislators to reject it. Which point is illustrated?",
    "Group influence is contested and uncertain",
    "Any lobbying guarantees passage",
    "Every group has identical resources",
    "Competing groups and institutional choices can defeat a proposal, so influence should not be treated as automatic control."
   ],
   [
    "A fictional policy benefits all river users, even those who never join the river association. Why may voluntary funding be difficult?",
    "People can benefit without paying dues",
    "Every benefit is available only to members",
    "All river users share identical preferences",
    "Nonexcludable benefits create incentives to let others pay. Users need not have identical priorities for this problem to arise."
   ],
   [
    "A fictional analyst claims that equal legal permission to lobby ensures equal political power. Which evidence most directly challenges the claim?",
    "Large differences in time, money and expertise",
    "The existence of more than one group",
    "A change in meeting-room furniture",
    "Unequal practical resources can produce unequal capacity even when formal permission is shared."
   ]
  ],
  "check": [
   "A fictional advocacy group offers member-only legal workshops to encourage dues payments. Which collective-action tool is this?",
   "Selective incentive",
   "A benefit available to every nonmember",
   "Reapportionment",
   "Access is conditional on membership, creating an incentive to help sustain the organization."
  ]
 },
 {
  "code": "5.8",
  "name": "Presidential elections",
  "skill": "s8",
  "teach": [
   "Presidential selection has a nomination stage and a general-election stage. Primaries use ballots to help select party nominees; caucuses use party meetings under party rules. In an open primary, voters generally need not be registered with that party to participate; a closed primary limits participation to registered party members. Exact rules vary. Conventions formally nominate candidates and adopt platforms. In a fictional presidential primary, the results help allocate convention delegates under party rules. Winning one primary does not by itself secure the nomination or elect the president.",
   "The president is selected through electoral votes, not a single nationwide popular plurality. In the standard 538-elector model, 270 is a majority. Most states allocate electors by statewide winner-take-all; Maine and Nebraska also use congressional-district results. Each state has electors equal to its senators plus representatives, and the District of Columbia has three. If no candidate receives a majority of appointed electors, the House selects the president from the top three by state delegation; the Senate selects the vice president from the top two when that contest also lacks a majority."
  ],
  "boards": [
   [
    "Primaries and caucuses help select delegates",
    "Convention: nominate and adopt a platform",
    "General election: choose presidential electors"
   ],
   [
    "Standard model: 538 electors; majority 270",
    "State electors = House seats + 2",
    "No majority: contingent election in Congress"
   ]
  ],
  "questions": [
   [
    "A fictional primary allows eligible voters to participate without registering as members of the party holding it. Which type is described?",
    "Open primary",
    "Closed primary",
    "General election",
    "The defining feature is access without party registration; a closed primary restricts participation to party registrants."
   ],
   [
    "A fictional party limits its nomination ballot to voters registered with that party. Which system is described?",
    "Closed primary",
    "Open primary",
    "Nonpartisan general election",
    "Registration with the party is the relevant restriction. The question describes nomination, not the final general election."
   ],
   [
    "A fictional party gathers members in local meetings to discuss and choose candidate support. Which nomination method fits?",
    "Caucus",
    "Electoral College certification",
    "Congressional reapportionment",
    "A caucus uses party meetings; it is distinct from counting electors or allocating House seats."
   ],
   [
    "In a fictional 538-elector presidential model with all electors appointed, a candidate wins 268 electoral votes. How many more are needed for a majority?",
    "2",
    "1",
    "3",
    "A majority is 270, so 270 minus 268 equals two additional electoral votes."
   ],
   [
    "A fictional state has seven representatives and two senators. How many presidential electors does it receive?",
    "9",
    "7",
    "2",
    "A state’s electors equal its House and Senate delegations combined: seven plus two."
   ],
   [
    "A fictional candidate wins 51% of a state’s popular vote under statewide winner-take-all allocation. What usually follows under that stated rule?",
    "The candidate’s slate receives all the state’s electors",
    "The slate receives exactly 51% of electors",
    "The national popular vote overrides the state result",
    "Winner-take-all awards the state’s electors to the winning slate; it is not proportional allocation."
   ],
   [
    "In a fictional election no presidential candidate receives a majority of appointed electors. Which institution chooses the president under the Constitution?",
    "House of Representatives voting by state delegation",
    "Senate voting by state delegation",
    "Supreme Court choosing the national popular-vote leader",
    "The House chooses from the top three presidential electoral-vote recipients, with one vote per state delegation."
   ],
   [
    "In a fictional contingent election, no vice-presidential candidate receives an electoral majority. Which institution chooses the vice president?",
    "Senate",
    "House by population-weighted ballot",
    "Supreme Court",
    "The Senate chooses between the top two vice-presidential electoral-vote recipients, a different procedure from the House’s presidential choice."
   ],
   [
    "A fictional candidate wins the nationwide popular plurality but loses the electoral majority. What does this illustrate?",
    "Popular and electoral outcomes can differ",
    "The Constitution automatically requires a national runoff",
    "Popular plurality legally cancels state results",
    "State-based allocation can produce an electoral outcome different from the nationwide popular vote; no automatic national runoff follows."
   ],
   [
    "A fictional student says every state allocates all its electors by statewide winner-take-all. Which correction is accurate?",
    "Maine and Nebraska also use congressional-district results",
    "Every state uses exact proportional representation",
    "Only the national vote total allocates electors",
    "Maine and Nebraska allocate some electors by district and two statewide; the other options misstate the system."
   ]
  ],
  "check": [
   "In a fictional standard 538-elector contest, a candidate has 261 votes. How many additional electoral votes reach a majority?",
   "9",
   "8",
   "10",
   "A majority is 270. Subtract 261 from 270 to get nine."
  ]
 },
 {
  "code": "5.9",
  "name": "Congressional elections",
  "skill": "s9",
  "teach": [
   "House members represent congressional districts and serve two-year terms. Senators represent entire states and serve six-year terms, with roughly one-third of Senate seats regularly contested every two years. House seats are reapportioned among states after the decennial census; redistricting redraws district boundaries within states. These are different steps. A fictional state gaining a House seat undergoes reapportionment, then may redraw its districts. Senate representation remains two per state, so population growth does not add a third senator.",
   "Incumbents can benefit from name recognition, constituent service, fundraising networks and experience. Those are advantages, not guarantees of reelection. District partisanship, candidate quality, national conditions and competition also matter. Midterm elections occur midway through a president’s four-year term and can change congressional control without directly electing a president. In a fictional race, a popular incumbent facing a difficult district may still lose. To study an incumbency effect, compare otherwise similar races rather than attributing every victory to officeholding alone."
  ],
  "boards": [
   [
    "House: districts; 2-year terms",
    "Senate: states; 6-year terms",
    "Reapportion seats, then redraw districts"
   ],
   [
    "Incumbency can help; it cannot guarantee",
    "Compare district and national conditions",
    "Midterm: halfway through presidential term"
   ]
  ],
  "questions": [
   [
    "A fictional federal legislator represents one congressional district and faces election every two years. Which office is described?",
    "House member",
    "Senator",
    "Supreme Court justice",
    "House members represent districts for two-year terms; senators represent states for six-year terms."
   ],
   [
    "A fictional candidate campaigns statewide for a six-year federal legislative term. Which office is being sought?",
    "U.S. senator",
    "U.S. representative",
    "President",
    "Senators serve six-year terms and represent their entire state. House terms are two years and presidential terms four."
   ],
   [
    "A fictional state gains a House seat because of census population changes. What process assigns that seat?",
    "Reapportionment",
    "Redistricting alone",
    "Judicial nomination",
    "Reapportionment distributes House seats among states. Redistricting determines boundaries within a state after seats are assigned."
   ],
   [
    "A fictional state retains the same number of House seats but changes congressional boundary lines. What is this process?",
    "Redistricting",
    "Reapportionment",
    "A Senate expansion",
    "Redrawing district boundaries is redistricting; the scenario does not change the state’s allotment of seats."
   ],
   [
    "A fictional incumbent is widely recognized and has an established network of small donors. What do these resources illustrate?",
    "Potential incumbency advantages",
    "A constitutional guarantee of reelection",
    "Automatic control of all election rules",
    "Recognition and networks may help campaigning, but voters can still reject an incumbent."
   ],
   [
    "A fictional congressional election occurs two years into a president’s four-year term. What kind of election is this?",
    "Midterm",
    "Presidential nomination convention",
    "Contingent presidential election",
    "Regular congressional elections halfway through the presidential term are midterms, not a new presidential selection contest."
   ],
   [
    "A fictional state’s population doubles. How many senators does the Constitution still assign to the state?",
    "2",
    "4",
    "A number proportional to population",
    "Each state has two senators; population affects House representation, not the number of senators per state."
   ],
   [
    "A fictional analysis attributes an incumbent’s easy win entirely to officeholding, ignoring a heavily favorable district. What is the main concern?",
    "District partisanship may also explain the result",
    "Incumbency can never matter",
    "Every favorable district is illegal",
    "The district is a competing explanation. The evidence does not isolate an incumbency effect by itself."
   ],
   [
    "A fictional midterm produces an opposition majority in the House while the president remains in office. Which description fits?",
    "Divided government across branches",
    "Automatic presidential removal",
    "A constitutional end to elections",
    "Different parties can control the presidency and a congressional chamber. A midterm result does not automatically remove the president."
   ],
   [
    "A fictional Senate contest replaces several senators, but many others’ terms continue. What design explains this?",
    "Staggered six-year Senate terms",
    "All Senate seats have two-year terms",
    "Senators serve only until the next House election",
    "Roughly one-third of Senate seats face regular election every two years because the six-year terms are staggered."
   ]
  ],
  "check": [
   "A fictional state shifts district lines after receiving a new House-seat allotment. Which pair names the two processes in order?",
   "Reapportionment, then redistricting",
   "Redistricting, then judicial review",
   "A primary, then a caucus",
   "The allotment distributes seats; the later boundary drawing divides the state into districts."
  ]
 },
 {
  "code": "5.10",
  "name": "Modern campaigns",
  "skill": "s10",
  "teach": [
   "Modern campaigns coordinate fundraising, polling, communications, volunteers and voter contact. Consultants may specialize in these tasks, while a candidate’s own organization develops a public image and strategy. Persuasion seeks to change a preference; mobilization seeks to turn a preference into participation. In a fictional campaign, a message explaining a housing proposal is persuasive communication, while a reminder sent to supporters about election hours is turnout work. The activities can overlap, but their immediate aims differ.",
   "Campaign data help allocate limited resources, yet estimates are not guarantees. A poll of self-selected social-media followers may poorly represent the electorate. An advertising experiment with random assignment can more strongly support a causal claim than simply comparing viewers and nonviewers who chose their own exposure. In a fictional budget, spending more on one tactic means less available elsewhere: that is an opportunity cost. Digital communication can reach supporters directly, but reach, clicks, persuasion and actual votes measure different outcomes."
  ],
  "boards": [
   [
    "Persuasion: change a preference",
    "Mobilization: encourage participation",
    "Campaigns combine specialized tasks"
   ],
   [
    "Check who the poll represents",
    "Clicks are not the same as votes",
    "Random assignment helps test causal effects"
   ]
  ],
  "questions": [
   [
    "A fictional campaign sends supporters reminders about polling hours. What is the most immediate goal?",
    "Voter mobilization",
    "Changing district boundaries",
    "Selecting judges",
    "The reminders help supporters participate; they do not redraw constituencies or appoint officials."
   ],
   [
    "A fictional campaign explains how its candidate’s housing proposal differs from a rival’s to undecided voters. What is the main goal?",
    "Persuasion",
    "Reapportionment",
    "Electoral certification",
    "The message tries to change or solidify preferences through policy comparison, rather than simply reminding supporters to vote."
   ],
   [
    "A fictional campaign polls only people following its social-media account. Why may the result poorly estimate the whole electorate?",
    "Followers are a self-selected group",
    "The sample is automatically random",
    "Online polls always exclude supporters",
    "Followers may differ systematically from other voters; using a digital platform does not establish representative sampling."
   ],
   [
    "A fictional campaign hires separate specialists for fundraising, polling and advertisements. Which feature of modern campaigns is illustrated?",
    "Professional specialization",
    "Elimination of all party roles",
    "Constitutional appointment of campaign staff",
    "Staff members perform specialized functions. Hiring them does not abolish parties or give them constitutional offices."
   ],
   [
    "A fictional campaign celebrates 100,000 video views as proof it gained 100,000 votes. What is the flaw?",
    "Views do not directly measure changed votes",
    "Every view necessarily represents an opponent",
    "Video views cannot be counted",
    "Viewing is a different outcome from persuasion or voting, and repeated views may not even represent distinct people."
   ],
   [
    "A fictional campaign moves 5,000 dollars from mailers to door-to-door outreach. What is an opportunity cost of that choice?",
    "The forgone mailer activity",
    "All money ever raised",
    "A guaranteed increase in turnout",
    "The opportunity cost is the best forgone use of resources; the new tactic’s benefit remains to be established."
   ],
   [
    "A fictional campaign compares people who chose to watch an advertisement with those who did not. Why is a causal claim uncertain?",
    "The groups may differ before exposure",
    "Self-selection guarantees identical groups",
    "Advertising can never affect anyone",
    "Prior interest or preferences may affect both viewing and support. Self-selected exposure does not isolate the advertisement’s effect."
   ],
   [
    "A fictional experiment randomly assigns similar voters to receive a message or no message, then compares support. What does random assignment help do?",
    "Reduce systematic preexisting differences between groups",
    "Guarantee every message succeeds",
    "Ensure the sample represents all citizens",
    "Random assignment improves causal comparison within the study, but does not ensure effectiveness or population representativeness."
   ],
   [
    "A fictional candidate relies on a personal donor list and individual reputation more than local party machinery. Which approach fits?",
    "Candidate-centered campaign",
    "Party-controlled judicial selection",
    "A closed legislative session",
    "The candidate’s own network and image organize the campaign; this does not mean party labels cease to matter."
   ],
   [
    "A fictional strategist targets supporters who rarely vote rather than committed opponents. What is the most plausible immediate objective?",
    "Increase supportive turnout",
    "Guarantee every opponent switches sides",
    "Redraw the electorate’s legal boundaries",
    "The stated target group suggests mobilization of existing support, not persuasion of committed opponents or redistricting."
   ]
  ],
  "check": [
   "A fictional campaign tests two messages by random assignment and measures support afterward. Which result is being measured if recipients merely report watching the video?",
   "Exposure rather than a demonstrated vote change",
   "A guaranteed electoral victory",
   "A new congressional seat allocation",
   "Seeing a message is different from changing a preference or casting a ballot."
  ]
 },
 {
  "code": "5.11",
  "name": "Campaign finance",
  "skill": "s11",
  "teach": [
   "Campaign finance distinguishes contributions given to a candidate or committee from independent expenditures for communications expressly urging election or defeat of a clearly identified candidate, without legally relevant coordination with a candidate, campaign, party committee or their agents. A conventional PAC may contribute within applicable limits. A Super PAC makes independent expenditures and may accept unlimited amounts from permitted sources; it does not make contributions to candidates. Unlimited does not mean every source is lawful. These are federal-election concepts: avoid assuming that every state uses identical rules or that a single timeless dollar limit applies to every committee and election.",
   "Citizens United v. FEC (2010) held that the government could not prohibit independent corporate and union election spending on the grounds at issue. It did not eliminate limits on direct candidate contributions, and the Court upheld the challenged disclosure and disclaimer requirements. Supporters emphasize political expression; critics emphasize unequal influence and corruption concerns. In a fictional case, an independently produced advertisement differs from handing money to a candidate. The independence requirement matters: labeling a communication independent does not settle whether its preparation or distribution meets the legal rules."
  ],
  "boards": [
   [
    "Contribution → candidate or committee",
    "Independent ad: expressly elect or defeat a candidate",
    "No qualifying candidate or party coordination",
    "Super PAC: no direct candidate contributions"
   ],
   [
    "Citizens United: independent corporate spending",
    "Direct candidate limits were not abolished",
    "Disclosure and disclaimers still matter"
   ]
  ],
  "questions": [
   [
    "A fictional federal candidate receives a donor’s check in the campaign account. Which category describes the transaction?",
    "Contribution",
    "Independent expenditure by that donor",
    "Reapportionment",
    "Money transferred to the candidate’s campaign is a contribution; an outside independent communication is a different category."
   ],
   [
    "A fictional group pays for an ad expressly urging election of a named federal candidate, with no legally relevant candidate or party coordination. Which category fits?",
    "Independent expenditure",
    "Direct candidate contribution",
    "Party nomination",
    "The paid communication expressly advocates electing an identified federal candidate and meets the independence condition. Both elements matter; not every political advertisement is an independent expenditure."
   ],
   [
    "A fictional Super PAC plans to send money directly to a federal candidate’s campaign. Which correction is appropriate?",
    "Super PACs do not make candidate contributions",
    "Unlimited receipts authorize all direct candidate gifts",
    "Citizens United abolished every contribution limit",
    "A Super PAC’s independent-expenditure role does not permit direct candidate contributions or erase applicable contribution rules."
   ],
   [
    "A fictional student claims Citizens United removed all limits on direct candidate contributions. What is the best correction?",
    "The decision concerned independent corporate and union expenditures",
    "The decision prohibited all campaign spending",
    "The decision ended all disclosure",
    "The holding addressed independent spending; it did not eliminate direct contribution limits and upheld challenged disclosure provisions."
   ],
   [
    "A fictional donor gives to a Super PAC from a permitted source. Which feature generally distinguishes the committee’s fundraising from limited candidate contributions?",
    "It may accept unlimited contribution amounts from permitted sources",
    "It may accept money from every possible source",
    "It must give all funds directly to candidates",
    "Amount limits and source prohibitions are different. Unlimited permitted-source receipts do not authorize every source or direct candidate gifts."
   ],
   [
    "A fictional committee calls an advertisement independent while following campaign instructions that constitute legal coordination. What is the key issue?",
    "The activity may fail the independence requirement",
    "Its label conclusively establishes independence",
    "Coordination is irrelevant to classification",
    "Legal independence depends on the activity under applicable rules, not merely the committee’s chosen label."
   ],
   [
    "A fictional argument favors independent spending protections because political messages communicate viewpoints. Which constitutional value is emphasized?",
    "Freedom of political expression",
    "Hereditary officeholding",
    "Mandatory ideological agreement",
    "The argument frames spending as support for political speech; it does not claim a right to office or compulsory agreement."
   ],
   [
    "A fictional critic argues wealthy speakers can purchase far greater political reach than others. What concern is emphasized?",
    "Unequal political influence",
    "Automatic cancellation of all election results",
    "The end of every disclosure rule",
    "The concern is unequal capacity to amplify viewpoints, not proof that elections cease or disclosure disappears."
   ],
   [
    "A fictional election advertisement identifies who paid for it. Which transparency device is illustrated?",
    "A disclaimer",
    "A primary ballot",
    "An apportionment formula",
    "A disclaimer identifies responsibility for a communication; it differs from periodic financial reports and electoral seat allocation."
   ],
   [
    "A fictional committee files required reports of its receipts and spending. Which purpose does this disclosure serve?",
    "Allowing public scrutiny of campaign financing",
    "Automatically proving illegal conduct",
    "Guaranteeing each donor’s preferred policy",
    "Disclosure provides information for scrutiny. Reporting does not itself prove wrongdoing or guarantee a political result."
   ]
  ],
  "check": [
   "A fictional student says unlimited Super PAC fundraising means unlimited direct gifts to candidates. Which distinction corrects the claim?",
   "Independent spending differs from candidate contributions",
   "All election spending has identical rules",
   "Super PACs are candidate campaign accounts",
   "Super PACs finance independent activity and do not make direct contributions to candidates."
  ]
 },
 {
  "code": "5.12",
  "name": "Media functions",
  "skill": "s12",
  "teach": [
   "Media connect citizens with political information. Agenda setting concerns which issues receive attention; framing concerns how an issue is presented and interpreted. Gatekeeping describes selection of information for publication. In a fictional newsroom, repeatedly covering housing makes housing salient, while describing it through tenants’ experiences rather than builders’ costs changes the frame. These concepts can operate together. They do not require fabricating facts or dictating what every audience member will believe.",
   "Watchdog journalism investigates powerful institutions and can expose misconduct. Horse-race coverage emphasizes polling, tactics and who is ahead, which can crowd out policy explanation. Reliable analysis separates reported evidence from interpretation and opinion. A fictional article citing an agency report, affected residents and an independent expert offers several kinds of evidence, but each claim still needs scrutiny. A journalist’s scrutiny of an official is not by itself proof of partisan bias, and two outlets repeating one unverified report are not two independent confirmations."
  ],
  "boards": [
   [
    "Agenda setting → what receives attention",
    "Framing → how an issue is interpreted",
    "Gatekeeping → what gets published"
   ],
   [
    "Watchdog: investigate the powerful",
    "Horse race: who is ahead and campaign tactics",
    "Repeated claims need independent verification"
   ]
  ],
  "questions": [
   [
    "A fictional network devotes daily coverage to water quality, and the issue becomes more prominent in public debate. Which media function is illustrated?",
    "Agenda setting",
    "Reapportionment",
    "A nomination caucus",
    "The coverage raises the issue’s salience; agenda setting concerns attention rather than dictating every person’s opinion."
   ],
   [
    "Two fictional reports describe the same tax change: one emphasizes public services, the other household costs. Which concept describes the difference?",
    "Framing",
    "Electoral allocation",
    "Party registration",
    "Both address the same issue but organize its interpretation around different effects and perspectives."
   ],
   [
    "A fictional editor chooses which local stories to publish on the front page. Which media function is most directly involved?",
    "Gatekeeping",
    "Electoral certification",
    "Judicial appointment",
    "Gatekeeping selects and prioritizes information for publication; it does not refer to official certification or appointment powers."
   ],
   [
    "A fictional reporter uncovers misuse of public funds through records and corroborated interviews. Which role is illustrated?",
    "Watchdog journalism",
    "Horse-race coverage",
    "Candidate nomination",
    "Investigating and scrutinizing officials is the watchdog role; campaign rankings concern horse-race reporting."
   ],
   [
    "A fictional election report focuses on who leads in polls and whether campaign tactics are working, with little policy discussion. What is this?",
    "Horse-race coverage",
    "An amicus brief",
    "Reapportionment analysis",
    "Horse-race coverage emphasizes competition and strategy rather than explaining substantive policy choices."
   ],
   [
    "A fictional commentator states a policy preference, while a reporter documents the bill’s actual provisions. Which distinction should a reader recognize?",
    "Opinion versus a checkable factual account",
    "Both statements are automatically fabricated",
    "Preferences and bill text are identical evidence",
    "A normative preference and a factual claim require different evaluation; readers should not confuse interpretation with verified provisions."
   ],
   [
    "Two fictional outlets repeat the same anonymous post without additional reporting. How many independent confirmations of the claim do those repetitions provide?",
    "None beyond the original unverified claim",
    "Two independent confirmations",
    "One confirmation from each headline",
    "Repeating a single unverified source does not create independent corroboration, regardless of the number of outlets."
   ],
   [
    "A fictional article links its factual claim to an original public report. What can a careful reader do next?",
    "Check the report’s methods and context",
    "Assume every interpretation is proven",
    "Ignore whether the report supports the claim",
    "An original source enables verification, but the reader must still examine whether it supports the article’s interpretation."
   ],
   [
    "A fictional journalist investigates an officeholder from a party the journalist has criticized before. What alone establishes partisan distortion?",
    "The stated facts do not establish distortion by themselves",
    "Any scrutiny of an official",
    "The mere existence of a critical article",
    "Bias claims require evidence about selection, accuracy or presentation, not merely that reporting scrutinizes an official."
   ],
   [
    "A fictional course compares a media investigation with a legislature passing a statute. How do their institutional roles differ?",
    "Media inform and scrutinize; legislators enact laws",
    "Media themselves enact binding statutes",
    "Only legislators may gather information",
    "Media act as linkage and scrutiny institutions, while elected legislatures exercise lawmaking authority."
   ]
  ],
  "check": [
   "A fictional outlet describes a school proposal mainly as a taxpayer burden, while another presents it as an investment in children. Which concept fits?",
   "Framing",
   "Reapportionment",
   "Electoral certification",
   "The outlets emphasize different interpretations of the same policy issue."
  ]
 },
 {
  "code": "5.13",
  "name": "Changing media",
  "skill": "s13",
  "teach": [
   "Digital communication increases the number of outlets and allows citizens, officials and groups to publish directly. Audience fragmentation means people consume different information streams. Selective exposure means choosing material that fits one’s preferences; confirmation bias means interpreting or favoring evidence that supports an existing belief. A fictional reader who subscribes only to agreeable outlets shows selective exposure. That choice does not prove every article is false, but it may reduce encounters with challenging evidence.",
   "Rapid sharing can mobilize participation and spread unreliable claims. Evaluate an online claim by tracing it to its original source, checking its date and context, and seeking independent corroboration. In a fictional example, a genuine photograph from an old event is misleading when presented as today’s protest. Popularity is not verification: repost counts and a professional design do not establish truth. Research linking media use with political beliefs also needs caution because people choose their media; correlation alone does not isolate the effect of the outlet."
  ],
  "boards": [
   [
    "More outlets → fragmented audiences",
    "Selective exposure: choose agreeable content",
    "Confirmation bias: favor supporting evidence"
   ],
   [
    "Trace source, date and original context",
    "Seek independent corroboration",
    "Popularity does not establish accuracy"
   ]
  ],
  "questions": [
   [
    "A fictional reader subscribes only to outlets that agree with established political views. Which process is most directly illustrated?",
    "Selective exposure",
    "Random assignment",
    "Reapportionment",
    "The reader chooses congenial information sources; this is a selection behavior rather than a randomized research design."
   ],
   [
    "A fictional reader accepts weak evidence favoring a belief but rejects stronger contrary evidence without examination. Which bias fits?",
    "Confirmation bias",
    "A random sampling error alone",
    "Retrospective voting",
    "The unequal treatment favors an existing belief; the scenario concerns evaluation, not merely how a sample was drawn."
   ],
   [
    "Fictional audiences increasingly receive political information from separate niche outlets. What trend is described?",
    "Audience fragmentation",
    "A universal shared news agenda",
    "A formal constitutional amendment",
    "Different groups using different information streams illustrate fragmentation; it does not require a change to the Constitution."
   ],
   [
    "A fictional post uses a real photograph from ten years earlier and labels it as today’s demonstration. What should verification focus on?",
    "The image’s original date and context",
    "Only the post’s popularity",
    "Only whether the colors look professional",
    "Authentic images can mislead through false context. Tracing the original date directly tests the claim being made."
   ],
   [
    "A fictional claim has thousands of reposts but no identifiable source. What does the repost count establish?",
    "Reach, not verified accuracy",
    "Independent confirmation by every sharer",
    "Proof the claim is false",
    "Wide sharing measures spread. It neither independently verifies the content nor automatically proves it false."
   ],
   [
    "A fictional official publishes a policy announcement directly online without a press conference. What media change does this illustrate?",
    "Officials can communicate directly with audiences",
    "Journalists can no longer report politics",
    "Direct statements cannot contain errors",
    "Digital channels can bypass some traditional intermediaries, but do not abolish reporting or guarantee accuracy."
   ],
   [
    "A fictional study finds followers of an outlet already held similar beliefs before subscribing. What complicates a claim that the outlet caused those beliefs?",
    "Self-selection into the audience",
    "A guarantee of random assignment",
    "The absence of any possible alternative cause",
    "People may choose media matching prior views, so the association alone cannot isolate the outlet’s causal effect."
   ],
   [
    "A fictional neighborhood uses online messages to coordinate attendance at a council meeting. Which political effect is illustrated?",
    "Lower coordination costs for participation",
    "Automatic passage of the group’s proposal",
    "Replacement of every formal institution",
    "Digital tools can help organize attendance; participation does not guarantee the desired policy outcome."
   ],
   [
    "A fictional report’s dramatic headline conflicts with the underlying study’s cautious conclusion. Which reading strategy is best?",
    "Compare the headline with the study’s evidence and limits",
    "Treat the headline as stronger evidence than the study",
    "Assume all cautious studies prove no relationship",
    "The original evidence and its limitations determine what is supported, not the headline’s level of confidence."
   ],
   [
    "A fictional news consumer checks two outlets and discovers both rely on one unnamed source. What further step would best strengthen verification?",
    "Seek an independent source or original document",
    "Count the two reports as separate confirmations",
    "Prefer whichever headline has more reactions",
    "Independent corroboration tests the underlying claim; duplicated sourcing and reactions do not provide that independence."
   ]
  ],
  "check": [
   "A fictional post’s high engagement is offered as its only evidence of truth. What conclusion is justified?",
   "The post attracts attention but still needs verification",
   "Every share independently verifies it",
   "High engagement proves the opposite claim",
   "Engagement measures attention; source quality and independent evidence are needed to evaluate accuracy."
  ]
 }
];
const board=(title,lines)=>({t:'board',title,lines,box:true});
const questionPic=prompt=>{const lines=[];let line='';for(const word of prompt.split(' ')){if((line+' '+word).trim().length>34){lines.push(line);line=word;}else line+=(line?' ':'')+word;}if(line)lines.push(line);return board('Read the evidence',lines);};
const options=(r,i)=>{const a=r.slice(2,4);a.splice(i%3,0,r[1]);return a;};
const steps=sections.flatMap((s,i)=>s.teach.map((say,j)=>({skill:s.skill,say,pic:board(s.code+' · '+s.name,s.boards[j]),...(j===1&&(i%3===2||i===sections.length-1)?{check:{prompt:s.check[0],answer:s.check[1],options:options(s.check,i),hint:s.check[4],pic:questionPic(s.check[0])}}:{})})));
steps.push({skill:sections.at(-1).skill,summary:true,say:"Connect the unit by identifying the actors, the process and the evidence in each scenario. Choose a concept because its defining mechanism fits, not because a familiar word appears. Check what the data actually measure and distinguish a plausible interpretation from a claim the evidence cannot support.",pic:board('Connect the ideas',['Identify the process and its context','Find the evidence that distinguishes it','Check alternatives and limits'])});
export default {...{"id":"history-h-ap-gov-political-participation","subject":"history","level":5,"grade":9,"standard":"AP US Government and Politics, Unit 5","title":"Political participation","goal":"Explain and apply political participation using evidence, original scenarios and comparisons.","points":20},skills:Object.fromEntries(sections.map(s=>[s.skill,s.name])),outline:sections.map(s=>[s.code,s.name,[s.skill]]),steps,
items(put){let i=0;for(const s of sections)for(const r of s.questions){const a=options(r,i++),prompt=r[0]+' '+a.map((v,k)=>'ABC'[k]+': '+v).join('; ')+'. Answer A, B or C.';put(s.skill,prompt,'ABC'[a.indexOf(r[1])],questionPic(r[0]),r[4],[r[1]]);}}
};
