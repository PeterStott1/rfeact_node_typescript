export interface Device {
  id: number;
  identifier: string;
  serial_number: string;
  battery_level: number;
  magnetite_level: number;
  provisioning_status: string;
  firmware_version: string;
  last_reading_date: Date;
  last_contact_date: Date;
  service_due_date: Date;
  last_cleaned_date: Date;
  installed_date: Date;
  notifications: any[];
}
