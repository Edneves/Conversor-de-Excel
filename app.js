let Reader = require('./Reader')
let Processor = require('./Processor')
let Table = require('./Table')
let HTMLParser = require('./HTMLParser')
let Writer = require("./Writer")
let PDFWriter = require('./PDFWriter')


let leitor = new Reader()
let escritor = new Writer()

async function main(){
    let dados = await leitor.Read('./teste.csv')
    let dadosProcessados = Processor.Process(dados)

    let usuarios = new Table(dadosProcessados)

    let html = await HTMLParser.Parse(usuarios)
    escritor.Write(Date.now() + ".html", html)
    PDFWriter.WritePDF(Date.now() + ".PDF", html)
}

main()