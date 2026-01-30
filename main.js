document.addEventListener('DOMContentLoaded', () => {
    const questionInput = document.getElementById('question');
    const getFortuneBtn = document.getElementById('get-fortune');
    const fortuneContainer = document.getElementById('fortune-container');
    const fortuneText = document.getElementById('fortune-text');

    const fortunes = [
        'You will have a great day!',
        'A surprise is waiting for you.',
        'You will achieve your goals.',
        'Someone is thinking of you.',
        'A new opportunity will arise.',
        'Good news is coming your way.',
        'You will find what you are looking for.',
        'Your hard work will pay off.',
        'Believe in yourself.',
        'The future is bright.'
    ];

    getFortuneBtn.addEventListener('click', () => {
        const question = questionInput.value.trim();

        if (!question) {
            alert('Please ask a question!');
            return;
        }

        const randomIndex = Math.floor(Math.random() * fortunes.length);
        const randomFortune = fortunes[randomIndex];

        fortuneText.textContent = randomFortune;
        fortuneContainer.classList.remove('hidden');
    });
});
