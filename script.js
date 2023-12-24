const slider = document.getElementById("slider");
const min = slider.min;
const max = slider.max;
const value = slider.value;


slider.style.background = `linear-gradient(to right, #A4F3EB 0%,  #A4F3EB ${(value-min)/(max-min)*100}%, 
#ECF0FB ${(value-min)/(max-min)*100}%, #ECF0FB 100%)`
slider.oninput = function() {
    this.style.background = `linear-gradient(to right, #A4F3EB 0%, #A4F3EB ${(this.value-this.min)/(this.max-this.min)*100}%, 
    #ECF0FB ${(this.value-this.min)/(this.max-this.min)*100}%, #ECF0FB 100%)`
};

const price = document.getElementById("price");
const checkbox = document.getElementById("switch");
const timing = document.getElementById("time-interval");
const viewer = document.getElementById("viewer-number");

function checkboxListener(){
    checkbox.addEventListener("change", () =>{
        if(checkbox.checked) {
            price.innerHTML = "$" + slider.value*12*0.75 + ".00";
            timing.innerHTML = "/Year"
        } else {
            price.innerHTML = "$" + slider.value + ".00";
            timing.innerHTML = "/Month"
        }
    })
}
function sliderListener(){
    slider.addEventListener("input", ()=> {
        displayViewer()
        if(checkbox.checked) {
            price.innerHTML = "$" + slider.value*12*0.75 + ".00";
        } else {
            price.innerHTML = "$" + slider.value + ".00";
        }
    })
}


function displayViewer() {
    if (slider.value == 8) {
        viewer.innerHTML = `${10}KPAGEVIEWS`;
    } else if (slider.value == 12) {
        viewer.innerHTML = `${50}KPAGEVIEWS`;
    } else if(slider.value == 16) {
        viewer.innerHTML = `${100}KPAGEVIEWS`;
    } else if(slider.value == 20) {
        viewer.innerHTML = `${500}KPAGEVIEWS`;
    } else if(slider.value == 24) {
        viewer.innerHTML = `${1}MPAGEVIEWS`;
    }
}

displayViewer();
checkboxListener();
sliderListener();

