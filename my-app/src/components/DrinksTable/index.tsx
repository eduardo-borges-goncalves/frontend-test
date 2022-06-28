import {
  Paper,
  TableBody,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@material-ui/core"
import Table from '@material-ui/core/Table';
import { useEffect, useState } from "react"
import apiClient from "../../services/api-client"
import { Drink } from "../../types/drink"
import { StyledTableCell } from "../StyledTableCell"
import { StyledTableRow } from "../StyledTableRow"
import { useStyles } from "./styles"

export const DrinksTable = () => {
  const [drinks, setDrinks] = useState([])

  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)

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

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table" >
        <TableHead>
          <TableRow >
            <StyledTableCell align="center">Rank</StyledTableCell>
            <StyledTableCell align="center">Drink</StyledTableCell>
            <StyledTableCell align="right">Alcoohol</StyledTableCell>
            <StyledTableCell align="right">Country</StyledTableCell>
            <StyledTableCell align="right">Category</StyledTableCell>
            <StyledTableCell align="center">Website</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {drinks
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((drink: Drink, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell style={{ color: "black" }} align="center" scope="drink">
                  {(index + 1 + (page * rowsPerPage))}
                </StyledTableCell>
                <StyledTableCell align="center" scope="drink">
                  {drink.name}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {drink.abv.toFixed(2)}%
                </StyledTableCell>
                <StyledTableCell align="right">
                  {drink.country}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {drink.category || "Not informed"}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {drink.website || "Not informed"}
                </StyledTableCell>
              </StyledTableRow>
            ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={drinks.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  )
}