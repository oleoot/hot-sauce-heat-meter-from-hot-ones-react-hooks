import React from 'react';
import ScovilleMeter from './components/ScovilleMeter';

function App() {
  return (
    <div className="App">
      <ScovilleMeter scovilles={5000} />
      <ScovilleMeter scovilles={20000} />
      <ScovilleMeter scovilles={50000} />
      <ScovilleMeter scovilles={100000} />
      <ScovilleMeter scovilles={300000} />
      <ScovilleMeter scovilles={1000000} />
      <ScovilleMeter scovilles={2000000} />
    </div>
  );
}

export default App;
