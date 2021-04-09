import React from "react";
import Moment from "react-moment";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption
} from "@chakra-ui/react";

const ListView = ({ meetings }) => {
  const fetchMeetingData = () =>
    meetings.map((day) => (
      <Tr key={day.date}>
        <Td>
          <Moment parse="DD-MM-YYYY" format="ddd, Do MMM'YY">
            {day.date}
          </Moment>
        </Td>
        <Td isNumeric>{day.count}</Td>
      </Tr>
    ));

  return (
    <>
      <Table mb="10%" variant="striped" colorScheme="gray">
        <TableCaption placement="top">Daily Meetings Count</TableCaption>
        <Thead>
          <Tr>
            <Th>Date</Th>
            <Th isNumeric>Count</Th>
          </Tr>
        </Thead>
        <Tbody>{fetchMeetingData()}</Tbody>
      </Table>
    </>
  );
};

export default ListView;
