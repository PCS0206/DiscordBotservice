document.getElementById('calculate').addEventListener('submit', function(event) {
    event.preventDefault(); // 폼 제출 방지

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const category = document.getElementById('chooseOption').value;

    const webhookUrl = 'https://discord.com/api/webhooks/1262784159185633281/oimiHfF__Z4UjNokfHFWhtKclbbgZrxMF3CnVFdCuW6v2wMIoyBzddbQTlwNiS7trhLf'; // 여기에 자신의 웹훅 URL을 입력하세요

    const data = {
        content: `New form submission:\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\nCategory: ${category}`
    };

    fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (response.ok) {
            alert('Form submitted successfully!');
        } else {
            alert('Failed to submit form.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Failed to submit form.');
    });
});
