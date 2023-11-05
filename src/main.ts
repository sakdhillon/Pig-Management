var p = new Controller();


// all event listeners 
document.getElementById("add")!.addEventListener('click', function(){
    document.getElementById("add")!.style.display = 'none';
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
        console.log(value);
      return "select";
    }
  }

function createTable(){

    //making the add pig table 
    const table = document.getElementById("adding-pig");
    const tbody = table!.querySelector("tbody");
    
    if (tbody){
        for (let i in new Pig("", 0, 0, PigType.Grey, "")){
            if (i !== "constructor" && i !== "dynamicField"){
                const row = tbody.insertRow(-1);
                row.insertCell(0).textContent = i;
                const inputCell = row.insertCell(1);

                const inputType = getInputType(i);

                if (inputType !== 'select'){
                    const input = document.createElement("input");
                    input.type = inputType;
                    inputCell.appendChild(input);
                } else if (inputType === 'select'){
                    const select = document.createElement('select');
                    select.id = 'category';

                    const option = document.createElement("option");
                    option.value = '0';
                    option.text = 'Choose one';
                    select.appendChild(option);

                    let x: number = 1; // ??? needed?
                    Object.values(PigType).forEach((values) => {
                        console.log(values);
                        const option = document.createElement("option");
                        option.value = x.toString();
                        option.text = values;
                        select.appendChild(option);
                        x++;
                    });
                    inputCell.appendChild(select);
                }
            }
        }

        // have a event listener -> if it is one of the categories, then add the dynamic field 
        var select = document.getElementById('category');
        select!.addEventListener('change', function() {
            console.log('changedddd');
            // add dynamic field  -> check the thing and add the field 
            
        });
        
        // event listener if pressing the add button underneath the table 
            // that event listener goes to adding pig 
        document.getElementById('create')!.addEventListener('click', function(){
            console.log('addddddd');
            addingPig();
        });
    }
}



// when you click on the add button 
function addingPig(){
    console.log('in adding pig function')

}


// create mini table within the table 
function showMore(){

}


// delete the pig from the array and delete the row on the table 
function deletePig(){

}