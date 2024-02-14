
function isStarASelected(){
    var child_stars = document.querySelectorAll('.rating-inner-container .stars-nbr div');
    for(var i = 0 ; i < child_stars.length ; i++ ){
        if( child_stars[i].classList.contains('stars-nbr-selected') ){
            return true;
        }
    }
    return false;
}


function cleanAllstars(){
    var child_stars = document.querySelectorAll('.rating-inner-container .stars-nbr div');
    Array.from(child_stars).forEach( function(star){
        star.classList.remove('stars-nbr-selected');
    });
}

function selectStar(event){
    cleanAllstars();
    event.target.classList.add('stars-nbr-selected');
    document.querySelector(".thankyou-inner-container .selection span").textContent = event.target.textContent;
}

var stars = document.querySelectorAll('.rating-inner-container .stars-nbr div');
Array.from(stars).forEach( function(star) {
    star.addEventListener("click", selectStar);
});


document.querySelector('.rating-inner-container button').addEventListener('click' , function(event){
    if(isStarASelected()){
        document.querySelector('.rating-inner-container').style.display = "none";
        document.querySelector('.thankyou-inner-container').style.display= "flex";                
    }
});