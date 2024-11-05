"use client";

import Link from 'next/link'; // Importando o Link do Next.js
import React from 'react';
import { CardContainer, CardServicoBotao, CardServicoDescricao, CardServicoTitulo } from './CardServicos.style';

interface CardServicoProps {
  titulo: string;
  descricao: string;
  corDeFundo: string;
  corTexto: string;
  botaoTexto: string;
  linkDestino: string;
}

const CardServico: React.FC<CardServicoProps> = ({ titulo, descricao, corDeFundo, corTexto, botaoTexto, linkDestino }) => {
  return (
    <CardContainer corDeFundo={corDeFundo} corTexto={corTexto}>
      <CardServicoTitulo>{titulo}</CardServicoTitulo>
      <CardServicoDescricao>{descricao}</CardServicoDescricao>
      <Link href={linkDestino} passHref>
        <CardServicoBotao corDeFundo={corTexto} corTexto={corDeFundo}>
          {botaoTexto}
        </CardServicoBotao>
      </Link>
    </CardContainer>
  );
};

export default CardServico;
