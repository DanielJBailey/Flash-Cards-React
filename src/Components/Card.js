import React from 'react';
import '../Styles/Card.scss';

const Card = ({card, flipCard, flipped}) => (
    <div className={flipped ? "card is-flipped" : "card"} onClick={flipCard}>
        <div className="card-face card-face-front">
            {card.front}
        </div>
        <div className="card-face card-face-back">
            {card.back}
        </div>
    </div>  
)

export default Card;