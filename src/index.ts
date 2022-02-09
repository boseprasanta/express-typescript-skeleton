
import App from "./App"
import config from "./config/config"


const app = new App().express
const port = config.port

app.listen(port, () => {
    console.log(`API is listening on http://localhost:${port}`);
});