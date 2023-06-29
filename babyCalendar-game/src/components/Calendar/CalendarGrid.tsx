import { Grid } from "@chakra-ui/react";
import CalendarItem from "./CalendarItem";

interface Props {
  cellWidth?: number | string;
  cellHeight?: number | string;
  shift?: number;
}

const CalendarGrid = ({ cellWidth, cellHeight, shift = -4 }: Props) => {
  const items = [];
  for (let i = 0; i < 28; i++) {
    items.push(
      <CalendarItem
        cellWidth={cellWidth}
        cellHeight={cellHeight}
        date={i + 1 + shift > 0 ? i + 1 + shift : ""}
      />
    );
  }

  return (
    <Grid templateRows="repeat(4, 1fr)" templateColumns="repeat(7, 1fr)">
      {items}
    </Grid>
  );
};

export default CalendarGrid;
