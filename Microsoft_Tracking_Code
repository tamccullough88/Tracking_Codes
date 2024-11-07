//Replace "Microsoft_UET_ID" With your unique UET tag ID


(function(w,d,t,r,u){var f,n,i;w[u]=w[u]||[],f=function(){var o={ti:"Microsoft_UET_Id", enableAutoSpaTracking: true};o.q=w[u],w[u]=new UET(o),w[u].push("pageLoad")},n=d.createElement(t),n.src=r,n.async=1,n.onload=n.onreadystatechange=function(){var s=this.readyState;s&&s!=="loaded"&&s!=="complete"||(f(),n.onload=n.onreadystatechange=null)},i=d.getElementsByTagName(t)[0],i.parentNode.insertBefore(n,i)})(window,document,"script","//bat.bing.com/bat.js","uetq");

//purchase event
analytics.subscribe("checkout_completed", (event) => {
  uetq = uetq || [];
  uetq.push('event','purchase', {
    'revenue_value': event.data.checkout.totalPrice.amount,
    'currency' : event.data.checkout.currencyCode
  });
});

//checkout event
analytics.subscribe("checkout_started", (event) => {
  window.uetq = window.uetq || [];
  window.uetq.push("event", "BeginCheckout", {
  'revenue_value':event.data.checkout.totalPrice.amount,
  'currency': event.data.checkout.currencyCode
  });
});
