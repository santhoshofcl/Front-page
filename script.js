const text = document.querySelector(".multiple-text");
const textLoad = () => {
    setTimeout(()=>{
        text.textContent="Programer";
    },0);
    setTimeout(()=>{
        text.textContent="Creater";
    },4000);
    setTimeout(()=>{
        text.textContent="Developer";
    },8000);
}
textLoad()
loop
