---
title: Configure Recording Storage (Aws/ Azure)
sidebar_position: 1
sidebar_label: Configure Recording Storage
hide_table_of_contents: true
---

- This feature allows you to configure storage provider for your meeting recordings.

- You can configure multiple storage provider with multiple API Keys.

- Currently, we support `AWS S3`, `Azure Blob` and `GCP Cloud Storage`. We will add support for other storage provider soon !!

## Prerequisites

- An active [VideoSDK Developer Account](https://app.videosdk.live)
- `Aws S3`, `Azure Blob Storage` or `GCP Cloud Storage` Credentials

## How to setup ?

### Step 1 : Select Api Key

![Dashboard](/img/tutorial/dashboard/api-key-dashboard.png)

- Go to [VideoSDK Dashboard](https://app.videosdk.live/api-keys).
- Select API Key for which, you want to set storage configuration.
- Then click on `Storage Config` Icon in Actions.

### Step 2 : Choose Cloud Storage Provider

![Dashboard](/img/tutorial/dashboard/storage-config.png)

- As you can see in the image, there are 3 Cloud Storage Provider (`Aws`, `Azure`, `GCP`).
- You can select a Cloud Storage Provider as per your requirements.

### Step 3 : Configure Bucket or Container

<h4> For Aws S3 Storage </h4>

![Aws S3](/img/tutorial/dashboard/s3.png)

- You will need AWS S3 Bucket. [Learn to create S3 Bucket](https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-bucket.html).

- As you can see in the image, you will need enter `accessKeyId`, `secretAccessKey`, `region`, `bucket`, and `ACL` to setup for Aws S3 Storage.

- Click on `Save` button.

<hr />

<h4> For Azure Blob Storage: </h4>

![Azure Blob](/img/tutorial/dashboard/blob.png)

- You will need Azure Blob Container. [Learn to create Blob Container](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-quickstart-blobs-portal#create-a-container).

- As you can see in the image, you will need to enter `connectionString` and `containerName` to setup for Azure Blob.

- Click on `Save` button.

<hr />

<h4> For Google Cloud Storage: </h4>

<img src="/img/tutorial/dashboard/gcp.png" alt="GCP Cloud Storage" width="436" height="632"/>

1. You will need Google Cloud Storage Bucket. [Learn to create Google Cloud Storage Bucket](https://cloud.google.com/storage/docs/creating-buckets).

2. After creation, click on the <b> &#xFE19; </b>button in the upper right corner and select **`Project settings`**.

3. Under **`IAM and Admin`**, select **`Service Accounts`**. In the service account list, click on the <b> &#xFE19; </b> button for the account just added or created before, and select **`Manage keys`**.

4. Click **`ADD KEY > Create new key`**. Select **`JSON`** in the pop-up box and click **`CREATE`**. A json file is downloaded with the name format `projectId-xxxxxxxx.json`.

5. Open the downloaded json file, which looks like the following example:

```
{
  "type": "service_account",
  "project_id": "videosdk-12345",
  "private_key_id": "yourprivateidkeyyourprivateidkeyyourprivateidkey",
  "private_key": "-----BEGIN PRIVATE KEY-----\nThisisYourPrivateKeyThisisYourPrivateKeyThisisYourPrivateKey\nThisisYourPrivateKey\nThisisYourPrivateKey\nThisisYourPrivateKey\n-----END PRIVATE KEY-----\n",
  "client_email": "xxxx-xxxx@videosdk-12345.iam.gserviceaccount.com",
  "client_id": "123456789012345678901",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/videosdk%40videosdk-404307.iam.gserviceaccount.com",
  "universe_domain": "googleapis.com"
}
```

- As you can see in the image, you will need to enter `Project Id`, `Client Email`, `Bucket`, `Private Key` to setup for Google Cloud Storage Bucket. You can retrieve these details from the json file.

- Click on `Save` button.

### Step 4 : Test

- It's time to test !!
- [Create Room](https://docs.videosdk.live/api-reference/realtime-communication/create-room) with token generated with the API Key, you have configured for.
- Start meeting with the roomId created and Start Recording !!
- Then, you can see that recording will be available in your Bucket or Container.

:::note

- Only a single Recording Storage Config can be possible for a particular Api Key at a time.
- In order to add new Recording Configuration, first you need to delete current configuration.

:::
