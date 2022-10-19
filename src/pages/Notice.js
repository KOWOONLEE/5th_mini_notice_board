import { useState, useEffect } from "react";
import styled from "styled-components";
import Modal from "../components/Modal.js";

const Notice = () => {
  const [contents, setContents] = useState([]);
  const [editModal, setEditModal] = useState(false);
  const [date, setDate] = useState(0);
  // const [titleText, setTitleText] = useState("");
  // const [contentText, setContentText] = useState("");
  const [noticeContent, setNoticeContent] = useState({
    no: date + 1,
    title: "",
    content: "",
    time: "2022-10-19",
  });

  console.log(contents);

  const clickModal = () => {
    setEditModal(!editModal);
  };

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

  console.log(contents);
  return (
    <NoticeWrapper>
      <div className="header">게시판</div>
      <button onClick={clickModal} className="edit">
        글쓰기
      </button>
      {editModal && (
        <Modal
          contents={contents}
          setContents={setContents}
          noticeContent={noticeContent}
          setNoticeContent={setNoticeContent}
        ></Modal>
      )}
      <div className="table">
        <table>
          <thead>
            <tr>
              <th className="number">No</th>
              <th className="title">제목</th>
              <th className="author">내용</th>
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
          <p>글쓰기</p>
          <div className="modalContainer">
            <h1>글쓰기</h1>
            <div className="editContainer">
              <form>
                <h2>제목</h2>
                <input
                  name="title"
                  onChange={getValue}
                  className="titleInput"
                  placeholder="제목을 입력해주세요"
                ></input>
                <p>오늘 날짜</p>
                <h2>내용</h2>
                <input
                  name="content"
                  onChange={getValue}
                  className="contentInput"
                  placeholder="내용을 입력해주세요"
                ></input>
                <button onClick={clickSubmit} className="saveBtn">
                  저장하기
                </button>
              </form>
            </div>
          </div>
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
      display: flex;
      position: fixed;
      width: 76vw;
      height: 20vh;
      top: 300px;
      border: 1px solid gray;
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
      width: 35vw;
    }
    .author {
      width: 16vw;
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
