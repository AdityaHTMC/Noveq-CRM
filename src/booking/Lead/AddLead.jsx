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

const AddLead = () => {
    return (
        <>
            {/*********** body area start here ************/}
            <Card>
                <CardContent>
                    {/* header part work start */}
                    <h2 className="m0" style={{ color: "#00c2c1" }}>Add Lead</h2>
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
                            <Grid container spacing={4}>
                                <Grid item xs={3}>
                                    <TextField size="small" className="width100 mb20" id="outlined-basic" label="Lead Name" />
                                </Grid>
                                <Grid item xs={3}>
                                    <FormControl fullWidth>
                                        <InputLabel size="small" id="selectDropdown">Select from Dropdown</InputLabel>
                                        <Select size="small" id="selectDropdown" label="Select from Dropdown">
                                            <MenuItem value={1}>Dropdown 1</MenuItem>
                                            <MenuItem value={2}>Dropdown 2</MenuItem>
                                            <MenuItem value={3}>Dropdown 3</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={3}>
                                    <TextField size="small" className="width100 mb20" id="outlined-basic" label="Pan No" />
                                </Grid>
                                <Grid item xs={3}>
                                    <TextField size="small" className="width100 mb20" id="outlined-basic" label="Lead Code" />
                                </Grid>
                            </Grid>
                        </div>

                        {/* add item start here */}
                        <div className="grayBg mb15 p15">
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <h3 className="mt0 mb0" style={{ color: "#00c2c1" }}>Contact Person Details</h3>
                                </Grid>
                                <Grid align="right" item xs={6}>
                                    <Button variant="contained" startIcon={<AddCircleOutlineIcon />}> Add</Button>
                                </Grid>
                            </Grid>
                            <hr className="mb20" />
                            <Grid container spacing={3}>
                                <Grid item xs={4}>
                                    <TextField size="small" className="width100" id="outlined-basic" label="Contact Person ID" />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField size="small" className="width100" id="outlined-basic" label="Contact Person First  Name" />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField size="small" className="width100" id="outlined-basic" label="Contact Last Name" />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField size="small" className="width100" id="outlined-basic" label="Contact Person Dsignation/Department" />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField size="small" className="width100" id="outlined-basic" label="Contact Person Phone No." />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField size="small" className="width100" id="outlined-basic" label="Contact Person Email ID" />
                                </Grid>
                            </Grid>
                        </div>
                        {/* add item end here */}

                        {/* add item start here */}
                        <div className="grayBg mt0 p15">
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <h3 className="mt0 mb0" style={{ color: "#00c2c1" }}>Contact Person Details</h3>
                                </Grid>
                                <Grid align="right" item xs={6}>
                                    <Button color="error" variant="contained" startIcon={<DeleteForeverIcon />}> Delete</Button>
                                </Grid>
                            </Grid>
                            <hr className="mb20" />
                            <Grid container spacing={3}>
                                <Grid item xs={4}>
                                    <TextField size="small" className="width100" id="outlined-basic" label="Contact Person ID" />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField size="small" className="width100" id="outlined-basic" label="Contact Person First  Name" />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField size="small" className="width100" id="outlined-basic" label="Contact Last Name" />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField size="small" className="width100" id="outlined-basic" label="Contact Person Dsignation/Department" />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField size="small" className="width100" id="outlined-basic" label="Contact Person Phone No." />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField size="small" className="width100" id="outlined-basic" label="Contact Person Email ID" />
                                </Grid>
                            </Grid>
                        </div>
                        {/* add item end here */}

                        {/**** bill and ship grid part start ****/}
                        <Grid container spacing={2}>
                            {/* bill to part start */}
                            <Grid item xs={6}>
                                <div className="grayBg mt15 p15">
                                    <h3 className="mt0 mb0" style={{ color: "#00c2c1" }}>Bill To Address</h3>
                                    <hr className="mb20" />
                                    <TextField size="small" className="width100 mb15" id="outlined-basic" label="Address ID" />
                                    <TextField size="small" className="width100 mb15" id="outlined-basic" label="Street/PO Box" />
                                    <TextField size="small" className="width100 mb15" id="outlined-basic" label="Block" />
                                    <TextField size="small" className="width100 mb15" id="outlined-basic" label="City" />
                                    <TextField size="small" className="width100 mb15" id="outlined-basic" label="State" />
                                    <TextField size="small" className="width100 mb15" id="outlined-basic" label="ZipCode" />
                                    <TextField size="small" className="width100 mb15" id="outlined-basic" label="Country" />
                                    <FormControl fullWidth className="mb15">
                                        <InputLabel size="small" id="selectDropdown">GST Type</InputLabel>
                                        <Select size="small" id="selectDropdown" label="Select from Dropdown">
                                            <MenuItem value={1}>Dropdown 1</MenuItem>
                                            <MenuItem value={2}>Dropdown 2</MenuItem>
                                            <MenuItem value={3}>Dropdown 3</MenuItem>
                                        </Select>
                                    </FormControl>
                                    <TextField size="small" className="width100 mb15" id="outlined-basic" label="GST Number " />
                                </div>
                            </Grid>
                            {/* bill to part end */}

                            {/* ship to part start */}
                            <Grid item xs={6}>
                                <div className="grayBg mt15 p15">
                                    <h3 className="mt0 mb0" style={{ color: "#00c2c1" }}>Ship To Address</h3>
                                    <hr className="mb20" />
                                    <TextField size="small" className="width100 mb15" id="outlined-basic" label="Address ID" />
                                    <TextField size="small" className="width100 mb15" id="outlined-basic" label="Street/PO Box" />
                                    <TextField size="small" className="width100 mb15" id="outlined-basic" label="Block" />
                                    <TextField size="small" className="width100 mb15" id="outlined-basic" label="City" />
                                    <TextField size="small" className="width100 mb15" id="outlined-basic" label="State" />
                                    <TextField size="small" className="width100 mb15" id="outlined-basic" label="ZipCode" />
                                    <TextField size="small" className="width100 mb15" id="outlined-basic" label="Country" />
                                    <FormControl fullWidth className="mb15">
                                        <InputLabel size="small" id="selectDropdown">GST Type</InputLabel>
                                        <Select size="small" id="selectDropdown" label="Select from Dropdown">
                                            <MenuItem value={1}>Dropdown 1</MenuItem>
                                            <MenuItem value={2}>Dropdown 2</MenuItem>
                                            <MenuItem value={3}>Dropdown 3</MenuItem>
                                        </Select>
                                    </FormControl>
                                    <TextField size="small" className="width100 mb15" id="outlined-basic" label="GST Number" />
                                </div>
                            </Grid>
                            {/* ship to part end */}
                        </Grid>
                        {/**** bill and ship grid part end ****/}
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

export default AddLead;
