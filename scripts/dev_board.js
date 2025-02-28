// blog page route 
document.getElementById('discover-btn').addEventListener('click',function(){
    window.location.assign('blogs.html');
})


// assigned function counter
countTask()
function countTask(){
    let taskCounter = 0;
    const allTaskButtons = document.querySelectorAll('.task .task-btn');
    for(const btn of allTaskButtons ){
        if(btn.disabled === false){
            taskCounter++;
        }
    }
    setInnerText('task-counter',taskCounter);
}


// get date 
getDate();
function getDate(){
    const time = new Date();
    const timeList = time.toString().split(" ");
    const day = timeList[0];
    const MonthDateYear = timeList[1]+" "+timeList[2]+" "+timeList[3];

    setInnerText('today', day);
    setInnerText('todayDate', MonthDateYear);
}

// random rgb function
document.getElementById('rgb-btn').addEventListener('click',function(){
    setRGB()
})
function setRGB(){
    const r = Math.round(Math.random()*255);
    const g = Math.round(Math.random()*255);
    const b = Math.round(Math.random()*255);
    document.querySelector('body').style.backgroundColor = 'rgba('+r+','+g+','+b+','+0.2+')'
}