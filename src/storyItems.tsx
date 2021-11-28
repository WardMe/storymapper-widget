type StoryItem = {
    type : string;
    title : string;
    description: string;
    icon : `<svg${string}</svg>`; // Require an SVG
    color: {
      regular : `#${string}`, // Require a HEX value
      light : `#${string}`, // Require a HEX value
    };
  }
  type StoryItems = StoryItem[];

  const storyItems: StoryItems = [
    {
      type : "WHO",
      title : "Who, what, where, when?",
      description: "1. Start with the main user(s) of this story and their context. Add extra users where they join the journey.",
      icon : `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="16" fill="#FFCA3A"/>
      <path d="M18.25 14.5H22" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M18.25 17.5H22" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12.6344 17.5C13.877 17.5 14.8844 16.4926 14.8844 15.25C14.8844 14.0074 13.877 13 12.6344 13C11.3918 13 10.3844 14.0074 10.3844 15.25C10.3844 16.4926 11.3918 17.5 12.6344 17.5Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M9.72894 19.75C9.8954 19.106 10.2711 18.5355 10.797 18.1283C11.3229 17.721 11.9692 17.5 12.6343 17.5C13.2995 17.5 13.9458 17.7209 14.4717 18.1282C14.9976 18.5354 15.3733 19.1058 15.5398 19.7498" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M24.25 8.50001H7.75C7.33579 8.50001 7 8.83579 7 9.25001V22.75C7 23.1642 7.33579 23.5 7.75 23.5H24.25C24.6642 23.5 25 23.1642 25 22.75V9.25001C25 8.83579 24.6642 8.50001 24.25 8.50001Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`,
      color : { regular : "#FFCA3A", light : "#FFF1CC" }
    },
    {
      type : "WHY",
      title : "Why?",
      description: "2. Why do they start this journey? What do they want to achieve?",
      icon : `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="16" fill="#C5CA30"/>
      <path d="M22.75 25C23.9926 25 25 23.9926 25 22.75C25 21.5074 23.9926 20.5 22.75 20.5C21.5074 20.5 20.5 21.5074 20.5 22.75C20.5 23.9926 21.5074 25 22.75 25Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M10.75 9.25H19.75C20.5456 9.25 21.3087 9.56607 21.8713 10.1287C22.4339 10.6913 22.75 11.4544 22.75 12.25C22.75 13.0456 22.4339 13.8087 21.8713 14.3713C21.3087 14.9339 20.5456 15.25 19.75 15.25H10.75C9.75544 15.25 8.80161 15.6451 8.09835 16.3483C7.39509 17.0516 7 18.0054 7 19C7 19.9946 7.39509 20.9484 8.09835 21.6517C8.80161 22.3549 9.75544 22.75 10.75 22.75H20.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`,
      color : { regular : "#C5CA30", light : "#F4F5D6" }
    },
    {
      type : "ACTION",
      title : "Action",
      description: "3. What steps or actions does the user currently take to reach its goal? Put high level actions horizontal, smaller actions vertical.",
      icon : `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="16" fill="#8AC926"/>
      <path d="M18.25 10.75C19.4926 10.75 20.5 9.74264 20.5 8.5C20.5 7.25736 19.4926 6.25 18.25 6.25C17.0074 6.25 16 7.25736 16 8.5C16 9.74264 17.0074 10.75 18.25 10.75Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M8.5 16C8.5 16 13.75 10.75 16.75 13.5204C18.432 15.0736 19.75 17.5 23.5 17.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M16.2354 13.1337L10.75 25.75" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M18.25 25.75V20.5L14.269 17.6564" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`,
      color : { regular : "#8AC926", light : "#E9F7D4" }
    },
    {
      type : "OBSTACLE",
      title : "Obstacle",
      description: "4. What obstacles might the user encounter during this journey?",
      icon : `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="16" fill="#FF595E"/>
      <path d="M16 13.75V9.25" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M11.5 18.25V13.75" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M20.5 18.25V13.75" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M16 22.75V18.25" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M7 13.75H25" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M7 18.25H25" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M25 9.25H7V22.75H25V9.25Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`,
      color : { regular : "#FF595E", light : "#FFCCCE" }
    },
    {
      type : "RISK",
      title : "External risk",
      description: "5. Are there any external risks you can‘t control? For example no internet.",
      icon : `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="16" fill="#FF924C"/>
      <path d="M20.5 22.75C20.5 23.3467 20.2629 23.919 19.841 24.341C19.419 24.7629 18.8467 25 18.25 25C17.6533 25 17.081 24.7629 16.659 24.341C16.2371 23.919 16 23.3467 16 22.75V16.75" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M7.03137 16.75C6.92731 16.7498 6.82442 16.728 6.72922 16.686C6.63402 16.6439 6.54858 16.5826 6.47831 16.5059C6.40803 16.4291 6.35445 16.3386 6.32095 16.2401C6.28746 16.1416 6.27477 16.0372 6.2837 15.9335C6.48856 13.4975 7.60096 11.2274 9.4005 9.5728C11.2 7.91824 13.5554 6.99999 16 6.99999C18.4446 6.99999 20.8 7.91824 22.5995 9.5728C24.399 11.2274 25.5114 13.4975 25.7163 15.9335C25.7252 16.0372 25.7125 16.1416 25.679 16.2401C25.6456 16.3386 25.592 16.4291 25.5217 16.5059C25.4514 16.5826 25.366 16.6439 25.2708 16.686C25.1756 16.728 25.0727 16.7498 24.9686 16.75H7.03137Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12.25 16.75C12.25 10 16 7 16 7C16 7 19.75 10 19.75 16.75" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`,
      color : { regular : "#FF924C", light : "#FFE0CC" }
    },
    {
      type : "CLIMAX",
      title : "Climax",
      description: "6. Where can you add delight? Don‘t underestimate the power of a WOW moment.",
      icon : `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="16" fill="#52A675"/>
      <path d="M17.0053 20.4498L15.2038 25.3398C15.1507 25.4838 15.0548 25.608 14.929 25.6957C14.8031 25.7835 14.6534 25.8305 14.5 25.8305C14.3466 25.8305 14.1969 25.7835 14.071 25.6957C13.9452 25.608 13.8493 25.4838 13.7962 25.3398L11.9947 20.4498C11.9572 20.348 11.898 20.2555 11.8212 20.1788C11.7445 20.102 11.652 20.0429 11.5502 20.0053L6.6602 18.2038C6.51625 18.1507 6.39202 18.0548 6.30427 17.929C6.21653 17.8031 6.16948 17.6534 6.16948 17.5C6.16948 17.3466 6.21653 17.1969 6.30427 17.071C6.39202 16.9452 6.51625 16.8493 6.6602 16.7962L11.5502 14.9947C11.652 14.9572 11.7445 14.898 11.8212 14.8212C11.898 14.7445 11.9572 14.652 11.9947 14.5502L13.7962 9.6602C13.8493 9.51625 13.9452 9.39202 14.071 9.30427C14.1969 9.21653 14.3466 9.16948 14.5 9.16948C14.6534 9.16948 14.8031 9.21653 14.929 9.30427C15.0548 9.39202 15.1507 9.51625 15.2038 9.6602L17.0053 14.5502C17.0429 14.652 17.102 14.7445 17.1788 14.8212C17.2555 14.898 17.348 14.9572 17.4498 14.9947L22.3398 16.7962C22.4838 16.8493 22.608 16.9452 22.6957 17.071C22.7835 17.1969 22.8305 17.3466 22.8305 17.5C22.8305 17.6534 22.7835 17.8031 22.6957 17.929C22.608 18.0548 22.4838 18.1507 22.3398 18.2038L17.4498 20.0053C17.348 20.0429 17.2555 20.102 17.1788 20.1788C17.102 20.2555 17.0429 20.348 17.0053 20.4498V20.4498Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M20.5 5.5V10" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M22.75 7.75H18.25" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M25 10.75V13.75" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M26.5 12.25H23.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`,
      color : { regular : "#52A675", light : "#DDEEE4" }
    },
    {
      type : "IMPACT",
      title : "Impact",
      description: "7. What is the business objective for this journey?",
      icon : `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="16" fill="#4267AC"/>
      <path d="M16 24.25C20.5563 24.25 24.25 20.5563 24.25 16C24.25 11.4437 20.5563 7.75 16 7.75C11.4437 7.75 7.75 11.4437 7.75 16C7.75 20.5563 11.4437 24.25 16 24.25Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M16 5.875V9.625" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M5.875 16H9.625" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M16 26.125V22.375" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M26.125 16H22.375" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M16 19C17.6569 19 19 17.6569 19 16C19 14.3431 17.6569 13 16 13C14.3431 13 13 14.3431 13 16C13 17.6569 14.3431 19 16 19Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`,
      color : { regular : "#4267AC", light : "#DAE2F1" }
    },
    {
      type : "OUTCOME",
      title : "Outcome",
      description: "8. What steps or actions should the user be able to take in the future? Focus on needs and outcomes, not features!",
      icon : `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="16" fill="#1982C4"/>
      <path d="M12.25 25.75H19.75" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M11.3785 19.6573C10.4867 18.9608 9.76435 18.0712 9.26581 17.0553C8.76727 16.0395 8.50548 14.9239 8.50011 13.7923C8.47765 9.72711 11.755 6.34779 15.8192 6.25213C17.394 6.21421 18.9409 6.67313 20.2402 7.56379C21.5396 8.45446 22.5256 9.73165 23.0582 11.2142C23.5909 12.6967 23.6432 14.3094 23.2078 15.8233C22.7724 17.3373 21.8713 18.6757 20.6324 19.6488C20.3596 19.8602 20.1383 20.1309 19.9854 20.4404C19.8326 20.7498 19.7521 21.0901 19.75 21.4352L19.75 22C19.75 22.1989 19.671 22.3897 19.5303 22.5303C19.3897 22.671 19.1989 22.75 19 22.75H13C12.8011 22.75 12.6103 22.671 12.4697 22.5303C12.329 22.3897 12.25 22.1989 12.25 22L12.25 21.4346C12.2491 21.0916 12.1702 20.7534 12.0192 20.4454C11.8682 20.1375 11.6491 19.868 11.3785 19.6573V19.6573Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M16.7615 9.3235C17.6788 9.47943 18.5251 9.91635 19.1835 10.5739C19.8419 11.2315 20.2798 12.0773 20.4369 12.9944" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`,
      color : { regular : "#1982C4", light : "#D2EAF9" }
    },
    {
      type : "EXPERIMENT",
      title : "Experiment",
      description: "9. What experiments can we perform to support new outcomes in this journey?",
      icon : `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="16" fill="#6A4C93"/>
      <path d="M13.75 7V12.7923C13.75 12.9282 13.7131 13.0616 13.6431 13.1781L7.68153 23.1141C7.61324 23.2279 7.57638 23.3578 7.57471 23.4905C7.57303 23.6232 7.6066 23.754 7.672 23.8695C7.73739 23.985 7.83226 24.0811 7.94692 24.1479C8.06158 24.2148 8.19193 24.25 8.32465 24.25H23.6754C23.8081 24.25 23.9384 24.2148 24.0531 24.1479C24.1678 24.0811 24.2626 23.985 24.328 23.8695C24.3934 23.754 24.427 23.6232 24.4253 23.4905C24.4236 23.3578 24.3868 23.2279 24.3185 23.1141L18.3569 13.1781C18.2869 13.0616 18.25 12.9282 18.25 12.7923V7" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12.25 7H19.75" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M9.87032 19.4654C10.9788 18.6575 12.8816 18.1908 16 19.75C19.3473 21.4236 21.294 20.7631 22.3611 19.8518" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`,
      color : { regular : "#6A4C93", light : "#E4DDEE" }
    },
    {
      type : "PARTNER",
      title : "Partner",
      description: "10. Who internally or externally can/should help with this user’s journey?",
      icon : `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="16" fill="#934C7B"/>
      <path d="M26.5673 15.4173L24.25 16.576L21.25 10.8308L23.5909 9.66034C23.7667 9.57241 23.9701 9.55706 24.1572 9.61759C24.3443 9.67813 24.5001 9.80971 24.5911 9.98401L26.8967 14.3994C26.9428 14.4876 26.9708 14.5842 26.9792 14.6835C26.9876 14.7827 26.9761 14.8826 26.9454 14.9774C26.9148 15.0722 26.8655 15.1599 26.8006 15.2354C26.7357 15.3109 26.6564 15.3728 26.5673 15.4173V15.4173Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M7.74998 16.4755L5.4327 15.3168C5.34362 15.2723 5.26429 15.2105 5.19937 15.1349C5.13444 15.0594 5.08521 14.9717 5.05454 14.8769C5.02388 14.7822 5.0124 14.6822 5.02077 14.583C5.02914 14.4837 5.05719 14.3872 5.10329 14.2989L7.40888 9.88353C7.49989 9.70923 7.65571 9.57764 7.84279 9.51711C8.02987 9.45657 8.23324 9.47192 8.40911 9.55985L10.75 10.7303L7.74998 16.4755Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M24.25 16.576L22.75 18.3308L19.3003 21.7805C19.2087 21.8721 19.095 21.9384 18.9701 21.973C18.8453 22.0075 18.7137 22.0092 18.588 21.9778L13.1546 20.6194C13.0527 20.5939 12.9572 20.5473 12.8745 20.4826L7.75 16.4755" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M22.75 18.3308L18.625 15.3308L17.425 16.2308C16.9057 16.6202 16.2741 16.8308 15.625 16.8308C14.9759 16.8308 14.3443 16.6202 13.825 16.2308L13.3168 15.8496C13.2308 15.7852 13.1597 15.703 13.1083 15.6086C13.0569 15.5143 13.0263 15.41 13.0187 15.3028C13.0111 15.1956 13.0266 15.088 13.0641 14.9874C13.1017 14.8867 13.1605 14.7953 13.2365 14.7193L16.9053 11.0504C16.975 10.9808 17.0576 10.9256 17.1486 10.8879C17.2396 10.8502 17.3372 10.8308 17.4357 10.8308H21.25" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M10.8039 10.7303L15.6151 9.32764C15.787 9.27754 15.9711 9.29056 16.1342 9.36436L19.375 10.8308" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M14.5 23.9558L11.6744 23.2494C11.5598 23.2207 11.4535 23.1654 11.3643 23.0878L9.25 21.25" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`,
      color : { regular : "#934C7B", light : "#EEDDE8" }
    }
  ];

  export default storyItems;