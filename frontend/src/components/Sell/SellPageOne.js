import React, { useContext, useEffect, useState } from 'react';
import { Button, Container, Dropdown, DropdownButton } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const SellPageOne = () => {
  const [country, setCountry, quantity, setQuantity] = useContext(UserContext);
  const { countryInfo, SetCountryInfo } = useState();
  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then((res) => res.json())
      .then((data) => SetCountryInfo(data));
  }, [countryInfo]);

  const handleCountry = (event) => {
    setCountry(
      countryInfo.find(
        (country) =>
          country.currencies[0].code === event.target.value.split('/')[1]
      )
    );
  };

  const handleQuantity = (event) => {
    setQuantity(event.target.value);
  };
  return (
    <Container className=' border my-5'>
      <div className='container p-5'>
        <h3>Stable coin gateway - BUY</h3>

        <div className='my-5'>
          <DropdownButton
            id='dropdown-basic-button'
            title='Select Your Coin'
            onSelect={handleCountry}
          >
            {countryInfo.map((c) => (
              <Dropdown.Item eventKey={c.alpha2Code}>
                {country.currencies[0].code}
              </Dropdown.Item>
            ))}
          </DropdownButton>
        </div>
        <div>
          <label htmlFor='quantity'>
            <input
              onBlur={handleQuantity}
              type='number'
              placeholder='Quantity'
            />
          </label>
        </div>
        <div className='mt-5'>
          <h3>Total Cost @Price AOA/TAOA </h3>
        </div>
        <Link to='/sellPageTwo'>
          <Button variant='warning' className='px-5 mt-5 text-center'>
            Sell Now
          </Button>
        </Link>
      </div>
    </Container>
  );
};

export default SellPageOne;
