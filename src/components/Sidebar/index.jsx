import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AssessmentIcon from '@mui/icons-material/Assessment';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import PsychologyIcon from "@mui/icons-material/Psychology";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import LogoutIcon from "@mui/icons-material/Logout";

const Sidebar = () => {
  return (
    <div className=" flex-1 min-h-dvh bg-white ">
      <div className="flex justify-center align-center h-50px border-r-[0.5px] border-solid border-[rgb(230,227,227)] ">
        <span className="font-bold font-xl text-[#6439ff]">Admin</span>
      </div>
      <hr className="h-0 border-[0.5px] border-solid border-[rgb(230,227,227)]" />
      <div className="pt-2.5">
        <ul className="list-none">
          <li>
            <DashboardIcon />
            <span>Dashboard</span>
          </li>
          <li>
            <PersonOutlineOutlinedIcon />
            <span>Users</span>
          </li>
          <li>
            <StoreOutlinedIcon />
            <span>Products</span>
          </li>
          <li>
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingIcon />
            <span>Delivery</span>
          </li>

          <li>
            <AssessmentIcon />
            <span>stats</span>
          </li>

          <li>
            <NotificationsNoneIcon />
            <span>Notifications</span>
          </li>
          <li>
            <MonitorHeartIcon />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyIcon/>
            <span>Logs</span>
          </li>
          <li>
            <SettingsOutlinedIcon/>
            <span>Settings</span>
          </li>
          <li>
              <AccountCircleRoundedIcon/>
            <span>Profile</span>
          </li>
          <li>
              <LogoutIcon/>
            <span>Logout</span>
          </li>
        </ul>
      </div>

      <div className="bottom">color-options</div>
    </div>
  );
}

export default Sidebar