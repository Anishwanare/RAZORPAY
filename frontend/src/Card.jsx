import { Button, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

const Card = ({ amount, img, checkOutHandler }) => {
  return (
    <VStack>
      <Image src={img} boxSize={"64"} objectFit={"contain"} />
      <Text>{amount}</Text>
      <Button onClick={() => checkOutHandler(amount)}>Buy Now</Button>
    </VStack>
  );
};

export default Card;
