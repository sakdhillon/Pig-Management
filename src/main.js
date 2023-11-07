/// TODO: change content - don't delete the row - for the adding pig 
System.register(["./pig", "./pigController"], function (exports_1, context_1) {
    "use strict";
    var Model, Pig, PigType, pigController_1, pig_1, pig_2, pig_3, pig_4, p, container;
    var __moduleName = context_1 && context_1.id;
    //TODO: make the table -> erase table and rewrite it each time 
    function tableUpdate(pig, origin, id) {
        // reading the p.pigs array from within the controller
        console.log("making table...");
        const table = document.getElementById("main-table");
        const tbody = table.querySelector("tbody");
        if (tbody) {
            if (origin == 'delete') {
                //something
                console.log('within the delete that is in the update tableeeee');
                console.log(table.rows.length);
                table.deleteRow(id + 1); // kind of works but what if a row in the middle was deleted 
            }
            else if (origin == 'add') {
                const row = tbody.insertRow(-1);
                console.log(p.pigs[p.pigs.length - 1].Name);
                row.insertCell(0).textContent = p.pigs[p.pigs.length - 1].Name;
                row.insertCell(1).textContent = p.pigs[p.pigs.length - 1].Category;
                const buttonSM = document.createElement('button');
                buttonSM.id = 'show-more' + (p.pigs.length - 1).toString();
                buttonSM.classList.add('showMore-button');
                buttonSM.value = (p.pigs.length - 1).toString();
                buttonSM.textContent = 'Show More';
                row.insertCell(2).appendChild(buttonSM);
                const buttonD = document.createElement('button');
                buttonD.id = 'delete' + (p.pigs.length - 1).toString();
                buttonD.classList.add('delete-button');
                buttonD.textContent = 'Delete';
                buttonD.value = (p.pigs.length - 1).toString();
                // console.log((p.pigs.length-1).toString() +'id')
                row.insertCell(3).appendChild(buttonD);
            }
        }
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
    // completed create table -> for adding a pig
    function createTable() {
        let tableRows;
        const table = document.getElementById("adding-pig");
        if (p.pigs.length !== 0 || table.rows.length !== 0) {
            console.log("showinggg");
            document.getElementById("adding-pig").style.visibility = 'visible';
            tableRows = table.rows.length;
            console.log(tableRows);
        }
        else {
            //making the add pig table 
            const table = document.getElementById("adding-pig");
            const tbody = table.querySelector("tbody");
            tableRows = 0;
            if (tbody) {
                for (let i in new Pig("", 0, 0, PigType.Grey, "", '')) {
                    if (i !== "constructor" && i !== "dynamicField" && i !== 'Breed' && i !== 'id') {
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
            }
        }
        // have a event listener -> if it is one of the categories, then add the dynamic field 
        var select = document.getElementById('category');
        select.addEventListener('change', function () {
            console.log('changedddd', select.options[select.selectedIndex].text);
            // add dynamic field  -> check the thing and add the field 
            const ability = ['Swimming', 'Language', 'Running', 'Strength'];
            const table = document.getElementById("adding-pig");
            const tbody = table.querySelector("tbody");
            if (tbody) {
                tableRows = table.rows.length;
                if (select.value !== '0') {
                    if (tableRows >= 5) {
                        if (tableRows >= 6) {
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
                        input.id = tableRows.toString();
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
                        let x = 1;
                        if (select.value === '1') {
                            Object.values(pig_1.greyBreeds).forEach((values) => {
                                const breedoption = document.createElement("option");
                                breedoption.value = x.toString();
                                breedoption.text = values;
                                breedselect.appendChild(breedoption);
                                x++;
                            });
                        }
                        else if (select.value === '2') {
                            Object.values(pig_3.chestnutBreeds).forEach((values) => {
                                const breedoption = document.createElement("option");
                                breedoption.value = x.toString();
                                breedoption.text = values;
                                breedselect.appendChild(breedoption);
                                x++;
                            });
                        }
                        else if (select.value === '3') {
                            Object.values(pig_2.whiteBreeds).forEach((values) => {
                                const breedoption = document.createElement("option");
                                breedoption.value = x.toString();
                                breedoption.text = values;
                                breedselect.appendChild(breedoption);
                                x++;
                            });
                        }
                        else {
                            Object.values(pig_4.blackBreeds).forEach((values) => {
                                const breedoption = document.createElement("option");
                                breedoption.value = x.toString();
                                breedoption.text = values;
                                breedselect.appendChild(breedoption);
                                x++;
                            });
                        }
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
            // TODO: add edge cases
            document.getElementById("add").style.display = 'inline-block';
            document.getElementById("adding-pig").style.visibility = 'hidden';
            document.getElementById("create").style.display = 'none';
            document.getElementById("cancel").style.display = 'none';
            addingPig();
        });
    }
    // when you click on the add button 
    function addingPig() {
        console.log('in adding pig function');
        var pig;
        var n = document.getElementById('0');
        var h = document.getElementById('1');
        var w = document.getElementById('2');
        var select = document.getElementById('category');
        var c = select.options[select.selectedIndex].text;
        select.selectedIndex = 0;
        var per = document.getElementById('4');
        var dynamic = document.getElementById('5');
        select = document.getElementById('breeds');
        var b = select.options[select.selectedIndex].text;
        console.log("breed", b);
        select.selectedIndex = 0;
        if (c == 'Grey') {
            pig = new Pig(n.value, parseInt(h.value), parseInt(w.value), PigType.Grey, per.value, b);
            pig.dynamicField.Swimming = parseInt(dynamic.value);
        }
        else if (c == 'Chestnut') {
            pig = new Pig(n.value, parseInt(h.value), parseInt(w.value), PigType.Chestnut, per.value, b);
            pig.dynamicField.Language = dynamic.value;
        }
        else if (c == 'White') {
            pig = new Pig(n.value, parseInt(h.value), parseInt(w.value), PigType.White, per.value, b);
            pig.dynamicField.Running = parseInt(dynamic.value);
        }
        else {
            pig = new Pig(n.value, parseInt(h.value), parseInt(w.value), PigType.Black, per.value, b);
            pig.dynamicField.Strength = parseInt(dynamic.value);
        }
        n.value = '';
        h.value = '';
        w.value = '';
        per.value = '';
        dynamic.value = '';
        const table = document.getElementById("adding-pig");
        const tbody = table.querySelector("tbody");
        console.log('changedddd', select.options[select.selectedIndex].text);
        if (tbody) {
            tbody.deleteRow(6);
            tbody.deleteRow(5);
        }
        var num = p.add(pig);
        console.log(num);
        tableUpdate(p.pigs, 'add', -1);
    }
    // TODO: write show more function 
    // create mini table within the table 
    function showMore() {
        // going to be doing by number 
    }
    function deletePig(id) {
        p.delete(id);
        tableUpdate(p.pigs, 'delete', id);
        // update table
    }
    return {
        setters: [
            function (Model_1) {
                Model = Model_1;
                pig_1 = Model_1;
                pig_2 = Model_1;
                pig_3 = Model_1;
                pig_4 = Model_1;
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
                document.getElementById("cancel").style.display = "inline-block";
                document.getElementById("create").style.display = "inline-block";
            });
            document.getElementById('cancel').addEventListener('click', function () {
                document.getElementById("adding-pig").style.visibility = 'hidden';
                document.getElementById("add").style.display = 'inline-block';
                document.getElementById("cancel").style.display = "none";
                document.getElementById("create").style.display = "none";
                var n = document.getElementById('0');
                var h = document.getElementById('1');
                var w = document.getElementById('2');
                var select = document.getElementById('category');
                var c = select.options[select.selectedIndex].text;
                select.selectedIndex = 0;
                var per = document.getElementById('4');
                var dynamic = document.getElementById('5');
                select = document.getElementById('breeds');
                var b = select.options[select.selectedIndex].text;
                console.log("breed", b);
                select.selectedIndex = 0;
                n.value = '';
                h.value = '';
                w.value = '';
                per.value = '';
                dynamic.value = '';
            });
            container = document.getElementById("main-table");
            if (container) {
                container.addEventListener("click", function (event) {
                    const target = event.target;
                    if (target && target.classList.contains("delete-button")) {
                        const clickedButton = target;
                        const id = parseInt(clickedButton.value);
                        console.log("id: ", id);
                        console.log("Button with class 'delete' was clicked!");
                        deletePig(id);
                    }
                });
            }
        }
    };
});
