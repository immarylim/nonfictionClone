const searchTitle = $(".shop-search p");
const searchBox = $(".search-box");

const DISPLAY_KEY = "display";

searchTitle.click(() => {
    if(searchBox.css(DISPLAY_KEY) == "none") {
        searchBox.css(DISPLAY_KEY, "block");
    } else {
        searchBox.css(DISPLAY_KEY, "none");
    }
});