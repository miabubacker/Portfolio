import React from 'react'
import TwitterFillIcon from 'remixicon-react/TwitterFillIcon';
import FacebookFillIcon from 'remixicon-react/FacebookFillIcon';
import GithubFillIcon from 'remixicon-react/GithubFillIcon';
import "./Footer.scss"

export default function Footer() {
  return (
    <section className="footer_section">
      <div className="footer_container">
        <div className="footer footer_socialLinks">
          <div className="footer_socialLogo">
            <h4>find me in:</h4>
              <TwitterFillIcon className="footer_socialLogo_twitter" size={24}
              />
              <FacebookFillIcon className="footer_socialLogo_Facebook" size={24}
              />
          </div>
          <div className="footer_githubID" >
            <h4>@username</h4>
            <GithubFillIcon className='footer_githubID_logo' size={25} />
          </div>
        </div>
      </div>
    </section>
  )
}
