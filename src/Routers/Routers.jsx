import {
    createBrowserRouter,

  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import DoctorSingleDetails from "../Pages/DoctorSingleDetails/DoctorSingleDetails";
import LogIn from "../LoginMethod/LogIn";
import SingUp from "../LoginMethod/SingUp";
import Appointment from "../Pages/Appointment/Appointment";
import AppointmentForm from "../Pages/Appointment/AppointmentForm";
import Dasboard from "../Layout/Dasboard";
import AllUser from "../Pages/Dasboard/AllUser";
import AddDoctor from "../Pages/Dasboard/AddDoctor";
import ManageDoctor from "../Pages/Dasboard/ManageDoctor";
import UpdateDoctor from "../Pages/Dasboard/UpdateDoctor";
import AllDoctors from "../Pages/AllDoctors";

 export  const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children: [
        {
          path: "",
          element:<Home></Home>,
        },
        {
          path: "/alldoctor",
          element:<AllDoctors></AllDoctors>,
        },
        {
          path: "/singledetails/:id",
          element:<DoctorSingleDetails></DoctorSingleDetails>,
        },
        {
          path: "/appointment",
          element:<Appointment></Appointment>,
        },
        {
          path: "/appointmentform/:id",
          element:<AppointmentForm></AppointmentForm>,
        },
        
      ],
    },
    {
      path: "/login",
      element:<LogIn></LogIn>
    },
    {
      path: "/singup",
      element:<SingUp></SingUp>
    },
    {
      path: "/dasboard",
      element:<Dasboard></Dasboard>,
      children:[
        {
          path: "/dasboard/allusers",
          element:<AllUser></AllUser>
        },
        {
          path: "/dasboard/adddoctor",
          element:<AddDoctor></AddDoctor>
        },
        {
          path: "/dasboard/managedoctor",
          element:<ManageDoctor></ManageDoctor>
        },
        {
          path: "/dasboard/updatedoctor/:id",
          element:<UpdateDoctor></UpdateDoctor>
        },
      ]
    },
    
  ]);