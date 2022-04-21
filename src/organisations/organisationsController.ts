// src/organisations/organisationsController.ts
import { Controller, Get, Path, Query, Route } from "tsoa";
import * as express from "express";
import { Organisation } from "./organisation";
import { OrganisationsService } from "./organisationsService";

@Route("/organisations")
export class OrganisationsController extends Controller {
  public router = express.Router();
  @Get("{organisationId}")
  public async getOrganisation(
    @Path() organisationId: number,
    @Query() name?: string
  ): Promise<Organisation> {
    return new OrganisationsService().get(organisationId, name);
  }
}
