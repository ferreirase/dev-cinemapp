import styled from 'styled-components';
import { shade } from 'polished';

interface ImageProps {
  path: string;
}

export const Container = styled.div`
  width: 100%;
  max-width: 736px;
  margin: 0 auto;
  padding: 40px 20px;
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 36px;
  line-height: 54px;
  color: #363f5f;
  text-align: center;
`;

export const ImportFileContainer = styled.section`
  background: #fff;
  margin-top: 40px;
  border-radius: 5px;
  padding: 64px;
`;

export const Footer = styled.section`
  margin-top: 36px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    display: flex;
    align-items: center;
    font-size: 12px;
    line-height: 18px;
    color: #969cb3;

    img {
      margin-right: 5px;
    }
  }

  button {
    background: #ff872c;
    color: #fff;
    border-radius: 5px;
    padding: 15px 80px;
    border: 0;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#ff872c')};
    }
  }
`;

export const ListElement = styled.div`
  position: relative;
  background-color: whitesmoke;
  width: 50%;
  height: 100px;
  margin: 0 auto;
  margin-bottom: 20px;

  h4 {
    width: 75%;
    position: relative;
    left: 15%;
    top: -55px;
  }

  small {
    position: relative;
    left: 15%;
    top: -35px;
  }

  .checkBox {
    position: relative;
    float: right;
    right: 5px;
    top: -70px;
  }
`;

export const BannerElement = styled.div<ImageProps>`
  position: relative;
  height: 75px;
  width: 75px;
  left: 15px;
  top: 15px;
  border-radius: 50%;
  background-color: black;
  background-image: url(${props => props.path});
  background-size: cover;
`;
