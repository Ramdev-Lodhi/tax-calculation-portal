import app from "./app.js";
import database from "./config/db.js";
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT);

(async () => {
  try {
    console.log("Application Started", {
      meta: {
        PORT: process.env.PORT,
        SERVER_URL: process.env.SERVER_URL,
      },
    });
    const connection = await database.connectDB();

    console.log("DATABASE CONNECTION", {
      meta: {
        CONNECTION_NAME: connection.name,
      },
    });
  } catch (err) {
    console.error("Application Error", { meta: err });
    server.close((error) => {
      if (error) {
        console.error("Application Error", { meta: err });
      }

      process.exit(1);
    });
  }
})();
