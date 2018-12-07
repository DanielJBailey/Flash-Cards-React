import React from 'react';
import CardForm from './CardForm';
import '../Styles/Home.scss';
import CardList from './CardList';

class Home extends React.Component {
  state = {
    cards: [],
    menuOpen: false,
    currentCard: 0,
    flipped: false,
    editing: false,
    front: "",
    back: ""
  }

  resetFormInputs = () => {
    this.setState({
      front: "",
      back: ""
    })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  // TOGGLE NEW CARD MENU
  toggleMenu = () => {
    let { menuOpen } = this.state
    this.setState({
      menuOpen: !menuOpen
    })
  }

  // TOGGLE EDITING MODE
  toggleEdit = () => {
    let {cards, currentCard } = this.state
    this.resetFormInputs();
    this.setState({ 
      editing: !this.state.editing,
      front: cards[currentCard].front,
      back: cards[currentCard].back
    });
  }
 
  // DELETE ALL CARDS FROM ARRAY
  deleteCards = () => {
    this.setState({
      cards: []
    })
  }

  // DELETE A SINGLE CARD
  deleteCard = (id) => {
    let { cards } = this.state;
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

  // EDIT CARD IN ARRAY
  editCard = (cardData) => {
    const cards = this.state.cards.map(card => {
      if (card.id === cardData.id)
        return cardData;
      return card
    });
    this.setState({ cards: cards });
  }

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
    let { cards, currentCard, flipped, front, back, editing, menuOpen } = this.state;
    return (
      <>
        {menuOpen ? <div className="overlay">
          <div className="close-menu" onClick={this.toggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z" /></svg>
          </div>
          <CardForm
            reset={this.resetFormInputs}
            toggleMenu={this.toggleMenu}
            newCard={this.createCard}
            front={front}
            back={back}
            handleChange={this.handleChange}
          />
        </div> :
          (editing) ?
            <div className="overlay">
              <div className="close-menu" onClick = {this.toggleEdit}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z" /></svg>
              </div>
              <CardForm
                cards={cards}
                currentCard={currentCard}
                reset={this.resetFormInputs}
                toggleMenu={this.toggleMenu}
                newCard={this.createCard}
                editing={editing}
                edit={this.editCard }
                toggleEdit={this.toggleEdit}
                front={front}
                back={back}
                handleChange={this.handleChange}
              />
            </div>
            : null}
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
          deleteCard={this.deleteCard}
          edit={this.toggleEdit}
        />
      </>
    );
  }
}


export default Home;
