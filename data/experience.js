/* ==========================================================================
   Experience
   --------------------------------------------------------------------------
   Rendered on /experience/. This is the long-form source of truth for my
   work history: the role, what I did, and why it mattered to the business.
   Resumes and summaries get generated from this, so keep the numbers exact.

   TO ADD A ROLE: copy a block below and drop it in the array. Newest first;
   order in the array is the order on the page.

   Fields
     id         (required) Anchor slug, e.g. "veup" -> /experience/#veup.
     company    (required) Display name.
     title      (required) Job title.
     start      (required) "Mon YYYY", e.g. "Feb 2026".
     end                   "Mon YYYY". Omit for a current role ("Present").
     type                  "Full-time", "Contract", "Part-time".
     location              Free text, e.g. "Remote" or "Austin, TX".
     summary    (required) Array of paragraphs. The narrative.
     note                  One line of context, e.g. why the role ended.
     highlights            Array of strings. The quantified wins.
     tech                  Array of strings. Rendered as monospace chips.
     techLabel             Overrides the "Technologies" heading.
     links                 Array of { label, href }.
   ========================================================================== */

const EXPERIENCE = [
  {
    id: "code-scribes",
    company: "Code Scribes LLC",
    title: "Founder",
    start: "Jul 2025",
    type: "Full-time",
    location: "Colorado Springs, CO · Remote",
    summary: [
      "I founded Code Scribes to make software engineering education more accessible and practical. I'm building ScribeCards, a flashcard product for technical certification prep, along with educational content and merchandise drops for the developer community.",
    ],
    links: [
      { label: "ScribeCards", href: "https://flashcards.codescribes.io" },
      { label: "Initial Commit sticker drop", href: "https://codescribes.io/merch" },
    ],
  },

  {
    id: "veup",
    company: "VeUP",
    title: "Principal Cloud Engineer",
    start: "Feb 2026",
    end: "Sep 2026",
    type: "Full-time",
    location: "Remote",
    summary: [
      "As Principal Cloud Engineer at VeUP, an AWS consulting partner, I led customer engagements delivering AI integrations on AWS and built internal tooling and platforms to bring agentic automation to VeUP's business operations.",
      "I designed a unified operations platform and implemented 8 agentic workflows that managed the customer lifecycle from onboarding through off-boarding across VeUP's 4 products, cutting client onboarding from weeks to hours.",
      "I also built a bi-directional sync between Salesforce and AWS Partner Central, accompanied by an admin UI allowing non-technical staff to manage the application and the data being synced. I worked directly with director-level stakeholders to define the problem and the outcomes they needed. Then I shipped a quick MVP and iterated on their feedback and on errors as they surfaced with real data. By the end I was teaching them details of the domain they were the experts in. The sync helped secure ~$90K in AWS funding.",
      "On the customer side, I delivered AI agents, MCP servers, and AWS integrations that connected LLMs to clients' APIs and business systems.",
    ],
    note: "My role ended when VeUP shut down in September 2026.",
    highlights: [
      "Cut client onboarding from weeks to hours across 4 products with 8 agentic workflows",
      "Built a bi-directional Salesforce ↔ AWS Partner Central sync that helped secure ~$90K in AWS funding",
      "Delivered AI agents, MCP servers, and AWS integrations that connected LLMs to client systems",
    ],
    tech: ["Python", "FastAPI", "Claude API & Agent SDK", "MCP", "AWS", "Salesforce", "AWS Partner Central"],
  },

  {
    id: "booz-allen",
    company: "Booz Allen Hamilton",
    title: "Contract Software Engineer",
    start: "Sep 2025",
    end: "Feb 2026",
    type: "Contract",
    location: "Remote",
    summary: [
      "Booz Allen Hamilton brought me on as a contract engineer to modernize the infrastructure behind its internal Developer Portal. I migrated three core services, JFrog Artifactory, Keycloak, and Backstage, from a Rancher Kubernetes cluster to Amazon EKS. Along the way I re-architected the production infrastructure for scalability, resilience, disaster recovery, and cost.",
      "By right-sizing overprovisioned compute and consolidating redundant environments, I cut infrastructure costs by ~$100K per year with under 10 minutes of downtime. I also implemented DNS-based disaster recovery across multiple regions and availability zones. Because the services already ran in every region, failover required only a DNS change, which gave the platform near-instant recovery.",
    ],
    highlights: [
      "Migrated Artifactory, Keycloak, and Backstage from Rancher Kubernetes to Amazon EKS",
      "Reduced infrastructure costs by ~$100K per year with under 10 minutes of downtime",
      "Enabled near-instant failover with DNS-based disaster recovery across multiple regions and AZs",
    ],
    tech: ["Kubernetes", "Amazon EKS", "Rancher", "AWS", "JFrog Artifactory", "Keycloak", "Backstage", "TypeScript"],
  },

  {
    id: "allio",
    company: "Allio Capital",
    title: "Director of Engineering",
    start: "Jun 2024",
    end: "Sep 2025",
    type: "Full-time",
    location: "Remote",
    summary: [
      "Allio Capital is a fintech offering institutional-grade macroeconomic insights and curated macro portfolios, built on the belief that \"Educated people make great investors.\" As Director of Engineering, I led 22 engineers across 4 teams. I was accountable for making sure everything we built served that mission: an experience that made investing easy and also taught users why they were making each investment.",
      "Under my leadership, the team launched Allio's mobile app and marketing site, which reached 10K+ downloads and $700K in assets under management. I also designed and built an ACH fraud detection system that prevented ~$182K in fraudulent transactions, protecting both customers and the company as money moved onto the platform.",
    ],
    highlights: [
      "Led 22 engineers across 4 teams to launch the mobile app and marketing site (10K+ downloads, $700K AUM)",
      "Designed and built an ACH fraud detection system that prevented ~$182K in fraudulent transactions",
      "Kept every product decision aligned with the company's investor-education mission",
    ],
    tech: ["TypeScript", "NestJS", "Python", "Docker", "Kubernetes", "AWS", "AWS CDK", "Terraform"],
  },

  {
    id: "edx",
    company: "edX",
    title: "Full-Stack Bootcamp Instructor",
    start: "Sep 2023",
    end: "Mar 2024",
    type: "Part-time",
    location: "Remote",
    summary: [
      "As a part-time instructor for an edX full-stack coding bootcamp, I taught and coached 54 students over a 12-week bootcamp. Classes met three nights a week, with office hours before and after each session. In each class I demonstrated concepts, walked students through the code, and answered questions.",
      "Students completed 3 team projects during the bootcamp. I coached each team to scope realistically so they could finish, and guided them through debugging without handing them the answer, building the problem-solving habits they would need on the job.",
    ],
    highlights: [
      "Taught and coached 54 students in full-stack web development",
      "Guided student teams through 3 projects, from scoping to completion",
    ],
    techLabel: "Taught",
    tech: ["HTML", "CSS", "JavaScript", "jQuery", "Node.js", "Express", "REST APIs", "GraphQL", "Apollo", "MongoDB", "MySQL", "React", "Stripe", "Git", "Progressive Web Apps", "Algorithms"],
  },

  {
    id: "hiddenlayer",
    company: "HiddenLayer",
    title: "Staff Software Engineer",
    start: "Feb 2023",
    end: "Mar 2024",
    type: "Full-time",
    location: "Remote",
    summary: [
      "I joined HiddenLayer, an AI security company, as a founding member of the Model Scanner team and led development of the product's v1 in Go. The scanner detects 115+ vulnerabilities in AI/ML models. I designed its Helm chart deployment strategy for private cloud and on-prem installs. I also deployed it to an Intel SGX secure enclave in Microsoft Azure, which played a pivotal role in Microsoft's interest and HiddenLayer's $50M Series A.",
      "I worked with Sales Engineering to deploy the scanner into customer environments, helping close $1M+ in contracts with Fortune Global 500 companies. I built an obfuscation system for its YARA rules to protect HiddenLayer's intellectual property.",
      "On the Platform team, I led the migration of 150+ repositories from Bitbucket and Drone CI to GitHub and GitHub Actions. I wrote shared CI/CD workflows and standard Makefiles for Go, Python, Docker, and Terraform, built API contract-testing tooling that reduced production bugs, and trained the team on all of it. The migration raised developer productivity ~20% and eliminated CI outages.",
    ],
    highlights: [
      "Led v1 of the AI/ML Model Scanner (115+ vulnerabilities), supporting partnerships with Microsoft and Hugging Face",
      "Helped close $1M+ in customer contracts by deploying the scanner into customer environments",
      "Migrated 150+ repositories to GitHub Actions, raising developer productivity ~20%",
      "Prototyped a data lake API architecture using Go and gRPC",
    ],
    tech: ["Go", "Python", "Helm", "Kubernetes", "Azure", "Intel SGX", "GitHub Actions", "Terraform", "Docker", "gRPC", "JFrog Artifactory", "YARA"],
  },

  {
    id: "idcore",
    company: "IDcore",
    title: "Head of Engineering",
    start: "Feb 2022",
    end: "Jan 2023",
    type: "Full-time",
    location: "Hybrid · Austin, TX",
    summary: [
      "As Head of Engineering at IDcore, I led a team of 7 engineers (2 full-time, 5 contractors) that launched 3 products in under 9 months. I translated customer feedback into strategic goals and technical roadmaps, and broke the work into clear Jira tickets: fewer than 5% were discarded, reopened, or marked irrelevant. I also ran the team's Agile ceremonies and SDLC.",
      "I stayed hands-on. I built the Vendor Portal and core REST APIs, and architected template repositories for web apps and REST APIs that let us stand up a new product in about a week. I set the quality bar, too: every repository stayed above 90% code coverage, and I reviewed every pull request before merge, which kept production bugs under five. I wrote the documents that defined our engineering culture, team commitments, and definition of done.",
    ],
    note: "After the core products launched, the company moved development offshore and US-based engineering roles were eliminated.",
    highlights: [
      "Launched 3 products in under 9 months leading a team of 7 engineers",
      "Built template repositories that cut new-product setup to about a week",
      "Held >90% code coverage across all repositories, with fewer than 5 production bugs",
    ],
    tech: ["TypeScript", "REST APIs", "Jira"],
  },

  {
    id: "living-security",
    company: "Living Security",
    title: "Senior Software Engineer",
    start: "Nov 2020",
    end: "Jan 2022",
    type: "Full-time",
    location: "Remote",
    summary: [
      "At Living Security, a cybersecurity awareness training company, I was the principal engineer for about half of the microservices behind the new Training Platform.",
      "After that launched, I moved to the Next Gen Reporting Platform, where I architected and built v1: an event-driven, serverless data pipeline that used an SNS-to-SQS fan-out to AWS Lambda for parallel processing. It scaled to 1.6M events per day and solved customers' biggest pain point with the training platform. I led development through a successful MVP with a simplified UI that gave customers useful insights, and mentored the team on AWS Step Functions in a serverless environment.",
      "I also fixed a data-integrity problem in the gamification microservice. I analyzed ~700K records to find duplicate events that were corrupting customer data, then refactored the service to eliminate data loss and keep results accurate.",
    ],
    highlights: [
      "Architected v1 of the Next Gen Reporting pipeline, scaling to 1.6M events per day",
      "Principal engineer for ~50% of the Training Platform's microservices",
      "Eliminated data loss across ~700K gamification records",
    ],
    tech: ["AWS Lambda", "SNS", "SQS", "Step Functions", "Serverless", "Microservices"],
  },

  {
    id: "cylance",
    company: "Cylance Inc.",
    title: "Software Engineer",
    start: "Dec 2017",
    end: "Nov 2020",
    type: "Full-time",
    location: "Austin, TX",
    summary: [
      "I started at Cylance building CylanceON-PREM and CylanceHYBRID, which brought CylancePROTECT endpoint security to high-security and air-gapped data centers. Both products required reverse-engineering the CylancePROTECT cloud system and rebuilding it to run efficiently with little room to scale horizontally or vertically. I shipped 20+ full-stack features, led support for legacy CylancePROTECT agents, and automated the build and release process, cutting release time from days to hours.",
      "After the on-prem products launched, I joined the Research & Intelligence Cloud Engineering team and led development efforts to break a monolith into microservices. I refactored a 300K-event-per-day threat classification pipeline to be 20% more efficient. I also architected a protocol translation service that let customers on v1 agents upgrade without risking outages.",
      "I mentored contractors and interns throughout my time there. One was a contract engineer in her first job out of college. I walked her through how our application was structured, how to write testable code, SOLID principles, and the twelve-factor app methodology, and she grew into a full-stack contributor.",
    ],
    highlights: [
      "Shipped 20+ full-stack features and cut release time from days to hours with automated release tooling",
      "Made a 300K-event-per-day threat classification pipeline 20% more efficient",
      "Architected a protocol translation service for outage-free v1 agent upgrades",
    ],
    tech: ["Python", "Flask", "React", "Laravel", "PHP", "Docker", "Redis", "AWS", "Bash"],
  },

  {
    id: "trader-interactive",
    company: "Trader Interactive",
    title: "Software Engineer",
    start: "Mar 2015",
    end: "Nov 2017",
    type: "Full-time",
    location: "Norfolk, VA",
    summary: [
      "On Trader Interactive's architecture team, I supported the core platform behind its online marketplaces: an ETL pipeline that processed ~400K inventory listings (~1.6M messages) per day, and the REST API that powered every marketplace web application. I also maintained the company's Jenkins build servers.",
      "The ETL application and REST APIs I built and maintained saved ~$3M in fees. I built tooling that reconciled vehicle makes and models, which improved data quality across all Trader Online products, and helped migrate the primary database from Oracle to MariaDB.",
      "Outside my core role, I served on the talent acquisition and retention committee. I wrote for the DELabs.io blog, chaired and co-chaired community hackathons, and represented the company at university job fairs. I also led teams of 5 engineers in 3 internal hackathons, winning 1st and 3rd place.",
    ],
    highlights: [
      "Saved ~$3M in fees by building and maintaining the ETL application and REST APIs",
      "Supported an ETL pipeline processing ~1.6M messages (~400K listings) per day",
      "Helped migrate the primary database from Oracle to MariaDB",
    ],
    tech: ["C#", "PHP", "JavaScript", "REST APIs", "ETL", "Jenkins", "Oracle", "MariaDB"],
  },

  {
    id: "colorado-water-institute",
    company: "Colorado Water Institute",
    title: "Web Development Intern",
    start: "May 2012",
    end: "Oct 2016",
    type: "Part-time",
    location: "Fort Collins, CO",
    summary: [
      "As a part-time web development intern at the Colorado Water Institute at Colorado State University, I owned the Institute's entire website and built 10+ outreach sites for researchers. Before I left, I trained the 2 interns who took over the site.",
    ],
    highlights: [
      "Owned the Institute's website end to end",
      "Built 10+ outreach sites for researchers",
      "Trained 2 interns to take over ownership of the site",
    ],
  },
];
