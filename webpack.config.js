const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = 
{   
    entry: [        
        './bin/www.js'
    ],   
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: 'build/'       
    },
    externals: [nodeExternals()],
    target: 'node'
};