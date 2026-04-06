import prompt from "prompt"
import promptSchemaMain from "../prompts-schema/prompt-schema-main.js"
import createQRCode from "./qr-code/create.js";
import createPassword from "./password/create.js";

(async function main() {
    prompt.get(promptSchemaMain, async (err,result) => {
        if(err) throw new Error(err)
        if(result.select == 1) await createQRCode();

        if(result.select == 2) await createPassword();
    });
    prompt.start();
})()