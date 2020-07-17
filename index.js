
//------------nav bar function--------------------

document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('hamburger').addEventListener('click',function(){
        var nav = document.getElementById('nav-bar');
        var hamburger = document.getElementById('hamburger')
        if(nav.style.display == "block"){
            nav.style.display = "none";
        }
        else {
            nav.style.display = "block";
        }
        hamburger.style.opacity = "1.0";
    });
});

//-----------Message input & output function----------------
document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('submit').addEventListener('click',function(){
        var input = document.getElementById('input');
        var output = document.getElementById('message-wrapper');
        var div = document.createElement('div');
        var h2 = document.createElement('h2');
        var time = document.createElement('p');
        var date = new Date();

        h2.textContent = input.value;
        div.classList.add('message-box');
        time.textContent = date.toDateString();

        div.appendChild(time);
        div.appendChild(h2);
        output.appendChild(div);
    });
});