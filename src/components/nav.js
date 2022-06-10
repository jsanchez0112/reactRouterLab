import React from "react"
import {Link} from "react-router-dom"

const Nav = (props) => { 
      return(
            <div className="Nav">
                  <Link to="/">
                        <div>Home Page</div>
                  </Link>
                  <Link to="/about">
                        <div>About</div>
                  </Link>
                  <Link to="/stocks">
                        <div>STOCKS</div>
                  </Link>
                  <Link to="/stocks/:details">
                        <div>Details</div>
                  </Link>
            </div>
      )
}

export default Nav;