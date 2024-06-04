function scrollToBlock() {
    var block = document.getElementById('tickets');
    block.scrollIntoView({ behavior: "smooth", block: "start" });
}

// Инициализация модального окна Bootstrap
var modal = new bootstrap.Modal(document.getElementById('paymentModal'))
