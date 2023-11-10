import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ProductGetRequest, Productdelete } from '../Redux/actions'; // Import the delete action if you have one
import { useSelector } from 'react-redux';
import {
  Box,
  Table,
  Thead,
  Tbody,
  Flex,
  Tr,
  Th,
  Td,
  Image,
  UnorderedList,
  ListItem,
  Button,
  Checkbox,
} from '@chakra-ui/react';

import { Link } from 'react-router-dom';

function Product() {

   const[red, setRed ] = useState(false);
   const[white, setwhite] = useState(false);
  const[black, setBlack] = useState(false);
  const[blue, setblue] = useState(false);
  const[green, setGreen] = useState(false);



  const [filterRange1, setFilterRange1] = useState(false);
  const [filterRange2, setFilterRange2] = useState(false);

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000000);

  const handleCheckboxChange = (isChecked, minValue, maxValue,checkboxNumber) => {
    if (isChecked) {
      setMinPrice(minValue);
      setMaxPrice(maxValue);
      if (checkboxNumber === 1) {
        setFilterRange2(false);
      } else if (checkboxNumber === 2) {
        setFilterRange1(false);
      }
    } else {
      // Reset to default values or handle differently if needed
      setMinPrice(0);
      setMaxPrice(10000000);
    }
    // Trigger API request when filters change
    Dispatch(ProductGetRequest(minPrice, maxPrice));
  };

console.log(minPrice)
console.log(maxPrice)
console.log(red);
  const ProductData = useSelector((state) => state.Product.ProductData);
  const Dispatch = useDispatch();
  const [selectedProducts, setSelectedProducts] = useState([]);
console.log(selectedProducts);


useEffect(() => {
  Dispatch(ProductGetRequest(minPrice, maxPrice,red,white,black,blue,green));
}, [Dispatch, minPrice, maxPrice, selectedProducts,red,white,black,blue,green]);


  const handleProductSelection = (productId) => {
    if (selectedProducts.includes(productId)) {
      setSelectedProducts(selectedProducts.filter((id) => id !== productId));
    } else {
      setSelectedProducts([...selectedProducts, productId]);
    }
  };
  const handleDeleteSelected = () => {
    Dispatch(Productdelete(selectedProducts)); 
    setSelectedProducts([]);
  };
  
   
  return (
    <Box>
    
<Box>
     
  Filter By Color
  <Checkbox 
  isChecked={red}
  onChange={() => {
    setRed((prev) => !prev);
  }}
> Red</Checkbox>

<Checkbox 
  isChecked={white}
  onChange={() => {
    setwhite((prev) => !prev);
  }}
> white</Checkbox>

<Checkbox 
  isChecked={black}
  onChange={() => {
    setBlack((prev) => !prev);
  }}
> Black</Checkbox>


<Checkbox 
  isChecked={blue}
  onChange={() => {
    setblue((prev) => !prev);
  }}
>Blue</Checkbox>

<Checkbox 
  isChecked={green}
  onChange={() => {
    setGreen((prev) => !prev);
  }}
>Green</Checkbox>
</Box>

<Flex mb="4">
  Filter By Price

        <Checkbox
          isChecked={filterRange1}
          onChange={() => {
            setFilterRange1(!filterRange1);
            handleCheckboxChange(!filterRange1, 0, 1000,1);
          }}
        >
          $0 - $1000
        </Checkbox>

        <Checkbox
          isChecked={filterRange2}
          onChange={() => {
            setFilterRange2(!filterRange2);
            handleCheckboxChange(!filterRange2, 1000, 10000,2);
          }}
        >
          $1000 - $10000
        </Checkbox>

        <Checkbox
          isChecked={filterRange2}
          onChange={() => {
            setFilterRange2(!filterRange2);
            handleCheckboxChange(!filterRange2, 10000, 100000,3);
          }}
        >
          $10000 - $100000
        </Checkbox>
      </Flex>



      <Table variant="simple">
        <Thead>
          <Tr>
            <Th><Button onClick={handleDeleteSelected} mb={4} colorScheme="red">
        Delete Selected
      </Button></Th>
            <Th>Image</Th>
            <Th>Name</Th>
            <Th>Title</Th>
            <Th>Year</Th>
            <Th>Price</Th>
            <Th>Mileage</Th>
            <Th>Power (BHP)</Th>
            <Th>Max Speed</Th>
            <Th>Colors Available</Th>
            <Th>Bulletpoints</Th>
            <Th>Edit</Th>
          </Tr>
        </Thead>
        <Tbody>
          {ProductData.map((product) => (
            <Tr key={product.id}>
              <Td>
                <Checkbox
                  isChecked={selectedProducts.includes(product.id)}
                  onChange={() => handleProductSelection(product.id)}
                />
              </Td>
              <Td>
                <Image src={product.image} alt={product.name} maxW="100px" />
              </Td>
              <Td>{product.name}</Td>
              <Td>{product.title}</Td>
              <Td>{product.year}</Td>
              <Td>{product.price}</Td>
              <Td>{product.mileage}</Td>
              <Td>{product.power}</Td>
              <Td>{product.speed}</Td>
              <Td>
                <UnorderedList>
                  {product.colorred && (
                    <ListItem color="red">Red</ListItem>
                  )}
                  {product.colorgreen && (
                    <ListItem color="green">Green</ListItem>
                  )}
                  {product.colorblack && (
                    <ListItem color="black">Black</ListItem>
                  )}
                  {product.colorwhite && (
                    <ListItem color="white">White</ListItem>
                  )}
                  {product.colorblue && (
                    <ListItem color="blue">Blue</ListItem>
                  )}
                </UnorderedList>
              </Td>
              <Td>
                <UnorderedList>
                  <ListItem>{product.bulletpoint1}</ListItem>
                  <ListItem>{product.bulletpoint2}</ListItem>
                  <ListItem>{product.bulletpoint3}</ListItem>
                  <ListItem>{product.bulletpoint4}</ListItem>
                  <ListItem>{product.bulletpoint5}</ListItem>
                </UnorderedList>
              </Td>
              <Td>
                <Link to={`/product/${product.id}`}>
                  <Button>Edit</Button>
                </Link>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
}

export default Product;
