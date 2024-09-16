import Button from "../ui/Button";
import Grid from "../ui/Grid";
import IconTitle from "../ui/IconTitle";
import ScoreScreen from "./ScoreScreen";

type ScoreProps = {
  score: number;
  subject: string;
  reset: () => void;
};

const Score = (props: ScoreProps): JSX.Element => {
  const { score, subject, reset } = props;

  return (
    <Grid cols={2} sm={1}>
      <div>
        <h1>
          Quiz completed <b>You scored...</b>
        </h1>
      </div>
      <div>
        <ScoreScreen>
          <IconTitle title={subject} icon />
          <h2>{score}</h2>
          <p>out of 10</p>
        </ScoreScreen>
        <Button style={{ width: "100%" }} onClick={reset}>
          Play Again
        </Button>
      </div>
    </Grid>
  );
};

export default Score;
