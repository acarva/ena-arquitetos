import React from "react"
import { Link } from 'gatsby'
import Layout from "../components/layout"
import Header from "../components/header";

const IndexPage = () => {
  return (
    <>
      <Header></Header>
      <Layout>
        <div>
          <h1>Welcome</h1>
          <p><Link to="/contacts">Contact me</Link></p>
        </div>
      </Layout>
    </>
  )
}

export default IndexPage
