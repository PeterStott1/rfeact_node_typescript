"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganisationsService = void 0;
class OrganisationsService {
    get(id, name) {
        return {
            id,
            name: name !== null && name !== void 0 ? name : "peters pipes",
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
exports.OrganisationsService = OrganisationsService;
