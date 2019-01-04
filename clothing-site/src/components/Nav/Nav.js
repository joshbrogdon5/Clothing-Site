import React, { Component } from 'react';
import {withRouter, Link} from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <div>
        <Link to='/'><button>Home</button></Link> {/*replace with image later*/}
        <button>Men's</button>
        <button>Women's</button>
        <button>Account</button> {/*replace with image later*/}
        <button>Search</button> {/*replace with image later*/}
        <button>Cart</button> {/*replace with image later*/}
      </div>
    )
  }
}

export default withRouter(Nav);
