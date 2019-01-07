import React, { Component } from 'react';
import {withRouter, Link} from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <div>
        <Link to='/'><button>Home</button></Link> {/*replace with image later*/}
        <Link to='/Mens'><button>Men's</button></Link>
        <Link to='/Womens'><button>Women's</button></Link>
        <Link to='/Account'><button>Account</button></Link> {/*replace with image later*/}
        <input placeholder='Search' /> {/*replace with image later*/}
        <Link to='/Cart'><button>Cart</button></Link> {/*replace with image later*/}
      </div>
    )
  }
}

export default withRouter(Nav);
