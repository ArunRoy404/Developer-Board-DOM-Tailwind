// blog page route 
document.getElementById('discover-btn').addEventListener('click',function(){
    window.location.assign('blogs.html');
})

countTask()
// assigned function counter
function countTask(){
    let taskCounter = 0;
    const allTaskButtons = document.querySelectorAll('.task .task-btn');
    for(const btn of allTaskButtons ){
        if(btn.disabled === false){
            taskCounter++
        }
    }
    setInnerText('task-counter',taskCounter)
}