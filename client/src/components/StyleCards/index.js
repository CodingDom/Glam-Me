import React from "react";
import "./styleCards.css";

function StyleCards(props) {
  const stylesArray = props.getStyles().styles;
    return(
        <div className="styleCardWrapper">
      {stylesArray/*.sort((a,b) => {
        const x = a.style.toLowerCase();
        const y = b.style.toLowerCase();
        if (x < y) {return -1;}
        if (x > y) {return 1;}
        return 0;
      })*/.map(styles => (
          <div className="s-card" key={styles.style}      
          data-style={styles.style} 
          onClick={props.onClick} 
          onChange={props.handleInputChange}name="stylesPicked">
          <strong style={{color:"#d2b57f"}}>{styles.style}</strong>
      <div className="img-container" style={{backgroundImage:`url('${styles.image}')`}}>
       
      </div>
    
    </div>
      ))}
      </div>

      
    
    )
}

export default StyleCards ;