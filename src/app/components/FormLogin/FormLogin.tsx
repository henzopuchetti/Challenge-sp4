"use client";


import React from 'react';
import { Main, FormLoginContainer, FormLoginTitulo, FormLoginInputLabel, FormLoginLabel, FormLoginInput, FormLoginA, FormLoginLink, FormLoginBotao } from './FormLogin.style';


const FormLogin: React.FC = () => {
  return (
    <Main>
      <FormLoginContainer>
        <FormLoginTitulo>Seja bem-vindo ao Login da HH</FormLoginTitulo>
        <FormLoginInputLabel>
          <FormLoginLabel htmlFor="email">Email:</FormLoginLabel>
          <FormLoginInput type="email" id="email" name="email" required />
          <FormLoginLabel htmlFor="password">Senha:</FormLoginLabel>
          <FormLoginInput type="password" id="password" name="password" required />
        </FormLoginInputLabel>
        <FormLoginA>
          <FormLoginLink href="/cadastro">Cadastre-se</FormLoginLink> {/* Alterando para usar Link do Next.js */}
        </FormLoginA>
        <FormLoginBotao type="submit">Entrar</FormLoginBotao> {/* Alterando para um botão de tipo submit */}
      </FormLoginContainer>
    </Main>
  );
}

export default FormLogin;
