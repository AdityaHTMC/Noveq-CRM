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
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import { Link } from "react-router-dom";

const SalesReport = () => {
    return (
        <>
            {/*********** body area start here ************/}
            <Card>
                <CardContent>
                    {/* header part work start */}
                    <h2 className="m0" style={{ color: "#00c2c1" }}>Add Activity Window</h2>
                    <hr />
                    {/* header part work end */}

                    {/* table work start here */}
                    <div className="mt20">

                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <h4 className="mt0">Sales Employee Code : #1245EXNLMO</h4>
                            </Grid>
                            <Grid item xs={6}>
                                <h4 className="mt0">Sales Employee Name : Raju Sharma</h4>
                            </Grid>
                        </Grid>

                        <Grid container spacing={3}>
                            <Grid item xs={4}>
                                <TextField size="small" className="width100" label="Activity" />
                            </Grid>
                            <Grid item xs={4}>
                                <TextField size="small" className="width100" label="Parent Activity" />
                            </Grid>
                            <Grid item xs={4}>
                                <FormControl className="" fullWidth>
                                    <InputLabel size="small" id="selectDropdown">Contact Person ID</InputLabel>
                                    <Select size="small" id="selectDropdown" label="Select from Dropdown">
                                        <MenuItem value={1}>Dropdown 1</MenuItem>
                                        <MenuItem value={2}>Dropdown 2</MenuItem>
                                        <MenuItem value={3}>Dropdown 3</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={4}>
                                <TextField size="small" className="width100" label="Start Date" />
                            </Grid>
                            <Grid item xs={4}>
                                <TextField size="small" className="width100" label="End Date" />
                            </Grid>
                            <Grid item xs={4}>
                                <TextField size="small" className="width100" label="Document Type" />
                            </Grid>
                            <Grid item xs={4}>
                                <TextField size="small" className="width100" label="Document No" />
                            </Grid>
                            <Grid item xs={4}>
                                <TextField size="small" className="width100" label="Activity Type" />
                            </Grid>
                            <Grid item xs={4}>
                                <TextField size="small" className="width100" label="Contact Person" />
                            </Grid>
                            <Grid item xs={4}>
                                <TextField size="small" className="width100" label="Contact Person" />
                            </Grid>
                            <Grid item xs={4}>
                                <TextField size="small" className="width100" label="Contact Number" />
                            </Grid>
                            <Grid item xs={4}>
                                <TextField size="small" className="width100" label="Start Time" />
                            </Grid>
                            <Grid item xs={4}>
                                <TextField size="small" className="width100" label="End Time" />
                            </Grid>
                            <Grid item xs={4}>
                                <TextField size="small" className="width100" label="Document Attachment" />
                            </Grid>
                            <Grid item xs={4}>
                                <Button variant="contained" endIcon={<SendIcon />}>Update</Button>
                            </Grid>
                        </Grid>
                    </div>
                    {/* table work end here */}
                </CardContent>
            </Card>
            {/************ body area end here ************/}
        </>
    );
};

export default SalesReport;
