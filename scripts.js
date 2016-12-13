//
// var userWebsiteTitle = $(".user-input-title").val();
// var userWebsiteUrl = $(".user-input-url");
var userEnterButton = $(".enter-button");
var bookmarkTitle = $(".title-underline");
var userInputTitle = $(".user-input-title");
var deleteInputRightSection =$(".enter-button");


function bookmarkContent(){
  var userTitle = $(".user-input-title").val();
  var userUrl = $(".user-input-url").val();
  $(".right-section").prepend(
   `  <div class="bookmark-card">
          <h4 class = "title-underline">${userTitle}
          </h4>
          <hr>
        <h4 class ="url-underline">
          ${userUrl}
        </h4>
        <hr>
        <span class = "read">read</span>
        <span class = "delete">delete</span>
     </div>`
 );
}

$(userEnterButton).on("click", function(){
    bookmarkContent();
    console.log(bookmarkContent);
    read();
});

// deleteInputRightSection.addEventListener("click", function(){
//   bookmarkContent
// })

// function deleteBookmark (){
//   var clear= "";
//   userInputTitle.innerText = clear;
//   console.log("hi")
}
// function read (){
//   $(".read").on("click", function(){
//     console.log("yep");
//     $(this).toggleClass("read-bookmark");
//   });



// $(userEnterButton).click (function(){
//   if (userInputTitle = " ") {
//     console.log('hi"');
