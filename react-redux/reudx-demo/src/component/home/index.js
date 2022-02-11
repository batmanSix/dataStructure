import React, { Component } from "react";
import store from "../../store";
import sendAction from "../../action";
export default class Home extends Component {
  handleClick = () => {
    const store1 = sendAction();
    console.log(store1);
    store.dispatch(store1);
  };

  componentDidMount() {
    store.subscribe(() => {
      console.log("store:", store.getState().value);
      this.setState({})
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>action</button>
        <div>{store.getState().value}</div>
      </div>
    );
  }
}
