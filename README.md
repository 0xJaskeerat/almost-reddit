<img width="1280" alt="Almost Reddit - 571x238" src="https://github.com/user-attachments/assets/63852be8-e898-4403-a0c0-1f3b77c54169">

# Building Almost Reddit

A social media platform built using React, Vite, and Appwrite, featuring authentication, thread creation, and media sharing. This project was developed for a workshop for [Appwrite Developer Meetup Delhi](https://lu.ma/oqelzoej).

## What is Appwrite

Appwrite is a backend platform for developing Web, Mobile, and Flutter applications. Built with the open source community and optimized for developer experience in the coding languages you love.

## Features

- **Authentication:**
  - Email
  - OAuth2 (GitHub, Discord)
  - Signup (Name + Email)
  - Anonymous Login
- **Databases and Storage:**
  - Create a Thread
  - Send Text and Images
  - Delete Thread Messages

## Installation
### Appwrite

Head over to [cloud.appwrite.io](https://cloud.appwrite.io) to setup your backend.

### Web Project

To run this project locally:

1. Clone the repository
2. `cd` into the repo folder
3. Type the following commands

    ```bash
    yarn install
    yarn dev
    ```

## License

This project is [MIT](https://choosealicense.com/licenses/mit/) licensed.

# React + Vite + Appwrite

This template should help get you started developing with React, Vite, and Appwrite.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/)

## Need more functionality?

Check out [Appwrite Docs](https://appwrite.io/docs), which provides extensive documentation for extending your app with additional features like cloud functions, messaging, storage, and more.

## Technical considerations

**Why use Appwrite for this project?**

- Appwrite provides a complete backend solution, including authentication, databases, and storage, which are essential for building a platform like Reddit.
- The integration with React and Vite allows for a seamless developer experience, leveraging Appwrite's SDKs and tools.

**Why enable OAuth2?**

OAuth2 allows users to authenticate using their existing GitHub or Discord accounts, reducing the friction of creating a new account and enhancing user experience.

**Why include Anonymous Login?**

Anonymous login allows users to explore the platform without the need for immediate registration, increasing user engagement and retention.

```jsx
// Example of Appwrite integration with React
import { Client, Account, ID } from "appwrite";

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>');               // Your project ID

const account = new Account(client);

// Authentication example
const promise = account.create('[USER_ID]', 'email@example.com', '');

promise.then(function (response) {
    console.log(response); // Success
}, function (error) {
    console.log(error); // Failure
});
```

We hope you enjoy using "Building Almost Reddit" as much as we enjoyed creating it. Your feedback and contributions are welcome! Happy coding!
