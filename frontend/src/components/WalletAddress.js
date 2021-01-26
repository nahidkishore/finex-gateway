
import React, { useContext, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import {  useHistory } from 'react-router-dom';
import { UserContext } from '../App';
import {WAValidator} from 'wallet-address-validator'


const WalletAddress = () => {
  const { wallet, setWallet } = useContext(UserContext);
  const [walletAddress, setWalletAddress] = useState('');

  let history = useHistory();

  const walletHandler = () => {
    const valid = WAValidator.validate(walletAddress, 'BTC');
    if (valid) {
      alert('This is a valid address');
      history.push('/bank');
      setWallet(walletAddress);
    } else {
      alert('wallet address is invalid');
    }
  };
  return (
    <Container className=' border my-5'>
      <div className='container p-5'>
        <div className='my-5'>
          <input
            onBlur={(e) => setWalletAddress(e.target.value)}
            className='form-control mb-5'
            type='text'
            placeholder='Enter your BSC wallet address'
          />
          <h5>You will receive your TAOA in this address</h5>
          <h5 className='text-danger my-3'>
            Pay close attention mistakes will make you loose all your assets and
            there is nothing we can do to help.
          </h5>
        </div>

        <Button
          variant='warning'
          className='px-5 mt-5 text-center'
          onClick={walletHandler}
        >
          Next
        </Button>
      </div>
    </Container>
  );
};

export default WalletAddress;
