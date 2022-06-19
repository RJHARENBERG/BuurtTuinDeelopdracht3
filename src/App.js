import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route,} from 'react-router-dom';
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


function App() {
    return (
        <>
                <TopNavbar/>
                <Switch>
                    <Route exact path={"/"} component={Homepage}/>
                    <Route exact path={"/addProfile"} component={HomePageAddProfile}/>

                    <Route path={"/messagesDashboard"} component={MessagesDashboard}/>
                    <Route path={"/notifications"} component={Notifications}/>

                    <Route path={"/myProfile"} component={MyProfile}/>

                    <Route path={"/myTools"} component={MyTools}/>
                    <Route path="/lendTool" component={LendTool}/>
                    <Route path="/searchLendTool" component={SearchLendTool}/>
                    <Route path="/toolReservation" component={ToolReservation}/>

                    <Route path="/allProjects" component={AllProjects}/>
                    <Route path="/projectViewPost" component={ProjectViewPost}/>
                    <Route path="/myEnrolledProjects" component={MyEnrolledProjects}/>
                    <Route path="/myOldProjects" component={MyOldProjects}/>
                    <Route path="/addProject" component={AddProject}/>
                </Switch>
                <Footer/>
        </>
    );
}

export default App;
