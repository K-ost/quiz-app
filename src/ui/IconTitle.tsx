import styled from "styled-components";
import htmlIcon from "../assets/icon-html.svg";
import cssIcon from "../assets/icon-css.svg";
import jsIcon from "../assets/icon-js.svg";
import accessibilityIcon from "../assets/icon-accessibility.svg";

type IconTitleProps = {
  icon?: boolean;
  letter?: string;
  title: string;
};

const Title = styled.div`
  align-items: center;
  display: flex;
  font-size: ${(props) => props.theme.fontSize.headerS};
  font-weight: 500;
  @media screen and (max-width: 680px) {
    font-size: 18px;
  }
`;

const Icon = styled.div`
  background: ${({ theme }) => theme.colors.light};
  border-radius: 8px;
  align-items: center;
  color: ${({ theme }) => theme.colors.grey};
  display: flex;
  font-size: ${({ theme }) => theme.fontSize.headerS};
  justify-content: center;
  margin: 0 24px 0 0;
  height: 56px;
  width: 56px;
  transition: all 200ms ease-in-out;
  img {
    display: block;
  }
  &.html {
    background: #fff1e9;
  }
  &.css {
    background: #e0fdef;
  }
  &.javascript {
    background: #ebf0ff;
  }
  &.accessibility {
    background: #f6e7ff;
  }
  @media screen and (max-width: 750px) {
    height: 40px;
    font-size: 18px;
    margin: 0 16px 0 0;
    width: 40px;
    img {
      width: 28px;
    }
  }
`;

const IconTitle = (props: IconTitleProps): JSX.Element => {
  const { icon = false, letter, title } = props;
  const iconImg =
    title === "Accessibility"
      ? accessibilityIcon
      : title === "CSS"
      ? cssIcon
      : title === "HTML"
      ? htmlIcon
      : jsIcon;

  return (
    <Title>
      {icon ? (
        <Icon className={title.toLocaleLowerCase()}>
          <img src={iconImg} alt="" />
        </Icon>
      ) : (
        <Icon className="iconBox">{letter}</Icon>
      )}
      {title}
    </Title>
  );
};

export default IconTitle;
