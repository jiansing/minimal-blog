const newsletterFeed = require(`./src/utils/newsletterFeed`)

module.exports = (options) => {
  const { feed = true, feedTitle = `Jiansing's Blog - 念念不忘，必有回响` } = options

  return {
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
      resolve: `@lekoarts/gatsby-theme-minimal-blog-core`,
      options,
    },
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
        name: `Jiansing's Blog`,
        short_name: `JiansingBlog`,
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
        crossOrigin: `use-credentials`, // `use-credentials` or `anonymous`

      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    {
      resolve: 'gatsby-plugin-brotli',
      options: {
        extensions: ['css', 'html', 'js', 'svg']
      }
    },
    {
      resolve: 'gatsby-plugin-zopfli',
      options: {
        extensions: ['css', 'html', 'js', 'svg']
      }
    },
    feed && {
      resolve: `gatsby-plugin-feed`,
      options: newsletterFeed(feedTitle),
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-theme-ui`,
  ].filter(Boolean),
}
}