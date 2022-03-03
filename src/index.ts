import cluster from 'cluster'
import { cpus } from 'os'

import App from "./App"
import config from "./config/config"


const app = new App().express
const port = config.port

if (cluster.isPrimary === true) {
    const CPUS: any = cpus()
    CPUS.forEach(() => cluster.fork())
} else {
    app.listen(port, () => {
        console.log(`API is listening on http://localhost:${port} on ${process.pid}`);
    });
}
