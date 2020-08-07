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

const IndexPage = () => (
  <Layout>
    <Seo />
    <Header />
    <Main />
    <Process />
    <Team />
    <Services />
    <FeedBack />
    <Footer />
  </Layout>
)

export default IndexPage
