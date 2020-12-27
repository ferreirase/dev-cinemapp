import styled from 'styled-components';

interface ContainerProps {
  size?: 'small' | 'large';
}

export const Container = styled.div<ContainerProps>`
  background: #3d3d3d;
  height: 75px;
  position: relative;

  header {
    width: 100%;
    margin: 0 auto;
    padding: ${({ size }) => (size === 'small' ? '0 20px ' : '0 20px 150px')};
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    background: #3d3d3d;

    position: relative;
    top: -60px;

    div {
      p,
      small {
        position: relative;
        left: 75px;
        color: whitesmoke;
        top: 40px;
      }

      img {
        width: 40px;
        height: 40px;
        position: relative;
        left: 25px;
        top: 90px;
      }
    }

    nav {
      a {
        color: #fff;
        text-decoration: none;
        font-size: 15px;
        transition: opacity 0.2s;
        margin-right: 60px;
        position: relative;
        top: 60px;

        & + a {
          margin-left: -30px;
        }

        &:hover {
          opacity: 0.6;
        }
      }
    }

    .activeLink {
      border-bottom: 2px solid;
    }
  }
`;
