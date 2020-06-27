import './smart-card.css';

function SmartCard(props) {
  return (
    <div className="card list pad-responsive flex flex-column flex-justify-between">
      <p className="card-heading">{props.heading}</p>
      <p className="card-body">{props.description}</p>
      {props.linkText ?
      <a href={`${props.linkUrl}`} className={`card-link ${props.linkColor}`}>{props.linkText}</a> : null }
      {props.buttonText ?
        <a href={`${props.buttonUrl}`} className={`card-btn ${props.buttonColor}`}>{props.buttonText}</a>
         : null }
    </div>
  );
}

export default SmartCard;
