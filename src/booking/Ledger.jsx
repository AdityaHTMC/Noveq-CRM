import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import { Link } from "react-router-dom";

const Ledger = () => {
  return (
    <>
      {/*********** body area start here ************/}
      <Card>
        <CardContent>
          {/* header part work start */}
          <h2 className="m0" style={{ color: "#00c2c1" }}>Ledger</h2>
          <hr />
          {/* header part work end */}

          {/* table work start here */}
          <Paper className="customTable" sx={{ width: "100%" }}>
          <br /><br /><br /><br /><br /><br /><br />
            <h1 align="center">Coming Soon</h1>
            <br /><br /><br /><br /><br /><br /><br />
          </Paper>
          {/* table work end here */}
        </CardContent>
      </Card>
      {/************ body area end here ************/}
    </>
  );
};

export default Ledger;
