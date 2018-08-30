import React from 'react'
import Link from 'gatsby-link'
import Media from 'react-media'
import logo from '../img/logo.svg'

const Header = ({ siteTitle }) => (
  <div
    style={{
      backgroundColor: '#D8E9F0',
      marginBottom: '3rem',
    }}
  >
    <div
      style={{
        display:"flex",
        alignItems:"center",
        justifyContent:"left",
        margin: '0 auto',
        maxWidth: 1280,
        padding: '0rem 1.0875rem',
      }}
    >
        <Link to="/">
          <figure className="image">
            <img src={logo} style={{ width: '3rem', marginTop:"1.5rem", marginBottom:"0", marginLeft:"0", marginRight:"0.5rem", flexGrow:"0"}} />
          </figure>
        </Link>
      <h1 style={{ margin: "0", fontSize:"2.5rem",fontFamily: ['Oleo Script', 'Segoe UI', 'sans-serif'], flexGrow:"5" }}>
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
      <h3 style={{ fontSize:"1.2rem", margin:"0", flexGrow:"0"}}>
        <Link
          to="/about/"
          style={{
            color: "#F33535"
          }}
        >
        About
        </Link>
      </h3>
    </div>
  </div>
)

const Sidebar = (props) => (
  <div
      style={{
        border: '2px solid #e6e6e6',
        maxWidth: 960,
        padding: '0.5rem',
        marginBottom: '25px'
      }}
      >
      <strong>{props.title}.</strong> {props.description}
  </div>
  );


export default Header
