/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-unused-expressions */
import React from 'react';

import MaleIcon from '../../assets/male.svg';

// import { Link, useRouteMatch } from 'react-router-dom';

import { Container, TitleCard } from './styles';

interface Pacient {
  name: string;
  phone: string;
  medicalRecord: string;
  motherName: string;
  fatherName: string;
  cpf: string;
  rg: string;
  street: string;
  complement: string;
  district: string;
  city: string;
  state: string;
  cep: string;
}

const CardPacient: React.FC<Pacient> = (pacient: Pacient) => {
  return (
    <Container>
      <img src={MaleIcon} alt="Gender" sizes="small" />
      <TitleCard>{pacient.name}</TitleCard>
    </Container>
  );
};

export default CardPacient;
