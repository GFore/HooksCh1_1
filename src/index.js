import React from 'react';
import ReactDOM from 'react-dom';
import { Count } from './Count'
// import './index.css';
// import App from './App';

function App() {
  const [text, setText] = React.useState('');

  return (
    <div className='App'>
      <input value={text} onChange={e => setText(e.target.value)} />
      <Count />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
