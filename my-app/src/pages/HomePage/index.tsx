import {
  Container,
  Typography,
} from "@material-ui/core"
import { DrinksTable } from "../../components/DrinksTable"
import {  useStyles } from "./styles"

export const HomePage = () => {
  const classes = useStyles()

  return (
    <>
      <Container className={classes.container }>
        <Typography
          className={classes.my}
          variant="h3"
          component="h1" >
          The World 500 Most Alcoholic Drinks
        </Typography>
        <DrinksTable />
      </Container>
    </>
  )
}