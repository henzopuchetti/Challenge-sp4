"use client";

import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { NavChatbotA, NavChatbotPerfil, NavChatbotBotao } from './NavChatbot.style';
import Image from 'next/image';
import img from '../../../../public/Ellipse 1.png';

const NavChatbot: React.FC = () => {
  return (
    <NavChatbotA>
      <NavChatbotPerfil>
        <Image src={img} alt="Chatbot Profile" width={50} height={50} />
        <p>Chatbot HH</p>
      </NavChatbotPerfil>
      <NavChatbotBotao href="/"> 
        <AiOutlineClose size={40} /> 
      </NavChatbotBotao>
    </NavChatbotA>
  );
};

export default NavChatbot;
