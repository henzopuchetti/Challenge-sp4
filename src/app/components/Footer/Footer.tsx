"use client";

import React from 'react';
import Image from 'next/image'; // Importando o componente Image do Next.js
import { FooterContainer, FooterLista, FooterItem, FooterLink } from './Footer.style';
import logo from '../../../../public/Captura_de_tela_2024-05-22_101428-removebg-preview.png';

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Image src={logo} alt="Logo" />
      <FooterLista>
        <FooterItem><FooterLink href="/">Home</FooterLink></FooterItem>
        <FooterItem><FooterLink href="/login">Login</FooterLink></FooterItem>
        <FooterItem><FooterLink href="/chatbot">Chatbot</FooterLink></FooterItem>
        <FooterItem><FooterLink href="/chamados">Chamado</FooterLink></FooterItem>
        <FooterItem><FooterLink href="/integrantes">Integrantes</FooterLink></FooterItem>
      </FooterLista>
    </FooterContainer>
  );
}

export default Footer;
