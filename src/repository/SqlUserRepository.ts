// The Concrete Implementation (SQL flavor)
import type IUserRepository from "./interface/IUserRepository.js";
import User from "../model/User.js";

class SqlUserRepository implements IUserRepository {
    dbConnection: any; // Assume SQL connection exists

    async getById(id: string): Promise<User | null> {
        // The nasty details of SQL exist ONLY here.
        const row = await this.dbConnection.query(`SELECT * FROM users WHERE id = '${id}'`);
        return row ? mapRowToUser(row) : null;
    }

    // Implement save() and delete()...
}