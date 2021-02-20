import React from 'react';
import ResultForm from './ResultForm';

export default class EditForm extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      radio: '',
      comment: '',
    };
    this.sendReview = this.sendReview.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  updateState(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  sendReview(event) {
    event.preventDefault();
    localStorage.setItem('review', JSON.stringify(this.state));
    this.setState({
      email: '',
      radio: '',
      comment: '',
    });
  }

  render() {
    const { email, radio, comment } = this.state;
    return (
      <div className="edit-form-main">
        <form className="product-form">
          <label htmlFor="email">
            Email:
            <input
              className="input-form"
              type="text"
              name="email"
              value={ email }
              onChange={ this.updateState }
            />
          </label>
          <label htmlFor="radio">
            {' '}
            Rating:
            <input
              className="input-form"
              type="number"
              name="radio"
              value={ radio }
              onChange={ this.updateState }
            />
          </label>
          <label htmlFor="comment">
            Deixe seu comentário:
            <textarea
              className="input-form"
              data-testid="product-detail-evaluation"
              name="comment"
              value={ comment }
              onChange={ this.updateState }
            />
          </label>
          <button
            className="product-button"
            type="button"
            onClick={ (event) => this.sendReview(event) }
          >
            Enviar avaliação
          </button>
        </form>
        <ResultForm />
      </div>
    );
  }
}
