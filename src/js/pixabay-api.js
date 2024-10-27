import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const search = document.querySelector('.search_bar');
const button = document.querySelector('.button');
const loader = document.querySelector('.loader');

button.addEventListener('click', ImageSearch);

const source = 'https://pixabay.com/api/?';
const options = new URLSearchParams({
	key: '46749030-b6cef6a6b69e043ecf4444c1b',
	image_type: 'photo',
	orientation: 'horizontal',
	// per_page: 50,
});

const error =
	'Sorry, there are no images matching your search query. Please try again!';

function ImageSearch() {
	let searchValue = search.value.trim();
	if (!searchValue) return;
	options.set('q', searchValue);
	loader.style.display = 'block';

	fetch(`${source}${options}`)
		.then(response => {
			if (!response.ok) {
				raiseError();
			}
			return response.json();
		})
		.then(posts => {
			if (posts.total) {
				const event = new CustomEvent('imagesFetched', { detail: posts.hits });
				document.dispatchEvent(event);
				loader.style.display = 'none';
			} else {
				raiseError();
				loader.style.display = 'none';
			}
		})
		.catch(error => console.log(error));
}

function raiseError() {
	iziToast.error({
		message: error,
		position: 'topRight',
		color: 'red',
		theme: 'dark',
	});
}
