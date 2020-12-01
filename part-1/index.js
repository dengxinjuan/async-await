async function getNumberFacts(num){
    let year = await axios.get(`http://numbersapi.com/${num}/year?json`);
    let data = await axios.get(`http://numbersapi.com/${num}/date?json`);
    let number = await axios.get(`http://numbersapi.com/${num}?json`);
    let math = await axios.get(`http://numbersapi.com/${num}/math?json`);

    let result =  ` 
    <ul>
    <li>Year: ${year.data.text};</li>
    <li>Data : ${data.data.text};</li>
    <li>Number : ${number.data.text};</li>
    <li>Math: ${math.data.text} </li>
    </ul>
    `;

    $('#result').append(result);

}


$("#enter").on("click",function(e){
    e.preventDefault();
    let num = $('#number').val();
    $('#result').empty();
    getNumberFacts(num);
})