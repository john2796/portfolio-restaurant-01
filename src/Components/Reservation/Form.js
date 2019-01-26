import React from 'react'
import styled from 'styled-components';
import { device } from '../../Theme/MediaQueries';

const FormWrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
  .flex__parent_form{
    display: flex;
    width: 100%;
    justify-content: space-between;
    @media ${device.tablet}{
     flex-direction: column;
    }
  }
  .form__item{
    width:100%;
    max-width: 48.4%;
    @media ${device.tablet}{
      max-width: 100%;
    }
    
    input{       
    width: 100%;
    margin-bottom: 20px;
    font-family: "Cabin", sans-serif;
    font-weight: 400;
    font-size: 1.5rem;
    padding: 10px 0;
    padding-left: 5px;
    border: 1px solid #cbc8c8;
    color: #4b4747;
    border-radius: 0px;
    -webkit-border-radius: 0px;
    -moz-border-radius: 0px;
    -webkit-appearance: none;
      
    }
  }

  .textarea__form {
  display:flex;
   flex: 1;
   width: 100%;
    height: 100%;
    display: block;
    margin-bottom: 20px;
    font-family: "Cabin", sans-serif;
    font-weight: 400;
    font-size: 1.5rem;
    padding: 7px 0 0 5px;
    border: 1px solid #cbc8c8;
    color: #4b4747;
    border-radius: 0px;
    -webkit-border-radius: 0px;
    -moz-border-radius: 0px;
    -webkit-appearance: none;
    }
  h6 {
    font-family: "Cabin", sans-serif;
    font-weight: 500;
    font-size: 1.8rem;
    
    margin: 20px 0px;
  }
`


const Form = props => {
  return (
    <FormWrapper>
      <form className="wrapper">
        <div className="flex__parent_form">

          <div className="form__item">
            <h6>Book a table</h6>
            <input type="text" placeholder="Date" /> <br />
            <input type="text" placeholder="Time" /><br />
            <input type="text" placeholder="Party" />
          </div>

          <div className="form__item">
            <h6>Contact Details</h6>
            <input type="text" placeholder="Date" /><br />
            <input type="text" placeholder="Time" /><br />
            <input type="text" placeholder="Party" />
          </div>

        </div>
        <textarea
          className="textarea__form"
          placeholder="Messagee"
          name="message" id="" cols="30" rows="10"></textarea>
      </form>
    </FormWrapper>
  )
}



export default Form
