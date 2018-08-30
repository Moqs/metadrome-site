import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>We've Dreamt Emos.</h1>
    <p>Metadrome（メタドローム）は静的サイトジェネレータ「Gatsby」によって生成され、管理者「<Link to="/about/">もくさい（もく）</Link>」によって実験的に運用されています。</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
