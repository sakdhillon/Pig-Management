System.register(["./pig", "./pigController"], function (exports_1, context_1) {
    "use strict";
    var Model, Pig, PigType, pigController_1, pig_1, pig_2, pig_3, pig_4, p, containerShow, close, container;
    var __moduleName = context_1 && context_1.id;
    function reset() {
        var n = document.getElementById('0');
        var h = document.getElementById('1');
        var w = document.getElementById('2');
        var select = document.getElementById('category');
        if (select.selectedIndex !== null) {
            var selectB = document.getElementById('breeds');
            if (selectB !== null && selectB.selectedIndex !== null) {
                selectB.selectedIndex = 0;
            }
            select.selectedIndex = 0;
            const table = document.getElementById("adding-pig");
            const tbody = table.querySelector("tbody");
            var tableRows = table.rows.length;
            if (tbody) {
                if (tableRows > 5) {
                    tbody.deleteRow(tableRows - 1);
                    tableRows--;
                    tbody.deleteRow(tableRows - 1);
                    tableRows--;
                }
            }
        }
        var per = document.getElementById('4');
        var dynamic = document.getElementById('5');
        n.value = '';
        h.value = '';
        w.value = '';
        per.value = '';
        if (dynamic !== null && dynamic.value !== null) {
            dynamic.value = '';
        }
    }
    //make the table
    function tableUpdate(pig, origin, id) {
        // reading the p.pigs array from within the controller
        const table = document.getElementById("main-table");
        const tbody = table.querySelector("tbody");
        if (tbody) {
            if (origin == 'delete') {
                var x = 0;
                for (var i = 0; i < p.pigs.length; i++) {
                    if (p.pigs[i].id === id) {
                        x = i + 1;
                        table.deleteRow(x);
                        p.delete(id);
                        break;
                    }
                }
            }
            else if (origin == 'add') {
                const row = tbody.insertRow(-1);
                row.insertCell(0).textContent = p.pigs[p.pigs.length - 1].Name;
                row.insertCell(1).textContent = p.pigs[p.pigs.length - 1].Category;
                const buttonSM = document.createElement('button');
                buttonSM.id = 'show-more' + (p.pigs.length - 1).toString();
                buttonSM.classList.add('showMore-button');
                buttonSM.value = (p.pigs.length).toString();
                buttonSM.textContent = 'Show More';
                row.insertCell(2).appendChild(buttonSM);
                const buttonD = document.createElement('button');
                buttonD.id = 'delete' + (p.pigs.length - 1).toString();
                buttonD.classList.add('delete-button');
                buttonD.textContent = 'Delete';
                buttonD.value = (p.pigs.length).toString();
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
            return "select";
        }
    }
    function edgeCases() {
        var x = true;
        // needs to check that all parts of adding-pig table is filled out 
        var n = document.getElementById('0');
        var s = n.value;
        var h = document.getElementById('1');
        if (h.value === null || h.value === '') {
            x = false;
            return x;
        }
        var num = parseInt(h.value);
        if (s === null || s === '' || num === null || num < 0) {
            x = false;
            return x;
        }
        var w = document.getElementById('2');
        if (w.value === null || w.value === '') {
            x = false;
            return x;
        }
        num = parseInt(w.value);
        if (num === null || num < 0) {
            x = false;
            return x;
        }
        var select = document.getElementById('category');
        if (select.selectedIndex !== null) {
            var selectB = document.getElementById('breeds');
            if (selectB !== null && selectB.selectedIndex !== null) {
                if (selectB.selectedIndex === 0) {
                    x = false;
                    return x;
                }
            }
            else if (selectB === null) {
                x = false;
                return x;
            }
            if (select.selectedIndex === 0) {
                x = false;
                return x;
            }
            else {
                var dynamic = document.getElementById('5');
                if (select.selectedIndex === 1 || select.selectedIndex === 3 || select.selectedIndex === 4) {
                    if (dynamic.value === null || dynamic.value === '') {
                        x = false;
                        return x;
                    }
                    num = parseInt(dynamic.value);
                    if (num === null || num < 0 || num > 100) {
                        x = false;
                        return x;
                    }
                    if (select.selectedIndex === 4) {
                        if (num === null || num < 1 || num > 10) {
                            x = false;
                            return x;
                        }
                    }
                }
                else if (select.selectedIndex === 2) {
                    s = dynamic.value;
                    if (s === null || s === '') {
                        x = false;
                        return x;
                    }
                }
            }
        }
        else {
            x = false;
            return x;
        }
        var per = document.getElementById('4');
        s = per.value;
        if (s === null || s === '') {
            x = false;
            return x;
        }
        return x;
    }
    // completed create table -> for adding a pig
    function createTable() {
        let tableRows;
        const table = document.getElementById("adding-pig");
        if (p.pigs.length !== 0 || table.rows.length !== 0) {
            document.getElementById("adding-pig").style.visibility = 'visible';
            tableRows = table.rows.length;
        }
        else {
            //making the add pig table 
            const table = document.getElementById("adding-pig");
            const tbody = table.querySelector("tbody");
            tableRows = 0;
            if (tbody) {
                for (let i in new Pig("", 0, 0, PigType.Grey, "", '', 0)) {
                    if (i !== "constructor" && i !== "dynamicField" && i !== 'Breed' && i !== 'id' && i !== 'pigNum') {
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
                        breedRow.insertCell(0).textContent = 'Breed';
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
                    tableRows = table.rows.length;
                    // once for ability 
                    tbody.deleteRow(tableRows - 1);
                    tableRows--;
                    // once for breeds
                    tbody.deleteRow(tableRows - 1);
                    tableRows--;
                }
            }
        });
    }
    // when you click on the add button -- putting things in the pig list
    function addingPig() {
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
        select.selectedIndex = 0;
        var id = p.pigs.length + 1;
        if (c == 'Grey') {
            pig = new Pig(n.value, parseInt(h.value), parseInt(w.value), PigType.Grey, per.value, b, id);
            pig.dynamicField.Swimming = parseInt(dynamic.value);
        }
        else if (c == 'Chestnut') {
            pig = new Pig(n.value, parseInt(h.value), parseInt(w.value), PigType.Chestnut, per.value, b, id);
            pig.dynamicField.Language = dynamic.value;
        }
        else if (c == 'White') {
            pig = new Pig(n.value, parseInt(h.value), parseInt(w.value), PigType.White, per.value, b, id);
            pig.dynamicField.Running = parseInt(dynamic.value);
        }
        else {
            pig = new Pig(n.value, parseInt(h.value), parseInt(w.value), PigType.Black, per.value, b, id);
            pig.dynamicField.Strength = parseInt(dynamic.value);
        }
        n.value = '';
        h.value = '';
        w.value = '';
        per.value = '';
        dynamic.value = '';
        const table = document.getElementById("adding-pig");
        const tbody = table.querySelector("tbody");
        if (tbody) {
            tbody.deleteRow(6);
            tbody.deleteRow(5);
        }
        var num = p.add(pig);
        tableUpdate(p.pigs, 'add', -1);
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
                reset();
            });
            // event listener if pressing the create button underneath the table 
            document.getElementById('create').addEventListener('click', function () {
                // edge cases - so that people aren't adding nothing and are adding correct content 
                const al = edgeCases();
                if (al === false) {
                    alert("Information Missing: Fields are either empty or are holding a value out of range. Please fill out the form properly.");
                }
                else {
                    document.getElementById("add").style.display = 'inline-block';
                    document.getElementById("adding-pig").style.visibility = 'hidden';
                    document.getElementById("create").style.display = 'none';
                    document.getElementById("cancel").style.display = 'none';
                    addingPig();
                }
            });
            /// show more table 
            containerShow = document.getElementById("main-table");
            if (containerShow) {
                containerShow.addEventListener("click", function (event) {
                    const target = event.target;
                    if (target && target.classList.contains("showMore-button")) {
                        const clickedButton = target;
                        const id = parseInt(clickedButton.value);
                        const table = document.getElementById("showMore");
                        const tbody = table.querySelector("tbody");
                        table.style.visibility = 'visible';
                        document.getElementById('close').style.visibility = 'visible';
                        if (tbody) {
                            var row = tbody.rows[0];
                            row.cells[1].textContent = p.pigs[id - 1].Name;
                            row = tbody.rows[1];
                            row.cells[1].textContent = p.pigs[id - 1].Height.toString();
                            row = tbody.rows[2];
                            row.cells[1].textContent = p.pigs[id - 1].Weight.toString();
                            row = tbody.rows[3];
                            row.cells[1].textContent = p.pigs[id - 1].Category;
                            row = tbody.rows[4];
                            row.cells[1].textContent = p.pigs[id - 1].Personality.toString();
                            row = tbody.rows[5];
                            row.cells[1].textContent = p.pigs[id - 1].Breed.toString();
                            if (p.pigs[id - 1].Category === 'Grey') {
                                row = tbody.rows[6];
                                row.cells[0].textContent = 'Swimming';
                                row.cells[1].textContent = p.pigs[id - 1].dynamicField.Swimming.toString();
                            }
                            else if (p.pigs[id - 1].Category === 'Chestnut') {
                                row = tbody.rows[6];
                                row.cells[0].textContent = 'Language';
                                row.cells[1].textContent = p.pigs[id - 1].dynamicField.Language.toString();
                            }
                            else if (p.pigs[id - 1].Category === 'White') {
                                row = tbody.rows[6];
                                row.cells[0].textContent = 'Running';
                                row.cells[1].textContent = p.pigs[id - 1].dynamicField.Running.toString();
                            }
                            else if (p.pigs[id - 1].Category === 'Black') {
                                row = tbody.rows[6];
                                row.cells[0].textContent = 'Strength';
                                row.cells[1].textContent = p.pigs[id - 1].dynamicField.Strength.toString();
                            }
                        }
                    }
                });
            }
            // to close the show more table 
            close = document.getElementById("close");
            close.addEventListener('click', function () {
                close.style.visibility = 'hidden';
                document.getElementById("showMore").style.visibility = 'hidden';
            });
            ////// to delete a pig 
            container = document.getElementById("main-table");
            if (container) {
                container.addEventListener("click", function (event) {
                    const target = event.target;
                    if (target && target.classList.contains("delete-button")) {
                        const clickedButton = target;
                        const id = parseInt(clickedButton.value);
                        var name;
                        for (var i = 0; i < p.pigs.length; i++) {
                            if (p.pigs[i].id === id) {
                                name = p.pigs[i].Name;
                                alert('Confirmation of Deletion: You have deleted pig: ' + name);
                                break;
                            }
                        }
                        tableUpdate(p.pigs, 'delete', id);
                    }
                });
            }
        }
    };
});
