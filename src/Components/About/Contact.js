import React from 'react';
import styled from 'styled-components';
import MainSubTitle from '../MainSubTitle';
import { device } from '../../Theme/MediaQueries';





const ContactWrapper = styled.div`
      padding-bottom: 40px;
      background: var(--contactBg);
.contact__subtitle { 
    text-align: center;
    font-family: "Cabin";
    font-weight: 400;
    font-style: italic;
    font-size: 1.7rem;
    color: var(--pTag);
    margin-bottom: 60px;
}

form {
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${device.tablet}{
    flex-direction: column;
  }

  .form__item01 {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media ${device.tablet}{
      width: 100%;
    }


   input[type="text"] {
     width: 100%;
    background: #2C2A2A;
    border: none;
    height: 80px;

    }
    input { 
    margin-bottom: 44px;
    width: 100%;
    display: block;
    font-family: "Cabin", sans-serif;
    font-weight: 400;
    font-size: 1.5rem;
    padding: 7px;
    border: 1px solid #cbc8c8;
    color: var(--white);
    border-radius: 0px;
    -webkit-border-radius: 0px;
    -moz-border-radius: 0px;
    }
  }
  .form__item02 { 
    width: 47%;
    @media ${device.tablet}{
      width: 100%;
    }
    textarea { 
      width: 100%;
      resize: none;
    padding-bottom: 20px;
    min-height: 328px;
    padding: 20px;
    margin-bottom: 44px;
    background: #2C2A2A;
    border: none;
    font-size: 1.6rem;
    color: var(--white);
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    }
  }
}

.form__btn { 
 input {
  display: block;
    margin: 0 auto;
    font-family: "Cabin", sans-serif;
    font-weight: 500;
    text-transform: none;
    text-align: center;
    font-size: 2.4rem;
    color: var(--white);
    border: none;
    padding: 10px 20px;
    margin-top: 50px;
    margin-bottom: 30px;
    width: 200px;
    min-height: 70px;
    background: #C1A667;
    -webkit-transition: 0.5s all ease;
    -o-transition: 0.5s all ease;
    transition: 0.5s all ease;

    &:hover { 
      color: #C1A667;
      background: var(--white);
    }
 }
}
`

const Contact = (props) => {
  return (
    <ContactWrapper>
      <div className="wrapper">
        <MainSubTitle>Contact</MainSubTitle>
        <p className="contact__subtitle">W325 State Road 123 Mondovi, WI (Wisconsin) 98746-54321</p>

        <form>
          <div className="form__item form__item01">
            <input type="text" id="name" name="name" placeholder="Name" />
            <input type="text" id="email" name="email" placeholder="Email"></input>
            <input type="text" id="subject" name="subject" placeholder="Subject"></input>
          </div>
          <div className="form__item form__item02">
            <textarea id="message" name="message" placeholder="Message" rows="10"></textarea>
          </div>
        </form>
        <div className="form__btn">
          <input type="submit" className="button contact center" value="Submit" />
        </div>
      </div>
    </ContactWrapper>
  );
}

export default Contact;