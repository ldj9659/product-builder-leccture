document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('toggle-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const storedTheme = localStorage.getItem('theme');
    const useDark = storedTheme ? storedTheme === 'dark' : prefersDark;

    const applyTheme = (isDark) => {
        document.body.classList.toggle('dark', isDark);
        themeToggle.textContent = isDark ? '라이트 모드' : '다크 모드';
        themeToggle.setAttribute('aria-pressed', String(isDark));
    };

    applyTheme(useDark);

    themeToggle.addEventListener('click', () => {
        const isDarkNow = document.body.classList.toggle('dark');
        localStorage.setItem('theme', isDarkNow ? 'dark' : 'light');
        applyTheme(isDarkNow);
    });

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
