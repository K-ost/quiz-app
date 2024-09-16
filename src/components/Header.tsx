import styled from "styled-components";
import Switcher from "../ui/Switcher";
import IconTitle from "../ui/IconTitle";

type HeaderProps = {
  subject: string;
};

const Head = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
  height: 224px;
  @media screen and (max-width: 1020px) {
    height: 145px;
  }
  @media screen and (max-width: 750px) {
    height: 72px;
    margin-bottom: 32px;
  }
`;

const Header = (props: HeaderProps): JSX.Element => {
  const { subject } = props;
  return (
    <Head>
      <div>{subject.length ? <IconTitle title={subject} icon /> : null}</div>
      <Switcher />
    </Head>
  );
};

export default Header;
