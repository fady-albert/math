// import HTML data
const modeBtn = document.getElementById('mode');
const modeBtnTxt = document.querySelector('#mode span');
const body = document.body;

modeBtn.addEventListener('click', () => {
    body.classList.toggle('dark');

    const isDark = body.classList.contains('dark');

    localStorage.setItem('mode', isDark ? 'dark' : 'light')

    setTimeout(() => {
        modeBtnTxt.textContent = isDark ? 'dark_mode' : 'light_mode';
    }, 500);
})

const savedMode = localStorage.getItem('mode');

if (savedMode === 'dark') {
    body.classList.add('dark');
    modeBtnTxt.textContent = 'dark_mode';
} else {
    modeBtnTxt.textContent = 'light_mode';
}