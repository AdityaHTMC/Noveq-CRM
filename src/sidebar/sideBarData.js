import React from "react";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import DvrRoundedIcon from '@mui/icons-material/DvrRounded';
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import BrandingWatermarkOutlinedIcon from '@mui/icons-material/BrandingWatermarkOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';

export const SideBarData = [
    {
        title: "Dashboard",
        icon: <HomeRoundedIcon />,
        key: "/",
    },
    {
        title: "Lead",
        icon: <DvrRoundedIcon />,
        key: "/lead",
    },
    {
        title: "Sales Opportunity",
        icon: <FactCheckOutlinedIcon />,
        key: "/slaesOpportunity",
    },
    {
        title: "Activity Window",
        icon: <BrandingWatermarkOutlinedIcon />,
        key: "/ActivityWindow",
    },
    {
        title: "Sales Quotation",
        icon: <ReceiptLongOutlinedIcon />,
        key: "/SalesQuotation",
    },
    {
        title: "Sales Report",
        icon: <ListAltOutlinedIcon />,
        key: "/salesReport",
    },
    {
        title: "Ledger",
        icon: <AssessmentOutlinedIcon />,
        key: "/ledger",
    },
    
]