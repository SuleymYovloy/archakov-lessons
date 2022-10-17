import React from "react";

import { Home } from "./pages/Home";
import { Header } from "./components/Header";
import { About } from "./pages/About";
import { Footer } from './components/Footer';
import { FullPost } from "./pages/FullPost";

function App() {
    const {pathname} = window.location;
    const postId = pathname.split('/post/')[1];

    return (
        <>
            <Header />
            {pathname === "/home" && <Home />}
            {pathname === "/about" && <About />}
            {pathname === "/login" && <h2>Войти / Авторизоваться</h2>}
            {postId && <FullPost id={postId}/>}
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
