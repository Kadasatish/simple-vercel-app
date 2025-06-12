async function fetchMessage() {
    try {
        const response = await fetch('/api/message');
        const data = await response.json();
        document.getElementById('message').innerText = data.message;
    } catch (error) {
        document.getElementById('message').innerText = 'Error fetching message!';
    }
}
