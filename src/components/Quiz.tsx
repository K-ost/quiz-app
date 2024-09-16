import { useState } from "react";
import data from "../../data.json";
import Grid from "../ui/Grid";
import ProgressBar from "../ui/ProgressBar";
import Item from "../ui/Item";
import IconTitle from "../ui/IconTitle";
import Button from "../ui/Button";
import Notify from "../ui/Notify";
import Pager from "../ui/Pager";

const letters = ["A", "B", "C", "D", "E"];

type QuizProps = {
  subject: string;
};

const Quiz = (props: QuizProps): JSX.Element => {
  const { subject } = props;
  const quiz = data.quizzes.find((quiz) => quiz.title === subject);
  const [page, setPage] = useState<number>(1);

  if (!subject.length) return <></>;
  if (!quiz) return <>There's no quiz about this subject</>;

  const currentQustion = quiz.questions[page - 1];

  return (
    <Grid cols={2} sm={1}>
      <div>
        <Pager>
          Question {page} of {quiz.questions.length}
        </Pager>
        <h2>{currentQustion.question}</h2>
        <ProgressBar progress={page} />
      </div>
      <div>
        {currentQustion.options.map((option, index) => (
          <Item key={option} option="true" className="">
            <IconTitle title={option} letter={letters[index]} />
          </Item>
        ))}
        <Button style={{ width: "100%" }}>Submit Answer</Button>
        <Notify>Please select an answer</Notify>
      </div>
    </Grid>
  );
};

export default Quiz;
