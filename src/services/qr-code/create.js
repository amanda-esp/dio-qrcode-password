import prompt from "prompt"
import promptSchemaQRcode from "../../prompts-schema/prompt-schema-qrcode.js"
import handler from "./handler.js";

async function createQRCode() {
    prompt.get(promptSchemaQRcode,handler)

    prompt.start()
}

export default createQRCode;