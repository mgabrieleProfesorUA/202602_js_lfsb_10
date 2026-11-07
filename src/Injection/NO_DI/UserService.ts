class EmailService{
    sendEmail(message: string): void {
        console.log(`Email sent: ${message}`);
    }
}

class UserService {
    private emailService: EmailService;

    constructor(){
        this.emailService = new EmailService();
    }

    notifyUser(message: string): void {
        this.emailService.sendEmail(message);
    }
}

const userService = new UserService();
userService.notifyUser("Welcome to our service !!");