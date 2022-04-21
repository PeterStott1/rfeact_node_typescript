// src/app.ts
import express, {
  Response as ExResponse,
  Request as ExRequest,
  NextFunction,
} from "express";
import compression from "compression";
import cors from "cors";
import helmet from "helmet";
import { ValidateError } from "tsoa";
import swaggerUi from "swagger-ui-express";
import bodyParser from "body-parser";
import { RegisterRoutes } from "../build/routes";

// ########################################################################
// controllers need to be referenced in order to get crawled by the generator
import "./users/usersController";
import "./devices/devicesController";
import "./organisations/organisationsController";
// ########################################################################

export const app = express();

// Use body parser to read sent json payloads
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
// compresses all the responses
app.use(compression());
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use("/docs", swaggerUi.serve, async (_req: ExRequest, res: ExResponse) => {
  return res.send(
    swaggerUi.generateHTML(await import("../build/swagger.json"))
  );
});

RegisterRoutes(app);

app.use(function notFoundHandler(_req, res: ExResponse) {
  res.status(404).send({
    message: "Not Found",
  });
});

app.use(function errorHandler(
  err: unknown,
  req: ExRequest,
  res: ExResponse,
  next: NextFunction
): ExResponse | void {
  if (err instanceof ValidateError) {
    console.warn(`Caught Validation Error for ${req.path}:`, err.fields);
    return res.status(422).json({
      message: "Validation Failed",
      details: err?.fields,
    });
  }
  if (err instanceof Error) {
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }

  next();
});
