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
import Grid from "@mui/material/Grid";
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import SendIcon from '@mui/icons-material/Send';
import { Link } from "react-router-dom";
import { colors } from "@mui/material";

const AddSalesOpportunity = () => {
    return (
        <>
            {/*********** body area start here ************/}
            <Card>
                <CardContent>
                    {/* header part work start */}
                    <h2 className="m0" style={{ color: "#00c2c1" }}>Add Sales Opportunity</h2>
                    <hr /><br />
                    {/* header part work end */}

                    {/* body Box start here */}
                    <Paper className="customTable" sx={{ width: "100%" }}>
                        <div>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    Sales Employee Code : <b>AECLW1234589TX</b>
                                </Grid>
                                <Grid item xs={6}>
                                    Sales Employee Name : <b>Ramesh Shaw</b>
                                </Grid>
                            </Grid>
                        </div>
                        <div className="mt20">
                            <Grid container spacing={3}>
                                <Grid item xs={4}>
                                    <FormControl className="" fullWidth>
                                        <InputLabel size="small" id="selectDropdown">Business Partner Code</InputLabel>
                                        <Select size="small" id="selectDropdown" label="Select from Dropdown">
                                            <MenuItem value={1}>Dropdown 1</MenuItem>
                                            <MenuItem value={2}>Dropdown 2</MenuItem>
                                            <MenuItem value={3}>Dropdown 3</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField size="small" className="width100" label="Business Partner Name" />
                                </Grid>
                                <Grid item xs={4}>
                                    <FormControl className="" fullWidth>
                                        <InputLabel size="small" id="selectDropdown">Contact Person Name</InputLabel>
                                        <Select size="small" id="selectDropdown" label="Select from Dropdown">
                                            <MenuItem value={1}>Dropdown 1</MenuItem>
                                            <MenuItem value={2}>Dropdown 2</MenuItem>
                                            <MenuItem value={3}>Dropdown 3</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField size="small" className="width100" label="Competetor Name" />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField size="small" className="width100" label="Level of Interest" />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField size="small" className="width100" label="Potential Value" />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField size="small" className="width100" label="Weighted Amount" />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField size="small" className="width100" label="Gross Profit" />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField size="small" className="width100" label="Gross Profit %" />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField size="small" className="width100" label="Sales Oppurtunity Number" />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField size="small" className="width100" label="Sales Oppurtunity Name" />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField size="small" className="width100" label="Information Source" />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField size="small" className="width100" label="Start Date" />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField size="small" className="width100" label="Closing Date" />
                                </Grid>
                                <Grid item xs={4}>
                                    <FormControl className="" fullWidth>
                                        <InputLabel size="small" id="selectDropdown">Status</InputLabel>
                                        <Select size="small" id="selectDropdown" label="Select from Dropdown">
                                            <MenuItem value={1}>Open</MenuItem>
                                            <MenuItem value={2}>Won</MenuItem>
                                            <MenuItem value={3}>Lost</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                            </Grid>
                            <Grid className="mt10" container spacing={2}>
                                <Grid item xs={4}>
                                    <TextField size="small" className="width100" label="Completion %" />
                                </Grid>
                                <Grid item xs={8}>
                                    <TextField multiline rows={2} size="small" className="width100" label="Description" />
                                </Grid>
                            </Grid>
                        </div>

                        <div className="mt20">
                            <TableContainer>
                                <Table aria-label="simple table">
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
                                        <TableCell>
                                            <TextField size="small" className="width100" />
                                        </TableCell>
                                        <TableCell>
                                            <TextField size="small" className="width100" />
                                        </TableCell>
                                        <TableCell>
                                            <TextField size="small" className="width100" />
                                        </TableCell>
                                        <TableCell>
                                            <TextField size="small" className="width100" />
                                        </TableCell>
                                        <TableCell>
                                            <TextField size="small" className="width100" />
                                        </TableCell>
                                        <TableCell>
                                            <TextField size="small" className="width100" />
                                        </TableCell>
                                        <TableCell>
                                            <TextField size="small" className="width100" />
                                        </TableCell>
                                        <TableCell>
                                            <TextField size="small" className="width100" />
                                        </TableCell>
                                        <TableCell>
                                            <TextField size="small" className="width100" />
                                        </TableCell>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>
                        <div className="mt15" align="center">
                            <Button variant="contained" endIcon={<SendIcon />}>Update</Button>
                        </div>
                    </Paper>
                    {/* body Box end here */}
                </CardContent>
            </Card>
            {/************ body area end here ************/}
        </>
    );
};

export default AddSalesOpportunity;
