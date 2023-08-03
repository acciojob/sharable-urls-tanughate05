// your code here
document.getElementById('urlForm').addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent form submission and page refresh

            const name = document.getElementById('name').value;
            const year = document.getElementById('year').value;

            // Update the h3 element with the new URL
            document.getElementById('url').textContent = `https://localhost:8080/?name=${encodeURIComponent(name)}&year=${year}`;
        });