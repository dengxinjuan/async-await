
let baseURL = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1';


async function gameStart(){
    
    let deck= await axios.get(`${baseURL}`)
    let deckId = deck.data.deck_id;
    $('#deck').text(`Deck ID : ${deckId}`);
    //console.log(deckId);

    $('button').on('click',async function(){

        let card = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`);
        //console.log(card.data.cards[0]);

        let angle = Math.random() * 90 - 45;
        let randomX = Math.random() * 40 - 20;
        let randomY = Math.random() * 40 - 20;
        $('#card').append( 
            $('<img>',{
                src:`${card.data.cards[0].image}`,
                css: {
                    transform: `translate(${randomX}px, ${randomY}px) rotate(${angle}deg)`
                }
            }));

        $('#left').text(card.data.remaining);


    })




};

gameStart();

