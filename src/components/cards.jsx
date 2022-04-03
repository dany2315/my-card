import { Axios } from 'axios';
import React, { Component } from 'react'


class Cards extends Component {
    constructor() {
        super();
        this.state = {
            book: {},
            deck_id: '',
            

        }
    }


    affiche=()=>{
        var url = `http://deckofcardsapi.com/api/deck/${this.deck_id}/draw/?count=1`
        Axios.get(url)
        
    }

    componentDidMount() {
         Axios.get('http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
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
                
                
            </div>
            </>
         );
    }
}
 
export default Cards;