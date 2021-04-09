import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";
import validator from "validator";
import {
  Container,
  Box,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  InputGroup,
  Input,
  InputRightElement
} from "@chakra-ui/react";

const Login = () => {
  const [isPasswordVisible, setPasswordVisibility] = useState(false);
  const [isEmailValid, setEmailValidation] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  let history = useHistory();

  const toggleVisibility = () => setPasswordVisibility(!isPasswordVisible);

  const validateEmail = (email) => {
    validator.isEmail(email)
      ? setEmailValidation(true)
      : setEmailValidation(false);
  };

  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    if (e.target.name === "email") {
      validateEmail(e.target.value);
    }
  };

  const handleSubmit = () => {
    const { password } = formData;

    if (isEmailValid && password && password.length > 0) {
      history.push("/");
    }
  };

  return (
    <>
      <Helmet>
        <title>Login | MeetingStats</title>
      </Helmet>

      <Box pl="7%">
        <Container mt="15%" w="70%" centerContent>
          <Box bg="white" p="10" w="100%">
            <FormControl isRequired isInvalid={!isEmailValid}>
              <FormLabel>Email address</FormLabel>
              <Input
                name="email"
                type="email"
                placeholder="Enter email"
                isInvalid={!isEmailValid}
                errorBorderColor="red.300"
                onChange={onChangeHandler}
              />
              <FormErrorMessage>
                Please enter a valid email address
              </FormErrorMessage>

              <FormLabel mt="6">Password</FormLabel>
              <InputGroup size="md">
                <Input
                  name="password"
                  type={isPasswordVisible ? "text" : "password"}
                  placeholder="Enter password"
                  isInvalid={false}
                  pr="4.5rem"
                  onChange={onChangeHandler}
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={toggleVisibility}>
                    {isPasswordVisible ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>

              <Button
                type="submit"
                mt="6"
                colorScheme="teal"
                variant="solid"
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </FormControl>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Login;
