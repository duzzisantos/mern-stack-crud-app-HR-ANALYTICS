const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoSanitize = require("express-mongo-sanitize");
const helmet = require("helmet");

const db = require("./models");

db.mongoose
  .connect(process.env.MONGO_URI || db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connected successfully!");
  })
  .catch((err) => {
    if (err) {
      console.log("Database could not connect. Check settings and try again!");
      process.exit();
    }
  });

var corsOptions = {
  origin: "http://localhost:8080",
};
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Security parameters
app.use(helmet());
app.use(
  mongoSanitize({
    replaceWith: "-",
  })
);

app.use(
  helmet.contentSecurityPolicy({
    useDefaults: false,
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "http://localhost:3000/"],
      styleSrc: ["'self'"],
      imgSrc: ["'self'"],
      upgradeInsecureRequests: [],
      objectSrc: ["'none'"],
    },
  })
);

app.use(helmet.crossOriginEmbedderPolicy());
app.use(
  helmet.referrerPolicy({
    options: "no referrer",
  })
);
app.use(helmet.noSniff());
app.use(helmet.xssFilter());

// //prefer https connections

app.use(
  helmet.hsts({
    maxAge: 15552000,
    preload: true,
    includeSubDomains: false,
  })
);

//HTTP REQUESTS
app.get("/", (req, res) => {
  console.log(res.json({ message: "Backend works!" }));
});

app.post("/", (req, res) => {
  res.redirect("/register");
  console.log(res.json({ message: "This route handles registration!" }));
});

//REST routes
require("./routes/appraisal")(app);
require("./routes/register")(app);

//Connection
const PORT = process.env.PORT || 8080;
app.listen(PORT, (err) => {
  console.log("Listening to port", PORT);
  if (err) {
    console.log(err);
  }
});

//production settings

if(process.env.NODE_ENV === "production"){
   app.use(express.static('keffi/build'))
}
