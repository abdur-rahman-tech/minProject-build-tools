import './styles/main.scss';

document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('cta-btn');
    btn.addEventListener('click', () => {
        alert('Vite HMR & SCSS Compilation Pipeline Active!');
    });
});
