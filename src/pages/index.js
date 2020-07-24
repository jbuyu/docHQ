import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import Seo from "../components/seo"
import "../styles/styles.scss"
import Header from "../components/Header"
import Main from "../components/Main"

const IndexPage = () => (
  <Layout>
    <Seo />
    <Header />
    <Main />
  </Layout>
)

export default IndexPage
