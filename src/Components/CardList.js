import React from 'react'
import Card from './Card';
import '../Styles/CardList.scss';

const CardList = ({ cards, increase, decrease, currentCard, flipped, flipCard, toggle }) => {

    let cardShown = cards.filter(card => {
        return card.id === cards[currentCard].id;
    })

    return (
        <div className="card-container">
            <div className="left-arrow" onClick={decrease}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"><path d="M192 127.338v257.324c0 17.818-21.543 26.741-34.142 14.142L29.196 270.142c-7.81-7.81-7.81-20.474 0-28.284l128.662-128.662c12.599-12.6 34.142-3.676 34.142 14.142z" /></svg>
            </div>

            {cards.length > 0 ?
                <Card card={cardShown[0]} flipCard={flipCard} flipped={flipped} />
                :
                <div className="fake-card">
                    Add cards to the deck...
                    <button onClick={toggle} className="btn">Add Card</button>
                </div>
            }


            <div className="right-arrow" onClick={increase}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"><path d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z" /></svg>
            </div>

        </div>
    )
}

export default CardList;