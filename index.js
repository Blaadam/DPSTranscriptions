let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function addData(data) {
    var newRow = document.createElement("tr");

    var docName = document.createElement("td");
    var docDate = document.createElement("td");
    
    var docButton_Holder = document.createElement("td");
    var docButton = document.createElement("button")

    docButton.innerText = "DOWNLOAD"

    docName.innerText = data.docName
    docDate.innerText = data.docDate

    docButton.className = "btn btn-primary"
    docButton.style = "background: rgb(50,147,89);"
    docButton.style.fontWeight = "bold"

    docButton.addEventListener("click", function () {
        window.open(data.url, "_blank")
        return false
    })

    docButton_Holder.append(docButton)
    ////////////////////////////////////////////////
    var docPreviewButton_Holder = document.createElement("td");
    var docPreviewButton = document.createElement("button")

    docPreviewButton.innerText = "PREVIEW"

    docPreviewButton.className = "btn btn-primary"
    docPreviewButton.style = "background: rgb(50,147,89);"
    docPreviewButton.style.fontWeight = "bold"

    docPreviewButton.addEventListener("click", function () {
        window.open("http://htmlpreview.github.io/?" + data.url, "_blank")
        return false
    })

    docPreviewButton_Holder.append(docPreviewButton)
    ////////////////////////////////////////////////
    newRow.append(docName);
    newRow.append(docDate);

    newRow.append(docPreviewButton_Holder);
    newRow.append(docButton_Holder);

    document.getElementById("transcriptrows").appendChild(newRow);
}

function httpGet(theUrl) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false);
    xmlHttp.send(null);
    return xmlHttp.responseText;
}

function nameToDate(stringDate) {
    var stringYear = stringDate.substring(0, 4)
    var stringMonth = stringDate.substring(4, 6)
    var stringDay = stringDate.substring(6)
    console.log(stringYear, stringMonth, stringDay)
    let date = new Date(stringYear, stringMonth, stringDay);
    let year = date.getFullYear();
    let month = Number(stringMonth);
    let day = Number(stringDay);

    return converted_date = `${days[day-1]} ${day} ${months[month-1]}  ${year}`;
}

window.onload = function () {
    const results = JSON.parse(httpGet("https://api.github.com/repos/Blaadam/DPSTranscriptions/contents/transcripts"))

    var newEntry

    for (i = 0; i < results.length; i++) {
        newEntry = {}
        newEntry.docName = results[i].name
        newEntry.url = results[i].html_url
        console.log(results[i])

        newEntry.docDate = nameToDate(results[i].name.split("_")[1])
        addData(newEntry)
    }
}