import React, { useContext } from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const SellPageFour = () => {
  const [country, setCountry, , TXid, setTXid] = useContext(UserContext);
  const currency = country.currencies[0].code;

  const handleChange = (event) => {
    setTXid(event.target.value);
  };
  return (
    <Container className=' border my-3'>
      <div className='container p-5'>
        <div className='my-3'>
          <h6 className='my-5'>
            Transfer Your Token T{currency} to the following BSC (Binance smart
            chain) address and enter the resulting TXid.
          </h6>

          <h4 className='my-5 w-50'>0x069aa074c1881eb59421acd0a76850eaa6b</h4>

          <input
            onBlur={handleChange}
            type='text'
            className='form-control w-100 my-5'
            placeholder='TXid '
          />
        </div>

        <Link to='/sellFinished'>
          <Button variant='warning' className='px-5 mt-5 text-center'>
            Done
          </Button>
        </Link>
      </div>
    </Container>
  );
};

export default SellPageFour;
