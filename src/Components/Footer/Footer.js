import React from 'react';
import styled from 'styled-components';


const FooterWrapper = styled.div`
z-index:90999;
 width: 100%;
background: var(--contactBg);
min-height: 240px;
display: flex;
justify-content: center;
align-items: center;


nav { 
  a {
    background: #3D3C38;
    width: 60px;
    height: 60px;
    text-align: center;
    font-size: 32px;
    line-height: 60px;
    color: var(--white);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    display: inline-block;
    transition: all 0.5s ease;
    margin: 0px 5px;

    &:hover { 
      background: var(--gold);
    }

    i { 
      font-size:2.5rem;
    }
  }
}
`

const Footer = () => {
  return (
    <FooterWrapper>
      <nav>
        <a href="https://twitter.com/" rel="noopener noreferrer" target="_blank"><i className="fab fa-twitter"></i></a>
        <a href="https://www.facebook.com" rel="noopener noreferrer" target="_blank" ><i className="fab fa-facebook-f"></i></a>
        <a href="https://www.pinterest.com/" rel="noopener noreferrer" target="_blank" ><i className="fab fa-pinterest"></i></a>
        <a href="https://plus.google.com/discover" rel="noopener noreferrer" target="_blank" ><i className="fab fa-google-plus-g"></i></a>
      </nav>
    </FooterWrapper>

  );
}

export default Footer;
