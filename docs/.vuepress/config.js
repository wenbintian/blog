module.exports = {
    title: "欢迎来到wenbintian的博客",
    description: "欢迎来到wenbintian的博客",
    head: [], // 额外的需要被注入到当前页面的HTML<head>中的标签
    host: '0.0.0.0', // 指定用于dev server的主机名， 默认 0.0.0.0 √
    post: '8080', // 端口 √
    dest: '.vuepress/dist', // build 的输出目录 √
		extraWatchFiles: [], // 指定额外的需要被监听的文件 √
		cache: false, // 缓存 默认是true
    themeConfig: {
			sidebarDepth: 2, // 配置左侧侧边栏显示的深度
			// 每个页面的导航栏生成生成一个 GitHub 链接, 前缀是 https://github.com/ 加上 repo
			repo: 'wenbintian',
			editLinkText: '帮助我们改善此页面！',
			// logo: './public/logo.png'
      nav: [ // 右上角列表
        { text: '知识篇', link: '/knowledge/' },
        { text: '随身笔记', link: '/notes/' },
			],
			sidebar: {
				'/knowledge/': [
					{
						title: '读书篇',
						path: '/knowledge/book/',
						children: [
							'/knowledge/book/knowjs1',
							'/knowledge/book/knowjs2',
							'/knowledge/book/knowjs3'
						]
					},
					{
						title: '工具篇',
						path: '/knowledge/tool/',
						children: [
							'/knowledge/tool/tool1',
							// '/knowledge/tool/knowjs2',
							// '/knowledge/tool/knowjs3'
						]
					},
				],
				'/notes/': [
					{
						title: 'CSS笔记',
						path: '/notes/css/',
						sidebarDepth: 0,
						children: [
							'/notes/css/css1',
							'/notes/css/css2',
							'/notes/css/css3',
							'/notes/css/css4',
						]
					},
					{
						title: 'JS笔记',
						path: '/notes/js/',
						sidebarDepth: 0,
						children: [
							'/notes/js/js1',
							// '/notes/js/js2',
							// '/notes/js/js3',
						]
					},
				],
			},
      lastUpdated: '最后一次修改时间:'
    }

}