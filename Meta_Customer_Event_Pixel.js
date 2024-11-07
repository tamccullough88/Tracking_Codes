!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');

//Replace "Dataset_ID with your unique Dataset ID
fbq('init', Dataset_ID);

// integrate third-party pixel tracking
analytics.subscribe("page_viewed", event => {
fbq('track', 'PageView');
});

//Product Viewed Event
analytics.subscribe("product_viewed", async (event) => {
  fbq('track', 'ViewContent', {
    content_ids:  event.data.productVariant.id,
    content_name: event.data.productVariant.title,
    currency: event.data.productVariant.price.currencyCode,
    value: event.data.productVariant.price.amount,
  });
});

//Product Added To Cart Event
analytics.subscribe("product_added_to_cart", (event) => {
    fbq('track', 'AddToCart', {
      content_ids: event.data.cartLine.merchandise.productVariant.id,
      content_name: event.data.cartLine.merchandise.productVariant.title,
      currency: event.data.cartLine.merchandise.productVariant.price.currencyCode,
      value: event.data.cartLine.merchandise.productVariant.price.amount,
    });
  });

//Checkout Started Event
analytics.subscribe("checkout_started", (event) => {
fbq('track', 'InitiateCheckout', {
    currency: event.data.checkout.currencyCode,
    value: event.data.checkout.totalPrice.amount,
  });
});

//Checkout Complete Event
analytics.subscribe("checkout_completed", (event) => {
  fbq('track', 'Purchase', {
    currency: event.data.cartLine.merchandise.price.currencyCode,
    value: event.data?.checkout?.totalPrice?.amount,
    content_ids: [event.data.cartLine.merchandise.id],
    content_name: event.data.cartLine.merchandise.product.title,
  });
});
