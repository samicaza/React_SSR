import 'babel-polyfill'
import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router'
import bodyparser from 'body-parser'
import {Helmet} from 'react-helmet'
import App from './src/App.js'
import optimizelyReducer from './src/store/optimizelyReducer.js'


const app = express();
const PORT = process.env.PORT || 3000


app.use(bodyparser.json());

app.use(express.static('build/public'));


app.listen(PORT, () => {
  console.log(`React SSR App is running on port ${PORT}`)
});

app.get('*', (req, res) =>{
  const context = {}
  const content = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      <App/>
    </StaticRouter>
  )
  const helmet = Helmet.renderStatic()
  const html = `
        <html>
          <head>
          ${helmet.meta.toString()}
          ${helmet.title.toString()}
          </head>
          <body>
            <div id='root'>${content}</div>
            <script src='client_bundle.js'></script>
          </body>
        </html>
  `;

  res.send(html)
})
