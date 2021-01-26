import React, { useContext, useEffect, useState } from 'react';
import { Button, Container, Dropdown, DropdownButton } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../App';

const SelectCoins = () => {
  const { country, setCountry } = useContext(UserContext);
  const [countryCurrency, setCountryCurrency] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then((res) => res.json())
      .then((data) => setCountryCurrency(data));
  }, [country]);

  const handleChange = (e) => {
    setCountry(e);
  };
  return (
    <Container className=' border my-5'>
      <div className='container p-5'>
        <h3>Stable coin gateway - BUY</h3>

        <div className='my-5'>
          <DropdownButton
            id='dropdown-basic-button'
            title={country || 'Select Your Coin'}
          >
            {countryCurrency.map((c) => (
              <Dropdown.Item onSelect={handleChange} eventKey={c.name}>
                {c.name} - ( {c.currencies[0].code})
              </Dropdown.Item>
            ))}
          </DropdownButton>
        </div>
        <div>
          <label htmlFor='quantity'>
            <input type='number' placeholder='Quantity' />
          </label>
        </div>
        <div className='mt-5'>
        
          <h3>Total Cost @Price AOA/TAOA </h3>
        </div>
        <Link to='/wallet'>
          <Button variant='warning' className='px-5 mt-5 text-center'>
            Next
          </Button>
        </Link>
      </div>
    </Container>
  );
};

export default SelectCoins;
