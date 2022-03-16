const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			news: [],
			techNews: [],
			btcNesw: [],
			nft: [],
			recipes: [],
			rest: [],
			quote: []
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

				fetch("https://cnbc.p.rapidapi.com/news/v2/list-trending?tag=Articles&count=30", {
					"method": "GET",
					"headers": {
						"x-rapidapi-host": "cnbc.p.rapidapi.com",
						"x-rapidapi-key": "cac0ff8c40msh8d6b13eceeb7d54p149d44jsn09a410dae8d1"
					}
				})
					.then(response => {
						return response.json();
					})
					.then(data => {
						console.log(data.data.mostPopularEntries.assets)
						return setStore({ nft: data.data.mostPopularEntries.assets })
					})
					.catch(err => {
						console.error(err);
					});
			},
			getRecipeDatas: (recipe) => {
				fetch(`https://edamam-recipe-search.p.rapidapi.com/search?q=${recipe}`, {
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
			getResData: () => {
				fetch("https://worldwide-restaurants.p.rapidapi.com/search", {
					"method": "POST",
					"headers": {
						"content-type": "application/x-www-form-urlencoded",
						"x-rapidapi-host": "worldwide-restaurants.p.rapidapi.com",
						"x-rapidapi-key": "cac0ff8c40msh8d6b13eceeb7d54p149d44jsn09a410dae8d1"
					},
					"body": {
						"language": "en_US",
						"limit": "30",
						"location_id": "297704",
						"currency": "USD"
					}
				})
					.then(response => {
						return response.json();
					})
					.then(data => {
						console.log(data.results)
						return setStore({ rest: data.results })
					})
					.catch(err => {
						console.error(err);
					});
			},

			quoteData: () => {
				fetch("https://free-famous-quotes.p.rapidapi.com/", {
					"method": "GET",
					"headers": {
						"x-rapidapi-host": "free-famous-quotes.p.rapidapi.com",
						"x-rapidapi-key": "cac0ff8c40msh8d6b13eceeb7d54p149d44jsn09a410dae8d1"
					}
				})
					.then(response => {
						return response.json();
					})
					.then(data => {
						console.log(data)
						return setStore({ quote: data })
					})
					.catch(err => {
						console.error(err);
					});
			}
		}

	}
};

export default getState;
