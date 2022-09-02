const postDates = document.querySelectorAll('.post-date');
const commentDates = document.querySelectorAll('.comment-date');

postDates.forEach((date) => {
    const postDate = new Date(date.innerText);
    const timeSincePost = Math.floor((new Date() - postDate) / 1000 / 60 / 60);
    const timeString = timeSincePost.toString() + ' hours ago';

    date.innerText = timeString;
});

commentDates.forEach((date) => {
    const commentDate = new Date(date.innerText);
    const timeSinceComment = Math.floor((new Date() - commentDate) / 1000 / 60 / 60);
    const timeString = timeSinceComment.toString() + ' hours ago';

    date.innerText = timeString;
});