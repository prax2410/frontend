import React from "react";
import "./css/styles.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Signup from "./user/Signup";
import Signin from "./user/Signin";
import Home from "./core/Home";
import PrivateRoute from "./auth/PrivateRoute";
import Dashboard from "./user/UserDashboard";
import AdminRoute from "./auth/AdminRoute";
import AdminDashboard from "./user/AdminDashboard";
import AddCategory from "./admin/AddCategory";
import AddProduct from "./admin/AddProduct";
import Gallery from "./core/Gallery";
import Product from "./core/Product";
import Cart from "./core/Cart";
import Orders from "./admin/Orders";
import Profile from "./user/Profile";
import ManageProducts from "./admin/ManageProducts";
import UpdateProduct from "./admin/UpdateProduct";

// Pages
import CancerAwareness from "./core/pages/CancerAwareness";
import ChildCare from "./core/pages/ChildCare";
import ConstructionMaterials from "./core/pages/ConstructionMaterials";
import Dentist from "./core/pages/Dentist";
import Finance from "./core/pages/Finance";
import FoodAndBeverages from "./core/pages/FoodAndBeverages";
import MentalHealth from "./core/pages/MentalHealth";
import Psychiatrist from "./core/pages/Psychiatrist";
import RealEstate from "./core/pages/RealEstate";
import Sales from "./core/pages/Sales";
import VirtualClassroom from "./core/pages/VirtualClassroom";
import Wellness from "./core/pages/Wellness";
import Yoga from "./core/pages/Yoga";
import AboutUs from "./core/pages/AboutUs"

import AppointmentBookingForm from "./core/pages/AppointmentBookingForm";

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/gallery" exact component={Gallery} />
                <Route path="/signin" exact component={Signin} />
                <Route path="/signup" exact component={Signup} />
                <PrivateRoute
                    path="/user/dashboard"
                    exact
                    component={Dashboard}
                />
                <AdminRoute
                    path="/admin/dashboard"
                    exact
                    component={AdminDashboard}
                />
                <AdminRoute
                    path="/create/category"
                    exact
                    component={AddCategory}
                />
                <AdminRoute
                    path="/create/product"
                    exact
                    component={AddProduct}
                />
                <Route path="/product/:productId" exact component={Product} />
                <Route path="/cart" exact component={Cart} />
                <AdminRoute path="/admin/orders" exact component={Orders} />
                <PrivateRoute
                    path="/profile/:userId"
                    exact
                    component={Profile}
                />
                <PrivateRoute
                    path="/admin/products"
                    exact
                    component={ManageProducts}
                />
                <AdminRoute
                    path="/admin/products"
                    exact
                    component={ManageProducts}
                />

                {/* New Pages Routes */}
                <Route path="/cancerawareness" exact component={CancerAwareness} />
                <Route path="/childcare" exact component={ChildCare} />
                <Route path="/constructionmaterials" exact component={ConstructionMaterials} />
                <Route path="/dentist" exact component={Dentist} />
                <Route path="/finance" exact component={Finance} />
                <Route path="/foodandbeverages" exact component={FoodAndBeverages} />
                <Route path="/mentalhealth" exact component={MentalHealth} />
                <Route path="/psychiatrist" exact component={Psychiatrist} />
                <Route path="/realestate" exact component={RealEstate} />
                <Route path="/sales" exact component={Sales} />
                <Route path="/virtualclassroom" exact component={VirtualClassroom} />
                <Route path="/wellness" exact component={Wellness} />
                <Route path="/yoga" exact component={Yoga} />
                <Route path="/aboutus" exact component={AboutUs} />
                <Route path="/appointmentBookingForm" exact component={AppointmentBookingForm} />            

            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
