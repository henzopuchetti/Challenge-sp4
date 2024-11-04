"use client";

import React from 'react';
import { IntegrantesMain, IntegrantesH2, IntegrantesContainer, IntegrantesDiv, IntegrantesParagrafo } from './DadosIntegrantes.style';
import Image from 'next/image';
import ImgIntegrante1 from "../../../../public/MicrosoftTeams-image (3).png";
import ImgIntegrante2 from "../../../../public/MicrosoftTeams-image (2).png";

const DadosIntegrantes: React.FC = () => {
  return (
    <IntegrantesMain>
      <IntegrantesH2>Integrantes da HH</IntegrantesH2>
      <IntegrantesContainer>
        <IntegrantesDiv>
          <Image src={ImgIntegrante1} alt="Henzo Boschiero Puchetti" width={400} height={500} objectFit="cover" />
          <IntegrantesParagrafo>Henzo Boschiero Puchetti - Rm555179</IntegrantesParagrafo>
        </IntegrantesDiv>
        <IntegrantesDiv>
          <Image src={ImgIntegrante2} alt="Humberto de Souza Silva" width={400} height={500} objectFit="cover" />
          <IntegrantesParagrafo>Humberto de Souza Silva - Rm558482</IntegrantesParagrafo>
        </IntegrantesDiv>
      </IntegrantesContainer>
    </IntegrantesMain>
  );
};

export default DadosIntegrantes;
