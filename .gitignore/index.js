const discord = require("discord.js");
const randomWord = require("random-words")
 
const TOKEN = "NDkzMzc3MDEzNjEzMzMwNDMy.DwxPsA.lh-UrZW91AkIYmGBoIx9mydZiEU";
 
const bot = new discord.Client();
 
bot.on("ready",()=>{
    console.log("Ready!");
    var server = bot.guilds.find("id","523155536418570243")
    var chan = new discord.TextChannel(server,{"id":"528753583194374145"});
    bot.setInterval(()=>
    {
        chan.send(randomWord()).then(msg=>{
            console.log(msg.content);
        });
 
    },1000);
})
 
bot.login(process.env.TOKEN);
 
// You can run the program by typing node index in cmd
// The program starts after the time interval is once over
// That's all
// You can press CTRL + C in command prompt to stop the program
// Mine won't stop cause I used a host to keep it alive 24/7
// You can search how to host a node.js app on YouTube.
