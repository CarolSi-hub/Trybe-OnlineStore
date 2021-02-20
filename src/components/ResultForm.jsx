import React from 'react';

export default class ResultForm extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      radio: '',
      comment: '',
    };
    this.restoreTheState = this.restoreTheState.bind(this);
  }

  componentDidMount() {
    this.restoreTheState();
  }

  restoreTheState() {
    const review = JSON.parse(localStorage.getItem('review'));
    this.setState(review);
  }

  render() {
    const { email, radio, comment } = this.state;
    return (
      <div>
        <input
          type="text"
          name="email"
          value={ email }
          readOnly
        />
        <input
          type="number"
          name="radio"
          value={ radio }
          readOnly
        />
        <textarea
          name="comment"
          value={ comment }
          readOnly
        />
      </div>
    );
  }
}
