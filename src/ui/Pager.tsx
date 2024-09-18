import styled from "styled-components";

const PagerBox = styled.div`
  font-style: italic;
  font-size: ${(props) => props.theme.fontSize.textS};
  margin: 0 0 27px;
  @media screen and (max-width: 750px) {
    font-size: 14px;
    margin: 0 0 12px;
  }
`;

const Pager = (props: React.ComponentPropsWithoutRef<"div">): JSX.Element => {
  return <PagerBox className="color-grey" {...props} />;
};

export default Pager;
