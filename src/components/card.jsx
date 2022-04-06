import React, { Component } from 'react';
import styles from'./card.module.css'

class Card extends Component {
    constructor(props) {
        super(props);
        let angle = Math.random() * 90 - 45;
        let xPos = Math.random() * 40 - 20;
        let yPos = Math.random() * 40 - 20;
        this._transform = `translate(${xPos}px, ${yPos}px) rotate(${angle}deg)`;
    

       
    }

  
   
    render() { 
       
        return ( 
            <div className={styles.card}>
                { <img src={this.props.card.image} style={{ transform: this._transform }} alt="" /> }
                
            
            </div>
         );
    }
}
 
export default Card;