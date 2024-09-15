import styled from "styled-components";

type ContainerProps = {
  children: React.ReactNode;
};

const ContainerDiv = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 20px 64px;
  width: 100%;
  @media screen and (max-width: 1020px) {
    width: 640px;
  }
  @media screen and (max-width: 750px) {
    padding-bottom: 32px;
    width: auto;
  }
`;

const Container = (props: ContainerProps): JSX.Element => {
  const { children } = props;
  return <ContainerDiv>{children}</ContainerDiv>;
};

export default Container;
