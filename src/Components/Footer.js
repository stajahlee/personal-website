import React, { Component } from 'react';

class Footer extends Component {
  render() {

    if(this.props.data){
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url} target="_blank" rel="noopener noreferrer"><i className={network.className}></i></a></li>
      })
    }

    return (
      <footer>

     <div className="row">
        <div className="twelve columns">
           <ul className="social-links" target="_blank">
              {networks}
           </ul>

           <ul className="copyright">
             <li>Images by <a title="Tim Hoeflich Photography" href="https://www.flickr.com/photos/thoeflich/" target="_blank" rel="noopener noreferrer">Tim Hoeflich Photography</a></li>
             <li>Design by <a title="Styleshout" href="https://www.styleshout.com/" target="_blank" rel="noopener noreferrer">Styleshout</a></li>
             <li>Template created by <a title="Tim Baker" href="https://github.com/tbakerx/" target="_blank" rel="noopener noreferrer">Tim Baker </a>&copy; 2017</li>
           </ul>

        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
     </div>
  </footer>
    );
  }
}

export default Footer;
