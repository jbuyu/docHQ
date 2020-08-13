import React, { Component } from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import Seo from "../components/seo"
import "../styles/styles.scss"
import Header from "../components/Header"
import Main from "../components/Main"
import Footer from "../components/Footer"
import Process from "../components/Process"
import Reason from "../components/Reason"
import CustomerReviews from "../components/CustomerReviews"
import Team from "../components/Team"
import Services from "../components/Services"
import { graphql, useStaticQuery } from "gatsby"
const IndexPage = () => {
  //make
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
      allSanityService {
        nodes {
          description
        }
      }
      allSanityReason {
        nodes {
          description
        }
      }
      allSanityReasonList {
        nodes {
          description
        }
      }
      allSanityReview {
        nodes {
          name
          comment
        }
      }
      allSanityDoctor {
        nodes {
          name
          bio
          image {
            asset {
              url
            }
          }
        }
      }
      allSanityProcess {
        nodes {
          step
          description
          image {
            asset {
              url
            }
          }
        }
      }
    }
  `
  const {
    allSanityHero,
    allSanityAbout,
    allSanityOffer,
    allSanityTelemedicine,
    allSanityHome,
    allSanityProcess,
    allSanityService,
    allSanityReview,
    allSanityDoctor,
    allSanityReason,
    allSanityReasonList,
  } = useStaticQuery(pageQuery)

  const heroTitle = allSanityHero.nodes[0]
  const about = allSanityAbout.nodes[0]
  const offer = allSanityOffer.nodes[0]
  const telemedicine = allSanityTelemedicine.nodes[0]
  const home = allSanityHome.nodes[0]
  const reason = allSanityReason.nodes[0]
  const process = allSanityProcess.nodes
  const service = allSanityService.nodes
  const review = allSanityReview.nodes
  const doctor = allSanityDoctor.nodes
  const reasonList = allSanityReasonList.nodes

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
        doctor={doctor}
      />
      <Process process={process} />
      <Team doctors={doctor} />
      <Services services={service} />
      <Reason reason={reason} reasonList={reasonList} />
      <CustomerReviews reviews={review} />
      <Footer />
    </Layout>
  )
}

export default IndexPage
