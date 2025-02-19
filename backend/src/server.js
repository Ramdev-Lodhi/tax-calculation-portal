import app from "./app.js";
import database from "./config/db.js";

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

(async () => {
  try {
    console.log("Application Started", {
      meta: {
        PORT: process.env.PORT,
        SERVER_URL: process.env.SERVER_URL,
      },
    });

    // Ensure DB connection only if needed
    const connection = await database.connectDB();
    console.log("DATABASE CONNECTED:", {
      meta: { CONNECTION_NAME: connection.name },
    });
  } catch (err) {
    console.error("Application Error", { meta: err });
    server.close(() => {
      console.error("Closing server due to error");
      process.exit(1);
    });
  }
})();
