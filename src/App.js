import React from 'react';
import './App.css';
import { Switch,Route } from 'react-router-dom';
import { HomePage } from './pages/homepage/homepage.component';

const HatsPage = () => (
  <div>Hats</div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
