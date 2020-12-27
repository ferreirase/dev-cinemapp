/* eslint-disable no-unused-expressions */
import React from 'react';

import { Link, useRouteMatch } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/cine.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'small' }: HeaderProps) => {
  const { url } = useRouteMatch();

  return (
    <Container size={size}>
      <header>
        <div>
          <img src={Logo} alt="UPC" />
          <p>Cinema APP</p>
          <small>Bem-vindo ao mundo espetacular do cinema!</small>
        </div>
        <nav>
          <Link to="/" className={url === '/' ? 'activeLink' : ''}>
            Home
          </Link>
          <Link to="/import" className={url === '/import' ? 'activeLink' : ''}>
            Favoritos
          </Link>
        </nav>
      </header>
    </Container>
  );
};

export default Header;
