import { useState, useEffect } from "react";
import styled from "styled-components";

const Modal = ({ titleText, setTitleText, contentText, setContentText }) => {
  const handleTitle = (e) => {
    setTitleText(e.target.value);
  };

  const handleContent = (e) => {
    setContentText(e.target.value);
  };

  const clickButton = (e) => {
    e.preventDefault();
    handleTitle();
    handleContent();
  };

  return (
    <ModalWrapper>
      <div className="modalContainer">
        <h1>글쓰기</h1>
        <div className="editContainer">
          <form>
            <h2>제목</h2>
            <input
              onChange={handleTitle}
              value={titleText}
              className="titleInput"
              placeholder="제목을 입력해주세요"
            ></input>
            <p>오늘 날짜</p>
            <h2>내용</h2>
            <input
              onChange={handleContent}
              value={contentText}
              className="contentInput"
              placeholder="내용을 입력해주세요"
            ></input>
            <button onClick={clickButton} className="saveBtn">
              저장하기
            </button>
          </form>
        </div>
      </div>
    </ModalWrapper>
  );
};
export default Modal;
const ModalWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;

  .modalContainer {
    position: absolute;
    width: 80vw;
    height: 80vh;
    background-color: #fff;
    // Modal 창 브라우저 가운데로 조정
    left: 50%;
    top: 50%;
    padding: 15px;
    border-radius: 5px;
    transform: translate(-50%, -50%);
    z-index: 100;

    h1 {
      font-size: 1.3em;
      font-weight: bold;
      padding: 10px;
      border-bottom: 1px solid gray;
    }

    .editContainer {
      width: 98%;
      height: 80%;
      border: 1px solid gray;
      margin: 10px 5px 10px 5px;
      padding: 10px 20px 10px 70px;

      h2 {
        font-size: 1.3em;
        margin: 10px 0px 10px 0px;
      }
      .titleInput {
        width: 90%;
        height: 5vh;
        margin-bottom: 10px;
      }
      .contentInput {
        width: 90%;
        height: 25vh;
      }
      .saveBtn {
        display: flex;
        width: 10vw;
        height: 5vh;
        margin-top: 10px;
        text-align: middle;
        align-items: center;
      }
    }
  }
`;
