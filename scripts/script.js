$(document).ready(function () {
    $('button[name="submit"]').on('click', function () {
        if ($('input.form-check-input:checked').length < 3) {
            alert("Please check at least three checkbox");
            return false;
        }
    });
});


function generateQRCode() {
    // Get the input values
    var fullName = document.getElementById("fullName").value;
    var country = document.getElementById("country").value;
    var phone = document.getElementById("phone").value;

    // Encode the data as text with WhatsApp link
    var message = `HeY ${fullName}, I scanned your FindMe 😀 Im:
    ,I've found your luggage! Please contact me so you can take It back! `;
    var data = "https://wa.me/+972" + phone + "?text=" + encodeURIComponent(message);

    // Generate the QR code using the QRCode Monkey API
    var apiUrl = "https://api.qrcode-monkey.com/qr/custom?size=200&data=" + encodeURIComponent(data);

    // Create the image element and set its source
    var img = document.createElement("img");
    img.src = apiUrl;

    // Add the image element to the QR code container
    var qrCodeContainer = document.getElementById("qrCodeModal");
    qrCodeContainer.innerHTML = "";
    qrCodeContainer.appendChild(img);

    // Show the modal dialog
    $('#qrModal').modal('show');
}


function printQrCode() {
    var clone = document.getElementById("qrCodeModal").cloneNode(true);
    var printSection = document.createElement("div");
    printSection.id = "printSection";
    printSection.appendChild(clone);
    document.body.appendChild(printSection);
    var bodyElements = document.body.children;
    for (var i = 0; i < bodyElements.length; i++) {
        if (bodyElements[i] != printSection) {
            bodyElements[i].style.display = "none";
        }
    }
    window.print();
    for (var i = 0; i < bodyElements.length; i++) {
        bodyElements[i].style.display = "block";
    }

    // Remove the printSection div from the DOM
    document.body.removeChild(printSection);
}
