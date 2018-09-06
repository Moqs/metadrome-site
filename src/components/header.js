import React from 'react'
import Link from 'gatsby-link'
import Media from 'react-media'
import logo from '../img/logo_dark.svg'

const Header = ({ siteTitle }) => (
  <div
    style={{
      backgroundColor: '#f2bb05',
      marginBottom: '3rem',
    }}
  >
    <div
      style={{
        display:"flex",
        alignItems:"center",
        justifyContent:"left",
        flexWrap:"wrap",
        margin: '0 auto',
        maxWidth: 1280,
        padding: '0rem 1.0875rem',
      }}
    >
        <Link to="/">
          <figure className="image" style={{marginBottom:"0"}}>
            <img src={logo} alt="Metadrome" style={{ width: '2rem', marginTop:"0.35rem", marginBottom:"0", marginLeft:"0", marginRight:"4rem", flexGrow:"5"}} />
          </figure>
        </Link>
      {/* <h1 style={{ margin: "0", fontSize:"2.5rem",fontFamily: ['Oleo Script', 'Segoe UI', 'sans-serif'], flexGrow:"5" }}>
        <Link
          to="/"
          style={{
            color: '#F33535',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1> */}
      <h3 style={{ fontSize:"1.0rem", margin:"0", marginRight:"2rem", flexGrow:"0"}}>
        <Link
          to="/article/"
          style={{
            color: "#124e78",
            textDecoration:"none"
          }}
        >
        Article
        </Link>
      </h3>

      <h3 style={{ fontSize:"1.0rem", margin:"0", flexGrow:"0"}}>
        <Link
          to="/about/"
          style={{
            color: "#124e78",
            textDecoration:"none"
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
