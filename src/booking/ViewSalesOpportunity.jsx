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

const SalesReport = () => {
    return (
        <>
            {/*********** body area start here ************/}
            <Card>
                <CardContent>
                    {/* header part work start */}
                    <h2 className="m0" style={{ color: "#00c2c1" }}>View Sales Opportunity</h2>
                    <hr />
                    {/* header part work end */}

                    {/* table work start here */}
                    <Paper className="customTable" sx={{ width: "100%" }}>
                        <TableContainer>
                            <Table stickyHeader aria-label="sticky">
                                <TableBody>
                                    <TableRow>
                                        <TableCell width={200}><b>Business Partner Code</b></TableCell>
                                        <TableCell width={300}>AELCP123456789DlF</TableCell>
                                        <TableCell width={200}><b>Business Partner Name</b></TableCell>
                                        <TableCell width={400}>Rajesh Sharma</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell><b>Contact Person Name</b></TableCell>
                                        <TableCell>Raju Dash</TableCell>
                                        <TableCell><b>Competetor Name</b></TableCell>
                                        <TableCell>Rajan Export</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell><b>Level of Interest</b></TableCell>
                                        <TableCell>25%</TableCell>
                                        <TableCell><b>Potential Value</b></TableCell>
                                        <TableCell>459</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell><b>Weighted Amount</b></TableCell>
                                        <TableCell>795</TableCell>
                                        <TableCell><b>Gross Profit</b></TableCell>
                                        <TableCell>25%</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell><b>Gross Profit %</b></TableCell>
                                        <TableCell>32%</TableCell>
                                        <TableCell><b>Sales Oppurtunity Number</b></TableCell>
                                        <TableCell>325467</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell><b>Sales Oppurtunity Name</b></TableCell>
                                        <TableCell>XYZ</TableCell>
                                        <TableCell><b>Information Source</b></TableCell>
                                        <TableCell>ABC</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell><b>Closing Date</b></TableCell>
                                        <TableCell>13 Feb 2024</TableCell>
                                        <TableCell><b>Status</b></TableCell>
                                        <TableCell>Won</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell><b>Completion %</b></TableCell>
                                        <TableCell>25 %</TableCell>
                                        <TableCell><b>&nbsp;</b></TableCell>
                                        <TableCell>&nbsp;</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                    <div>
                        <h4 className="mb10">Description Of Opportunity</h4>
                        <p className="m0" align="justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                    <div className="mt20">
                        <TableContainer>
                            <Table className="tableBordered" aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Row No</TableCell>
                                        <TableCell>Stage</TableCell>
                                        <TableCell>Start Date</TableCell>
                                        <TableCell>% Allocated</TableCell>
                                        <TableCell>Potential Amount</TableCell>
                                        <TableCell>Weighted Amount</TableCell>
                                        <TableCell>Closing Date</TableCell>
                                        <TableCell>Linked Activity</TableCell>
                                        <TableCell>Remarks</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>1</TableCell>
                                        <TableCell>4 Stage</TableCell>
                                        <TableCell>11 Feb 2024</TableCell>
                                        <TableCell>Center</TableCell>
                                        <TableCell>295</TableCell>
                                        <TableCell>465</TableCell>
                                        <TableCell>13 Feb 2024</TableCell>
                                        <TableCell>Won</TableCell>
                                        <TableCell>32</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>1</TableCell>
                                        <TableCell>4 Stage</TableCell>
                                        <TableCell>11 Feb 2024</TableCell>
                                        <TableCell>Center</TableCell>
                                        <TableCell>295</TableCell>
                                        <TableCell>465</TableCell>
                                        <TableCell>13 Feb 2024</TableCell>
                                        <TableCell>Won</TableCell>
                                        <TableCell>32</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>1</TableCell>
                                        <TableCell>4 Stage</TableCell>
                                        <TableCell>11 Feb 2024</TableCell>
                                        <TableCell>Center</TableCell>
                                        <TableCell>295</TableCell>
                                        <TableCell>465</TableCell>
                                        <TableCell>13 Feb 2024</TableCell>
                                        <TableCell>Won</TableCell>
                                        <TableCell>32</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>1</TableCell>
                                        <TableCell>4 Stage</TableCell>
                                        <TableCell>11 Feb 2024</TableCell>
                                        <TableCell>Center</TableCell>
                                        <TableCell>295</TableCell>
                                        <TableCell>465</TableCell>
                                        <TableCell>13 Feb 2024</TableCell>
                                        <TableCell>Won</TableCell>
                                        <TableCell>32</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>1</TableCell>
                                        <TableCell>4 Stage</TableCell>
                                        <TableCell>11 Feb 2024</TableCell>
                                        <TableCell>Center</TableCell>
                                        <TableCell>295</TableCell>
                                        <TableCell>465</TableCell>
                                        <TableCell>13 Feb 2024</TableCell>
                                        <TableCell>Won</TableCell>
                                        <TableCell>32</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>1</TableCell>
                                        <TableCell>4 Stage</TableCell>
                                        <TableCell>11 Feb 2024</TableCell>
                                        <TableCell>Center</TableCell>
                                        <TableCell>295</TableCell>
                                        <TableCell>465</TableCell>
                                        <TableCell>13 Feb 2024</TableCell>
                                        <TableCell>Won</TableCell>
                                        <TableCell>32</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                    {/* table work end here */}
                </CardContent>
            </Card>
            {/************ body area end here ************/}
        </>
    );
};

export default SalesReport;
