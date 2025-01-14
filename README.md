the flow of the application should look something like this:

- In App.jsx, set up a state variable called items using the useState hook.
- Create a Form component that contains an input field and a submit button, and set up the handleSubmit function to add new items to the list.
- Create two new components: Items and SingleItem, and use them to render the list of items.
- Set up local storage functionality to persist the list of items across page reloads.
- Implement the react-toastify library to handle alerts when a new item is added to the list, when the user tries to submit an empty form, and when an item is removed from the list.

In summary, localStorage allows you to store key-value pairs locally in the user's browser using localStorage.setItem() and retrieve those values using localStorage.getItem(). However, note that localStorage can only store strings, so you'll need to convert other data types to strings before storing them.
