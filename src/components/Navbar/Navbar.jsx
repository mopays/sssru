import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Experience } from "../Experience";

function Navbar() {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const { pathname } = useLocation();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);


  const searchBar = () => {}

  const data = [
    {
      menu:[
        {
          title: 'menu1',
          icon: 'ri-kick-fill'
        },
        {
          title: 'menu2',
          icon: 'ri-kick-fill'
        },
        {
          title: 'menu3',
          icon: 'ri-kick-line',
        },
        {
          title: 'menu4',
          icon: 'ri-kick-line',
        },
        {
          title: 'menu5',
          icon: 'ri-kick-line',
        },
        {
          title: 'menu6',
          icon: 'ri-kick-line',
        },
        {
          title: 'menu7',
          icon: 'ri-kick-line',
        }
      ]
    }
  ]


  
  // const currentUser = null

  const currentUser = {
    id: 1,
    username: "Anna",
    isSeller: true,
  };

  return (
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
           
        <Canvas shadows camera={{ position: [0, 3, 8], fov: 42 }}>
          <Experience />
          <Environment preset="city" />
        </Canvas>
           
            
          
          
        </div>
        <div className="links">

     <div id="search">
        <svg viewBox="0 0 420 60" xmlns="http://www.w3.org/2000/svg">
          <rect class="bar"/>
          
          <g class="magnifier">
            <circle class="glass"/>
            <line class="handle" x1="32" y1="32" x2="44" y2="44"></line>
          </g>

          <g class="sparks">
            <circle class="spark"/>
            <circle class="spark"/>
            <circle class="spark"/>
          </g>

          <g class="burst pattern-one">
            <circle class="particle circle"/>
            <path class="particle triangle"/>
            <circle class="particle circle"/>
            <path class="particle plus"/>
            <rect class="particle rect"/>
            <path class="particle triangle"/>
          </g>
          <g class="burst pattern-two">
            <path class="particle plus"/>
            <circle class="particle circle"/>
            <path class="particle triangle"/>
            <rect class="particle rect"/>
            <circle class="particle circle"/>
            <path class="particle plus"/>
          </g>
          <g class="burst pattern-three">
            <circle class="particle circle"/>
            <rect class="particle rect"/>
            <path class="particle plus"/>
            <path class="particle triangle"/>
            <rect class="particle rect"/>
            <path class="particle plus"/>
          </g>
        </svg>
        <input type="search" name="q" aria-label="Search for inspiration"/>
      </div>

      <div id="results">
        
      </div>

          {!currentUser?.isSeller && <span>Become a Seller</span>}
          {currentUser ? (
            <div className="user" onClick={()=>setOpen(!open)}>
              <img
                src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <span>{currentUser?.username}</span>
              {open && <div className="options">
                {currentUser.isSeller && (
                  <>
                    <Link className="link linksc" to="/mygigs">
                      Edit profile
                    </Link>
                    <Link className="link linksc" to="/cart">
                      Cart (0)
                    </Link> 
                  
                  </>
                )}
                <Link className="link linksc" to="/order">
                  Orders (0)
                </Link>
                <Link className="link linksc" to="/messages">
                  Messages (0)
                </Link>
                <hr></hr>
                <Link className="link linksc" to="/login">
                     login
                </Link>
                <Link className="link linksc" to="/register">
                     register
                </Link>
                <Link className="link linksc" to="/">
                  Logout
                </Link>
              </div>}
            </div>
          ) : (
            <>
              <span>Sign in</span>
              <Link className="link" to="/register">
                <button>Join</button>
              </Link>
            </>
          )}
        </div>
      </div>
      {(active || pathname !== "/") && (
        <>
          <div className="menu">
            <Link className="link menuLink" to="/">
             SSD
            </Link>
            <Link className="link menuLink" to="/">
              Cpu
            </Link>
            <Link className="link menuLink" to="/">
              MAINBOARD
            </Link>
            <Link className="link menuLink" to="/">
              Graphic Card (VGA)
            </Link>
            <Link className="link menuLink" to="/">
              Ram Pc
            </Link>
            <Link className="link menuLink" to="/">
              Case
            </Link>
            <Link className="link menuLink" to="/">
              Power Supply
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default Navbar;