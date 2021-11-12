const jsonServer = require("json-server");
const faker = require("faker");

const server = jsonServer.create();
const data = require("./data");
const router = jsonServer.router(data);
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

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
