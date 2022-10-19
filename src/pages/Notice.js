import { useState, useEffect } from "react";
import styled from "styled-components";

const Notice = () => {
  const [contents, setContents] = useState([]);

  useEffect(() => {
    fetch("/data/notice.json")
      .then((res) => res.json())
      .then((data) => setContents(data.notices));
  }, []);

  return (
    <NoticeWrapper>
      <div className="header">게시판</div>
      <div className="table">
        <table>
          <thead>
            <tr>
              <th className="number">No</th>
              <th className="title">제목</th>
              <th className="author">작성자</th>
              <th className="time">작성시간</th>
            </tr>
          </thead>
          <tbody>
            {contents.map((item) => (
              <tr value={item.no} key={item.id}>
                <td>{item.no}</td>
                <td>{item.title}</td>
                <td>{item.author}</td>
                <td>{item.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
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
  top: 65px;

  .header {
    display: flex;
    font-size: 1.8em;
    font-weight: bold;
    height: 7vh;
    align-items: center;
  }

  .table {
    position: fixed;
    top: 108px;
    width: 76vw;
    height: 66vh;
    border: 1px solid gray;
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
