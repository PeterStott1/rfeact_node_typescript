"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
class UsersService {
    get(id, userName) {
        return {
            id,
            email: "jane@doe.com",
            userName: userName !== null && userName !== void 0 ? userName : "Jane Doe",
            authenticated: false,
            phoneNumbers: [],
        };
    }
    create(userCreationParams) {
        return Object.assign({ id: Math.floor(Math.random() * 10000), authenticated: false }, userCreationParams);
    }
}
exports.UsersService = UsersService;
