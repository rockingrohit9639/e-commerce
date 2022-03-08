import styled from "styled-components";

const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: #FFF;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
`;

function Announcement() {
  return (
    <Container>
        This is a very big deal here
    </Container>
  )
}

export default Announcement