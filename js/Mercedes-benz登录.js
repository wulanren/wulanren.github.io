const zhuceButton = document.getElementById('zhuce');
const dengluButton = document.getElementById('denglu');
const container = document.getElementById('container');

zhuceButton.addEventListener('click', () => container.classList.add('right-panel-active'));
dengluButton.addEventListener('click', () => container.classList.remove('right-panel-active'));