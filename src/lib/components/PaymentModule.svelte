<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  // Alias the imported function to avoid duplicate identifier issues.
  import { loadMercadopago as mpLoad } from '@mercadopago/sdk-js';

  const PUBLIC_KEY = 'TEST-4852daf7-ab1e-43b7-8a17-2673f11d21b7';
  let amount = 100;

  let cardPaymentBrickController: any = null;

  async function renderCardPaymentBrick() {
    try {
      await mpLoad();
      // Create a new MercadoPago instance using the test public key.
      const mp = new window.MercadoPago(PUBLIC_KEY, { locale: 'es-MX' });
      
      // Get the bricks builder from the SDK.
      const bricksBuilder = mp.bricks();

      const settings = {
        initialization: {
          amount: amount,
        },
        callbacks: {
          onReady: () => {
            console.log("Card Payment Brick is ready.");
          },
          onSubmit: (formData: any) => {
            console.log("onSubmit callback:", formData);
            return new Promise((resolve, reject) => {
              fetch('/process_payment', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
              })
                .then((response) => response.json())
                .then((response) => {
                  console.log("Payment processed successfully:", response);
                  resolve(response);
                })
                .catch((error) => {
                  console.error("Error processing payment:", error);
                  reject(error);
                });
            });
          },
          onError: (error: any) => {
            console.error("Error in Card Payment Brick:", error);
          },
        },
      };

      cardPaymentBrickController = await bricksBuilder.create(
        'cardPayment',
        'cardPaymentBrick_container',
        settings
      );
      // Attach to window for global access if needed.
      window.cardPaymentBrickController = cardPaymentBrickController;

    } catch (error) {
      console.error("Error during MercadoPago initialization:", error);
    }
  }

  onMount(() => {
    renderCardPaymentBrick();

    return () => {
      if (window.cardPaymentBrickController) {
        window.cardPaymentBrickController.unmount();
      }
    };
  });
</script>

<style>
  #cardPaymentBrick_container {
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
</style>

<div id="cardPaymentBrick_container"></div>
