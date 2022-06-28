import { createStyles, TableRow, Theme, withStyles } from "@material-ui/core";

export const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
        border: "none"
      },
    },
  }),
)(TableRow);