"use client";

import React from 'react';
import Link from 'next/link';
import { 
  Main, 
  FormCadastroContainer, 
  FormCadastroTitulo, 
  FormCadastroInputLabel, 
  FormCadastroLabel, 
  FormCadastroInput, 
  FormCadastroBotao 
} from './FormCadastro.style';

const FormCadastro: React.FC = () => {
  return (
    <Main>
      <FormCadastroContainer>
        <FormCadastroTitulo>Seja bem-vindo ao Cadastro da HH</FormCadastroTitulo>
        <FormCadastroInputLabel>
          <FormCadastroLabel htmlFor="fullName">Nome Completo:</FormCadastroLabel>
          <FormCadastroInput type="text" id="fullName" name="fullName" required />
          
          <FormCadastroLabel htmlFor="email">Email:</FormCadastroLabel>
          <FormCadastroInput type="email" id="email" name="email" required />
          
          <FormCadastroLabel htmlFor="password">Senha:</FormCadastroLabel>
          <FormCadastroInput type="password" id="password" name="password" required />
          
          <FormCadastroLabel htmlFor="confirmPassword">Confirmar Senha:</FormCadastroLabel>
          <FormCadastroInput type="password" id="confirmPassword" name="confirmPassword" required />
          
          <FormCadastroLabel htmlFor="birthDate">Data de Nascimento:</FormCadastroLabel>
          <FormCadastroInput type="text" id="birthDate" name="birthDate" placeholder="dd/mm/aaaa" required />
          
          <Link href="/login" passHref>
            <FormCadastroBotao>Cadastrar</FormCadastroBotao>
          </Link>
        </FormCadastroInputLabel>
      </FormCadastroContainer>
    </Main>
  );
}

export default FormCadastro;
