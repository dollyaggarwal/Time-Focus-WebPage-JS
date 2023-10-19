//DOM elements

const time=document.getElementById('time'),
 greeting=document.getElementById('greeting'),
 fullname=document.getElementById('name'),
 focus=document.getElementById('focus');

 //Options
 const showAmPm=true;

 //show time
 function showTime(){
    let today=new Date(),
    hour=today.getHours(),
    min=today.getMinutes(),
    sec=today.getSeconds();

    //set AM or PM
    const amPm = hour >= 12 ? 'PM' : 'AM';

    //12 hour format
    hour = hour % 12 || 12;

    //output time
    time.innerHTML=`${hour}<span>:</span>${addZero(min)}<span>:</span>
    ${addZero(sec)} ${showAmPm ? amPm : ''}`;

    setTimeout(showTime,1000);
 }

 //Add Zeros

 function addZero(n){

    return (parseInt(n,10) < 10 ? '0' : '') + n;

 }

 //Set Background and Greeting
 function setBgGreet(){
    let today=new Date(),
    hour= today.getHours();

    if(hour < 12){
        //Morning
        document.body.style.backgroundImage="url('img/morning.jpg')";
        greeting.textContent='Good Morning';
    }
    else if(hour < 18){
        //Afternoon
        document.body.style.backgroundImage="url('img/afternoon.jpg')";
        greeting.textContent='Good Afternoon';
    }
    else{
        //Evening
        document.body.style.backgroundImage="url('img/night.jpg')";
        greeting.textContent='Good Evening';
        document.body.style.color='white';
    }

 }

 //Get Name
 function getName(){
    if(localStorage.getItem('name')==null){
        fullname.textContent='Enter Name';
    }
    else{
        fullname.textContent=localStorage.getItem('name');
    }
 }

 //setName
 function setName(e){
    if(e.type==='keypress'){
        //make sure enter is pressed
        if(e.which == 13 || e.keyCode == 13){ //13 is identifier for enter key
            localStorage.setItem('name',e.target.innerText);
            fullname.blur();
        }
    }
    else{
        localStorage.setItem('name',e.target.innerText);
    }
 }

  //Get Focus
  function getFocus(){
    if(localStorage.getItem('focus')==null){
        focus.textContent='Enter Focus';
    }
    else{
        focus.textContent=localStorage.getItem('focus');
    }
 }

  //setFocus
  function setFocus(e){
    if(e.type==='keypress'){
        //make sure enter is pressed
        if(e.which == 13 || e.keyCode == 13){ //13 is identifier for enter key
            localStorage.setItem('focus',e.target.innerText);
            focus.blur();
        }
    }
    else{
        localStorage.setItem('focus',e.target.innerText);
    }
 }

 fullname.addEventListener('keypress',setName);
 fullname.addEventListener('blur',setName);
 focus.addEventListener('keypress',setFocus);
 focus.addEventListener('blur',setFocus);

 //Run
 showTime();
 setBgGreet();
 getName();
 getFocus();
