import styled from "styled-components";
import Switcher from "../ui/Switcher";
import IconTitle from "../ui/IconTitle";

const Head = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
  height: 224px;
  @media screen and (max-width: 1020px) {
    height: 145px;
  }
  @media screen and (max-width: 680px) {
    height: 72px;
  }
`;

const Header = (): JSX.Element => {
  return (
    <Head>
      <div>
        <IconTitle title="Accessibility" />
      </div>
      <Switcher />
    </Head>
  );
};

export default Header;
