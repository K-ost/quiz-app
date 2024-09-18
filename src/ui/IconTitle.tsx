import styled from "styled-components";
import { getImageLink } from "../utils";

type IconTitleProps = {
  icon?: string;
  letter?: string;
  title: string;
};

const Title = styled.div`
  align-items: center;
  display: inline-flex;
  font-size: ${(props) => props.theme.fontSize.headerS};
  font-weight: 500;
  @media screen and (max-width: 680px) {
    font-size: 18px;
  }
`;

export const Icon = styled.div`
  background: ${({ theme }) => theme.colors.light};
  border-radius: 8px;
  align-items: center;
  color: ${({ theme }) => theme.colors.grey};
  display: flex;
  font-size: ${({ theme }) => theme.fontSize.headerS};
  justify-content: center;
  margin: 0 24px 0 0;
  height: 56px;
  min-width: 56px;
  transition: all 200ms ease-in-out;
  img {
    display: block;
    max-width: 40px;
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
    min-width: 40px;
    img {
      width: 28px;
    }
  }
`;

const IconTitle = (props: IconTitleProps): JSX.Element => {
  const { icon, letter, title } = props;

  return (
    <Title>
      {icon && icon.length ? (
        <Icon className={title.toLocaleLowerCase()}>
          <img src={getImageLink(icon)} alt="" />
        </Icon>
      ) : (
        <Icon>{letter}</Icon>
      )}
      {title}
    </Title>
  );
};

export default IconTitle;
