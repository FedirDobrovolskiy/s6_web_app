document.getElementById('drug-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('drug-name').value;
    const purpose = document.getElementById('drug-purpose').value;
    const dosage = document.getElementById('drug-dosage').value;

    if (name && purpose && dosage) {
        const table = document.querySelector('table tbody');
        const row = document.createElement('tr');
        row.innerHTML = `<td>${name}</td><td>${purpose}</td><td>${dosage}</td>`;
        table.appendChild(row);

        document.getElementById('drug-form').reset();
    } else {
        alert('Будь ласка, заповніть всі поля.');
    }
});
