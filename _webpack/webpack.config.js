module.exports = env => require(`./webpack.${env}.js`);
const HtmlWebpackPlugin = require('html-webpack-plugin');
plugins: [
  new HtmlWebpackPlugin({
    title: 'My website',
    template: path.resolve(__dirname, '../_templates/client.html'),
  }),
]