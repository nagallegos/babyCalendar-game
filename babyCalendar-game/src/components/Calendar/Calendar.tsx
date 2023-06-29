import { Box } from "@chakra-ui/react";
import CalendarGrid from "./CalendarGrid";

const Calendar = () => {
  return (
    <Box borderRadius={3} borderWidth={2} p={10} margin={4}>
      <CalendarGrid />
    </Box>
  );
};

export default Calendar;
