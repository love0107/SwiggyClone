# React Development Class Notes

## Class 01

### Introduction to HTML Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Food Vella</title>
</head>
<body>
    <div id="root"></div>
</body>
<script>
    const heading = document.createElement("h1");
    heading.innerHTML = "Namaster React app";
    const root = document.getElementById("root");
    root.appendChild(heading);
</script>
</html>


React Basics
React replaces all content inside the root tag and renders whatever is passed to root.render.

Class 02
Node Package Manager (NPM) and Parcel
npm: Node Package Manager, used for managing dependencies.
npm install -D parcel: Installs Parcel as a dev dependency.
Parcel Features:
Hot module replacement
File watching algorithms
Caching during development
Image optimization
Minification
Bundling
JSX (JavaScript XML) and React Components
JSX: A syntax extension for JavaScript often used with React.
React Components:
Functional Components
Class-based Components
Components should start with a capital letter.

Example:
const HeaderComponents = () => (
  <div>
    <h1>Hello</h1>
    <h2>2 heading</h2>
  </div>
);

Components Composition
Components can be nested inside other components, known as components composition.

Additional React Features
Joining elements in JSX: name.join(",")
Optional chaining in React
Props: Data passed to components as attributes
Spread operator
Array methods like map, filter, reduce
Key usage in lists: Avoid using index as a key
Exporting Components
export default: Can only export one component per file.
Alternative: Named exports
Example: export const Title = () => {}
Import as { Title }