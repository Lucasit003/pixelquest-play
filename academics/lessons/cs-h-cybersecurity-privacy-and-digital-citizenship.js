/* Original course unit. Review record: docs/review/lessons/high-completion/cybersecurity-u5-accuracy.json.
   Deterministic choices preserve prompt-derived identities. */
const sections=[
 {
  "code": "5.1",
  "name": "Personal data, purpose and privacy",
  "skill": "s1",
  "teach": [
   "Personal data can identify or describe someone directly or through combination. A name is an obvious identifier; a repeated location trail can also reveal a routine. In an original club example, collecting a contact address to send meeting notices serves a stated purpose; collecting every member's continuous location does not serve that same need. Privacy concerns include appropriate collection and use, even when nobody breaks into a system. Do not equate a secure database with an appropriate purpose for every field.",
   "Data minimization means choosing information needed for a defined task rather than collecting everything available. In an original form, eight equally counted fields become three necessary fields: five are removed, a 62.5% reduction in field count. This is not a measured 62.5% reduction in privacy harm: fields have different sensitivities. Define access, sharing and retention as well as collection. A retention period should fit the purpose and applicable requirements, rather than being chosen merely because storage is cheap.",
   "Removing names can reduce risk without making re-identification impossible. Suppose an original table lists a broad age band and club for three people. If only one row matches a publicly known combination, the combination may identify that record. A replacement account code is a pseudonym, not proof of anonymity. Aggregation, reduced detail and controlled access can help, but their adequacy depends on the data and available outside information. A clear explanation of use supports informed choices; an unread checkbox alone does not show understanding."
  ],
  "boards": [
   [
    "Purpose comes before collection",
    "Contact address: send a club notice",
    "Continuous location: not needed for that task"
   ],
   [
    "Fictional form: 8 fields becomes 3",
    "5 fewer fields; 5/8 = 62.5%",
    "Field count is not a measure of total harm"
   ],
   [
    "Removing a name is not a guarantee",
    "Combinations may still identify a row",
    "Consider outside information and access"
   ]
  ],
  "eqs": [
   "Club notices → contact channel, not location trail",
   "3 retained + 5 removed = 8; 5/8 × 100 = 62.5%",
   "Age band + club → possible unique match"
  ],
  "questions": [
   [
    "An original club needs only to send meeting notices. Which proposed field is least justified by that purpose?",
    "A continuous precise location trail",
    "A member-selected contact address",
    "The member's choice to receive notices",
    "A location trail is unnecessary for sending a notice; the contact channel and notice preference directly support the stated task."
   ],
   [
    "Which original example can be personal data even if it contains no written name?",
    "A device's location trail linked to a person",
    "A fictional planet's invented diameter",
    "A list containing only the integers 1 and 2",
    "Context and linkability matter: a person's movement record can identify or describe them without a name field."
   ],
   [
    "An original app encrypts its database but sells records for an undisclosed unrelated purpose. Which distinction matters?",
    "Security protections do not settle whether a use respects privacy",
    "Encryption automatically makes every use appropriate",
    "Privacy concerns arise only after a hacker breaks in",
    "Encryption addresses protection of data; collection, disclosure and purpose can create privacy concerns without a security breach."
   ],
   [
    "What is data minimization in an original school-club service?",
    "Collecting only information needed for the stated task",
    "Collecting every available field in case it becomes useful",
    "Keeping every identifiable record forever",
    "Minimization connects data collection to a specified need; possible future convenience alone does not justify unlimited collection."
   ],
   [
    "An original form removes 6 of its 10 equally counted fields. What fraction of fields is removed?",
    "60%",
    "40%",
    "6%",
    "Six removed fields out of ten are six tenths; the four retained fields represent the remaining 40%."
   ],
   [
    "An original survey keeps 4 fields for each of 30 participants. How many filled field entries are there if every field is completed?",
    "120",
    "34",
    "7.5",
    "Each of 30 rows contributes four entries, so the total is 120; adding rows and columns does not count cells."
   ],
   [
    "Why does halving an original form's field count not prove that privacy harm is halved?",
    "Fields differ in sensitivity and how they can be combined",
    "Every field always has identical consequences",
    "Privacy harm is defined only by the number of columns",
    "Counts measure collected entries, while potential consequences depend on content, linkability, purpose and access."
   ],
   [
    "An original service retains identifiable records indefinitely only because storage is inexpensive. What needs reconsideration?",
    "Whether retention fits its purpose and applicable requirements",
    "Whether the database can use a larger font",
    "Whether cheap storage eliminates the need for a retention policy",
    "Cost does not establish a need to keep personal information; retention should be tied to purpose and relevant obligations."
   ],
   [
    "An original dataset replaces names with account codes but keeps a separate code-to-name key. What is accurate?",
    "People can be linked back using the key",
    "The data are necessarily impossible to re-identify",
    "Changing column labels destroys every link",
    "Replacing direct identifiers with codes does not remove the link when a mapping key still exists."
   ],
   [
    "An original table has one person in the age-band-and-club combination known from a public roster. What risk remains after deleting names?",
    "Linking the combination to that person",
    "A guarantee that all rows have become anonymous",
    "A guarantee that public information can never be combined",
    "Attributes that appear harmless separately may identify a record together; deleting names is not an anonymity proof."
   ],
   [
    "An original project publishes only totals for broad groups. Which statement is most careful?",
    "Aggregation can reduce exposure but still needs a disclosure-risk review",
    "Every aggregate is always safe to publish",
    "Aggregation always reveals each person's exact record",
    "Reduced detail can help, but tiny groups or combinations of releases may still expose information."
   ],
   [
    "An original privacy notice clearly explains purpose, recipients and retention. What does that help a reader evaluate?",
    "How their information is intended to be used",
    "A guarantee that no future breach can happen",
    "The exact truth of every advertisement",
    "A notice supports understanding of data practices; it is not proof of perfect security or unrelated factual claims."
   ],
   [
    "Which original example shows a new use of data that should be evaluated separately?",
    "Using club-contact records to build unrelated advertising profiles",
    "Sending the meeting notices members requested",
    "Correcting a misspelled contact address at a member's request",
    "An unrelated advertising purpose differs from the original notice service and requires its own privacy evaluation."
   ],
   [
    "An original employee can read a file for a work task. What does that access alone establish?",
    "They have that access, not permission for every possible use",
    "They may publish all the contents anywhere",
    "They own every person's information in the file",
    "Technical access and authorization for a particular purpose are different from unrestricted permission to disclose or reuse."
   ],
   [
    "Which original evidence best checks whether a service follows its stated retention rule?",
    "Compare dated records and deletion procedures with the stated rule",
    "Count the colors in its logo",
    "Assume a posted promise proves implementation",
    "Actual record ages and deletion behavior test compliance with the promise; branding and assertions do not."
   ],
   [
    "An original dataset contains 18 rows, and 3 match a stated attribute combination. What share matches?",
    "One sixth",
    "One third",
    "Three quarters",
    "Three matching rows among eighteen reduce to one sixth; the count alone does not establish the identities of those rows."
   ],
   [
    "An original service removes a record from its main database. What must be checked before claiming all copies are gone?",
    "Backups, exports and other retained copies",
    "Only whether the main screen is blank",
    "Only whether the file name changed",
    "Deleting one copy does not establish what happened to backups or exports; the claim requires checking the relevant storage locations."
   ],
   [
    "What is the strongest privacy-design question for an original new feature?",
    "Which data does this purpose need, who can use them, and for how long?",
    "How can every available field be collected by default?",
    "How can the notice avoid mentioning data use?",
    "Purpose, necessary data, access and retention make the design review concrete rather than assuming unlimited collection is justified."
   ]
  ],
  "pics": [
   null,
   {
    "t": "figure",
    "title": "Minimize the collected fields",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      204,
      167
     ],
     "P1": [
      237,
      167
     ],
     "P2": [
      237,
      134
     ],
     "P3": [
      204,
      134
     ],
     "P4": [
      247,
      167
     ],
     "P5": [
      280,
      167
     ],
     "P6": [
      280,
      134
     ],
     "P7": [
      247,
      134
     ],
     "P8": [
      290,
      167
     ],
     "P9": [
      323,
      167
     ],
     "P10": [
      323,
      134
     ],
     "P11": [
      290,
      134
     ],
     "P12": [
      333,
      167
     ],
     "P13": [
      366,
      167
     ],
     "P14": [
      366,
      134
     ],
     "P15": [
      333,
      134
     ],
     "P16": [
      376,
      167
     ],
     "P17": [
      409,
      167
     ],
     "P18": [
      409,
      134
     ],
     "P19": [
      376,
      134
     ],
     "P20": [
      419,
      167
     ],
     "P21": [
      452,
      167
     ],
     "P22": [
      452,
      134
     ],
     "P23": [
      419,
      134
     ],
     "P24": [
      462,
      167
     ],
     "P25": [
      495,
      167
     ],
     "P26": [
      495,
      134
     ],
     "P27": [
      462,
      134
     ],
     "P28": [
      505,
      167
     ],
     "P29": [
      538,
      167
     ],
     "P30": [
      538,
      134
     ],
     "P31": [
      505,
      134
     ],
     "P32": [
      204,
      97
     ],
     "P33": [
      237,
      97
     ],
     "P34": [
      237,
      64
     ],
     "P35": [
      204,
      64
     ],
     "P36": [
      247,
      97
     ],
     "P37": [
      280,
      97
     ],
     "P38": [
      280,
      64
     ],
     "P39": [
      247,
      64
     ],
     "P40": [
      290,
      97
     ],
     "P41": [
      323,
      97
     ],
     "P42": [
      323,
      64
     ],
     "P43": [
      290,
      64
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13P14P15P16P17P18P19P20P21P22P23P24P25P26P27P28P29P30P31P32P33P34P35P36P37P38P39P40P41P42P43",
    "dots": "",
    "segs": [],
    "polys": [
     {
      "v": "P0P1P2P3",
      "col": 0
     },
     {
      "v": "P4P5P6P7",
      "col": 0
     },
     {
      "v": "P8P9P10P11",
      "col": 0
     },
     {
      "v": "P12P13P14P15",
      "col": 0
     },
     {
      "v": "P16P17P18P19",
      "col": 0
     },
     {
      "v": "P20P21P22P23",
      "col": 0
     },
     {
      "v": "P24P25P26P27",
      "col": 0
     },
     {
      "v": "P28P29P30P31",
      "col": 0
     },
     {
      "v": "P32P33P34P35",
      "col": 1
     },
     {
      "v": "P36P37P38P39",
      "col": 1
     },
     {
      "v": "P40P41P42P43",
      "col": 1
     }
    ],
    "notes": [
     {
      "at": [
       320,
       213
      ],
      "text": "Fictional form: equal-sized cells count fields",
      "col": 0
     },
     {
      "at": [
       116,
       144
      ],
      "text": "Before: 8",
      "col": 0
     },
     {
      "at": [
       116,
       74
      ],
      "text": "Needed: 3",
      "col": 1
     },
     {
      "at": [
       320,
       29
      ],
      "text": "5 removed / 8 original = 62.5%; not a harm estimate",
      "col": 0
     }
    ],
    "circles": []
   },
   {
    "t": "setups",
    "title": "Invented records",
    "head": "Code",
    "cols": [
     "Age band",
     "Club"
    ],
    "rows": [
     [
      "X",
      "14–15",
      "Art"
     ],
     [
      "Y",
      "16–17",
      "Art"
     ],
     [
      "Z",
      "16–17",
      "Chess"
     ]
    ]
   }
  ],
  "qpics": {
   "15": {
    "t": "setups",
    "title": "Original attribute match",
    "head": "Category",
    "cols": [
     "Number of rows"
    ],
    "rows": [
     [
      "Match",
      "3"
     ],
     [
      "All rows",
      "18"
     ]
    ]
   }
  }
 },
 {
  "code": "5.2",
  "name": "Tracking, permissions and browser limits",
  "skill": "s2",
  "teach": [
   "Web services can use cookies for tasks such as remembering a session or preference; some tracking connects activity across visits or sites. Device fingerprinting uses characteristics of a browser or device, so cookies are not the only possible tracking mechanism. In an original example, disabling an advertising cookie does not show that a signed-in account stops recording its own activity. Distinguish the mechanism you changed from the broader claim you want to make.",
   "Match permissions to a feature. An original voice recorder needs microphone access while recording, but a contacts list is not required for that simple function. A city-level weather lookup can accept a city entered manually rather than requiring continuous precise location. Where supported, a selected-file permission can expose less information than an entire library. Review both the feature and how the app actually uses access; a permission setting is not a complete account of every collection method.",
   "Private browsing mainly limits certain local session records; it does not make you anonymous to visited services or network operators. Saved downloads can remain. HTTPS protects the connection to the site but does not establish that the site's claims are honest or its operator trustworthy. In an original test, a form claims to need a password on an unfamiliar HTTPS page: encryption does not justify submitting it. Inspect the destination and verify through a known route rather than treating a browser symbol as a truth certificate."
  ],
  "boards": [
   [
    "Cookies have several uses",
    "Accounts and fingerprints can also track",
    "Changing one mechanism is not a universal block"
   ],
   [
    "Match access to the feature",
    "Recorder: microphone while recording",
    "Choose narrower access where it fits"
   ],
   [
    "Private browsing ≠ online anonymity",
    "HTTPS protects a connection",
    "It does not certify the site's honesty"
   ]
  ],
  "eqs": [
   "Session cookie → remembered login; tracking use → linked activity",
   "3 needed permissions out of 7 requested → 4 unnecessary here",
   "Encrypted connection + deceptive page → deception remains"
  ],
  "questions": [
   [
    "In an original shopping site, what is a legitimate possible use of a cookie?",
    "Remembering a cart or session",
    "Physically increasing the screen size",
    "Guaranteeing every product claim is true",
    "Cookies can store or reference session information; they do not change hardware size or certify a seller's claims."
   ],
   [
    "An original service tracks a visitor on its own site. Which description fits?",
    "First-party tracking",
    "Proof that no data are collected",
    "A guarantee of anonymous browsing",
    "The service being visited is the first party; that label does not by itself establish whether the collection is appropriate."
   ],
   [
    "An original news site lets a separate advertising company track visitors. Which description fits?",
    "Third-party tracking",
    "Only offline file storage",
    "A guarantee that no other organization receives data",
    "A separate tracking company is a third party relative to the site the person visits."
   ],
   [
    "An original tracker uses browser configuration characteristics instead of a stored cookie. What is this mechanism called?",
    "Device fingerprinting",
    "A paper backup",
    "A password reset",
    "Fingerprinting combines device or browser characteristics; cookie deletion alone does not establish that this method has stopped."
   ],
   [
    "Why is deleting cookies insufficient evidence that an original signed-in service has forgotten all past activity?",
    "The service may retain account-linked records",
    "Every server record is stored only in the browser's cookies",
    "Cookie deletion necessarily erases every database worldwide",
    "Local cookies and service-side account records are different storage; removing one does not demonstrate deletion of the other."
   ],
   [
    "An original flashlight feature requests the full contacts list. What should the user examine?",
    "Why contacts are needed and whether access can be denied",
    "Whether the request proves the contacts are required",
    "Whether all permissions are harmless by definition",
    "The requested resource does not obviously support a flashlight; evaluate necessity instead of assuming every request is justified."
   ],
   [
    "An original voice-recording feature is used only while a person presses Record. Which access best fits that described need?",
    "Microphone access during recording",
    "Unrestricted contacts access",
    "Continuous location access unrelated to recording",
    "The microphone supports the feature; the other resources do not follow from the stated need."
   ],
   [
    "An original weather page accepts a typed city. Which choice can reduce location detail shared for that feature?",
    "Enter the city instead of enabling continuous precise location",
    "Share an all-day location trail automatically",
    "Assume weather always requires a contacts list",
    "A city-level forecast can use the entered city without a continuous precise trail for the described feature."
   ],
   [
    "An original app needs 3 of 7 requested permissions for its stated features. How many requests are unnecessary under that description?",
    "4",
    "10",
    "21",
    "Seven requested minus three needed leaves four unnecessary requests; the scenario explicitly defines the needed set."
   ],
   [
    "An original photo tool can accept one selected image or the entire library. Which option limits exposure while supplying that image?",
    "Grant access only to the selected image",
    "Grant access to every image because one is needed",
    "Publish the library to make selection easier",
    "Selected-item access can provide the needed input while exposing fewer unrelated files, when the platform supports it."
   ],
   [
    "What does an original private-browsing session fail to guarantee?",
    "Anonymity from the websites being visited",
    "A separate local session in browsers that provide one",
    "Reduced persistence of some local browsing records",
    "Private mode limits certain local traces; a website can still receive requests and recognize a signed-in account."
   ],
   [
    "A person downloads an original worksheet in Firefox Private Browsing. What should they expect about the saved file?",
    "It can remain after the private session ends",
    "It must automatically vanish from disk",
    "It becomes unreadable to every local user",
    "Private mode does not automatically remove downloaded files; closing the session is not file deletion."
   ],
   [
    "An unfamiliar original HTTPS site requests a secret recovery code. What does HTTPS alone establish?",
    "Protection of the connection, not the trustworthiness of the request",
    "That giving the code is necessarily safe",
    "That the site cannot be deceptive",
    "Connection encryption does not validate the operator's purpose; verify a sensitive request through a known legitimate route."
   ],
   [
    "An original privacy setting opts out of personalized advertising. What should not be assumed?",
    "That all advertisements must disappear",
    "That the setting may change personalization",
    "That advertising and personalization are different ideas",
    "An opt-out can affect how ads are selected without removing all advertising or all forms of data collection."
   ],
   [
    "An original ad blocker removes visible advertisements. Which additional claim requires evidence?",
    "That every form of tracking is blocked",
    "That fewer advertisements are visible in the test",
    "That the page appearance changed",
    "Blocking displayed ads does not establish complete tracking prevention; mechanisms and coverage vary."
   ],
   [
    "An original privacy dashboard reports location access is off. Which follow-up best tests a claim that no location can be inferred?",
    "Check other sources, such as a supplied address or network-derived rough location",
    "Assume all possible location information vanished",
    "Count only the number of dashboard buttons",
    "Location information can come from more than a sensor permission; review the actual claim and all relevant data sources."
   ],
   [
    "An original service sends a location request again after an update. What is the most defensible response?",
    "Review the current need and settings again",
    "Assume an old review proves every future permission is justified",
    "Enable every new request without checking",
    "Features and settings can change; a previous decision does not settle the purpose of a new request."
   ],
   [
    "What is a careful conclusion after one original tracking-control test?",
    "The tested mechanism was limited under the tested conditions",
    "All future tracking on every service is impossible",
    "Every person on the internet became anonymous",
    "A bounded test supports a bounded claim; different mechanisms, accounts and conditions require their own evidence."
   ]
  ],
  "pics": [
   null,
   {
    "t": "setups",
    "title": "Fictional voice recorder",
    "head": "Resource",
    "cols": [
     "Needed here?",
     "Stated feature"
    ],
    "rows": [
     [
      "Microphone",
      "While recording",
      "Record sound"
     ],
     [
      "Contacts",
      "No",
      "No contact feature"
     ],
     [
      "Location",
      "No",
      "No location feature"
     ]
    ]
   },
   {
    "t": "figure",
    "title": "Local privacy is not anonymity",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      87,
      165
     ],
     "P1": [
      233,
      165
     ],
     "P2": [
      233,
      89
     ],
     "P3": [
      87,
      89
     ],
     "P4": [
      259,
      165
     ],
     "P5": [
      405,
      165
     ],
     "P6": [
      405,
      89
     ],
     "P7": [
      259,
      89
     ],
     "P8": [
      431,
      165
     ],
     "P9": [
      577,
      165
     ],
     "P10": [
      577,
      89
     ],
     "P11": [
      431,
      89
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11",
    "dots": "",
    "segs": [],
    "polys": [
     {
      "v": "P0P1P2P3",
      "col": 1
     },
     {
      "v": "P4P5P6P7",
      "col": 2
     },
     {
      "v": "P8P9P10P11",
      "col": 3
     }
    ],
    "notes": [
     {
      "at": [
       320,
       214
      ],
      "text": "Different places can hold information",
      "col": 0
     },
     {
      "at": [
       160,
       134
      ],
      "text": "Browser",
      "col": 1
     },
     {
      "at": [
       160,
       106
      ],
      "text": "Local session",
      "col": 1
     },
     {
      "at": [
       332,
       134
      ],
      "text": "Service",
      "col": 2
     },
     {
      "at": [
       332,
       106
      ],
      "text": "Account records",
      "col": 2
     },
     {
      "at": [
       504,
       134
      ],
      "text": "Other copies",
      "col": 3
     },
     {
      "at": [
       504,
       106
      ],
      "text": "Downloads/exports",
      "col": 3
     },
     {
      "at": [
       320,
       51
      ],
      "text": "Clearing one place does not erase all the others",
      "col": 0
     },
     {
      "at": [
       320,
       29
      ],
      "text": "Schematic storage examples; not a packet trace",
      "col": 0
     }
    ],
    "circles": []
   }
  ]
 },
 {
  "code": "5.3",
  "name": "Digital footprints and account responsibility",
  "skill": "s3",
  "teach": [
   "A digital footprint includes information a person posts and records created through using services. Audience controls can reduce who normally sees a post, but recipients may make copies. In an original sharing example, twelve authorized recipients can read a photo; the setting does not prove that nobody can screenshot it. Deleting the original can help without guaranteeing removal of every copy. Review both what you share about yourself and whether other people agreed to being included.",
   "Use a unique strong password for each account and a password manager to help generate and store them. Multifactor authentication combines different categories of evidence, such as a password and possession of a security key. Two memorized secrets are still the same category. In an original comparison, a password plus a PIN is not automatically two-factor authentication; a password plus a properly used security key combines knowledge and possession. MFA improves protection without making every deception impossible.",
   "Urgency, impersonation and unexpected requests for secrets can signal phishing. Verify through a known app or independently obtained contact, not contact details supplied only in the suspicious message. Do not send a login verification code to an unsolicited caller or approve a login you did not initiate. If access seems compromised, use the service's legitimate recovery process and seek help from a trusted adult or administrator. Permission to use a shared device does not grant permission to read another person's account."
  ],
  "boards": [
   [
    "Audience controls limit intended access",
    "Recipients may still make copies",
    "Deletion of one copy is not deletion of all"
   ],
   [
    "Use distinct credentials for accounts",
    "MFA combines different factor categories",
    "Two knowledge secrets are still one category"
   ],
   [
    "Pause before an unexpected secret request",
    "Verify through a known independent route",
    "Use legitimate recovery and report concerns"
   ]
  ],
  "eqs": [
   "12 permitted viewers ≠ proof that only 12 copies exist",
   "Password + security key → knowledge + possession",
   "Unexpected login request → verify, do not approve blindly"
  ],
  "questions": [
   [
    "An original private group has 16 approved viewers. What does that setting fail to guarantee?",
    "That no approved viewer can copy a post",
    "That the group has an intended audience",
    "That access settings can limit ordinary viewing",
    "Audience settings control routine access but cannot guarantee that an authorized viewer will not take or share a copy."
   ],
   [
    "An original student deletes a public photo they posted. What is the most accurate conclusion?",
    "The original can be removed while other copies may remain",
    "Every screenshot everywhere must disappear",
    "Deletion can never reduce exposure at all",
    "Removing the original can reduce availability, but copies and cached versions require separate consideration."
   ],
   [
    "An original group photograph includes classmates who have not agreed to public posting. What respects their privacy?",
    "Ask about sharing and audience before posting",
    "Assume taking a photo grants consent for every use",
    "Publish their names and schedules automatically",
    "Agreement to being photographed and agreement to public sharing are different decisions; check the intended audience."
   ],
   [
    "Which original record can be part of a digital footprint without a deliberate public post?",
    "A service log recording account activity",
    "Only a handwritten note never digitized",
    "Only information printed in a newspaper",
    "Services can generate records through use; a footprint is not limited to intentional public statements."
   ],
   [
    "An original user reuses one password across three services. What risk does unique passwords reduce?",
    "One leaked password being tried on the other accounts",
    "All possible physical device damage",
    "The need to assess phishing messages",
    "Distinct credentials limit the spread of one credential leak; they do not solve every other security problem."
   ],
   [
    "What is an appropriate role for a password manager in an original account plan?",
    "Generate and store distinct strong passwords",
    "Publish every password to friends",
    "Guarantee that every website is honest",
    "A manager can help with credential uniqueness and storage; its use does not certify the trustworthiness of all destinations."
   ],
   [
    "An original login requires a memorized password and a memorized PIN. How many factor categories are represented?",
    "One: knowledge",
    "Two: knowledge and possession",
    "Three: knowledge, possession and biometrics",
    "Both secrets are things the user knows; two steps from one category do not by themselves constitute multifactor authentication."
   ],
   [
    "An original login combines a password with a hardware security key that the user possesses. Which categories are combined?",
    "Knowledge and possession",
    "Two knowledge factors only",
    "Possession and a guarantee of perfect safety",
    "The password is known and the key is possessed; combining categories adds protection but does not promise invulnerability."
   ],
   [
    "A person receives an original MFA approval request they did not initiate. What is the appropriate response?",
    "Do not approve it; verify and report through a trusted route",
    "Approve it merely to stop repeated prompts",
    "Send the password to the requester",
    "An unexpected approval request may be an attempted unauthorized login; annoyance does not establish legitimacy."
   ],
   [
    "An unsolicited original caller asks for a freshly sent login verification code. What should the account holder do?",
    "Keep the code private and verify using a trusted contact route",
    "Read the code aloud because the caller knows their name",
    "Assume every caller claiming to be support is authorized",
    "A code may enable access; knowing a name or claiming authority does not justify disclosing it to an unsolicited caller."
   ],
   [
    "An original message threatens account closure unless a secret is entered through its link. Which check is strongest?",
    "Open the known service independently to inspect the account",
    "Trust the message because it sounds urgent",
    "Use only the phone number inside that message",
    "An independently known route avoids relying on a destination controlled by the suspicious message."
   ],
   [
    "An original school lab computer is already signed into another student's account. What does physical access authorize?",
    "Only permitted use, not reading that student's private records",
    "Unrestricted copying of that student's messages",
    "Changing the student's credentials for convenience",
    "An unlocked session is a capability, not permission to inspect someone else's information; involve the appropriate owner or administrator."
   ],
   [
    "An original team gives a helper permission to edit one shared document. What follows?",
    "The helper should stay within that authorized scope",
    "The helper may inspect every member's private account",
    "The permission automatically covers every future system",
    "Authorization is bounded by the granted task and resources; access to one document does not expand to unrelated accounts."
   ],
   [
    "An original account audit finds 9 of 12 accounts have distinct passwords. What percentage have distinct passwords?",
    "75%",
    "25%",
    "108%",
    "Nine out of twelve is three quarters; the remaining three accounts are 25% of the set."
   ],
   [
    "In an original audit, 18 of 24 accounts have MFA enabled. How many do not?",
    "6",
    "42",
    "18",
    "The enabled and not-enabled counts must sum to 24, so six are not enabled in this fictional inventory."
   ],
   [
    "What does an original school teach correctly about updates and account safety?",
    "Updates can fix known flaws but do not make deceptive requests trustworthy",
    "Installing one update permanently eliminates all future threats",
    "Updates remove the need for unique passwords",
    "Patching and credential protection address different risks; a repaired flaw does not validate a suspicious message."
   ],
   [
    "An original user suspects an account takeover. Which response supports recovery?",
    "Use the legitimate service's recovery process and ask a trusted helper if needed",
    "Send recovery codes to an unknown account offering help",
    "Try to break into another user's account in retaliation",
    "Official recovery and trusted assistance support regaining control; disclosing secrets to strangers or retaliating adds risk."
   ],
   [
    "Which original sharing decision considers both security and privacy?",
    "Use an access-controlled folder and share only the necessary files",
    "Encrypt a folder and then publish everyone's unrelated personal data",
    "Assume any encrypted file may be shared with anyone",
    "Protection of access and limitation of content serve different needs; both matter when sharing information."
   ]
  ],
  "check": [
   "A fictional account checklist has 15 of 20 accounts using unique passwords. What fraction uses unique passwords?",
   "Three quarters",
   "One quarter",
   "Three halves",
   "Fifteen divided by twenty reduces to three quarters; the other five accounts are one quarter."
  ],
  "pics": [
   {
    "t": "figure",
    "title": "Audience and copying",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      87,
      165
     ],
     "P1": [
      233,
      165
     ],
     "P2": [
      233,
      89
     ],
     "P3": [
      87,
      89
     ],
     "P4": [
      235,
      127
     ],
     "P5": [
      255,
      127
     ],
     "P6": [
      259,
      165
     ],
     "P7": [
      405,
      165
     ],
     "P8": [
      405,
      89
     ],
     "P9": [
      259,
      89
     ],
     "P10": [
      407,
      127
     ],
     "P11": [
      427,
      127
     ],
     "P12": [
      431,
      165
     ],
     "P13": [
      577,
      165
     ],
     "P14": [
      577,
      89
     ],
     "P15": [
      431,
      89
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13P14P15",
    "dots": "",
    "segs": [
     {
      "v": "P4P5",
      "col": 0,
      "arrows": 1,
      "dash": false,
      "w": 2
     },
     {
      "v": "P10P11",
      "col": 0,
      "arrows": 1,
      "dash": false,
      "w": 2
     }
    ],
    "polys": [
     {
      "v": "P0P1P2P3",
      "col": 1
     },
     {
      "v": "P6P7P8P9",
      "col": 2
     },
     {
      "v": "P12P13P14P15",
      "col": 3
     }
    ],
    "notes": [
     {
      "at": [
       320,
       214
      ],
      "text": "Sharing example; schematic",
      "col": 0
     },
     {
      "at": [
       160,
       134
      ],
      "text": "Post",
      "col": 1
     },
     {
      "at": [
       160,
       106
      ],
      "text": "Set audience",
      "col": 1
     },
     {
      "at": [
       332,
       134
      ],
      "text": "Recipients",
      "col": 2
     },
     {
      "at": [
       332,
       106
      ],
      "text": "Can view",
      "col": 2
     },
     {
      "at": [
       504,
       134
      ],
      "text": "Copies",
      "col": 3
     },
     {
      "at": [
       504,
       106
      ],
      "text": "May persist",
      "col": 3
     },
     {
      "at": [
       320,
       41
      ],
      "text": "Audience controls do not prevent every screenshot",
      "col": 0
     }
    ],
    "circles": []
   },
   {
    "t": "setups",
    "title": "Authentication categories",
    "head": "Example",
    "cols": [
     "Categories",
     "MFA here?"
    ],
    "rows": [
     [
      "Password + PIN",
      "Knowledge only",
      "No"
     ],
     [
      "Password + security key",
      "Knowledge + possession",
      "Yes"
     ]
    ]
   },
   null
  ]
 },
 {
  "code": "5.4",
  "name": "Copyright, licenses and responsible reuse",
  "skill": "s4",
  "teach": [
   "In US copyright law, original expression can be protected when fixed in a medium; an idea or fact itself is not protected by copyright. A freely viewable image is not automatically free to reuse. Attribution identifies a source, while permission or an applicable legal exception addresses whether a use is allowed. In an original project, crediting a photographer does not by itself grant a reuse license. Keep the distinction between academic honesty and copyright: using someone else's work without acknowledgment can be plagiarism even when copying is otherwise permitted.",
   "A license grants specified permissions under conditions. CC BY 4.0 permits sharing and adaptation, including commercial use, when its terms are followed. Credit, the license link and indication of changes are central conditions; do not suggest the creator endorses your project. Other rights, including privacy and publicity, can still matter. In an original reuse note, record the creator and source, identify CC BY 4.0, link it and describe your crop; also preserve supplied notices as required. Do not assume every Creative Commons license has identical terms.",
   "US fair use is a contextual legal analysis, not an automatic educational exception or a fixed word allowance. It considers purpose and character, the original work's nature, the amount and importance taken, and market effects. A short but central extract can matter differently from an incidental passage. In an original classroom comparison, 'only 10%' does not settle the result. Check the applicable jurisdiction and actual conditions; a project's school setting does not eliminate the need to evaluate rights."
  ],
  "boards": [
   [
    "US copyright: expression, not the idea itself",
    "Publicly viewable does not mean public domain",
    "Credit and permission answer different questions"
   ],
   [
    "Check the exact license and its conditions",
    "CC BY 4.0: credit, link, mark changes",
    "Other rights and required notices still matter"
   ],
   [
    "US fair use depends on the circumstances",
    "Purpose, nature, amount, market effect",
    "There is no automatic fixed-percentage rule"
   ]
  ],
  "eqs": [
   "Credited photo + no permission shown → reuse still needs review",
   "Source + creator + license + change note → documented reuse",
   "10% copied alone → insufficient for a fair-use conclusion"
  ],
  "questions": [
   [
    "In a US-focused original project, which distinction is accurate?",
    "Copyright protects eligible expression, not a bare idea itself",
    "Every idea is automatically owned through copyright",
    "Facts become copyrighted merely by being stated",
    "Copyright can protect the way ideas are expressed without granting exclusive ownership of the underlying idea or fact."
   ],
   [
    "An original student finds a photograph publicly viewable online. What can they conclude about reuse rights from visibility alone?",
    "Reuse permission still needs to be checked",
    "Public viewing automatically places it in the public domain",
    "Every viewer becomes the copyright owner",
    "Access to view a work does not by itself grant a license to reproduce or adapt it."
   ],
   [
    "An original project credits a photographer but has no license or applicable exception established. What remains unresolved?",
    "Whether the planned reuse is authorized",
    "Whether credit automatically grants every right",
    "Whether the photographer's name is a substitute for permission",
    "Attribution identifies the source; it does not alone establish a lawful basis for the proposed use."
   ],
   [
    "What is plagiarism in an original school-writing example?",
    "Presenting someone else's words or ideas as one's own",
    "Any permitted quotation that clearly credits its source",
    "Every factual statement that another person has also made",
    "Plagiarism concerns misrepresentation of authorship; proper attribution is distinct from the separate copyright analysis."
   ],
   [
    "An original historical text is in the public domain in the applicable jurisdiction. What does that mean for its copyright status there?",
    "It is not protected by copyright there",
    "It can only be read with the author's permission",
    "Every new edition's added commentary is automatically unprotected",
    "Public-domain status concerns the work and jurisdiction; independently added protected material may require separate treatment."
   ],
   [
    "An original creator offers a work under CC BY 4.0. Which activity is allowed under that license if its terms are satisfied?",
    "Commercial sharing and adaptation",
    "Only private viewing with no copying",
    "Any use while ignoring attribution and other terms",
    "CC BY 4.0 grants broad reuse, including commercial adaptation, subject to its conditions and rights outside its scope."
   ],
   [
    "An original CC BY 4.0 image is cropped for a project. What should the reuse note include?",
    "Appropriate credit, a license link and an indication of changes",
    "Only a claim that the project made the original image",
    "A statement that no conditions apply",
    "The license requires credit and license information and marking modifications; supplied notices and other terms also need attention."
   ],
   [
    "An original project uses a CC BY 4.0 work. What should it avoid implying without separate basis?",
    "That the original creator endorses the project",
    "That the work has a source",
    "That a modification was made",
    "Attribution must not misleadingly suggest endorsement by the licensor; acknowledging source and changes is appropriate."
   ],
   [
    "Why should an original student inspect the exact Creative Commons license?",
    "Different licenses have different conditions",
    "All Creative Commons licenses prohibit every adaptation",
    "All Creative Commons licenses have no conditions",
    "The license name and version matter; permissions and restrictions are not identical across all CC licenses."
   ],
   [
    "An original CC-licensed photograph depicts a recognizable person. What separate issue can remain?",
    "Privacy or publicity rights beyond the copyright license",
    "A guarantee that every depicted person endorsed all uses",
    "A guarantee that the image cannot involve anyone's privacy",
    "A copyright license may not supply every permission needed for the intended use; other rights can still limit it."
   ],
   [
    "An original US project says, 'This is educational, so every copied work is fair use.' What is wrong with the claim?",
    "Educational purpose does not decide every fair-use factor",
    "Education is never relevant to fair use",
    "Fair use depends only on the student's age",
    "Educational purpose can matter, but courts assess multiple factors and circumstances rather than granting a universal exemption."
   ],
   [
    "An original US fair-use argument relies only on copying less than 10% of a work. What is the flaw?",
    "No fixed percentage automatically settles fair use",
    "Any amount below 10% is always permitted",
    "Any amount above one word is always prohibited",
    "Amount and importance are evaluated with other factors; there is no universal percentage that guarantees the result."
   ],
   [
    "Which is one of the US fair-use factors in an original comparison?",
    "Effect on the potential market for the original",
    "The color of the printer",
    "Whether the file name has an even number of letters",
    "Potential market effects are part of the statutory analysis; formatting trivia does not replace the actual factors."
   ],
   [
    "Why can an original short excerpt still require careful fair-use analysis?",
    "It may take an especially important part of the work",
    "Short excerpts are always fair in every context",
    "The amount used is the only relevant factor",
    "Substantiality is qualitative as well as quantitative, and the remaining factors still matter."
   ],
   [
    "An original assignment allows quotation with attribution. What should a student still check when publishing it publicly?",
    "The reuse rights and conditions for that public use",
    "Whether the school rule automatically changes copyright law",
    "Whether naming the teacher grants permission from the creator",
    "A classroom rule about attribution does not alone establish rights for a separate public distribution."
   ],
   [
    "An original team has permission to use an image only in a printed class booklet. What does that permission alone cover?",
    "The specified booklet use",
    "Every future advertisement and merchandise item",
    "Automatic ownership of the image",
    "Permission has scope; a limited grant should not be treated as an unrestricted transfer of rights."
   ],
   [
    "An original student writes a new explanation of a scientific fact in their own words. Which copyright distinction applies in the US?",
    "The fact itself is not protected, though another author's wording may be",
    "The first person to state the fact owns all later explanations",
    "Scientific facts cannot be discussed without a universal license",
    "Facts and their particular expression are distinct; avoid copying protected expression while explaining the underlying fact independently."
   ],
   [
    "Which original record best supports a responsible reuse review?",
    "The source, license version, required notices, changes and intended use",
    "Only the image's popularity",
    "Only a screenshot of its search ranking",
    "Documenting the permission basis and proposed use lets the team check whether conditions fit; popularity is not a reuse license."
   ]
  ],
  "pics": [
   {
    "t": "figure",
    "title": "Credit and reuse rights",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      70,
      168
     ],
     "P1": [
      280,
      168
     ],
     "P2": [
      280,
      92
     ],
     "P3": [
      70,
      92
     ],
     "P4": [
      361,
      168
     ],
     "P5": [
      571,
      168
     ],
     "P6": [
      571,
      92
     ],
     "P7": [
      361,
      92
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7",
    "dots": "",
    "segs": [],
    "polys": [
     {
      "v": "P0P1P2P3",
      "col": 1
     },
     {
      "v": "P4P5P6P7",
      "col": 2
     }
    ],
    "notes": [
     {
      "at": [
       320,
       213
      ],
      "text": "Two distinct questions in a fictional reuse review",
      "col": 0
     },
     {
      "at": [
       175,
       138
      ],
      "text": "Attribution",
      "col": 1
     },
     {
      "at": [
       175,
       108
      ],
      "text": "Whose work?",
      "col": 1
     },
     {
      "at": [
       466,
       138
      ],
      "text": "Rights basis",
      "col": 2
     },
     {
      "at": [
       466,
       108
      ],
      "text": "May I use it?",
      "col": 2
     },
     {
      "at": [
       320,
       47
      ],
      "text": "Credit alone is not a grant of permission",
      "col": 0
     }
    ],
    "circles": []
   },
   null,
   {
    "t": "figure",
    "title": "Contextual fair-use analysis",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      69,
      176
     ],
     "P1": [
      305,
      176
     ],
     "P2": [
      305,
      131
     ],
     "P3": [
      69,
      131
     ],
     "P4": [
      340,
      176
     ],
     "P5": [
      576,
      176
     ],
     "P6": [
      576,
      131
     ],
     "P7": [
      340,
      131
     ],
     "P8": [
      69,
      108
     ],
     "P9": [
      305,
      108
     ],
     "P10": [
      305,
      63
     ],
     "P11": [
      69,
      63
     ],
     "P12": [
      340,
      108
     ],
     "P13": [
      576,
      108
     ],
     "P14": [
      576,
      63
     ],
     "P15": [
      340,
      63
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13P14P15",
    "dots": "",
    "segs": [],
    "polys": [
     {
      "v": "P0P1P2P3",
      "col": 1
     },
     {
      "v": "P4P5P6P7",
      "col": 2
     },
     {
      "v": "P8P9P10P11",
      "col": 2
     },
     {
      "v": "P12P13P14P15",
      "col": 1
     }
    ],
    "notes": [
     {
      "at": [
       320,
       214
      ],
      "text": "US fair use: consider circumstances together",
      "col": 0
     },
     {
      "at": [
       187,
       148
      ],
      "text": "Purpose / character",
      "col": 1
     },
     {
      "at": [
       458,
       148
      ],
      "text": "Nature of work",
      "col": 2
     },
     {
      "at": [
       187,
       80
      ],
      "text": "Amount / importance",
      "col": 2
     },
     {
      "at": [
       458,
       80
      ],
      "text": "Market effects",
      "col": 1
     },
     {
      "at": [
       320,
       29
      ],
      "text": "No fixed word count or percentage settles the result",
      "col": 0
     }
    ],
    "circles": []
   }
  ]
 },
 {
  "code": "5.5",
  "name": "Respectful participation and responding to harm",
  "skill": "s5",
  "teach": [
   "Digital citizenship includes considering how messages and designs affect others. Text can omit tone and context, so ask for clarification rather than assuming the harshest interpretation of an ambiguous message. Repeated targeted harassment is different from a respectful disagreement about an idea. In an original club discussion, 'I disagree with this rule because...' addresses a proposal; repeated personal insults target a person. The person being harassed is not responsible for another person's choice to harass them.",
   "When harassment occurs, avoid retaliation or public forwarding that amplifies it. For ordinary non-explicit abusive messages, record useful evidence such as dates and screenshots, report through the platform and seek a trusted adult's support; blocking can limit further contact. If there is immediate danger, get urgent help from local emergency services. In an original case, a moderator receives a private report with the date and relevant text, while classmates avoid reposting the abuse. Evidence collection and public redistribution are different actions.",
   "Evaluate a community response using clear measures and safe participation. More reports after a reporting tool is introduced may reflect easier reporting rather than more incidents; report counts alone cannot distinguish these explanations. In original data, 8 reports among 200 participants and 12 among 300 are both 4 per 100. This is a reporting rate, not proof about every unreported experience. Review outcomes with affected people and protect their identities instead of treating a lower dashboard number as automatic success."
  ],
  "boards": [
   [
    "Critique an idea without targeting a person",
    "Ask for context when a message is ambiguous",
    "Harassment is the responsibility of its author"
   ],
   [
    "Do not amplify or retaliate",
    "Report, seek support, block when appropriate",
    "Immediate danger needs urgent local help"
   ],
   [
    "Reports are not all incidents",
    "8/200 = 12/300 = 4 per 100",
    "Check access to reporting and actual outcomes"
   ]
  ],
  "eqs": [
   "Disagree with a rule → explain reasons, avoid personal attack",
   "Private evidence for a report ≠ public reposting",
   "8 × 300 = 12 × 200; equal reporting rates"
  ],
  "questions": [
   [
    "An original club member disagrees with a proposed rule. Which response is constructive?",
    "Explain the disagreement using reasons without personal insults",
    "Repeatedly insult the proposer instead of discussing the rule",
    "Publish the proposer's private address",
    "A respectful response addresses the idea; personal harassment or exposing private information does not support discussion."
   ],
   [
    "An original text message seems ambiguous in tone. What can reduce misunderstanding?",
    "Ask for clarification before assuming hostile intent",
    "Assume missing facial cues prove hostility",
    "Forward it with an invented accusation",
    "Text may lack context; clarification can resolve uncertainty without escalating an unsupported interpretation."
   ],
   [
    "An original student is repeatedly targeted by hurtful messages. Who is responsible for choosing to send the harassment?",
    "The people sending it",
    "The target merely for having an account",
    "Every uninvolved reader equally",
    "The sender is responsible for the harmful action; using an account does not make a target responsible for being harassed."
   ],
   [
    "An original classmate sees a hurtful post targeting someone else. What can support the target without amplifying the post?",
    "Offer support and report through an appropriate channel",
    "Repost the insult publicly to more viewers",
    "Encourage others to join the attack",
    "Support and reporting can address harm while avoiding additional circulation of the abusive content."
   ],
   [
    "For original non-explicit abusive text messages, which record can help a report?",
    "Relevant text with dates and account details kept for the report",
    "An edited quote that changes what was said",
    "Only a guess about an unrelated person's identity",
    "Accurate evidence helps assess the report; altered or speculative material can mislead those responding."
   ],
   [
    "Why should an original bullying report preserve context?",
    "Context helps distinguish what happened and when",
    "Context is unnecessary if a rumor is popular",
    "Any cropped image always proves the whole story",
    "Relevant surrounding information can clarify an event; a popular claim or isolated crop may be incomplete."
   ],
   [
    "An original platform provides a block feature. What is a realistic purpose for using it?",
    "Limit further contact from the blocked account",
    "Guarantee all copies of prior posts disappear everywhere",
    "Prove a report has already been investigated",
    "Blocking can limit contact but does not automatically erase old copies or replace reporting and support."
   ],
   [
    "An original student faces a threat of immediate physical danger. What should take priority?",
    "Get urgent help from local emergency services and a trusted adult",
    "Wait for a future classroom survey",
    "Retaliate by threatening someone else",
    "Immediate danger calls for urgent real-world assistance; a survey or retaliation does not address immediate safety."
   ],
   [
    "An original school-related harassment case continues online. Which response is reasonable?",
    "Tell a trusted adult or school contact and use platform reporting",
    "Assume schools can never help with online situations",
    "Keep the problem secret because reporting is always forbidden",
    "Trusted adults and appropriate reporting channels can support a response; online context does not exclude school-related help."
   ],
   [
    "An original team receives a harassment report. Which handling respects privacy?",
    "Share necessary details only with people responsible for responding",
    "Publish the full report and personal details to everyone",
    "Treat a report as permission to reveal every private fact",
    "A response needs relevant evidence and support, not indiscriminate disclosure of the people involved."
   ],
   [
    "In original community data, 6 reports come from 150 participants and 10 from 250. Which reporting-rate comparison is correct?",
    "Both are 4 reports per 100 participants",
    "The second rate is twice the first",
    "The first rate is 150 reports per 100",
    "Six divided by 150 and ten divided by 250 both equal 0.04; compare rates rather than raw counts alone."
   ],
   [
    "An original platform introduces an easier reporting form and then receives more reports. What do counts alone establish?",
    "More reports were submitted, not necessarily more harmful incidents",
    "The form necessarily caused more harassment",
    "Every additional report must be false",
    "Submission counts can change because of reporting access or underlying events; more evidence is needed to distinguish causes."
   ],
   [
    "An original community has few reports but many users say they cannot find the report button. What is a measurement concern?",
    "Low counts may reflect reporting barriers",
    "Low counts prove nobody experienced harm",
    "Button accessibility cannot affect reporting",
    "An inaccessible reporting route can suppress counts, so a low count alone does not demonstrate a safe environment."
   ],
   [
    "An original moderator removes a harmful post after review. What should not be promised without evidence?",
    "That every copy has disappeared from all devices",
    "That the reviewed post was removed from that location",
    "That the community can communicate a decision",
    "A local removal does not establish the status of screenshots, exports or other copies."
   ],
   [
    "An original club asks for feedback on a safety rule. Which method includes affected people more effectively?",
    "Provide accessible and private ways to give feedback",
    "Ask only the rule's author whether it works",
    "Publish the names of everyone who reports a concern",
    "Accessible, appropriately private feedback can reveal varied experiences while avoiding unnecessary exposure."
   ],
   [
    "An original message impersonates a classmate to embarrass them. What is the central citizenship concern?",
    "Misrepresenting another person and causing harm",
    "A guaranteed harmless joke whenever it is online",
    "A license to publish all of that person's private data",
    "Impersonation can mislead others and harm the person represented; calling it a joke does not remove those effects."
   ],
   [
    "An original community response reduces reports from 20 to 12 while membership stays fixed. What is the decrease in report count?",
    "40%",
    "8%",
    "60%",
    "Eight fewer reports out of the original twenty is 40%; this arithmetic alone does not prove all harm fell by that amount."
   ],
   [
    "Which original conclusion avoids overstating a moderation evaluation?",
    "Examine reporting access, outcomes and affected users' experiences together",
    "One lower count proves every participant is safe",
    "A written rule proves it is always enforced",
    "Multiple measures can distinguish implementation and reporting effects; a policy statement or one count is incomplete evidence."
   ]
  ],
  "pics": [
   null,
   {
    "t": "figure",
    "title": "Support without amplification",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      87,
      165
     ],
     "P1": [
      233,
      165
     ],
     "P2": [
      233,
      89
     ],
     "P3": [
      87,
      89
     ],
     "P4": [
      235,
      127
     ],
     "P5": [
      255,
      127
     ],
     "P6": [
      259,
      165
     ],
     "P7": [
      405,
      165
     ],
     "P8": [
      405,
      89
     ],
     "P9": [
      259,
      89
     ],
     "P10": [
      407,
      127
     ],
     "P11": [
      427,
      127
     ],
     "P12": [
      431,
      165
     ],
     "P13": [
      577,
      165
     ],
     "P14": [
      577,
      89
     ],
     "P15": [
      431,
      89
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13P14P15",
    "dots": "",
    "segs": [
     {
      "v": "P4P5",
      "col": 0,
      "arrows": 1,
      "dash": false,
      "w": 2
     },
     {
      "v": "P10P11",
      "col": 0,
      "arrows": 1,
      "dash": false,
      "w": 2
     }
    ],
    "polys": [
     {
      "v": "P0P1P2P3",
      "col": 1
     },
     {
      "v": "P6P7P8P9",
      "col": 2
     },
     {
      "v": "P12P13P14P15",
      "col": 3
     }
    ],
    "notes": [
     {
      "at": [
       320,
       214
      ],
      "text": "Fictional non-explicit harassment report",
      "col": 0
     },
     {
      "at": [
       160,
       134
      ],
      "text": "Evidence",
      "col": 1
     },
     {
      "at": [
       160,
       106
      ],
      "text": "Keep context",
      "col": 1
     },
     {
      "at": [
       332,
       134
      ],
      "text": "Report",
      "col": 2
     },
     {
      "at": [
       332,
       106
      ],
      "text": "Private channel",
      "col": 2
     },
     {
      "at": [
       504,
       134
      ],
      "text": "Support",
      "col": 3
     },
     {
      "at": [
       504,
       106
      ],
      "text": "Trusted adult",
      "col": 3
     },
     {
      "at": [
       320,
       48
      ],
      "text": "Avoid retaliation and public redistribution of abuse",
      "col": 0
     },
     {
      "at": [
       320,
       27
      ],
      "text": "Immediate danger: seek urgent local help",
      "col": 0
     }
    ],
    "circles": []
   },
   {
    "t": "figure",
    "title": "Reports and reporting rates",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      161,
      121
     ],
     "P1": [
      231,
      121
     ],
     "P2": [
      231,
      57
     ],
     "P3": [
      161,
      57
     ],
     "P4": [
      406,
      153
     ],
     "P5": [
      476,
      153
     ],
     "P6": [
      476,
      57
     ],
     "P7": [
      406,
      57
     ],
     "P8": [
      127,
      57
     ],
     "P9": [
      516,
      57
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9",
    "dots": "",
    "segs": [
     {
      "v": "P8P9",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     }
    ],
    "polys": [
     {
      "v": "P0P1P2P3",
      "col": 1
     },
     {
      "v": "P4P5P6P7",
      "col": 2
     }
    ],
    "notes": [
     {
      "at": [
       320,
       213
      ],
      "text": "Fictional reporting counts; denominators differ",
      "col": 0
     },
     {
      "at": [
       196,
       132
      ],
      "text": "8 reports",
      "col": 1
     },
     {
      "at": [
       196,
       35
      ],
      "text": "First: 200 people",
      "col": 1
     },
     {
      "at": [
       441,
       164
      ],
      "text": "12 reports",
      "col": 2
     },
     {
      "at": [
       441,
       35
      ],
      "text": "Second: 300 people",
      "col": 2
     },
     {
      "at": [
       320,
       191
      ],
      "text": "8/200 = 12/300 = 4 per 100",
      "col": 0
     }
    ],
    "circles": []
   }
  ],
  "qpics": {
   "10": {
    "t": "setups",
    "title": "Original community reports",
    "head": "Period",
    "cols": [
     "Reports",
     "Participants"
    ],
    "rows": [
     [
      "First",
      "6",
      "150"
     ],
     [
      "Second",
      "10",
      "250"
     ]
    ]
   }
  }
 },
 {
  "code": "5.6",
  "name": "Information quality, inclusion and ethical decisions",
  "skill": "s6",
  "teach": [
   "Evaluate a claim by tracing its evidence and context. Lateral reading means leaving an unfamiliar page to investigate the source and compare independent information. Ten pages repeating one unsupported post are not ten independent confirmations. In an original example, an old flood photograph is labeled as today's storm: the photograph may be real while the caption is false. Check the original date, place and source. Polished design, popularity and confident AI-generated wording do not establish truth; generated citations also need verification.",
   "Digital systems can produce unequal results through data, design and use. In an original evaluation, Group A has 6 errors in 60 cases and Group B has 12 in 60: the error rates are 10% and 20%. The gap deserves investigation, but the table alone does not identify the cause. Accessibility can include text alternatives that convey meaningful image information and accurate synchronized captions for speech and relevant sounds. Test with affected users; a high average success rate can conceal barriers faced by a smaller group.",
   "Ethical decisions consider stakeholders, authorization, benefits, harms and alternatives. In an original club signup design, collecting three necessary fields can serve the task with less exposure than collecting ten; also provide an accessible way to participate. Laws, rules and ethical considerations overlap without being identical, and laws vary by jurisdiction. Ask what the design actually does, document evidence and limits, and revise when new evidence appears. Capability to access a system does not itself authorize exploration of other people's records."
  ],
  "boards": [
   [
    "Investigate source, date and original evidence",
    "Repeated copies are not independent support",
    "Confident wording does not establish accuracy"
   ],
   [
    "Fictional errors: 6/60 and 12/60",
    "10% and 20%; cause still needs investigation",
    "Test accessibility with affected users"
   ],
   [
    "Identify people affected and the authorized task",
    "Compare benefits, harms and alternatives",
    "Record evidence, limits and reasons"
   ]
  ],
  "eqs": [
   "Real image + false time/place caption → misleading claim",
   "6/60 = 10%; 12/60 = 20%; difference = 10 points",
   "Same task + fewer necessary data → reduced collection"
  ],
  "questions": [
   [
    "An original unfamiliar article makes a striking claim. What is lateral reading?",
    "Investigate its source and evidence using other independent sources",
    "Read only its own About page repeatedly",
    "Assume its layout proves its reliability",
    "Leaving the page to investigate who is behind it and trace evidence adds checks beyond the source's self-description."
   ],
   [
    "Ten original websites repeat the same unsupported post. How many independent originating pieces of evidence does repetition alone establish?",
    "Only the one originating claim, with no added independent support",
    "Ten independent confirmations automatically",
    "A guarantee that the claim is true",
    "Copies can share a single origin; counting repetitions is different from finding independent evidence."
   ],
   [
    "An original old photograph is accurately reproduced but falsely labeled as today's event. What is misleading?",
    "The time and event context",
    "The mere existence of a photograph",
    "The idea that photographs can ever provide evidence",
    "An authentic image can be used in a false context; verify date, place and relation to the claimed event."
   ],
   [
    "An original claim cites a study. Which check best evaluates the support?",
    "Read the relevant study and check whether its findings support that claim",
    "Count the number of syllables in the title",
    "Assume any citation guarantees a correct interpretation",
    "A source can be real yet misrepresented; examining methods, findings and context tests the claimed support."
   ],
   [
    "An original AI answer gives a confident factual statement with a citation. What should a student do?",
    "Verify the claim and that the cited source exists and supports it",
    "Treat confidence as proof of accuracy",
    "Assume citations generated by AI can never be invented",
    "Fluent generated text can include errors and fabricated references; verification requires evidence independent of the output."
   ],
   [
    "An original claim becomes popular online. What does popularity establish by itself?",
    "That it attracted attention, not that it is accurate",
    "That every part has been verified",
    "That no correction could ever be needed",
    "Attention and accuracy are different properties; sharing counts are not a substitute for checking evidence."
   ],
   [
    "An original article makes a claim about every teenager using a survey of volunteers from one app. What is a limitation?",
    "The sample may not represent all teenagers",
    "Every app volunteer sample necessarily represents everyone",
    "A large font eliminates selection bias",
    "Volunteers on one service can differ from nonusers and nonrespondents; broad generalization requires a justified sampling basis."
   ],
   [
    "In original testing, Group A has 8 errors among 80 cases and Group B has 18 among 90. What are the error rates?",
    "10% and 20%",
    "8% and 18%",
    "80% and 90%",
    "Divide each error count by its own tested total: 8/80 is 0.10 and 18/90 is 0.20."
   ],
   [
    "For original error rates of 10% and 20%, what is the gap in percentage points?",
    "10 percentage points",
    "100 percentage points",
    "30 percentage points",
    "Percentage-point differences subtract the rates; relative percentage change is a different measure."
   ],
   [
    "An original test finds different error rates between groups. What does that evidence alone fail to identify?",
    "The complete cause of the difference",
    "That the measured rates differ in this sample",
    "That further investigation may be useful",
    "The table describes outcomes; data, design, sampling and other conditions need investigation before attributing a cause."
   ],
   [
    "An original webpage contains an informative chart. What should an accessible text alternative convey?",
    "The chart's important information or function in context",
    "Only the words 'picture here' regardless of content",
    "A guarantee that every image needs the same description",
    "A meaningful alternative conveys what the image contributes; a generic label does not replace its information."
   ],
   [
    "An original educational video includes speech and a relevant alarm sound. What should accurate captions include?",
    "The speech and relevant non-speech audio",
    "Only the color of the speaker's shirt",
    "A silent blank box for every sound",
    "Captions communicate important audio with the video, including relevant sounds and speaker information where needed."
   ],
   [
    "An original service has a 95% overall task-success rate. Why still test with users who rely on assistive technology?",
    "The overall average can conceal barriers for a smaller group",
    "A high average proves every user has equal access",
    "Assistive-technology users cannot provide useful evidence",
    "Aggregate success can hide unequal experiences; testing relevant access needs helps identify concrete barriers."
   ],
   [
    "An original researcher can open a file accidentally exposed by a permission mistake. What ethical distinction matters?",
    "Technical ability to access it does not itself authorize examination",
    "Any accessible file is automatically free for any use",
    "A missing lock transfers ownership of the data",
    "Capability and authorization differ; a permission error is not a blanket grant to explore others' personal records."
   ],
   [
    "An original design saves time but collects unnecessary sensitive details. What is a fuller evaluation?",
    "Compare benefits, privacy harms and less intrusive alternatives",
    "Consider only the seconds saved",
    "Assume convenience settles every ethical issue",
    "Tradeoffs include affected people and feasible alternatives; one benefit alone does not settle the design's overall impact."
   ],
   [
    "An original policy review finds a lawful action may still expose people unnecessarily. What distinction is correct?",
    "Legal permission and ethical justification are not identical",
    "Anything legal is automatically the least harmful choice",
    "Ethical reflection is impossible when rules exist",
    "Law sets relevant constraints, while ethical evaluation can also consider harms, fairness and alternatives within them."
   ],
   [
    "An original team discovers new evidence contradicting its published technology claim. What supports information integrity?",
    "Correct the claim and explain the relevant evidence",
    "Hide the evidence to preserve the original wording",
    "Repeat the claim more often until it seems true",
    "Revising an unsupported claim improves accuracy; repetition and concealment do not resolve the contradiction."
   ],
   [
    "Which original project review best integrates digital citizenship?",
    "Check evidence, necessary data, authorization, inclusion and effects on people",
    "Check only whether the feature runs once",
    "Assume a popular feature needs no privacy or accessibility review",
    "Functionality is one requirement; responsible participation also considers truth, rights, access and foreseeable effects."
   ]
  ],
  "check": [
   "Fictional tests find 5 errors in 50 cases for Group A and 15 in 75 for Group B. What comparison is correct?",
   "Error rates are 10% and 20%",
   "Both error rates are 5%",
   "The rates are 50% and 75%",
   "Use each group's denominator: 5/50=0.10 and 15/75=0.20. The table alone does not explain the cause."
  ],
  "pics": [
   {
    "t": "figure",
    "title": "Trace information to evidence",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      87,
      165
     ],
     "P1": [
      233,
      165
     ],
     "P2": [
      233,
      89
     ],
     "P3": [
      87,
      89
     ],
     "P4": [
      235,
      127
     ],
     "P5": [
      255,
      127
     ],
     "P6": [
      259,
      165
     ],
     "P7": [
      405,
      165
     ],
     "P8": [
      405,
      89
     ],
     "P9": [
      259,
      89
     ],
     "P10": [
      407,
      127
     ],
     "P11": [
      427,
      127
     ],
     "P12": [
      431,
      165
     ],
     "P13": [
      577,
      165
     ],
     "P14": [
      577,
      89
     ],
     "P15": [
      431,
      89
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9P10P11P12P13P14P15",
    "dots": "",
    "segs": [
     {
      "v": "P4P5",
      "col": 0,
      "arrows": 1,
      "dash": false,
      "w": 2
     },
     {
      "v": "P10P11",
      "col": 0,
      "arrows": 1,
      "dash": false,
      "w": 2
     }
    ],
    "polys": [
     {
      "v": "P0P1P2P3",
      "col": 1
     },
     {
      "v": "P6P7P8P9",
      "col": 2
     },
     {
      "v": "P12P13P14P15",
      "col": 3
     }
    ],
    "notes": [
     {
      "at": [
       320,
       214
      ],
      "text": "Example evidence review; schematic",
      "col": 0
     },
     {
      "at": [
       160,
       134
      ],
      "text": "Claim",
      "col": 1
     },
     {
      "at": [
       160,
       106
      ],
      "text": "What is said?",
      "col": 1
     },
     {
      "at": [
       332,
       134
      ],
      "text": "Source",
      "col": 2
     },
     {
      "at": [
       332,
       106
      ],
      "text": "Date/context",
      "col": 2
     },
     {
      "at": [
       504,
       134
      ],
      "text": "Cross-check",
      "col": 3
     },
     {
      "at": [
       504,
       106
      ],
      "text": "Independent?",
      "col": 3
     },
     {
      "at": [
       320,
       42
      ],
      "text": "Ten copies of one claim are not ten independent tests",
      "col": 0
     }
    ],
    "circles": []
   },
   {
    "t": "figure",
    "title": "Error counts and rates",
    "view": [
     44,
     596,
     32,
     224
    ],
    "pts": {
     "P0": [
      162,
      107
     ],
     "P1": [
      232,
      107
     ],
     "P2": [
      232,
      59
     ],
     "P3": [
      162,
      59
     ],
     "P4": [
      406,
      155
     ],
     "P5": [
      476,
      155
     ],
     "P6": [
      476,
      59
     ],
     "P7": [
      406,
      59
     ],
     "P8": [
      125,
      59
     ],
     "P9": [
      516,
      59
     ]
    },
    "hide": "P0P1P2P3P4P5P6P7P8P9",
    "dots": "",
    "segs": [
     {
      "v": "P8P9",
      "col": 0,
      "arrows": 0,
      "dash": false,
      "w": 2
     }
    ],
    "polys": [
     {
      "v": "P0P1P2P3",
      "col": 1
     },
     {
      "v": "P4P5P6P7",
      "col": 2
     }
    ],
    "notes": [
     {
      "at": [
       320,
       213
      ],
      "text": "Fictional test: same denominator of 60 cases",
      "col": 0
     },
     {
      "at": [
       197,
       119
      ],
      "text": "6 errors",
      "col": 1
     },
     {
      "at": [
       197,
       37
      ],
      "text": "Group A",
      "col": 1
     },
     {
      "at": [
       441,
       167
      ],
      "text": "12 errors",
      "col": 2
     },
     {
      "at": [
       441,
       37
      ],
      "text": "Group B",
      "col": 2
     },
     {
      "at": [
       320,
       190
      ],
      "text": "6/60 = 10%; 12/60 = 20%; cause not established",
      "col": 0
     }
    ],
    "circles": []
   },
   null
  ],
  "qpics": {
   "7": {
    "t": "setups",
    "title": "Original test results",
    "head": "Group",
    "cols": [
     "Errors",
     "Cases"
    ],
    "rows": [
     [
      "A",
      "8",
      "80"
     ],
     [
      "B",
      "18",
      "90"
     ]
    ]
   }
  }
 }
];
const board=(title,lines)=>({t:'board',title,lines,box:true});
const questionPic=prompt=>{const lines=[];let line='';for(const word of prompt.split(' ')){if((line+' '+word).trim().length>34){lines.push(line);line=word;}else line+=(line?' ':'')+word;}if(line)lines.push(line);return board('Read the evidence',lines);};
const options=(r,i)=>{const a=r.slice(2,4);a.splice(i%3,0,r[1]);return a;};
const steps=sections.flatMap((s,i)=>s.teach.map((say,j)=>({skill:s.skill,say,...(s.eqs?.[j]?{eq:s.eqs[j]}:{}),pic:s.pics?.[j]||board(s.code+' · '+(s.boardTitle||s.name),s.boards[j]),...(j===s.teach.length-1&&(i%3===2||i===sections.length-1)?{check:{prompt:s.check[0],answer:s.check[1],options:options(s.check,i),hint:s.check[4],pic:s.checkPic||questionPic(s.check[0])}}:{})})));
steps.push({skill:sections.at(-1).skill,summary:true,say:"Connect privacy and digital citizenship by defining the task, the people affected and the evidence. Collect only needed data, assess permissions and retention, and distinguish security controls from appropriate use. Protect accounts and verify unexpected requests. Check reuse rights separately from attribution. Respond to harassment through support and appropriate reporting without amplifying it. Trace claims to sources, compare rates with their denominators, test accessibility and revise conclusions when evidence changes. A working feature or a confident statement is not enough to establish responsible design.",pic:board('Connect the ideas',['Identify the process and its context','Find the evidence that distinguishes it','Check alternatives and limits'])});
export default {...{"id":"cs-h-cybersecurity-privacy-and-digital-citizenship","subject":"cs","level":5,"grade":9,"standard":"Original thematic course outline informed by CSTA K-12 Computer Science Standards (2017), Impacts of Computing and Networks and the Internet, high school; not a claim of CSTA-certified alignment","title":"Privacy and Digital Citizenship","goal":"Evaluate personal-data practices, online claims, reuse rights, access decisions and community responses using evidence and explicit limits.","points":20,"progression":{"requires":["cs-h-cybersecurity-defending-systems"],"operations":3,"demand":"Compare original scenarios, trace permissions and information flows, calculate rates, and justify choices with sources and explicit limits."}},skills:Object.fromEntries(sections.map(s=>[s.skill,s.name])),outline:sections.map(s=>[s.code,s.name,[s.skill]]),steps,
items(put){let i=0;for(const s of sections)for(const [j,r] of s.questions.entries()){const a=options(r,i++),prompt=r[0]+' '+a.map((v,k)=>'ABC'[k]+': '+v).join('; ')+'. Answer A, B or C.';put(s.skill,prompt,'ABC'[a.indexOf(r[1])],s.qpics?.[j]||questionPic(r[0]),r[4],[r[1]]);}}
};
