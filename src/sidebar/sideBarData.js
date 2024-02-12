import React from "react";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import HomeIcon from '@mui/icons-material/Home';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import TroubleshootOutlinedIcon from '@mui/icons-material/TroubleshootOutlined';
import StyleIcon from '@mui/icons-material/Style';

export const SideBarData = [
    {
        title: "Dashboard",
        icon: <HomeIcon />,
        key: "/",
    },
    {
        title: "Lead",
        icon: <CalendarMonthOutlinedIcon />,
        key: "/lead",
    },
    {
        title: "Sales Opportunity",
        icon: <CalendarMonthOutlinedIcon />,
        key: "/slaesOpportunity",
    },
    {
        title: "Activity Window",
        icon: <HandshakeOutlinedIcon />,
        key: "/ActivityWindow",
    },
    {
        title: "Sales Quotation",
        icon: <TroubleshootOutlinedIcon />,
        key: "/SalesQuotation",
    },
    {
        title: "Sales Report",
        icon: <StyleIcon />,
        key: "/salesReport",
    },
    {
        title: "Ledger",
        icon: <StyleIcon />,
        key: "/ledger",
    },
    
]