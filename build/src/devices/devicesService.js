"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DevicesService = void 0;
class DevicesService {
    get(id) {
        return {
            id,
            identifier: "TODO",
            serial_number: "Pro3-69999980",
            battery_level: 2,
            magnetite_level: 3,
            provisioning_status: "accepted",
            firmware_version: "B02.30 T1",
            last_reading_date: new Date(),
            last_contact_date: new Date(),
            service_due_date: new Date(),
            last_cleaned_date: new Date(),
            installed_date: new Date(),
            notifications: [],
        };
    }
}
exports.DevicesService = DevicesService;
