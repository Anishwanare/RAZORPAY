import { Box, Button, Center, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

const PaymentSuccess = () => {
  const navigateTo = useNavigate();
  const searchQuery = useSearchParams()[0];
  const referenceNumber = searchQuery.get("reference");

  return (
    <Center height="100vh" width="100vw">
      <VStack spacing={4} align="center">
        <Text fontSize="2xl" fontWeight="bold" color="green.500">
          Payment Successful
        </Text>
        <Text fontSize="lg">Your payment has been successfully processed.</Text>
        <Text fontSize="md" color="gray.500">
          Reference Number: {referenceNumber}
        </Text>
        <Button as={Link} to="/" colorScheme="teal" variant="solid" size="lg">
          Go to Home
        </Button>
      </VStack>
    </Center>
  );
};

export default PaymentSuccess;
