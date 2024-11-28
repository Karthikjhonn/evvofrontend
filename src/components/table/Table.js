import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, sl, el, cl, tl, tal, bal) {
  return { name, sl, el, cl, tl, tal, bal };
}


export default function BasicTable({ user }) {
  const getBalanceLeave = () => {

    const totalLeave = user?.leaveStatus?.totalLeave;
    return 25 - totalLeave ;
  };
  const rows = [
    createData(
      user?.user?.name,
      user?.leaveStatus?.sickLeave,
      user?.leaveStatus?.earnedLeave,
      user?.leaveStatus?.casualLeave,
      25,
      user?.leaveStatus?.totalLeave,
      getBalanceLeave()
    ),
  ];
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Employee Name</TableCell>
            <TableCell align="center">Sick Leave</TableCell>
            <TableCell align="center">Casual Leave</TableCell>
            <TableCell align="center">Earned Leave</TableCell>
            <TableCell align="center">Total No Of Leaves</TableCell>
            <TableCell align="center">Total No Of Availed Leaves</TableCell>
            <TableCell align="center">Balance</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row" className="line-clamp-1">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.sl}</TableCell>
              <TableCell align="center">{row.cl}</TableCell>
              <TableCell align="center">{row.el}</TableCell>
              <TableCell align="center">{row.tl}</TableCell>
              <TableCell align="center">{row.tal}</TableCell>
              <TableCell align="center">{row.bal}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
