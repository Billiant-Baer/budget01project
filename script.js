// script.js

document.getElementById('budget-form').addEventListener('submit', async function(event) {
    event.preventDefault();

    const formData = new FormData(this);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    try {
        const response = await fetch('http://localhost:3001/api/budget', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('Failed to add budget entry');
        }

        alert('Budget entry added successfully!');
        window.location.href = 'dashboard.html'; // Redirect to dashboard after adding budget entry
    } catch (error) {
        console.error(error.message);
        alert('Failed to add budget entry');
    }
});
