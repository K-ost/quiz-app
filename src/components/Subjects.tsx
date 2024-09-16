import Grid from "../ui/Grid";
import IconTitle from "../ui/IconTitle";
import Item from "../ui/Item";

type SubjectsProps = {
  setSubject: React.Dispatch<React.SetStateAction<string>>;
  subject: string;
  show: boolean;
};

const Subjects = (props: SubjectsProps): JSX.Element => {
  const { setSubject, subject, show } = props;

  if (!show) return <></>;

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
        <Item onClick={() => setSubject("HTML")}>
          <IconTitle title="HTML" icon />
        </Item>
        <Item onClick={() => setSubject("CSS")}>
          <IconTitle title="CSS" icon />
        </Item>
        <Item onClick={() => setSubject("JavaScript")}>
          <IconTitle title="JavaScript" icon />
        </Item>
        <Item onClick={() => setSubject("Accessibility")}>
          <IconTitle title="Accessibility" icon />
        </Item>
      </div>
    </Grid>
  );
};

export default Subjects;
