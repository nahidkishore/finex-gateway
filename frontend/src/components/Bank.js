
import React, { useState } from 'react';
import { Button, Container, Dropdown, DropdownButton } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Bank = () => {
  const [selectBank, setSelectBank] = useState('Chose Your Bank');

  const handleChange = (e) => {
    setSelectBank(e);
  };
  return (
    <Container className=' border my-3'>
      <div className='container p-5'>
        <div className='my-3'>
          <DropdownButton
            id='dropdown-basic-button'
            title='Choose your Local Bank'
          >
            <Dropdown.Item onSelect={handleChange}>First Bank</Dropdown.Item>
            <Dropdown.Item onSelect={handleChange}>Second Bank</Dropdown.Item>
          </DropdownButton>
        </div>
        <h5 className='mb-5'>
          Transfers between banks are usually faster. If available give
          preference to your local bank and the system will automatically find
          the best P2P for you.
        </h5>

        <Link to='/transaction'>
          <Button variant='warning' className='px-5 mt-5 text-center'>
            Next
          </Button>
        </Link>
      </div>
    </Container>
  );
};

export default Bank;
