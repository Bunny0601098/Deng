document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('fireworks-container');

    function createFirework() {
        const firework = document.createElement('div');
        firework.classList.add('firework');
        firework.style.left = `${Math.random() * 100}%`;
        firework.style.top = `${Math.random() * 100}%`;
        container.appendChild(firework);

        setTimeout(() => {
            firework.remove();
        }, 1000);
    }

    setInterval(createFirework, 200);
});
