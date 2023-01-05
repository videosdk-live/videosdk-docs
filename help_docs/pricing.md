---
title: Pricing FAQ
hide_title: false
hide_table_of_contents: false
description: Build customizable real-time video & audio calling applications using Video SDK within 5 minutes
pagination_label: "Pricing"
keywords:
  - Pricing
  - Video sdk
  - javascript sdk
  - Prebuilt sdk
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
sidebar_label: Pricing
slug: pricing
---

# Pricing FAQ

## Audio-Video Calling

## **Charges**

#### **1. What is participant-minute?**
  - There are 2 terms, **meeting mins** & **participant mins**. Participant-mins is a per-participant min.
  - In other words, `(Meeting mins x No. of participants = Participant-mins)`
  - 10,000 participant-mins are free every month
#### **2. What are the charges?**
  - It’s pay-as-you-go, or use the service this month & pay next month
  - Every month, the first 10000 participant-mins are FREE!
  - Charges are as below,
      - **Communication charges**, per participant-min (First 10000 free)
            
            
          | Resolution | Per participant min |
          | --- | --- |
          | Audio | $0.0006 |
          | SD Video | $0.002 |
          | HD Video | $0.003 |
          | Full HD Video | $0.007 |
          | 2K Video | $0.007 |
          | 2K+ Video | $0.007 |
            
          (Note: In video resolution, audio cost is already included)
            
        - **Composer charges**, per used minute (irrespective of number of participants)
            
            
            | Service | Charge | Unit |
            | --- | --- | --- |
            | Cloud recording | $0.015 | Per recorded min |
            | Re-streaming | $0.015 | Per re-streamed min (RTMP-out) |
            | Recorded video hosting | $0.003 | Per stored min, per month |
#### **3. What are the Free Video SDK services?**
  - You are getting free 10,000 participant mins for conferencing/calling, all video resolutions.
#### **4. What are charges for live-messaging & signaling?**
  - For live-messaging, live-comments, signaling & interactions - You can use PubSub feature & it’s free. Currently, we don’t have plans to charge for it
#### **5. Does Free 10000 mins include all video call/conference resolutions?**
  - Yes, Free 10000 mins include all (SD, HD, Full HD, 2K & 2K+) resolutions
#### **6. Does Free 10000 mins include composer service mins as well?**
  - No, Free 10000 mins includes only call/conference, composer services like cloud recording, re-streaming (RTMP-out), and recorded video hosting are not included

## **Calculation method**

#### **1. Does the Video SDK charge separately for Audio?**
  - No, Audio cost is already included in video cost. Although, audio conferencing cost ($0.0006/Audio min) applies only when there’s ONLY AUDIO conference going on.
  - In other words, if no one in the video conference has their camera ON, then it will be considered as Audio conference & $0.0006/Audio min would be charged
#### **2. Please explain pricing calculation with an example, with an example**
  - It’s easy, let’s say 5 people have joined a meeting for half an hour. Here, 30 minutes is a meeting minutes.
      - Participant minutes = 30 meeting minutes x 5 participants
            
          = 150 participant minutes used
            
      - Considering $0.003/participant-min (HD Resolution)
            
          Total cost = 150 participant mins x $0.003
            
          = $0.45 (₹33)
            
#### **3. If I am using less than 10000 mins every month & not using add-on services (cloud recording, re-streaming, etc.), then will the Video SDK be free for me?**
  - Technically.. YES, in such a case the Video SDK would be free for you. Although, you will receive a null (zero amount) invoice for docs purpose
#### **4. If I have used, total of 25000 free mins, among which 7000 audio mins, 8000 SD mins & 10000 HD mins, then which mins will be counted as free mins?**
  - Free 10000 mins are exhausted as per below sequence
        
    . Audio mins
  
    i. SD Video mins
  
    ii. HD Video mins
  
    v. Full HD Video mins
  
    . 2K Video mins
  
    i. 2K+ Video mins
       
  - n your case, first 7000 audio mins would be considered FREE & then 3000 SD mins
  - ence, you will be invoiced for 5000 SD mins & 10000 HD mins
#### **5. I have used only 4000 mins this month, will the remaining free mins (6000 mins) be carried forward to next month?**
  - o. The remaining free mins will be cleared at the end of each calendar month
#### **6. I have usage more than 100K mins per month & my invoice size is larger. How to reduce it?**
  - t’s really justified to reduce your costs at volume usage. If your monthly usage is more than 100K mins per month, please contact sales on [https://videosdk.live/contact](https://videosdk.live/contact) or write on support@videosdk.live
#### **7. I have set the maxResolution to be (320 x 180) only, then why am I charged for HD video?**
  - ou would be using either SD, HD, Full HD, 2K or 2K+, by aggregate resolution.
  - ggregate resolution means a sum resolution of all video-streams, a user is watching at a time.
  - f a user is watching 8 video-streams of (320 x 180) then he is consuming [(360 x 180) x 8 video = 4,60,800px] hence he will be charged for HD resolution min
#### **8. How do you calculate the aggregate video resolution?**
  - It’s an aggregated resolution, the end-user is downloading/viewing. You can check the table below for reference.
        
        
    | Videos on-screen* | Aggregated resolution | Price, per user per minute |
    | --- | --- | --- |
    | 0 | Only audio | $0.0006 |
    | 1-2 | SD | $0.002 |
    | 3-5 | HD | $0.003 |
    | 6-10 | Full HD | $0.007 |
    | 11-17 | 2K | $0.007 |
    | 18+ | 2K+ | $0.007 |
    - Considering SD (640 x 360) resolution (16:9) per video, and one local user (self) video
#### **9. In detail, how do you calculate the aggregate video resolution?**
  - As described above, it’s an aggregate resolution, the end-user is downloading/viewing. We are following below standard resolution to calculate your usage.
        
        
    | Video type | Aggregate resolution (px) | 16:9 Aspect ratio |
    | --- | --- | --- |
    | SD | <= 2,30,400px | 360p: 640 x 360 |
    | HD | 2,30,401px to 9,21,600px | 720p: 1280 × 720 |
    | Full HD | 9,21,601px to 20,73,600px | 1080p: 1920 x 1080 |
    | 2K | 20,73,601px to 36,86,400px | 2K: 2560 × 1440 |
    | 2K+ | 36,86,401px to 82,94,400px+ | 2K+: 3840 × 2160 |
#### **10. I want to show 15 people on-screen but don’t want to use Full HD or 2K resolution to save my costs, how to do that?**
  - You can reduce the resolution of each video tile to (320 x 180), hence the aggregated resolution won’t cross HD (9,21,600px) & your cost will be saved

## Interactive Livestreaming 

## Charges

#### **1. What is speaker-min & viewer-min?**
  - There are 3 terms: livestream mins, speaker-mins, viewer-mins
  - Live stream mins is the duration of livestream; speaker-mins is per speaker min & viewer-min is per viewer min
  - In other words, (Livestream mins x No. of speakers = speaker-mins)
  - And, (Livestream mins x No. of viewers = viewer-mins)
  - 10,000 speaker & viewer-mins are free every month
#### **2. What are the charges?**
  - It’s pay-as-you-go, or use the service this month & pay next month
  - Every month, the first 10000 participant-mins are FREE!
  - Charges are as below,
      - Speaker & Viewer charges, per min (First 10000 free)
            
            
        | Resolution | Per speaker min | Per viewer min |
        | --- | --- | --- |
        | Audio | $0.0006 | $0.0003 |
        | Video (SD) | $0.002 | $0.001 |
        | Video (HD) | $0.003 | $0.0015 |
        | Video (Full HD) | $0.007 | $0.0035 |
        | Video (2K) | $0.007 | $0.0035 |
        | Video (2K+) | $0.007 | $0.0035 |
        
        (Note: In video resolution, audio cost is already included)
            
      - **Composer charges**, per used minute (irrespective of number of participants)
            
            
          | Service | Charge | Unit |
          | --- | --- | --- |
          | Livestrean creation | $0.015 | Per livestreamed min (HLS-out) |
          | Cloud recording | $0.015 | Per recorded min |
          | Re-streaming | $0.015 | Per re-streamed min (RTMP-out) |
          | Recorded video hosting | $0.003 | Per stored min, per month |
#### **3. What are the Free Video SDK services?**
  - You are getting free 10,000 speaker & viewer-mins every month, all video resolutions
#### **4. What are charges for live-messaging & signaling?**
  - For live-messaging, live-comments, signaling & interactions - You can use PubSub feature & it’s free. Currently, we don’t have plans to charge for it
#### **5. Does Free 10000 mins include all video resolutions?**
  - Yes, Free 10000 mins include all (SD, HD, Full HD, 2K & 2K+) resolutions in Interactive livestreaming
#### **6. Does Free 10000 mins include composer service mins as well?**
  - No, Free 10000 mins includes only speaker & viewer-min service, composer services like cloud recording, re-streaming (RTMP-out), HLS Conversion & recorded video hosting are not included

## Calculation method

#### **1. Does the Video SDK charge separately for Audio?**
  - No, Audio cost is already included in video cost. Although, audio streaming cost ($0.0006/Audio min) applies only when there’s ONLY AUDIO conference going on.
  - In other words, if no speaker in the live streaming has their camera ON, then it will be considered as Audio streaming & $0.0006/speaker-audio min, $0.0003/viewer-audio min would be charged
#### **2. Please explain Interactive Livestream pricing calculation, with an example**
  - It’s easy, let’s say 2 speakers have joined a livestream for half an hour, with 100 viewers. Here, 30 minutes is livestream minutes.
      - Speaker minutes = 30 livestream minutes x 2 speakers
            
          = 60 speaker-minutes used
            
      - Viewer minutes = 30 livestream minutes x 100 viewers
            
          = 3,000 viewers-minutes used
            
      - Considering $0.003/speaker-min & $0.0015/viewer-min (HD Resolution)
            
          Total cost = (60 speaker mins x $0.003) + (3000 viewer mins x $0.0015)
            
          = $0.18 + $4.50
            
          = $4.68 (₹351)
            
    - For detailed information, please refer to our pricing blog - https://videosdk.live/blog/video-sdk-api-pricing
#### **3. If I am using less than 10000 mins every month & not using add-on services (cloud recording, re-streaming, etc.), then will the Video SDK be free for me?**
  - Technically.. YES, in such a case the Video SDK would be free for you. Although, you will receive a null (zero amount) invoice for docs purpose
#### **4. If I have used, total of 13200 free mins, among which 100 speaker-audio mins, 4000 viewer-audio mins, 100 speaker-SD mins & 9000 viewer-SD mins, then which mins will be counted as free mins?**
  - Free 10000 mins are exhausted as per below sequence
      
    i. Viewer-audio mins
    
    ii. Viewer-SD mins
    
    iii. Viewer-HD mins
    
    iv. Viewer-Full HD mins
    
    v. Viewer-2K mins
    
    vi. Viewer-2K+ mins
    
    vii. Speaker-audio mins
    
    ii. Speaker-SD mins
    
    iii. Speaker-HD mins
    
    iv. Speaker-Full HD mins
    
    v. Speaker-2K mins
    
    vi. Speaker-2K+ mins
      
  - In your case, first 4000 viewer-audio mins, then 6000 viewer-SD mins would be considered FREE
  - Hence, you will be invoiced for 3000 viewer-SD mins, 100 speaker-audio mins & 100 speaker-SD mins
#### **5. I have used only 4000 mins this month, will the remaining free mins (6000 mins) be carried forward to next month?**
  - No. The remaining free mins will be cleared at the end of each calendar month
#### **6. I have usage more than 100K mins per month & my invoice size is larger. How to reduce it?**
  - It’s really justified to reduce your costs at volume usage. If your monthly usage is more than 100K mins per month, please contact sales on [https://videosdk.live/contact](https://videosdk.live/contact) or write on support@videosdk.live
#### **7. I have set the maxResolution to be (320 x 180) only, then why am I charged for HD video?**
  - You would be using either SD, HD, Full HD, 2K or 2K+, by aggregate resolution.
  - Aggregate resolution means a sum resolution of all video-streams, a speaker/viewer is watching at a time.
  - If a speaker/viewer is watching 8 video-streams of (320 x 180) then he is consuming [(360 x 180) x 8 video = 4,60,800px] hence he will be charged for HD resolution min
#### **8. How do you calculate the aggregate video resolution?**
  - It’s an aggregated resolution, the end-user is downloading/viewing. You can check the table below for reference.
    
    | Videos on-screen* | Aggregate resolution | Price, per speaker per min | Price, per viewer per min |
    | --- | --- | --- | --- |
    | 0 | Only audio | $0.0006 | $0.0003 |
    | 1-2 | SD | $0.002 | $0.001 |
    | 3-5 | HD | $0.003 | $0.0015 |
    | 6-10 | Full HD | $0.007 | $0.0035 |
    | 11-17 | 2K | $0.007 | $0.0035 |
    | 18+ | 2K+ | $0.007 | $0.0035 |
  - Considering SD (640 x 360) resolution (16:9) per video, and one local user (self) video
#### **9. In detail, how do you calculate the aggregate video resolution?**
  - As described above, it’s an aggregate resolution, the end-user is downloading/viewing. We are following below standard resolution to calculate your usage.
    
    | Video type | Aggregate resolution (px) | 16:9 Aspect ratio |
    | --- | --- | --- |
    | SD | <= 2,30,400px | 360p: 640 x 360 |
    | HD | 2,30,401px to 9,21,600px | 720p: 1280 × 720 |
    | Full HD | 9,21,601px to 20,73,600px | 1080p: 1920 x 1080 |
    | 2K | 20,73,601px to 36,86,400px | 2K: 2560 × 1440 |
    | 2K+ | 36,86,401px to 82,94,400px+ | 2K+: 3840 × 2160 |
#### **10. I want to show 15 speakers on-screen but don’t want to use Full HD or 2K resolution to save my costs, how to do that?**
  - You can reduce the resolution of each video tile to (320 x 180), hence the aggregated resolution won’t cross HD (9,21,600px) & your cost will be saved

## Invoice & Billing

## Free & Paid Accounts

#### 1. You can have either a "Free Account" or a "Paid Account”
  - When you signup, you’re creating a “Free Account”
  - When you’re submitting your payment details, you’re upgrading to “Paid Account”
    
  - Please take note that your paid account will not be charged unless you use chargeable services.
        
#### 2. Both types of accounts receive 10,000 free minutes every month.
  - Free minutes are only applicable to the following services:
      - Video Conferencing - Participant minutes
      - Interactive Livestreaming - Speaker minutes
      - Interactive Livestreaming - Viewer minutes
  - Not applicable to the following services, also known as "Add-on services”
      - Cloud Recording
      - Cloud Storage
      - Cloud Streaming
      - Broadcasting
      - Livestream Encoding
#### 3. A $10 credit to utilize any add-on service that isn't free under 10,000 minutes.
#### 4. Limits for "Free Account"
  - Maximum of 300 participant minutes each day
  - Maximum of 50 participants in one video conference room
  - Maximum of 9 speakers in one Livestream speaker room
  - Maximum of 100 viewers in one interactive Livestream
  - After your $10 credit is used, you must recharge and access further services
#### 5. If one of the above-mentioned limits is reached, services will be held for “Free Account”

## Monthly invoices

- The monthly invoices would be issued via Stripe on the third day of the month, with a due date of the tenth day of the month, in USD as standard currency.
- The generated invoice will be shared via email and may also be seen and downloaded via the Video SDK Dashboard, invoice page.
- The invoice will be auto-charged from the saved payment details in 24 hours.
- Whatever invoice that cannot be auto-charged for any reason must be paid manually by the user using Stripe before the invoice due date.
- If the invoice due date is missed, Video SDK services will be suspended and will be reactivated upon payment via Stripe
- Any concerns about the invoice should be made through email to support@videosdk.live within 24 hours of receipt.
- Any discount agreed upon in the legal agreement will be applied to the three services listed below.
    1. Conferencing minutes (per-participant minutes)
    2. Interactive Livestream - Speaker minutes
    3. Interactive Livestream - Viewer minutes
- For three services that comes under free quota of 10000 minutes, it’s usage will be added up at the end of the month, and the 10,000 free minutes will be adjusted against the used services in the order shown below.
    1. Interactive Livestream - Viewer minutes
    2. Interactive Livestream - Speaker minutes
    3. Conferencing minutes (per-participant minutes)
- No taxes are applied on an invoice, unaltered until respective government law update
- Exceptions for Indian registered businesses
    - Invoice currency will be INR at the foreign exchange rate on the day of invoice generation.
    - As per the SAC Code - 998313, 18% GST will be imposed on the final invoice amount, unmodified until the Government of India's law modification.
    - A user must provide registered GST & Company PAN data on the Video SDK user dashboard at least 3 days before invoice creation to get the GST invoice.

## Quotas & limits

- For "Free Account"
    - Maximum of 300 participant minutes each day
    - Maximum of 50 participants in one video conference room
    - Maximum of 9 speakers in one Livestream speaker room
    - Maximum of 100 viewers in one interactive Livestream
    - Maximum of 1 recording, broadcasting, or Interactive Livestreaming session may be started at a time
    - After your $10 credit is used, you must recharge and access further services
    
    **Note:** If one of the above-mentioned limits is reached, services will be held for “Free Account”
    
- For “Paid Accounts”
    - Maximum of 50 participants in one video conference room
    - Maximum of 9 speakers in one Livestream speaker room
    - Maximum of 100 viewers in one Interactive Livestream
    - Maximum of 5 recordings, broadcasting, or Interactive Livestreaming may be started at the same time
    
    Note: Please contact sales if you want to enhance the aforementioned quota for your subscribed account