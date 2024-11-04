"use client";

import React, { useState } from 'react';
import { Nav, NavbarMenuList, NavbarMenuItem, NavbarMenuButton, NavbarMenuLink } from './Navbar.style';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../../public/Captura_de_tela_2024-05-22_101428-removebg-preview.png';
import { AiOutlineMenu } from "react-icons/ai";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <Nav>
        <Image 
          src={logo} 
          alt="logo" 
          width={100} 
          height={70} 
          priority
        />
        <NavbarMenuButton onClick={toggleMenu}>
          <AiOutlineMenu size={40} />
        </NavbarMenuButton>
        <NavbarMenuList className={isMenuOpen ? 'open' : ''}>
          <NavbarMenuItem>
            <Link href="/" passHref>
              <NavbarMenuLink>Home</NavbarMenuLink>
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link href="/login" legacyBehavior>
              <NavbarMenuLink>Login</NavbarMenuLink>
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link href="/chatbot" passHref>
              <NavbarMenuLink>Chatbot</NavbarMenuLink>
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link href="/chamados" passHref>
              <NavbarMenuLink>Chamado</NavbarMenuLink>
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link href="/integrantes" passHref>
              <NavbarMenuLink>Integrantes</NavbarMenuLink>
            </Link>
          </NavbarMenuItem>
        </NavbarMenuList>
      </Nav>
    </header>
  );
};

export default Navbar;
