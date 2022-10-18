import React from "react";

import { Home } from "./pages/Home";
import { Header } from "./components/Header";
import { About } from "./pages/About";
import { Footer } from './components/Footer';
import { FullPost } from "./pages/FullPost";


function Route({ path, element, exact}) {
    const {pathname} = window.location;
    if (exact) {
        if (path === pathname) {
            return element;
        }
    } else {
        if (pathname.includes(path)) {
            return element;
        }
    }

    return null;
}


function App() {
    
    const postId = window.location.pathname.split('/post/')[1];

    return (
        <>
            <Header />

            <Route path="/home" element={<Home/>} exact/>
            <Route path="/about" element={<About/>}/>
            <Route path="/login" element={<h2>Войти / Авторизоваться</h2>}/>
            <Route path="/post/" element={<FullPost id={postId}/>}/>
            <Footer/>
            
        </>
    );

    // if (pathname === '/home') {
    //   return (
    //     <>
    //       <Header />
    //       <Home/>
    //     </>
    //   );
    // }
    // if (pathname === '/about') {
    //   return (
    //     <>
    //       <Header/>
    //       <About />
    //     </>
    //   );
    // }
    // if (pathname === '/login') {
    //   return (
    //     <>
    //       <Header/>
    //       <h3>Авторизоваться/Войти</h3>
    //     </>
    //   );
    // }
}

export default App;