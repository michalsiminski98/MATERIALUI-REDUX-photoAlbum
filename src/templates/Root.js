import { Button, CircularProgress } from "@material-ui/core";

function Root() {
  return (
    <>
      <CircularProgress />
      <Button variant="contained" color="primary">
        Primary
      </Button>
      <ul>
        <li>asd</li>
      </ul>
    </>
  );
}

export default Root;
