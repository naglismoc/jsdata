

// console.log(pokemonData);
// console.log(pokemonData.results);

// for (let i = 0; i < pokemonData.results.length; i++) {
//    console.log(pokemonData.results[i]);
// }


// for (let i = 0; i < pokemonData.results.length; i++) {
//     console.log(pokemonData.results[i].name);
//  }


//============ version 1

//<div class="row">
// let HTML ='';

// for (let i = 0; i < pokemonData.results.length; i++) {
//    let pokemon = pokemonData.results[i];
//    HTMLFragment = ``;
//    if( (i) % 5 == 0){
//     HTMLFragment = `<div class="row">`;
//    }   
//    HTMLFragment += ` 
//    <div class="col-md-3">
//        <div class="card">
//            <h2>${pokemon.name}</h2>
//            <img src="${pokemon.img}" alt="">
//        </div>    
//    </div>`;
//    if( (i+1) % 5 == 0){
//     HTMLFragment = `</div>`;
//    }
//    HTML += HTMLFragment;
//  }
//  document.getElementById('container').innerHTML = HTML;


//======== version 2

//   HTML ='<div class="row">';

// for (let i = 0; i < pokemonData.length; i++) {
//    let pokemon = pokemonData[i];
//    HTMLFragment = ` 
//    <div class="col-md-3">
//        <div class="card">
//            <h2>${ (pokemon.name) ? pokemon.name : 'pokemonas'}</h2>
//            <img src="${pokemon.img}" alt="bus veliau">
//        </div>    
//    </div>`;
//    if( (i+1) % 4 == 0){
//     HTMLFragment += `</div>`;
//         if(i != pokemonData.length-1){
//             HTMLFragment += `<div class="row">`;
//         }
//    }
//    HTML += HTMLFragment;
//  }

//  document.getElementById('container').innerHTML = HTML;


 // ========== version 3 simplified



 HTML ='<div class="row">';
 for (let i = 0; i < pokemonData.length; i++) {
    let pokemon = pokemonData[i];
    HTML += ` 
        <div class="col-md-3">
            <div class="card">
                <h2>${ pokemon.name}</h2>
                <img src="${pokemon.img}" alt="bus veliau">
            </div>    
        </div>`;
  }

  HTML += `</div>`;
  document.getElementById('container').innerHTML = HTML;