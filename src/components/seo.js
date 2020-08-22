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
                name: `description`,
                content: metaDescription,
              },
              {
                property: `og:title`,
                content: metaTitle,
              },
              {
                property: `og:description`,
                content: metaDescription,
              },
              {
                property: `og:type`,
                content: `website`,
              },
              {
                property: `og:image:url`,
                content:
                  "https://res.cloudinary.com/arcadia-ware/image/upload/c_scale,h_480,w_640/v1598100238/portfolio/doc_k3mqbf.png",
              },
              {
                property: `og:url:secure_url`,
                content:
                  "https://res.cloudinary.com/arcadia-ware/image/upload/c_scale,h_480,w_640/v1598100238/portfolio/doc_k3mqbf.png",
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
