let myFunction = ()=> {
    // var showOffContent = document.getElementById("showOffContent");
    var showOffContent = document.getElementById("show-off-content");
    var item_open = document.getElementById("item_open");
    var btnText = document.getElementById("myBtn");

    if (showOffContent.style.display === "none") {
        showOffContent.style.display = "block";
        btnText.innerHTML = "Read more";
        item_open.style.display = "none";
    } 
    else {
        showOffContent.style.display = "none";
        btnText.innerHTML = "Read less";
        item_open.style.display = "inline";
    }
}

export default myFunction;