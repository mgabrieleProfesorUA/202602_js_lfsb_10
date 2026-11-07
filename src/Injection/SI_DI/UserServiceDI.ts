export default class EmailServiceDI{
    sendEmail(message: string): void {
        console.log(`Email sent: ${message}`);
    }
}

class UserServiceDI {
    private emailServiceDI: EmailServiceDI;

    constructor(emailServiceDI: EmailServiceDI){
        this.emailServiceDI = emailServiceDI;
    }

    notifyUser(message: string): void {
        this.emailServiceDI.sendEmail(message);
    }
}

const emailServiceDI = new EmailServiceDI();
const userServiceDI = new UserServiceDI(emailServiceDI);
userServiceDI.notifyUser("Welcome to our service !!");