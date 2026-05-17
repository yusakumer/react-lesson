const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin  = require("mini-css-extract-plugin");

module.exports = {
    // 開発モード（ビルドが速く、デバッグしやすい）
    mode: 'development',

    // エントリーポイント（ここから読み込みを開始する）
    entry: './src/js/index.tsx',

    // 出力設定
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true, // ビルドのたびに古いファイルを削除する
    },

    // 対応する拡張子の設定
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },

    // 各ファイルごとの処理ルール
    module: {
        rules: [
            // TypeScript (.ts) react(.tsx)の処理
            {
                test: /(\.ts|\.tsx)$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            // CSS (.css) の処理
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
        ],
    },

    // 開発用サーバーの設定
    devServer: {
        static: './dist',
        hot: true, // 修正したら自動でブラウザに反映
        port: 3000,
    },

    // デバッグしやすくするためのソースマップ
    devtool: 'source-map',

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html' // 2. 元となるHTMLファイルを指定
        }),
        new MiniCssExtractPlugin(),
    ],
};
