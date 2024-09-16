import { useState } from "react";
import data from "../../data.json";
import Grid from "../ui/Grid";
import ProgressBar from "../ui/ProgressBar";
import Item from "../ui/Item";
import IconTitle from "../ui/IconTitle";
import Button from "../ui/Button";
import Notify from "../ui/Notify";
import Pager from "../ui/Pager";
import { getClassName } from "../utils";

const letters = ["A", "B", "C", "D", "E"];

type QuizProps = {
  setScore: React.Dispatch<React.SetStateAction<number>>;
  setShowScore: React.Dispatch<React.SetStateAction<boolean>>;
  subject: string;
};

const Quiz = (props: QuizProps): JSX.Element => {
  const { setScore, setShowScore, subject } = props;
  const quiz = data.quizzes.find((quiz) => quiz.title === subject);
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
      setScore((prev) => (prev += 1));
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
          <ProgressBar progress={page} />
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
              onClick={() => setShowScore(true)}
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

export default Quiz;
