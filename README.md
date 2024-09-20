# ShareCart Extension

## Overview

**ShareCart** is a browser extension designed to simplify online shopping by
allowing users to create a shopping cart of items from various e-commerce
platforms, such as Amazon, and share it with others. The recipient can easily
add these items to their own shopping cart, ensuring they purchase the exact
products intended. This extension is particularly useful for families or friends
who wish to assist each other with online shopping, minimizing errors in product
selection.

## Features

- **Create and Share Cart**: Users can compile a list of items in their shopping
  cart and generate a shareable link.
- **Seamless Integration**: The shared link allows recipients to populate their
  existing cart with the items shared without overwriting their current
  selections.
- **User-Friendly Interface**: Simple and intuitive UI that enhances the
  shopping experience.

## Tech Stack

### Frontend (Browser Extension)

- **HTML/CSS**: For structure and styling of the extension's popup UI.
- **JavaScript**: Core logic and interactivity within the extension.
- **Chrome APIs**: Utilized for interacting with browser tabs and content
  scripts to scrape cart items.

### Backend

- **Firebase**: Chosen for its ease of use, scalability, and powerful real-time
  capabilities. It enables:
  - **Cloud Functions**: To handle backend logic and API endpoints for sharing
    and retrieving cart data.
  - **Firestore**: A NoSQL database to store cart items and user data securely.
  - **Authentication**: Built-in user authentication to ensure secure access to
    cart sharing features.

## Architectural Choices

1. **Serverless Architecture**: By leveraging Firebase Cloud Functions, we
   eliminate the need for server maintenance and scaling, allowing us to focus
   on development rather than infrastructure.

2. **Real-Time Data**: Firebase Firestore provides real-time updates, making it
   easier to manage and sync cart data between users dynamically.

3. **Cross-Platform Compatibility**: The choice of a browser extension allows
   the application to work across different operating systems, making it
   accessible to a broader audience without requiring app installations.

4. **Scalability**: Firebase's infrastructure is designed to handle sudden
   spikes in traffic, making it suitable for an extension that aims to support a
   large user base.

5. **User Experience**: The combination of a simple UI and seamless backend
   integration ensures a smooth user experience, encouraging adoption and
   frequent use.

## Future Enhancements

- **Support for Additional E-commerce Platforms**: While the initial focus is on
  Amazon, plans to expand compatibility with other popular online stores.
- **Enhanced Sharing Options**: Implementing features to allow users to share
  carts via social media platforms or text messages.
- **User Analytics**: Integrating analytics to understand user behavior and
  improve features based on user feedback.

## Installation

1. Download the extension from the Chrome Web Store (link to be provided).
2. Add the extension to your browser and sign in to your Firebase account for
   full functionality.

## Contributing

We welcome contributions! If you'd like to contribute to the ShareCart
extension, please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file
for details.

## Acknowledgments

- Thanks to the Firebase team for providing a powerful, scalable platform.
- Inspired by the needs of users looking for a simplified shopping experience.
