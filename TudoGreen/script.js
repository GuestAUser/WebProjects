window.onload = function() {
    var clickCount = 0;
    var itemValue = 5.6;
    var totalValue = 0;
    var maxLimitReached = false;

    var buyButton = document.getElementById('buyButton');
    var displayCount = document.getElementById('displayCount');

    buyButton.addEventListener('click', function(event) {
        event.preventDefault();

        if(maxLimitReached) {
            return;
        }

        clickCount++;
        totalValue = itemValue * clickCount;

        totalValue = Number(totalValue.toFixed(3));

        displayCount.classList.remove("bag-animation");
        void displayCount.offsetWidth;
        displayCount.classList.add("bag-animation");

        displayCount.innerHTML = "Há " + clickCount + " items adicionados a sacola, o total a ser cobrado é $" + totalValue + ".";

        if (clickCount % 50 === 0) {
            displayCount.innerHTML += "<br>A sacola atingiu seu máximo!";
        }

        if (clickCount >= 50) {
            buyButton.disabled = true;
            maxLimitReached = true;
            displayCount.innerHTML += "<br>Compras desabilitadas.";
        }
    });
}
