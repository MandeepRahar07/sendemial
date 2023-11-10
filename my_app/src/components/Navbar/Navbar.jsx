import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Box, Button  } from '@chakra-ui/react'; // Import Chakra UI components
import { useColorMode } from '@chakra-ui/color-mode'; // Import Chakra UI color mode hook

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode(); // Use the Chakra UI color mode hook
  const CurrentUser = useSelector((state) => state.User.CurrentUser);

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      p={4}
      borderBottom="1px solid"
      borderColor={colorMode === 'light' ? 'gray.200' : 'gray.600'}
    >
      <Link to="/addproduct">
        <Button>Add A New Car</Button>
      </Link>

      <Link to="/">
        <Button>HOME</Button>
      </Link>

      <Link to="/login">
        {CurrentUser && CurrentUser.name ? (
          <Button>{CurrentUser.name}</Button>
        ) : (
          <Button>Log</Button>
        )}
      </Link>

      <Link to="/signup">
        <Button>Signup</Button>
      </Link>

      {/* Example of a button to toggle dark/light mode */}
      <Button onClick={toggleColorMode}>
        {colorMode === 'light' ? 'Dark Mode' : 'Light Mode'}
      </Button>
    </Box>
  );
}

export default Navbar;
