import React from 'react';
import CardForm from './Components/CardForm';
import './Styles/App.scss';
import CardList from './Components/CardList';

class App extends React.Component {
  state = {
    cards: [],
    menuOpen: false,
    currentCard: 0,
    flipped: false
  }

  // TOGGLE NEW CARD MENU
  toggleMenu = () => {
    let { menuOpen } = this.state
    this.setState({
      menuOpen: !menuOpen
    })
  }

  // DELETE ALL CARDS FROM ARRAY
  deleteCards = () => {
    this.setState({
      cards: []
    })
  }

  // DELETE A SINGLE CARD
  deleteCard = (id) => {
    let {cards} = this.state;
    this.setState({
      cards: cards.filter(card => {
        return card.id !== id
      })
    })
  };

  // GENERATE RANDOM ID
  getId = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

  //CREATE CARD FOR ARRAY
  createCard = (front, back) => {
    let { cards } = this.state;
    let card = { id: this.getId(), front, back, correct: false }
    this.setState({
      cards: [...cards, card]
    })
  };

  // CYCLE RIGHT
  cycleRight = () => {
    let { currentCard, cards } = this.state;
    let index = currentCard;
    if (currentCard >= cards.length - 1) {
      index = 0;
    } else {
      index++;
    }
    this.setState({
      currentCard: index
    })
  }

  //CYCLE LEFT
  cycleLeft = () => {
    let { currentCard, cards } = this.state;
    let index = currentCard;
    if (currentCard <= 0) {
      index = cards.length - 1;
    } else {
      index--;
    }
    this.setState({
      currentCard: index
    })
  }

  // FLIP CARD
  flipCard = () => {
    this.setState({
      flipped: !this.state.flipped
    })
  }

  render() {
    let { cards, currentCard, flipped } = this.state;
    return (
      <>
        {this.state.menuOpen ? <div className="overlay">
          <div className="close-menu" onClick={this.toggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z" /></svg>
          </div>
          <CardForm toggle={this.toggleMenu} newCard={this.createCard} />
        </div> : null}
        <div className="container">
          <button
            className="btn"
            onClick={this.toggleMenu}>Add Card
          </button>
          <button 
            className="btn" 
            onClick={this.deleteCards}>
            Delete All Cards
          </button>
        </div>
        <CardList
          cards={cards}
          currentCard={currentCard}
          increase={this.cycleRight}
          decrease={this.cycleLeft}
          flipCard={this.flipCard}
          flipped={flipped}
          toggle={this.toggleMenu}
          deleteCard = {this.deleteCard}
        />
      </>
    );
  }
}


export default App;
