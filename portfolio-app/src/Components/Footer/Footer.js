import React from 'react'
import TwitterFillIcon from 'remixicon-react/TwitterFillIcon';
import FacebookFillIcon from 'remixicon-react/FacebookFillIcon';
import GithubFillIcon from 'remixicon-react/GithubFillIcon';
import "./Footer.scss"

export default function Footer() {
  return (
    <section className="footer_section">
      <div className="footer_container">
        <div className="footer_socialLinks">
          <div className="sociallogo">
            <h4>find me in:</h4>
            <TwitterFillIcon className="some-class" size={24}
             />
            <FacebookFillIcon className="some-class" size={24}
              />
          </div>
          <div className="gitlogo">
              <GithubFillIcon  />
          </div>
        </div>
      </div>
    </section>
  )
}
