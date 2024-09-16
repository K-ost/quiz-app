import styled from "styled-components";

type GridProps = React.ComponentPropsWithoutRef<"div"> & {
  children: React.ReactNode;
  cols: number;
  sm: number;
};

const GridBox = styled.div<{ $cols: number; $sm: number }>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.$cols}, 1fr);
  grid-column-gap: 24px;
  grid-row-gap: 64px;
  margin: 0 0 24px;
  &.norow {
    grid-row-gap: 0;
  }
  &:last-child {
    margin: 0;
  }
  @media screen and (max-width: 1020px) {
    grid-template-columns: repeat(${(props) => props.$sm}, 1fr);
  }
  @media screen and (max-width: 750px) {
    grid-row-gap: 40px;
    margin: 0 0 12px;
  }
`;

const Grid = (props: GridProps): JSX.Element => {
  const { children, cols, sm } = props;
  return (
    <GridBox $cols={cols} $sm={sm} {...props}>
      {children}
    </GridBox>
  );
};

export default Grid;
