require("babel-core").transform("code", {
    presets: ["react"]
});

ReactDOM.render(
    <h1>Hello, world!</h1>,
    document.getElementById('root')
);