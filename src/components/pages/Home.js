import React, {useEffect} from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import {getRequest} from "../../api/axiosClient";

function Home() {

    // async function fetchUser() {
    //     try {
    //         const user = await getRequest('users');
    //     } catch(error) {
    //         //Log errors
    //     }
    // }

    useEffect(() => {
        getRequest("test").then(r => console.log("r"))
    }, []);

    return (
        <>
            <HeroSection/>
            <Cards/>
            <Footer/>
        </>
    );
}

export default Home;
