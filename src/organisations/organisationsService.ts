// src/organisation/organisationsService.ts
import { Organisation } from "./organisation";

// A post request should not contain an id.
export type OrganisationCreationParams = Pick<
  Organisation,
  "name" | "owner" | "status"
>;

export class OrganisationsService {
  public get(id: number, name?: string): Organisation {
    return {
      id,
      name: name ?? "peters pipes",
      vat_number: "GB 12345645",
      address_line_1: "1 home road",
      address_city: "someplacesafe",
      address_postcode: "bha 11d",
      status: "all good",
      owner: "stotti",
      is_agent: false,
      created_at: new Date(),
    };
  }
}
