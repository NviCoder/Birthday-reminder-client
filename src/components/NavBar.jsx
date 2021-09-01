import React from 'react';
import {Link} from "react-router-dom";

function NavBar() {
    return (
       <ul>
        <li><Link className="nav-item" to="/home">🏠 Home</Link></li>
        <li><Link className="nav-item" to="/friends">✌️ Friends</Link></li>
        {/* <li><Link className="nav-item" to="/add-new-friend">🤙🏻 Add New Friend</Link></li> */}
        <li style={{ float: 'right'}}>
          <Link className="nav-item" style={{display: 'inline-block'}}  to="/">Logout  </Link>
        </li> 
      </ul> 
    );
}

export default NavBar;