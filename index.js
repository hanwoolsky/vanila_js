//const title = document.getElementById("title");
const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick(){ //className으로 하면 class 이름이 바뀌면 속성도 바뀐다. btn의 속성에 마우스 커서가 clicked가 되면 사라진다.
    const hasClass = title.classList.contains(CLICKED_CLASS);
    if(!hasClass){
        title.classList.add(CLICKED_CLASS); // classList를 사용하면 btn을 그대로 가진 채로 cliked를
    } else{
        title.classList.remove(CLICKED_CLASS);
    } // title.classList.toggle(CLICKED_CLASS)은 if, else와 똑같은 역할을 해준다.
}

function init(){
    title.addEventListener("click", handleClick); // title을 클릭하면 색깔 change
}

init();