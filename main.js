const searchInput = document.querySelector("#search-input");
searchInput.addEventListener("keydown", function(event) {
    if(event.code === "Enter") {
        search();
    }
})


function search(){
    const input = searchInput.value;
    window.location.href = "https://www.google.com/search?q="+input+"&rlz=1C1CHZN_enIN986IN986&oq="+input+"&aqs=chrome..69i57j46i433i512j0i20i263i433i512j0i20i263i512j46i131i433i512j0i512j46i131i433j0i131i433i512j46i512j46i199i465i512.928j0j15&sourceid=chrome&ie=UTF-8"
}

function lucky(){
    window.location.href = "https://www.google.com/doodles"
}