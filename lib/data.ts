export interface Challenge {
  id: string
  title: string
  description: string
  difficulty: "Beginner" | "Intermediate" | "Advanced"
  category: string
  points: number
  completions: number
  timeEstimate: string
  author: string
  authorImage: string
  content: string
  resources: { name: string; url: string }[]
}

export function getChallenges(): Challenge[] {
  return [
    {
      id: "storage-overdrive",
      title: "Storage Overdrive",
      description: "Exploit vulnerabilities in decentralized storage protocols",
      difficulty: "Beginner",
      category: "Storage",
      points: 250,
      completions: 128,
      timeEstimate: "1-2 hours",
      author: "CryptoHacker",
      authorImage: "/placeholder.svg?height=40&width=40",
      content: `
        <h2>Challenge Description</h2>
        <p>In this challenge, you'll need to find and exploit vulnerabilities in a decentralized storage protocol to gain access to protected data.</p>
        
        <h2>Scenario</h2>
        <p>You've discovered a new decentralized storage service built on Arweave that claims to be "unhackable." The service stores sensitive data and uses a custom access control mechanism. Your goal is to bypass this mechanism and retrieve a secret file.</p>
        
        <h2>Objectives</h2>
        <ul>
          <li>Analyze the storage protocol's architecture</li>
          <li>Identify vulnerabilities in the access control mechanism</li>
          <li>Exploit these vulnerabilities to access the protected data</li>
          <li>Retrieve the secret flag</li>
        </ul>
        
        <h2>Hints</h2>
        <ul>
          <li>Look closely at how the protocol handles transaction verification</li>
          <li>The access control mechanism might not properly validate all request parameters</li>
          <li>Consider how permanent storage differs from traditional storage in terms of data access patterns</li>
        </ul>
      `,
      resources: [
        { name: "Arweave Documentation", url: "#" },
        { name: "Storage Protocol Basics", url: "#" },
        { name: "Common Vulnerabilities in Decentralized Systems", url: "#" },
      ],
    },
    {
      id: "persistent-panic",
      title: "Persistent Panic",
      description: "Race against time to secure permanent data before it's compromised",
      difficulty: "Intermediate",
      category: "Security",
      points: 500,
      completions: 87,
      timeEstimate: "2-3 hours",
      author: "SecurityGuru",
      authorImage: "/placeholder.svg?height=40&width=40",
      content: `
        <h2>Challenge Description</h2>
        <p>In this time-sensitive challenge, you need to secure permanent data that's at risk of being compromised.</p>
        
        <h2>Scenario</h2>
        <p>A critical data storage node has been compromised. You have limited time to identify the vulnerability, patch it, and secure the data before attackers can exfiltrate it.</p>
        
        <h2>Objectives</h2>
        <ul>
          <li>Identify the security vulnerability in the storage node</li>
          <li>Patch the vulnerability to prevent further exploitation</li>
          <li>Secure the compromised data</li>
          <li>Implement additional security measures to prevent future attacks</li>
        </ul>
        
        <h2>Hints</h2>
        <ul>
          <li>The vulnerability is related to how the node validates transaction signatures</li>
          <li>Time is critical - focus on securing the most sensitive data first</li>
          <li>Look for unusual access patterns in the node's logs</li>
        </ul>
      `,
      resources: [
        { name: "Security Best Practices", url: "#" },
        { name: "Arweave Node Security", url: "#" },
        { name: "Incident Response Guide", url: "#" },
      ],
    },
    {
      id: "agent-infiltration",
      title: "Agent Infiltration",
      description: "Reverse engineer autonomous agents to discover hidden backdoors",
      difficulty: "Advanced",
      category: "Agents",
      points: 750,
      completions: 42,
      timeEstimate: "3-5 hours",
      author: "AgentMaster",
      authorImage: "/placeholder.svg?height=40&width=40",
      content: `
        <h2>Challenge Description</h2>
        <p>In this advanced challenge, you'll need to reverse engineer autonomous agents running on the AO platform to discover hidden backdoors.</p>
        
        <h2>Scenario</h2>
        <p>A network of autonomous agents has been compromised, and malicious actors have inserted backdoors. Your task is to identify and neutralize these backdoors before they can be exploited.</p>
        
        <h2>Objectives</h2>
        <ul>
          <li>Analyze the agent code to identify suspicious patterns</li>
          <li>Reverse engineer the backdoor mechanisms</li>
          <li>Develop a method to detect compromised agents</li>
          <li>Create a patch to neutralize the backdoors</li>
        </ul>
        
        <h2>Hints</h2>
        <ul>
          <li>The backdoors are designed to be triggered by specific message patterns</li>
          <li>Look for code that handles unexpected input formats</li>
          <li>The compromised agents may communicate with each other</li>
        </ul>
      `,
      resources: [
        { name: "AO Platform Documentation", url: "#" },
        { name: "Agent Reverse Engineering Guide", url: "#" },
        { name: "Backdoor Detection Techniques", url: "#" },
      ],
    },
  ]
}

export function getChallenge(id: string): Challenge | undefined {
  return getChallenges().find((challenge) => challenge.id === id)
}

// Learning content data
export interface Course {
  id: string
  title: string
  description: string
  icon: string
  iconBg: string
  modules: number
  duration: string
  level: string
  featured?: boolean
  progress?: number
  modules_list?: CourseModule[]
}

export interface CourseModule {
  id: string
  title: string
  description: string
  duration: string
  completed?: boolean
}

export function getCourses(): Course[] {
  return [
    {
      id: "intro-arweave-ao",
      title: "Introduction to Arweave & AO",
      description: "Learn the fundamentals of permanent storage and autonomous compute",
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
          description: "Learn the basics of permanent storage and why it matters",
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
          description: "Introduction to smart contracts in the Arweave ecosystem",
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
      description: "Learn to write secure smart contracts and identify vulnerabilities",
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
  ]
}

export function getCourse(id: string): Course | undefined {
  return getCourses().find((course) => course.id === id)
}

// Learning paths data
export interface LearningPath {
  id: string
  title: string
  description: string
  icon: string
  iconBg: string
  courses: number
  duration: string
  courseIds: string[]
}

export function getLearningPaths(): LearningPath[] {
  return [
    {
      id: "web3-developer",
      title: "Web3 Developer",
      description: "Master the skills needed to build full-stack decentralized applications",
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
      description: "Learn to identify and fix security vulnerabilities in decentralized systems",
      icon: "Shield",
      iconBg: "bg-gradient-to-r from-cyan-600 to-blue-600",
      courses: 4,
      duration: "15-20 hours",
      courseIds: ["smart-contract-security", "cryptography-basics"],
    },
    {
      id: "ao-expert",
      title: "AO Expert",
      description: "Become an expert in autonomous compute and agent development",
      icon: "Zap",
      iconBg: "bg-gradient-to-r from-yellow-600 to-orange-600",
      courses: 6,
      duration: "25-30 hours",
      courseIds: ["intro-arweave-ao", "autonomous-agents"],
    },
  ]
}

export function getLearningPath(id: string): LearningPath | undefined {
  return getLearningPaths().find((path) => path.id === id)
}

// Leaderboard data
export interface LeaderboardUser {
  id: string
  username: string
  avatar: string
  level: number
  points: number
  monthlyPoints: number
  completedChallenges: number
  badges: string[]
}

export function getLeaderboardData() {
  const users: LeaderboardUser[] = [
    {
      id: "user1",
      username: "CryptoNinja",
      avatar: "/placeholder.svg?height=40&width=40",
      level: 10,
      points: 12500,
      monthlyPoints: 2300,
      completedChallenges: 42,
      badges: ["Storage Master", "Security Expert", "AO Pioneer", "Bug Hunter", "Top Contributor"],
    },
    {
      id: "user2",
      username: "BlockchainWizard",
      avatar: "/placeholder.svg?height=40&width=40",
      level: 9,
      points: 11200,
      monthlyPoints: 1800,
      completedChallenges: 38,
      badges: ["Challenge Creator", "Security Expert", "Mentor", "Early Adopter"],
    },
    {
      id: "user3",
      username: "DecentralizedDev",
      avatar: "/placeholder.svg?height=40&width=40",
      level: 8,
      points: 9800,
      monthlyPoints: 2100,
      completedChallenges: 35,
      badges: ["Storage Master", "AO Pioneer", "Community Leader"],
    },
    {
      id: "user4",
      username: "CryptoHacker",
      avatar: "/placeholder.svg?height=40&width=40",
      level: 6,
      points: 8750,
      monthlyPoints: 1500,
      completedChallenges: 24,
      badges: ["Newbie Hacker", "Storage Master", "Quick Learner", "Bug Hunter"],
    },
    {
      id: "user5",
      username: "ArweaveExplorer",
      avatar: "/placeholder.svg?height=40&width=40",
      level: 7,
      points: 8200,
      monthlyPoints: 1200,
      completedChallenges: 28,
      badges: ["Storage Master", "Data Scientist", "Archivist"],
    },
    {
      id: "user6",
      username: "AODeveloper",
      avatar: "/placeholder.svg?height=40&width=40",
      level: 5,
      points: 6500,
      monthlyPoints: 1900,
      completedChallenges: 22,
      badges: ["Agent Creator", "AO Pioneer"],
    },
    {
      id: "user7",
      username: "SecurityGuru",
      avatar: "/placeholder.svg?height=40&width=40",
      level: 8,
      points: 9200,
      monthlyPoints: 1100,
      completedChallenges: 32,
      badges: ["Security Expert", "Bug Hunter", "Penetration Tester"],
    },
    {
      id: "user8",
      username: "PermanentData",
      avatar: "/placeholder.svg?height=40&width=40",
      level: 6,
      points: 7800,
      monthlyPoints: 900,
      completedChallenges: 26,
      badges: ["Storage Master", "Archivist", "Data Scientist"],
    },
    {
      id: "user9",
      username: "SmartContractPro",
      avatar: "/placeholder.svg?height=40&width=40",
      level: 7,
      points: 8500,
      monthlyPoints: 1600,
      completedChallenges: 30,
      badges: ["Contract Wizard", "Security Expert", "Code Reviewer"],
    },
    {
      id: "user10",
      username: "CryptoCoder",
      avatar: "/placeholder.svg?height=40&width=40",
      level: 5,
      points: 6200,
      monthlyPoints: 1400,
      completedChallenges: 20,
      badges: ["Newbie Hacker", "Quick Learner"],
    },
  ]

  // Sort users by points for the main leaderboard
  const sortedUsers = [...users].sort((a, b) => b.points - a.points)

  // Get top 3 users
  const topUsers = sortedUsers.slice(0, 3)

  // Get unique categories from badges
  const allBadges = users.flatMap((user) => user.badges)
  const categories = [...new Set(allBadges)]

  return {
    users: sortedUsers,
    topUsers,
    categories,
  }
}

// CTF Challenge data
export interface CTFChallenge {
  id: string
  title: string
  description: string
  background: string
  difficulty: string
  categories: string[]
  platform: string
  platformIcon?: string
  reward: number
  timeLeft: string
  timePercentage: number
  participants: number
  submissions: number
  tags: string[]
  objectives: string[]
  resources: { name: string; url: string; description?: string }[]
  scope: {
    inScope: { name: string; description: string; tags: string[] }[]
    outOfScope: string[]
  }
  rules: string[]
  rewards: { level: string; amount: number; description: string }[]
  contacts: {
    primary: string
    discord: string
    email: string
  }
}

export interface AttackVector {
  id: string
  name: string
  description: string
  severity: string
  category: string
  frequency: string
  relatedTo: string[]
}

export function getCTFChallenges() {
  const challenges: CTFChallenge[] = [
    {
      id: "defi-protocol-audit",
      title: "DeFi Protocol Security Audit",
      description:
        "Find vulnerabilities in a decentralized finance protocol's smart contracts and frontend implementation.",
      background:
        "This DeFi protocol allows users to provide liquidity, stake tokens, and earn rewards. The protocol has recently undergone a major upgrade and is looking for security researchers to audit their implementation.",
      difficulty: "Hard",
      categories: ["Smart Contract", "DeFi"],
      platform: "Ethereum",
      platformIcon: "/placeholder.svg?height=24&width=24",
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
        { name: "GitHub Repository", url: "#", description: "Source code for the protocol" },
        { name: "Documentation", url: "#", description: "Technical documentation and architecture" },
        { name: "Testnet Deployment", url: "#", description: "Deployed contracts on Goerli testnet" },
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
    },
    {
      id: "nft-marketplace-audit",
      title: "NFT Marketplace Security Challenge",
      description: "Identify security vulnerabilities in a new NFT marketplace platform built on Solana.",
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
        { name: "GitHub Repository", url: "#", description: "Source code for the marketplace" },
        { name: "Documentation", url: "#", description: "Technical documentation and architecture" },
        { name: "Devnet Deployment", url: "#", description: "Deployed program on Solana devnet" },
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
            description: "The web interface for interacting with the marketplace",
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
          description: "Vulnerabilities that can lead to direct loss of NFTs or complete marketplace takeover",
        },
        {
          level: "High",
          amount: 15000,
          description: "Vulnerabilities that can lead to significant loss of NFTs or marketplace disruption",
        },
        {
          level: "Medium",
          amount: 7500,
          description: "Vulnerabilities that can lead to limited loss of NFTs or marketplace disruption",
        },
        {
          level: "Low",
          amount: 1500,
          description: "Vulnerabilities that have minimal impact on the marketplace or users",
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
      description: "Find vulnerabilities in a cross-chain bridge connecting multiple blockchains.",
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
        { name: "GitHub Repository", url: "#", description: "Source code for the bridge" },
        { name: "Documentation", url: "#", description: "Technical documentation and architecture" },
        { name: "Testnet Deployment", url: "#", description: "Deployed contracts on various testnets" },
      ],
      scope: {
        inScope: [
          {
            name: "Bridge Contracts",
            description: "The smart contracts deployed on each supported blockchain",
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
          description: "Vulnerabilities that can lead to direct loss of funds or complete bridge takeover",
        },
        {
          level: "High",
          amount: 50000,
          description: "Vulnerabilities that can lead to significant loss of funds or bridge disruption",
        },
        {
          level: "Medium",
          amount: 20000,
          description: "Vulnerabilities that can lead to limited loss of funds or bridge disruption",
        },
        {
          level: "Low",
          amount: 5000,
          description: "Vulnerabilities that have minimal impact on the bridge or users",
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
      description: "Identify vulnerabilities in a decentralized autonomous organization's governance system.",
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
        { name: "GitHub Repository", url: "#", description: "Source code for the DAO" },
        { name: "Documentation", url: "#", description: "Technical documentation and architecture" },
        { name: "Testnet Deployment", url: "#", description: "Deployed contracts on Goerli testnet" },
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
          description: "Vulnerabilities that can lead to complete governance takeover",
        },
        {
          level: "High",
          amount: 20000,
          description: "Vulnerabilities that can lead to significant governance manipulation",
        },
        {
          level: "Medium",
          amount: 10000,
          description: "Vulnerabilities that can lead to limited governance manipulation",
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
        { name: "GitHub Repository", url: "#", description: "Source code for the protocol" },
        { name: "Documentation", url: "#", description: "Technical documentation and architecture" },
        { name: "Testnet Deployment", url: "#", description: "Deployed contracts on Goerli testnet" },
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
            description: "The price oracle integration for collateral valuation",
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
          description: "Vulnerabilities that can lead to direct loss of funds or complete protocol takeover",
        },
        {
          level: "High",
          amount: 35000,
          description: "Vulnerabilities that can lead to significant loss of funds or protocol disruption",
        },
        {
          level: "Medium",
          amount: 15000,
          description: "Vulnerabilities that can lead to limited loss of funds or protocol disruption",
        },
        {
          level: "Low",
          amount: 3000,
          description: "Vulnerabilities that have minimal impact on the protocol or users",
        },
      ],
      contacts: {
        primary: "Security Team",
        discord: "https://discord.gg/lendingprotocol",
        email: "security@lendingprotocol.com",
      },
    },
  ]

  // Get unique categories and platforms
  const categories = [...new Set(challenges.flatMap((challenge) => challenge.categories))]
  const platforms = [...new Set(challenges.map((challenge) => challenge.platform))]

  return {
    challenges,
    categories,
    platforms,
  }
}

export function getCTFChallenge(id: string): CTFChallenge | undefined {
  return getCTFChallenges().challenges.find((challenge) => challenge.id === id)
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
      description: "Using flash loans to manipulate prices or exploit vulnerabilities in DeFi protocols",
      severity: "Critical",
      category: "Smart Contract",
      frequency: "Common",
      relatedTo: ["DeFi", "Lending", "AMM"],
    },
    {
      id: "front-running",
      name: "Front-Running",
      description: "Exploiting advance knowledge of pending transactions to gain an advantage",
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
      description: "Improper implementation of access controls allowing unauthorized actions",
      severity: "High",
      category: "Access Control",
      frequency: "Common",
      relatedTo: ["Smart Contracts", "Governance", "Admin Functions"],
    },
    {
      id: "integer-overflow",
      name: "Integer Overflow/Underflow",
      description: "Arithmetic operations reaching the maximum or minimum size of the variable type",
      severity: "Medium",
      category: "Smart Contract",
      frequency: "Uncommon",
      relatedTo: ["Smart Contracts", "Solidity", "Math"],
    },
    {
      id: "signature-replay",
      name: "Signature Replay Attack",
      description: "Reusing a signature from one transaction in another transaction",
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
      description: "Attacks that prevent legitimate users from using the protocol",
      severity: "Medium",
      category: "Smart Contract",
      frequency: "Uncommon",
      relatedTo: ["Smart Contracts", "Gas Limits", "Loops"],
    },
  ]
}
