import React, { Component } from 'react';
import axios from 'axios';
import Card from './card';



class Cards extends Component {
    constructor() {
        super();
        this.state = {
            arrCards:[],
            repDeck: {},
            deck_id: '',
           

        }
    }


    affiche=()=>{
        var url = `http://deckofcardsapi.com/api/deck/${this.state.deck_id}/draw/?count=1`
        axios.get(url)
      .then(res => {
       
        var card = res.data.cards[0];
        console.log( 'card',card);
        var cloneArr = this.state.arrCards
        cloneArr.push(card)
        this.setState({arrCards:cloneArr} );
      })
      console.log('arr',this.state.arrCards);
        
    }

    componentDidMount() {
         axios.get('http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
                .then(response => {
                 this.setState({
                    book: response.data,
                    deck_id: response.data.deck_id
                 })
                })
                       
    }


    render() { 
        
        return ( 
            <>
            <div className="cards">
                <button onClick={()=>this.affiche()}>recevoir une carte !</button>
                {this.state.arrCards.map(card => (
                    <Card key= {card.code} card={card} />
                    
                ))} 
                
                
            </div>
            </>
         );
    }
}
 
export default Cards;