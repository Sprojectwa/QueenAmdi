/*DROP.ML v1.1 - Public Release

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

S-MAX- DROP ML
*/

const chalk = require('chalk');
const {WAConnection} = require('@adiwajshing/baileys');
const {StringSession} = require('./DROP/');
const fs = require('fs');

async function queenamdi () {
    const conn = new WAConnection();
    const Session = new StringSession();  
    conn.logger.level = 'warn';
    conn.regenerateQRIntervalMs = 40000;
    
    conn.on('🔄 connecting', async () => {
        console.log(`${chalk.green.bold('Drop')}${chalk.blue.bold(' DROP ')}
${chalk.white.italic('DROP  ml  Sting session')}

${chalk.blue.italic('ℹ️ S-MAX Whatsapp වෙත සම්බන්ධ වෙමින්... කරුණාකර රැඳී සිටින්න.')}`);
    });
    

    conn.on('open', () => {
        var st = Session.createStringSession(conn.base64EncodedAuthInfo());
        console.log(
            chalk.green.bold('S-MAX session: '), Session.createStringSession(conn.base64EncodedAuthInfo())
        );
        
        if (!fs.existsSync('config.env')) {
            fs.writeFileSync('config.env', `MAX-SESSION="${st}"`);
        }

        console.log(
            chalk.blue.bold('If you are installing locale, you can start the bot with node bot.js.')
        );
        process.exit(0);
    });

    await conn.connect();
}

DROP.ml()
