module.exports = {
  siteMetadata: {
    title: `DoqHq Kenya`,
    description: `Call and receive help from accredited medical practitioners in kenya.`,
    author: "Justus Buyu",
    image: "./static/assets/doc.png",
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
        icon: `static/assets/doc.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-smoothscroll`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    // `gatsby-plugin-netlify-cms`,
    // "gatsby-transformer-remark",
    // {
    //   resolve: `gatsby-source-contentful`,
    //   options: {
    //     spaceId: `your_space_id_grab_it_from_contentful`,
    //     accessToken: `your_token_id_grab_it_from_contentful`,
    //   },
    // },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `backgrounds`,
    //     path: `${__dirname}/src/backgrounds`, // wherever background images are stored
    //   },
    // },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
