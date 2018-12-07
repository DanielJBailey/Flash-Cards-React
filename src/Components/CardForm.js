import React from 'react';
import '../Styles/CardForm.scss';

class CardForm extends React.Component {

    // Handle Form Submit
    handleSubmit = (e) => {
        let { edit, editing, toggleEdit, reset, newCard, toggleMenu, cards, currentCard, front, back } = this.props
        e.preventDefault();
        if (editing) {
            edit({ id: cards[currentCard].id, front, back });
            toggleEdit();
        } else {
            newCard(front, back);
            toggleMenu();
            reset();
        }
    };

    render() {
        let { front, back, handleChange } = this.props;
        return (
            <form
                className="card-form"
                onSubmit={this.handleSubmit}
            >
                <textarea
                    placeholder="Question:"
                    autoFocus
                    name="front"
                    value={front}
                    className="input"
                    required
                    onChange={handleChange}
                />
                <textarea
                    placeholder="Answer:"
                    name="back"
                    value={back}
                    onChange={handleChange}
                    className="input"
                    required
                />
                <input
                    type="submit"
                    value="Submit"
                    className="submit"
                />
            </form>
        )
    }
}


export default CardForm;