function addData(data) {
    var newRow = document.createElement("tr");

    var docName = document.createElement("td");
    var docDate = document.createElement("td");
    //var docCreator = document.createElement("td");
    var docButton_Holder = document.createElement("td");
    var docButton = document.createElement("button")

    docButton.innerText = "DOWNLOAD"

    docName.innerText = data.docName
    docDate.innerText = data.docDate
    //  .innerText = data.docCreator

    docButton.className = "btn btn-primary"
    docButton.style="background: rgb(50,147,89);"
    docButton.style.fontWeight = "bold"

    docButton_Holder.append(docButton)
    
    newRow.append(docName);
    newRow.append(docDate);
    //newRow.append(docCreator);
    newRow.append(docButton_Holder);

    document.getElementById("transcriptrows").appendChild(newRow);
}

window.onload = function(){
    addData(
        {
            docName: "213",
            docDate: "05-10-2023",
            //docCreator: "000001",
        }
    )
}