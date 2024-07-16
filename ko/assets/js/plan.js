document.getElementById('calculate').addEventListener('submit', function(event) {
    event.preventDefault(); // 폼 제출 방지

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const category = document.getElementById('chooseOption').value;

    const webhookUrl = 'https://discord.com/api/webhooks/1262784159185633281/oimiHfF__Z4UjNokfHFWhtKclbbgZrxMF3CnVFdCuW6v2wMIoyBzddbQTlwNiS7trhLf'; // 여기에 자신의 웹훅 URL을 입력하세요

    const data = {
        content: `새 상담 문의:\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\nCategory: ${category}`
    };

    fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => {
        if (response.ok) {
            alert('성공적으로 문의가 전송되었습니다! 영업일 기준 7일 이내 이메일로 연락 드리겠습니다!');
        } else {
            console.error('Failed to submit form:', response.status, response.statusText);
            alert('Failed to submit form. Check console for details.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Failed to submit form. Check console for details.');
    });
});
