import qr from "qrcode-terminal"

async function handler(err, result) {
    if(err){
        console.log("Erro na aplicação")
        return;
    }

    const isSmall = result.type == 2 //Tipo do qr (imagem ou terminal)
    qr.generate(result.link,{small: isSmall},(qrcode) => {
        console.log("QRCode gerado com sucesso!")
        console.log(qrcode)
    })
}

export default handler;