import styled from "styled-components";
import Button from "../Button";
import Image from "../Image";
import Link from "../Link";


const Main = () => {
  return (
    <StyledMain>
      <Image src={'https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png'}/>
      <Link href={'http://www.facebook.com'}>ThinkLink</Link>
      <Link>Mylinkypoo</Link>
      <Button>Hello</Button>
    </StyledMain>
  );
};



export default Main;

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  h1{
      color:red;
      text-align:center;
  }
`;
