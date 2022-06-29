import React, {useContext} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Redirect,} from 'react-router-dom';
import TopNavbar from "./components/Navbar/TopNavbar";
import Homepage from "./components/Homepage/Homepage";
import MyProfile from "./components/myProfile/MyProfile";
import LendTool from "./components/Tools/lendTool/LendTool";
import MyTools from "./components/Tools/myTools/MyTools";
import ToolReservation from "./components/Tools/toolReservation/ToolReservation";
import MessagesDashboard from "./components/Messages/MessageDashboard/MessagesDashboard";
import Notifications from "./components/notifications/Notifications";
import AllProjects from "./components/Projects/allProjects/AllProjects";
import MyEnrolledProjects from "./components/Projects/myEnrolledProjects/myEnrolledProjects";
import MyOldProjects from "./components/Projects/myOldProjects/MyOldProjects";
import AddProject from "./components/Projects/addProjects/AddProject";
import Footer from "./components/footer/Footer";
import SearchLendTool from "./components/Tools/searchLendTool/SearchLendTool";
import ProjectSingelPost from "./components/Projects/projectViewPost/projectSingelPost/projectSingelPost";
import ProjectViewPost from "./components/Projects/projectViewPost/projectViewPost";
import HomePageAddProfile from "./components/Homepage/homePageAddProfile/homePageAddProfile";
import {AuthContext}from "./context/AuthContext";



function App() {
    const { isAuth } = useContext(AuthContext);

    return (
        <>
                <TopNavbar/>
                <Switch>
                    <Route exact path={"/"} component={Homepage}/>
                    <Route exact path={"/addProfile"} component={HomePageAddProfile}/>

                    <Route path={"/messagesDashboard"}>
                        {isAuth ? <MessagesDashboard /> : <Redirect to="/" />}
                    </Route>
                    <Route path={"/notifications"}>
                        {isAuth ? <Notifications /> : <Redirect to="/" />}
                    </Route>

                    <Route path={"/myProfile"}>
                        {isAuth ? <MyProfile /> : <Redirect to="/" />}
                    </Route>
                    <Route path={"/myTools"}>
                        {isAuth ? <MyTools /> : <Redirect to="/" />}
                    </Route>
                    <Route path="/lendTool">
                        {isAuth ? <LendTool /> : <Redirect to="/" />}
                    </Route>
                    <Route path="/searchLendTool">
                        {isAuth ? <SearchLendTool /> : <Redirect to="/" />}
                    </Route>
                    <Route path="/toolReservation">
                        {isAuth ? <ToolReservation /> : <Redirect to="/" />}
                    </Route>

                    <Route path="/allProjects">
                        {isAuth ? <AllProjects /> : <Redirect to="/" />}
                    </Route>
                    <Route path="/projectViewPost">
                        {isAuth ? <ProjectViewPost /> : <Redirect to="/" />}
                    </Route>
                    <Route path="/myEnrolledProjects">
                        {isAuth ? <MyEnrolledProjects /> : <Redirect to="/" />}
                    </Route>
                    <Route path="/myOldProjects">
                        {isAuth ? <MyOldProjects /> : <Redirect to="/" />}
                    </Route>
                    <Route path="/addProject">
                        {isAuth ? <AddProject /> : <Redirect to="/" />}
                    </Route>
                </Switch>
                {/*<Footer/>*/}
        </>
    );
}

export default App;
