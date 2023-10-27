import app from "./app.js";

const port = process.env.PORT || 5001;

init();

async function init() {
  try {
    app.listen(port, () => console.log(`Server stared on port ${port}*`));
  } catch (error) {
    console.error(`An error occurred: ${JSON.stringify(error)}`);
    process.exit(1);
  }
}
