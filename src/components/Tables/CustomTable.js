import * as React from "react";
import PropTypes from "prop-types";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { v4 as uuidv4 } from "uuid";

const CustomStickyHeaderTable = ({
  data,
  columns,
  hasRowCounter,
  rowCounterTitle,
}) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden", height: "30rem" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {hasRowCounter && <TableCell>{rowCounterTitle}</TableCell>}
              {columns.map((column) => (
                <TableCell key={uuidv4()}>{column.title}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((item, index) => (
                <TableRow key={uuidv4()} hover>
                  {hasRowCounter && (
                    <TableCell key={uuidv4()} component="th" scope="row">
                      {index + 1}
                    </TableCell>
                  )}
                  {columns.map((column) => (
                    <>
                      <TableCell key={column.key} component="th" scope="row">
                        {item[column.key]}
                      </TableCell>
                    </>
                  ))}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

CustomStickyHeaderTable.defaultProps = {
  data: [],
  hasRowCounter: false,
  rowCounterTitle: "",
};

CustomStickyHeaderTable.propTypes = {
  data: PropTypes.instanceOf(Array),
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      key: PropTypes.string.isRequired,
      function: PropTypes.func,
    })
  ).isRequired,
  hasRowCounter: PropTypes.bool,
  rowCounterTitle: PropTypes.string,
};

export default CustomStickyHeaderTable;
