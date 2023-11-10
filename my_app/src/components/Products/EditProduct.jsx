import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import {  Productonedetail, Productput } from '../Redux/actions';
import {
  Box,
  Input,
  Button,
  FormControl,
  FormLabel,
  Checkbox,
} from '@chakra-ui/react';

function EditProduct() {
  const Navigate = useNavigate();
  const { id } = useParams();
  const oneproduct = useSelector((state) => state.Product.ProductOne);
  console.log(oneproduct);
  const Dispatch = useDispatch();

  const [formdata, setFormdata] = useState(oneproduct);

  useEffect(() => {
    Dispatch(Productonedetail(id));
  }, [id, Dispatch]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormdata({
      ...formdata,
      [name]: newValue,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Dispatch(Productput(id, formdata));
    Navigate('/');
  };

  return (
    <Box maxW="md" mx="auto">
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>Model Name</FormLabel>
          <Input
            type="text"
            name="name"
            value={formdata.name}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Title</FormLabel>
          <Input
            type="text"
            name="title"
            value={formdata.title}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Model Year</FormLabel>
          <Input
            type="number"
            name="year"
            value={formdata.year}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Model Price</FormLabel>
          <Input
            type="number"
            name="price"
            value={formdata.price}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Mileage</FormLabel>
          <Input
            type="number"
            name="mileage"
            value={formdata.mileage}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Power (in BHP)</FormLabel>
          <Input
            type="number"
            name="power"
            value={formdata.power}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Max Speed</FormLabel>
          <Input
            type="number"
            name="speed"
            value={formdata.speed}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Colors Available</FormLabel>
          <Checkbox
            name="colorred"
            checked={formdata.colorred}
            onChange={handleChange}
          >
            Red
          </Checkbox>
          <Checkbox
            name="colorgreen"
            checked={formdata.colorgreen}
            onChange={handleChange}
          >
            Green
          </Checkbox>
          <Checkbox
            name="colorblack"
            checked={formdata.colorblack}
            onChange={handleChange}
          >
            Black
          </Checkbox>
          <Checkbox
            name="colorwhite"
            checked={formdata.colorwhite}
            onChange={handleChange}
          >
            White
          </Checkbox>
          <Checkbox
            name="colorblue"
            checked={formdata.colorblue}
            onChange={handleChange}
          >
            Blue
          </Checkbox>
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Bulletpoint No. 1</FormLabel>
          <Input
            type="text"
            name="bulletpoint1"
            value={formdata.bulletpoint1}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Bulletpoint No. 2</FormLabel>
          <Input
            type="text"
            name="bulletpoint2"
            value={formdata.bulletpoint2}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Bulletpoint No. 3</FormLabel>
          <Input
            type="text"
            name="bulletpoint3"
            value={formdata.bulletpoint3}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Bulletpoint No. 4</FormLabel>
          <Input
            type="text"
            name="bulletpoint4"
            value={formdata.bulletpoint4}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Bulletpoint No. 5</FormLabel>
          <Input
            type="text"
            name="bulletpoint5"
            value={formdata.bulletpoint5}
            onChange={handleChange}
          />
        </FormControl>

        <Button mt={4} colorScheme="teal" type="submit">
          Submit
        </Button>
      </form>
    </Box>
  );
}

export default EditProduct;
