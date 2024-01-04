var profileBio = document.getElementById("add-bio");

profileBio.addEventListener("keyup",(event)=> {
    var textHeight = event.target.scrollHeight;
    profileBio.style.height = `${textHeight}px`;
})