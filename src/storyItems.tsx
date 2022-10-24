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
    title: "Persona",
    description:
      "Start with the main user(s) of this story and their context. Add extra users where they join the journey.",
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
    title: "USER GOAL",
    description:
      "Why do they start this journey? What do they want to achieve?",
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
      "What steps or actions does the user currently take to reach its goal? Put high level actions horizontal, smaller actions vertical.",
    icon: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="16" fill="#8AC926"/>
    <path d="M18.25 10.75C19.4926 10.75 20.5 9.74264 20.5 8.5C20.5 7.25736 19.4926 6.25 18.25 6.25C17.0074 6.25 16 7.25736 16 8.5C16 9.74264 17.0074 10.75 18.25 10.75Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M8.5 16C8.5 16 13.75 10.75 16.75 13.5204C18.432 15.0736 19.75 17.5 23.5 17.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M16.2354 13.1337L10.75 25.75" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M18.25 25.75V20.5L14.269 17.6564" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
    color: { regular: "#8AC926", light: "#E9F7D4" },
  },
  {
    type: "OBSTACLE",
    title: "Obstacle",
    description: "What obstacles might the user encounter during this journey?",
    icon: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="16" fill="#FF595E"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.5 11.5C5.5 10.6716 6.17157 10 7 10H25C25.8284 10 26.5 10.6716 26.5 11.5V18.25C26.5 19.0784 25.8284 19.75 25 19.75H7C6.17157 19.75 5.5 19.0784 5.5 18.25V11.5ZM25 11.5H7V18.25H25V11.5Z" fill="white"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3447 10.2197C11.6376 9.92678 12.1124 9.92678 12.4053 10.2197L20.6553 18.4697C20.9482 18.7626 20.9482 19.2374 20.6553 19.5303C20.3624 19.8232 19.8876 19.8232 19.5947 19.5303L11.3447 11.2803C11.0518 10.9874 11.0518 10.5126 11.3447 10.2197Z" fill="white"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M18.0947 10.2197C18.3876 9.92678 18.8624 9.92678 19.1553 10.2197L26.2803 17.3447C26.5732 17.6376 26.5732 18.1124 26.2803 18.4053C25.9874 18.6982 25.5126 18.6982 25.2197 18.4053L18.0947 11.2803C17.8018 10.9874 17.8018 10.5126 18.0947 10.2197Z" fill="white"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.71967 11.3447C6.01256 11.0518 6.48744 11.0518 6.78033 11.3447L13.9053 18.4697C14.1982 18.7626 14.1982 19.2374 13.9053 19.5303C13.6124 19.8232 13.1376 19.8232 12.8447 19.5303L5.71967 12.4053C5.42678 12.1124 5.42678 11.6376 5.71967 11.3447Z" fill="white"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M22 18.25C22.4142 18.25 22.75 18.5858 22.75 19V22.75C22.75 23.1642 22.4142 23.5 22 23.5C21.5858 23.5 21.25 23.1642 21.25 22.75V19C21.25 18.5858 21.5858 18.25 22 18.25Z" fill="white"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M10 18.25C10.4142 18.25 10.75 18.5858 10.75 19V22.75C10.75 23.1642 10.4142 23.5 10 23.5C9.58579 23.5 9.25 23.1642 9.25 22.75V19C9.25 18.5858 9.58579 18.25 10 18.25Z" fill="white"/>
    </svg>`,
    color: { regular: "#FF595E", light: "#FFCCCE" },
  },
  {
    type: "RISK",
    title: "External risk",
    description:
      "Are there any external risks you can‘t control? For example no internet.",
    icon: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="16" fill="#FF924C"/>
    <path d="M20.5 22.75C20.5 23.3467 20.2629 23.919 19.841 24.341C19.419 24.7629 18.8467 25 18.25 25C17.6533 25 17.081 24.7629 16.659 24.341C16.2371 23.919 16 23.3467 16 22.75V16.75" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M7.03137 16.75C6.92731 16.7498 6.82442 16.728 6.72922 16.686C6.63402 16.6439 6.54858 16.5826 6.47831 16.5059C6.40803 16.4291 6.35445 16.3386 6.32095 16.2401C6.28746 16.1416 6.27477 16.0372 6.2837 15.9335C6.48856 13.4975 7.60096 11.2274 9.4005 9.5728C11.2 7.91824 13.5554 6.99999 16 6.99999C18.4446 6.99999 20.8 7.91824 22.5995 9.5728C24.399 11.2274 25.5114 13.4975 25.7163 15.9335C25.7252 16.0372 25.7125 16.1416 25.679 16.2401C25.6456 16.3386 25.592 16.4291 25.5217 16.5059C25.4514 16.5826 25.366 16.6439 25.2708 16.686C25.1756 16.728 25.0727 16.7498 24.9686 16.75H7.03137Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M12.25 16.75C12.25 10 16 7 16 7C16 7 19.75 10 19.75 16.75" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
    color: { regular: "#FF924C", light: "#FFE0CC" },
  },
  {
    type: "CLIMAX",
    title: "Climax",
    description:
      "Where can you add delight? Don‘t underestimate the power of a WOW moment.",
    icon: `<svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="16" fill="#52A675"/>
      <path d="m17 20.45-1.8 4.89a.75.75 0 0 1-1.4 0L12 20.45a.75.75 0 0 0-.45-.44l-4.89-1.8a.75.75 0 0 1 0-1.41l4.89-1.8a.75.75 0 0 0 .44-.45l1.8-4.89a.75.75 0 0 1 1.41 0l1.8 4.89a.75.75 0 0 0 .45.44l4.89 1.8a.75.75 0 0 1 0 1.41L17.45 20a.75.75 0 0 0-.44.45v0ZM20.5 5.5V10m2.25-2.25h-4.5m6.75 3v3m1.5-1.5h-3" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
    color: { regular: "#52A675", light: "#DDEEE4" },
  },
  {
    type: "IMPACT",
    title: "Impact",
    description: "What is the business objective for this journey?",
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
      "What steps or actions should the user be able to take in the future? Focus on needs and outcomes, not features!",
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
      "What experiments can we perform to support new outcomes in this journey?",
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
      "Who internally or externally can/should help with this user’s journey?",
    icon: `<svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="16" fill="#934C7B"/>
      <path d="m26.57 15.42-2.32 1.16-3-5.75 2.34-1.17a.75.75 0 0 1 1 .32l2.3 4.42a.75.75 0 0 1-.32 1.02v0ZM7.75 16.48l-2.32-1.16a.75.75 0 0 1-.33-1.02l2.3-4.42a.75.75 0 0 1 1-.32l2.35 1.17-3 5.75Z" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="m24.25 16.58-1.5 1.75-3.45 3.45a.75.75 0 0 1-.71.2l-5.44-1.36a.75.75 0 0 1-.28-.14l-5.12-4" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="m22.75 18.33-4.13-3-1.2.9a3 3 0 0 1-3.6 0l-.5-.38a.75.75 0 0 1-.08-1.13l3.67-3.67a.75.75 0 0 1 .53-.22h3.81" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="m10.8 10.73 4.82-1.4a.75.75 0 0 1 .51.03l3.25 1.47M14.5 23.96l-2.83-.71a.75.75 0 0 1-.3-.16l-2.12-1.84" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
    color: { regular: "#934C7B", light: "#EEDDE8" },
  },
  {
    type: "OTHER",
    title: "Other",
    description: "Any additional cards you want to add?",
    icon: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="16" fill="#666666"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M16 7C16.4142 7 16.75 7.33579 16.75 7.75V24.25C16.75 24.6642 16.4142 25 16 25C15.5858 25 15.25 24.6642 15.25 24.25V7.75C15.25 7.33579 15.5858 7 16 7Z" fill="white"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.20677 11.5C8.4139 11.1413 8.8726 11.0184 9.2313 11.2255L23.5188 19.4755C23.8775 19.6826 24.0004 20.1413 23.7933 20.5C23.5861 20.8587 23.1274 20.9816 22.7687 20.7745L8.48123 12.5245C8.12252 12.3174 7.99964 11.8587 8.20677 11.5Z" fill="white"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M23.7933 11.5C24.0004 11.8587 23.8775 12.3174 23.5188 12.5245L9.2313 20.7745C8.8726 20.9816 8.4139 20.8587 8.20677 20.5C7.99964 20.1413 8.12252 19.6826 8.48123 19.4755L22.7687 11.2255C23.1274 11.0184 23.5861 11.1413 23.7933 11.5Z" fill="white"/>
    </svg>`,
    color: { regular: "#666666", light: "#DDDDDD" },
  },
];

export default storyItems;
