# Instagram Clone - Reverse Engineering a Website
Instagram is a full-stack web application in which users are able to post images for the world to see, along with browsing other's images, liking them, and commenting on them. Our team of three developers implemented a version of Instagram that allows users to do the same things that they can on the real version in a one-week sprint.

See Instagram home page: https://www.instagram.com/

## Link To Project
[Instagram Clone](https://github.com/siemenjm/Instagram-Clone-Project2)

## MVP User Stories (Basic CRUD)
As an Instagram user, I want to be able to:
* publish my own posts
* browse other user's posts
* view a more detailed version of each post that includes comments, title, etc.
* comment on posts
* edit and/or delete my comments when I make a mistake (only mine)

## Stretch Goals
As an Instagram user, I want to be able to:
* delete my own posts (only my posts, and all comments associated with them)
* like posts (only once per user per post)
* view all of an individual user's posts at once (profile page)
* view posts by newest on top
* only be able to use the site with an account while logged in

## ERD
Our Instagram copy implements 3 separate models:
* users
* posts
* comments

The relationships between them are as follows (and shown in greater detail in the image below):
* user (one) -> posts (many)
* user (one) -> comments (many)
* post (one) -> comments (many)

![ERD](https://github.com/siemenjm/Instagram-Clone-Project2/blob/jared/assets/updated_ERD.png)


## Wireframe
Our final project differed from our initial wireframes slightly, but in general we followed the style that Instagram uses. The post index page lets you scroll through all the posts, while the post show page shows more details about the post. (Instagram uses a popup for the post show page).

![Index Page Wireframe](https://github.com/siemenjm/Instagram-Clone-Project2/blob/jared/assets/index_wireframe.png)

Show.ejs

![Show Page Wireframe](https://github.com/siemenjm/Instagram-Clone-Project2/blob/jared/assets/show_wireframe.png)

## Getting Started

## Technologies Used
* EJS
* CSS
* JavaScript
* Node.js
* Express.js
* Mongoose and MongoDB
* bcryptJS

## Favorite Chunk of Code
Our favorite piece of code involves using a query to add custom messages to the login/register screens when certain actions take place (a user logs out, an incorrect password is entered, someone tries to create an account with an already in-use email, etc.).

For example, the code snippet below is for the logout get route. The user is redirected to the login page after their session is destroyed, and a message of "You have been logged out" is passed through a url query. The login EJS template then checks to see if message is defined, and if it is, displays the message.

```javascript
// auth_controller.js
router.get('/logout', async (req, res) => {
    try {
        await req.session.destroy();
        console.log('session destroyed');
        const message = 'You have been logged out.';
        return res.redirect(`/login?message=${message}`);
    } catch(err) {
        console.log(err);
    }
});

// login.ejs
<h2>Login</h2>
<% if (message !== undefined) { %>
    <p class="message"><%= message %></p>
<% } %>
```

## Next Steps
We are happy with how the project turned out, but would still like to implement the following:
* search bar to search for specific users, posts, etc.
* follow, share, save buttons
* show last comment on post index page
* ability to sort posts by likes, comments, etc.
* style improvements