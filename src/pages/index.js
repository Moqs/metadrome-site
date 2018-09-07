import React from 'react'
import Link from 'gatsby-link'
import logo from '../img/logo.svg'

const IndexPage = () => (
  <div>
    <div style={{display:"flex",
          //alignItems:"center",
          justifyContent:"center",
          flexWrap: "wrap",
    }}>
      <figure className="image" style={{marginBottom:"0"}}>
        <img src={logo} alt="Metadrome" style={{ width: '4rem', marginTop:"0rem", marginBottom:"0", marginLeft:"2rem", marginRight:"2rem"}} />
      </figure>
      <h1 style={{color:"#F33535" ,fontSize:"4rem",fontFamily: ['Oleo Script', 'Segoe UI', 'sans-serif'], fontKerning:"normal"}}>Metadrome</h1>
    </div>
  </div>
)

export default IndexPage
