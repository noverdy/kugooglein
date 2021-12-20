window.onload = () => {
	const urlSearchParams = new URLSearchParams(window.location.search)
	const params = Object.fromEntries(urlSearchParams.entries())

	const query = params['q']
	if (query === undefined || query === '') {
		window.open('create.html', '_self')
	} else {
		const searchBar = document.getElementById('searchBar')
		const searchBarPos = searchBar.getBoundingClientRect()

		const searchButton = document.getElementById('searchButton')
		const searchButtonPos = searchButton.getBoundingClientRect()

		const cursor = document.getElementById('cursor')
		const tutorial = document.getElementById('tutorial')

		setTimeout(() => {
			cursor.style.top = `${
				(searchBarPos.top * 2 + searchBarPos.bottom) / 3
			}px`
			cursor.style.left = `${
				(searchBarPos.left + searchBarPos.right * 2) / 3
			}px`
		}, 500)

		setTimeout(() => {
			searchBar.focus()
			cursor.src = 'img/text.png'
			let i = 0
			let typing = setInterval(() => {
				searchBar.value = query.substring(0, ++i)
			}, 200)

			setTimeout(() => {
				clearInterval(typing)
			}, query.length * 200)

			tutorial.innerHTML = 'Step 2. Ketik teks yang ingin Anda cari'
		}, 3000)

		setTimeout(() => {
			searchBar.blur()
			cursor.src = 'img/default.png'
			cursor.style.top = `${
				(searchButtonPos.top * 2 + searchButtonPos.bottom) / 3
			}px`
			cursor.style.left = `${
				(searchButtonPos.left + searchButtonPos.right * 2) / 3
			}px`

			tutorial.innerHTML = "Step 3. Tekan tombol 'Penelusuran Google'"
		}, 4000 + query.length * 200)

		setTimeout(() => {
			searchButton.focus()
			cursor.src = 'img/pointer.png'

			setTimeout(() => {
				window.open(
					`https://google.com/search?q=${encodeURI(query)}`,
					'_self'
				)
			}, 1000)

			tutorial.innerHTML = 'Apakah sulit?'
		}, 6000 + query.length * 200)
	}
}
