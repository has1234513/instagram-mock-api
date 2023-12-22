var express = require('express');
var router = express.Router();

var { instagram } = require('../public/javascripts/instagram_data.js'); // Import Instagram data

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
        
        // // Check in comments
        // if (!foundInCaptions && data.comments && data.comments.data.length > 0) {
        //     foundInComments = data.comments.data.some(comment => regex.test(comment.text));
        // }

        // Add the entire data item to results if found in either captions or comments
        if (foundInCaptions || foundInComments) {
            results.push(data);
        }
    });

    return results;
}

/* GET search route. */
router.get('/', function(req, res, next) {
  // Retrieve the search term from query parameters
  let searchTerm = req.query.term;

  if (!searchTerm) {
    return res.json(instagram);
  }

  // Call your searchInstagramData function
  let searchResults = searchInstagramData(instagram, searchTerm);

  console.log("search results", searchResults)

  // Send the results back
  res.json(searchResults);
});

module.exports = router;
