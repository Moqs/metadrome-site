import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>We've dreamt emos.</h1>
    <p>Metadrome（メタドローム）は静的サイトジェネレータ「Gatsby」によって生成され、管理者「もく」によって実験的に運用されています。</p>
    <p>楽しくWebサイト制作をしましょう。</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
