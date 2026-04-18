function calculate() {
    let revenue = Number(document.getElementById('revenue').value);
    let expenses = Number(document.getElementById('expenses').value);

    let profit = revenue - expenses;
    let margin = ((profit / revenue) * 100).toFixed(2);

    let status = "";

    if (profit > 0) {
        status = " This business is profitable.";
    } else if (profit === 0) {
        status = " Breaking even.";
    
    } else {
        status =" This business is running at a loss";
    }

    document.getElementById("result").innerHTML = `
    <p><strong>Profit/Loss:</strong> R${profit}</p>
    <p><strong>Profit Margin:</strong> ${margin}%</p>
    <p><strong>Status:</strong> ${status}</p>
    `;

}