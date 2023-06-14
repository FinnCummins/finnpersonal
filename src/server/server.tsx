import express from "express";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import {App} from "../components/app";

const server = express();
server.use(express.static("dist"));

server.get("*", (req, res) => {
  const initialMarkup = ReactDOMServer.renderToString(
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>
  );

  res.send(`
    <html>
      <head>
        <title>Finn's portfolio</title>
        <link rel="stylesheet" href="/index.css">
      </head>
      <body>
        <div id="app">${initialMarkup}</div>
        <script src="/main.js"></script>
      </body>
    </html>
  `)
});

server.listen(3000, () => console.log("Server is running..."));