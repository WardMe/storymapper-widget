type StoryItem = {
  type: string;
  title: string;
  description: string;
  icon: `<svg${string}</svg>`; // Require an SVG
  color: {
    regular: `#${string}`; // Require a HEX value
    light: `#${string}`; // Require a HEX value
  };
};
type StoryItems = StoryItem[];

const storyItems: StoryItems = [
  {
    type: "WHO",
    title: "Who, what, where, when?",
    description:
      "1. Start with the main user(s) of this story and their context. Add extra users where they join the journey.",
    icon: `<svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="16" fill="#FFCA3A"/>
      <path d="M18.25 14.5H22m-3.75 3H22m-9.366 0a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M9.729 19.75a3 3 0 0 1 5.81 0" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M24.25 8.5H7.75a.75.75 0 0 0-.75.75v13.5c0 .414.336.75.75.75h16.5a.75.75 0 0 0 .75-.75V9.25a.75.75 0 0 0-.75-.75Z" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
    color: { regular: "#FFCA3A", light: "#FFF1CC" },
  },
  {
    type: "WHY",
    title: "Why?",
    description:
      "2. Why do they start this journey? What do they want to achieve?",
    icon: `<svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="16" fill="#C5CA30"/>
      <path d="M22.75 25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M10.75 9.25h9a3 3 0 0 1 0 6h-9a3.75 3.75 0 0 0 0 7.5h9.75" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
    color: { regular: "#C5CA30", light: "#F4F5D6" },
  },
  {
    type: "ACTION",
    title: "Action",
    description:
      "3. What steps or actions does the user currently take to reach its goal? Put high level actions horizontal, smaller actions vertical.",
    icon: `<svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="16" fill="#8AC926"/>
      <path d="M18.25 10.75a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5ZM8.5 16s5.25-5.25 8.25-2.48c1.682 1.554 3 3.98 6.75 3.98m-7.265-4.366L10.75 25.75m7.5 0V20.5l-3.981-2.844" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
    color: { regular: "#8AC926", light: "#E9F7D4" },
  },
  {
    type: "OBSTACLE",
    title: "Obstacle",
    description:
      "4. What obstacles might the user encounter during this journey?",
    icon: `<svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="16" fill="#FF595E"/>
      <path d="M16 13.75v-4.5m-4.5 9v-4.5m9 4.5v-4.5m-4.5 9v-4.5m-9-4.5h18m-18 4.5h18m0-9H7v13.5h18V9.25Z" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
    color: { regular: "#FF595E", light: "#FFCCCE" },
  },
  {
    type: "RISK",
    title: "External risk",
    description:
      "5. Are there any external risks you can‘t control? For example no internet.",
    icon: `<svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="16" fill="#FF924C"/>
      <path d="M20.5 22.75a2.25 2.25 0 0 1-4.5 0v-6m-8.969 0a.752.752 0 0 1-.747-.816 9.75 9.75 0 0 1 19.432 0 .752.752 0 0 1-.747.816H7.03Z" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12.25 16.75C12.25 10 16 7 16 7s3.75 3 3.75 9.75" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
    color: { regular: "#FF924C", light: "#FFE0CC" },
  },
  {
    type: "CLIMAX",
    title: "Climax",
    description:
      "6. Where can you add delight? Don‘t underestimate the power of a WOW moment.",
    icon: `<svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="16" fill="#52A675"/>
      <path d="m17 20.45-1.8 4.89a.75.75 0 0 1-1.4 0L12 20.45a.75.75 0 0 0-.45-.44l-4.89-1.8a.75.75 0 0 1 0-1.41l4.89-1.8a.75.75 0 0 0 .44-.45l1.8-4.89a.75.75 0 0 1 1.41 0l1.8 4.89a.75.75 0 0 0 .45.44l4.89 1.8a.75.75 0 0 1 0 1.41L17.45 20a.75.75 0 0 0-.44.45v0ZM20.5 5.5V10m2.25-2.25h-4.5m6.75 3v3m1.5-1.5h-3" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
    color: { regular: "#52A675", light: "#DDEEE4" },
  },
  {
    type: "IMPACT",
    title: "Impact",
    description: "7. What is the business objective for this journey?",
    icon: `<svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="16" fill="#4267AC"/>
      <path d="M16 24.25a8.25 8.25 0 1 0 0-16.5 8.25 8.25 0 0 0 0 16.5Zm0-18.37v3.75M5.88 16h3.75M16 26.13v-3.75M26.13 16h-3.75" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M16 19a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
    color: { regular: "#4267AC", light: "#DAE2F1" },
  },
  {
    type: "OUTCOME",
    title: "Outcome",
    description:
      "8. What steps or actions should the user be able to take in the future? Focus on needs and outcomes, not features!",
    icon: `<svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="16" fill="#1982C4"/>
      <path d="M12.25 25.75h7.5m-8.37-6.09a7.49 7.49 0 0 1 4.44-13.4 7.5 7.5 0 0 1 4.81 13.39 2.28 2.28 0 0 0-.88 1.79V22a.75.75 0 0 1-.75.75h-6a.75.75 0 0 1-.75-.75v-.57a2.26 2.26 0 0 0-.87-1.77v0Z" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M16.76 9.32A4.5 4.5 0 0 1 20.44 13" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
    color: { regular: "#1982C4", light: "#D2EAF9" },
  },
  {
    type: "EXPERIMENT",
    title: "Experiment",
    description:
      "9. What experiments can we perform to support new outcomes in this journey?",
    icon: `<svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="16" fill="#6A4C93"/>
      <path d="M13.75 7v5.8c0 .13-.04.26-.1.38L7.67 23.1a.75.75 0 0 0 .64 1.14h15.36a.75.75 0 0 0 .64-1.14l-5.96-9.93a.75.75 0 0 1-.11-.39V7m-5.99 0h7.5" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M9.87 19.47c1.1-.81 3.01-1.28 6.13.28 3.35 1.67 5.3 1.01 6.36.1" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
    color: { regular: "#6A4C93", light: "#E4DDEE" },
  },
  {
    type: "PARTNER",
    title: "Partner",
    description:
      "10. Who internally or externally can/should help with this user’s journey?",
    icon: `<svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="16" fill="#934C7B"/>
      <path d="m26.57 15.42-2.32 1.16-3-5.75 2.34-1.17a.75.75 0 0 1 1 .32l2.3 4.42a.75.75 0 0 1-.32 1.02v0ZM7.75 16.48l-2.32-1.16a.75.75 0 0 1-.33-1.02l2.3-4.42a.75.75 0 0 1 1-.32l2.35 1.17-3 5.75Z" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="m24.25 16.58-1.5 1.75-3.45 3.45a.75.75 0 0 1-.71.2l-5.44-1.36a.75.75 0 0 1-.28-.14l-5.12-4" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="m22.75 18.33-4.13-3-1.2.9a3 3 0 0 1-3.6 0l-.5-.38a.75.75 0 0 1-.08-1.13l3.67-3.67a.75.75 0 0 1 .53-.22h3.81" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="m10.8 10.73 4.82-1.4a.75.75 0 0 1 .51.03l3.25 1.47M14.5 23.96l-2.83-.71a.75.75 0 0 1-.3-.16l-2.12-1.84" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
    color: { regular: "#934C7B", light: "#EEDDE8" },
  },
];

export default storyItems;
