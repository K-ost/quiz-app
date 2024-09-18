import Grid from "../ui/Grid";
import IconTitle from "../ui/IconTitle";
import Item from "../ui/Item";
import { useAppStore } from "../store/useAppStore";
import { Quiz } from "../types";

type SubjectsProps = {
  quizzes: Quiz[];
};

const Subjects = (props: SubjectsProps): JSX.Element => {
  const { quizzes } = props;
  const { setIcon, setQuestionsCount, setScreen, setSubject } = useAppStore();

  const chooseSubject = (icon: string, title: string, count: number): void => {
    setIcon(icon);
    setSubject(title);
    setQuestionsCount(count);
    setScreen("quiz");
  };

  return (
    <Grid cols={2} sm={1}>
      <div>
        <h1>
          Welcome to the <b>Frontend Quiz!</b>
        </h1>
        <div className="color-grey">
          <em>Pick a subject to get started.</em>
        </div>
      </div>
      <div>
        {quizzes.map((quiz) => (
          <Item
            key={quiz.title}
            onClick={() =>
              chooseSubject(quiz.icon, quiz.title, quiz.questions.length)
            }
            data-testid={`subject-${quiz.title}`}
          >
            <IconTitle title={quiz.title} icon={quiz.icon} />
          </Item>
        ))}
      </div>
    </Grid>
  );
};

export default Subjects;
