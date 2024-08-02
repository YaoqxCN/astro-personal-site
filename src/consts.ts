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
  noCategory: "其他",
  categoriesPage: "📑分类",
  categoryPage: "分类：",
  link: "链接: ",
  prevPage: "上一页",
  nextPage: "下一页",
};

// Menu items for navigation
export const menuItems = [
  { id: "home", text: "主页", href: "/", svg: "home", target: "_self" }, // Home page
  { id: "about", text: "关于", href: "/about", svg: "about", target: "_self" }, // About page
  {
    id: "blog",
    text: "博客",
    href: "/blog",
    svg: "blog",
    target: "_self",
    subItems: [
      {
        id: "all",
        text: "全部",
        href: "/blog",
        svg: "post",
        target: "_self",
      }, // All blog
      {
        id: "tech",
        text: "技术",
        href: "/blog/categories/技术",
        svg: "heart",
        target: "_self",
      }, // Technology category
      {
        id: "study",
        text: "学习",
        href: "/blog/categories/学习",
        svg: "book",
        target: "_self",
      }, // Study category
      {
        id: "life",
        text: "生活",
        href: "/blog/categories/生活",
        svg: "cube",
        target: "_self",
      }, // Life category
    ],
  }, // Blog page with sub-items
  {
    id: "categories",
    text: "分类",
    href: "/blog/categories",
    svg: "categories",
    target: "_self",
  }, // All categories
  {
    id: "project",
    text: "项目",
    href: "/project",
    svg: "project",
    target: "_self",
  }, // Projects page
  {
    id: "friend",
    text: "友情链接",
    href: "/friend",
    svg: "friend",
    target: "_self",
  }, // Friends page
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
  {
    href: "/support",
    ariaLabel: "Support",
    title: "Support me",
    svg: "support",
    target: "_self",
  },
];
// Category Information
export const categoriesInfo = [
  { title: "技术", desc: "科技与狠活", target: "_self" },
  { title: "生活", desc: "生活中的有感而发", target: "_self" },
  { title: "学习", desc: "知识就是力量", target: "_self" },
];
