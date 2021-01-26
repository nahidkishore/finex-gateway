
import React, { useContext, useState } from 'react';
import { Button, Container, Dropdown, DropdownButton} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../App';

const Bank = () => {
  const [ ibn,setIban ] = useContext(UserContext);
 

  const handleChange = event => {
    setIban(event.target.value);
}
  return (
    <Container className=' border my-3'>
      <div className='container p-5'>
        <div className='my-3'>
        <DropdownButton
            id='dropdown-basic-button'
            title='Choose your Local Bank'
            onChange={handleChange}
          >
            <Dropdown.Item >First Bank</Dropdown.Item>
            <Dropdown.Item >Second Bank</Dropdown.Item>
            <Dropdown.Item >Third Bank</Dropdown.Item>
            <Dropdown.Item >Fourth Bank</Dropdown.Item>
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
