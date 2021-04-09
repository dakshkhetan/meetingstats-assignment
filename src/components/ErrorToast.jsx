import React from "react";
import { BiError } from "react-icons/bi";
import { useToast } from "@chakra-ui/react";

const ErrorToast = ({ error }) => {
  const toast = useToast();

  toast({
    title: "Error",
    description: error.message,
    status: "error",
    duration: 5000,
    isClosable: true
  });

  return <BiError size="4rem" />;
};

export default ErrorToast;
