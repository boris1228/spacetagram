import React from 'react';

const Explanation = (props) => {
    return(
        <div>
        
        <p className={props.typo} style={{lineHeight:'1.2'}}><span  style={{fontSize:'1.2em',}}></span>{props.theText}
        
    </p>
        
            
        </div>
    )
}

export default Explanation;