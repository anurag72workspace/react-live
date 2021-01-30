import React from 'react';
import { NavLink } from 'react-router-dom';
import Common from './Common';

const web = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRejGv_HgAkB2RxV_fzFr-lpqpqrwvYcaeYbQ&usqp=CAU";

const Home = () =>{
    return (
        <>
        <Common 
       name="Grow your business with" 
       imgscr={web}
       visit="/service"
       btnname="Get Started"
        />

        </>
    );
};
export default Home;
