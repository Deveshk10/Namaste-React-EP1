import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello World from React"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

//?nested structure
{
  /* <div id="parent">
    <div id="child">
        <h1 >I am a tag</h1>
    </div>
</div> */
}

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am the best "),
    React.createElement("h2", {}, "I will fuck aditi pooja disha ojasvi by the end of the year"),
  ]),

  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am a h1 tag"),
    React.createElement("h2", {}, "I am a h2 tag"),
  ]),
]);
root.render(parent);
