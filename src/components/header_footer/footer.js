import React from 'react';
import Fade from 'react-reveal/Fade';

const Footer = () => {
  return (
    <footer className="bck_purple">
      <Fade delay={500}>
        <div className="font_righteous footer_logo_venu">
          The BTS
        </div>
        <div className="footer_copyright">
          The BTS 2019. All rights reserved.
        </div>
      </Fade>
    </footer>
  )
}

export default Footer
