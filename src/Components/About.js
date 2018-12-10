import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      var fullname = this.props.data.fullname;
      var profilepic= "images/"+this.props.data.image;
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
         <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>{bio}</p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>{fullname}</span><br />
						   <span>Contact me via email or LinkedIn.</span><br />
                     <span>{email}</span><br />
                     <span>{linkedincontact}</span><br />

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