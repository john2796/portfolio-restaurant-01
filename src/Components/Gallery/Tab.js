import React, { Component } from 'react';
import styled from 'styled-components';


const TabsWrapper = styled.div`
nav {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 90px;
  padding-top: 10px;
  

  span {
    cursor: pointer;
  font-size: 1.6rem;
  font-size: 16px;
    width: auto;
    font-family: "Cabin", sans-serif;
    padding: 0 28px;
    border-bottom: 2px solid transparent;
    font-weight: 600;
    height: 40px;
    line-height: 40px;
    text-align: center;
    color: #ffffff;
    text-transform: initial;
  }
}


.tab { 
  color: white;

}
.active { 

    border-bottom: 2px solid transparent;
    border-bottom-color: #C1A667;
    
}

`

class Tabs extends Component {
  render() {
    const { onChange, children, active } = this.props;

    return (
      <TabsWrapper>

        <nav>

          {React.Children.map(children, (child, i) => {
            let isActive = child.key === active ? "tab active" : "tab";
            return (
              <div
                key={i}
                className={isActive}
                onClick={() => {
                  onChange(child.key);
                }}
              >
                {child}
              </div>

            )
          })}
        </nav>
      </TabsWrapper>
    );
  }
}

export default Tabs;