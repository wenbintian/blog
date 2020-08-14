module.exports = {
    title: "欢迎来到wenbintian的博客",
    description: "欢迎来到wenbintian的博客",
    head: [], // 额外的需要被注入到当前页面的HTML<head>中的标签
    host: '0.0.0.0', // 指定用于dev server的主机名， 默认 0.0.0.0 √
    post: '8080', // 端口 √
    dest: '.vuepress/dist', // build 的输出目录 √
    extraWatchFiles: [], // 指定额外的需要被监听的文件 √
    themeConfig: {
      // logo: './public/logo.png'
      nav: [ // 右上角列表
        { text: '首页', link: '/' }
      ]
    }

}