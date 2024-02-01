export default {
  title: "Vychod UI",
  base: process.env.NODE_ENV === "production" ? "/ui-doc/" : "/",
  themeConfig: {
    nav: [
      { text: "指南", link: "/guide/installation" },
      { text: "组件", link: "/components/button/" },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/vychodlc/ui-components" },
    ],
    sidebar: {
      "/": [
        {
          text: "引入",
          items: [
            {
              text: "介绍",
              link: "/guide/introduce",
            },
            {
              text: "快速开始",
              link: "/guide/quickstart",
            },
          ],
        },
        {
          text: "开发",
          items: [
            {
              text: "目录结构",
              link: "/develop/",
            },
            {
              text: "组件开发",
              link: "/develop/component",
            },
            {
              text: "全局组件",
              link: "/develop/global",
            },

            {
              text: "打包发布",
              link: "/develop/build",
            },
          ],
        },
      ],
    },
  },
};