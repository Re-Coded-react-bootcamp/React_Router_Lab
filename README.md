# React Router Lab

In this lab you will setup a router to move between differnet components and display them.

## Requirement

1. In the `App.js` require the component BrowserRouter and wrapp the whole app with it.
2. Define Routes to `[Posts, Dashboard, Products, Home]` with this links `[/posts, /admin, /products, /]`
3. Make sure to use Switch component.
4. Display each product in the `Products` component id using the `ProductDetails` component match id with compoent using `:id`
   1. In the ProductDetail component display the Id of the product next to the text "Product Details - {id}"
   2. After the use clicks `Save` he should go back to the `/products` route and the history should be correct !!
5. In the `Posts` component get the query string that is passed by the link, using `query-string`, and display it on the console as an object.
6. In the Dasboard component fix the navigation to display a nested routing with relevent component in admin folder.
7. Make sure to always prevent additonal requests to the server and make the app a Single Page App.
