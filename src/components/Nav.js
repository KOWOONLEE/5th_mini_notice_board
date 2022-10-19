import styled from "styled-components";
import { BsFillPersonFill } from "react-icons/bs";
import { BsClipboard } from "react-icons/bs";
import { AiFillSetting } from "react-icons/ai";
import { BsPower } from "react-icons/bs";
import { BsList } from "react-icons/bs";
import { useState } from "react";

const Nav = () => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <HeaderWrapper>
      <button onClick={handleToggle}>
        <BsList />
      </button>
      <ul className={isActive ? "nonActive" : "active"}>
        <li>
          <a href="/" className="item">
            <BsFillPersonFill />
            <span>USER1</span>
          </a>
        </li>
        <li>
          <a href="/notice" className="item">
            <BsClipboard />
            <span>게시판</span>
          </a>
        </li>
        <li>
          <a href="#" className="item">
            <AiFillSetting />
            <span>개인설정</span>
          </a>
        </li>
        <li>
          <a href="#" className="item">
            <BsPower />
            <span>로그아웃</span>
          </a>
        </li>
      </ul>
    </HeaderWrapper>
  );
};
export default Nav;

const HeaderWrapper = styled.div`
  button {
    svg {
      display: flex;
      width: 30px;
      height: 30px;
      left: 0;
      margin-left: 0;
    }
    float: top;
    width: 4vw;
    border: none;
  }
  svg {
    width: 30px;
    height: 30px;
    margin-right: 10px;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    width: 18vw;
    background-color: #f1f1f1;
    position: fixed;
    height: 67vh;
    overflow: auto;
  }
  li {
    height: 10vh;
    margin-top: 20px;
    padding-left: 10px;
  }

  .active {
    width: 4vw;
    transition: width 1s;
    span {
      display: none;
    }
  }
  .nonActive {
    position: fixed;
    width: 12vw;
    transition: width 1s;
  }
`;
