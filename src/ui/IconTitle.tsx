import styled from "styled-components";
import { IconTitleType } from "../types";
import htmlIcon from "../assets/icon-html.svg";
import cssIcon from "../assets/icon-css.svg";
import jsIcon from "../assets/icon-js.svg";
import accessibilityIcon from "../assets/icon-accessibility.svg";

type IconTitleProps = {
  title: IconTitleType;
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
  background: #ebf0ff;
  border-radius: 8px;
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 0 24px 0 0;
  height: 56px;
  width: 56px;
  img {
    display: block;
  }
  &.html {
    background: #fff1e9;
  }
  &.css {
    background: #e0fdef;
  }
  &.accessibility {
    background: #f6e7ff;
  }
  @media screen and (max-width: 680px) {
    height: 40px;
    margin: 0 16px 0 0;
    width: 40px;
    img {
      width: 28px;
    }
  }
`;

const IconTitle = (props: IconTitleProps): JSX.Element => {
  const { title } = props;
  const icon =
    title === "Accessibility"
      ? accessibilityIcon
      : title === "CSS"
      ? cssIcon
      : title === "HTML"
      ? htmlIcon
      : jsIcon;

  return (
    <Title>
      <Icon className={title.toLocaleLowerCase()}>
        <img src={icon} alt="" />
      </Icon>
      {title}
    </Title>
  );
};

export default IconTitle;
