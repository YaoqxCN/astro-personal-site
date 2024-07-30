// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

// Site title and description
export const SITE_TITLE = "Yaoqx 💤";
export const SITE_DESCRIPTION = "Yaoqx 的个人主页";
export const DATE_FORMAT = "YYYY-MM-DD";

// User profile information
export const USER_NAME = "Yaoqx";
export const USER_AVATAR = "/profile.webp";

// Server and transition settings
export const SERVER_URL = "https://demo.saroprock.com";
export const TRANSITION_API = true;

// Some informative text on the site
export const infoTest = {
  tag: "标签：",
  noTag: "无标签",
  tagPage: "标签：",
  link: "链接: ",
  prevPage: "上一页",
  nextPage: "下一页",
};

// Menu items for navigation
export const menuItems = [
  { id: "home", text: "主页", href: "/", svg: "home" }, // Home page
  { id: "about", text: "关于", href: "/about", svg: "about" }, // About page
  { id: "blog", text: "博客", href: "/blog", svg: "blog" }, // Blog page
  { id: "project", text: "作品", href: "/project", svg: "project" }, // Projects page
  { id: "friend", text: "友情链接", href: "/friend", svg: "friend" }, // Friends page
  {
    id: "contact",
    text: "邮箱",
    href: "mailto:1064245198@qq.com", // Contact email
    target: "_blank", // Open in a new tab
    svg: "contact",
  },
];

// Social media and contact icons
export const socialIcons = [
  {
    href: "https://github.com/YaoqxCN",
    ariaLabel: "Github",
    title: "Github",
    svg: "github",
  },
  {
    href: "https://space.bilibili.com/2064579635",
    ariaLabel: "BiliBili",
    title: "BiliBili",
    svg: "bilibili",
  },
];
