import React from 'react';
import styled from 'styled-components';
import { Search, Person, Place } from '@mui/icons-material';
import { useState, useEffect } from 'react';

import { Link, useNavigate } from "react-router-dom";
import Login from "./Login";
import { Nav } from 'react-bootstrap';


const UtilityMenuArea = styled.div`
    justify-content: center;
    align-items: center;
    display: flex;
    position: relative;
      ul {
        display: flex;
        width: 100%;
        justify-content: space-between;
        cursor: pointer;
        li {
          padding-left: 10px;
          opacity: 70%;
        }
      }
`;

const UtilityTopMenuArea = styled.div`
  position: absolute;
  white-space: nowrap;
  top: 10px;
  right: 0;
  font-weight: bold;
  font-size: 15px;
`;

function UtilityMenu(props) {

  const navigate = useNavigate();
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  }
  useEffect(() => {
    window.addEventListener("scroll", updateScroll)
  }, []);

  return (
    <UtilityMenuArea>
      <ul>
        <li>
          <Search sx={{ fontSize: 35, color: 'black' }}>
          </Search>
        </li>
        <li onClick={() => navigate('/login')}>
          <Person sx={{ fontSize: 35, color: 'black' }} >
          </Person>
        </li>
        <li onClick={() => navigate('/cart')}>
          <Place sx={{ fontSize: 35, color: 'black' }}>
          </Place>
        </li>
      </ul>
      <UtilityTopMenuArea>
        <ul>
          <li onClick={() => navigate('/login')}>
            로그인
          </li>
          <li >
            회원가입
          </li>
          <li>
            고객센터
          </li>
        </ul>
      </UtilityTopMenuArea>
    </UtilityMenuArea>
  );
}

export default UtilityMenu;