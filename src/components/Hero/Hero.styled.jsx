import styled from 'styled-components';
import boy from '../images/boy.png';
import line from '../images/line.png';

export const HeroWrap = styled.div`
  width: 100%;
  height: 46px;
  position: relative;
  top: 0;
  left: 0;
`;

export const HeroAvatar = styled.div`
  outline: none;
  display: block;
  width: 100%;
  height: 92px;
  position: relative;
  top: -46px;
  left: 0;
  background-size: cover;
  background-image: url(${boy});
`;

