import React from 'react';
import styled from 'styled-components';

const H2 = styled.h2`
  color: red;
  color: white;
  background: black;
  position:fixed;
  top: 0;
  height: 100vh;
  width: 100%;
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
`

const NotFound = () => (<H2>Page Not Found</H2>)

export default NotFound;