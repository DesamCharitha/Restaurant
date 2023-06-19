import React from "react";

import { MenuList } from "../data/data";

import Layout from "./../components/Layout/Layout";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";

const Menu = () => {
  const handleButtonClick = () => {
    // Code to handle button click, e.g., perform order processing
    // Redirect to the order success page after successful processing
    // You can also store the order details in a state management solution like Redux or React Context to pass it to the success page

    // For example, using React Router's Link component
    // Replace "/order-success" with the actual path of your order success page
    window.location.href = "/order-success";
  };

  return (
    <Layout>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {MenuList.map((menu) => (
          <Card sx={{ maxWidth: "390px", display: "flex", m: 2 }} key={menu.name}>
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: "400px" }}
                component={"img"}
                src={menu.image}
                alt={menu.name}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom component={"div"}>
                  {menu.name}
                </Typography>
                <Typography variant="body2">{menu.description}</Typography>
                <Button variant="contained" onClick={handleButtonClick}>
                  BUY NOW!
                </Button>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Layout>
  );
};

export default Menu;
