# instagram-mock-api

This project provides a simple Express API to search through mock Instagram data. It allows searching for specific hashtags or mentions in the captions and comments of Instagram posts.

## API Endpoint

**GET /search**

Searches the mock Instagram data for a given hashtag or mention.

### Query Parameters:

- `term`: The hashtag or mention to search for. This should be URL-encoded if it contains special characters like `#`.
### Example Request:

` GET http://localhost:3000/search?term=%23hashtag `

Replace `%23hashtag` with the URL-encoded hashtag or mention you want to search for. For example, to search for `#j`, use `%23j`, the `@` can be used as is.

### Response:

The response will be a JSON array of Instagram post objects that contain the specified term in either the caption or comments.

## Setup and Running

1. Clone the repository.
2. Navigate to the project directory and install dependencies:

`npm install`

3. Start the server:

`node index.js`


4. The server will start on `http://localhost:3000`. Use the above API endpoint to perform searches.

## Mock Data Source

The mock Instagram data used in this project was obtained from [this source](https://gist.github.com/joe-oli/90c01558ce1efe8a4961ca7cf3b5d09c). It provides a realistic dataset for testing the functionality of the API.

## Disclaimer

This project is for demonstration purposes only and is not affiliated with Instagram or any other social media platforms.
