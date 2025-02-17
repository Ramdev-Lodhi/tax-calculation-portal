import app from "./app.js";

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
