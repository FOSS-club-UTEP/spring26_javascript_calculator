const toggleBtn = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
	document.documentElement.setAttribute('data-theme', currentTheme);
	toggleBtn.textContent = currentTheme === 'dark' ? '☼ Switch to light mode' : '☾ Switch to dark mode';
}

toggleBtn.addEventListener('click', () => {
	let theme = document.documentElement.getAttribute('data-theme');

	if (theme === 'dark') {
		document.documentElement.setAttribute('data-theme', 'light');
		localStorage.setItem('theme', 'light');
		toggleBtn.textContent = '☾ Switch to dark mode';
	} else {
		document.documentElement.setAttribute('data-theme', 'dark');
		localStorage.setItem('theme', 'dark');
		toggleBtn.textContent = '☼ Switch to light mode';
	}
});	
