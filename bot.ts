import {Markup, Telegraf} from "telegraf"
export const bot = new Telegraf(String(process.env.TOKEN))

bot.catch((e, ctx)=>{
    console.log(e)
    ctx.reply("agar bot yaxshi ishlamay qolsa /start   tugmasin bosib yuboring")
})

bot.start(async ctx=>{
    await ctx.reply 
    ("Salom botga hush kelib siz men kanal va guruhlardagi barcha obunalar ro'yxatini tozalb turaman va kanalda hechqanday reklama tarqatmayman!!!!")

    const buttons = []
    buttons.push([Markup.button.switchToChat(" Go ", "ok")])
    ctx.reply("Meni kanal yoki Guruhga qo'shish uchun BOSING  !!!",Markup.inlineKeyboard(buttons))
    
})
bot.start(async ctx=>{
    const buttons = []
    buttons.push([Markup.button.url("💻Admin","https://t.me/TUIT_Talabasi"), Markup.button.url("Our Group", "https://t.me/Web_Walkers")])
    ctx.reply("Web Walkers", Markup.inlineKeyboard(buttons))
})

bot.on('new_chat_members',async ctx=>{

    ctx.message.new_chat_members.forEach(user=>{
        ctx.reply(`${user.first_name}     Guruhga xush kelibsiz, siz buyerda C++ dasturlash tilidan yordam olishingiz mumkin!!!`)
    })
    const buttons = [];
    buttons.push([Markup.button.url("Admin ","https://t.me/TUIT_Talabasi")])
    ctx.reply("Adminga Murojat",Markup.inlineKeyboard(buttons));
   ctx.deleteMessage(ctx.message.message_id);
})

bot.on('left_chat_member', async ctx=>{
    ctx.deleteMessage(ctx.message.message_id);
})


export const BotStarted = (instance, option, next)=>{
    bot.launch();
    next();
}