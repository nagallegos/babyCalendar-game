import { Box, GridItem } from "@chakra-ui/react";

interface Props {
  cellWidth?: number | string;
  cellHeight?: number | string;
  date?: number | "";
}

const CalendarItem = ({
  cellWidth = "auto",
  cellHeight = "auto",
  date,
}: Props) => {
  return (
    <GridItem
      rowSpan={1}
      colSpan={1}
      w={cellWidth}
      h={cellHeight}
      p={1}
      margin={1}
      borderRadius={5}
      borderWidth={4}
    >
      {date !== "" && (
        <>
          <h1>{date}</h1>
          <Box margin={5}>
            <p>Calendar Cell Content goes here...</p>
          </Box>
        </>
      )}
    </GridItem>
  );
};

export default CalendarItem;
