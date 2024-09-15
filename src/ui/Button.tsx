import styled from "styled-components";

const CustomButton = styled.button`
  background: ${(props) => props.theme.colors.purple};
  border: 0;
  border-radius: 24px;
  color: ${(props) => props.theme.colors.white};
  cursor: pointer;
  font-size: ${(props) => props.theme.fontSize.headerS};
  line-height: 28px;
  outline: none;
  padding: 32px 64px;
  transition: all 200ms ease-in-out;
  &:hover {
    opacity: 0.5;
  }
  @media screen and (max-width: 750px) {
    border-radius: 12px;
    font-size: 18px;
    line-height: 20px;
    padding: 18px 24px;
  }
`;

const Button = (
  props: React.ComponentPropsWithoutRef<"button">
): JSX.Element => {
  return <CustomButton {...props} />;
};

export default Button;
