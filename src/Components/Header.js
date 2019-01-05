import React, { Component } from 'react';

class Header extends Component {
  render() {

   //  if(this.props.data){
   //    var networks= this.props.data.social.map(function(network){
   //      return <li key={network.name}><a href={network.url} target="_blank" rel="noopener noreferrer"><i className={network.className}></i></a></li>
   //    })
   //  }

    return (
      <header id="home">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
	         <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#portfolio">Work</a></li>
            {/* <li><a className="smoothscroll" href="#contact">Contact</a></li> */}
         </ul>

      </nav>

      <div className="row banner">
         <div className="banner-text">
            <p>
              <a href='https://www.linkedin.com/in/stajah' className="btn default" target="_blank" rel="noopener noreferrer">Get in touch with me.</a>
            </p>
            {/* <hr />
            <h1 className="responsive-headline">{fullname}</h1>
            <h2 className="responsive-headline">Software Developer  |  Graphic Designer  |  Artist</h2>
            <hr /> */}


            </div>
         </div>

         <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
         </p>

      </header>
      );
   }
   }

   export default Header;
