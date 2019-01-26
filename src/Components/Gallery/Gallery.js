import React, { Component } from 'react';
import Testimonials from '../About/Testimonials';
import styled from 'styled-components'
import { device } from '../../Theme/MediaQueries'





import headerDecorator from '../../assets/home/header_decorator.png';
import Tabs from './Tab';

// gallery Photos
import gallery01 from '../../assets/gallery/gallery01.jpg';
import gallery02 from '../../assets/gallery/gallery02.jpg';
import gallery03 from '../../assets/gallery/gallery03.jpg';
import gallery04 from '../../assets/gallery/gallery04.jpg';
import gallery05 from '../../assets/gallery/gallery05.jpg';
import gallery06 from '../../assets/gallery/gallery06.jpg';
import gallery07 from '../../assets/gallery/gallery07.jpg';
import gallery08 from '../../assets/gallery/gallery08.jpg';
import gallery09 from '../../assets/gallery/gallery09.jpg';

const GalleryWrapper = styled.section`
    background: #141313;
.gallery__title {
  color: white; 
  padding-top: 35px; 
  &::before, &::after { 
    content: url(${headerDecorator});
    margin: 14px;
    color: var(--gold);
    vertical-align: center;
  } 
}

.gallery__content { 
  p { 
        text-align: center;
    font-family: "Cabin";
    font-weight: 400;
    font-style: italic;
    font-size: 1.7rem;
    color: var(--pTag);
    line-height: 1.5;
  }  
}

.content { 
  min-height: 876px;
  padding-bottom: 150px;
}


.gallery__flex__parent { 
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  justify-items:center;

  @media ${device.tablet}{
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
  img {
    width: 100%;
    cursor: pointer;
  }
}
`

const images = [
  { id: 1, src: gallery01 },
  { id: 2, src: gallery02 },
  { id: 3, src: gallery03 },
  { id: 4, src: gallery04 },
  { id: 5, src: gallery05 },
  { id: 6, src: gallery06 },
  { id: 7, src: gallery07 },
  { id: 8, src: gallery08 },
  { id: 9, src: gallery09 },
]


class Gallery extends Component {
  state = {
    active: "all"
  }

  handleClick = (event) => {
    const value = event.target.getAttribute('data-value')
    console.log(value)
  }


  render() {
    const content = {
      all:
        <div className="gallery__flex__parent">
          {images.map((img, idx) => (
            <img
              src={img.src}
              alt="..."
              key={idx}
              data-value={img.id}
              onClick={this.handleClick}
            />
          ))}
        </div>
      ,
      food: <div className="gallery__flex__parent">
        {
          images.filter((item) => {
            const filters = {
              id: [9, 4, 7, 6]
            }
            const filterKeys = Object.keys(filters)
            return filterKeys.every(key => (!!~filters[key].indexOf(item[key])))
          }).map((img, idx) => (
            <img
              src={img.src}
              key={img.id}
              onClick={this.handleClick}
              data-value={img.id}
              alt="..."
            />
          ))
        }
      </div>
      ,
      restaurant: <div className="gallery__flex__parent">
        {images.filter((item) => {
          let filters = {
            id: [1, 2, 4, 5, 7]
          }
          let filterKeys = Object.keys(filters)
          return filterKeys.every((key) => !!~filters[key].indexOf(item[key]))
        }).map((img) => (
          <img
            src={img.src}
            data-value={img.id}
            key={img.id}
            onClick={this.handleClick}
            alt="..."
          />
        ))}
      </div>,
      desserts: <div className="gallery__flex__parent">
        {images.filter((items) => {
          const filters = { id: [3, 5, 6, 7, 8] }
          const filterKeys = Object.keys(filters)

          return filterKeys.every(key => !!~filters[key].indexOf(items[key]))
        }).map(img => (
          <img
            src={img.src}
            onClick={this.handleClick}
            data-value={img.id}
            key={img.id}
            alt="..."
          />
        ))
        }
      </div>
    }
    const { active } = this.state;
    return (
      <GalleryWrapper>
        <div className="gallery__content">
          <h2 className="gallery__title">Gallery</h2>
          <p>If a picture says a thousand words, then you can imagine how long it would  <br /> take to describe all our mouthwatering selections.</p>
        </div>
        <div className="gallery">
          <Tabs
            active={active}
            onChange={active => this.setState({ active })}
            onClick={this.shuffle}
          >
            <span key="all" >All Photos</span>
            <span key="food">Food</span>
            <span key="restaurant">Restaurant</span>
            <span key="desserts">Desserts</span>
          </Tabs>

          <div className="content">
            {content[active]}
          </div>
        </div>
        <Testimonials />
      </GalleryWrapper>
    );
  }
}


export default Gallery;