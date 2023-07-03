function submitForm(event) {
    event.preventDefault()

    let [inputUserName, inputKM, inputAge] = document.querySelectorAll('#ticketForm input[type="text"]')

    const UNDERAGE = 18,
        OVERAGE = 65;

    let userName = inputUserName.value,
        kms = parseInt(inputKM.value),
        pricePerKm = 0.21,
        age = parseInt(inputAge.value),
        price = kms * pricePerKm,
        underageDiscount = 20,
        overageDiscount = 40,
        underageMultiplier = 1 - underageDiscount / 100,
        overageMultiplier = 1 - overageDiscount / 100,
        ticketType = "Biglietto Standard",
        carriage = Math.floor(Math.random() * 9) + 1,
        cpCode = Math.floor(Math.random() * 10000);




    if (age < UNDERAGE) {
        price *= underageMultiplier
        ticketType = "Biglietto Minorenni"
    } else if (age > OVERAGE) {
        price *= overageMultiplier
        ticketType = "Biglietto Anziani"
    }

    document.getElementById("userName").innerHTML = userName
    document.getElementById("ticketType").innerHTML = ticketType
    document.getElementById("carriage").innerHTML = carriage
    document.getElementById("cpCode").innerHTML = cpCode
    document.getElementById("price").innerHTML = price + "€"

    document.getElementById("ticketForm").classList.add("d-none")

    document.getElementById("ticket").classList.remove("d-none")

}