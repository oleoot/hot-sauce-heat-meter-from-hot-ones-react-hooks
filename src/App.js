import React from 'react';
import ScovilleMeter from './components/ScovilleMeter';

function App() {
  return (
    <div className="App">
      <ScovilleMeter height={"400"} scovilles={5000} />
      <ScovilleMeter height={"400"} scovilles={20000} />
      <ScovilleMeter height={"400"} scovilles={50000} />
      <ScovilleMeter height={"400"} scovilles={100000} />
      <ScovilleMeter height={"400"} scovilles={300000} />
      <ScovilleMeter height={"400"} scovilles={1000000} />
      <ScovilleMeter height={"400"} scovilles={2000000} />
    </div>
  );
}

export default App;
