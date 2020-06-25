require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    siteTitle: `Jiansing's Blog`,
    siteTitleAlt: `Jiansing's Blog - 念念不忘，必有回响`,
    siteHeadline: `Jiansing's Blog - 念念不忘，必有回响`,
    siteUrl: `https://blog.ofo.moe`,
    siteDescription: `「与君初相识，犹如故人归」Hi！我是 Jiansing，欢迎来到我的 Blog 呀，很高兴遇见你！🤝`,
    siteLanguage: `zh-Hans`,
    siteImage: `/banner.jpg`,
    author: `@iwyifan`,





  },
  plugins: [
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://blog.ofo.moe`,
        stripQueryString: true,
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `jiansing`
      }
    },
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      options: {
        formatString: `YYYY.MM.DD`,
        feedTitle: `Jiansing's Blog - 念念不忘，必有回响`,
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
        ],
        externalLinks: [
          {
            name: `Twitter`,
            url: `https://twitter.com/iwyifan`,
          },
          {
            name: `Rss`,
            url: `https://blog.ofo.moe/rss.xml`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-159286732-3",
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jiansing's Blog - 念念不忘，必有回响`,
        short_name: `Jiansing's Blog`,
        description: `「与君初相识，犹如故人归」Hi！我是 Jiansing，欢迎使用 PWA 访问我的 Blog 呀，很高兴遇见你！🤝`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
        legacy: false, // this will not add apple-touch-icon links to <head>
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    // `gatsby-plugin-webpack-bundle-analyser-v2`,
  ],
}
