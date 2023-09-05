import express, {
  Application,
  Router,
  Request,
  Response,
  NextFunction,
} from "express";
import { APP_PORT } from "../config";
import { authRouter } from "./routes";
import path from "path";

class Server {
  private app: Application;
  private router: Router;

  constructor() {
    this.app = express();
    
    // Static Files for uploaded content and build.
    this.app.use("/uploads", express.static("uploads"));
    this.app.use(express.static("build"));
    this.app.use((req: Request, res: Response, next: NextFunction) =>
      res.sendFile(path.join(__dirname, "..", "build", "index.html"))
    );

    // Initialized Routes.
    this.router = Router();
    this.initRoutes();
    this.app.use("/api/v1", this.router);
    
    this.listen();
  }

  initRoutes() {
    this.router.use("/auth", authRouter);
    this.router.get("/", (req, res) =>
      res.json({ message: "hello from smartclassroom" })
    );
  }

  listen() {
    this.app.listen(APP_PORT, () =>
      console.log(`running on http://localhost:${APP_PORT}`)
    );
  }
}

new Server();
