import { makeStyles, withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor:
      theme.palette.grey[theme.palette.type === "dark" ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: "orange",
  },
}))(LinearProgress);

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function Skills(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h4>
        <small>{props.name}</small>
      </h4>

      <BorderLinearProgress variant="determinate" value={props.val} />
    </div>
  );
}
