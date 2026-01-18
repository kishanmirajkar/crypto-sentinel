This project is a Node.js service for monitoring cryptocurrency prices and triggering user-defined alerts. 
The application can be started locally using npm install followed by npm run dev. 
It exposes REST API endpoints to create alerts (POST /alerts), retrieve all alerts (GET /alerts), and delete alerts (DELETE /alerts/:id). 
Real-time price data is fetched from the CoinGecko public API, for example: "GET https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd", which returns { "bitcoin": { "usd": 95002 } }.
ChatGPT was used to assist with test generation and project scaffolding.  
