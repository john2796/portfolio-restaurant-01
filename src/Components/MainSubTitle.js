import React from 'react';
import styled from 'styled-components';

import headerDecorator from '../assets/home/header_decorator.png'

const SubHeading = styled.h2` 
 color: var(--white);
 padding-top:80px;
  &::before, &::after { 
    content: url(${headerDecorator});
    margin: 14px;
    vertical-align: center;
  } 



`

const MainSubTitle = ({ className, children }) => (
  <SubHeading className={className}>{children}</SubHeading>
)

export default MainSubTitle;