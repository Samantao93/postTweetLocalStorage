# postTweetLocalStorage

Taking the course by Juan Pablo de la Torre Valdez titled JavaScript Moderno Guía Definitiva Construye +20 Proyectos in Udemy

**Code flow:**
- **Page Load:**
  - Load tweets from localStorage (addLocalStorage).
  - For each stored tweet, create a list item in the DOM with a delete button.

- **Add Tweet:**
  - On submit button click (añadirTweet):
  - If input is not empty:
    - Create a tweet object with a unique ID.
    - Add it to the DOM and arrayTweets.
    - Save the updated arrayTweets to localStorage.
  - If empty, display an error message.

- **Remove Tweet:**
  - On delete button click:
    - Remove the tweet from the DOM (eliminarTweet).
    - Update arrayTweets to exclude the deleted tweet.
    - Save the updated array to localStorage.
