import React, {createContext, useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";
import jwtDecode from "jwt-decode";
import axios from "axios";


export const AuthContext = createContext({});

function AuthContextProvider({ children }) {

    const [auth, toggleAuth] = useState({
        isAut: false,
        user:null,
        status: "pending"
    });
    const history = useHistory()

    useEffect(()=>{
        const token = localStorage.getItem("token");
        const exp = localStorage.getItem("exp");
        console.log(exp)
        let currentDate = new Date();
        console.log(currentDate.getTime())

        if (token && exp * 1000 < currentDate.getTime()){
            async function getUserData(){
                const decodedToken = jwtDecode(token)
                try {
                    const response = await axios.get(`http://localhost:8080/findUserByUsername/${decodedToken.sub}`,{
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: `Bearer ${token}`,
                        }
                    })
                    console.log(response.data)
                    toggleAuth({
                        isAut: true,
                        user:{
                            username: response.data.username,
                        },
                        status: "done",
                    })
                }catch (e){
                    console.log(e)
                    toggleAuth({
                      ...auth,
                        status: 'error',
                    });
                    localStorage.clear()
                    console.log(e)
                }
            }
            getUserData()
        }else {
            toggleAuth({
               ...auth,
                status: "done",
            });
        }
    },[])


    function login(token){

        console.log(token)
        const decodedToken = jwtDecode(token)
        console.log(decodedToken)
        localStorage.setItem("token", token);
        localStorage.setItem("exp",decodedToken.exp)
        console.log("De gebruiker is ingelogd!");
        toggleAuth({
            ...auth,
            isAut: true,
            user:{
              username: decodedToken.sub
            } ,
            status: "done",
        });
        history.push("/allProjects");
    }

    function logout(){
        console.log("De gebruiker is uitgelogd!");
        toggleAuth({
            isAut: false,
            user: null,
            status: "done",
        });
        history.push("/");
    }

    const contextData ={
        isAuth: auth.isAut,
        user: auth.user,
        login: login,
        logout:logout,
    };
    return(
        <AuthContext.Provider value={contextData}>
            {auth.status === 'done' && children}
            {auth.status === 'pending' && <p>Loading...</p>}
            {auth.status === 'error' && <p>Error! Refresh de pagina!</p>}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;