// src/types/mercadopago.d.ts

// Declare the module for the MercadoPago SDK.
declare module '@mercadopago/sdk-js' {
    export function loadMercadopago(): Promise<void>;
  }
  
  // Extend the global Window interface to include the extra properties.
  declare global {
    interface Window {
      MercadoPago: any;
      cardPaymentBrickController: any;
    }
  }
  
  export {}; // Ensures this file is treated as a module.
  