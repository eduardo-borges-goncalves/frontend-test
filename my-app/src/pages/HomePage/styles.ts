import { Grid, makeStyles, styled } from "@material-ui/core";

export const Container = styled('div')({
  margin: "10% 8%",
})

export const Header = styled(Grid)({
  backgroundColor: "rgb(255, 123, 0)",
  color: "white",
  borderRadius: "0.5rem 0.5rem 0rem 0rem",
  paddingTop: "0.6rem",
  paddingBottom: "0.6rem",
  textAlign: "center"
})

export const useStyles = makeStyles({
  border: {
    borderBottom: "solid 1px rgb(234, 192, 152)",
    borderRight: "solid 1px rgb(234, 192, 152)",
    borderLeft: "solid 1px rgb(234, 192, 152)",
    textAlign: "center", 
    paddingTop: "1rem",
    paddingBottom: "1rem",
    marginTop:"3px",
  }, 
  alignCenter: {
    display: "flex", 
    alignItems: "center", 
    justifyContent: "center"
  }
})