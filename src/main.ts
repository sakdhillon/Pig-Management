

import * as Model from "./pig";
import Pig = Model.Pig; 
import DynamicFieldMap = Model.DynamicFieldMap;
import PigType = Model.PigType;

import { Controller } from "./pigController"

import { greyBreeds } from "./pig";
import { whiteBreeds } from "./pig";
import { chestnutBreeds } from "./pig";
import { blackBreeds } from "./pig";



var p: Controller = new Controller();

// all event listeners 
document.getElementById("add")!.addEventListener('click', function(){
    document.getElementById("add")!.style.display = 'none';
    createTable();
    document.getElementById("create")!.style.display = "inline-block";
});


//TODO: make the table -> erase table and rewrite it each time 
function tableUpdate(p: Pig[]){

    // reading the p.pigs array from within the controller
    console.log("making table...");
}


function getInputType(value: string): string {
    if (value === 'Name' || value === 'Personality') {
      return "text";
    } else if (value === 'Height' || value === 'Weight') {
      return "number";
    } else {
        console.log(value);
        return "select";
    }
}



// completed create table -> for adding a pig
function createTable(){

    //making the add pig table 
    const table = document.getElementById("adding-pig") as HTMLTableElement;
    const tbody = table!.querySelector("tbody");
    
    if (tbody){
        let tableRows: number = 0;
        for (let i in new Pig("", 0, 0, PigType.Grey, "", '')){
            if (i !== "constructor" && i !== "dynamicField" && i !== 'Breed'){
                const row: HTMLTableRowElement = tbody.insertRow(-1);
                row.insertCell(0).textContent = i;
                const inputCell: HTMLTableCellElement = row.insertCell(1);

                const inputType: string = getInputType(i);

                if (inputType !== 'select'){
                    const input: HTMLInputElement = document.createElement("input");
                    input.id = tableRows.toString();
                    input.type = inputType;
                    inputCell.appendChild(input);
                } else if (inputType === 'select'){
                    const select: HTMLSelectElement = document.createElement('select');
                    select.id = tableRows.toString();
                    select.id = 'category';

                    const option: HTMLOptionElement = document.createElement("option");
                    option.value = '0';
                    option.text = 'Choose one';
                    select.appendChild(option);

                    let x: number = 1;
                    Object.values(PigType).forEach((values) => {
                        const option: HTMLOptionElement = document.createElement("option");
                        option.value = x.toString();
                        option.text = values;
                        select.appendChild(option);
                        x++;
                    });
                    inputCell.appendChild(select);
                }
                tableRows++;
            }
        }

        // have a event listener -> if it is one of the categories, then add the dynamic field 
        var select = document.getElementById('category') as HTMLSelectElement;
        select!.addEventListener('change', function() {
            console.log('changedddd', select.options[select.selectedIndex].text);
            // add dynamic field  -> check the thing and add the field 

            const ability: string[] = ['Swimming', 'Language', 'Running', 'Strength'];
            const table = document.getElementById("adding-pig") as HTMLTableElement;
            const tbody = table!.querySelector("tbody");
            
            if (tbody){

                if (select.value !== '0'){
                    if (tableRows >= 5){
                        if (tableRows > 5){
                            // once for ability 
                            tbody.deleteRow(tableRows - 1);
                            tableRows--;
                            // once for breeds
                            tbody.deleteRow(tableRows - 1);
                            tableRows--;
                        }

                        // for ability 
                        const row: HTMLTableRowElement = tbody.insertRow(-1);
                        row.insertCell(0).textContent = ability[parseInt(select.value)-1];
                        const inputCell: HTMLTableCellElement = row.insertCell(1);
                        let inputType: string;

                        if (parseInt(select.value) != 2){
                            inputType = 'number';
                        } else{
                            inputType = 'text';
                        }

                        const input: HTMLInputElement = document.createElement("input");
                        input.type = inputType;
                        input.id = tableRows.toString();
                        inputCell.appendChild(input);

                        tableRows++

                        // for breed
                        const breedRow: HTMLTableRowElement = tbody.insertRow(-1);
                        breedRow.insertCell(0).textContent = 'Breeds';
                        const selectCell: HTMLTableCellElement = breedRow.insertCell(1);

                        const breedselect: HTMLSelectElement = document.createElement('select');
                        breedselect.id = tableRows.toString();
                        breedselect.id = 'breeds';

                        const breedoption: HTMLOptionElement = document.createElement("option");
                        breedoption.value = '0';
                        breedoption.text = 'Choose one';
                        breedselect.appendChild(breedoption);

                        let x: number = 1;
                        if (select.value === '1'){
                            Object.values(greyBreeds).forEach((values) => {
                                const breedoption: HTMLOptionElement = document.createElement("option");
                                breedoption.value = x.toString();
                                breedoption.text = values;
                                breedselect.appendChild(breedoption);
                                x++;
                            });
                        } else if (select.value === '2'){
                            Object.values(chestnutBreeds).forEach((values) => {
                                const breedoption: HTMLOptionElement = document.createElement("option");
                                breedoption.value = x.toString();
                                breedoption.text = values;
                                breedselect.appendChild(breedoption);
                                x++;
                            });
                        } else if (select.value === '3'){
                            Object.values(whiteBreeds).forEach((values) => {
                                const breedoption: HTMLOptionElement = document.createElement("option");
                                breedoption.value = x.toString();
                                breedoption.text = values;
                                breedselect.appendChild(breedoption);
                                x++;
                            });
                        } else{
                            Object.values(blackBreeds).forEach((values) => {
                                const breedoption: HTMLOptionElement = document.createElement("option");
                                breedoption.value = x.toString();
                                breedoption.text = values;
                                breedselect.appendChild(breedoption);
                                x++;
                            });
                        }
                        selectCell.appendChild(breedselect);
                        tableRows++

                    } 
                } else{
                    // once for ability 
                    tbody.deleteRow(tableRows - 1);
                    tableRows--;
                    // once for breeds
                    tbody.deleteRow(tableRows - 1);
                    tableRows--;
                }
            } 
            
        });
        
        // event listener if pressing the add button underneath the table 
            // that event listener goes to adding pig 
        document.getElementById('create')!.addEventListener('click', function(){
            console.log('addddddd');
            // TODO: add edge cases
            addingPig(tableRows);
        });
    }
}



// when you click on the add button 
function addingPig(rows: number){
    console.log('in adding pig function');

    var pig: Pig;

    var n = document.getElementById('0') as HTMLInputElement;
    var h = document.getElementById('1') as HTMLInputElement;
    var w = document.getElementById('2') as HTMLInputElement;

    var select = document.getElementById('category') as HTMLSelectElement;
    var c = select.options[select.selectedIndex].text;

    var per = document.getElementById('4') as HTMLInputElement;
    var dynamic = document.getElementById('5') as HTMLInputElement;
 
    select = document.getElementById('breeds') as HTMLSelectElement;
    var b = select.options[select.selectedIndex].text;


    if (c == 'Grey'){
        pig = new Pig(n.value, parseInt(h.value), parseInt(w.value), PigType.Grey, per.value, b);
        (pig.dynamicField as DynamicFieldMap[PigType.Grey]).Swimming = parseInt(dynamic.value);

    } else if (c == 'Chestnut'){
        pig = new Pig(n.value, parseInt(h.value), parseInt(w.value), PigType.Chestnut, per.value, b);
        (pig.dynamicField as DynamicFieldMap[PigType.Chestnut]).Language = dynamic.value; 

    } else if (c == 'White'){
        pig = new Pig(n.value, parseInt(h.value), parseInt(w.value), PigType.White, per.value, b);
        (pig.dynamicField as DynamicFieldMap[PigType.White]).Running = parseInt(dynamic.value);

    } else{
        pig = new Pig(n.value, parseInt(h.value), parseInt(w.value), PigType.Black, per.value, b);
        (pig.dynamicField as DynamicFieldMap[PigType.Black]).Strength = parseInt(dynamic.value);
        
    }

    var num = p.add(pig);

    console.log(num);

    ///UPDATE TABLEEEEE
    tableUpdate(p.pigs);
}


// TODO: write show more function 
// create mini table within the table 
function showMore(){

    // going to be doing by number 

}


// TODO: connect to a button, and make sure this works 
// delete the pig from the array and delete the row on the table 
function deletePig(name: string){

    p.delete(name);
    tableUpdate(p.pigs);
    // update table
}