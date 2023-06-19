import { Box, Button, Container, Stack, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
    const [isLoggedIn13, setIsLoggedIn13] = useState(false);
  const navigate13 = useNavigate();

  const handleLogin13 = () => {
    // Perform login logic here

    // Assuming successful login, set isLoggedIn to true
    setIsLoggedIn13(true);

    // Navigate to the desired route
    navigate13("/BasicTable"); // Example: Navigate to the Admin page after login
  };

  let navigate = useNavigate();

  const [userData, setUserData] = useState({
    id: "",
    foodItem: "",
    price: "",
  });

  const {id, foodItem, price} = userData;

  const handleData = (e) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      [e.target.name]: e.target.value,
    }));
  };

  const submitData = async (e) => {
    e.preventDefault();
    console.log(userData);
    await axios.post(`http://localhost:8080/adduser`, userData);
    setUserData({ id:"",foodItem: "", price: "" });
    navigate("/BasicTable");
  };

  


  return (
    <Container>
      <Box>
        <form onSubmit={submitData}>
          <Stack spacing={2} marginTop={5} maxWidth={"40vh"}>
          <TextField
              variant="outlined"
              label="id"
              name="id"
              value={id}
              onChange={handleData}
            />
            <TextField
              variant="outlined"
              label="foodItem"
              name="foodItem"
              value={foodItem}
              onChange={handleData}
            />
            <TextField
              variant="outlined"
              label="price"
              name="price"
              value={price}
              onChange={handleData}
            />
           
            <Stack direction={"row"} spacing={2}>
              <Button type="submit" variant="contained" > 
                Add Item
              </Button>
              <Button href="/" color="error" variant="contained">
                Cancel
              </Button>
            </Stack>
          </Stack>
        </form>
      </Box>
    </Container>
  );
};

export default AddUser;