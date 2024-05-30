async function sendMessage() {
    const message = document.getElementById('message').value;
    const notification = document.getElementById('notification');
  
    try {
      const response = await fetch('http://localhost:5000/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });
  
      if (response.ok) {
        const data = await response.json();
        notification.textContent = 'Notification sent successfully!';
        notification.style.color = 'green';
      } else {
        throw new Error('Failed to send notification');
      }
    } catch (error) {
      notification.textContent = error.message;
      notification.style.color = 'red';
    }
  }
  