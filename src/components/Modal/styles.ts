import styled from 'styled-components';

export const Modal = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: rgb(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    background-color: #fff;
    width: 50%;
    height: 95vh;
    color: black;
    overflow: scroll;

    animation: fadeIn 0.5s;
    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }

  .close {
    background-color: transparent;
    border: none;
    outline: none;
    width: 32px;
    height: 32px;
    right: calc(-100% + 64px);
    top: 16px;
    display: flex;
    position: relative;
    align-items: center;

    &:before,
    &:after {
      content: ' ';
      position: absolute;
      width: 2.5px;
      height: 24px;
      background-color: black;
    }

    &:before {
      transform: rotate(45deg);
    }

    &:after {
      transform: rotate(-45deg);
    }
  }
`;
