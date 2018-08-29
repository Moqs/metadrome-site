import React from 'react'
import Link from 'gatsby-link'
import logo from '../img/logo.svg'

const Header = ({ siteTitle }) => (
  <div
    style={{
      backgroundColor: '#D8E9F0',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        display:"flex",
        alignItems:"center",
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
        <Link to="/">
          <figure className="image">
            <img src={logo} style={{ width: '3.2rem', marginTop:"1.5rem", marginBottom:"0", marginLeft:"0", marginRight:"0.5rem"}} />
          </figure>
        </Link>
      <h1 style={{ margin: 0, fontFamily: ['Oleo Script', 'Segoe UI', 'sans-serif'] }}>
        <Link
          to="/"
          style={{
            color: '#F33535',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
