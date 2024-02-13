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
import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid';

const Lead = () => {
    return (
        <>
            {/*********** body area start here ************/}
            <Card>
                <CardContent>
                    {/* header part work start */}
                    <h2 className="m0" style={{ color: "#00c2c1" }}>View Lead</h2>
                    <hr />
                    {/* header part work end */}

                    {/* table work start here */}
                    <Paper className="customTable" sx={{ width: "100%" }}>
                        <TableContainer>
                            <Table stickyHeader aria-label="sticky">
                                <TableBody>
                                    <TableRow>
                                        <TableCell width={200}><b>Sales Employee Code</b></TableCell>
                                        <TableCell>AECLW1234589TX</TableCell>
                                        <TableCell width={200}><b>Sales Employee Name</b></TableCell>
                                        <TableCell>Ramesh Shaw</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell><b>Lead Name</b></TableCell>
                                        <TableCell>Ravi Shrivastava</TableCell>
                                        <TableCell><b>Lead Code</b></TableCell>
                                        <TableCell>AEC123456789olx</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell><b>Lead Group</b></TableCell>
                                        <TableCell>Select from Dropdown</TableCell>
                                        <TableCell><b>Pan No</b></TableCell>
                                        <TableCell>AECY91245L</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell><b>Lead Code</b></TableCell>
                                        <TableCell>#123456AHc</TableCell>
                                        <TableCell><b>&nbsp;</b></TableCell>
                                        <TableCell>&nbsp;</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>

                        {/* box part 1 start */}
                        <div className="grayBg p10 mt10">
                            <h4 className="m0">Contact Person Details</h4>
                            <hr />
                            <TableContainer>
                                <Table stickyHeader aria-label="sticky">
                                    <TableBody>
                                        <TableRow>
                                            <TableCell width={200}><b>Contact Person ID</b></TableCell>
                                            <TableCell width={300}>AELCP123456789DlF</TableCell>
                                            <TableCell width={200}><b>Contact Person Dsignation/Department</b></TableCell>
                                            <TableCell width={400}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry...</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell><b>Contact Person First Name</b></TableCell>
                                            <TableCell>John</TableCell>
                                            <TableCell><b>Contact Last Name</b></TableCell>
                                            <TableCell>Smith</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell><b>Contact Person Phone No.</b></TableCell>
                                            <TableCell>3120654890</TableCell>
                                            <TableCell><b>Contact Person Email ID</b></TableCell>
                                            <TableCell>johnSmith@gmail.com</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>
                        {/* box part 1 end */}

                        {/* box part 2 start */}
                        <div className="grayBg p10 mt10">
                            <h4 className="m0">Contact Person Details</h4>
                            <hr />
                            <TableContainer>
                                <Table stickyHeader aria-label="sticky">
                                    <TableBody>
                                        <TableRow>
                                            <TableCell width={200}><b>Contact Person ID</b></TableCell>
                                            <TableCell width={300}>AELCP123456789DlF</TableCell>
                                            <TableCell width={200}><b>Contact Person Dsignation/Department</b></TableCell>
                                            <TableCell width={400}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry...</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell><b>Contact Person First Name</b></TableCell>
                                            <TableCell>John</TableCell>
                                            <TableCell><b>Contact Last Name</b></TableCell>
                                            <TableCell>Smith</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell><b>Contact Person Phone No.</b></TableCell>
                                            <TableCell>3120654890</TableCell>
                                            <TableCell><b>Contact Person Email ID</b></TableCell>
                                            <TableCell>johnSmith@gmail.com</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>
                        {/* box part 2 end */}

                        {/* grid part start */}
                        <Grid className="mb10" container spacing={2}>
                            {/* left part start */}
                            <Grid item xs={6}>
                                <div className="grayBg p10 mt10">
                                    <h4 className="m0">Bill To Address</h4>
                                    <hr />
                                    <TableContainer>
                                        <Table stickyHeader aria-label="sticky">
                                            <TableBody>
                                                <TableRow>
                                                    <TableCell width={150}><b>Address ID</b></TableCell>
                                                    <TableCell>AELCP123456789DlF</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell width={150}><b>Street/PO Box</b></TableCell>
                                                    <TableCell>24pgs north</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell width={150}><b>Block</b></TableCell>
                                                    <TableCell>Block IB</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell width={150}><b>City</b></TableCell>
                                                    <TableCell>saltlake</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell width={150}><b>State</b></TableCell>
                                                    <TableCell>West Bengal</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell width={150}><b>ZipCode</b></TableCell>
                                                    <TableCell>123456</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell width={150}><b>Country</b></TableCell>
                                                    <TableCell>India</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell width={150}><b>GST Type</b></TableCell>
                                                    <TableCell>CGST</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell width={150}><b>GST Number</b></TableCell>
                                                    <TableCell>22AAAAA0000A1Z5</TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </div>
                            </Grid>
                            {/* left part end */}

                            {/* right part start */}
                            <Grid item xs={6}>
                            <div className="grayBg p10 mt10">
                                    <h4 className="m0">Ship To Address</h4>
                                    <hr />
                                    <TableContainer>
                                        <Table stickyHeader aria-label="sticky">
                                            <TableBody>
                                                <TableRow>
                                                    <TableCell width={150}><b>Address ID</b></TableCell>
                                                    <TableCell>CLPO123456789RXN</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell width={150}><b>Street/PO Box</b></TableCell>
                                                    <TableCell>Kolkata</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell width={150}><b>Block</b></TableCell>
                                                    <TableCell>A/L</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell width={150}><b>City</b></TableCell>
                                                    <TableCell>Kolkata</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell width={150}><b>State</b></TableCell>
                                                    <TableCell>West Bengal</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell width={150}><b>ZipCode</b></TableCell>
                                                    <TableCell>700001</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell width={150}><b>Country</b></TableCell>
                                                    <TableCell>India</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell width={150}><b>GST Type</b></TableCell>
                                                    <TableCell>CGST</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell width={150}><b>GST Number</b></TableCell>
                                                    <TableCell>22AAAAA0000A1Z5</TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </div>
                            </Grid>
                            {/* right part end */}
                        </Grid>
                        {/* grid part end */}

                    </Paper>
                    {/* table work end here */}
                </CardContent>
            </Card>
            {/************ body area end here ************/}
        </>
    );
};

export default Lead;
