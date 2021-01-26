import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createContext, useState } from 'react';

import SelectCoins from './components/SelectCoins';
import Home from './components/Home';
import Header from './components/Header.js';
import WalletAddress from './components/WalletAddress';
import Bank from './components/Bank';
export const UserContext = createContext();

function App() {
  const [country, setCountry] = useState(null);
  const [wallet, setWallet] = useState('');
  return (
    <UserContext.Provider value={{ country, setCountry, wallet, setWallet }}>
      <Router>
        <Header></Header>
        <Switch>
          
          <Route path='/bank'>
            <Bank></Bank>
          </Route>
          <Route exact path='/coin'>
            <SelectCoins></SelectCoins>
          </Route>
          <Route path='/wallet'>
            <WalletAddress></WalletAddress>
          </Route>
          <Route path='/'>
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
