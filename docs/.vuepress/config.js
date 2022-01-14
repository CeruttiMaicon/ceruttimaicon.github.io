module.exports = {
  lang: 'pt-br',
  description: "Minhas competências, anotações e documentações :)",
  title: "Maicon Cerutti",
  head: [
    [
      "script",
      {
        src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
        "data-ad-client": "ca-pub-7563330699889675",
        async: true,
      },
    ],
    [
      "script",
      {},
      "(adsbygoogle = window.adsbygoogle || []).push({  google_ad_client: <your code here>,  enable_page_level_ads: true });",
    ],
  ],
  themeConfig: {
    logo: "/images/perfil.jpg",
    darkMode: true,
    searching: true,
    navbar: [
      {
        text: "Inicio",
        link: "/inicio/README.md"
      },
      {
        text: "Linkedin",
        link: "https://www.linkedin.com/in/maicon-cerutti-516918114/",
      },
      {
        text: "GitHub",
        link: "https://github.com/CeruttiMaicon",
      },
    ],
  },
  plugins: [
    [
      '@vuepress/plugin-search',
      {
        locales: {
          '/': {
            placeholder: 'Search',
            // allow searching the `tags` frontmatter
            maxSuggestions: 10,
            hotKeys: ['s', '/'],
            isSearchable: (page) => page.path !== '/',
          }
        },
      },
    ],
  ],
};