//Dom elements

const time = document.getElementById('time'),
greeting = document.getElementById('greeting'),
name = document.getElementById('name'),
focus = document.getElementById('focuse');

// Show Time

function addZero(n){
    return (parseInt(n, 10) < 10 ? '0' : " ") + n;
}

function showTime(){
    let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

    //set AM OR PM 
    const ampm = hour >= 12 ? 'PM' : 'AM';

    // 12HR format

    hour = hour % 12 || 12;

    //Output Time

    time.innerHTML = `${hour}<span>:</span>${ addZero(min)}<span>:</span>${ addZero(sec)}`;
    setTimeout(showTime, 1000);


}

//add zeros






//set Background and greeting

function setBgGreet(){
    let today = new Date(),
    hour = today.getHours();
    if(hour<12){
        //morning
        document.body.style.backgroundImage ="url('morning.jpg')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundPosition="center"; 
        greeting.textContent = "Good Morning";
        document.body.style.color = "white";

    }else if(hour<18){
        //afternoon

        document.body.style.backgroundImage ="url('noon.jpg')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundPosition="center"; 
        greeting.textContent = "Good Afternoon";
        document.body.style.color = "white";

    }else{
        //evening
        document.body.style.backgroundImage ="url('night.jpg')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundPosition="center"; 
        greeting.textContent = "Good Evening";
        document.body.style.color = "white";
    }
}

function getName(){
    if (localStorage.getItem('name') === null){
        name.textContent ='[Enter Name]';
    }else{
        name.textContent = localStorage.getItem('name')
    }

}

//set Name

function setName(e){

    if(e.type === 'keypress'){
        // Make sure enter is pressed
        if(e.which == 13 || e.keyCode == 13 ){
            localStorage.setItem('name',e.target.innerText);
            name.blur();
        }

    }else{

        localStorage.setItem('name', e.target.innerText);

    }

}


function getFocuse(){
    if (localStorage.getItem('focus') === null){
        focus.textContent ='[Enter Focuse]';
    }else{
        focus.textContent = localStorage.getItem('focus');
    }

}

name.addEventListener('keypress',setName);
name.addEventListener('blur',setName);


//Run
showTime();
setBgGreet();
getName();
getFocuse();
