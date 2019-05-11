import React from "react";
import "./styleCards.css";

function StyleCards(props) {
  const stylesArray = props.getStyles().styles;
    return(
        <div className="styleCardWrapper">
      {stylesArray.map(styles => (
          <div  key={styles.style}      
          data-style={styles.style} 
          onClick={props.onClick} 
          onChange={props.handleInputChange}name="stylesPicked">
          <strong style={{color:"#d2b57f"}}>{styles.style}</strong>
        <div className="cards">
      <div className="style-img-container">
        <img alt={styles.styles} src={styles.image} />
       
      </div>
    
    </div>
    </div>
      ))}
      </div>

      
    
    )
}

export default StyleCards ;