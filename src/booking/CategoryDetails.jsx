import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import CloudDownloadOutlinedIcon from '@mui/icons-material/CloudDownloadOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { Link } from 'react-router-dom';
import { pink } from '@mui/material/colors';
const CategoryDetails = () => {
  return (
    <>
      {/*********** body area start here ************/}
      <Card>
        <CardContent>

          {/* header part work start */}
          <Grid className='mb10' container>
            {/* text head start */}
            <Grid item xs={4}>
              <h2 className='m0' style={{ color: "#00c2c1" }}>Category Details</h2>
            </Grid>
            {/* text head end */}

            {/* Radio box part start */}
            <Grid className='text-right' item md={5}>
              <FormControl>
                <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
                  <FormControlLabel value="PatientNo" control={
                    <Radio
                      sx={{
                        "& .MuiSvgIcon-root": {
                          fontSize: 26,
                          color: "#00c2c1",

                          "&.Mui-checked": {
                            color: "#00c2c1",
                          },
                        },
                      }}
                    />
                  } label="Number" />
                  <FormControlLabel value="BookingID" control={
                    <Radio
                      sx={{
                        "& .MuiSvgIcon-root": {
                          fontSize: 26,
                          color: "#00c2c1",

                          "&.Mui-checked": {
                            color: "#00c2c1",
                          },
                        },
                      }}
                    />
                  } label="Name" />
                  <FormControlLabel value="PartnerNumber" control={
                    <Radio
                      sx={{
                        "& .MuiSvgIcon-root": {
                          fontSize: 26,
                          color: "#00c2c1",

                          "&.Mui-checked": {
                            color: "#00c2c1",
                          },
                        },
                      }}
                    />
                  } label="Category" />
                </RadioGroup>
              </FormControl>
            </Grid>
            {/* Radio box part end */}

            {/* search box start */}
            <Grid item md={3}>
              <div className='searchBox'>
                <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search...." inputProps={{ 'aria-label': 'Search' }} />
                <IconButton type="button" sx={{ p: '10px' }} aria-label="search"> <SearchIcon /> </IconButton>
              </div>
            </Grid>
            {/* search box end */}
          </Grid>
          {/* header part work end */}

          {/* table work start here */}
          <Paper className='customTable' sx={{ width: '100%' }}>
            <TableContainer sx={{ maxHeight: 385 }}>
              <Table stickyHeader aria-label="sticky">
                <TableHead >
                  <TableRow
                    sx={{
                      backgroundColor: "red",
                      // borderBottom: "2px solid black",
                      "& th": {
                        fontSize: "0.875rem",
                        color: "#00c2c1"
                      }
                    }}
                  >
                    <TableCell>Name</TableCell>
                    <TableCell>Number</TableCell>
                    <TableCell>Type</TableCell>
                    <TableCell>Doctor Name</TableCell>
                    <TableCell>Diagnosis Name</TableCell>
                    <TableCell>Diagnosis Name</TableCell>
                    <TableCell>A</TableCell>
                    <TableCell>B</TableCell>
                    <TableCell>C</TableCell>
                    <TableCell>D</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow hover>
                    <TableCell>TCDIGDUR00000001</TableCell>
                    <TableCell>Rahul</TableCell>
                    <TableCell>7886908756</TableCell>
                    <TableCell>Ashok Roy</TableCell>
                    <TableCell>Durga Medical</TableCell>
                    <TableCell>9887XXXX48</TableCell>
                    <TableCell>Ashok Roy</TableCell>
                    <TableCell>Durga Medical</TableCell>
                    <TableCell>9887XXXX48</TableCell>
                    <TableCell>9887XXXX48</TableCell>
                  </TableRow>
                  <TableRow hover>
                    <TableCell>TCDIGDUR00000001</TableCell>
                    <TableCell>Rahul</TableCell>
                    <TableCell>7886908756</TableCell>
                    <TableCell>Ashok Roy</TableCell>
                    <TableCell>Durga Medical</TableCell>
                    <TableCell>9887XXXX48</TableCell>
                    <TableCell>Ashok Roy</TableCell>
                    <TableCell>Durga Medical</TableCell>
                    <TableCell>9887XXXX48</TableCell>
                    <TableCell>9887XXXX48</TableCell>
                  </TableRow>
                  <TableRow hover>
                    <TableCell>TCDIGDUR00000001</TableCell>
                    <TableCell>Rahul</TableCell>
                    <TableCell>7886908756</TableCell>
                    <TableCell>Ashok Roy</TableCell>
                    <TableCell>Durga Medical</TableCell>
                    <TableCell>9887XXXX48</TableCell>
                    <TableCell>Ashok Roy</TableCell>
                    <TableCell>Durga Medical</TableCell>
                    <TableCell>9887XXXX48</TableCell>
                    <TableCell>9887XXXX48</TableCell>
                  </TableRow>
                  <TableRow hover>
                    <TableCell>TCDIGDUR00000001</TableCell>
                    <TableCell>Rahul</TableCell>
                    <TableCell>7886908756</TableCell>
                    <TableCell>Ashok Roy</TableCell>
                    <TableCell>Durga Medical</TableCell>
                    <TableCell>9887XXXX48</TableCell>
                    <TableCell>Ashok Roy</TableCell>
                    <TableCell>Durga Medical</TableCell>
                    <TableCell>9887XXXX48</TableCell>
                    <TableCell>9887XXXX48</TableCell>
                  </TableRow>
                  <TableRow hover>
                    <TableCell>TCDIGDUR00000001</TableCell>
                    <TableCell>Rahul</TableCell>
                    <TableCell>7886908756</TableCell>
                    <TableCell>Ashok Roy</TableCell>
                    <TableCell>Durga Medical</TableCell>
                    <TableCell>9887XXXX48</TableCell>
                    <TableCell>Ashok Roy</TableCell>
                    <TableCell>Durga Medical</TableCell>
                    <TableCell>9887XXXX48</TableCell>
                    <TableCell>9887XXXX48</TableCell>
                  </TableRow>
                  <TableRow hover>
                    <TableCell>TCDIGDUR00000001</TableCell>
                    <TableCell>Rahul</TableCell>
                    <TableCell>7886908756</TableCell>
                    <TableCell>Ashok Roy</TableCell>
                    <TableCell>Durga Medical</TableCell>
                    <TableCell>9887XXXX48</TableCell>
                    <TableCell>Ashok Roy</TableCell>
                    <TableCell>Durga Medical</TableCell>
                    <TableCell>9887XXXX48</TableCell>
                    <TableCell>9887XXXX48</TableCell>
                  </TableRow>
                  <TableRow hover>
                    <TableCell>TCDIGDUR00000001</TableCell>
                    <TableCell>Rahul</TableCell>
                    <TableCell>7886908756</TableCell>
                    <TableCell>Ashok Roy</TableCell>
                    <TableCell>Durga Medical</TableCell>
                    <TableCell>9887XXXX48</TableCell>
                    <TableCell>Ashok Roy</TableCell>
                    <TableCell>Durga Medical</TableCell>
                    <TableCell>9887XXXX48</TableCell>
                    <TableCell>9887XXXX48</TableCell>
                  </TableRow>
                  <TableRow hover>
                    <TableCell>TCDIGDUR00000001</TableCell>
                    <TableCell>Rahul</TableCell>
                    <TableCell>7886908756</TableCell>
                    <TableCell>Ashok Roy</TableCell>
                    <TableCell>Durga Medical</TableCell>
                    <TableCell>9887XXXX48</TableCell>
                    <TableCell>Ashok Roy</TableCell>
                    <TableCell>Durga Medical</TableCell>
                    <TableCell>9887XXXX48</TableCell>
                    <TableCell>9887XXXX48</TableCell>
                  </TableRow>
                  <TableRow hover>
                    <TableCell>TCDIGDUR00000001</TableCell>
                    <TableCell>Rahul</TableCell>
                    <TableCell>7886908756</TableCell>
                    <TableCell>Ashok Roy</TableCell>
                    <TableCell>Durga Medical</TableCell>
                    <TableCell>9887XXXX48</TableCell>
                    <TableCell>Ashok Roy</TableCell>
                    <TableCell>Durga Medical</TableCell>
                    <TableCell>9887XXXX48</TableCell>
                    <TableCell>9887XXXX48</TableCell>
                  </TableRow>
                  <TableRow hover>
                    <TableCell>TCDIGDUR00000001</TableCell>
                    <TableCell>Rahul</TableCell>
                    <TableCell>7886908756</TableCell>
                    <TableCell>Ashok Roy</TableCell>
                    <TableCell>Durga Medical</TableCell>
                    <TableCell>9887XXXX48</TableCell>
                    <TableCell>Ashok Roy</TableCell>
                    <TableCell>Durga Medical</TableCell>
                    <TableCell>9887XXXX48</TableCell>
                    <TableCell>9887XXXX48</TableCell>
                  </TableRow>
                  <TableRow hover>
                    <TableCell>TCDIGDUR00000001</TableCell>
                    <TableCell>Rahul</TableCell>
                    <TableCell>7886908756</TableCell>
                    <TableCell>Ashok Roy</TableCell>
                    <TableCell>Durga Medical</TableCell>
                    <TableCell>9887XXXX48</TableCell>
                    <TableCell>Ashok Roy</TableCell>
                    <TableCell>Durga Medical</TableCell>
                    <TableCell>9887XXXX48</TableCell>
                    <TableCell>9887XXXX48</TableCell>
                  </TableRow>
                  <TableRow hover>
                    <TableCell>TCDIGDUR00000001</TableCell>
                    <TableCell>Rahul</TableCell>
                    <TableCell>7886908756</TableCell>
                    <TableCell>Ashok Roy</TableCell>
                    <TableCell>Durga Medical</TableCell>
                    <TableCell>9887XXXX48</TableCell>
                    <TableCell>Ashok Roy</TableCell>
                    <TableCell>Durga Medical</TableCell>
                    <TableCell>9887XXXX48</TableCell>
                    <TableCell>9887XXXX48</TableCell>
                  </TableRow>
                  <TableRow hover>
                    <TableCell>TCDIGDUR00000001</TableCell>
                    <TableCell>Rahul</TableCell>
                    <TableCell>7886908756</TableCell>
                    <TableCell>Ashok Roy</TableCell>
                    <TableCell>Durga Medical</TableCell>
                    <TableCell>9887XXXX48</TableCell>
                    <TableCell>Ashok Roy</TableCell>
                    <TableCell>Durga Medical</TableCell>
                    <TableCell>9887XXXX48</TableCell>
                    <TableCell>9887XXXX48</TableCell>
                  </TableRow>
                  <TableRow hover>
                    <TableCell>TCDIGDUR00000001</TableCell>
                    <TableCell>Rahul</TableCell>
                    <TableCell>7886908756</TableCell>
                    <TableCell>Ashok Roy</TableCell>
                    <TableCell>Durga Medical</TableCell>
                    <TableCell>9887XXXX48</TableCell>
                    <TableCell>Ashok Roy</TableCell>
                    <TableCell>Durga Medical</TableCell>
                    <TableCell>9887XXXX48</TableCell>
                    <TableCell>9887XXXX48</TableCell>
                  </TableRow>
                  <TableRow hover>
                    <TableCell>TCDIGDUR00000001</TableCell>
                    <TableCell>Rahul</TableCell>
                    <TableCell>7886908756</TableCell>
                    <TableCell>Ashok Roy</TableCell>
                    <TableCell>Durga Medical</TableCell>
                    <TableCell>9887XXXX48</TableCell>
                    <TableCell>Ashok Roy</TableCell>
                    <TableCell>Durga Medical</TableCell>
                    <TableCell>9887XXXX48</TableCell>
                    <TableCell>9887XXXX48</TableCell>
                  </TableRow>
                  <TableRow hover>
                    <TableCell>TCDIGDUR00000001</TableCell>
                    <TableCell>Rahul</TableCell>
                    <TableCell>7886908756</TableCell>
                    <TableCell>Ashok Roy</TableCell>
                    <TableCell>Durga Medical</TableCell>
                    <TableCell>9887XXXX48</TableCell>
                    <TableCell>Ashok Roy</TableCell>
                    <TableCell>Durga Medical</TableCell>
                    <TableCell>9887XXXX48</TableCell>
                    <TableCell>9887XXXX48</TableCell>
                  </TableRow>
                  <TableRow hover>
                    <TableCell>TCDIGDUR00000001</TableCell>
                    <TableCell>Rahul</TableCell>
                    <TableCell>7886908756</TableCell>
                    <TableCell>Ashok Roy</TableCell>
                    <TableCell>Durga Medical</TableCell>
                    <TableCell>9887XXXX48</TableCell>
                    <TableCell>Ashok Roy</TableCell>
                    <TableCell>Durga Medical</TableCell>
                    <TableCell>9887XXXX48</TableCell>
                    <TableCell>9887XXXX48</TableCell>
                  </TableRow>
                  <TableRow hover>
                    <TableCell>TCDIGDUR00000001</TableCell>
                    <TableCell>Rahul</TableCell>
                    <TableCell>7886908756</TableCell>
                    <TableCell>Ashok Roy</TableCell>
                    <TableCell>Durga Medical</TableCell>
                    <TableCell>9887XXXX48</TableCell>
                    <TableCell>Ashok Roy</TableCell>
                    <TableCell>Durga Medical</TableCell>
                    <TableCell>9887XXXX48</TableCell>
                    <TableCell>9887XXXX48</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            <Stack className='rightPagination mt10' spacing={2}>
              <Pagination color="primary" count={10} shape="rounded" />
            </Stack>
          </Paper>
          {/* table work end here */}
        </CardContent>
      </Card>
      {/************ body area end here ************/}
    </>
  )
}

export default CategoryDetails