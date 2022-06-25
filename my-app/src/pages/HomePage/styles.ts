import { Grid, makeStyles, styled } from "@material-ui/core";

export const Table = styled('table')({
  marginTop: "2.5rem",
  margin: "auto",
  boxShadow: "1px 1px 10px 1px rgb(0,0,0,0.5)", 
  overflowY: "hidden",
  borderRadius: "0.25rem 0.25rem 0rem 0rem",
})

export const Header = styled(Grid)({
  backgroundColor: "rgb(255, 123, 0)",
  color: "white",
  borderRadius: "0.25rem 0.25rem 0rem 0rem",
  paddingTop: "0.4rem",
  paddingBottom: "0.4rem",
  textAlign: "center", 
})

export const useStyles = makeStyles({
  row: {
    textAlign: "center", 
    paddingTop: "0.7rem",
    paddingBottom: "0.7rem",
    marginTop:"3px",
  }, 
  alignCenter: {
    display: "flex", 
    alignItems: "center", 
    justifyContent: "center"
  }, 
  textRow: {
    fontWeight: "bold", 
    wordBreak: "break-all"
  }, 
  mt: {
    marginTop: "3rem",
  }
})