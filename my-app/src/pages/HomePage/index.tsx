import { Grid, Typography } from "@material-ui/core"
import { useEffect, useState } from "react"
import apiClient from "../../services/api-client"
import { Drink } from "../../types/drink"
import { Container, Header, useStyles } from "./styles"

// TASKS

// Organize data to abv
// Paginate
// porcentagem alcoolica
// negrito no alcoolico ou em outro lugar
// corrigir o bug do texto do website

export const HomePage = () => {
  const [drinks, setDrinks] = useState([])
  console.log(drinks);

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
    <Container>
      <Grid container >
        <Grid item xs={12}>
          <Header container spacing={1}>
            <Grid item xs={3} className={classes.alignCenter}>
              <Typography variant="h4">
                Drink
              </Typography>
            </Grid>
            <Grid item xs={2} className={classes.alignCenter}>
              <Typography variant="h4">
                Alcoohol
              </Typography>
            </Grid>
            <Grid item className={classes.alignCenter} xs={2}>
              <Typography variant="h4">
                Country
              </Typography>
            </Grid>
            <Grid item className={classes.alignCenter} xs={2}>
              <Typography variant="h4">
                Category
              </Typography>
            </Grid>
            <Grid item className={classes.alignCenter} xs={3}>
              <Typography variant="h4">
                Website
              </Typography>
            </Grid>
          </Header>
        </Grid>
        {
          drinks.map((drink: Drink) => (
            <Grid item xs={12} >
              <Grid container spacing={1} className={classes.border}>
                <Grid item xs={3} className={classes.alignCenter}>
                  <Typography variant="body1">
                    {drink.name}
                  </Typography>
                </Grid>
                <Grid item xs={2} className={classes.alignCenter}>
                  <Typography variant="body1">
                    {drink.abv.toFixed(2)}
                  </Typography>
                </Grid>
                <Grid item className={classes.alignCenter} xs={2}>
                  <Typography variant="body1">
                    {drink.country}
                  </Typography>
                </Grid>
                <Grid item className={classes.alignCenter} xs={2}>
                  <Typography variant="body1">
                    {drink.category}
                  </Typography>
                </Grid>
                <Grid item className={classes.alignCenter} xs={3}>
                  <Typography variant="body1">
                    {drink.website}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          ))
        }
      </Grid>
    </Container>
  )
}