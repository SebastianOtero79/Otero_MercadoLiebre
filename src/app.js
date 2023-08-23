const express = require("express");
const app = express();

const path = require("path");
const publicPath = path.join(__dirname, "../public");

app.use(express.static(publicPath));

const PORT = process.env.PORT || 3030;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/home.html"));
});
