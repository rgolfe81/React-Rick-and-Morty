import React from 'react';
import { Route, Routes} from 'react-router-dom';
import { NavbarExample } from '../components/navbar';
import { Add } from "./add/Add";
import { DetailView } from "./detailView/DetailView";
import { Home } from "./home/Home";
import { List } from "./list/ListCharacters";
import { Login } from "./login/Login";
import { Register } from "./register/Register";


export const MainApp = () => {
    return (
    <>
    <NavbarExample />
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/list" element={<List/>}/>
        <Route path="/add" element={<Add/>}/>
        <Route path="/view" element={<DetailView/>}/>
    </Routes>
    </>
    )
}
