import styled from "styled-components";

const Main = () => {
  return (
    <MainWrapper>
      <div>Main Page</div>
    </MainWrapper>
  );
};
export default Main;

const MainWrapper = styled.div`
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
`;
