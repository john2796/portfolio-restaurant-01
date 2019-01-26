import React from 'react';
import styled from 'styled-components';

import buttonLine from '../assets/home/button_line.png';
const MainBtn = styled.div`
    a {
    display: block;
    margin: 0 auto;
    font-family: "Cabin", sans-serif;
    font-weight: 500;
    text-transform: uppercase;
    text-align: center;
    font-size: 1.8rem;
    color: var(--goldBtn);
    border: 2px solid var(--goldBtn);
    padding: 16px 10px;
    margin-top: 68px;
    margin-bottom: 138px;
    background: transparent;
    -webkit-transition: 0.5s all ease;
    -o-transition: 0.5s all ease;
    transition: 0.5s all ease;
    width: 260px;
    height: 65px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

      &:hover {
        background: var(--goldBtn);
        color: var(--white);
      }
       
      &::before {
        content: url(${buttonLine});
        position: absolute;
        right: 300px;
      }
      &::after {
        content: url(${buttonLine});
        position: absolute;
        left: 300px;
      }
    }
  

`


const Button = ({ children, className }) => (
  <MainBtn ><a href="..."
    className={className}
  >{children}</a></MainBtn>
)

export default Button;