//your JS code here. If required.
function checkAge(name, age) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (age > 18) {
                        resolve(`Welcome, ${name}. You can vote.`);
                    } else {
                        reject(`Oh sorry ${name}. You aren't old enough.`);
                    }
                }, 4000); // 4-second delay
            });
        }

        // Handle form submission
        document.getElementById('userForm').addEventListener('submit', function(event) {
            event.preventDefault();

            const name = document.getElementById('name').value.trim();
            const age = parseInt(document.getElementById('age').value.trim());

            if (!name || isNaN(age)) {
                alert('Please enter valid details.');
                return;
            }

            checkAge(name, age)
                .then(message => alert(message)) // If age > 18
                .catch(error => alert(error));   // If age <= 18
        });