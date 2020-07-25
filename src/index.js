import React from 'react';
import './smart-card.css';

function SmartCard(props) {
  return (
    <>
    {props.cardType =="overlay" ?
      <div class="rsc-overlay-card">
          {props.imgSrc ?
          <img class="rsc-overlay-card-img" src={`${props.imgSrc}`} alt="Card image" /> : null }
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
    :
      <div className="rsc-card rsc-list rsc-pad-responsive rsc-flex rsc-flex-column rsc-flex-justify-between">
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
