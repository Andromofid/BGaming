import React from "react";
import Nav from "./Navbar/Nav"
import Main from "./Main/Main";
import Tranding from "./Trending/Trending";
import Search from "./Search/Search";
import Coments from "./Comments/Coments";
import Footer from "./Footer/Footer";
const App =()=>{
    return (
        <>
        <Nav/>
        <Main/>
        <Tranding/>
        <Search/>
        <Coments/>
        <Footer/>
        </>
    )

}
export default App;