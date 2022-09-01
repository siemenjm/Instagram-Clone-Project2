const postDates = document.querySelectorAll('.post-date');

postDates.forEach((date) => {
    const postDate = new Date(date.innerText);
    const timeSincePost = Math.floor((new Date() - postDate) / 1000 / 60 / 60);
    const timeString = timeSincePost.toString() + ' hours ago';

    date.innerText = timeString;
});