import express, { Request, Response, NextFunction } from "express"
import helmet from "helmet"
import cors from "cors"
import logger from "morgan"
import compression from "compression"

class App {
  public express: express.Application;

  // constructor(router: express.Router)
  constructor() {
      this.express = express()
      this.config()
      // this.express.use(router)
  }

  private config(): void {
      // Body parser to parse JSON and form-urlencoded payloads
      this.express.use(express.json())
      this.express.use(express.urlencoded({ extended: false }))

      // Logger for requests
      this.express.use(logger("common"))

      // CORS middleware
      this.express.use(cors())

      // Gzip compression of responses
      this.express.use(compression())
  }
}

export default App