import React from 'react';
import ReactDOM from 'react-dom';
// import MultiForm from './MultiForm'
import App from './App';
import MemoApp from './memoApp/memoApp';

const st = {
  textAlign: 'left',
  padding: '10px'
}
ReactDOM.render(
  <div style={st}>
    {/* <MultiForm /> */}
    <App />
    <MemoApp />
  </div>,
  document.getElementById('root')
)