const parent = React.createElement("div",
    {id: "parent"}, {id: "child"},
"This is React by Ankita h1");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);