import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const ContactsPage = () => {
  return (
    <Layout>
      <div>
        <h1>Contacts</h1>
        <section>
          <p>+351917625714</p>
          <Link to="https://twitter.com/chezcarvalho" target="_blank">Twitter</Link>
        </section>
      </div>
    </Layout>
  )
}

export default ContactsPage
