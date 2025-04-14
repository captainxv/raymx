// src/lib/utils/payment.ts

export interface PaymentData {
    transactionAmount: number;
    token: string;
    description: string;
    installments: number;
    paymentMethodId: string;
    issuer: string;
    email: string;
    identificationNumber: string;
  }
  
  export async function processPayment(paymentData: PaymentData): Promise<any> {
    try {
      const response = await fetch('/process_payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(paymentData)
      });
      if (!response.ok) {
        // Log the error details with status
        const errorInfo = await response.text();
        console.error(`Payment processing error: Status ${response.status}`, errorInfo);
        throw new Error('Payment processing error.');
      }
      const result = await response.json();
      console.log('Payment processed successfully:', result);
      return result;
    } catch (error) {
      // Detailed error logging
      console.error('Error in processPayment:', error);
      // Optionally, send this error to a backend logging service or global log store
      throw error;
    }
  }
  