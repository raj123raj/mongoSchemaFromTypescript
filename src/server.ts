import * as express from "express";
import { connect } from "./database/database";

const app = express();
const port = 5002;//Available port number and it should not be used by other services

connect();

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
