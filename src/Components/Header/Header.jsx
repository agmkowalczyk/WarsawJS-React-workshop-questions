import React from 'react'
import logo from './ogp-v1.png';
import './Header.css';

class Header extends React.Component {
  
  render () {
    const { title, desc} = this.props;
    return (
      <header>
        <div className="top-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>
            {title}
          </h1>
        </div>
        <h5>
          {desc}
        </h5>  
      </header>
    );
  }
}
export default Header;
