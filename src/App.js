import React, { Component } from 'react';
import CardForm from './Components/CardForm';
import './Styles/App.scss';

class App extends Component {
  state = {
    cards: [
      {id: 1, front: "Question", back: "Answer"},
      {id: 2, front: "Question2", back: "Answer2"},
      {id: 3, front: "Question3", back: "Answer3"},
      {id: 4, front: "Question4", back: "Answer4"},
      {id: 5, front: "Question5", back: "Answer5"},
      {id: 6, front: "Question6", back: "Answer6"},
      {id: 7, front: "Question7", back: "Answer7"},
      {id: 8, front: "Question8", back: "Answer8"},
      {id: 9, front: "Question9", back: "Answer9"},
      {id: 10, front: "Question10", back: "Answer10"}
    ],
    menuOpen: false
  }

  // TOGGLE NEW CARD MENU
  toggleMenu = () => {
    let { menuOpen } = this.state
    this.setState({
      menuOpen: !menuOpen
    })
  }
  // DELETE CARDS FROM ARRAY
  deleteCards = () => {
    let { cards } = this.state
    this.setState({
      cards: []
    })
  }

  render() {
    return (
      <>
        {this.state.menuOpen ? <div className="overlay">
        <CardForm />
        </div> : null}
        <div className="container">
          <button className="btn" onClick={this.toggleMenu}>Add Card</button>
          <button className="btn" onClick={this.deleteCards}>Delete Cards</button>
        </div>
      </>
    );
  }
}


export default App;
