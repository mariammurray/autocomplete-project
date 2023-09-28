const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {											//returns the fruit array with only names containing the search term
	let results = [];

	results = fruit.filter(name => {
		return name.toLowerCase().includes(str);
	});

	return results;
}

function boldSubstring(suggestion, str){						//returns a string which will contain a bolded substring in html
	let start = suggestion.indexOf(str);	

		if (start == -1){										//each fruit name starts with an uppercase letter, so this is a way to get around issues that arise when the search term is lowercase.  Would not work with a different suggestions list.
			start = 0;
			}
														
		const a = suggestion.substring(0,start);
		const b = suggestion.substring(start, start + str.length);
		const c = suggestion.substring(start+str.length);
		return (a + b.bold() + c);

	}


function searchHandler(e) {
	suggestions.innerHTML="";
	const query = input.value.toLowerCase();
	if (query){
		showSuggestions(search(query), query);
	}
}

function showSuggestions(results, inputVal) {				//takes an array of suggestions and creates the dropdown list with them
	for (let n in results){
		const listItem = document.createElement("li");
		listItem.innerHTML=	boldSubstring(results[n], inputVal);
		suggestions.appendChild(listItem);

	}
}

function useSuggestion(e) {
	input.value = e.target.innerText;
	suggestions.innerHTML="";								// removes dropdown after suggestion is clicked
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);
