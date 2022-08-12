
const getState = ({ getStore, getActions, setStore }) => {
	const APISW = "https://www.swapi.tech/api";
	return {
		store: {
			people:[],
			planets:[],
			vehicles:[]
		},
		actions: {
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
