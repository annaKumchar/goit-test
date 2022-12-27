import styled from 'styled-components';
import cardheader from '../images/cardheader.png';
import logo from '../images/logo.png';

export const CardWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardSection = styled.section`
  width: 455px;
  height: 550px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -3px 8px 24px rgba(0, 0, 0, 0.23);
  border-radius: 24px;
  margin-top: 50px;
  margin-bottom: 50px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

`;

export const CardHeader = styled.div``;

export const HeaderLogo = styled.div`
  background-size: contain;
  width: 88px;
  height: 26px;
  background-image: url(${logo});
  position: absolute;
  top: 24px;
  left: 24px;
`;

export const HeaderDetails = styled.div`
  width: 357px;
  height: 194px;
  margin: 34px 45px 22px 52px;
  background-size: contain;
  background-image: url(${cardheader});
`;
