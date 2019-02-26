import React, { Component } from 'react';

class About extends Component {
  render() {
   let clicked = 0;

    if(this.props.data){
      var fullname = this.props.data.fullname;
      var profilepic= "images/"+this.props.data.image;
      var description = this.props.data.description;
      var bio = this.props.data.bio;
      var email = this.props.data.email;
      var linkedincontact = this.props.data.linkedincontact;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="Stajah Hoeflich Profile Pic" />
         </div>
         <div className="ten columns main-col">
            <h2>About Me</h2>

            <p className="aboutme">
              {description}<br />{bio}
            </p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>{fullname}</span><br />
						   <span>Contact me via email or LinkedIn.</span><br />
                     <a href="mailto:stajah@stajahlee.com?subject=An%20awesome%20message%20for%20Stajah!">{email}</a><br />
                     <a href="https://www.linkedin.com/in/stajah" target="_blank" rel="noopener noreferrer" onClick={clicked++}>{linkedincontact}</a><br />

					   </p>
               </div>
               <div className="columns download">
                  <p>
                     <a href={resumeDownload} className="button" download><i className="fa fa-download"></i>Download Resume</a>
                  </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
