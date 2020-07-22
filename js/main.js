const links = document.getElementsByClassName('navigation__link')
const navCheckbox = document.getElementById('navi-toggle')

for (const l of links) {
	l.addEventListener('click', () => {
		navCheckbox.checked = false
	})
}
