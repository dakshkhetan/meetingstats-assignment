import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  Box,
  Center,
  Image,
  Text,
  Tag,
  Divider,
  Spinner,
  useToast
} from "@chakra-ui/react";

import { getUserRequest } from "../redux/actions/user.action";

import "../styles/Settings.scss";

const Settings = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const loading = useSelector((state) => state.user.loading);
  const error = useSelector((state) => state.user.error);

  useEffect(() => {
    dispatch(getUserRequest());
  }, [dispatch]);

  const toast = useToast();

  const displayError = () =>
    toast({
      title: "Error",
      description: error.message,
      status: "error",
      duration: 5000,
      isClosable: true
    });

  if (loading) {
    return (
      <Container mt="20%" pl="7%" centerContent>
        <Spinner size="xl" />
      </Container>
    );
  }

  return (
    <>
      <Helmet>
        <title>Settings | MeetingStats</title>
      </Helmet>

      <Box pl="7%">
        <Container mt="10%" centerContent>
          {error && displayError()}
          {!error && user && (
            <Box>
              <Center>
                <Image
                  src={user.avatar}
                  alt="avatar"
                  borderRadius="full"
                  boxSize="120px"
                  border="2px"
                  fallback={<Spinner m="10" size="lg" />}
                />
              </Center>

              <Center mt="5">
                <Text className="heading"> {user.name}</Text>
              </Center>

              <Divider mt="5" colorScheme="blue" />

              <Box mt="7">
                <Tag size="lg" variant="subtle" colorScheme="cyan">
                  Address
                </Tag>
                <Text mt="2" className="text">
                  {user.address}
                </Text>
              </Box>

              <Divider mt="5" size="md" colorScheme="blue" />

              <Box mt="7">
                <Tag size="lg" variant="subtle" colorScheme="cyan">
                  Phone
                </Tag>
                <Text mt="2" className="text">
                  {user.phone}
                </Text>
              </Box>
            </Box>
          )}
        </Container>
      </Box>
    </>
  );
};

export default Settings;
