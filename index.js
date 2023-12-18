import express from 'express';
const app = express();
const port = process.env.PORT || 3000;

// Mock data
import { instagram } from './instagramData.js'; // Assuming your data is in instagramData.json

const instagramMockData = instagram.data

function searchInstagramData(instagramDataArray, searchTerm) {
    const regex = new RegExp(`(${searchTerm})`, 'g'); // Adjusted regex to match the specific search term
    let results = [];

    instagramDataArray.forEach(data => {
        let foundInCaptions = false;
        let foundInComments = false;

        // Check in caption
        if (data.caption && data.caption.text) {
            foundInCaptions = regex.test(data.caption.text);
        }
        
        // Check in comments
        if (!foundInCaptions && data.comments && data.comments.data.length > 0) {
            foundInComments = data.comments.data.some(comment => regex.test(comment.text));
        }

        // Add the entire data item to results if found in either captions or comments
        if (foundInCaptions || foundInComments) {
            results.push(data);
        }
    });

    return results;
}
// API endpoint
app.get('/search', (req, res) => {
    let searchTerm = req.query.term;
    if (!searchTerm) {
        return res.status(400).send('Search term is required');
    }
    let results = searchInstagramData(instagramMockData , searchTerm);
    res.json(results);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
