// require("dotenv").config()
module.exports = {
  siteMetadata: {
    title: `Kisumu Home Doctors`,
    description: `Call and receive help from accredited medical practitioners in kenya.`,
    author: "Justus Buyu",
    image: "./static/assets/doc.png",
    url: "./static/assets/doc.png",
    twitterUsername: "@buyujustus",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/assets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `minimal-ui`,
        icon: `static/doc.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-smoothscroll`,
    "gatsby-source-sanity-transform-images",
    // {
    //   resolve: "gatsby-source-graphql",
    //   options: {
    //     // This type will contain remote schema Query type
    //     typeName: "SANITY",
    //     // This is the field under which it's accessible
    //     fieldName: "sanity",
    //     // URL to query from
    //     url: "https://khome.sanity.studio/",
    //   },
    // },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `hql55e4w`,
        dataset: `production`,
        // a token with read permissions is required
        // if you have a private dataset
        // token: process.env.MY_TOKEN,
        // watchmode: true,
        // overlayDrafts: true,
        // If the Sanity GraphQL API was deployed using `--tag <name>`,
        // use `graphqlTag` to specify the tag name. Defaults to `default`.
        graphqlTag: "default",
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    // 7fcce0daaec22b004a778cc861c91e0f74e0133e
  ],
}

// console.log(process.env.MY_TOKEN)
