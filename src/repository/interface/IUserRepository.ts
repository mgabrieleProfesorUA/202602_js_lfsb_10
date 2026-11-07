// The Contract (Interface)
// Other parts of the app only know about this interface.

import User from "../../model/User.js";

export default interface IUserRepository {
    getById(id: string): Promise<User | null>;
    //save(user: User): Promise<void>;
    //delete(id: string): Promise<void>;
}