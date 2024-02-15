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
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from "react-router-dom";

const Lead = () => {
  return (
    <>
      {/*********** body area start here ************/}
      <Card>
        <CardContent>
          {/* header part work start */}
          <Grid className="mb10" container spacing={2}>
            <Grid item xs={8}>
            <h2 className="m0" style={{ color: "#00c2c1" }}>
                Lead
              </h2>
            </Grid>
            <Grid item xs={4} textAlign='right'>
              <Link className="linkIco" to="/AddLead"> <ControlPointIcon /> Add Lead </Link>
            </Grid>
          </Grid>
          {/* header part work end */}
          <hr />
          {/* table work start here */}
          <Paper className="customTable" sx={{ width: "100%" }}>
            <TableContainer>
              <Table stickyHeader aria-label="sticky">
                <TableHead>
                  <TableRow>
                    <TableCell>Lead ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>Pan</TableCell>
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow hover>
                    <TableCell>TCDIGDUR00000001</TableCell>
                    <TableCell>Rahul Sharma</TableCell>
                    <TableCell>12 Feb 2024</TableCell>
                    <TableCell>AECY91245L</TableCell>
                    <TableCell>
                      <Link variant="outlined" size="small" to="/ViewLead">
                        <RemoveRedEyeOutlinedIcon color="success" />
                      </Link>
                      &nbsp;&nbsp;
                      <Link variant="outlined" size="small" to="/AddLead">
                        <DriveFileRenameOutlineIcon />
                      </Link>
                      &nbsp;&nbsp;
                      <Link variant="outlined" size="small" to="/">
                        <DeleteIcon color="error" />
                      </Link>
                    </TableCell>
                  </TableRow>
                  <TableRow hover>
                    <TableCell>TCDIGDUR00000001</TableCell>
                    <TableCell>Rahul Sharma</TableCell>
                    <TableCell>12 Feb 2024</TableCell>
                    <TableCell>AECY91245L</TableCell>
                    <TableCell>
                      <Link variant="outlined" size="small" to="/ViewLead">
                        <RemoveRedEyeOutlinedIcon color="success" />
                      </Link>
                      &nbsp;&nbsp;
                      <Link variant="outlined" size="small" to="/AddLead">
                        <DriveFileRenameOutlineIcon />
                      </Link>
                      &nbsp;&nbsp;
                      <Link variant="outlined" size="small" to="/">
                        <DeleteIcon color="error" />
                      </Link>
                    </TableCell>
                  </TableRow>
                  <TableRow hover>
                    <TableCell>TCDIGDUR00000001</TableCell>
                    <TableCell>Rahul Sharma</TableCell>
                    <TableCell>12 Feb 2024</TableCell>
                    <TableCell>AECY91245L</TableCell>
                    <TableCell>
                      <Link variant="outlined" size="small" to="/ViewLead">
                        <RemoveRedEyeOutlinedIcon color="success" />
                      </Link>
                      &nbsp;&nbsp;
                      <Link variant="outlined" size="small" to="/AddLead">
                        <DriveFileRenameOutlineIcon />
                      </Link>
                      &nbsp;&nbsp;
                      <Link variant="outlined" size="small" to="/">
                        <DeleteIcon color="error" />
                      </Link>
                    </TableCell>
                  </TableRow>
                  <TableRow hover>
                    <TableCell>TCDIGDUR00000001</TableCell>
                    <TableCell>Rahul Sharma</TableCell>
                    <TableCell>12 Feb 2024</TableCell>
                    <TableCell>AECY91245L</TableCell>
                    <TableCell>
                      <Link variant="outlined" size="small" to="/ViewLead">
                        <RemoveRedEyeOutlinedIcon color="success" />
                      </Link>
                      &nbsp;&nbsp;
                      <Link variant="outlined" size="small" to="/AddLead">
                        <DriveFileRenameOutlineIcon />
                      </Link>
                      &nbsp;&nbsp;
                      <Link variant="outlined" size="small" to="/">
                        <DeleteIcon color="error" />
                      </Link>
                    </TableCell>
                  </TableRow>
                  <TableRow hover>
                    <TableCell>TCDIGDUR00000001</TableCell>
                    <TableCell>Rahul Sharma</TableCell>
                    <TableCell>12 Feb 2024</TableCell>
                    <TableCell>AECY91245L</TableCell>
                    <TableCell>
                      <Link variant="outlined" size="small" to="/ViewLead">
                        <RemoveRedEyeOutlinedIcon color="success" />
                      </Link>
                      &nbsp;&nbsp;
                      <Link variant="outlined" size="small" to="/AddLead">
                        <DriveFileRenameOutlineIcon />
                      </Link>
                      &nbsp;&nbsp;
                      <Link variant="outlined" size="small" to="/">
                        <DeleteIcon color="error" />
                      </Link>
                    </TableCell>
                  </TableRow>
                  <TableRow hover>
                    <TableCell>TCDIGDUR00000001</TableCell>
                    <TableCell>Rahul Sharma</TableCell>
                    <TableCell>12 Feb 2024</TableCell>
                    <TableCell>AECY91245L</TableCell>
                    <TableCell>
                      <Link variant="outlined" size="small" to="/ViewLead">
                        <RemoveRedEyeOutlinedIcon color="success" />
                      </Link>
                      &nbsp;&nbsp;
                      <Link variant="outlined" size="small" to="/AddLead">
                        <DriveFileRenameOutlineIcon />
                      </Link>
                      &nbsp;&nbsp;
                      <Link variant="outlined" size="small" to="/">
                        <DeleteIcon color="error" />
                      </Link>
                    </TableCell>
                  </TableRow>
                  <TableRow hover>
                    <TableCell>TCDIGDUR00000001</TableCell>
                    <TableCell>Rahul Sharma</TableCell>
                    <TableCell>12 Feb 2024</TableCell>
                    <TableCell>AECY91245L</TableCell>
                    <TableCell>
                      <Link variant="outlined" size="small" to="/ViewLead">
                        <RemoveRedEyeOutlinedIcon color="success" />
                      </Link>
                      &nbsp;&nbsp;
                      <Link variant="outlined" size="small" to="/AddLead">
                        <DriveFileRenameOutlineIcon />
                      </Link>
                      &nbsp;&nbsp;
                      <Link variant="outlined" size="small" to="/">
                        <DeleteIcon color="error" />
                      </Link>
                    </TableCell>
                  </TableRow>
                  <TableRow hover>
                    <TableCell>TCDIGDUR00000001</TableCell>
                    <TableCell>Rahul Sharma</TableCell>
                    <TableCell>12 Feb 2024</TableCell>
                    <TableCell>AECY91245L</TableCell>
                    <TableCell>
                      <Link variant="outlined" size="small" to="/ViewLead">
                        <RemoveRedEyeOutlinedIcon color="success" />
                      </Link>
                      &nbsp;&nbsp;
                      <Link variant="outlined" size="small" to="/AddLead">
                        <DriveFileRenameOutlineIcon />
                      </Link>
                      &nbsp;&nbsp;
                      <Link variant="outlined" size="small" to="/">
                        <DeleteIcon color="error" />
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

export default Lead;
