console.log("script running....")
document.querySelector('.ham').style.display='none';
document.querySelector('.hamburger').addEventListener("click", ()=>{
 document.querySelector('.sidebarGo').classList.toggle('sidebar');
 if(document.querySelector('.sidebarGo').classList.contains('sidebar')){
    document.querySelector('.ham').style.display='none';
    setTimeout(()=>{
        document.querySelector('.cross').style.display='inline';
    },300)
}
 else{
    document.querySelector('.ham').style.display='inline';
    document.querySelector('.cross').style.display='none';
 }
})