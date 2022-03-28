import React from 'react'
import logo from '../../images/milan_logo.png'
import styles from '../../css/Footer.module.css'
import { Container } from 'react-bootstrap'
import { SocialMediaIconsReact } from 'social-media-icons-react';

function Footer() {
  return (
    <div className={styles.footer_style}>
      <Container className={styles.flex}>
        <div className={styles.center}>
          <img 
            src={logo}
            height="150px"
            width="150px"
            alt="logo"
          />
          <h4>Milan</h4>
          <h6>The General Championship of IIT Hyderabad</h6>
        </div>
        <div>
          <strong>Location :</strong><br />
          Indian Institute of technology Hyderabad<br />
          Near NH-65, Sangareddy, kandi, Telangana 502285<br /><br />
          <strong>Phone: </strong>(91) 9633124037<br />
          <strong>Mail Us at: </strong>milan.oc@gymkhana.iith.ac.in<br />
        </div>
        <div className={styles.center}>
          <h5>Follow Us</h5>
          <SocialMediaIconsReact 
            borderColor="rgba(0,0,0,1)" 
            borderWidth="2" 
            borderStyle="solid" 
            icon="instagram" 
            iconColor="rgba(0,0,0,1)" 
            backgroundColor="rgba(255,255,255,1)" 
            iconSize="5" 
            roundness="50%" 
            url="https://www.instagram.com/milan_thegc_iith/" 
            size="40" 
          />
        </div>
      </Container>
    </div>
  )
}

export default Footer