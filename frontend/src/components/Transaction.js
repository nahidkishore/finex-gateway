import React, { useContext } from 'react';
import { useId } from 'react-id-generator';
import { Button, Container } from 'react-bootstrap';
import { UserContext } from '../App';

const Transaction = ({ children, ...rest }) => {
  const { wallet, setWallet } = useContext(UserContext);
  const [secretId] = useId();

  const sellHandler = () => {
    fetch('http://localhost:5000/buy', {
      method: 'POST',
      body: JSON.stringify(),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
  };
  return (
    <Container>
      <div className='container p-5'>
        <div className='my-3'>
          <h5>Transfer found to following account</h5>
          <h5 className='mb-5'>
            <h3>IBAN: ABCDEFG1234567</h3>
            <h3>Swap ID: {secretId}</h3>
          </h5>

          <h4>
            As soon as the funds are received the transaction to your BSC wallet
            will be made the following address.
          </h4>
          <h4 className='my-5'>{wallet}</h4>
          <a href='#' className='text-center'>
            <h4>Doubts? Discord or Telegram</h4>
          </a>
        </div>

        <Button
          variant='warning'
          className='px-5 mt-5 text-center'
          onClick={sellHandler}
        >
          Next
        </Button>
      </div>
    </Container>
  );
};

export default Transaction;
