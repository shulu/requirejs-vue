/**
 * @file 试生产服务
 * @author Yangholmes
 */

const argv = require('yargs').argv;

const express = require('express');
const history = require('connect-history-api-fallback');
const {createProxyMiddleware} = require('http-proxy-middleware');

const proxymap = require('./proxy-map');

const app = express();

Object.keys(proxymap).forEach(url => {
    const proxy = createProxyMiddleware(proxymap[url]);
    app.use(url, proxy);
});

app.use(history({
    index: '/index.html'
}));

app.use('/', express.static('../'));

const port = argv.port || 8080;

app.listen(port, () => {
    console.log('pre-pro server launch, listen to port: ' + port);
});