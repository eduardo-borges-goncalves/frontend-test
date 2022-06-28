import { createStyles, TableCell, Theme, withStyles } from "@material-ui/core";

export const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: "rgb(255, 123, 0)",
      color: theme.palette.common.white,
      fontSize: 16,
      fontWeight: "bold",
      border: "none"
    },
    body: {
      fontSize: 14,
      fontWeight: "bold",
      color: "rgb(117, 113, 105)", 
      border: "none"
    },
  }),
)(TableCell);