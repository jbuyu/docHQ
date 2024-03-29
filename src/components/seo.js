/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
// import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { graphql, StaticQuery } from "gatsby"

const Seo = ({ description, keywords, title, image, url, author }) => {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaDescription =
          description || data.site.siteMetadata.description
        const metaTitle = title || data.site.siteMetadata.title
        const metaAuthor = author || data.site.siteMetadata.author
        const metaImage = image || data.site.siteMetadata.image
        const metaUrl = url || data.site.siteMetadata.url
        const metaKeywords = keywords || [
          "Kenyan Doctor",
          "Kenya doctor help",
          "Consult doctor Kenya",
          "Online medical consultation",
          "Best online consultation kenya",
        ]
        return (
          <Helmet
            title={title}
            // titleTemplate={`%s | ${site.siteMetadata.title}`}
            meta={[
              {
                name: `google-site-verification`,
                content: "Ym9Xs6J0F1vhHoDXXTCJHntwTq4njmUbQkKTCuAhy4k",
              },
              {
                name: `description`,
                content:
                  "We are a group of doctors offering telemedicine services to Kenyans from all corners of the country and home based medical care to residents of Kisumu City.",
              },
              {
                property: `og:title`,
                content: "Kisumu Home Doctors",
              },
              {
                property: `og:description`,
                content:
                  "We are a group of doctors offering telemedicine services to Kenyans from all corners of the country and home based medical care to residents of Kisumu City.",
              },
              {
                property: `og:type`,
                content: `website`,
              },
              {
                property: `og:image`,
                content:
                  "https://res.cloudinary.com/arcadia-ware/image/upload/c_scale,h_300,w_300/v1598100238/portfolio/doc_k3mqbf.png",
              },
              {
                property: `og:url`,
                content:
                  "https://res.cloudinary.com/arcadia-ware/image/upload/c_scale,h_300,w_300/v1598100238/portfolio/doc_k3mqbf.png",
              },
              {
                name: `twitter:card`,
                content: `summary`,
              },
              {
                name: `twitter:creator`,
                content: metaAuthor,
              },
              {
                name: `twitter:title`,
                content: metaTitle,
              },
              {
                name: `twitter:description`,
                content: metaDescription,
              },
            ].concat(
              metaKeywords && metaKeywords.length > 0
                ? {
                    name: `keywords`,
                    content: metaKeywords.join(`, `),
                  }
                : []
            )}
          />
        )
      }}
    />
  )
}
const detailsQuery = graphql`
  query DefaulySEOQuery {
    site {
      siteMetadata {
        title
        description
        author
        image
      }
    }
  }
`
export default Seo
