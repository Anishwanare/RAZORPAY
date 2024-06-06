import React from "react";
import { Box, Card, Stack } from "@chakra-ui/react";
import Cards from "./Card";
import axios from "axios";

const Home = () => {
  const checkOutHandler = async (amount) => {
    const {
      data: { key },
    } = await axios.get("http://localhost:2010/api/getkey", {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const {
      data: { order },
    } = await axios.post(
      "http://localhost:2010/api/checkout",
      {
        amount,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    // console.log(data);

    const options = {
      key: key, // Enter the Key ID generated from the Dashboard
      amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Anish Wanare",
      description: "Test Transaction",
      image:
        "https://avatars.githubusercontent.com/u/106481793?s=400&u=08042db8995ae566f1114224353625b05dd206e9&v=4",
      order_id: order.id,
      callback_url: "http://localhost:2010/api/paymentverification",
      prefill: {
        name: "Gaurav Kumar", //log in user name
        email: "gaurav.kumar@example.com", //log in user email
        contact: "9000090000", //log in user contact
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#474747",
      },
    };
    const razor = new window.Razorpay(options);
    razor.open();
  };

  return (
    <div>
      <Box>
        <Stack
          direction={["column", "row"]}
          h={"100vh"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Cards
            amount={5000}
            img={
              "https://m.media-amazon.com/images/I/61l9ppRIiqL._AC_UF1000,1000_QL80_.jpg"
            }
            checkOutHandler={checkOutHandler}
          />
          <Cards
            amount={3000}
            img={
              "https://d2xamzlzrdbdbn.cloudfront.net/products/57b072c8-5635-4cb5-b322-26c9032f8d8922191407_416x416.jpg"
            }
            checkOutHandler={checkOutHandler}
          />
        </Stack>
      </Box>
    </div>
  );
};

export default Home;
