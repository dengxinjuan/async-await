//window.alert("try!");



function randomElement(array){
    const random = Math.floor(Math.random()*array.length);
    return array[random];
};



class Pokemon{
    constructor(id){
        this.id = id;
    }
  
    async getName(){
        let url = `https://pokeapi.co/api/v2/pokemon/${this.id}`;
        let response = await axios.get(url);
        //console.log(response);
        //console.log(response.data.name);
        return response.data.name;
    }

    async getImageUrl(){
        let url = `https://pokeapi.co/api/v2/pokemon/${this.id}`;
        let response = await axios.get(url);
        //console.log(response.data.sprites.front_default);
        return response.data.sprites.front_default;
    }

    async getSpecies(){
        let url = `https://pokeapi.co/api/v2/pokemon/${this.id}`;
        let response = await axios.get(url);
        let anotherUrl = response.data.species.url;
        //console.log(anotherUrl);

        let species = await axios.get(anotherUrl);
        let speciesData = species.data.flavor_text_entries;
        let english = speciesData.filter(
            obj =>  obj.language.name === 'en'
        );

        return speciesData;


    
}


}
