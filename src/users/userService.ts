// src/users/usersService.ts
import { User } from "./user";

// A post request should not contain an id.
export type UserCreationParams = Pick<
  User,
  "email" | "userName" | "phoneNumbers"
>;

export class UsersService {
  public get(id: number, userName?: string): User {
    return {
      id,
      email: "jane@doe.com",
      userName: userName ?? "Jane Doe",
      authenticated: false,
      phoneNumbers: [],
    };
  }

  public create(userCreationParams: UserCreationParams): User {
    return {
      id: Math.floor(Math.random() * 10000), // Random
      authenticated: false,
      ...userCreationParams,
    };
  }
}
