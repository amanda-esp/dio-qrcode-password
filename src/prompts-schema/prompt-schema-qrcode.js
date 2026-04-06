const promptSchemaQRcode = [
    {
        name: "link",
        description: "Digite o link para gerar QRCode",
    },
    {
        name: "type",
        description: "Escolha o formato do qrcode (1 - Imagem ou 2 - Terminal)",
        pattern: /^[1-2]+$/,
        message: "Escolha apenas etre 1 e 2",
        required: true
    }
]

export default promptSchemaQRcode;