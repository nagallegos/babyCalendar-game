import { GridItem } from "@chakra-ui/react";

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
      pl={2}
      borderWidth={4}
    >
      {date}
    </GridItem>
  );
};

export default CalendarItem;
