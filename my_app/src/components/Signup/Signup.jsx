import React, { useState } from 'react';
import { useDispatch } from 'react-redux'; // Assuming you are using Redux

import {
  Box,
  Input,
  Button,
  FormControl,
  FormLabel,
} from '@chakra-ui/react';
import { SingupPost } from '../Redux/actions';

function SignupD() {
  const [UserData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    phoneNumber: '',
    city: '',
  });

  const dispatch = useDispatch();

  const handlechange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...UserData,
      [name]: value,
    });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    dispatch(SingupPost(UserData));
  };

  return (
    <Box maxW="md" mx="auto">
      <form onSubmit={handlesubmit}>
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            name="name"
            value={UserData.name}
            onChange={handlechange}
          />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Email</FormLabel>
          <Input
            type="text"
            name="email"
            value={UserData.email}
            onChange={handlechange}
          />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            name="password"
            value={UserData.password}
            onChange={handlechange}
          />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Phone Number</FormLabel>
          <Input
            type="text"
            name="phoneNumber"
            value={UserData.phoneNumber}
            onChange={handlechange}
          />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>City</FormLabel>
          <Input
            type="text"
            name="city"
            value={UserData.city}
            onChange={handlechange}
          />
        </FormControl>

        <Button mt={4} colorScheme="teal" type="submit">
          Submit
        </Button>
      </form>
    </Box>
  );
}

export default SignupD;
