import React, { useEffect } from "react";
import About from "../Pages/About/About";
import Project from "../Pages/Project/Project";
import Home from "../Pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import './MainPage.scss'
import Contact from "../Pages/Contact/Contact";

export default function Mainpage(props) {
    const { MainPageActions, loading ,hamburger} = props
    useEffect(() => {
        setTimeout(() => {
            MainPageActions.loading()
        }, 2000)
    }, [])
    return (
        <React.Fragment>
            <section className={ hamburger?"MainPage_container menubar":"MainPage_container"}>
                {loading ?
                    <>
                        <Header {...props} /><Routes>
                            <Route path="/" element={<Home {...props} />} />
                            <Route path="/_about-me" element={<About {...props} />} />
                            <Route path="/_projects" element={<Project {...props} />} />
                            <Route path="/contact" element={<Contact {...props} />} />
                        </Routes>
                        <Footer {...props} />
                    </>
                    : <div className="loading">Loading...</div>}
            </section>

        </React.Fragment>
    );
}
