document.getElementById('question-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    const question = document.getElementById('question').value;
    const token = localStorage.getItem('token');

    const response = await fetch('http://localhost:5000/api/questions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ question })
    });

    if (response.ok) {
        const data = await response.json();
        document.getElementById('answer').textContent = `Answer: ${data.answer}`;
    } else {
        alert('Failed to get answer!');
    }
});
