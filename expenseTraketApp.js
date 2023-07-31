document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.getElementById("submitButton");
    const outputElement = document.getElementById("outputList");

   
    const storedData = JSON.parse(localStorage.getItem("inputData") || "[]");
    storedData.forEach((data) => {
        addListItem(data);
    });

    submitButton.addEventListener("click", function (event) {
        event.preventDefault(); 

        const amountInput = document.getElementById("amount").value;
        const descriptionInput = document.getElementById("description").value;
        const reasonInput = document.getElementById("reason").value;

        const inputData = {
            amount: amountInput,
            description: descriptionInput,
            reason: reasonInput,
        };

        
        const existingData = JSON.parse(localStorage.getItem("inputData") || "[]");
        const existingIndex = findDataIndex(existingData, inputData);

        if (existingIndex !== -1) {
           
            existingData[existingIndex] = inputData;
            localStorage.setItem("inputData", JSON.stringify(existingData));

           
            const listItemToUpdate = outputElement.children[existingIndex];
            listItemToUpdate.textContent = `Amount: ${inputData.amount}, Description: ${inputData.description}, Reason: ${inputData.reason}`;
        } else {
            
            existingData.push(inputData);
            localStorage.setItem("inputData", JSON.stringify(existingData));

            
            addListItem(inputData);
        }

        
        document.getElementById("amount").value = "";
        document.getElementById("description").value = "";
        document.getElementById("reason").value = "movie";
    });

    function findDataIndex(dataArray, dataToFind) {
        return dataArray.findIndex((item) => {
            return (
                item.amount === dataToFind.amount &&
                item.description === dataToFind.description &&
                item.reason === dataToFind.reason
            );
        });
    }

    function addListItem(data) {
        const listItem = document.createElement("li");
        listItem.textContent = `Amount: ${data.amount}, Description: ${data.description}, Reason: ${data.reason}`;

        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.addEventListener("click", function () {
            editListItem(data, listItem);
        });

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", function () {
            deleteListItem(data, listItem);
        });

        listItem.appendChild(editButton);
        listItem.appendChild(deleteButton);
        outputElement.appendChild(listItem);
    }

    function editListItem(data, listItem) {
        document.getElementById("amount").value = data.amount;
        document.getElementById("description").value = data.description;
        document.getElementById("reason").value = data.reason;

        
        const existingData = JSON.parse(localStorage.getItem("inputData") || "[]");
        const existingIndex = findDataIndex(existingData, data);

        if (existingIndex !== -1) {
            existingData.splice(existingIndex, 1);
            localStorage.setItem("inputData", JSON.stringify(existingData));
        }

        
        outputElement.removeChild(listItem);
    }

    function deleteListItem(data, listItem) {
       
        const existingData = JSON.parse(localStorage.getItem("inputData") || "[]");
        const existingIndex = findDataIndex(existingData, data);

        if (existingIndex !== -1) {
            existingData.splice(existingIndex, 1);
            localStorage.setItem("inputData", JSON.stringify(existingData));
        }

        
        outputElement.removeChild(listItem);
    }
});
