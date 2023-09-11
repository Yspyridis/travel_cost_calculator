document.addEventListener("DOMContentLoaded", function () {
    const calculateBtn = document.getElementById("calculateBtn");

    calculateBtn.addEventListener("click", function () {
        const totalKm = parseFloat(document.getElementById("totalKm").value);
        const consumption = parseFloat(document.getElementById("consumption").value);
        const pricePerLiter = parseFloat(document.getElementById("pricePerLiter").value);

        if (!isNaN(totalKm) && !isNaN(consumption) && !isNaN(pricePerLiter)) {
            const totalCost = (totalKm / 100) * consumption * pricePerLiter;
            document.getElementById("totalCost").textContent = totalCost.toFixed(2);
        } else {
            alert("Please enter valid numbers for all fields.");
        }
    });
});
