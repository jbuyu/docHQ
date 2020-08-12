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
const pageQuery = graphql`
  {
    allSanityHero {
      nodes {
        title
      }
    }
    allSanityAbout {
      nodes {
        description
      }
    }
    allSanityTelemedicine {
      nodes {
        amount
      }
    }
    allSanityHome {
      nodes {
        amount
      }
    }
    allSanityOffer {
      nodes {
        title
      }
    }
    allSanityProcess {
      nodes {
        step
        description
      }
    }
  }
`
const IndexPage = () => {
  const {
    allSanityHero,
    allSanityAbout,
    allSanityOffer,
    allSanityTelemedicine,
    allSanityHome,
    allSanityProcess,
  } = useStaticQuery(pageQuery)

  const heroTitle = allSanityHero.nodes[0]
  const about = allSanityAbout.nodes[0]
  const offer = allSanityOffer.nodes[0]
  const telemedicine = allSanityTelemedicine.nodes[0]
  const home = allSanityHome.nodes[0]
  const process = allSanityProcess.nodes[0]

  return (
    <Layout>
      <Seo />
      <Header />
      <Main
        heroTitle={heroTitle}
        about={about}
        offer={offer}
        telemedicine={telemedicine}
        home={home}
      />
      <Process process={process} />
      <Team />
      <Services />
      <FeedBack />
      <Footer />
    </Layout>
  )
}

export default IndexPage
