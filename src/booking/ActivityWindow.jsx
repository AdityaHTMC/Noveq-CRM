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

const ActivityWindow = () => {
  return (
    <>
      {/*********** body area start here ************/}
      <Card>
        <CardContent>
          {/* header part work start */}
          <Grid className="mb10" container spacing={2}>
            <Grid item xs={8}>
            <h2 className="m0" style={{ color: "#00c2c1" }}>
                Activity Window 
              </h2>
            </Grid>
            <Grid item xs={4} textAlign='right'>
            <Button variant="contained" size="small" style={{ background: "#00c2c1" }}>
                Add
              </Button>
            </Grid>
          </Grid>
          {/* header part work end */}

          {/* table work start here */}
          <Paper className="customTable" sx={{ width: "100%" }}>
            <TableContainer sx={{ maxHeight: 385 }}>
              <Table stickyHeader aria-label="sticky">
                <TableHead>
                  <TableRow
                    sx={{
                      backgroundColor: "red",
                      // borderBottom: "2px solid black",
                      "& th": {
                        fontSize: "0.875rem",
                        color: "#00c2c1",
                      },
                    }}
                  >
                    <TableCell>Booking ID</TableCell>
                    <TableCell> Customer </TableCell>
                    <TableCell> USER </TableCell>
                    <TableCell>Delivery Date</TableCell>
                    <TableCell> Delivery Time </TableCell>
                    <TableCell> Number</TableCell>
                    <TableCell>Address</TableCell>
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow hover>
                    <TableCell>TCDIGDUR00000001</TableCell>
                    <TableCell>Rahul</TableCell>
                    <TableCell>9887XXXX48</TableCell>
                    <TableCell>5/2/24</TableCell>
                    <TableCell>16:00</TableCell>
                    <TableCell>9875478925</TableCell>
                    <TableCell> Kolkata </TableCell>
                    <TableCell>
                      <Link
                        className="customBtnOutline"
                        variant="outlined"
                        size="small"
                        to="/openbookingdetails"
                      >
                        <RemoveRedEyeOutlinedIcon /> View
                      </Link>
                    </TableCell>
                  </TableRow>

                  <TableRow hover>
                    <TableCell>TCDIGDUR00000001</TableCell>
                    <TableCell>Rahul</TableCell>
                    <TableCell>9887XXXX48</TableCell>
                    <TableCell>5/2/24</TableCell>
                    <TableCell>16:00</TableCell>
                    <TableCell>9875478925</TableCell>
                    <TableCell> Kolkata </TableCell>
                    <TableCell>
                      <Link
                        className="customBtnOutline"
                        variant="outlined"
                        size="small"
                        to="/openbookingdetails"
                      >
                        <RemoveRedEyeOutlinedIcon /> View
                      </Link>
                    </TableCell>
                  </TableRow>

                  <TableRow hover>
                    <TableCell>TCDIGDUR00000001</TableCell>
                    <TableCell>Rahul</TableCell>
                    <TableCell>9887XXXX48</TableCell>
                    <TableCell>5/2/24</TableCell>
                    <TableCell>16:00</TableCell>
                    <TableCell>9875478925</TableCell>
                    <TableCell> Kolkata </TableCell>
                    <TableCell>
                      <Link
                        className="customBtnOutline"
                        variant="outlined"
                        size="small"
                        to="/openbookingdetails"
                      >
                        <RemoveRedEyeOutlinedIcon /> View
                      </Link>
                    </TableCell>
                  </TableRow>

                  <TableRow hover>
                    <TableCell>TCDIGDUR00000001</TableCell>
                    <TableCell>Rahul</TableCell>
                    <TableCell>9887XXXX48</TableCell>
                    <TableCell>5/2/24</TableCell>
                    <TableCell>16:00</TableCell>
                    <TableCell>9875478925</TableCell>
                    <TableCell> Kolkata </TableCell>
                    <TableCell>
                      <Link
                        className="customBtnOutline"
                        variant="outlined"
                        size="small"
                        to="/openbookingdetails"
                      >
                        <RemoveRedEyeOutlinedIcon /> View
                      </Link>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            <Stack className="rightPagination mt10" spacing={2}>
              <Pagination color="primary" count={10} shape="rounded" />
            </Stack>
          </Paper>
          {/* table work end here */}
        </CardContent>
      </Card>
      {/************ body area end here ************/}
    </>
  );
};

export default ActivityWindow;
