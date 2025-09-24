import React, { Component } from "react";

class BookMyShow extends Component {
  constructor() {
    super();
    this.state = {
      ticket: 100,
      movie: "KGF",
    };
  }
  increment = () => {
    this.setState({ ticket: this.state.ticket + 1 });
  };
  
  render() {
    return (
      <>
        <div>
          <h1>BookMyShow</h1>
          <h2>Movie Name: {this.state.movie}</h2>
          <h3>Available Tickets: {this.state.ticket}</h3>
          <button onClick={this.increment}>Book Ticket</button>
        </div>
      </>
    );
  }
}
export default BookMyShow;