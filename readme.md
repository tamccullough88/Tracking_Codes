# Customer Event Tracking Codes

## Overview
I decided to create tracking codes to use in the customer event since I noticed discrepancies between GA4 and Google Ads. Doing it this way helped me get more accurate data within my purchases and other events.
I am still in the process of writing these, but they work as is. 

Note, not all meta events work on all Shopify websites. I am not the only one to notice this when building customer events. The purchase even does work on all Shopify sites from what I have seen. 

If you would like to contribute to this code, please let me know!

## Summary of Google Ads Tracking Code

1. **Functionality**: This code enables tracking of key user actions on an e-commerce site by integrating Google Ads with event-specific data. It records when a user **completes checkout**, **starts checkout**, or **adds a product to the cart**. For each event, detailed information like purchase amount, currency, and product ID is sent to Google Ads for accurate conversion tracking and reporting.

2. **Required Changes**: Replace all instances of `Google_Ads_ID` with your Google Ads account ID, and `Google_Ads_Conversion_ID(AW-123456/blahblahblah)` with unique conversion IDs specific to each event type (checkout completed, checkout started, and product added to cart). These IDs are necessary for Google Ads to properly identify and categorize each tracked event.

3. **Purpose of Event Setup**: These events are chosen to provide insights into key stages of the customer journey—**adding a product to the cart** (indicating interest), **starting checkout** (indicating purchase intent), and **completing checkout** (indicating a successful conversion). Tracking each stage allows for more granular insights and enables advertisers to target optimizations effectively based on where customers are in the purchasing process.


## Summary of Facebook Pixel Tracking Code

1. **Functionality**: This code enables Facebook Pixel tracking for key e-commerce events such as **page views**, **product views**, **product additions to cart**, **checkout initiation**, and **purchase completion**. It helps advertisers understand user interactions on the website by sending relevant event data (e.g., product ID, currency, and price) to Facebook for conversion tracking and retargeting.

2. **Required Changes**: Replace `Dataset_ID` with your unique Facebook Pixel ID. This ID is necessary for initializing Facebook Pixel tracking and associating the recorded events with your Facebook Ads account. Ensure each event uses `content_ids`, `currency`, and `value` for accurate reporting.

3. **Purpose of Event Setup**: The events are set up to capture the customer journey, from initial engagement (**page viewed** and **product viewed**) to **purchase completion**. This detailed tracking provides insights at each interaction stage, enabling better retargeting and optimizing ad strategies based on where customers are in the conversion funnel.

## Summary of Microsoft UET Tracking Code

1. **Functionality**: This code sets up Microsoft UET (Universal Event Tracking) for tracking key e-commerce events on the website, specifically **checkout initiation** and **purchase completion**. Each event captures relevant data such as total price and currency, allowing Microsoft Ads to track conversions and optimize ad performance based on user actions.

2. **Required Changes**: Replace `Microsoft_UET_ID` with your unique UET tag ID. This ID is essential for initializing the UET tag, which links the tracked events to your Microsoft Ads account. Make sure the tag ID is accurate for successful event tracking and reporting.

3. **Purpose of Event Setup**: The events are configured to capture key stages in the customer journey: **checkout started** (indicating purchase intent) and **checkout completed** (confirming a successful purchase). This setup provides insight into conversion behavior, helping advertisers refine their audience targeting and improve ad efficiency based on user actions.

