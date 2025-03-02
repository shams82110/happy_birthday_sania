document.getElementById('wishButton').addEventListener('click', function() {
    const birthdayMessage = document.getElementById('birthdayMessage');
    const music = document.getElementById('birthdayMusic');

    // Update the message with the personalized wish
    birthdayMessage.innerHTML = `
        Happy Birthday, Sania! 🎉<br>
        <span class="special-message">
            <div class="arabic">بسم الله الرحمن الرحيم</div>
            <div class="english">In the Name of Allah, the Most Gracious, the Most Merciful.</div><br>
            <div class="english">May Allah bless you with a year filled with peace, happiness, and countless blessings. On your special day, may your faith grow stronger, your heart be filled with gratitude, and your life be guided by the light of Islam.</div><br>
            <div class="english">As you celebrate another year of life, remember that every breath is a gift from Allah (SWT). May He grant you good health, success in this world, and eternal happiness in the Hereafter.</div><br>
            <div class="quran">رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ وَعَلَىٰ وَالِدَيَّ وَأَنْ أَعْمَلَ صَالِحًا تَرْضَاهُ وَأَدْخِلْنِي بِرَحْمَتِكَ فِي عِبَادِكَ الصَّالِحِينَ</div>
            <div class="translation">"My Lord, enable me to be grateful for Your favor which You have bestowed upon me and upon my parents and to do righteousness of which You approve. And admit me by Your mercy into [the ranks of] Your righteous servants." (Quran 27:19)</div><br>
            <div class="english">May Allah accept your good deeds, forgive your shortcomings, and make you a source of goodness for others. Happy birthday! 💖</div>
        </span>
    `;
    birthdayMessage.style.color = '#ffeb3b';
    birthdayMessage.style.fontSize = '2rem';

    // Play the birthday music
    music.play();

    // Add confetti animation
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        document.body.appendChild(confetti);
    }

    // Stop confetti after 5 seconds
    setTimeout(() => {
        const confettiElements = document.querySelectorAll('.confetti');
        confettiElements.forEach(confetti => confetti.remove());
    }, 5000);
});