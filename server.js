const express = require("express");
const app = express();
const PORT = process.env.Port || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"))
}

app.use("/api", require("./routes/apiRoutes"))

app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));
