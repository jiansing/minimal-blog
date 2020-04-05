require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    siteTitle: `Jiansing's Blog`,
    siteTitleAlt: `Jiansing's Blog - 念念不忘，必有回响`,
    siteHeadline: `Jiansing's Blog - 念念不忘，必有回响`,
    siteUrl: `https://blog.ofo.moe`,
    siteDescription: `欢迎来到我的小站呀，很高兴遇见你！🤝`,
    siteLanguage: `zh-Hans`,
    author: `@iwyifan`,





  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      options: {
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
            name: `Telegram`,
            url: `https://t.me/jiansing`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.UA-159286732-3,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `minimal-blog - @lekoarts/gatsby-theme-minimal-blog`,
        short_name: `minimal-blog`,
        description: `欢迎来到我的小站呀，很高兴遇见你！🤝`,
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
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    // `gatsby-plugin-webpack-bundle-analyser-v2`,
  ],
}
