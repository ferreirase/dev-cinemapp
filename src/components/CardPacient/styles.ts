import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;

  .containerInfos {
    max-width: 75%;
    margin: 0 auto;
    position: relative;
    top: 15px;

    .groupAddress {
      position: relative;
      top: 25px;
      fieldset {
        border: 0;
      }

      b {
        color: #3d3d3d;
      }
    }

    .lineInfo {
      background-color: #f2f0f5;
      border-radius: 5px;
      text-align: center;
      align-items: center;
      align-content: center;
      margin-bottom: 5px;
      height: 50px;

      p {
        position: relative;
        float: right;
        right: 10px;
        top: -10px;
        color: whitesmoke;
        font-size: 14px;
      }
    }

    .icon {
      position: relative;
      top: 15px;
      left: 5%;
      width: 30px;
      height: 30px;
      border-radius: 50%;
    }

    .legendAddress {
      position: relative;
      top: 15px;
      left: 5%;
      color: black;
      width: 120px;
      border-radius: 4px;
      font-weight: bold;
    }
  }

  img {
    width: 50px;
    height: 50px;
  }
  p {
    font-weight: bold;
    position: relative;
    display: inline-block;
  }
`;

export const TitleCard = styled.h4`
  text-align: center;
  width: 50%;
  color: whitesmoke;
  margin: 0 auto;
  background-color: #3d3d3d;
  border-radius: 5px;
  padding: 10px 10px;
`;
