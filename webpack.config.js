module.exports = {
    module : {
        rules : [
            {
                test : /\.js$/,
                exclude : /node_modudes/,
                use : {
                    loader : "babel-loader"
                }
            }
        ]
    }
}