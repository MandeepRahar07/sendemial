import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userdataget, Currentuser } from '../Redux/actions';
import { Box, Input, Button, FormControl, FormLabel } from '@chakra-ui/react';
function Login() {
  const [formdata, setformdata] = useState({
    email: '',
    password: '',
  });

  const userdata = useSelector((state) => state.User.UserData);
  const CurrentUser = useSelector((state) => state.User.CurrentUser);
  const dispatch = useDispatch();
  console.log(CurrentUser);

  const handlechange = (e) => {
    setformdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    dispatch(userdataget());
  }, [dispatch]);

  const handlesubmit = (e) => {
    e.preventDefault();
    // Assuming you have a payload like this
    const payload = {
      email: formdata.email,
      password: formdata.password,
    };
    const data = userdata.find(
      (e) => e.email === payload.email && e.password === payload.password
    );
    //  console.log(data);
    // Call the login action
    if (data) {
      dispatch(Currentuser(data));
      alert('o ble ble.... login ho gya');
    }
    if (!data) {
      alert('dang t bhar le email password bc');
    }
  };

  

  return (
    <Box maxW="md" mx="auto">
      <form onSubmit={handlesubmit}>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input
            type="text"
            name="email"
            value={formdata.email}
            onChange={handlechange}
          />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            name="password"
            value={formdata.password}
            onChange={handlechange}
          />
        </FormControl>

        <Button
          mt={4}
          colorScheme="teal"
          type="submit"
        >
          Submit
        </Button>
      </form>
    </Box>
  );
}

export default Login;
