//replace all instances of "Google_Ads_ID" and "Google_Ads_Conversion_ID(AW-123456/blahblahblah)" with the appropriate event ID from Google Ads. 
//Each event will have a unique ID

const script = document.createElement('script');
script.setAttribute('src', 'https://www.googletagmanager.com/gtag/js?id=Google_Ads_ID');
script.setAttribute('async', '');
document.head.appendChild(script);

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'Google Ads ID');
//gtag ends here

//ec + purchase code starts here
analytics.subscribe("checkout_completed", (event) => {
  gtag('set', 'user_data', {
    "email": event.data.checkout.email,
    "phone_number": event.data.checkout.phone
  });
  gtag('event', 'conversion', {
    'send_to': 'Google_Ads_Conversion_ID(AW-123456/blahblahblah)',
    'value': event.data.checkout.totalPrice.amount,
    'transaction_id': event.data.checkout.order.id,
    'currency': event.data.checkout.currencyCode
  });
});

analytics.subscribe("checkout_started", (event) => {
  gtag('event', 'conversion', {
    'send_to': 'Google_Ads_Conversion_ID(AW-123456/blahblahblah)',
    'value': event.data.checkout.totalPrice.amount,
    'currency': event.data.checkout.currencyCode
  });
});

analytics.subscribe("product_added_to_cart", (event) => {
  gtag('event', 'conversion', {
    'send_to': 'Google_Ads_Conversion_ID(AW-123456/blahblahblah)',
    'value': event.data.productPrice,
    'currency': event.data.currencyCode,
    'item_id': event.data.cartLine?.merchandise.id,
    'item_name': event.data.cartLine?.merchandise.product.title
  });
});

function logEvent(eventType, event){
  console.log(`%c Event: ${eventType}`, 'color: blue; font-weight: bold; font-size: 14px');
  console.log(event);
}
