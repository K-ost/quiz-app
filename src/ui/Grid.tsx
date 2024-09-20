import styled from "styled-components";

type GridProps = {
  children: React.ReactNode;
  cols: number;
  sm: number;
  norow?: boolean;
};

const GridBox = styled.div<{ $cols: number; $sm: number; $norow?: boolean }>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.$cols}, 1fr);
  grid-column-gap: 24px;
  grid-row-gap: ${(props) => (props.$norow ? 0 : "64px")};
  margin: 0 0 24px;
  &:last-child {
    margin: 0;
  }
  @media screen and (max-width: 1020px) {
    grid-template-columns: repeat(${(props) => props.$sm}, 1fr);
  }
  @media screen and (max-width: 750px) {
    grid-row-gap: ${(props) => (props.$norow ? 0 : "40px")};
    margin: 0 0 12px;
  }
`;

const Grid = (props: GridProps): JSX.Element => {
  const { children, cols, sm, norow } = props;
  return (
    <GridBox $cols={cols} $sm={sm} $norow={norow}>
      {children}
    </GridBox>
  );
};

export default Grid;
