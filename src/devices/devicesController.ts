// src/devices/devicesController.ts
import { Controller, Get, Path, Route } from "tsoa";
import * as express from "express";
import { Device } from "./device";
import { DevicesService } from "./devicesService";

@Route("/devices")
export class DevicesController extends Controller {
  public router = express.Router();
  @Get("{deviceId}")
  public async getDevice(@Path() deviceId: number): Promise<Device> {
    return new DevicesService().get(deviceId);
  }
}
