import 'babel-polyfill'
import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router'
import bodyparser from 'body-parser'
import App from './src/App.js'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import configureStore from './src/store/configureStore.js'


const app = express();
const PORT = process.env.PORT || 3000


app.use(bodyparser.json());

app.use(express.static('build/public'));

function handleRender(req, res){
  const store = configureStore()
  const context = {}
  const html = ReactDOMServer.renderToString(
    <Provider store={store}>
    <StaticRouter location={req.url} context={context}>
      <App/>
    </StaticRouter>
    </Provider>
  )

  const preloadedState = store.getState()
  res.send(renderFullPage(html, preloadedState))
}

function renderFullPage(html, preloadedState){
  return  `
          <html>
          <head>
          </head>
          <body>
            <div id='root'>${html}</div>
            <script>window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState)}</script>
            <script src='client_bundle.js'></script>
          </body>
          </html>`

}

app.use(handleRender)



app.listen(PORT, () => {
  console.log(`React SSR App is running on port ${PORT}`)
});
