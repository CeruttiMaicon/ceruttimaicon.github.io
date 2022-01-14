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
    sidebar: [
      {
        text: "Inicio",
        children: ["/inicio/"],
      },
      {
        text: "Postgres",
        children: ["/postgres/"],
      },
      {
        text: "Python",
        children: ["/python/"],
      },
      {
        text: "Docker",
        children: [
          "/docker/laradock/",
          "/docker/install/",
          "/docker/comandos/",
          "/docker/docker-compose/",
        ],
      },
      {
        text: "Sistemas Operacionais",
        children: [{
            text: "Linux Mint",
            children: ["/linux-mint-tema-mac/"]
          },
          {
            text: "Linux Ubuntu",
            children: ["/linux-ubuntu-tema-mac/"]
          },
        ],
      },
      {
        text: "Amazon",
        children: ["/amazon/"],
      },
      {
        text: "Laravel",
        children: [
          "/laravel/uploud-de-imagem/",
          "/laravel/uploud-de-anexo/",
          "/laravel/datatable-server-side/",
          "/laravel/dompdf/",
          "/laravel/laravel-homestad/",
          "/laravel/relationship/",
          "/laravel/laravel-vue-validation-for-laravel/",
        ],
      },
      {
        text: "Lumen",
        children: ["/lumen-JWT-Authenticated-API-with-lumen/"],
      },
      {
        text: "Vue.JS",
        children: ["/vue-js/"],
      },

      {
        text: "GIT",
        children: ["/git/"],
      },
      {
        text: "Zero Absoluto",
        children: ["/install-programns/"],
      },
      {
        text: "SonarQuebe",
        children: ["/sonarqube/", "/sonarqube-utilizacao-rapida/"],
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