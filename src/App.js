import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import QuetesPage from './Pages/QuetesPage';
import UsersPage from './Pages/UsersPage';
import PrivateRoute from './Component/PrivateRoute';
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer/Footer";
import SignUpPage from "./Pages/SignUpPage";
import MesQuetesPage from "./Pages/MesQuetesPage";

const App = () => {
    return (
        <div className="d-flex flex-column min-vh-100">
            <Router>
                <Navbar/>
                <div className="flex-grow-1">
                    <Routes>

                        <Route path="/" element={<HomePage/>}/>
                        <Route path="/login" element={<LoginPage/>}/>
                        <Route path="/register" element={<SignUpPage/>}/>

                        <Route
                            path="/quetes"
                            element={
                                <PrivateRoute>
                                    <QuetesPage/>
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path="/users"
                            element={
                                <PrivateRoute>
                                    <UsersPage/>
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path="/mesquetes"
                            element={
                                <PrivateRoute>
                                    <MesQuetesPage/>
                                </PrivateRoute>
                            }
                        />
                    </Routes>
                </div>
                    <Footer/>
            </Router>
        </div>
);
};

export default App;
