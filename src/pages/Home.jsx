import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { Container, Box, HStack, Button, Spinner } from "@chakra-ui/react";

import ErrorToast from "../components/ErrorToast";
import BarChart from "../components/BarChart";
import LineChart from "../components/LineChart";
import ListView from "../components/ListView";

import { getMeetingDataRequest } from "../redux/actions/meeting.action";

const Home = () => {
  const [view, setView] = useState("line");

  const dispatch = useDispatch();
  const meetings = useSelector((state) => state.meeting.data);
  const loading = useSelector((state) => state.meeting.loading);
  const error = useSelector((state) => state.meeting.error);

  useEffect(() => {
    dispatch(getMeetingDataRequest());
  }, [dispatch]);

  const displayMeetingsData = () => {
    switch (view) {
      case "line":
        return <LineChart meetings={meetings} />;
      case "bar":
        return <BarChart meetings={meetings} />;
      case "list":
        return <ListView meetings={meetings} />;
      default:
        return null;
    }
  };

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
        <title>Home | MeetingStats</title>
      </Helmet>

      <Box pl="7%">
        <Container mt="8%" centerContent>
          <HStack spacing="24px">
            <Button
              w="100px"
              h="40px"
              // bg="orange.200"
              colorScheme="teal"
              variant={view === "line" ? "solid" : "outline"}
              onClick={() => {
                setView("line");
              }}
            >
              Graph
            </Button>
            <Button
              w="100px"
              h="40px"
              // bg="blue.100"
              colorScheme="teal"
              variant={view === "bar" ? "solid" : "outline"}
              onClick={() => {
                setView("bar");
              }}
            >
              Bar Chart
            </Button>
            <Button
              w="100px"
              h="40px"
              // bg="green.100"
              colorScheme="teal"
              variant={view === "list" ? "solid" : "outline"}
              onClick={() => {
                setView("list");
              }}
            >
              List View
            </Button>
          </HStack>
        </Container>

        <Container mt="5%" centerContent>
          {error && <ErrorToast error={error} />}
          {!error && meetings && displayMeetingsData()}
        </Container>
      </Box>
    </>
  );
};

export default Home;
