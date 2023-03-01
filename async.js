const fs = require('fs')

const x = 0




fs.writeFile('teste.txt', `${x}`)








//--------------------------------------------------------------------------------------------


// Callback hell
/*fs.writeFile('teste.txt', `${x}`, () => {
    fs.writeFile('texte2.txt', 'text', ()=> {

    })
})*/


//--------------------------------------------------------------------------------------------



/*fs.writeFile('teste.txt', `${x}`, fx)

function fx() {
    console.log(x)
}*/
//Exemplo onde o callback está fora da função, ou seja uma chama a outra.



//--------------------------------------------------------------------------------------------


/*router.get("/", (req, res, next) => {
    res.end()
})
// No caso os parâmetros acima serão executados quando a função get terminar de ser executada.*/