import express from "express";
import morgan from "morgan";
import initialRouter from "./routers/initialRouter";
// import videoRouter from "./routers/videoRouter";
// import userRouter from "./routers/userRouter";

const app = express();
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);
app.use("/", initialRouter);

export default app;