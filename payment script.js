document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const paymentMethod = document.getElementById('paymentMethod').value;

    fetch('/payment', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ paymentMethod })
    })
    .then(response => response.text())
    .then(data => {
        console.log(data);
        // Redirect or show a success message as needed
        alert("Payment method submitted successfully!");
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
