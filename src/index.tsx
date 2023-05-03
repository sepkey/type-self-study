import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById("root") as HTMLElement);

///This is called a type assertion, which tells TypeScript what the type should be. Without the type assertion, TypeScript will infer the type as HTMLElement | null because document. getElementById may not find an element and return null. However, we are confident that the element will be found because we specified it in the index.html file, so it is safe to narrow the type to HTMLElement using a type assertion

function App() {
  return <h1>My Super React and TypeScript App!</h1>;
}
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
