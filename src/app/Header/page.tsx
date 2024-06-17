'use client'
import React, { useState } from "react";
import Logo from "./../../../public/assets/GroupLogo_SalesForce.svg"
import Menu from "./imgs/Menu.svg"
import "./css/Header.css"
import Link from "next/link";

const Header = () =>{
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
      setMenuOpen(!menuOpen);
  };

  return(
    <>
      <header>
        <section className="section-principal-header">
          <label className="hamburger">
            <input type="checkbox" onClick={toggleMenu}/>
            <svg viewBox="0 0 32 32" className="">
              <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
              <path className="line" d="M7 16 27 16"></path>
            </svg>
          </label>
          <div className="div-principal-header">
            <div className="opcoes-logo-header">
              <Link href="/Questionario"><h1 className="opcoes-header">TRAIL FINDER</h1></Link>
              <Link href="/Pagina_Inicial"><img className="LogoSalesForce-header" src={ Logo.src}/></Link>
              <Link href="https://trailhead.salesforce.com/pt-BR/trailblazercommunity" target="_blank"><h1 className="opcoes-header">TRAIL BLAZERS</h1></Link>
            </div>
          </div> 
          <div className={`nav-list ${menuOpen ? 'open' : ''}`}>
            <ul>
              <li className="nav-item"><Link href="/Pagina_Inicial" className="nav-link">Página Inicial</Link></li>
              <li className="nav-item"><Link href="/Personagens" className="nav-link">Personagens</Link></li>
              <li className="nav-item"><Link href="/TrailFinder" className="nav-link">Trail Finder</Link></li>
            </ul>
          </div>
        </section>
      </header>
    </>
  );
}

export default Header;
