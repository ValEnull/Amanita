        function checkPassword() {
            const passwordInserita = document.getElementById('passwordField').value;
            
            // Inserisci il tuo link di Google Drive tra le virgolette qui sotto
            const linkDrive = "https://drive.google.com/drive/folders/1GaoyrX-YoYyG_27F95VOQeeq3gKK4JYB?usp=sharing";

            if (passwordInserita === "AMANITA") {
                window.location.href = linkDrive;
            } else {
                alert("Password errata");
            }
        }

        // Permette di premere il tasto Invio sulla tastiera per inviare la password
        document.getElementById('passwordField').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                checkPassword();
            }
        });