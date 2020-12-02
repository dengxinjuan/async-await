//window.alert("try!");


// we define a function to random select element from array
function randomElement(array){
    const random = Math.floor(Math.random()*array.length);
    return array[random];
};


//we build a class pokemon, and we call api to get info
class Pokemon{
    constructor(id){
        this.id = id;
    }
  
    async getName(){
        let url = `https://pokeapi.co/api/v2/pokemon/${this.id}`;
        let response = await axios.get(url);
        //console.log(response);
        //console.log(response.data.name);
        return  response.data.name;
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
        let random = randomElement(english);

        return random? random.flavor_text : "No description!"
    
}
};



async function appendRandomPokemon(){
    id= Math.floor(Math.random()*800);
    let a = new Pokemon(id)
    let name = await a.getName();
    let imgSrc = await a.getImageUrl();
    let description = await a.getSpecies();

    $('#show').append(`
    <div class="card">
      <h1>${name}</h1>
      <img src=${imgSrc} />
      <p>${description}</p>
    </div>
  `
       )

}
