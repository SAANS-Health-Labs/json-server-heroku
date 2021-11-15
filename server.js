const jsonServer = require("json-server");
const faker = require("faker");

const server = jsonServer.create();
const data = require("./data");
const router = jsonServer.router(data);
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;
const cors = require("cors");

server.use(
  cors({
    origin: true,
    credentials: true,
    preflightContinue: false,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  })
);
server.options("*", cors());

server.get("/users/logout", (req, res) => {
  res.json({ message: "success" });
});

server.use(jsonServer.bodyParser);
server.post("/users/login", (req, res) => {
  res.json(faker.helpers.randomize(data.users));
});

server.use(middlewares);
server.use(router);

server.listen(port);
