var Reader = require('./Reader')
var Processor = require('./Processor')
var Table = require('./Table')
var HTMLParser = require('./HTMLParser')
var Writer = require("./Writer")
var PDFWriter = require('./PDFWriter')


var leitor = new Reader()
var escritor = new Writer()

async function main(){
    var dados = await leitor.Read('./teste.csv')
    var dadosProcessados = Processor.Process(dados)
    
    var usuarios = new Table(dadosProcessados)
    
    var html = await HTMLParser.Parse(usuarios)
    escritor.Write(Date.now() + ".html", html)
    PDFWriter.WritePDF(Date.now() + ".PDF", html)
}

main()