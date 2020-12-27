import styled from 'styled-components';

interface ImageProps {
  path: string;
}

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 40px 20px;
  position: relative;
  top: 25px;

  text-align: center;

  animation: fadein 0.5s;

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
`;

export const InputElement = styled.input`
  margin: 10px;
  padding: 5px;
`;

export const ButtonElement = styled.button`
  height: 40px;
  padding: 5px;
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
