System.register(["./pig", "./pigController"], function (exports_1, context_1) {
    "use strict";
    var Model, Pig, PigType, pigController_1, pig_1, p;
    var __moduleName = context_1 && context_1.id;
    //TODO: try to start this today 
    function tableUpdate(p) {
        // reading the p.pigs array from within the controller
    }
    function getInputType(value) {
        if (value === 'Name' || value === 'Personality') {
            return "text";
        }
        else if (value === 'Height' || value === 'Weight') {
            return "number";
        }
        else {
            console.log(value);
            return "select";
        }
    }
    function createTable() {
        //making the add pig table 
        const table = document.getElementById("adding-pig");
        const tbody = table.querySelector("tbody");
        if (tbody) {
            let tableRows = 0;
            for (let i in new Pig("", 0, 0, PigType.Grey, "", '')) {
                if (i !== "constructor" && i !== "dynamicField" && i !== 'Breed') {
                    const row = tbody.insertRow(-1);
                    row.insertCell(0).textContent = i;
                    const inputCell = row.insertCell(1);
                    const inputType = getInputType(i);
                    if (inputType !== 'select') {
                        const input = document.createElement("input");
                        input.id = tableRows.toString();
                        input.type = inputType;
                        inputCell.appendChild(input);
                    }
                    else if (inputType === 'select') {
                        const select = document.createElement('select');
                        select.id = tableRows.toString();
                        select.id = 'category';
                        const option = document.createElement("option");
                        option.value = '0';
                        option.text = 'Choose one';
                        select.appendChild(option);
                        let x = 1;
                        Object.values(PigType).forEach((values) => {
                            const option = document.createElement("option");
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
            //TODO: add breed
            var select = document.getElementById('category');
            select.addEventListener('change', function () {
                console.log('changedddd', select.options[select.selectedIndex].text);
                // add dynamic field  -> check the thing and add the field 
                const ability = ['Swimming', 'Language', 'Running', 'Strength'];
                const table = document.getElementById("adding-pig");
                const tbody = table.querySelector("tbody");
                if (tbody) {
                    if (select.value !== '0') {
                        if (tableRows >= 5) {
                            if (tableRows > 5) {
                                // once for ability 
                                tbody.deleteRow(tableRows - 1);
                                tableRows--;
                                // once for breeds
                                tbody.deleteRow(tableRows - 1);
                                tableRows--;
                            }
                            // for ability 
                            const row = tbody.insertRow(-1);
                            row.insertCell(0).textContent = ability[parseInt(select.value) - 1];
                            const inputCell = row.insertCell(1);
                            let inputType;
                            if (parseInt(select.value) != 2) {
                                inputType = 'number';
                            }
                            else {
                                inputType = 'text';
                            }
                            const input = document.createElement("input");
                            input.type = inputType;
                            inputCell.appendChild(input);
                            tableRows++;
                            // for breed
                            const breedRow = tbody.insertRow(-1);
                            breedRow.insertCell(0).textContent = 'Breeds';
                            const selectCell = breedRow.insertCell(1);
                            const breedselect = document.createElement('select');
                            breedselect.id = tableRows.toString();
                            breedselect.id = 'breeds';
                            const breedoption = document.createElement("option");
                            breedoption.value = '0';
                            breedoption.text = 'Choose one';
                            breedselect.appendChild(breedoption);
                            //for each category
                            let x = 1;
                            Object.values(pig_1.whiteBreeds).forEach((values) => {
                                const breedoption = document.createElement("option");
                                breedoption.value = x.toString();
                                breedoption.text = values;
                                breedselect.appendChild(breedoption);
                                x++;
                            });
                            selectCell.appendChild(breedselect);
                            tableRows++;
                        }
                    }
                    else {
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
            document.getElementById('create').addEventListener('click', function () {
                console.log('addddddd');
                // add edge cases
                addingPig(tableRows);
            });
        }
    }
    //TODO: complete adding the pig --> add cases if something isn't filled out and what not 
    // when you click on the add button 
    function addingPig(rows) {
        console.log('in adding pig function');
        let creation;
        for (var i = 0; i < rows; i++) {
            if (i === 3) {
                // needs to be writing PigType.colour
            }
            else {
                var x = document.getElementById(i.toString());
                creation[i] = x.value;
            }
        }
        // var pig: Pig = new Pig(creation[0], creation[1], creation[2], creation[3], creation[4]);
        // (pig.dynamicField as DynamicFieldMap[PigType.Grey]).Swimming ????? 
        // p.add(pig);
    }
    // create mini table within the table 
    function showMore() {
        // going to be doing by number 
    }
    // delete the pig from the array and delete the row on the table 
    function deletePig(name) {
        // delete function from p.pigs
        //  writing this for now
        p.delete(name);
        // update table
    }
    return {
        setters: [
            function (Model_1) {
                Model = Model_1;
                pig_1 = Model_1;
            },
            function (pigController_1_1) {
                pigController_1 = pigController_1_1;
            }
        ],
        execute: function () {
            Pig = Model.Pig;
            PigType = Model.PigType;
            p = new pigController_1.Controller();
            // all event listeners 
            document.getElementById("add").addEventListener('click', function () {
                document.getElementById("add").style.display = 'none';
                createTable();
                document.getElementById("create").style.display = "inline-block";
            });
        }
    };
});
