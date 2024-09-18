import { useAppStore } from "../store/useAppStore";
import Button from "../ui/Button";
import Grid from "../ui/Grid";
import IconTitle from "../ui/IconTitle";
import ScoreScreen from "./ScoreScreen";

const Score = (): JSX.Element => {
  const { icon, questionsCount, score, subject, resetAppStore } = useAppStore();

  return (
    <Grid cols={2} sm={1}>
      <div>
        <h1>
          Quiz completed <b>You scored...</b>
        </h1>
      </div>
      <div>
        <ScoreScreen>
          <IconTitle title={subject} icon={icon} />
          <h2>{score}</h2>
          <p className="color-grey">out of {questionsCount}</p>
        </ScoreScreen>
        <Button style={{ width: "100%" }} onClick={() => resetAppStore()}>
          Play Again
        </Button>
      </div>
    </Grid>
  );
};

export default Score;
