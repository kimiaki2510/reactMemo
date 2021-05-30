import React from 'react';
import ReactDOM from 'react-dom';
import MemoPage from './memo/MemoPage';
// import MultiForm from './MultiForm'
import App from './App';

const st = {
  textAlign: 'left',
  padding: '10px'
}
ReactDOM.render(
  <div style={st}>
    {/* <MultiForm /> */}
    <App />
  </div>,
  document.getElementById('root')
)