import pages from "./../../pages";
const NAV_ITEMS = [
  {
    label: "Home",
    url: pages.HOME,
    logoSrc: "/images/sidebar/HomeIcon.webp",
    alt: "home",
  },
  {
    label: "Draw",
    url: pages.DRAWER,
    logoSrc: "/images/sidebar/DrawIcon.webp",
    alt: "draw",
  },
  {
    label: "Nested Nav",
    url: pages.NESTED_NAV,
    logoSrc: "/images/sidebar/NestedNav.webp",
    alt: "nav",
  },
  {
    label: "Deeplink",
    url: pages.USER_DEEPLINK,
    logoSrc: "/images/sidebar/YoutubeIcon.webp",
    alt: "deeplink",
  },
  // {
  //   label: "Media",
  //   url: pages.MEDIA,
  //   logoSrc: "/images/sidebar/ImageIcon.webp",
  //   alt: "media",
  // },
  {
    label: "Animations",
    url: pages.ANIMATIONS,
    logoSrc: "/images/sidebar/AnimateIcon.webp",
    alt: "animate",
  },
  {
    label: "Chess",
    url: pages.CHESS,
    logoSrc: "/images/sidebar/ChessIcon.webp",
    alt: "chess",
  },
  {
    label: "Chat",
    url: pages.CHAT,
    logoSrc: "/images/sidebar/ImageIcon.webp",
    alt: "chat",
  },
  {
    label: "Login",
    url: pages.LOGIN,
  },
  {
    label: "Sign up",
    url: pages.SIGNUP,
  },
  {
    label: "Accordion",
    url: pages.ACCORDION,
    logoSrc: "/images/sidebar/AccordionIcon.webp",
  },
];

export default NAV_ITEMS;
