import React, { useContext } from 'react';
import { Button, Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../App';

const SellPageFive = () => {
  const {
    country,
    setCountry,
    TXid,
    setTXid,
    iban,
    setIban,
    wallet,
    setWallet,
    quantity,
    setQuantity,
  } = useContext(UserContext);
  const history = useHistory();

  const data = {
    country: country,
    coinQuantity: quantity,
    wallet: wallet,
    IBAN: iban,
    TXid: TXid,
  };

  const sellHandler = (e) => {
    e.preventDefault();
    fetch('http://localhost:5000/sellData', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          alert('successfully saved')
          history.push('/');
          
        }
      });
  };
  return (
    <Container>
      <div className='container p-5'>
        <div className='my-3'>
          <h6 className='my-5'>
            Congratulations! You have made it successfully. Remember your
            internal Transaction ID. If you need any help, customer support will
            ask for it.
          </h6>

          <h4 className='my-5'>{TXid}</h4>

          <h5>ID X, qtt token, token, timestamp</h5>
        </div>

        <Button
          variant='warning'
          className='px-5 mt-5 text-center'
          onclick={sellHandler}
          type='submit'
        >
          I've stored the ID and I'm done
        </Button>
      </div>
    </Container>
  );
};

export default SellPageFive;
