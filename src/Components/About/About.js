import React, { Component } from 'react';
import styled from 'styled-components'


import headerDecorator from '../../assets/home/header_decorator.png'
import ornament from '../../assets/home/ornament.png'
import AboutCarousel from './AboutCarousel';
import KitchenCarousel from './KitchenCarousel';
import { device } from '../../Theme/MediaQueries';



const AboutUsWrapper = styled.section`
.about__title { 
  margin-top: 80px;
  &::before, &::after { 
    content: url(${headerDecorator});
    margin: 14px;
    color: var(--gold);
    vertical-align: center;
  } 
}
.about__subtitle { 
    text-align: center;
    font-family: 'Cabin', sans-serif;
    font-weight: 400;
    font-style: italic;
    font-size: 1.7rem;
    margin-bottom: 60px;
    text-align: center;
  }
  .about__ornament { 
    display: block;
    width: 65px;
    height: 35px;
    /* background: url(../images/ornament.png);
    background-repeat: no-repeat;
    content: " "; */
    margin: 0 auto;
  }
  .the__history { 
    display: flex;
    @media ${device.tablet}{
      flex-direction: column;
    }

    .about__content { 
      width: 70%;
        @media ${device.tablet}{
        width: 100%;
        text-align: center;
        margin: 50px 0;
      }
    }
    .about__carousel { 
      width: 80%;
      @media ${device.tablet}{
        order: -1;
        width: 100%;
        margin: 0 auto;
        display:flex;
        justify-content: center;
     }
    }
  }

  /* kitchen Carousel */
  .the__kitchens { 
    display: flex;
    margin: 60px 0 130px 0;
    @media ${device.tablet}{
      flex-direction: column;
      justify-content: center;
      width: 100%;
    }
    .kitchens-carousel { 
      width: 80%;
      @media ${device.tablet}{
        width: 100%;
        display: flex;
        margin: 0 auto;
        justify-content: center;
      }
    }
    .kitchens-content { 
      width: 70%;
      @media ${device.tablet}{
        width: 100%;
        text-align: center;
      }
    }
  }
`
class AboutUs extends Component {
  render() {
    return (
      <React.Fragment>
        {/* // About US */}
        <AboutUsWrapper id="about" >
          <h2 className="about__title">About Us</h2>
          <p className="about__subtitle">
            We love restaurants as much as you do. That’s why we’ve been <br />
            helping them fill tables since 1999. Welcome to elixir restaurant</p>
          <div className="wrapper">

            <div className="the__history">
              <div className="about__content">
                <h5 >The History</h5>
                <p>The <span className="gold">History of Kitchens</span> and Cooks gives further intimation on Mr Boulanger usual menu, stating confidently that "Boulanger served salted poultry and fresh eggs, all presented without a tablecloth on small marble tables". Numerous commentators have also referred to the supposed restaurant owner's eccentric habit of touting for custom outside his establishment, dressed in aristocratic fashion and brandishing a sword</p>
                <p>According to Miss Spang, there is not a shred of evidence for any of it. She said: These legends just get passed on by hearsay and then spiral out of control. Her interest in <span className="gold">Boulanger</span> dates back to a history of food seminar in Paris in the mid-1990s</p>
                <img src={ornament} alt="ornament" className="about__ornament" />
              </div>

              {/* carousel */}
              <div className="about__carousel">
                <AboutCarousel />
              </div>
            </div>

            <div className="the__kitchens">
              <div className="kitchens-carousel">
                <KitchenCarousel />
              </div>
              <div className="kitchens-content">
                <p>The <span className="gold">History of Kitchens</span> and Cooks gives further intimation on Mr Boulanger usual menu, stating confidently that "Boulanger served salted poultry and fresh eggs, all presented without a tablecloth on small marble tables". Numerous commentators have also referred to the supposed restaurant owner's eccentric habit of touting for custom outside his establishment, dressed in aristocratic fashion and brandishing a sword</p>
                <p>According to Miss Spang, there is not a shred of evidence for any of it. She said: These legends just get passed on by hearsay and then spiral out of control. Her interest in <span className="gold">Boulanger</span> dates back to a history of food seminar in Paris in the mid-1990s</p>
              </div>
            </div>

            {/* Wrapper ends here */}
          </div>
        </AboutUsWrapper>
      </React.Fragment>
    );
  }
}

export default AboutUs; 