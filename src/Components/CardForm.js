import React from 'react';
import '../Styles/CardForm.scss';

class CardForm extends React.Component {
    state = {
        front: "",
        back: ""
    }

    // Handle Form Submit
    handleSubmit = (e) => {
        let { front, back } = this.state
        e.preventDefault();
        this.props.newCard(front, back);
        this.props.toggle();
        this.setState({
            front: "",
            back: ""
        })
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };


    render() {
        let { front, back } = this.state;
        return(
            <form 
                className="card-form"
                onSubmit={this.handleSubmit}
                >

                <textarea
                    placeholder="Question:"
                    name="front"
                    value={front}
                    className="input"
                    required
                    onChange={this.handleChange}
                />
                <textarea
                    placeholder="Answer:"
                    name="back"
                    value={back}
                    onChange={this.handleChange}
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