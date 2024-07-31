document.addEventListener("DOMContentLoaded", function() {
    var myModal = document.getElementById("myModal");
    var loadingModal = document.getElementById("loadingModal");
    var congratsModal = document.getElementById("congratsModal");
    var enviarBtn = document.getElementById("enviarBtn");
    var seguirBtn = document.getElementById("seguirBtn");
    var closeButtons = document.getElementsByClassName("close");
    var instagramNameInput = document.getElementById("instagramName");
    var congratsMessage = document.getElementById("congratsMessage");

    // Open modal on button click
    enviarBtn.onclick = function() {
        var instagramName = instagramNameInput.value;
        if (instagramName) {
            localStorage.setItem("instagramName", instagramName);
            myModal.style.display = "block";
        } else {
            alert("Por favor, insira seu Instagram.");
        }
    }

    // Close modals on close button click
    for (var i = 0; i < closeButtons.length; i++) {
        closeButtons[i].onclick = function() {
            myModal.style.display = "none";
            loadingModal.style.display = "none";
            congratsModal.style.display = "none";
        }
    }

    // Close modals on window click
    window.onclick = function(event) {
        if (event.target == myModal) {
            myModal.style.display = "none";
        } else if (event.target == loadingModal) {
            loadingModal.style.display = "none";
        } else if (event.target == congratsModal) {
            congratsModal.style.display = "none";
        }
    }

    // Redirect to Instagram and set state
    seguirBtn.onclick = function() {
        localStorage.setItem("followed", "true");
        window.location.href = "https://www.instagram.com/ridel_pg/?igsh=bW9qM2RkeGdidGln";
    }

    // Check if the user has followed and show the congrats modal with a delay
    if (localStorage.getItem("followed") === "true") {
        var instagramName = localStorage.getItem("instagramName");
        loadingModal.style.display = "block";
        setTimeout(function() {
            loadingModal.style.display = "none";
            congratsMessage.innerHTML = `Parabéns, <span class="highlight">${instagramName}</span>! Você está na fila e está no <span class="highlight">segundo lugar</span> para ganhar 60k de seguidores. Acontecerá a qualquer momento se você for meu seguir..`;
            congratsModal.style.display = "block";
            localStorage.removeItem("followed");
        }, 3000); // 3 segundos de atraso
    }
});
