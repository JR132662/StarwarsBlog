
const getState = ({ getStore, getActions, setStore }) => {
	const APISW = "https://www.swapi.tech/api";
	return {
		store: {
			people:[],
			planets:[],
			vehicles:[],
			world: []
		},
		actions: {
			SWAPI: () =>{
				fetch("https://www.swapi.tech/api/planets/",
				{
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				})
				.then(res => res.json())
			.then(data => setStore({world: data}))
			.catch(err => console.error(err))
			},
			dataLoad: () =>{
				fetch(APISW + "/people").then(res => res.json()).then(
					data => setStore({people: data.results})
				)
				fetch(APISW + "/planets").then(res => res.json()).then(
					data => setStore({planets: data.results})
				)
				fetch(APISW + "/vehicles").then(res => res.json()).then(
					data => setStore({vehicles: data.results})
				)
			
			}
		}
	};
};

export default getState;
