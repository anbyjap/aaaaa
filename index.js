document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('hamburger').addEventListener('click',function(){
        var nav = document.getElementById('nav-bar');
        if(nav.style.display == "block"){
            nav.style.display = "none";
        }
        else {
            nav.style.display = "block";
        }
    });
});