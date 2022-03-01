const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			news: [],
			techNews: []
		},
		actions: {
			// Use getActions to call a function within a fuction

			getData: () => {
				fetch("https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/TrendingNewsAPI?pageNumber=1&pageSize=10&withThumbnails=false&location=us", {
					"method": "GET",
					"headers": {
						"x-rapidapi-host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
						"x-rapidapi-key": "cac0ff8c40msh8d6b13eceeb7d54p149d44jsn09a410dae8d1"
					}
				})
					.then(response => {
						return response.json();
					})
					.then(data => {
						console.log(data.value)
						return setStore({ news: data.value })
					})
					.catch(err => {
						console.error(err);
					});

			},
			getSeDate: () => {
				fetch("https://tech-news3.p.rapidapi.com/venturebeat", {
					"method": "GET",
					"headers": {
						"x-rapidapi-host": "tech-news3.p.rapidapi.com",
						"x-rapidapi-key": "cac0ff8c40msh8d6b13eceeb7d54p149d44jsn09a410dae8d1"
					}
				})
				.then(response => {
					return response.json();
				})
				.then(data => {
					console.log(data)
					return setStore({ techNews: data })
				})
				.catch(err => {
					console.error(err);
				});
			}

		},


	}
};

export default getState;
