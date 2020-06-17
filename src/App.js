import React from 'react';
// import ScovilleMeter from './components/ScovilleMeter';
import SeasonSelector from './components/SeasonSelector';
import SeasonViewer from './components/SeasonViewer';
import { Switch, Route } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <SeasonSelector />
      <Switch>
        <Route exact path="/seasons/:season" component={SeasonViewer} />
        <Route path="/seasons/:season/sauces/:sauce_id" component={SeasonViewer} />
      </Switch>
      {/* <ScovilleMeter height={"400"} scovilles={5000} />
      <ScovilleMeter height={"400"} scovilles={20000} />
      <ScovilleMeter height={"400"} scovilles={50000} />
      <ScovilleMeter height={"400"} scovilles={100000} />
      <ScovilleMeter height={"400"} scovilles={300000} />
      <ScovilleMeter height={"400"} scovilles={1000000} />
      <ScovilleMeter height={"400"} scovilles={2000000} /> */}
    </div>
  );
}

export default App;
