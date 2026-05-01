type Theme = {
  name: string;
  sentiment: "positive" | "negative" | "neutral";
  count: number;
  summary: string;
  trend: string;
};

type DashboardData = {
  stats: {
    label: string;
    value: string;
    change: string;
    detail: string;
  }[];
  themes: Theme[];
  trends: {
    month: string;
    volume: number;
  }[];
};

type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  content: string;
  sources?: string[];
};

const fallbackThemes: Theme[] = [
  {
    name: "Onboarding clarity",
    sentiment: "negative",
    count: 43,
    summary:
      "Users still hit uncertainty in the first-run experience, especially when setup decisions appear too early.",
    trend: "Rising over the last 2 weeks",
  },
  {
    name: "Export performance",
    sentiment: "positive",
    count: 28,
    summary:
      "Recent improvements to export speed are landing well with power users handling larger reports.",
    trend: "Stable positive feedback",
  },
  {
    name: "Notification control",
    sentiment: "neutral",
    count: 22,
    summary:
      "Customers want better defaults and finer control before enabling team-wide notifications.",
    trend: "Mixed but actionable",
  },
  {
    name: "Search precision",
    sentiment: "positive",
    count: 18,
    summary:
      "Users are finding the new semantic search more useful when locating account-specific feedback.",
    trend: "Growing confidence",
  },
];

const fallbackDashboard: DashboardData = {
  stats: [
    {
      label: "New feedback this week",
      value: "1,248",
      change: "+12%",
      detail: "Higher submission volume after the onboarding survey launch.",
    },
    {
      label: "Themes requiring review",
      value: "7",
      change: "+2",
      detail: "A focused set of concerns is emerging rather than broad product dissatisfaction.",
    },
    {
      label: "Positive sentiment share",
      value: "61%",
      change: "+4 pts",
      detail: "The latest release appears to have improved satisfaction for reporting workflows.",
    },
    {
      label: "AI answer confidence",
      value: "92%",
      change: "High",
      detail: "Most questions are backed by enough source evidence to support decision-making.",
    },
  ],
  themes: fallbackThemes,
  trends: [
    { month: "Jan", volume: 58 },
    { month: "Feb", volume: 64 },
    { month: "Mar", volume: 72 },
    { month: "Apr", volume: 89 },
    { month: "May", volume: 83 },
    { month: "Jun", volume: 96 },
  ],
};

const fallbackChat: ChatMessage[] = [
  {
    id: "seed-user",
    role: "user",
    content: "What is the biggest source of frustration for new users right now?",
  },
  {
    id: "seed-assistant",
    role: "assistant",
    content:
      "New users are most frustrated by unclear onboarding decisions. The product promise is appealing, but confidence drops when setup asks them to make choices before they understand the outcome.",
    sources: [
      "The onboarding flow was nice visually, but I wasn't sure what to choose on the second step.",
      "I wanted a faster path to value instead of answering so many setup questions up front.",
      "I only understood the product after I finished setup, which felt backwards.",
    ],
  },
];

async function tryFetchThemes() {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  if (!baseUrl) return null;

  try {
    const response = await fetch(`${baseUrl}/themes`, {
      cache: "no-store",
    });

    if (!response.ok) {
      return null;
    }

    return (await response.json()) as Theme[];
  } catch {
    return null;
  }
}

export async function getDashboardData(): Promise<DashboardData> {
  const liveThemes = await tryFetchThemes();

  if (!liveThemes?.length) {
    return fallbackDashboard;
  }

  return {
    ...fallbackDashboard,
    themes: liveThemes,
  };
}

export async function getChatSeedData(): Promise<ChatMessage[]> {
  return fallbackChat;
}
