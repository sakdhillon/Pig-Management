var p = new Controller();


// all event listeners 
document.getElementById("add")!.addEventListener('click', function(){
    // var pig = new Pig("piggy", 23, 23, PigType.White, "dude");
    // (pig.dynamicField as DynamicFieldMap[PigType.Grey]).Swimming = 42;
    // p.add(pig);

    createTable();
    document.getElementById("create")!.style.display = "inline-block";
});






//functions I needdddd

//passing in the p.pigs array
function tableUpdate(p: Pig[]){
}


function getInputType(value: any): string {
    if (value === 'name' || value === 'personality') {
      return "text";
    } else if (value === 'height' || value === 'weight') {
      return "number";
    } else {
      return "select";
    }
  }

function createTable(){

    //making the add pig create table 

    const table = document.getElementById("adding-pig");
    const tbody = table!.querySelector("tbody");
    
    if (tbody){
        for (var i in new Pig("", 0, 0, PigType.Grey, "")){
            if (i !== "constructor" && i !== "dynamicField"){
                const row = tbody.insertRow(-1);
                row.insertCell(0).textContent = i;
                const inputCell = row.insertCell(1);

                const inputType = getInputType(i);

                if (inputType !== 'select'){
                    const input = document.createElement("input");
                    input.type = inputType;
                    inputCell.appendChild(input);
                } else{
                    const select = document.createElement('select');
                    // add the options 
                }
            }
        }

        // have a event listener -> if it is one of the categories, then add the dynamic field 


        // event listener if pressing the add button underneath the table 
            // that event listener goes to adding pig 
    }
}



// when you click on the add button 
function addingPig(){

}


// create mini table within the table 
function showMore(){

}


// delete the pig from the array and delete the row on the table 
function deletePig(){

}