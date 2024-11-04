"use client";

import React from 'react';
import Image from 'next/image'; // Importando o componente Image do Next.js
import { ServicosContainer, ServicosTitulo } from './Servicos.style';
import CardServico from '../CardServicos/CardServicos';
import ImgMain from '../../../../public/image 2.png';

const Servicos: React.FC = () => {
  return (
    <main>
      <Image src={ImgMain} alt="Imagem dos serviços" />
      <ServicosTitulo>Conheça Nossos Serviços</ServicosTitulo>
      <ServicosContainer>
        <CardServico
          titulo="Serviço de Mecânicos"
          descricao="Oferecemos uma ampla variedade de serviços mecânicos automotivos,
            desde troca de óleo até reparos complexos em sistemas de transmissão
            e suspensão. Nossa equipe altamente qualificada utiliza tecnologia 
            de ponta para garantir serviços precisos e  eficientes. Priorizamos
            a transparência, fornecendo explicações claras e orçamentos detalhados
            antes de iniciar qualquer trabalho. Estamos comprometidos em manter os
            veículos dos nossos clientes seguros e em ótimo funcionamento."
          corDeFundo="#02C2FF"
          corTexto="white"
          botaoTexto="Usar Serviço"
          linkDestino="/chamados"
        />
        <CardServico
          titulo="Serviço de ChatBot"
          descricao="Nosso chatbot especializado em serviços automotivos é projetado para
            interagir de forma eficaz com os usuários, visando resolver seus
            problemas de maneira rápida e precisa. Utilizando uma abordagem
            baseada em inteligência artificial, nosso chatbot faz uma série
            de perguntas direcionadas para entender completamente a situação
            do veículo e o problema relatado pelo usuário. Desde sintomas até
            histórico de manutenção, nosso chatbot busca reunir todas as informações
            relevantes para oferecer uma análise precisa e sugestões de solução."
          corDeFundo="white"
          corTexto="#02C2FF"
          botaoTexto="Usar Serviço"
          linkDestino="/chatbot"
        />
      </ServicosContainer>
    </main>
  );
};

export default Servicos;
