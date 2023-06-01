const fetch =  require('node-fetch');

const fetchLocation = async(req, res) => {
    try {
        const { query } = req.query;
    
        const response = await fetch(`${process.env.GOOGLE_API_SEARCH_QUERY}${encodeURIComponent(query)}&key=${process.env.GOOGLE_API_KEY}`);
        const data = await response.json();
    
        if (data.results.length > 0) {
          const place = data.results[0];
          const name = place.name;
          const address = place.formatted_address;
    
          res.json({ name, address});
        } else {
          res.json({ error: 'No results found' });
        }
      } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal server error' });
      }
}

module.exports = {
    fetchLocation
}