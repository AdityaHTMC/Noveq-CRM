//import logo from './logo.svg';
import './App.css';

import Header from './header/Header';
import React from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';

import Box from '@mui/material/Box';
import ScrollToTop from './ScrollToTop/ScrollToTop.jsx';
import SideBar from './sidebar/SideBar.jsx';
import { CssBaseline } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import MainScreen from './pages/MainScreen.jsx';

import CategoryDetails from './booking/CategoryDetails.jsx';
import Login from './login/Login.jsx';
import MyProfile from './my-profile/MyProfile.jsx';
import Lead from './booking/Lead.jsx';
import SecondarySales from './booking/Ledger.jsx';
import SalesReturn from './booking/SalesOpportunity.jsx';
import ActivityWindow from './booking/ActivityWindow.jsx';
import DealerLedger from './booking/SalesReport.jsx';

import SalesQuotation from './booking/SalesQuotation.jsx';
import Ledger from './booking/Ledger.jsx';
import AddLead from './booking/AddLead.jsx';
import ViewLead from './booking/ViewLead.jsx';
import SalesOpportunity from './booking/SalesOpportunity.jsx';
import SalesReport from './booking/SalesReport.jsx';
import AddSalesOpportunity from './booking/AddSalesOpportunity.jsx';
import ViewSalesOpportunity from './booking/ViewSalesOpportunity.jsx';
import AddActivityWindow from './booking/AddActivityWindow.jsx';
import ViewActivityWindow from './booking/ViewActivityWindow.jsx';


const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

function App() {
  const theme = useTheme();
  const location = useLocation()
  const isloginpage = location.pathname === '/login'
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };




  return (
    <>
      {/* main wrapper start */}
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />

        {/****** top bar part start *******/}
        {
          !isloginpage ?
            <>
              <Header open={open} setOpen={setOpen} />

              <SideBar open={open} setOpen={setOpen} />
            </>
            :
            null
        }
        {/******* sidebar part end *******/}

        {/******* body part start *******/}
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <Routes>
            <Route exact path='/' element={<MainScreen />} />
            <Route path='/lead' element={<Lead/>} />
            <Route path='/slaesOpportunity' element={<SalesOpportunity />} />
            <Route path='/secondarySales' element={<Ledger />} />
            <Route path='/categoryDetails' element={<CategoryDetails />} />
            <Route path='/ActivityWindow' element={<ActivityWindow />} />
            <Route path='/salesReport' element={<SalesReport/>} />
            <Route path='/SalesQuotation' element={<SalesQuotation/>} />
            <Route path='/ledger' element={<Ledger/>} />
            <Route path='/Login' element={<Login />} />
            <Route path='/MyProfile' element={<MyProfile />} />
            <Route path='/AddLead' element={<AddLead />} />
            <Route path='/ViewLead' element={<ViewLead />} />
            <Route path='/AddSalesOpportunity' element={<AddSalesOpportunity />} />
            <Route path='/ViewSalesOpportunity' element={<ViewSalesOpportunity />} />
            <Route path='/AddActivityWindow' element={<AddActivityWindow />} />
            <Route path='/ViewActivityWindow' element={<ViewActivityWindow />} />
          </Routes>
        </Box>
        {/******* body part end *******/}

      </Box>
      {/* main wrapper start */}
    </>
  );
}

export default App;
