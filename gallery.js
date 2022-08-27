const themeSwichers = document.querySelectorAll('.changeTheme');

themeSwichers.forEach(switcher => {
	switcher.addEventListener('click', function() {
		// alert(this.dataset.theme);
		applyTheme(this.dataset.theme);
		localStorage.setItem('theme', this.dataset.theme);
	})
});

function applyTheme(themeName) {
	let themeUrl = `gallery-theme-${themeName}.css`;
	// alert(themeUrl);
	document.querySelector('[title="theme"]').setAttribute('href', themeUrl)
}

let activeTheme = localStorage.getItem('theme');

if(activeTheme === null) {
	applyTheme('light');
} else {
	applyTheme (activeTheme);
}