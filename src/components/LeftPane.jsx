import React from "react";
import { useHistory, Link } from "react-router-dom";
import { Container, VStack, Box } from "@chakra-ui/react";
import { FaHome, FaUser } from "react-icons/fa";
import { GoGraph } from "react-icons/go";
import { FiSettings, FiExternalLink } from "react-icons/fi";

const LeftPane = () => {
  let history = useHistory();

  return (
    <>
      <Container pos="fixed" top="0" left="0" w="7%" h="100%" bg="gray.100">
        <VStack spacing="50px">
          <Box mt="100px" w="40px" h="40px">
            <FaHome
              size="2.5rem"
              onClick={() => history.push("/")}
              style={{ cursor: "pointer" }}
            />
          </Box>
          <Box w="40px" h="40px">
            <FaUser
              size="2.5rem"
              onClick={() => history.push("/settings")}
              style={{ cursor: "pointer" }}
            />
          </Box>
          <Box w="40px" h="40px">
            <GoGraph size="2.5rem" style={{ cursor: "not-allowed" }} />
          </Box>
          <Box w="40px" h="40px">
            <FiSettings size="2.5rem" style={{ cursor: "not-allowed" }} />
          </Box>
        </VStack>

        <Box pos="fixed" bottom="3%" w="5%" mx="auto" textAlign="center">
          <Link to="/login">
            Login <FiExternalLink style={{ display: "inline" }} />
          </Link>
        </Box>
      </Container>
    </>
  );
};

export default LeftPane;
