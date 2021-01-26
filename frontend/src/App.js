import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createContext, useState } from 'react';

import SelectCoins from './components/SelectCoins';
import Home from './components/Home';
import Header from './components/Header.js';
import WalletAddress from './components/WalletAddress';
import Bank from './components/Bank';
import Transaction from './components/Transaction';
import SellCoin from './components/SellCoin';
import SellPageOne from './components/Sell/SellPageOne';
import SellPageTwo from './components/Sell/SellPageTwo';
import SellPageThree from './components/Sell/SellPageThree';
import SellPageFour from './components/Sell/SellPageFour';
import SellPageFive from './components/Sell/SellPageFive';
export const UserContext = createContext();

function App() {
  const [country, setCountry] = useState(null);
  const [wallet, setWallet] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [iban, setIban] = useState('');
  const [TXid, setTXid] = useState('');
  return (
    <UserContext.Provider
      value={{
        country,
        setCountry,
        wallet,
        setWallet,
        quantity,
        setQuantity,
        iban,
        setIban,
        TXid,
        setTXid,
      }}
    >
      <Router>
        <Header></Header>
        <Switch>
          <Route path='/sellFinished'>
            <SellPageFive></SellPageFive>
          </Route>
          <Route path='/sellPageFour'>
            <SellPageFour></SellPageFour>
          </Route>
          <Route path='/sellPageThree'>
            <SellPageThree></SellPageThree>
          </Route>

          <Route path='/sellPageTwo'>
            <SellPageTwo></SellPageTwo>
          </Route>
          <Route path='/sellPage'>
            <SellPageOne></SellPageOne>
          </Route>
          <Route path='/sell'>
            <SellCoin></SellCoin>
          </Route>
          <Route path='/transaction'>
            <Transaction></Transaction>
          </Route>
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
