const fs = require('fs')
const fileName = //Adicione aqui o endereço do arquivo para ser excluído de sua pasta

    fs.unlinkSync(fileName,(err) => {
        if(err) throw err
        console.log('Arquivo deletado com sucesso!')
    })
       
 