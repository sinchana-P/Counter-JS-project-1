// set initial count
let count=0;

//select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {   //to select all the required buttons ,to work within those.
    btn.addEventListener("click", function(e) {
        const styles = e.currentTarget.classList; //to store the selected or clicked item.
        
        if(styles.contains("decrease")){
            count--;
        }else if(styles.contains("increase")){
            count++;
        }else{
            count=0;
        }
    
        //to change color over clicking buttons
        if(count>0){
            value.style.color="blue";
        }
        if(count<0){
            value.style.color="red";
        }    
        if(count === 0){
            value.style.color="#fff";
        }

        value.textContent=count;  // to store countings.



        
    });
});