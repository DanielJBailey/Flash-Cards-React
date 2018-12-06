import React from 'react';
import '../Styles/Card.scss';

function flip() {
    let card = document.querySelector('.card');
    if(card.classList.contains('is-flipped')) {
        card.classList.remove('is-flipped');
    } else {
        card.classList.add('is-flipped');
    }
}

const Card = ({card}) => (
    <div className="card" onClick={flip}>
        <div className="card-face card-face-front">
            {card.front}
        </div>
        <div className="card-face card-face-back">
            {card.back}
        </div>
    </div>  
)

export default Card;