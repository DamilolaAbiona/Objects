// 1. Using the constructor method, create an InstagramPost() constructor function that takes the properties below as arguments.
// - Handle of author
// - content,
// - An image link posted by the author of the post
// - Number of views,
// - Number of likes,
function InstagramPost(authorHandle, content, link, numOfViews, numOfLikes ){
    this.handle = authorHandle;
    this.content = content;
    this.link = link;
    this.views = numOfViews;
    this.likes = numOfLikes;
}