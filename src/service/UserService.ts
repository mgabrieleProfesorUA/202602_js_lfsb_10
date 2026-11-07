import type IUserRepository from "../repository/interface/IUserRepository.js";
import EmailServiceDI from "../Injection/SI_DI/UserServiceDI.js";
import User from "../model/User.js";

class UserService {
    // Notice we inject the INTERFACE, not the Sql implementation.
    constructor(private userRepo: IUserRepository, private emailService: EmailServiceDI) {}

    async registerUser(email: string, rawPassword: string): Promise<User> {
        // 1. Business Logic Validation
        const existingUser = await this.userRepo.getById(email);
        if (existingUser) {
            throw new Error("User already exists");
        }

        // 2. Logic processing (hashing)
        const hashedPassword = hashFunction(rawPassword);
        const newUser = new User(email, hashedPassword);

        // 3. Data persistence (delegated to repo)
        await this.userRepo.save(newUser);

        // 4. Side effects (orchestration)
        await this.emailService.sendWelcomeEmail(newUser);

        return newUser;
    }
}