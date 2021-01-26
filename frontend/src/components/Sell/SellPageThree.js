import React, { useContext } from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const SellPageThree = () => {

  const [iban, setIban] = useContext(UserContext);

  const handleChange = event => {
      setIban(event.target.value);
  }
  return (
    <Container className=' border my-3'>
    <div className='container p-5'>
      <div className='my-3'>
      <input onBlur={handleChange} type="text" className='form-control w-100' placeholder='Enter your IBAN account details to be credited'/>
      </div>
   
      <Link><p className='text-center my-5 pt-5'>Where can I find my IBAN?</p></Link>
      <Link to='/sellPageFour'>
        <Button variant='warning' className='px-5 mt-5 text-center'>
          Next
        </Button>
      </Link>
    </div>
  </Container>
  );
};

export default SellPageThree;