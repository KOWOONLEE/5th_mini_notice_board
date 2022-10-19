import { useState, useEffect } from "react";
import styled from "styled-components";
import Modal from "../components/Modal.js";

const Notice = () => {
  const [contents, setContents] = useState([]);
  const [date, setDate] = useState(0);
  const [noticeContent, setNoticeContent] = useState({
    no: date + 1,
    title: "",
    content: "",
    time: "2022-10-19",
  });

  useEffect(() => {
    fetch("/data/notice.json")
      .then((res) => res.json())
      .then((data) => setContents(data.notices));
  }, []);

  const getValue = (e) => {
    const { name, value } = e.target;
    setNoticeContent({
      ...noticeContent,
      [name]: value,
    });
    console.log(noticeContent);
  };

  const clickSubmit = (e) => {
    e.preventDefault();
    setContents(contents.concat({ ...noticeContent }));
  };

  return (
    <NoticeWrapper>
      <div className="header">게시판</div>
      <div className="table">
        <table>
          <thead>
            <tr>
              <th className="number">No</th>
              <th className="title">제목</th>
              <th className="content">내용</th>
              <th className="time">작성시간</th>
            </tr>
          </thead>
          <tbody>
            {contents.map((item) => (
              <tr value={item.no} key={item.title}>
                <td>{item.no}</td>
                <td>{item.title}</td>
                <td>{item.content}</td>
                <td>{item.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="editContainer">
          <h1>글쓰기</h1>
          <form className="editForm">
            <div>
              <h2>제목</h2>
              <input
                name="title"
                onChange={getValue}
                className="titleInput"
                placeholder="제목을 입력해주세요"
              ></input>
            </div>
            <div>
              <h2>내용</h2>
              <input
                name="content"
                onChange={getValue}
                className="contentInput"
                placeholder="한줄평을 입력해주세요"
              ></input>
              <button onClick={clickSubmit} className="saveBtn">
                입력하기
              </button>
            </div>
          </form>
        </div>
      </div>
    </NoticeWrapper>
  );
};
export default Notice;

const NoticeWrapper = styled.div`
  display: flex;
  position: fixed;
  width: 76vw;
  left: 17vw;
  top: 70px;
  justify-content: space-between;

  .header {
    display: flex;
    font-size: 1.6em;
    font-weight: bold;
    height: 7vh;
    align-items: center;
  }
  .edit {
    width: 10vw;
    font-size: 1em;
    font-weight: bold;
    border: none;
    cursor: pointer;
  }

  .table {
    position: fixed;
    top: 108px;
    width: 76vw;
    height: 66vh;
    border: 1px solid gray;

    .editContainer {
      display: inline-block;
      position: fixed;
      width: 76vw;
      height: 24vh;
      top: 350px;
      border: 1px solid gray;
      padding-left: 10px;

      h1 {
        font-size: 1.2em;
        font-weight: bold;
        margin: 5px 0px 20px 0px;
      }
      .editForm {
        display: inline-block;

        div {
          margin-bottom: 15px;
        }

        h2 {
          display: inline-block;
          margin-right: 20px;
        }
        input {
          width: 40vw;
          height: 5vh;
          margin-right: 20px;
        }
        button {
          width: 8vw;
          height: 5vh;
        }
      }
    }
  }

  thead {
    width: 76vw;
    height: 7vh;
    font-size: 1.3em;
    font-weight: bold;
    border: 1px solid gray;
    text-align: center;
    align-items: center;
    justify-content: center;

    tr {
      height: 10vh;
    }

    th {
      vertical-align: middle;
    }

    .number {
      width: 6vw;
    }
    .title {
      width: 21vw;
    }
    .content {
      width: 30vw;
    }
    .time {
      width: 19vw;
    }
  }

  td {
    height: 7vh;
    text-align: center;
    vertical-align: middle;
  }
`;
