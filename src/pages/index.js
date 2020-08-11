import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import Seo from "../components/seo"
import "../styles/styles.scss"
import Header from "../components/Header"
import Main from "../components/Main"
import Footer from "../components/Footer"
import Process from "../components/Process"
import FeedBack from "../components/FeedBack"
import Team from "../components/Team"
import Services from "../components/Services"
import { graphql, useStaticQuery } from "gatsby"
// const pageQuery = graphql`
//   {
//     gcms {
//       Heroes {
//         content
//       }
//     }
//   }
// `
const IndexPage = () => {
  // const {
  //   gcms: { Hero },
  // } = useStaticQuery(pageQuery)
  // const heroTitle = heroTitles[0]
  // const heroContent = heroContents[0]
  // const discount = discounts[0]
  return (
    <Layout>
      <Seo />
      <Header />
      <Main
      // heroTitle={heroTitle}
      // heroContent={heroContent}
      // discount={discount}
      />
      <Process />
      <Team />
      <Services />
      <FeedBack />
      <Footer />
    </Layout>
  )
}

export default IndexPage
