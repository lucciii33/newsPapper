const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			news: [],
			techNews: [],
			btcNesw: [],
			nft: [],
			recipes: []
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
			},
			get3Data: () => {
				fetch("https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0", {
					"method": "GET",
					"headers": {
						"x-rapidapi-host": "coinranking1.p.rapidapi.com",
						"x-rapidapi-key": "cac0ff8c40msh8d6b13eceeb7d54p149d44jsn09a410dae8d1"
					}
				})
					.then(response => {
						return response.json();
					})
					.then(data => {
						console.log(data.data.coins)
						return setStore({ btcNesw: data.data.coins })
					})
					.catch(err => {
						console.error(err);
					});
			},
			getNftData: () => {
				fetch("https://blockchain-news1.p.rapidapi.com/news/NDTV", {
					"method": "GET",
					"headers": {
						"x-rapidapi-host": "blockchain-news1.p.rapidapi.com",
						"x-rapidapi-key": "cac0ff8c40msh8d6b13eceeb7d54p149d44jsn09a410dae8d1"
					}
				})
					.then(response => {
						return response.json();
					})
					.then(data => {
						console.log(data)
						return setStore({ nft: data })
					})
					.catch(err => {
						console.error(err);
					});
			},
			getRecipeDatas: () => {
				fetch("https://edamam-recipe-search.p.rapidapi.com/search?q=chicken", {
					"method": "GET",
					"headers": {
						"x-rapidapi-host": "edamam-recipe-search.p.rapidapi.com",
						"x-rapidapi-key": "cac0ff8c40msh8d6b13eceeb7d54p149d44jsn09a410dae8d1"
					}
				})
					.then(response => {
						return response.json();
					})
					.then(data => {
						console.log(data.hits)
						return setStore({ recipes: data.hits })
					})
					.catch(err => {
						console.error(err);
					});
			},
		}

	}
};

export default getState;
