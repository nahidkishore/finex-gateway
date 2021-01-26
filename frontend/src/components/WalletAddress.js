
import React, { useContext, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import {  Link } from 'react-router-dom';
import { UserContext } from '../App';



const WalletAddress = () => {
  const [ wallet, setWallet ] = useContext(UserContext);
  const [walletAddress, setWalletAddress] = useState('');

  

  const walletHandler = (event) => {
    if(!(/^[13][a-km-zA-HJ-NP-Z1-9]{25,34}$/.test(event.target.value))){
      alert('Enter a valid address. DEMO: 1KFHE7w8BhaENAswwryaoccDb6qcT6DbYY');
      event.target.value ='';
  }
  else{
      setWallet(event.target.value);
  }
  };
  return (
    <Container className=' border my-5'>
      <div className='container p-5'>
        <div className='my-5'>
          <input
            onBlur={walletHandler}
            className='form-control mb-5'
            type='text'
            placeholder='Enter your BSC wallet address'
          />
          <h5>You will receive your TAOA in this address</h5>
          <h5 className='text-danger my-3'>
            Pay close attention mistakes will make you loose all your assets and
            there is nothing we can do to help.
          </h5>

          <Link><p className='text-center my-2'>Don't have a BSC Wallet yet?</p></Link>
        </div>

        <Link to='/bank'>
          <Button variant='warning' className='px-5 mt-5 text-center'>
            Next
          </Button>
        </Link>
      </div>
    </Container>
  );
};

export default WalletAddress;
