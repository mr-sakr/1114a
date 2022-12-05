import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import Home from "./Home";
import Posts from "./Posts";
import About from "./About";
import OnePost from "./OnePost";

function Navbar(){
    return(
        <div>
            <BrowserRouter>
                <nav className="navbar navbar-expand-lg bg-light">
                    <div className="container-fluid">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/posts">Posts</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                        </ul>
                    </div>
                </nav>

                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/posts" element={<Posts/>}></Route>
                    <Route path="/posts/:id" element={<OnePost/>}></Route>
                    <Route path="/about" element={<About/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default Navbar;