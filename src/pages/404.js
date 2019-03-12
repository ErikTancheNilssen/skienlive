import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
    <Layout bg="p1">
        <SEO title="404: Not found" />
        <h1>UPS!</h1>
        <p>Siden kan være flyttet, eller du kan ha skrevet en nettadresse som ikke eksisterer.</p>
    </Layout>
)

export default NotFoundPage
