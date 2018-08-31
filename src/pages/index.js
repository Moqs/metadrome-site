import React from 'react'
import Link from 'gatsby-link'
import logo from '../img/logo.svg'

const IndexPage = () => (
  <div>
    <div style={{display:"flex",
          //alignItems:"center",
          justifyContent:"left"
    }}>
      <figure className="image" style={{marginBottom:"0"}}>
        <img src={logo} alt="Metadrome" style={{ width: '5rem', marginTop:"0rem", marginBottom:"0", marginLeft:"0", marginRight:"2rem"}} />
      </figure>
      <h1 style={{fontFeatureSettings:"palt", color:"#F33535" ,fontSize:"5rem",fontFamily: ['Oleo Script', 'Segoe UI', 'sans-serif']}}>Metadrome</h1>
    </div>
    <h1>We've Dreamt Emos.</h1>
    <p>Metadrome（メタドローム）は静的サイトジェネレータ「Gatsby」によって生成され、管理者「<Link to="/about/">もくさい（もく）</Link>」によって実験的に運用されています。</p>
    <p>Metadrome is a website generated with a static site generator "Gatsby", and operated experimentally by owner, Mokusai.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
