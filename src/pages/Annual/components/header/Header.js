
import React, { useState, useContext, useMemo, useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import './Header.styl';
import menuIcon from './menu_icon.svg';
import BgAudio from '../BgAudio/BgAudio';
import LineDivider from '../common/LineDivider/LineDivider';

let _numOfHeaderRun = 1
const Header = React.memo(

  (props) => {
    console.log("Header run", _numOfHeaderRun++)

    const {
      innerWidth,
      height,
      menu_infos,
      active_index,
      // onBtnMenuClick,
      // onMenuItemClick,
    } = props

    const [showNav, setShowNav] = useState(false);

    const handleItemClick = (index) => {
      // onMenuItemClick(index);
      setShowNav(false);
    }

    const navElement = useRef(null);
    useEffect(() => {
      if (showNav) {
        function handleClickElsewhere(evt) {
          if (!navElement.current.contains(evt.target)) {
            setShowNav(false);
          }
        }
        window.addEventListener("click", handleClickElsewhere, false)
        return () => {
          window.removeEventListener("click", handleClickElsewhere, false)
        }
      }
    }, [showNav])

    return (
      <HeaderContianer height={height}>
        <StyledHeader>
          <FlexBoxRow>
            <span>2019年度图书榜单</span>
            <Share>{innerWidth < 425 ? "分享" : "分享给朋友"}</Share>
          </FlexBoxRow>

          <FlexBoxRow>
            <BgAudio audioList={props.bgAudioList}></BgAudio>
            <MenuBtn
              onClick={() => {
                setShowNav(true)
                // setShowNav(!showNav);
                // onBtnMenuClick({showNav: true})
              }}
            >
              <BgIcon src={menuIcon}>目录</BgIcon>
            </MenuBtn>
          </FlexBoxRow>
          <NavContainer ref={navElement} show={showNav}>
            <NavList>
              {
                menu_infos ? (
                  menu_infos.map((i, index) => {
                    return (
                      <li
                        key={"nav-li" + index}
                        style={{ marginTop: "1rem", listStyle: "none" }}
                      // color: ${active_index === index ? "#fff" : null};
                      >
                        {
                          i.show_divider ? (
                            <LineDivider text={i.show_divider_txt} />) : null
                        }
                        <div>
                          <a href={`#${index}`} onClick={() => handleItemClick(index)}>{i.title}</a>
                          {/* <a onClick={() => handleItemClick(index)}>{i.title}</a> */}
                        </div>
                      </li>
                    )
                  })
                ) : <Loading></Loading>
              }
            </NavList>
            <div className="nav-close">
              <button onClick={() => {
                setShowNav(false)
                // onBtnMenuClick({showNav: false})
              }}></button>
            </div>
          </NavContainer>
        </StyledHeader>
      </HeaderContianer>
    )
  }

)


function Loading(props) {
  return (
    <div style={{
      width: "100%", height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <span>Loading</span>
    </div>
  )
}

export default Header;

const HeaderContianer = styled.div`
font-size: 1.3rem;
width: 100%;
height: ${props => props.height || "40px"};
position: fixed;
background: rgba(0,0,0,.4);
z-index: 3;
@media only screen and (min-width: 425px) {
  background-color: rgba(0,0,0,.4);
}
`

const StyledHeader = styled.header`
  box-sizing: border-box;
  width: 100%;
  padding: 0 40px;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: absolute;
  top: 7px;

  @media only screen and (max-width: 425px) {
    padding: 0 10px;
  }  
`

const FlexBoxRow = styled.div`
display: flex;
flex-direction: row;
align-items: center;
// line-height: 1.9rem;
vertical-align: middle;
`

const ImgIcon = styled.img`
display: block;
margin-right: .5rem;
width: 24px;
height: 24px;

@media only screen and (max-width: 425px) {
  width: 18px;
  height: 18px;
}
`

const BgIcon = styled.div`
display: flex;
align-items: center;
line-height: 1;
  &:before {
    width: 1em;
    height: 1em;
    margin-right: .5em;
    content: '';
    background-position: 50%;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(${props => props.src});
  }  
`

const MenuBtn = styled.button`
background: transparent;
color: #fff;
border: .1rem solid ;
box-sizing: border-box;
line-height: 1;
padding: .5rem 1.2rem;
border-radius: .3rem;

 &:active {
   background: #000;
   border-color: transparent;
 }
`

const Share = styled.div`
margin-left: .5rem;
padding-left: .5rem;
border-left: 1px solid #fff;
`

const MIcon = styled.div`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
 &:before {
  width: 1em;
  height: 1em;
  margin-right: .5em;
  content: '';
  background-position: 50%;
  background-size: cover;
  background-repeat: no-repeat;
 }

// `

const MenuIcon = ({ viewBox = "0 0 32 32" }) => {
  return (
    <svg enable-background="new 0 0 32 32" id="Editable-line" version="1.1" viewBox={viewBox} space="preserve"
      xmlns="http://www.w3.org/2000/svg"
      xlink="http://www.w3.org/1999/xlink">
      <circle cx="5" cy="6" fill="#fff" id="XMLID_303_" r="1" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" />
      <circle cx="5" cy="16" fill="#fff" id="XMLID_305_" r="1" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" />
      <circle cx="5" cy="26" fill="#fff" id="XMLID_304_" r="1" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" />
      <line fill="#fff" id="XMLID_29_" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" x1="10" x2="28" y1="6" y2="6" />
      <line fill="#fff" id="XMLID_30_" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" x1="10" x2="28" y1="16" y2="16" />
      <line fill="#fff" id="XMLID_31_" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" x1="10" x2="28" y1="26" y2="26" />
    </svg>
  )
}

const NavContainer = styled.nav`
box-sizing: border-box;
overflow: hidden;
// font-size: 1.4rem;
max-width: 100vw;
height: 100vh;
position: fixed;
top: 0;
right: ${props => props.show ? 0 : "-100%"};
background: rgba(0,0,0,.9);
transition: right .5s;
`

const NavList = styled.ol`
display: block;
box-sizing: border-box;
height: 100%;
width: 100%;
color: hsla(0,0%,100%,.54);
padding: 1.8rem 2.5rem;
overflow: auto;
`
