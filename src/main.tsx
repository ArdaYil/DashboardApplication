import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "../tailwindDist/output.css";

const targetNode: any = document.querySelector("body");

const observer = new MutationObserver(function (mutationsList) {
  mutationsList.forEach(function (mutation) {
    const node: any = mutation.addedNodes[0];

    if (!node) return;

    const span = node.querySelector("span");

    if (!span) return;

    if (
      span.innerText ===
      "This application was built using a trial version of Syncfusion Essential Studio. To remove the license validation message permanently, a valid license key must be included."
    ) {
      node.remove();
    }
  });
});

const config = {
  attributes: true,
  childList: true,
  subtree: true,
  attributeFilter: ["class"],
};

observer.observe(targetNode, config);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
