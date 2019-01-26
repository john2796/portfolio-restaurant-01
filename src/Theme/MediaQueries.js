const size = {
  mobile: '425px',
  tablet: '775px',
  laptop: '989px',
  laptopS: '1024px',
  desktop: '2560px'
}


export const device = {
  mobile: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptopS: `(max-width: ${size.laptopS})`,
  laptop: `(max-width: ${size.laptop})`,
  desktop: `(max-width: ${size.desktop})`,
};
/*
Example
import { device } from './device';

const CardWrapper = styled.div`
  display: flex;
  // Mobile friendly by default
  flex-direction: column;

  border: 1px solid gray;
  box-shadow: 5px 5px #ccc;
  padding: 10px;
  margin: 10px;

  // Switch to rows on large devices
  @media ${device.laptop} {
    flex-direction: row;
  }
`;
*/