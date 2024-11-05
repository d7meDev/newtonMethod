const xoInput = document.getElementById("xoInput");
const fxInput = document.getElementById("fxInput");
const fPrimeInput = document.getElementById("fPrimeInput");
const itreationInput = document.getElementById("itreationInput");
const ErrorInput = document.getElementById("ErrorInput");
const table = document.getElementById("table");
const form = document.querySelector("form");

form.addEventListener('submit', event => {
    event.preventDefault();
    table.textContent = "";
    let x = Number(xoInput.value);
    let fx = fxInput.value;
    let fp = fPrimeInput.value;
    let itreations = Math.ceil(Number(itreationInput.value));
    let e = ErrorInput.value;
    let eNew = e * 2;
    let xNew
    let fxValue;
    let fpValue = eval(fp);
    if (fpValue != 0) {

        let headers = document.createElement("div");
        headers.id = "headers";
        let iHeader = document.createElement("h1");
        iHeader.textContent = "i"
        let xiHeader = document.createElement("h1");
        xiHeader.textContent = "xi";
        let fxHeader = document.createElement("h1");
        fxHeader.textContent = "f(x)"
        let fpHeader = document.createElement("h1");
        fpHeader.textContent = "f'(x)"
        let xi1Header = document.createElement("h1");
        xi1Header.textContent = "xi + 1";
        let errorHeader = document.createElement("h1");
        errorHeader.textContent = "| xi+1 - xi |"
        headers.append(iHeader);
        headers.append(xiHeader);
        headers.append(fxHeader);
        headers.append(fpHeader);
        headers.append(xi1Header);
        headers.append(errorHeader);
        table.append(headers)


        for (let i = 1; i <= itreations && eNew > e; i++) {

            fxValue = eval(fx);
            fpValue = eval(fp);
            xNew = x - fxValue / fpValue;
            eNew = Math.abs(xNew - x);


            let row = document.createElement("div");
            row.classList.add("row");

            let iData = document.createElement("p");
            iData.textContent = i
            let xiData = document.createElement("p");
            xiData.textContent = x;
            let fxData = document.createElement("p");
            fxData.textContent = fxValue;
            let fpData = document.createElement("p");
            fpData.textContent = fpValue
            let xi1Data = document.createElement("p");
            xi1Data.textContent = xNew;
            let errorData = document.createElement("p");
            errorData.textContent = eNew;

            row.append(iData);
            row.append(xiData);
            row.append(fxData);
            row.append(fpData);
            row.append(xi1Data);
            row.append(errorData);
            table.append(row);
            

            x = xNew;


        }
    }


})


form.addEventListener('reset', event => {
     event.preventDefault();
     table.textContent = "";
     xoInput.textContent ="";
     fxInput.textContent = ""; 
     fPrimeInput.textContent = "";
     itreationInput.textContent = ""; 
     ErrorInput.textContent = "";
    
})

