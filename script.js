document.addEventListener("DOMContentLoaded", function () {
    const calculateBtn = document.getElementById("calculateBtn");
    const unitBtn = document.getElementById("unitBtn");
    let isConsumptionPer100Km = true; // Default unit is L/100km

    unitBtn.addEventListener("click", function () {
        isConsumptionPer100Km = !isConsumptionPer100Km;
        unitBtn.textContent = isConsumptionPer100Km ? "L/100km" : "km/L";
    });

    calculateBtn.addEventListener("click", function () {
        const totalKm = parseFloat(document.getElementById("totalKm").value);
        const consumption = parseFloat(document.getElementById("consumption").value);
        const pricePerLiter = parseFloat(document.getElementById("pricePerLiter").value);

        if (!isNaN(totalKm) && !isNaN(consumption) && !isNaN(pricePerLiter)) {
            if (isConsumptionPer100Km) {
                const totalCost = (totalKm / 100) * consumption * pricePerLiter;
                document.getElementById("totalCost").textContent = totalCost.toFixed(2);
            } else {
                const totalCost = (totalKm / consumption) * pricePerLiter;
                document.getElementById("totalCost").textContent = totalCost.toFixed(2);
            }
        } else {
            alert("Please enter valid numbers for all fields.");
        }
    });
});
