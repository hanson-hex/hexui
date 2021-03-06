module.exports = {
  base: "/hexui/",
  title: "hexUi",
  cache: false,
  description: "好用的ui框架",
  themeConfig: {
    nav: [
      {
        text: "主页",
        link: "/",
      },
      {
        text: "文档",
        link: "/guide/",
      },
      {
        text: "交流",
        link: "https://google.com",
      },
    ],
    sidebar: [
      {
        title: "入门",
        children: ["/install/", "/get-started/"],
      },
      {
        title: "组件",
        children: [
          "/components/button",
          "/components/input",
          "/components/collapse",
          "/components/grid",
          "/components/layout",
          "/components/popover",
          "/components/tabs",
          "/components/toast",
        ],
      },
    ],
  },
}
