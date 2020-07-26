import React from 'react';
import './smart-card.css';

function SmartCard(props) {
  return (
    <>
    {props.cardType === "rsc-overlay" ?
      <div class="rsc-overlay-card rsc-flex">
          {props.imgSrc ?
          <img class="rsc-overlay-card-img" src={`${props.imgSrc}`} alt={`${props.altText}`} /> : null }
          <div class="rsc-overlay-card-content">
          {props.title ?
            <p class="rsc-overlay-card-title rsc-card-title" style={{color: `${props.titleColor}`}}>{props.title}</p> : null }
          {props.des ?
            <p class="rsc-overlay-card-text rsc-card-des" style={{color: `${props.desColor}`}}>{props.des}</p> : null }
          {props.subText ?
            <p class="rsc-overlay-card-text rsc-card-des" style={{color: `${props.subTextColor}`}}>{props.subText}</p> : null }
            {props.linkText ?
            <a href={`${props.linkUrl}`} className={`rsc-card-link ${props.linkTheme}`} style={{color: `${props.linkColor}`}}>{props.linkText}</a> : null }
            {props.btnText ?
              <div className="rsc-ovelay-btn-container">
              <a href={`${props.btnUrl}`} className={`rsc-card-btn ${props.btnTheme}`} style={{backgroundColor: `${props.btnBg}`, color: `${props.btnColor}`}}>{props.btnText}</a>
              </div> : null }
          </div>
      </div>
      : props.cardType === "rsc-image-right" || "rsc-image-left" ?
        <div className={`rsc-flex rsc-border rsc-border-gray ${props.cardType}`}>
            <div className="rsc-flex-child">
                <img className="rsc-side-img" src={`${props.imgSrc}`} alt={`${props.altText}`} />
            </div>
            <div className="rsc-flex-child">
                  <div className="rsc-right-content rsc-pad rsc-list">
                  {props.title ?
                      <p className="rsc-card-title rsc-font-bold rsc-p-b">{props.title}</p> : null }
                  {props.des ?
                      <p className="rsc-card-des">{props.des}</p> : null }
                  </div>
                  {props.authorImg || props.subText  ?
                  <div className="rsc-bottom-content rsc-list rsc-flex-container rsc-pad">
                  {props.authorImg ?
                      <img class="rsc-author-image rsc-m-r" src={`${props.authorImg}`} alt={`${props.authorName}`} /> : null }
                      <div className="rsc-author-content">
                  {props.authorName ?
                      <p className="rsc-card-des">{props.authorName}</p> : null }
                  {props.subText ?
                      <p className="rsc-card-des">{props.subText}</p> : null }
                      </div>
                  </div> : null }
                  {props.linkText ?
                  <div className="rsc-p-rl rsc-p-b">
                      <a href={`${props.linkUrl}`} className="rsc-card-link">{props.linkText}</a>
                  </div> : null }
                  {props.btnText ?
                  <div className="rsc-pad rsc-m-b">
                      <a href={`${props.btnUrl}`} className="rsc-card-btn">{props.btnText}</a>
                  </div> : null }
            </div>
        </div>
    :
      <div className="rsc-card rsc-list rsc-pad rsc-flex rsc-flex-column rsc-flex-justify-between">
        {props.imgSrc ?
        <div className="rsc-card-image-wrapper">
          <img className="rsc-card-image" src={`${props.imgSrc}`} alt={`${props.altText}`} />
        </div> : null }
        {props.title ?
        <p className="rsc-card-title" style={{color: `${props.titleColor}`}}>{props.title}</p> : null }
        {props.des ?
        <p className="rsc-card-des" style={{color: `${props.desColor}`}}>{props.des}</p> : null }
        {props.linkText ?
        <a href={`${props.linkUrl}`} className={`rsc-card-link ${props.linkTheme}`} style={{color: `${props.linkColor}`}}>{props.linkText}</a> : null }
        {props.btnText ?
          <a href={`${props.btnUrl}`} className={`rsc-card-btn ${props.btnTheme}`} style={{backgroundColor: `${props.btnBg}`, color: `${props.btnColor}`}}>{props.btnText}</a>
           : null }
      </div>
    }
    </>
  );
}

export default SmartCard;
