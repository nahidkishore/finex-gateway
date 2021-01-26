import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SellCoin = () => {
  return (
    <Container>
      <div className='container p-5'>
        <div className='my-3'>
          <h4>Congratulations !!!</h4>
        </div>
        <Link to='/sellPage'>
          <Button variant='warning' className='px-5 mt-5 text-center'>
            Next
          </Button>
        </Link>
      </div>
    </Container>
  );
};

export default SellCoin;
