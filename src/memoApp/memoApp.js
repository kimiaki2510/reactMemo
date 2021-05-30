import React from "react";
import { render } from "react-dom";
import Form from "./Form";
import List from "./List";

class MemoApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      memos: [],
      nextId: 0
    };
  }

  addMemo = content => {
    this.setState({
      memos: [...this.state.memos, { id: this.state.nextId, content: content }],
      nextId: this.state.nextId + 1
    });
  };

  render() {
    return (
      <div>
        <h2>MemoApp</h2>
        <Form addMemo={this.addMemo} />
        <List memos={this.state.memos} />
      </div>
    );
  }
}

export default MemoApp;