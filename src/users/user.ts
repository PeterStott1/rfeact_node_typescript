export interface User {
  id: number;
  email: string;
  userName: string;
  authenticated?: false | true;
  phoneNumbers: string[];
}
