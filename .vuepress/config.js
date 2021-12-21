module.exports = {
  title: "派大星",
  description: "",
  dest: "dist",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "https://pan.zealsay.com/blog/favicon.ico",
      },
    ],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ],
    [
      "script",
      {},
      `
          var _hmt = _hmt || [];
          (function() {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?b0aae218897fa9d8a9f76e9a77e0b3c6";
            var s = document.getElementsByTagName("script")[0]; 
            s.parentNode.insertBefore(hm, s);
          })();
        `,
    ], //百度统计
  ],
  locales: {
    "/": {
      lang: "zh-CN",
    },
  },
  // "theme": "reco",
  themeConfig: {
    nav: [
      {
        text: "主页",
        link: "/",
        icon: "reco-home",
      },
      {
        text: "时间轴",
        link: "/timeline/",
        icon: "reco-date",
      },
      {
        text: "关于",
        link: "/about/",
        icon: "reco-account",
      },
    ],
    type: "blog",
    sidebar: false,
    blogConfig: {
      category: {
        location: 2,
        text: "博客",
      },
      tag: {
        location: 3,
        text: "标签",
      },
    },
    friendLink: [
      {
        title: "作者博客",
        desc: "做一个极致的人",
        logo: "/avatar.png",
        // link: "https://blog.zealsay.com",
      },

      // {
      //   title: "zealsay开发指南",
      //   desc: "zealsay轻应用脚手架开发指南",
      //   logo: "https://pic.zealsay.com/20190909225214850000000.jpg",
      //   link: "https://docs.zealsay.com",
      // },
    ],
    valineConfig: {
      appId: "ChKt3l814veAU9J99rXphbK1-MdYXbMMI", // your appId
      appKey: "5PkJAHfvk4PsTlOrit5e30Eh", // your appKey
      avatar: "", //
      enableQQ: true, //启用昵称框自动获取QQ昵称和QQ头像
      requiredFields: ["nick", "mail"], //设置必填项
    },
    logo: "/avatar.png",
    // "huawei": true, //首页出现华为文案
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: "Last Updated",
    author: "派大星",
    authorAvatar: "/avatar.png",
    record: "你的备案号", //icp备案
    startYear: "2021",
    info: "一名追求技术喜欢安静的程序猿",
    socials: {
      github: "https://github.com/kingszs", //github
      gitlub: false, //gitlub
      gitee: "https://gitee.com/paidaxing258", //gitee
      // jianshu: "https://www.jianshu.com/u/e2d051b6d2e9", //简书
      // zhihu: "https://www.zhihu.com/people/qian-ge-diao-63", //知乎
      toutiao: false, //知乎
      juejin: "https://juejin.cn/user/2243447087196375", //掘金
      // segmentfault: "https://segmentfault.com/u/zeal_5eecb699bdb08", //思否
      csdn: false, //CSDN
      wechat: "13865084872", //微信
      qq: "576560107", //QQ
    },
    mottos: [
      {
        zh: "愿你保持初心和善良,笑里尽是温暖与坦荡。",
        en: "May you keep your original heart and kindness, and smile with warmth and magnanimity.",
      },
      {
        zh: "年轻就是无限的可能。",
        en: "Youth means limitless possibilities.",
      },
      {
        zh: "真正的梦就是现实的彼岸。",
        en: "Real dream is the other shore of reality.",
      },
      {
        zh: "不为模糊不清的未来担忧，只为清清楚楚的现在努力。",
        en: "Don't worry about the vague future, just strive for the clear present.",
      },
      {
        zh: "与其装腔作势企图影响别人，不如咬牙切齿狠命修理自己。",
        en: "Rather than pretending to influence others, it's better to grind your teeth and repair yourself.",
      },
      {
        zh: "上天是公平的，只要努力就会有收获，否则就是你不够努力。",
        en: "God is fair, as long as effort will include results, otherwise is you hard enough.",
      },
      {
        zh: "人生没有后悔，我们只能尽力去不让自己后悔。",
        en: "Life without regret, we can only do our best to not to regret.",
      },
    ],
    covers: [
      "https://pan.zealsay.com/zealsay/cover/7.jpg",
      "https://pan.zealsay.com/zealsay/cover/1.jpg",
      "https://pan.zealsay.com/zealsay/cover/2.jpg",
      "https://pan.zealsay.com/zealsay/cover/3.jpg",
      "https://pan.zealsay.com/zealsay/cover/4.jpg",
      "https://pan.zealsay.com/zealsay/cover/5.jpg",
      "https://pan.zealsay.com/zealsay/cover/6.jpg",
    ],
    codeTheme: "tomorrow",
  },
  markdown: {
    lineNumbers: false,
  },
  // configureWebpack: (config, isServer) => {
  //   if (!isServer) {
  //     // 修改客户端的 webpack 配置
  //     config.output.publicPath = config.mode === 'production'
  //       ? 'https://pan.zealsay.com/blog/' // sample/essays 打包的默认路径为 ‘_nuxt’ 或者可以指定cdn 域名
  //       : '/';
  //     config.output.filename = "assets/js/[name].js";
  //   }
  // }
}
