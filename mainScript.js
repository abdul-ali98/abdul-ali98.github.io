var galleryDegree = 0;
var bonusDegree = 0;
const MAX_BONUS_IMAGES = 4;
const MAX_GALLERY_IMAGES = 4;
const galleryCaptions = ["Winning a 5K for the first time!", "Percé, Québec","Sleeping Giant Provincial Park, ON", "10k race in Bucherville, QC, by Michel JODOIN"];
const galleryPaths = ["contact.JPG", 
"qc.jpeg",
"ON.jpeg",
 "10k.jpeg"];

 const bonusCaptions = ["ECSE Student Council 2022-2023", "IEEE launching campaign in 2017", "ECSE 223, Model Based Programming after a live demo", "Google Developers Roadshow MENA 2017"];
 const bonusPaths = ["ecsess.jpeg",
    "ieee.jpeg",
 "team.jpeg",
"gdg.jpeg"];
function jumpToProjects() {

    var myItem = document.getElementById("scrollTo223");   
      scrollToItem(myItem);
      
    
}

function jumpToGallery() {

    var myItem = document.getElementById("gallery");
      scrollToItem(myItem);
    
}

function jumpToBonus() {
    var myItem = document.getElementById("bonus");   
    scrollToItem(myItem);
}

function scrollBonusToLeft() {
    console.log("srollRight was called");
    if(bonusDegree > 0) {
        document.getElementById("bonusImg").src = bonusPaths[--bonusDegree];
        document.getElementById("bonusCaption").textContent = bonusCaptions[bonusDegree];
    }
}
function scrollBonusToRight() {
    console.log("srollRight was called");
    if(bonusDegree < MAX_BONUS_IMAGES - 1) {
        document.getElementById("bonusImg").src = bonusPaths[++bonusDegree];
        document.getElementById("bonusCaption").textContent = bonusCaptions[bonusDegree];
    }
}
function scrollGalleryToRight() {
    console.log("srollRight was called");
    if(galleryDegree < MAX_GALLERY_IMAGES -1) {
        document.getElementById("galleryImg").src = galleryPaths[++galleryDegree];
        document.getElementById("galleryCaption").textContent = galleryCaptions[galleryDegree];
    }
}

function scrollGalleryToLeft() {
    console.log("srollLeft was called");
    if (galleryDegree > 0) {
        document.getElementById("galleryImg").src = galleryPaths[--galleryDegree];
        document.getElementById("galleryCaption").textContent = galleryCaptions[galleryDegree];
    }
    
}

function scrollToItem(item) {
    item.scrollIntoView();
    return;
   /* var diff=(item.offsetTop-window.scrollY)/8
    if (Math.abs(diff)>1) {
        window.scrollTo(0, (window.scrollY+diff))
        clearTimeout(window._TO)
        window._TO=setTimeout(scrollToItem, 30, item)
    } else {
        window.scrollTo(0, item.offsetTop)
    } */
}