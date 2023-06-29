import { Grid, GridItem } from "@chakra-ui/react";
import "./App.css";
import Calendar from "./components/Calendar/Calendar";

function App() {
  return (
    <Grid
      templateAreas={`"nav header"
                      "nav main"
                      "footer footer"`}
      gridTemplateRows={"50px 1fr 30px"}
      gridTemplateColumns={"150px 1fr"}
      h="200px"
      gap="1"
      fontWeight="bold"
    >
      <GridItem pl="2" area={"header"}>
        Header
      </GridItem>
      <GridItem pl="2" area={"nav"}>
        Nav
      </GridItem>
      <GridItem pl="2" area={"main"}>
        <Calendar />
      </GridItem>
      <GridItem pl="2" area={"footer"}>
        Footer
      </GridItem>
    </Grid>
  );
}

export default App;
