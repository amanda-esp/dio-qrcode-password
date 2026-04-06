import chalk from "chalk"

const PromptSchemaMain = [
    {
        name: "select",
        description: chalk.blue.bold("Escolha a ferramenta (1 - QRCode ou 2 - Password Generator)"),
        pattern: /^[1-2]+$/,
        message: chalk.bgRedBright.bold(" Escolha apenas entre 1 e 2 "),
        required: true 
    }

]

export default PromptSchemaMain