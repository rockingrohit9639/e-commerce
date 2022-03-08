import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    ${mobile({ height: "20vh" })}
`;

const InfoContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Title = styled.h1`
    color: #FFF;
    margin: 20px;
`;

const Button = styled.button`
    border: none;
    padding: 10px;
    background-color: #FFF;
    color: gray;
    cursor: pointer;
    font-weight: 600;
`;

function CategoryItem({item}) {
  return (
    <Container>
        <Image src={item.img}/>
        <InfoContainer>
            <Title>{item.title}</Title>
            <Button>SHOP NOW</Button>
        </InfoContainer>
    </Container>
  )
}

export default CategoryItem