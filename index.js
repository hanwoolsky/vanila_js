//const title = document.getElementById("title");
const title = document.querySelector("#title");

function handleResize(){
    console.log("I have been resized")
}

window.addEventListener("resize", handleResize); // window의 크기를 바꾸면 handleResize를 호출, handleResize() 를 넣으면 resize 이벤트 상관없이 함수 시행


function handleClick(){
    const currentColor = title.style.color;
    if (currentColor === BASE_COLOR){
        title.style.color = OTHER_COLOR;
    } else {
        title.style.color = BASE_COLOR;
    }
}

const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "#7f8c8d";

function init(){
    title.style.color = BASE_COLOR;
    title.addEventListener("click", handleClick); // title을 클릭하면 색깔 change
}

init();
