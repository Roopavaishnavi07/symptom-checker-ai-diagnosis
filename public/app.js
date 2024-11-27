document.getElementById('checkSymptomsBtn').addEventListener('click', async () => {
    const symptoms = document.getElementById('symptoms').value;
    if (!symptoms) {
        alert('Please enter some symptoms!');
        return;
    }

    // Send symptoms to the backend for processing
    const response = await fetch('/check-symptoms', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ symptoms }),
    });

    const data = await response.json();
    document.getElementById('result').innerText = data.diagnosis;
});
