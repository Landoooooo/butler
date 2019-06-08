import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import AboutUs from "../components/aboutus";
import Services from "../components/services";
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Butler Consulting</h1>
    <p>Allow us to be at your service!</p>
    <AboutUs/>
    <Services/>
  </Layout>
)

export default IndexPage
