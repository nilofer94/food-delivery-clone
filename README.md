# food-delivery-clone

React Food Delivery App
We will be using parcel as bundler in this app

# LLD

/\*\*

- Header
  - Logo
  - Nav
- Body
  - Search
  - Restaurant Card container
    - Restaurant cards
      - Image
      - Name
      - Cuisine
      - Star rating
- Footer
  - copyright
  - Links
  - Contact info
    \*/

# Two types of export/import

1.Default export/import

export default CDN
import CDN from "../../"

2.Named export/import

export const CDN = {}
import {CDN} from "../../"

# Why react is fast?

(Read React Fiber architecture - github)
Faster DOM manipulation
Reconciliation Algorithm - also known as React Fiber - ReactV16
Virtual DOM - Object Representation of actual DOM
Diff Algorithm - Finds the difference between two virtaul DOMs.It will calculate the difference and actually updates the DOM on every render cycle
Supports incremental rendering - ability to split rendering work into chunks and spread over multiple frames

# State Variable?

super powerful variable

# Hook?

Normal javascript function given to us by react
It is prebuilt
It comes with superpowers
utility function given by react
The logic is written by React
Whenever the state variable changes, React re-renders our component

- useState() - generate state variables.the second parameter(function) triggers the diff algorithm.
  Always call useState inside body of functional component
  Used for creating local state variables inside functional component
  Always call hooks at start of the component
  Never use useState hook inside if else condition

- useEffect() - takes two arguments.[callbackFunction,dependencyArray].

if dependencyArray is empty => The callback function is called after the first render.Once the browser encounters the useEffect, it takes the callback function and calls it after the first render.

if dependencyArray is not present => the callback function is called on every re-render of the component

if dependencyArray is present => the callback function is called every time the value in the dependency changes.

# Fetching Data from API

1.As soon as the page loads, we can make an api call and render the data to UI when we get the data.
2.As soon as the page loads, we can render the UI. We will make an api call.We aill re-render the UI when we get the data - Better Approach - Better UX

We can use Fetch api that is in the browser.It is a superpower that the JS engine has.

# CORS POLICY

(learn from Youtube - Akshay Saini)
Our browsers block us from calling from one origin to another origin.
Allow CORS extension
Use corsproxy.io(it has some limit)

# optional chaining

data?.json?.card

# conditional rendering

rendering based on condition.
if(list.length===0) return(<h1>Loading</h1>)

# Routing

install react-router-dom
import createBrowserRouter
initialise appRouter=createBrowserRouter([
{
path: "/",
element : <AppLayout/>,
errorElement : <Error/> -->errorBoundary
}])
In <Error/> component gives a new hook
useRouteError from react-router-dom
const err = useRouteError() --> gives the error in object format.
<Outlet/> - whenever there is a change in path, the outlet will be filled with children according to path

# Two types of Routing

Client Side Routing - It doent make network call when there is a change in route path
Server Side Routing - It makes a network call and refreshes the whole page when there is a change in route path

# Dynamic Routing

path:"/restaurant/:redId"

# HOC
Function that takes a component returns a component.Takes an existing component and enhances it and returns the new component.
