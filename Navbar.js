import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {
  let myStyle = {
    color: 'white',
    backgroundColor: 'black'
}

  return (
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid" style={myStyle}>
    <a className="navbar-brand" style={myStyle} href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" style={myStyle} aria-current="page" href="/">{props.home}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" style={myStyle} href="/">{props.aboutText}</a>
        </li>     
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-primary" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  )
}
Navbar.propTypes = {title : PropTypes.string,
                    aboutText : PropTypes.string}
