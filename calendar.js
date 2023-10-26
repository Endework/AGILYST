const date=new Date();
const renderCalendar=()=>{
    date.setDate(1);
const monthDays=document.querySelector(".days");
const lastDay=new Date(date.getFullYear(),date.getMonth()+ 1,0).getDate();
console.log(date.getDay());
const prevLastDay=new Date(date.getFullYear(), date.getMonth(),0).getDate();
console.log(prevLastDay)
const firstDayIndex=date.getDay();
const lastDayIndex=new Date(date.getFullYear(),date.getMonth()+ 1,0).getDay();
const nextDays=7-lastDayIndex-1;
console.log(lastDayIndex);
const randomDay = Math.floor(Math.random() * lastDay) + 1;
const month=[
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
document.querySelector('.date h1').innerHTML=month[date.getMonth()];

// document.querySelector('.date p').innerHTML=new Date().toDateString();
document.querySelector('.date h2').innerHTML=new Date().getFullYear();
let days="";
for (let x=firstDayIndex; x>0;x--){
    days+=`<div class="prev-date">${prevLastDay-x+1}</div>`

}
// new

for(let i=1; i<=lastDay ;i++){

    
    if(i === randomDay){
            days += `<div class="random">${i}</div>`;
        } else if(i === new Date().getDate() && date.getMonth() === new Date().getMonth()){
            days += `<div class="today">${i}</div>`;
        } else {
            days += `<div>${i}</div>`;
        }
        monthDays.innerHTML = days;
}
for(let j=1; j<=nextDays; j++){
    days+=`<div class="next-date">${j}</div>`;
    monthDays.innerHTML=days;
}

};

document.querySelector('.prev').addEventListener('click',()=>{
    date.setMonth(date.getMonth()-1);
    renderCalendar()
    
});
document.querySelector('.next').addEventListener('click',()=>{
    date.setMonth(date.getMonth()+1);
    renderCalendar()

});
renderCalendar()

// for schedule


   

    // Generate a random day in the month
   

    for(let i = 1; i <= lastDay; i++){
        if(i === randomDay){
            days += `<div class="random-day">${i}</div>`;
        } else if(i === new Date().getDate() && date.getMonth() === new Date().getMonth()){
            days += `<div class="today">${i}</div>`;
        } else {
            days += `<div>${i}</div>`;
        }
        monthDays.innerHTML = days;
    }

  



