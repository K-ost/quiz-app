import { useState } from "react";
import Grid from "../ui/Grid";
import ProgressBar from "../ui/ProgressBar";
import Item from "../ui/Item";
import IconTitle from "../ui/IconTitle";
import Button from "../ui/Button";
import Notify from "../ui/Notify";
import Pager from "../ui/Pager";
import { getClassName } from "../utils";
import { useAppStore } from "../store/useAppStore";
import { Quiz } from "../types";

type QuizProps = {
  quiz: Quiz;
};

const letters = ["A", "B", "C", "D", "E"];

const QuizScreen = (props: QuizProps): JSX.Element => {
  const { quiz } = props;
  const { setScore, setScreen } = useAppStore();
  const [page, setPage] = useState<number>(1);
  const [picked, setPicked] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [checked, setChecked] = useState<boolean>(false);

  if (!quiz) return <>There's no quiz for this subject.</>;

  const currentQuestion = quiz.questions[page - 1];
  const isLastPage = quiz.questions.length === page;

  const pickAnswer = (option: string) => {
    if (!checked) {
      setPicked(option);
      setError(false);
    }
    return;
  };

  const submitAnswerHandler = () => {
    if (!picked.length) return setError(true);
    setChecked(true);
    if (picked === currentQuestion.answer) {
      setScore();
    }
  };

  const nextQuestionHandler = () => {
    setPage((prev) => (prev += 1));
    setPicked("");
    setChecked(false);
  };

  return (
    <>
      <Grid cols={2} sm={1}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ flexGrow: 1 }}>
            <Pager>
              Question {page} of {quiz.questions.length}
            </Pager>
            <h2>{currentQuestion.question}</h2>
          </div>
          <ProgressBar all={quiz.questions.length} progress={page} />
        </div>

        <div>
          {currentQuestion.options.map((option, index) => {
            return (
              <Item
                key={option}
                option="true"
                className={getClassName(
                  checked,
                  option,
                  picked,
                  currentQuestion.answer
                )}
                onClick={() => pickAnswer(option)}
                data-testid={`option-${index}`}
              >
                <IconTitle title={option} letter={letters[index]} />
              </Item>
            );
          })}
        </div>
      </Grid>

      <Grid cols={2} sm={1} className="norow">
        <div></div>
        <div>
          {((!isLastPage && !checked) || (isLastPage && !checked)) && (
            <Button style={{ width: "100%" }} onClick={submitAnswerHandler}>
              Submit Answer
            </Button>
          )}

          {!isLastPage && checked && (
            <Button style={{ width: "100%" }} onClick={nextQuestionHandler}>
              Next Question
            </Button>
          )}

          {isLastPage && checked && (
            <Button
              style={{ width: "100%" }}
              onClick={() => setScreen("score")}
            >
              Finish the test
            </Button>
          )}

          <Notify show={error}>Please select an answer</Notify>
        </div>
      </Grid>
    </>
  );
};

export default QuizScreen;
