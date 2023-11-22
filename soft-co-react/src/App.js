import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SignUp from "./components/SignUp";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Navigation from "./Navigation";
import PrivateRoutes from "./PrivateRoutes";

const defaultTheme = createTheme();

const CreatePost = lazy(() => import("./components/CreatePost"));
const AllPost = lazy(() => import("./components/AllPost"));
const AllReminder = lazy(() => import("./components/CalendarView.js"));
const AddReminder = lazy(() => import("./components/AddReminder.js"));

function App() {
  return (
    <Router>
      <ThemeProvider theme={defaultTheme}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <div>
            <Navigation />
            <Routes>
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/signup" element={<SignUp />} />
              <Route
                path="/create-post"
                element={
                  <PrivateRoutes>
                    <Suspense fallback={<div>Loading...</div>}>
                      <CreatePost />
                    </Suspense>
                  </PrivateRoutes>
                }></Route>
              <Route
                path="/all-post"
                element={
                  <PrivateRoutes>
                    <Suspense fallback={<div>Loading...</div>}>
                      <AllPost />
                    </Suspense>
                  </PrivateRoutes>
                }></Route>
              <Route
                path="/all-reminder"
                element={
                  <PrivateRoutes>
                    <Suspense fallback={<div>Loading...</div>}>
                      <AllReminder />
                    </Suspense>
                  </PrivateRoutes>
                }></Route>
              <Route
                path="/create-reminder"
                element={
                  <PrivateRoutes>
                    <Suspense fallback={<div>Loading...</div>}>
                      <AddReminder />
                    </Suspense>
                  </PrivateRoutes>
                }></Route>
            </Routes>
          </div>
        </LocalizationProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
