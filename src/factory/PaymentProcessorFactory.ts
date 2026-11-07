interface IPaymentProcessor {
    charge(amount: number): void;
}

class StripeProcessor implements IPaymentProcessor { /* ... handled Stripe SDK setup ... */ }
class PayPalProcessor implements IPaymentProcessor { /* ... handled PayPal SDK setup ... */ }

// The Factory
class PaymentProcessorFactory {
    static getProcessor(type: string): IPaymentProcessor {
        switch(type) {
            case 'stripe':
                // Encapsulate complex setup here
                const apiKey = config.stripeKey;
                return new StripeProcessor(apiKey);
            case 'paypal':
                return new PayPalProcessor(config.paypalClientId);
            default:
                throw new Error("Unknown processor");
        }
    }
}

// Usage inside a Service:
const processor = PaymentProcessorFactory.getProcessor(userRequest.paymentType);
processor.charge(100);