export interface Challenge {
  id: string;
  title: string;
  description: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  category: string;
  points: number;
  completions: number;
  timeEstimate: string;
  author: string;
  authorImage: string;
  content: string;
  resources: { name: string; url: string }[];
}

export function getChallenges(): Challenge[] {
  return [
    {
      id: "perma-leak-protocol",
      title: "PermaLeak Protocol",
      description:
        "Exploit broken access controls in Arweave-based storage apps.",
      difficulty: "Beginner",
      category: "Storage",
      points: 250,
      completions: 128,
      timeEstimate: "1-2 hours",
      author: "CryptoHacker",
      authorImage: "./public/pickachu.jpg",
      content: `
        <div>
  <h1>Storage Overdrive</h1>
  <p><strong>Difficulty:</strong> Beginner</p>
  <p><strong>Points:</strong> 250</p>
  <p><strong>Estimated Time:</strong> 1–2 hours</p>
  <p><strong>Completions:</strong> 128 hackers cleared it</p>

  <h2>Challenge Description</h2>
  <p>
    In this challenge, you’ll exploit a flawed custom access-control layer built on top of Arweave’s immutable permaweb storage.
  </p>

  <h2>Scenario</h2>
  <p>
    A decentralized app claims “zero leakage, ever” while storing sensitive user files on Arweave.
    But their access logic is enforced only at the UI level, not on-chain. Your mission: bypass the interface and retrieve a confidential file directly from the blockweave.
  </p>

  <h2>Objectives</h2>
  <ul>
    <li>Inspect how the dApp interacts with Arweave transactions</li>
    <li>Identify where access validation breaks down</li>
    <li>Craft a request that exposes hidden data</li>
    <li>Uncover the hidden flag stored permanently on-chain</li>
  </ul>

  <h2>Hints</h2>
  <ul>
    <li>Access control in Web2 ≠ Web3 — immutable means potentially exposed</li>
    <li>Arweave transaction metadata might be more revealing than you think</li>
    <li>Static frontends don’t guarantee secure data flows</li>
  </ul>
</div>
      `,
      resources: [
        { name: "Arweave Docs", url: "https://docs.arweave.org/developers" },
        {
          name: "SmartWeave Basics",
          url: "https://cookbook.arweave.dev/concepts/smartweave.html",
        },
        {
          name: "10 most Common Web3 Vulnerabilities",
          url: "https://medium.com/immunefi/the-top-10-most-common-vulnerabilities-in-web3-bf7a921d489f",
        },
      ],
    },
    {
      id: "immutable-intrusion",
      title: "Immutable Intrusion",
      description:
        "Respond to an attack targeting Arweave node signature validation.",
      difficulty: "Intermediate",
      category: "Security",
      points: 500,
      completions: 87,
      timeEstimate: "2-3 hours",
      author: "SecurityGuru",
      authorImage: "/Security-Guru.avif",
      content: `
        <div>
  <h1><strong>Persistent Panic</strong></h1>
  <p><strong>Difficulty:</strong> Intermediate</p>
  <p><strong>Points:</strong> 500</p>
  <p><strong>Estimated Time:</strong> 2–3 hours</p>
  <p><strong>Completions:</strong> 87 incident responders cleared it</p>
  <br>

  <h2><strong>Challenge Description</strong></h2>
  <p>
    This incident response simulation pits you against an ongoing attack on Arweave node validation logic.
  </p>
  <br>

  <h2><strong>Scenario</strong></h2>
  <p>
    A rogue validator is injecting malformed transactions into the network. If unchecked, it could lead to permanent corruption in indexed content.
    You must analyze the source, deploy a patch, and halt the propagation.
  </p>
  <br>

  <h2><strong>Objectives</strong></h2>
  <ul>
    <li><strong>Review</strong> the node’s signature-checking logic</li>
    <li><strong>Patch</strong> the vulnerability in your node</li>
    <li><strong>Stop</strong> further malicious writes</li>
    <li><strong>Confirm</strong> data integrity across local mirrors</li>
  </ul>
  <br>

  <h2><strong>Hints</strong></h2>
  <ul>
    <li>Pay close attention to <strong>signature canonicalization</strong></li>
    <li>Watch for <strong>replay patterns</strong> in TX headers</li>
    <li><strong>Immutable</strong> ≠ <strong>invulnerable</strong></li>
  </ul>
  <br>
</div>

      `,
      resources: [
        {
          name: "Arweave Node GitHub",
          url: "https://github.com/ar-io/ar-io-node",
        },
        {
          name: "Signature Validation Explained",
          url: "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.youtube.com/watch%3Fv%3Dc-m5b89tau0&ved=2ahUKEwiCpO2J-cmMAxUAAzQIHWlKLCYQ-4ACegQIGxAG&usg=AOvVaw3FpQmeLHI89m-ORvpKcRVq",
        },
        {
          name: "Immutable Data Handling",
          url: "https://www.solulab.com/what-is-immutable-ledger-in-blockchain-and-its-benefits/",
        },
      ],
    },
    {
      id: "backdoor-in-the-block",
      title: "Backdoor in the Block",
      description:
        "Uncover and patch backdoors in SmartWeave autonomous agents.",
      difficulty: "Advanced",
      category: "Agents",
      points: 750,
      completions: 42,
      timeEstimate: "3-5 hours",
      author: "AgentMaster",
      authorImage: "/placeholder.svg?height=40&width=40",
      content: `
        <div>
  <h1><strong>Agent Infiltration</strong></h1>
  <p><strong>Difficulty:</strong> Advanced</p>
  <p><strong>Points:</strong> 750</p>
  <p><strong>Estimated Time:</strong> 3–5 hours</p>
  <p><strong>Completions:</strong> 42 analysts succeeded</p>
  <br>

  <h2><strong>Challenge Description</strong></h2>
  <p>
    SmartWeave contracts power autonomous agents on Arweave. But not all of them are friendly.
  </p>
  <br>

  <h2><strong>Scenario</strong></h2>
  <p>
    One of your deployed AO agents is exhibiting rogue behavior. Its logic was obfuscated — and a backdoor is leaking data into a shadow wallet.
    Reverse-engineer the SmartWeave logic and neutralize the threat.
  </p>
  <br>

  <h2><strong>Objectives</strong></h2>
  <ul>
    <li><strong>Read</strong> and analyze SmartWeave contract state</li>
    <li><strong>Find</strong> the malicious condition in the logic</li>
    <li><strong>Isolate</strong> the trigger pattern and neutralize it</li>
    <li><strong>Deploy</strong> a patched version of the agent</li>
  </ul>
  <br>

  <h2><strong>Hints</strong></h2>
  <ul>
    <li>SmartWeave state lives <strong>on-chain</strong> — use it to your advantage</li>
    <li>The malicious function runs only on <strong>specific inputs</strong></li>
    <li>It may write to a <strong>TX you don’t own</strong> — trace it</li>
  </ul>
</div>
      `,
      resources: [
        {
          name: "SmartWeave Spec",
          url: "https://github.com/SmartWeaveDAO/Protocol-spec",
        },
        {
          name: "AO Platform Deep Dive",
          url: "https://arwiki.arweave.dev/#/en/Arweave",
        },
      ],
    },
    {
      id: "gateway-gambit",
      title: "Gateway Gambit",
      description:
        "Manipulate a compromised Arweave gateway to serve false data.",
      difficulty: "Intermediate",
      category: "Networking",
      points: 450,
      completions: 73,
      timeEstimate: "2-3 hours",
      author: "NetHunter",
      authorImage: "/placeholder.svg?height=40&width=40",
      content: `
        <div>
  <h1><strong>Gateway Cache Poisoning</strong></h1>
  <p><strong>Difficulty:</strong> Intermediate</p>
  <p><strong>Points:</strong> 500</p>
  <p><strong>Estimated Time:</strong> 2–3 hours</p>
  <p><strong>Completions:</strong> 61 whitehats succeeded</p>
  <br>

  <h2><strong>Challenge Description</strong></h2>
  <p>
    Gateways are the access layer of the permaweb. But what happens when a popular gateway caches the wrong data?
  </p>
  <br>

  <h2><strong>Scenario</strong></h2>
  <p>
    A major gateway has been misconfigured to prefer stale cache data over blockweave validation.
    Your objective is to craft a scenario where the gateway serves manipulated content — and then fix it before others exploit it.
  </p>
  <br>

  <h2><strong>Objectives</strong></h2>
  <ul>
    <li><strong>Analyze</strong> gateway caching logic</li>
    <li><strong>Bypass</strong> validation to insert a rogue response</li>
    <li><strong>Demonstrate</strong> false data retrieval via the public gateway</li>
    <li><strong>Deploy</strong> a patch or redirect mechanism</li>
  </ul>
  <br>

  <h2><strong>Hints</strong></h2>
  <ul>
    <li>Look at how gateways resolve <strong>TX IDs and metadata</strong></li>
    <li>Some gateways <strong>over-prioritize performance</strong></li>
    <li><strong>Static != safe</strong> if cache is poisoned</li>
  </ul>
</div>
      `,
      resources: [
        {
          name: "Arweave Gateway Protocols",
          url: "https://medium.com/ar-io/what-is-a-gateway-14fdd8c15076",
        },
        {
          name: "Manipulating CDN Responses",
          url: "https://developers.cloudflare.com/cache/concepts/cdn-cache-control/",
        },
      ],
    },
    {
      id: "profit-sharing-plunder",
      title: "Profit Sharing Plunder",
      description: "Exploit a flaw in a PST smart contract to siphon tokens.",
      difficulty: "Advanced",
      category: "Contracts",
      points: 800,
      completions: 29,
      timeEstimate: "4-5 hours",
      author: "TokenSniper",
      authorImage: "/placeholder.svg?height=40&width=40",
      content: `
        <div>
  <h1><strong>PST Drainer Exploit</strong></h1>
  <p><strong>Difficulty:</strong> Advanced</p>
  <p><strong>Points:</strong> 750</p>
  <p><strong>Estimated Time:</strong> 3–4 hours</p>
  <p><strong>Completions:</strong> 19 whitehats have succeeded</p>
  <br>

  <h2><strong>Challenge Description</strong></h2>
  <p>
    Profit Sharing Tokens (PSTs) enable revenue sharing for permaweb apps. But not every SmartWeave contract is airtight.
  </p>
  <br>

  <h2><strong>Scenario</strong></h2>
  <p>
    You’ve found a PST contract that doesn’t properly validate internal balances before executing transfers.
    Your goal: exploit this logic flaw and drain tokens to your account.
  </p>
  <br>

  <h2><strong>Objectives</strong></h2>
  <ul>
    <li><strong>Audit</strong> the SmartWeave contract source</li>
    <li><strong>Find</strong> inconsistencies in token transfer logic</li>
    <li><strong>Craft</strong> a custom interaction TX</li>
    <li><strong>Siphon</strong> PSTs to your address and reveal the flag</li>
  </ul>
  <br>

  <h2><strong>Hints</strong></h2>
  <ul>
    <li>State updates in SmartWeave are <strong>not real-time</strong></li>
    <li>Is the balance updated <strong>before or after</strong> validation?</li>
    <li>Watch out for <strong>re-entrant logic patterns</strong></li>
  </ul>
</div>
      `,
      resources: [
        {
          name: "SmartWeave PST Standard",
          url: "https://cookbook.arweave.dev/guides/deploying-psts.html",
        },
        {
          name: "Token Exploit Examples",
          url: "https://github.com/slowmist/Cryptocurrency-Security-Audit-Guide/blob/main/Blockchain-Common-Vulnerability-List.md",
        },
        {
          name: "Reading Arweave Contract State",
          url: "https://docs.arweavekit.com/smart-contracts/view-contract-state",
        },
      ],
    },
    {
      id: "mirror-maze",
      title: "Mirror Maze",
      description:
        "Trace a phishing attack across multiple mirrored permaweb apps.",
      difficulty: "Intermediate",
      category: "Forensics",
      points: 600,
      completions: 55,
      timeEstimate: "3-4 hours",
      author: "ChainTracer",
      authorImage: "/placeholder.svg?height=40&width=40",
      content: `
        <div>
  <h1><strong>Phantom Mirror Hunt</strong></h1>
  <p><strong>Difficulty:</strong> Intermediate</p>
  <p><strong>Points:</strong> 600</p>
  <p><strong>Estimated Time:</strong> 2–3 hours</p>
  <p><strong>Completions:</strong> 33 investigators cracked it</p>
  <br>

  <h2><strong>Challenge Description</strong></h2>
  <p>
    Mirroring on the permaweb enables fast app replication — but attackers use it too.
  </p>
  <br>

  <h2><strong>Scenario</strong></h2>
  <p>
    You’ve discovered a phishing campaign targeting a popular permaweb wallet. Multiple mirrored versions of the app exist on Arweave, each slightly altered.
    You must track them down, analyze the injection, and shut them off at the gateway level.
  </p>
  <br>

  <h2><strong>Objectives</strong></h2>
  <ul>
    <li><strong>Compare</strong> mirrored TXs of the original dApp</li>
    <li><strong>Identify</strong> the malicious payload</li>
    <li><strong>Trace</strong> its source wallet and hosting chain</li>
    <li><strong>Submit</strong> a gateway takedown flag</li>
  </ul>
  <br>

  <h2><strong>Hints</strong></h2>
  <ul>
    <li>Use <strong>Arweave GraphQL</strong> to query matching tags</li>
    <li>Phishers often <strong>reuse deploy scripts</strong></li>
    <li>Check the HTML payload for <strong>event listeners or iframe injections</strong></li>
  </ul>
</div>
      `,
      resources: [
        {
          name: "Arweave GraphQL Explorer",
          url: "https://arwiki.arweave.dev/#/en/creating-a-dapp-01",
        },
        {
          name: "Permaweb Security Practices",
          url: "https://medium.com/@perma_dao/permaweb-a-decentralized-microservices-architecture-33ac8dfd7696",
        },
        {
          name: "Malware Forensics 101",
          url: "https://blog.barracuda.com/2023/02/01/malware-101-introduction",
        },
      ],
    },
  ];
}

export function getChallenge(id: string): Challenge | undefined {
  return getChallenges().find((challenge) => challenge.id === id);
}

// Learning content data
export interface Course {
  id: string;
  title: string;
  description: string;
  icon: string;
  iconBg: string;
  modules: number;
  duration: string;
  level: string;
  featured?: boolean;
  progress?: number;
  modules_list?: CourseModule[];
}

export interface CourseModule {
  id: string;
  title: string;
  description: string;
  duration: string;
  completed?: boolean;
}

export function getCourses(): Course[] {
  return [
    {
      id: "intro-arweave-ao",
      title: "Introduction to Arweave & AO",
      description:
        "Learn the fundamentals of permanent storage and autonomous compute",
      icon: "BookOpen",
      iconBg: "bg-purple-600",
      modules: 8,
      duration: "4-6 hours",
      level: "Beginner",
      featured: true,
      modules_list: [
        {
          id: "intro-permanent-storage",
          title: "Introduction to Permanent Storage",
          description:
            "Learn the basics of permanent storage and why it matters",
          duration: "30 min",
          completed: true,
        },
        {
          id: "arweave-architecture",
          title: "Arweave Architecture",
          description: "Understand how Arweave works under the hood",
          duration: "45 min",
          completed: true,
        },
        {
          id: "autonomous-compute",
          title: "Autonomous Compute with AO",
          description: "Introduction to autonomous compute and the AO platform",
          duration: "1 hour",
          completed: true,
        },
        {
          id: "first-dapp",
          title: "Building Your First dApp",
          description: "Create a simple decentralized application on Arweave",
          duration: "1.5 hours",
          completed: false,
        },
        {
          id: "data-transactions",
          title: "Data Transactions",
          description: "Learn how to create and manage data transactions",
          duration: "45 min",
          completed: false,
        },
        {
          id: "smart-contracts",
          title: "Smart Contracts on Arweave",
          description:
            "Introduction to smart contracts in the Arweave ecosystem",
          duration: "1 hour",
          completed: false,
        },
        {
          id: "ao-agents",
          title: "Creating AO Agents",
          description: "Build your first autonomous agent on the AO platform",
          duration: "1.5 hours",
          completed: false,
        },
        {
          id: "advanced-concepts",
          title: "Advanced Concepts",
          description: "Explore advanced topics in Arweave and AO development",
          duration: "1 hour",
          completed: false,
        },
      ],
    },
    {
      id: "smart-contract-security",
      title: "Smart Contract Security",
      description:
        "Learn to write secure smart contracts and identify vulnerabilities",
      icon: "Shield",
      iconBg: "bg-red-600",
      modules: 6,
      duration: "3-5 hours",
      level: "Intermediate",
    },
    {
      id: "decentralized-storage",
      title: "Decentralized Storage",
      description: "Master the concepts of permanent and decentralized storage",
      icon: "Database",
      iconBg: "bg-blue-600",
      modules: 5,
      duration: "2-4 hours",
      level: "Beginner",
    },
    {
      id: "autonomous-agents",
      title: "Autonomous Agents",
      description: "Build and deploy autonomous agents on the AO platform",
      icon: "Zap",
      iconBg: "bg-yellow-600",
      modules: 7,
      duration: "4-6 hours",
      level: "Advanced",
    },
    {
      id: "web3-frontend",
      title: "Web3 Frontend Development",
      description: "Create modern UIs for decentralized applications",
      icon: "Code",
      iconBg: "bg-green-600",
      modules: 8,
      duration: "5-7 hours",
      level: "Intermediate",
    },
    {
      id: "cryptography-basics",
      title: "Cryptography Basics",
      description: "Understand the cryptographic foundations of Web3",
      icon: "Lock",
      iconBg: "bg-purple-600",
      modules: 4,
      duration: "2-3 hours",
      level: "Beginner",
    },
  ];
}

export function getCourse(id: string): Course | undefined {
  return getCourses().find((course) => course.id === id);
}

// Learning paths data
export interface LearningPath {
  id: string;
  title: string;
  description: string;
  icon: string;
  iconBg: string;
  courses: number;
  duration: string;
  courseIds: string[];
}

export function getLearningPaths(): LearningPath[] {
  return [
    {
      id: "web3-developer",
      title: "Web3 Developer",
      description:
        "Master the skills needed to build full-stack decentralized applications",
      icon: "Code",
      iconBg: "bg-gradient-to-r from-pink-600 to-purple-600",
      courses: 5,
      duration: "20-25 hours",
      courseIds: [
        "intro-arweave-ao",
        "decentralized-storage",
        "web3-frontend",
        "smart-contract-security",
        "cryptography-basics",
      ],
    },
    {
      id: "security-specialist",
      title: "Security Specialist",
      description:
        "Learn to identify and fix security vulnerabilities in decentralized systems",
      icon: "Shield",
      iconBg: "bg-gradient-to-r from-cyan-600 to-blue-600",
      courses: 4,
      duration: "15-20 hours",
      courseIds: ["smart-contract-security", "cryptography-basics"],
    },
    {
      id: "ao-expert",
      title: "AO Expert",
      description:
        "Become an expert in autonomous compute and agent development",
      icon: "Zap",
      iconBg: "bg-gradient-to-r from-yellow-600 to-orange-600",
      courses: 6,
      duration: "25-30 hours",
      courseIds: ["intro-arweave-ao", "autonomous-agents"],
    },
  ];
}

export function getLearningPath(id: string): LearningPath | undefined {
  return getLearningPaths().find((path) => path.id === id);
}

// Leaderboard data
export interface LeaderboardUser {
  id: string;
  username: string;
  avatar: string;
  level: number;
  points: number;
  monthlyPoints: number;
  completedChallenges: number;
  badges: string[];
}

export function getLeaderboardData() {
  const users: LeaderboardUser[] = [
    {
      id: "user1",
      username: "CryptoNinja",
      avatar: "/Builder2.avif",
      level: 10,
      points: 12500,
      monthlyPoints: 2300,
      completedChallenges: 42,
      badges: [
        "Storage Master",
        "Security Expert",
        "AO Pioneer",
        "Bug Hunter",
        "Top Contributor",
      ],
    },
    {
      id: "user2",
      username: "BlockchainWizard",
      avatar: "/explorer.avif",
      level: 9,
      points: 11200,
      monthlyPoints: 1800,
      completedChallenges: 38,
      badges: [
        "Challenge Creator",
        "Security Expert",
        "Mentor",
        "Early Adopter",
      ],
    },
    {
      id: "user3",
      username: "DecentralizedDev",
      avatar: "/progimage.avif",
      level: 8,
      points: 9800,
      monthlyPoints: 2100,
      completedChallenges: 35,
      badges: ["Storage Master", "AO Pioneer", "Community Leader"],
    },
    {
      id: "user4",
      username: "CryptoHacker",
      avatar: "/Sentinel.avif",
      level: 6,
      points: 8750,
      monthlyPoints: 1500,
      completedChallenges: 24,
      badges: [
        "Newbie Hacker",
        "Storage Master",
        "Quick Learner",
        "Bug Hunter",
      ],
    },
    {
      id: "user5",
      username: "ArweaveExplorer",
      avatar: "/Security-Guru.avif",
      level: 7,
      points: 8200,
      monthlyPoints: 1200,
      completedChallenges: 28,
      badges: ["Storage Master", "Data Scientist", "Archivist"],
    },
    {
      id: "user6",
      username: "AODeveloper",
      avatar: "/pickachu.jpg",
      level: 5,
      points: 6500,
      monthlyPoints: 1900,
      completedChallenges: 22,
      badges: ["Agent Creator", "AO Pioneer"],
    },
    {
      id: "user7",
      username: "SecurityGuru",
      avatar: "/Builder.avif",
      level: 8,
      points: 9200,
      monthlyPoints: 1100,
      completedChallenges: 32,
      badges: ["Security Expert", "Bug Hunter", "Penetration Tester"],
    },
    {
      id: "user8",
      username: "PermanentData",
      avatar: "/leaderboard3.jpeg",
      level: 6,
      points: 7800,
      monthlyPoints: 900,
      completedChallenges: 26,
      badges: ["Storage Master", "Archivist", "Data Scientist"],
    },
    {
      id: "user9",
      username: "SmartContractPro",
      avatar: "/leaderboard2.jpeg",
      level: 7,
      points: 8500,
      monthlyPoints: 1600,
      completedChallenges: 30,
      badges: ["Contract Wizard", "Security Expert", "Code Reviewer"],
    },
    {
      id: "user10",
      username: "CryptoCoder",
      avatar: "/leaderboard.jpeg",
      level: 5,
      points: 6200,
      monthlyPoints: 1400,
      completedChallenges: 20,
      badges: ["Newbie Hacker", "Quick Learner"],
    },
  ];

  // Sort users by points for the main leaderboard
  const sortedUsers = [...users].sort((a, b) => b.points - a.points);

  // Get top 3 users
  const topUsers = sortedUsers.slice(0, 3);

  // Get unique categories from badges
  const allBadges = users.flatMap((user) => user.badges);
  const categories = [...new Set(allBadges)];

  return {
    users: sortedUsers,
    topUsers,
    categories,
  };
}

// CTF Challenge data
export interface CTFChallenge {
  id: string;
  title: string;
  description: string;
  background: string;
  difficulty: string;
  categories: string[];
  platform: string;
  platformIcon?: string;
  reward: number;
  timeLeft: string;
  timePercentage: number;
  participants: number;
  submissions: number;
  tags: string[];
  objectives: string[];
  resources: { name: string; url: string; description?: string }[];
  scope: {
    inScope: { name: string; description: string; tags: string[] }[];
    outOfScope: string[];
  };
  rules: string[];
  rewards: { level: string; amount: number; description: string }[];
  contacts: {
    primary: string;
    discord: string;
    email: string;
  };
}

export interface AttackVector {
  id: string;
  name: string;
  description: string;
  severity: string;
  category: string;
  frequency: string;
  relatedTo: string[];
}

export function getCTFChallenges() {
  const challenges: CTFChallenge[] = [
    {
      id: "defi-protocol-audit",
      title: "Decentralized File Storage CTF",
      description: "Find vulnerabilities in a decentralized finance protocol's smart contracts and frontend implementation. Arweave is a decentralized, permanent storage protocol built on a novel blockchain-like structure called the blockweave. It allows data to be stored forever with a single, upfront payment — making it ideal for archiving, dApps, and censorship-resistant publishing.",
      difficulty: "Hard",
      categories: ["Smart Contract", "Decentralized File Storage"],
      platform: "Arweave",
      platformIcon: "/arweave_ctf.png",
      reward: 50000,
      timeLeft: "14 days",
      timePercentage: 65,
      participants: 128,
      submissions: 42,
      tags: ["Smart Contract", "Solidity", "ERC-20", "AMM"],
      objectives: [
        "Identify vulnerabilities in smart contract implementation",
        "Find potential exploits in the liquidity pool mechanism",
        "Discover any issues with the staking and reward distribution",
        "Identify front-running opportunities or MEV vulnerabilities",
      ],
      resources: [
        {
          name: "GitHub Repository",
          url: "#",
          description: "Source code for the protocol",
        },
        {
          name: "Documentation",
          url: "#",
          description: "Technical documentation and architecture",
        },
        {
          name: "Testnet Deployment",
          url: "#",
          description: "Deployed contracts on Goerli testnet",
        },
      ],
      scope: {
        inScope: [
          {
            name: "Core Protocol Contracts",
            description: "The main protocol contracts including pools, staking, and governance",
            tags: ["Solidity", "ERC-20", "ERC-721"],
          },
          {
            name: "Frontend Application",
            description: "The web interface for interacting with the protocol",
            tags: ["React", "Web3.js", "TypeScript"],
          },
        ],
        outOfScope: [
          "Third-party dependencies and libraries",
          "Centralized infrastructure (AWS, etc.)",
          "Known issues documented in the repository",
        ],
      },
      rules: [
        "All vulnerabilities must be reported through the official submission form",
        "Do not disclose vulnerabilities publicly before they are fixed",
        "Do not disclose vulnerabilities publicly before they are fixed",
        "Do not exploit vulnerabilities to steal or damage user funds",
        "Provide detailed reproduction steps for all reported issues",
        "Multiple submissions of the same vulnerability will be awarded to the first valid submission",
      ],
      rewards: [
        {
          level: "Critical",
          amount: 50000,
          description: "Vulnerabilities that can lead to direct loss of funds or complete protocol takeover",
        },
        {
          level: "High",
          amount: 25000,
          description: "Vulnerabilities that can lead to significant loss of funds or protocol disruption",
        },
        {
          level: "Medium",
          amount: 10000,
          description: "Vulnerabilities that can lead to limited loss of funds or protocol disruption",
        },
        {
          level: "Low",
          amount: 2500,
          description: "Vulnerabilities that have minimal impact on the protocol or users",
        },
      ],
      contacts: {
        primary: "Security Team",
        discord: "https://discord.gg/defiprotocol",
        email: "security@defiprotocol.com",
      },
      background: ""
    },
    {
      id: "nft-marketplace-audit",
      title: "NFT Marketplace Security Challenge",
      description:
        "Identify security vulnerabilities in a new NFT marketplace platform built on Solana.",
      background:
        "This NFT marketplace allows users to create, buy, sell, and trade NFTs with low fees and high throughput. The platform includes features like auctions, collections, and royalties.",
      difficulty: "Medium",
      categories: ["Smart Contract", "NFT"],
      platform: "Solana",
      platformIcon: "/placeholder.svg?height=24&width=24",
      reward: 30000,
      timeLeft: "21 days",
      timePercentage: 80,
      participants: 95,
      submissions: 28,
      tags: ["NFT", "Rust", "SPL", "Marketplace"],
      objectives: [
        "Identify vulnerabilities in the marketplace smart contracts",
        "Find potential exploits in the auction mechanism",
        "Discover any issues with royalty payments",
        "Identify front-end vulnerabilities or API issues",
      ],
      resources: [
        {
          name: "GitHub Repository",
          url: "#",
          description: "Source code for the marketplace",
        },
        {
          name: "Documentation",
          url: "#",
          description: "Technical documentation and architecture",
        },
        {
          name: "Devnet Deployment",
          url: "#",
          description: "Deployed program on Solana devnet",
        },
      ],
      scope: {
        inScope: [
          {
            name: "Marketplace Program",
            description: "The main Solana program for the marketplace",
            tags: ["Rust", "Solana Program", "SPL"],
          },
          {
            name: "Frontend Application",
            description:
              "The web interface for interacting with the marketplace",
            tags: ["React", "Solana Web3.js", "TypeScript"],
          },
        ],
        outOfScope: [
          "Third-party dependencies and libraries",
          "Centralized infrastructure (AWS, etc.)",
          "Known issues documented in the repository",
        ],
      },
      rules: [
        "All vulnerabilities must be reported through the official submission form",
        "Do not disclose vulnerabilities publicly before they are fixed",
        "Do not exploit vulnerabilities to steal or damage user assets",
        "Provide detailed reproduction steps for all reported issues",
        "Multiple submissions of the same vulnerability will be awarded to the first valid submission",
      ],
      rewards: [
        {
          level: "Critical",
          amount: 30000,
          description:
            "Vulnerabilities that can lead to direct loss of NFTs or complete marketplace takeover",
        },
        {
          level: "High",
          amount: 15000,
          description:
            "Vulnerabilities that can lead to significant loss of NFTs or marketplace disruption",
        },
        {
          level: "Medium",
          amount: 7500,
          description:
            "Vulnerabilities that can lead to limited loss of NFTs or marketplace disruption",
        },
        {
          level: "Low",
          amount: 1500,
          description:
            "Vulnerabilities that have minimal impact on the marketplace or users",
        },
      ],
      contacts: {
        primary: "Security Team",
        discord: "https://discord.gg/nftmarketplace",
        email: "security@nftmarketplace.com",
      },
    },
    {
      id: "bridge-security-audit",
      title: "Cross-Chain Bridge Security Audit",
      description:
        "Find vulnerabilities in a cross-chain bridge connecting multiple blockchains.",
      background:
        "This cross-chain bridge allows users to transfer assets between Ethereum, Binance Smart Chain, Polygon, and Avalanche. The bridge uses a combination of smart contracts and validators to ensure secure asset transfers.",
      difficulty: "Critical",
      categories: ["Smart Contract", "Bridge"],
      platform: "Multi-chain",
      platformIcon: "/placeholder.svg?height=24&width=24",
      reward: 100000,
      timeLeft: "30 days",
      timePercentage: 50,
      participants: 76,
      submissions: 15,
      tags: ["Bridge", "Multi-chain", "Solidity", "Validators"],
      objectives: [
        "Identify vulnerabilities in the bridge smart contracts",
        "Find potential exploits in the validator mechanism",
        "Discover any issues with the asset locking and minting process",
        "Identify cross-chain replay attack vectors",
      ],
      resources: [
        {
          name: "GitHub Repository",
          url: "#",
          description: "Source code for the bridge",
        },
        {
          name: "Documentation",
          url: "#",
          description: "Technical documentation and architecture",
        },
        {
          name: "Testnet Deployment",
          url: "#",
          description: "Deployed contracts on various testnets",
        },
      ],
      scope: {
        inScope: [
          {
            name: "Bridge Contracts",
            description:
              "The smart contracts deployed on each supported blockchain",
            tags: ["Solidity", "EVM", "Multi-chain"],
          },
          {
            name: "Validator Network",
            description: "The validator network that secures the bridge",
            tags: ["Go", "Consensus", "P2P"],
          },
          {
            name: "Frontend Application",
            description: "The web interface for interacting with the bridge",
            tags: ["React", "Web3.js", "TypeScript"],
          },
        ],
        outOfScope: [
          "Third-party dependencies and libraries",
          "Centralized infrastructure (AWS, etc.)",
          "Known issues documented in the repository",
        ],
      },
      rules: [
        "All vulnerabilities must be reported through the official submission form",
        "Do not disclose vulnerabilities publicly before they are fixed",
        "Do not exploit vulnerabilities to steal or damage user funds",
        "Provide detailed reproduction steps for all reported issues",
        "Multiple submissions of the same vulnerability will be awarded to the first valid submission",
      ],
      rewards: [
        {
          level: "Critical",
          amount: 100000,
          description:
            "Vulnerabilities that can lead to direct loss of funds or complete bridge takeover",
        },
        {
          level: "High",
          amount: 50000,
          description:
            "Vulnerabilities that can lead to significant loss of funds or bridge disruption",
        },
        {
          level: "Medium",
          amount: 20000,
          description:
            "Vulnerabilities that can lead to limited loss of funds or bridge disruption",
        },
        {
          level: "Low",
          amount: 5000,
          description:
            "Vulnerabilities that have minimal impact on the bridge or users",
        },
      ],
      contacts: {
        primary: "Security Team",
        discord: "https://discord.gg/bridgeprotocol",
        email: "security@bridgeprotocol.com",
      },
    },
    {
      id: "dao-governance-audit",
      title: "DAO Governance Security Challenge",
      description:
        "Identify vulnerabilities in a decentralized autonomous organization's governance system.",
      background:
        "This DAO allows token holders to propose and vote on changes to the protocol. The governance system includes features like delegation, quadratic voting, and timelock execution.",
      difficulty: "Medium",
      categories: ["Smart Contract", "Governance"],
      platform: "Ethereum",
      platformIcon: "/placeholder.svg?height=24&width=24",
      reward: 40000,
      timeLeft: "18 days",
      timePercentage: 70,
      participants: 62,
      submissions: 19,
      tags: ["DAO", "Governance", "Solidity", "Voting"],
      objectives: [
        "Identify vulnerabilities in the governance smart contracts",
        "Find potential exploits in the voting mechanism",
        "Discover any issues with the proposal and execution process",
        "Identify governance attacks like flash loans or vote buying",
      ],
      resources: [
        {
          name: "GitHub Repository",
          url: "#",
          description: "Source code for the DAO",
        },
        {
          name: "Documentation",
          url: "#",
          description: "Technical documentation and architecture",
        },
        {
          name: "Testnet Deployment",
          url: "#",
          description: "Deployed contracts on Goerli testnet",
        },
      ],
      scope: {
        inScope: [
          {
            name: "Governance Contracts",
            description: "The smart contracts for the governance system",
            tags: ["Solidity", "ERC-20", "Voting"],
          },
          {
            name: "Frontend Application",
            description: "The web interface for interacting with the DAO",
            tags: ["React", "Web3.js", "TypeScript"],
          },
        ],
        outOfScope: [
          "Third-party dependencies and libraries",
          "Centralized infrastructure (AWS, etc.)",
          "Known issues documented in the repository",
        ],
      },
      rules: [
        "All vulnerabilities must be reported through the official submission form",
        "Do not disclose vulnerabilities publicly before they are fixed",
        "Do not exploit vulnerabilities to manipulate governance",
        "Provide detailed reproduction steps for all reported issues",
        "Multiple submissions of the same vulnerability will be awarded to the first valid submission",
      ],
      rewards: [
        {
          level: "Critical",
          amount: 40000,
          description:
            "Vulnerabilities that can lead to complete governance takeover",
        },
        {
          level: "High",
          amount: 20000,
          description:
            "Vulnerabilities that can lead to significant governance manipulation",
        },
        {
          level: "Medium",
          amount: 10000,
          description:
            "Vulnerabilities that can lead to limited governance manipulation",
        },
        {
          level: "Low",
          amount: 2000,
          description: "Vulnerabilities that have minimal impact on governance",
        },
      ],
      contacts: {
        primary: "Security Team",
        discord: "https://discord.gg/daoprotocol",
        email: "security@daoprotocol.com",
      },
    },
    {
      id: "lending-protocol-audit",
      title: "Lending Protocol Security Audit",
      description:
        "Find vulnerabilities in a decentralized lending protocol that allows users to borrow and lend assets.",
      background:
        "This lending protocol allows users to deposit assets as collateral and borrow other assets against that collateral. The protocol includes features like variable interest rates, liquidations, and flash loans.",
      difficulty: "Hard",
      categories: ["Smart Contract", "DeFi"],
      platform: "Ethereum",
      platformIcon: "/placeholder.svg?height=24&width=24",
      reward: 75000,
      timeLeft: "25 days",
      timePercentage: 60,
      participants: 104,
      submissions: 31,
      tags: ["Lending", "DeFi", "Solidity", "Interest Rates"],
      objectives: [
        "Identify vulnerabilities in the lending smart contracts",
        "Find potential exploits in the collateral and liquidation mechanism",
        "Discover any issues with the interest rate model",
        "Identify flash loan attack vectors",
      ],
      resources: [
        {
          name: "GitHub Repository",
          url: "#",
          description: "Source code for the protocol",
        },
        {
          name: "Documentation",
          url: "#",
          description: "Technical documentation and architecture",
        },
        {
          name: "Testnet Deployment",
          url: "#",
          description: "Deployed contracts on Goerli testnet",
        },
      ],
      scope: {
        inScope: [
          {
            name: "Lending Contracts",
            description: "The smart contracts for the lending protocol",
            tags: ["Solidity", "ERC-20", "Interest Rates"],
          },
          {
            name: "Oracle Integration",
            description:
              "The price oracle integration for collateral valuation",
            tags: ["Chainlink", "Oracles", "Price Feeds"],
          },
          {
            name: "Frontend Application",
            description: "The web interface for interacting with the protocol",
            tags: ["React", "Web3.js", "TypeScript"],
          },
        ],
        outOfScope: [
          "Third-party dependencies and libraries",
          "Centralized infrastructure (AWS, etc.)",
          "Known issues documented in the repository",
        ],
      },
      rules: [
        "All vulnerabilities must be reported through the official submission form",
        "Do not disclose vulnerabilities publicly before they are fixed",
        "Do not exploit vulnerabilities to steal or damage user funds",
        "Provide detailed reproduction steps for all reported issues",
        "Multiple submissions of the same vulnerability will be awarded to the first valid submission",
      ],
      rewards: [
        {
          level: "Critical",
          amount: 75000,
          description:
            "Vulnerabilities that can lead to direct loss of funds or complete protocol takeover",
        },
        {
          level: "High",
          amount: 35000,
          description:
            "Vulnerabilities that can lead to significant loss of funds or protocol disruption",
        },
        {
          level: "Medium",
          amount: 15000,
          description:
            "Vulnerabilities that can lead to limited loss of funds or protocol disruption",
        },
        {
          level: "Low",
          amount: 3000,
          description:
            "Vulnerabilities that have minimal impact on the protocol or users",
        },
      ],
      contacts: {
        primary: "Security Team",
        discord: "https://discord.gg/lendingprotocol",
        email: "security@lendingprotocol.com",
      },
    },
  ];

  // Get unique categories and platforms
  const categories = [
    ...new Set(challenges.flatMap((challenge) => challenge.categories)),
  ];
  const platforms = [
    ...new Set(challenges.map((challenge) => challenge.platform)),
  ];

  return {
    challenges,
    categories,
    platforms,
  };
}

export function getCTFChallenge(id: string): CTFChallenge | undefined {
  return getCTFChallenges().challenges.find((challenge) => challenge.id === id);
}

export function getAttackVectors(): AttackVector[] {
  return [
    {
      id: "reentrancy",
      name: "Reentrancy Attack",
      description:
        "An attack where a contract calls back into the calling contract before the first execution is complete",
      severity: "Critical",
      category: "Smart Contract",
      frequency: "Common",
      relatedTo: ["DeFi", "Smart Contracts", "Solidity"],
    },
    {
      id: "flash-loan-attack",
      name: "Flash Loan Attack",
      description:
        "Using flash loans to manipulate prices or exploit vulnerabilities in DeFi protocols",
      severity: "Critical",
      category: "Smart Contract",
      frequency: "Common",
      relatedTo: ["DeFi", "Lending", "AMM"],
    },
    {
      id: "front-running",
      name: "Front-Running",
      description:
        "Exploiting advance knowledge of pending transactions to gain an advantage",
      severity: "High",
      category: "Smart Contract",
      frequency: "Common",
      relatedTo: ["DEX", "Trading", "MEV"],
    },
    {
      id: "oracle-manipulation",
      name: "Oracle Manipulation",
      description: "Manipulating price oracles to exploit DeFi protocols",
      severity: "Critical",
      category: "Smart Contract",
      frequency: "Common",
      relatedTo: ["DeFi", "Oracles", "Price Feeds"],
    },
    {
      id: "access-control",
      name: "Access Control Vulnerabilities",
      description:
        "Improper implementation of access controls allowing unauthorized actions",
      severity: "High",
      category: "Access Control",
      frequency: "Common",
      relatedTo: ["Smart Contracts", "Governance", "Admin Functions"],
    },
    {
      id: "integer-overflow",
      name: "Integer Overflow/Underflow",
      description:
        "Arithmetic operations reaching the maximum or minimum size of the variable type",
      severity: "Medium",
      category: "Smart Contract",
      frequency: "Uncommon",
      relatedTo: ["Smart Contracts", "Solidity", "Math"],
    },
    {
      id: "signature-replay",
      name: "Signature Replay Attack",
      description:
        "Reusing a signature from one transaction in another transaction",
      severity: "High",
      category: "Cryptographic",
      frequency: "Uncommon",
      relatedTo: ["Smart Contracts", "Signatures", "Authentication"],
    },
    {
      id: "logic-bugs",
      name: "Logic Bugs",
      description: "Flaws in the business logic of smart contracts",
      severity: "High",
      category: "Logic",
      frequency: "Common",
      relatedTo: ["Smart Contracts", "Business Logic", "Implementation"],
    },
    {
      id: "denial-of-service",
      name: "Denial of Service",
      description:
        "Attacks that prevent legitimate users from using the protocol",
      severity: "Medium",
      category: "Smart Contract",
      frequency: "Uncommon",
      relatedTo: ["Smart Contracts", "Gas Limits", "Loops"],
    },
  ];
}
