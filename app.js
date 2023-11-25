const express = require('express');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Enable CORS for all routes
app.use(cors());

const apiEndpoint = 'https://api.xiteit.co';
const apiProxy = createProxyMiddleware('/api', { target: apiEndpoint, changeOrigin: true });
app.use('/api', apiProxy);

const port = 3000;
app.listen(port, () => {
  console.log(`Express server is running on http://localhost:${port}`);
});
