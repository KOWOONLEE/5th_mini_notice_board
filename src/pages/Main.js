import styled from "styled-components";
import { useState, useEffect } from "react";
import { Chart as ChartJS, BarElement } from "chart.js";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);
ChartJS.register(BarElement);

const Main = () => {
  const [contents, setContents] = useState([]);

  useEffect(() => {
    fetch("/data/notice.json")
      .then((res) => res.json())
      .then((data) => setContents(data.notices));
  }, []);

  const monthLabels = ["8월", "9월"];
  const data = {
    labels: monthLabels,
    datasets: [
      {
        label: "notice",
        data: [2, 1],
        backgroundColor: ["rgb(67,196,216, 0.3)"],
        borderColor: ["rgb(193, 212, 240)"],
        borderWidth: 1,
      },
    ],
  };

  let options = {
    responsive: false,
    plugins: {
      title: {
        display: true,
        text: "월별 게시판 등록글 갯수",
      },
    },
  };
  return (
    <MainWrapper>
      <h1>Main Page</h1>
      <div className="chart">
        <Bar data={data} width={600} height={350} options={options} />
      </div>
    </MainWrapper>
  );
};
export default Main;

const MainWrapper = styled.div`
  text-align: center;
  width: 100%;
  h1 {
    display: flex;
    position: fixed;
    width: 76vw;
    height: 10vh;
    left: 17vw;
    top: 65px;
    font-size: 1.8em;
    font-weight: bold;
    align-items: center;
    border-bottom: 1px solid gray;
  }
  .chart {
    display: flex;
    position: fixed;
    width: 200vw;
    left: 17vw;
    top: 150px;
    margin-left: 15vw;
  }
`;
