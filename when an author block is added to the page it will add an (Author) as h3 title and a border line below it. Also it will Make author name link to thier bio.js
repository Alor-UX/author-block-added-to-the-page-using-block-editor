document.addEventListener("DOMContentLoaded", function () {
   // Step 1 Add heading and line above when a author block is added on the page
   // Replace .wp-block-post-author classname with your website author classname
   const authorBlock = document.querySelector(".wp-block-post-author");

   if (authorBlock) {
      const heading = document.createElement("h3");
      heading.textContent = "Author";
      heading.style.marginBottom = "2.5rem";

      const line = document.createElement("div");
      line.style.height = "3px";
      line.style.backgroundColor = "#3aa954";
      line.style.marginBottom = "2.5rem";

      authorBlock.parentNode.insertBefore(heading, authorBlock);
      authorBlock.parentNode.insertBefore(line, authorBlock);
   }
   //  Step 2 Update author name to be a link if it's "Your Authors Name"
   // You must target the exact authors name to make this work
   // Replace the query selector classnames with your own in your website
   const authorName = document.querySelectorAll(".wp-block-post-author .wp-block-post-author__content .wp-block-post-author__name");
   authorName.forEach(function (el) {
      if (el.textContent.trim() === "Your Authors Name") {
         const link = document.createElement("a");
         link.href = "authors bio link goes here";
         link.textContent = el.textContent;
         link.className = el.className;
         el.replaceWith(link);
      }
   });

   // Step 3 Adjust the font size of the author position info
   // Replace the query selector classnames with your own in your website
   const authorPosition = document.querySelector(".wp-block-post-author__byline");
   if (authorPosition) {
      authorPosition.style.fontSize = "1.5rem";
   }
});
