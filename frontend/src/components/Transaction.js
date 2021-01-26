import React, { useContext } from 'react';
import { uniqid } from 'uniqid';
import { Button, Container } from 'react-bootstrap';
import { UserContext } from '../App';
import { Link, useHistory } from 'react-router-dom';

const Transaction = ({ children, ...rest }) => {
  const {country, setCountry,TXid, setTXid,iban, setIban,wallet, setWallet,quantity, setQuantity  } = useContext(UserContext);
  const history = useHistory();

  const data = {
    country: country,
    coinQuantity: quantity,
    wallet: wallet,
    IBAN: iban,
    TXid: uniqid()
};

const buyHandler = e => {
  e.preventDefault();
  fetch('http://localhost:5000/BuyData', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
  })
      .then(res => res.json())
      .then(result => {
          if (result) {
              history.push('/');
          }
      })
}
  return (
    <Container>
      <div className='container p-5'>
        <div className='my-3'>
          <h5>Transfer found to following account</h5>
          <h5 className='mb-5'>
            <h3>IBAN: ABCDEFG1234567</h3>
            <h3>Swap ID: {uniqid}</h3>
          </h5>

          <h4>
            As soon as the funds are received the transaction to your BSC wallet
            will be made the following address.
          </h4>
          <h4 className='my-5'>{wallet ? `${wallet}` : 'wallet address'}</h4>
          <Link><p className='text-center mt-2 pt-3'>Doubts? Dsicord or Telegram</p></Link>
        </div>

        <Button
          variant='warning'
          className='px-5 mt-5 text-center'
          onclick={buyHandler}
        >
          Next
        </Button>
      </div>
    </Container>
  );
};

export default Transaction;
