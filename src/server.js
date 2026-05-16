const app = require("./app");

const {
  connectDB,
} = require("./config/db");

const { initDB } = require("./models");

const PORT =
  process.env.PORT || 5000;

const startServer = async () => {
  await connectDB();

  await initDB();

  app.listen(PORT, () => {
    console.log(
      `Server running on port ${PORT}`
    );
  });
};

startServer();