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

const SalesQuotation = () => {
  return (
    <>
      {/*********** body area start here ************/}
      <Card>
        <CardContent>
          {/* header part work start */}
          <h2 className="m0" style={{ color: "#00c2c1" }}>View Activity Window</h2>
          <hr />
          {/* header part work end */}

          {/* table work start here */}
          <Paper className="customTable" sx={{ width: "100%" }}>
            <TableContainer>
              <Table stickyHeader aria-label="sticky">
                <TableBody>
                  <TableRow>
                    <TableCell width={200}><b>Sales Employee Code</b></TableCell>
                    <TableCell width={300}>AELCP123456789DlF</TableCell>
                    <TableCell width={200}><b>Sales Employee Name</b></TableCell>
                    <TableCell width={400}>Rajesh Sharma</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell><b>Activity</b></TableCell>
                    <TableCell>&nbsp;</TableCell>
                    <TableCell><b>Parent Activity</b></TableCell>
                    <TableCell>&nbsp;</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell><b>Contact Person ID</b></TableCell>
                    <TableCell>&nbsp;</TableCell>
                    <TableCell><b>Start Date</b></TableCell>
                    <TableCell>&nbsp;</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell><b>End Date</b></TableCell>
                    <TableCell>&nbsp;</TableCell>
                    <TableCell><b>Document Type</b></TableCell>
                    <TableCell>&nbsp;</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell><b>Document No</b></TableCell>
                    <TableCell>&nbsp;</TableCell>
                    <TableCell><b>Status</b></TableCell>
                    <TableCell>Open</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell><b>Activity Type</b></TableCell>
                    <TableCell>&nbsp;</TableCell>
                    <TableCell><b>Contact Person</b></TableCell>
                    <TableCell>&nbsp;</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell><b>Contact Person</b></TableCell>
                    <TableCell>&nbsp;</TableCell>
                    <TableCell><b>Contact Number</b></TableCell>
                    <TableCell>&nbsp;</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell><b>Start Time</b></TableCell>
                    <TableCell>&nbsp;</TableCell>
                    <TableCell><b>End Time</b></TableCell>
                    <TableCell>&nbsp;</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell><b>Document Attachment</b></TableCell>
                    <TableCell>&nbsp;</TableCell>
                    <TableCell><b>&nbsp;</b></TableCell>
                    <TableCell>&nbsp;</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
          {/* table work end here */}
        </CardContent>
      </Card>
      {/************ body area end here ************/}
    </>
  );
};

export default SalesQuotation;
