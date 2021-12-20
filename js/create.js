document.getElementById('generate').onclick = () => {
	const query = document.getElementById('searchBar').value
	if (query !== '') {
		const url = `${window.location.href.substring(
			0,
			window.location.href.lastIndexOf('/')
		)}/?q=${encodeURI(query)}`
		document.getElementById('link').innerHTML = url
		document.getElementById('generatedLink').style.display = 'grid'
		document.getElementById('generatedLink').classList.remove('copied-link')
		document.getElementById('generatedLinkDesc').innerHTML =
			'Klik untuk menyalin URL'
	} else {
		document.getElementById('generatedLink').style.display = 'none'
	}
}
document.getElementById('generatedLink').onclick = () => {
	const url = document.getElementById('link').innerHTML
	navigator.clipboard.writeText(url)
	document.getElementById('generatedLinkDesc').innerHTML = 'Berhasil disalin!'
	document.getElementById('generatedLink').classList.add('copied-link')
}
