# YouTube Clone Web App

This is a fully responsive YouTube clone web application built using React, Redux, and Redux Saga. The app utilizes the YouTube Data API to fetch and display video information. The following API endpoints are used: `/videos`, `/search`, `/commentThreads`, `/channels`, `/subscriptions` and `/playlistItems`.

&nbsp;

## Features

### Home Screen

- Displays the most popular videos.
- Clicking on a video redirects to the play screen.

### Play Screen

- Shows the selected video along with video details.
- Provides information about the channel.
- Displays comments on the video.
- Shows related videos for further exploration.

### Channel Page

- Features all channel details, including a beautiful channel banner.
- Displays videos associated with the channel.

### Category Filter

- On the home screen, a category bar is provided to filter videos based on keywords.

### Search Screen

- Allows users to search for channels and videos.
- Displays search results with relevant information.

### Authentication

- Utilizes Firebase Authentication.
- Users are prompted to authenticate through Google login.
- User information is stored in session storage.

### Subscription Feature

- Provides a list of channels subscribed by the logged-in user.

### Responsive Design

- The application is fully responsive, ensuring a seamless experience across various devices.

### Content Skeleton

- Content skeletons are added during the loading time of the data, providing users with visual cues about incoming content.

## Getting Started

Follow these steps to set up and run the project locally:

1. Clone the repository: `git clone https://github.com/your-username/your-repo.git`
2. Navigate to the project directory: `cd your-repo`
3. Install dependencies: `npm install`
4. Set up your YouTube Data API key and replace `YOUR_API_KEY` in the code with your actual API key.
5. Set up Firebase Authentication and replace the relevant configuration details in the code.
6. Run the app: `npm start`

## Dependencies

- React
- Redux
- Redux Saga
- YouTube Data API
- Numeral
- Moments
- React Lazy Load Image Component
- React Infinite Scroll Component
- React Loading Skeleton
- Firebase

## Usage

- Visit the home screen to discover popular videos.
- Click on a video to view details on the play screen.
- Explore the channel page for comprehensive channel details.
- Utilize the category bar to filter videos by keywords.
- Search for channels and videos on the search screen.
- Authenticate through Google login for a personalized experience.
- Access the subscription feature to view subscribed channels.

## Contributing

Feel free to contribute to the project by opening issues or submitting pull requests. Follow the established coding guidelines.

## License

This project is licensed under the [MIT License](LICENSE.md).

## Acknowledgments

- Special thanks to the YouTube Data API for providing the necessary data for this project.
- Appreciation to the React, Redux, and Redux Saga communities for their excellent tools and documentation.
- Firebase for providing authentication and real-time database capabilities.
