import { Container, Grid, Typography } from "@material-ui/core"
import { useEffect, useState } from "react"
import apiClient from "../../services/api-client"
import { Drink } from "../../types/drink"
import { Table, Header, useStyles } from "./styles"

// TASKS

// Paginate
// transform to table 
// use description in that contid table 

export const HomePage = () => {
  const [drinks, setDrinks] = useState([])

  const classes = useStyles()

  const getDrinks = async () => {
    try {
      const response = await apiClient.get("")
      setDrinks(response.data.sort((a: Drink, b: Drink) => b.abv - a.abv).slice(0, 500))
    } catch {
      window.alert("Opa, ocorreu um erro ao carregar a página. Por favor tente novamente. ")
    }
  }

  useEffect(() => {
    getDrinks()
  }, [])

  return (
    <>
      <Container>
        <Typography
          className={classes.mt}
          variant="h3"
          component="h1" >
          The World 500 Most Alcoholic Drinks
        </Typography>
        <Table>
          <Grid container >
            <Grid item xs={12} >
              <Header container spacing={1}>
                <Grid item xs={1} className={classes.alignCenter}>
                  <Typography 
                    display="block"
                    noWrap variant="h6">
                    Rank
                  </Typography>
                </Grid>
                <Grid item xs={3} className={classes.alignCenter}>
                  <Typography 
                    display="block"
                    noWrap variant="h6">
                    Drink
                  </Typography>
                </Grid>
                <Grid item xs={1} className={classes.alignCenter}>
                  <Typography 
                    display="block"
                    noWrap variant="h6">
                    Alcoohol
                  </Typography>
                </Grid>
                <Grid item className={classes.alignCenter} xs={2}>
                  <Typography 
                    display="block"
                    noWrap variant="h6">
                    Country
                  </Typography>
                </Grid>
                <Grid item className={classes.alignCenter} xs={2}>
                  <Typography 
                    display="block"
                    noWrap variant="h6">
                    Category
                  </Typography>
                </Grid>
                <Grid item className={classes.alignCenter} xs={3}>
                  <Typography 
                    display="block"
                    noWrap variant="h6">
                    Website
                  </Typography>
                </Grid>
              </Header>
            </Grid>
            {
              drinks.map((drink: Drink, index) => (
                <Grid key={index} item xs={12} >
                  <Grid container spacing={1} className={classes.row}>
                    <Grid item xs={1} className={classes.alignCenter}>
                      <Typography
                        className={classes.textRow} color="textPrimary" variant="body2" >
                        {index + 1}
                      </Typography>
                    </Grid>
                    <Grid item xs={3} className={classes.alignCenter}>
                      <Typography
                        className={classes.textRow} color="textPrimary" variant="body2" >
                        {drink.name}
                      </Typography>
                    </Grid>
                    <Grid item xs={1} className={classes.alignCenter}>
                      <Typography
                        className={classes.textRow} color="textSecondary" variant="body2">
                        {drink.abv.toFixed(2)}%
                      </Typography>
                    </Grid>
                    <Grid item className={classes.alignCenter} xs={2}>
                      <Typography
                        className={classes.textRow} color="textSecondary" variant="body2">
                        {drink.country || "Uninformed"}
                      </Typography>
                    </Grid>
                    <Grid item className={classes.alignCenter} xs={2}>
                      <Typography
                        className={classes.textRow} color="textSecondary" variant="body2">
                        {drink.category || "Uninformed"}
                      </Typography>
                    </Grid>
                    <Grid item className={classes.alignCenter} xs={3}>
                      <Typography
                        className={classes.textRow} color="textSecondary" variant="body2">
                        {drink.website || "Uninformed"}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              ))
            }
          </Grid>
        </Table>
      </Container>
    </>
  )
}