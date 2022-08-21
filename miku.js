process.on('uncaughtException', console.error)
require('./database/bot')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, WAMikuBotIncection, MessageType, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType, fetchLatestBaileysVersion } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const crypto = require('crypto')
const chalk = require('chalk')
const { exec, spawn, execSync } = require('child_process')
const axios = require('axios')
const { fetchUrl, isUrl, processTime } = require("./lib/myfunc")
const path = require('path')
const url = require('url')
const os = require('os')
const xa = require('xfarr-api')
const hx = require('hxz-api')
const maker = require('mumaker')
const fetch = require('node-fetch')
const { Readability } = require('@mozilla/readability');
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const Config = require('./database/drips');
const simpleGit = require('simple-git');
const git = simpleGit();
const Heroku = require('heroku-client');
const { PassThrough } = require('stream');
const { getLinkPreview, getPreviewFromContent } = require("link-preview-js");
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime,  sleep, clockString, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')
/*let { addLevelingId, addLevelingLevel, addLevelingXp, getLevelingId, getLevelingLevel, getLevelingXp } = require("./lib/lvlfunction")*/
const speedofbot = require("performance-now")
const { mediafireDl } = require('./lib/mediafire.js')
const { lirikLagu } = require('./lib/lirik.js')
const { fromBuffer } = require('file-type')
const mel = require('kitsune-api');
let { msgFilter } = require('./src/zimbotii.js')
const { Boom } = require("@hapi/boom")
const ffmpeg = require('fluent-ffmpeg')
const { checkPetualangUser, addInventori, addBesi, sellBesi, getBesi, addDm, sellDm, getDm, addEmas, sellEmas, getEmas, addFish, sellFish, getFish } = require('./database/tez.js')
const { addLevelingId, addLevelingLevel ,addLevelingXp, getLevelingId, getLevelingLevel, getLevelingXp } = require('./database/level')
const { isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require('./database/limit')
const  dripsno = JSON.parse(fs.readFileSync('./database/antilink.json'))
const _level = JSON.parse(fs.readFileSync('./database/leveluser.json'))
const _petualang = JSON.parse(fs.readFileSync('./database/inventori.json'))
const balance = JSON.parse(fs.readFileSync('./database/balance.json'))
const dripsanti = JSON.parse(fs.readFileSync('./lib/rude.json'))
let bad = JSON.parse(fs.readFileSync('./lib/rude.json'))
global.db = JSON.parse(fs.readFileSync('./src/database.json'))
if (global.db) global.db = {
    sticker: {},
    database: {},
    game: {},
    settings: {},
    others: {},
    users: {},
    chats: {},
    ...(global.db || {})
}
let tebaklagu = db.game.tebaklagu = []
let _family100 = db.game.family100 = []
let kuismath = db.game.math = []
let tebakgambar = db.game.tebakgambar = []
let tebakkata = db.game.tebakkata = []
let caklontong = db.game.lontong = []
let caklontong_desk = db.game.lontong_desk = []
let tebakkalimat = db.game.kalimat = []
let tebaklirik = db.game.lirik = []
let tebaktebakan = db.game.tebakan = []
let vote = db.others.vote = []

module.exports = MikuBotInc = async (MikuBotInc, m, chatUpdate, store) => {
try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = prefa ? /^[°┊π÷┊¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°┊π÷┊¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const botNumber = await MikuBotInc.decodeJid(MikuBotInc.user.id)
const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const itsMe = m.sender == botNumber ? true : false
const text = q = args.join(" ")
const from = m.chat
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const isPetualang = checkPetualangUser(sender)
//----GROUP METADATA----\\
const groupMetadata = m.isGroup ? await MikuBotInc.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = m.isGroup ? groupMetadata.owner : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isAntinsfw = m.isGroup ?  dripsno.includes(m.chat) : false
const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
const antiToxic = m.isGroup ? dripsanti.includes(from) : false
const MikuBotIncv3 = body.slice(0).trim().split(/ +/).shift().toLowerCase()
//-----END HERE------\\

//rest apis
global.APIs = { 
    bx: 'https://bx-hunter.herokuapp.com',
    dhnjing: 'https://dhnjing.xyz',
    hardianto: 'https://hardianto-chan.herokuapp.com',
    jonaz: 'https://jonaz-api-v2.herokuapp.com',
    neoxr: 'https://neoxr-api.herokuapp.com',
    nrtm: 'https://nurutomo.herokuapp.com',
    pencarikode: 'https://pencarikode.xyz',
    xteam: 'https://api.xteam.xyz',
    zahir: 'https://zahirr-web.herokuapp.com',
    zekais: 'http://zekais-api.herokuapp.com',
    zeks: 'https://api.zeks.xyz',
  }
  global.APIKeys = { 
    'https://bx-hunter.herokuapp.com': 'Ikyy69',
    'https://hardianto-chan.herokuapp.com': 'hardianto',
    'https://neoxr-api.herokuapp.com': 'yntkts',
    'https://pencarikode.xyz': 'pais',
    'https://api.xteam.xyz': 'apikeymu',
    'https://zahirr-web.herokuapp.com': 'zahirgans',
    'https://api.zeks.xyz': 'apivinz',
  }
  

const runtime = function (seconds) {
seconds = Number(seconds);
var d = Math.floor(seconds / (3600 * 24));
var h = Math.floor((seconds % (3600 * 24)) / 3600);
var m = Math.floor((seconds % 3600) / 60);
var s = Math.floor(seconds % 60);
var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " Day, ") : "";
var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " Hour, ") : "";
var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " Minute, ") : "";
var sDisplay = s > 0 ? s + (s == 1 ? " second" : " Second") : "";
return dDisplay + hDisplay + mDisplay + sDisplay;
}


const reply = (teks) => {
    MikuBotInc.sendMessage(m.chat, {text: teks, contextInfo: {"externalAdReply": {title: "Miku bot V4",mediaType: 3, renderLargerThumbnail: false, showAdAttribution: true, detectLinks: true,body: "drips OFC", thumbnail: fs.readFileSync('./src/logo.jpg'),sourceUrl: ("https://youtu.be/KNu-gr2h7bo")}}})
}
const replay = (teks) => {
    MikuBotInc.sendMessage(m.chat, {text: teks, contextInfo: {"externalAdReply": {title: "Miku bot V4",mediaType: 3, renderLargerThumbnail: false, showAdAttribution: true, body: "drips OFC", thumbnail: fs.readFileSync('./src/logo.jpg'),sourceUrl: ("https://youtu.be/KNu-gr2h7bo")}}})
}

const drip =  {
  key : {
    fromMe: false,
participant : '0@s.whatsapp.net'
},
     contextInfo: {
    forwardingScore: 9999,
    isForwarded: false, // ini biar ada tulisannya diteruskan berkali-kali, jika ingin di hilangkan ganti true menjadi false
 // Bagian ini sesuka kalian berkreasi :'v
showAdAttribution: true,
title: "Miku bot V4",
body: "GIVE IT A STAR",
mediaType: "VIDEO",
mediaUrl: `https://githb.com/zim-bot/zimbot-v4`,
description: 'Sacole ofc',
previewType: "PHOTO",
thumbnail: fs.readFileSync('./src/logo.jpg'),
sourceUrl: "",
detectLinks: false,
    }}



let blessedtuna = {
    key : {
        fromMe: false,
participant : '0@s.whatsapp.net'
},
  message: {
  documentMessage: {
showAdAttribution: true,
  title: "Miku bot", 
  jpegThumbnail: fs.readFileSync('./src/logo.jpg')
}
}
 }

 
 let mudratunha = {
    key: { 
         fromMe: false,
         participant: `0@s.whatsapp.net`, ...(m.chat ? 
    { remoteJid: "17608914335-1625305606@g.us" } : {}) 
               },
    message: { 
       "extendedTextMessage": {
                "text":'SUB drips OFC',
                "title": 'Miku bot-V4',
                'jpegThumbnail': fs.readFileSync('./src/logo.jpg')
             }
           } 
          }

let picaks = [flaming,fluming,flarun,flasmurf,mehk,awog,mohai,mhehe]
let picak = picaks[Math.floor(Math.random() * picaks.length)]
    try {
 let isNumber = x => typeof x === 'number' && !isNaN(x)
 let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
 let user = global.db.users[m.sender]
 if (typeof user !== 'object') global.db.users[m.sender] = {}
 if (user) {
   if (!isNumber(user.afkTime)) user.afkTime = -1
   if (!('afkReason' in user)) user.afkReason = ''
   if (!isNumber(user.limit)) user.limit = limitUser
 } else global.db.users[m.sender] = {
   afkTime: -1,
   afkReason: '',
   limit: limitUser,
 }
 let chats = global.db.chats[m.chat]
   if (typeof chats !== 'object') global.db.chats[m.chat] = {}
   if (chats) {
  if (!('mute' in chats)) chats.mute = false
  if (!('chatbot' in chats)) chats.chatbot = false
  if (!('antilink' in chats)) chats.antilink = false
  if (!('antilinkyt' in chats)) chats.antilinkyt = false
  if (!('autoblock' in chats)) chats.autoblock = false
  if (!('isWelcome' in chats)) chats.isWelcome = false
  if (!('antilinkall' in chats)) chats.antilinkall = false
  if (!('antiytchannel' in chats)) chats.antiytchannel = false
  if (!('antitiktok' in chats)) chats.antitiktok = false
  if (!('antitelegram' in chats)) chats.antitelegram = false
  if (!('antiinstagram' in chats)) chats.antiinstagram = false
  if (!('antifb' in chats)) chats.antifb = false
  if (!('antibule' in chats)) chats.antibule = false
  if (!('antiwame' in chats)) chats.antiwame = false
  if (!('wame' in chats)) chats.wame = false
  if (!('antitwitter' in chats)) chats.antitwitter = false
  if (!('antivn' in chats)) chats.antivn = false
  if (!('antiphoto' in chats)) chats.antiphoto = false
  if (!('antisticker' in chats)) chats.antisticker = false
  if (!('antivideo' in chats)) chats.antivideo = false
} else global.db.chats[m.chat] = {
   mute: false,
   chatbot: false,
   wame: false,
   antilink: false,
   antilinkyt: false,
   isWelcome: false,
   antilinkall: false,
   antiytchannel: false,
   antitiktok: false,
   antitelegram: false,
   antiinstagram: false,
   antifb: false,
   antibule: false,
   antiwame: false,
   antitwitter: false,
   antisticker: false,
   antiphoto: false,
   antivn: false,
   antivideo: false,
 }
 let setting = global.db.settings[botNumber]
 if (typeof setting !== 'object') global.db.settings[botNumber] = {}
    if (setting) {
if (!isNumber(setting.status)) setting.status = 0
if (!('autobio' in setting)) setting.autobio = true
if (!('templateImage' in setting)) setting.templateImage = false
if (!('templateLocation' in setting)) setting.templateLocation = false
if (!('templateGif' in setting)) setting.templateGif = false
if (!('templateMsg' in setting)) setting.templateMsg = false
if (!('templateList' in setting)) setting.templateList = false
if (!('templateDoc' in setting)) setting.templateDoc = true
if (!('chatbot' in setting)) setting.chatbot = false
if (!('templateZimbot' in setting)) setting.templateZimbot = false
if (!('grouponly' in setting)) setting.grouponly = false
if (!('autoblock' in setting)) setting.autoblock = false
    } else global.db.settings[botNumber] = {
status: 0,
autobio: true,
templateImage: false,
templateLocation: false,
templateGif: false,
templateMsg: false,
templateList: false,
templateDoc: true,
templateZimbot: false,
chatbot: false,
grouponly: false,
autoblock: false,
    }
} catch (err) {
 console.error(err)
}
MikuBotInc.ws.on('CB:action,,battery', json => {
const batteryLevelStr = json[2][0][1].value
const batterylevel = parseInt (batteryLevelStr)
  battre = batterylevel
})  

MikuBotInc.ws.on('CB:action,,charger', json => {
const chargerLevelStr = json[2][0][1].value
const charging = parseInt (chargerLevelStr)
  charger = charging
})  
//public/self
if (!MikuBotInc.public) {
if (!m.key.fromMe) return
}
const drips = require('drips-memes')
colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
let d = new Date(new Date + 3600000)
let locale = 'id'
let time = d.toLocaleString(locale, { hour: 'numeric', minute: 'numeric', second: 'numeric', timeZone: 'Africa/Harare'})
const { color } = require('./lib/color')
if (isCmd && !m.isGroup)
console.log(color('[ RECIEVED ]'), color(time, 'red'), color(`${command} [${args.length}]`), drips.hr(), 'FROM', color(pushname))

if (isCmd && m.isGroup)
console.log(color('[ RECIEVED ]'), color(time, 'red'), color(`${command} [${args.length}]`), drips.hr(), 'FROM', color(pushname), 'in', color(groupName))

//leveling
const levelRole = getLevelingLevel(sender, _level)
  var role = 'bronze'
  if (levelRole <= 3) {
role = 'Copper'
  } else if (levelRole <= 5) {
role = 'Iron'
  } else if (levelRole <= 7) {
role = 'Silver'
  } else if (levelRole <= 10) {
role = 'Gold'
  } else if (levelRole <= 12) {
role = 'Platinum'
  } else if (levelRole <= 15) {
role = 'Mithril'
  } else if (levelRole <= 18) {
role = 'Orichalcum'
  } else if (levelRole <= 25) {
role = 'Adamantite'
  } else if (levelRole <= 45) {
role = 'Good In Game'
  }
 
var ikan = ['🐳','🦈','🐬','🐋','🐟','🐠','🦐','🦑','🦀','🐡','🐙']
var hewan = ['🐔','🦃','🦆','🐐','🐏','🐖','🐑','🐎']
var burung = ['🦋','🕷','🐝','🐉','🦆','🦅','🕊','🐧','🐦','🦇']
var petnya = ['😾','🐺','🦊','🐶','🐰']
var makan = ['🌭','🌮','🌯','🍙','🍝','🍕','🍘','🍟','🍞','🍖','🍡']
var buahan = ['🍇','🍎','🍏','🍐','🍒','🍊','🍋','🍑','🍓']
if (global.dripsreadgroup) {
if (m.isGroup) { MikuBotInc.sendReadReceipt(m.chat, m.sender, [m.key.id]) }
}
if (global.dripsreadall) { if (m.message) { MikuBotInc.sendReadReceipt(m.chat, m.sender, [m.key.id]) }
}
if (global.dripsrecord) { if (m.chat) { MikuBotInc.sendPresenceUpdate('recording', m.chat) }
}

if (global.dripstyping) { if (m.chat) { MikuBotInc.sendPresenceUpdate('composing', m.chat) }
}
if (global.available) { if (m.chat) { MikuBotInc.sendPresenceUpdate('available', m.chat) }
}
if (global.unavailable) { if (m.chat) { MikuBotInc.sendPresenceUpdate('unavailable', m.chat) }
}
function randomNomor(min, max = null) {
  if (max !== null) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
  } else {
  return Math.floor(Math.random() * min) + 1
  }
  }

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
  }
let beedrips = [f1,f2,f3,f4,f5,f6]
        let dripsee = pickRandom(beedrips)
if (isCmd && msgFilter.isFiltered(from) && !isGroup) {
  console.log(color('[SPAM]', 'red'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
  return reply('〔ʙᴇ ᴘᴀᴛɪᴇɴᴛ 𝟻 sᴇᴄᴏɴᴅs/ᴄᴏᴍᴍᴀɴᴅ〕')}

const createSerial = (size) => {
  return crypto.randomBytes(size).toString('hex').slice(0, size)
  }

var elit = '*Oʀᴅɴᴀʀʏ ᴀᴅᴠᴇɴᴛᴜʀᴇ*'
if (isPremium)
{
elit = '*Aᴅᴠᴇɴᴛᴜʀᴇ ᴘʀᴏ*'
}
if (isCreator)
{
elit = '*Aᴅᴍɪɴ ɢᴀᴍᴇ*'
}
async function sendButLoc(from) {
  reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
  var button = [
{ urlButton: { displayText: `SCRIPT`, url : `${wame}` } },
{ quickReplyButton: { displayText: `INVENTORI`, id: `${prefix}inventori` } },
{ quickReplyButton: { displayText: `OWNER`, id: `${prefix}owner` } }
]
bufu = await getBuffer(picak+'RPG GAMES')
var DADYDR = `
 ┌───〔 *_◉ᴀʙᴏᴜᴛ◉_* 〕
 ┊ *Nᴀᴍᴇ:* ${pushname}
 ┊ *Rᴀɴᴋ:* ${role}
 ┊ *Sᴛᴀᴛᴜꜱ:* ${elit}
 ┊ *Mᴏɴᴇʏ:* $${(getBalance(sender, balance))}
 ┊ *Xᴘ:* ${getLevelingXp(sender)}/${reqXp}
 ┊ *Lᴇᴠᴇʟ:* ${getLevelingLevel(sender)}
 └───────────●

 ┌───〔 *_◉ɪɴꜰᴏ◉_* 〕
 ┊ *Mᴏɴᴇʏ:* $${(getBalance(sender, balance))}
 ┊ *Gᴏʟᴅ:* ${getEmas(sender)}
 ┊ *Iʀᴏɴ:* ${getBesi(sender)}
 ┊ *Fɪꜱʜ:* ${getFish(sender)}
 ┊ *Dɪᴀᴍᴏɴᴅ:* ${getDm(sender)}
 └───────────●

 ┌───〔 *_◉ᴍᴇɴᴜ ʀᴘɢ◉_* 〕
 ┊ ${prefix}joinrpg
 ┊ ${prefix}quest 
 ┊ ${prefix}mining
 ┊ ${prefix}mancing
 ┊ ${prefix}luckyday
 ┊ ${prefix}luckytime
 ┊ ${prefix}adventure
 ┊ ${prefix}inventori
 └───────────●

 ┌───〔 *_◉Fᴀʀᴍ ʀᴘɢ◉_* 〕
 ┊ ${prefix}killslime
 ┊ ${prefix}killgoblin
 ┊ ${prefix}killdevil
 ┊ ${prefix}killbehemoth
 ┊ ${prefix}killdemon
 ┊ ${prefix}killdemonking 
 └───────────●

 ┌───〔 *_◉Tʀᴀᴅᴇ ʀᴘɢ◉_* 〕
 ┊ ${prefix}sellikan
 ┊ ${prefix}sellbesi
 ┊ ${prefix}sellemas
 ┊ ${prefix}selldiamond
 └───────────●

 ┌───〔 *_ᴛʜᴀɴᴋs ᴛᴏ_* 〕
 ┊ʏᴏᴜʀ ᴄʀᴇᴅɪᴛꜱ
 └───〔 *_ᴢɪᴍ ʙᴏᴛ ɪɴᴄ_* 〕
 `
let message = await prepareWAMessageMedia({ image: bufu, jpegThumbnail:bufu }, { upload: MikuBotInc.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: DADYDR,
hydratedFooterText: `ʀᴘɢ ɢᴀᴍᴇ ʙʏ ᴢɪᴍʙᴏᴛ`,
hydratedButtons:  [{        
    "urlButton": {
      "displayText": "SUBSCRIBE",
      "url": "https://www.youtube.com/c/dripsOFC"
    }
}, {
quickReplyButton: {
    displayText: 'INVENTORY',
    id: `${prefix}inventori`
}},{
  quickReplyButton: {
      displayText: 'OWNER',
      id: `${prefix}owner`
  }
}
]
}
}
}), { userJid: m.chat })
MikuBotInc.relayMessage(m.chat, template.message, { messageId: template.key.id })
.catch ((err) => reply(err))
}
        async function sendButJoin(from, query) {
          reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
          _petualang.push(sender)
          fs.writeFileSync('./database/inventori.json', JSON.stringify(_petualang))        
          addInventori(sender)
          addLevelingId(sender) 
          var name = args[0]
          var serialUser = createSerial(14)
          reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
          bufut = await getBuffer(picak+'JOIN RPG')
          var button = [
      { urlButton: { displayText: `Script`, url : `${wame}` } },
      { quickReplyButton: { displayText: `Rpg Menu`, id: `${prefix}rpgmenu` } },
      { quickReplyButton: { displayText: `Owner`, id: `${prefix}owner` } }
      ]
          var hg = ` 
 ❲ *_Sᴜᴄᴄᴇꜱꜱ Jᴏɪɴ ʀᴘɢ_* ❳
 
╏ᴘʀᴏꜰɪʟᴇ ╏
┊ *Nᴀᴍᴇ :* ${name}
┊ *Lᴇᴠᴇʟ :* ${getLevelingLevel(sender)}
┊ *Sᴛᴀᴛᴜꜱ :* ${elit}
┊ *Xᴘ:*  ${getLevelingXp(sender)}/${reqXp}
❲ *_ʀᴘɢ ɢᴀᴍᴇ_* ❳`
  let message = await prepareWAMessageMedia({ image: bufut, jpegThumbnail:bufut }, { upload: MikuBotInc.waUploadToServer })
  const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
  templateMessage: {
  hydratedTemplate: {
  imageMessage: message.imageMessage,
  hydratedContentText: hg,
  hydratedFooterText: `a`,
  hydratedButtons:  [{        
      "urlButton": {
        "displayText": "SUBSCRIBE",
        "url": "https://www.youtube.com/c/dripsOFC"
      }
  }, {
  quickReplyButton: {
      displayText: 'INVENTORY',
      id: `${prefix}inventori`
  }},{
    quickReplyButton: {
        displayText: 'OWNER',
        id: `${prefix}owner`
    }
  }
  ]
  }
  }
  }), { userJid: m.chat })
  MikuBotInc.relayMessage(m.chat, template.message, { messageId: template.key.id })
  .catch ((err) => reply(err))
  }
          
          async function sendButslime(from) {
            ez = Math.ceil(Math.random() * 400)
            addLevelingXp(sender, ez)
            a = randomNomor(55)
            b = randomNomor(400)
            c = randomNomor(80)
            d = randomNomor(3)
            addLevelingXp(sender, ez)
            addBalance(sender, b, balance)
            addEmas(sender, a)
            addBesi(sender, c)
            addDm(sender, d)
            bufutI = await getBuffer(picak+'KILL SLIME')
          var button = [
                { urlButton: { displayText: `Script`, url : `${wame}` } },
                { quickReplyButton: { displayText: `Inventori`, id: `${prefix}inventori` } },
                { quickReplyButton: { displayText: `Owner`, id: `${prefix}owner` } }
                ]
          var hg = `*Mission to kill Slime*\n\n🎁 *Reward for killing Slime*\n ┊ *Money:* $${b}\n ┊ *Iron:* ${c}\n ┊ *Gold:* ${a}\n ┊ *Diamond:* ${d}\n\n*Thank you for carrying out this mission*`
          let message = await prepareWAMessageMedia({ image: bufutI, jpegThumbnail:bufutI }, { upload: MikuBotInc.waUploadToServer })
          const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
          templateMessage: {
          hydratedTemplate: {
          imageMessage: message.imageMessage,
          hydratedContentText: hg,
          hydratedFooterText: `ʀᴘɢ ɢᴀᴍᴇ ʙʏ ᴢɪᴍʙᴏᴛ`,
          hydratedButtons:  [{        
              "urlButton": {
                "displayText": "SUBSCRIBE",
                "url": "https://www.youtube.com/c/dripsOFC"
              }
          }, {
          quickReplyButton: {
              displayText: 'INVENTORY',
              id: `${prefix}inventori`
          }},{
            quickReplyButton: {
                displayText: 'OWNER',
                id: `${prefix}owner`
            }
          }
          ]
          }
          }
          }), { userJid: m.chat })
          MikuBotInc.relayMessage(m.chat, template.message, { messageId: template.key.id })
          .catch ((err) => reply(err))
          }
          
            async function sendButgoblin(from) {
            ez = Math.ceil(Math.random() * 500)
            addLevelingXp(sender, ez)
            a = randomNomor(65)
            b = randomNomor(500)
            c = randomNomor(90)
            d = randomNomor(5)
            addLevelingXp(sender, ez)
            addBalance(sender, b, balance)
            addEmas(sender, a)
            addBesi(sender, c)
            addDm(sender, d)
            bufo = await getBuffer(picak+'KILL GLOBIN')
            var button = [
                { urlButton: { displayText: `Script`, url : `${wame}` } },
                { quickReplyButton: { displayText: `Inventori`, id: `${prefix}inventori` } },
                { quickReplyButton: { displayText: `Owner`, id: `${prefix}owner` } }
                ]
            var hg = `*Mission To kill Goblin*\n\n🎁 *Reward for killing Goblin*\n ┊ *Money:* $${b}\n ┊ *Iron:* ${c}\n ┊ *Gold:* ${a}\n ┊ *Diamond:* ${d}\n\n*Thank you for carrying out this misssion*`
            let message = await prepareWAMessageMedia({ image: bufo, jpegThumbnail:bufo }, { upload: MikuBotInc.waUploadToServer })
            const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
            templateMessage: {
            hydratedTemplate: {
            imageMessage: message.imageMessage,
            hydratedContentText: hg,
            hydratedFooterText: `ʀᴘɢ ɢᴀᴍᴇ ʙʏ ᴢɪᴍʙᴏᴛ`,
            hydratedButtons:  [{        
                "urlButton": {
                  "displayText": "SUBSCRIBE",
                  "url": "https://www.youtube.com/c/dripsOFC"
                }
            }, {
            quickReplyButton: {
                displayText: 'INVENTORY',
                id: `${prefix}inventori`
            }},{
              quickReplyButton: {
                  displayText: 'OWNER',
                  id: `${prefix}owner`
              }
            }
            ]
            }
            }
            }), { userJid: m.chat })
            MikuBotInc.relayMessage(m.chat, template.message, { messageId: template.key.id })
            .catch ((err) => reply(err))
            }
          
            async function sendButdevil(from) {
            ez = Math.ceil(Math.random() * 600)
            addLevelingXp(sender, ez)
            a = randomNomor(70)
            b = randomNomor(600)
            c = randomNomor(95)
            d = randomNomor(6)
            addLevelingXp(sender, ez)
            addBalance(sender, b, balance)
            addEmas(sender, a)
            addBesi(sender, c)
            addDm(sender, d)
            bufas = await getBuffer(picak+'KILL DEVIL')
            var button = [
                { urlButton: { displayText: `Script`, url : `${wame}` } },
                { quickReplyButton: { displayText: `Inventori`, id: `${prefix}inventori` } },
                { quickReplyButton: { displayText: `Owner`, id: `${prefix}owner` } }
                ]
            var hg = `*Mission to kill 𝗗𝗲𝘃𝗶𝗹️*\n\n🎁 *Reward for killing Devil*\n ┊ *Money:* $${b}\n ┊ *Iron:* ${c}\n ┊ *Gold:* ${a}\n ┊ *Diamond:* ${d}\n\n*Thank you for carrying out this mission*`
            let message = await prepareWAMessageMedia({ image: bufas, jpegThumbnail:bufas }, { upload: MikuBotInc.waUploadToServer })
            const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
            templateMessage: {
            hydratedTemplate: {
            imageMessage: message.imageMessage,
            hydratedContentText: hg,
            hydratedFooterText: `ʀᴘɢ ɢᴀᴍᴇ ʙʏ ᴢɪᴍʙᴏᴛ`,
            hydratedButtons:  [{        
                "urlButton": {
                  "displayText": "SUBSCRIBE",
                  "url": "https://www.youtube.com/c/dripsOFC"
                }
            }, {
            quickReplyButton: {
                displayText: 'INVENTORY',
                id: `${prefix}inventori`
            }},{
              quickReplyButton: {
                  displayText: 'OWNER',
                  id: `${prefix}owner`
              }
            }
            ]
            }
            }
            }), { userJid: m.chat })
            MikuBotInc.relayMessage(m.chat, template.message, { messageId: template.key.id })
            .catch ((err) => reply(err))
            }
          
            async function sendButbehemoth(from) {
            ez = Math.ceil(Math.random() * 700)
            addLevelingXp(sender, ez)
            a = randomNomor(75)
            b = randomNomor(600)
            c = randomNomor(100)
            d = randomNomor(7)
            addLevelingXp(sender, ez)
            addBalance(sender, b, balance)
            addEmas(sender, a)
            addBesi(sender, c)
            addDm(sender, d)
            batai = await getBuffer(picak+'KILL BEHEMOTH')
            var button = [
                { urlButton: { displayText: `Script`, url : `${wame}` } },
                { quickReplyButton: { displayText: `Inventori`, id: `${prefix}inventori` } },
                { quickReplyButton: { displayText: `Owner`, id: `${prefix}owner` } }
                ]
            var hg = `*Mission to kill Behemoth*\n\n🎁 *Reward for kiling Behemoth*\n ┊ *Money:* $${b}\n ┊ *Iron:* ${c}\n ┊ *Gold:* ${a}\n ┊ *Diamond:* ${d}\n\n*Thank you for carrying out this mission*`
            let message = await prepareWAMessageMedia({ image: batai, jpegThumbnail: batai }, { upload: MikuBotInc.waUploadToServer })
            const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
              templateMessage: {
              hydratedTemplate: {
              imageMessage: message.imageMessage,
              hydratedContentText: hg,
              hydratedFooterText: `${global.botname}`,
              mentions: [sender],
              hydratedButtons: [{        
              "urlButton": {
              "displayText": "SUBSCRIBE",
              "url": "https://www.youtube.com/c/dripsOFC"
              }
            }, {
              quickReplyButton: {
                  displayText: 'INVENTORY',
                  id: `${prefix}inventori`
              }},{
                quickReplyButton: {
                    displayText: 'OWNER',
                    id: `${prefix}owner`
                }
              }
              ]
              }
              }
              }), { userJid: m.chat })
              MikuBotInc.relayMessage(m.chat, template.message, { messageId: template.key.id })
                  
            .catch ((err) => reply(err))
          }
          
            async function sendButdemon(from) {
            ez = Math.ceil(Math.random() * 850)
            addLevelingXp(sender, ez)
            a = randomNomor(90)
            b = randomNomor(900)
            c = randomNomor(120)
            d = randomNomor(10)
            addLevelingXp(sender, ez)
            addBalance(sender, b, balance)
            addEmas(sender, a)
            addBesi(sender, c)
            addDm(sender, d)
            bhuu = await getBuffer(picak+'KILL DEMON')
            var button = [
                { urlButton: { displayText: `Script`, url : `${wame}` } },
                { quickReplyButton: { displayText: `Inventori`, id: `${prefix}inventori` } },
                { quickReplyButton: { displayText: `Owner`, id: `${prefix}owner` } }
                ]
            var hg = `*Mission to kill Demon*\n🎁 *Demon Kill Reward*\n ┊ *Money:* $${b}\n ┊ *Iron:* ${c}\n ┊ *Gold*: ${a}\n ┊ *Diamond:* ${d}\n\n*Thank You for Carrying Out This Mission*`
            let message = await prepareWAMessageMedia({ image: bhuu, jpegThumbnail: bhuu }, { upload: MikuBotInc.waUploadToServer })
            const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
              templateMessage: {
              hydratedTemplate: {
              imageMessage: message.imageMessage,
              hydratedContentText: hg,
              hydratedFooterText: `${global.botname}`,
              mentions: [sender],
              hydratedButtons: [{        
              "urlButton": {
              "displayText": "SUBSCRIBE",
              "url": "https://www.youtube.com/c/dripsOFC"
              }
            }, {
              quickReplyButton: {
                  displayText: 'INVENTORY',
                  id: `${prefix}inventori`
              }},{
                quickReplyButton: {
                    displayText: 'OWNER',
                    id: `${prefix}owner`
                }
              }
              ]
              }
              }
              }), { userJid: m.chat })
              MikuBotInc.relayMessage(m.chat, template.message, { messageId: template.key.id })
                  
            .catch ((err) => reply(err))
          }
          
            async function sendButdemonking(from) {
            ez = Math.ceil(Math.random() * 1000)
            addLevelingXp(sender, ez)
            addLevelingXp(sender, ez)
            addBalance(sender, 1999, balance)
            addEmas(sender, 99)
            addBesi(sender, 99)
            addDm(sender, 99)
            bhuud = await getBuffer(picak+'KILL DEMONKING ')
            var button = [
                { urlButton: { displayText: `Script`, url : `${wame}` } },
                { quickReplyButton: { displayText: `Inventori`, id: `${prefix}inventori` } },
                { quickReplyButton: { displayText: `Owner`, id: `${prefix}owner` } }
                ]
            var hg = `*Mission to kill DemonKing*\n\n🎁 *DemonKing Kill Reward*\n ┊ *Money* : $${b}\n ┊ *Iron :* ${c}\n ┊ *Gold :* ${a}\n ┊ *Diamond :* ${d}\n\n*Thank You for Carrying Out This Mission*`
            let message = await prepareWAMessageMedia({ image: bhuud, jpegThumbnail:bhuud }, { upload: MikuBotInc.waUploadToServer })
            const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
            templateMessage: {
            hydratedTemplate: {
            imageMessage: message.imageMessage,
            hydratedContentText: hg,
            hydratedFooterText: `ʀᴘɢ ɢᴀᴍᴇ ʙʏ ᴢɪᴍʙᴏᴛ`,
            hydratedButtons:  [{        
                "urlButton": {
                  "displayText": "SUBSCRIBE",
                  "url": "https://www.youtube.com/c/dripsOFC"
                }
            }, {
            quickReplyButton: {
                displayText: 'INVENTORY',
                id: `${prefix}inventori`
            }},{
              quickReplyButton: {
                  displayText: 'OWNER',
                  id: `${prefix}owner`
              }
            }
            ]
            }
            }
            }), { userJid: m.chat })
            MikuBotInc.relayMessage(m.chat, template.message, { messageId: template.key.id })
            .catch ((err) => reply(err))
            }
          const emote = (satu, dua) => {
            try{	    
            const { EmojiAPI } = require("emoji-api");
            const emoji = new EmojiAPI();
            emoji.get(satu)
            .then(emoji => {
            const buttons = [{buttonId: "y", buttonText: {displayText:satu}, type: 1}]
            const buttonMessage = {image: {url: emoji.images[dua].url},caption: "Miku bot V4",footerText: 'Loading...',buttons: buttons,headerType: 4}
            MikuBotInc.sendMessage(from, buttonMessage, {quoted:m})
            })
            } catch (e) {
            reply("Emoji error, please enter another emojinNOTE : Just enter 1 emoji")
            }
            }
//----ANTILINK AND CHATBOT-----\\
//chatbot is encrypted sorry
var _0x33fa3e=_0x465d;function _0x2a31(){var _0x124451=['reply','1109740LfSEyY','includes','9059424ATMYLh','702DCvREW','3129360vqgfpx','sender','@s.whatsapp.net','http://api.brainshop.ai/get?bid=167831&key=BFghpAKanUPXcLWQ&uid=','error','9eHTAtD','chatbot','catch','&msg=','1931044WXDcdy','data','split','18074ZBFvdT','user','GET','27825912kQipLx','62352dAoPvn','settings','http://api.brainshop.ai/get?bid=167831&key=BFghpAKanUPXcLWQ&uid=MikuBotInc.user.id&msg='];_0x2a31=function(){return _0x124451;};return _0x2a31();}function _0x465d(_0x46eeb2,_0x5f0900){var _0x2a3178=_0x2a31();return _0x465d=function(_0x465d22,_0x141be9){_0x465d22=_0x465d22-0x110;var _0x9b342b=_0x2a3178[_0x465d22];return _0x9b342b;},_0x465d(_0x46eeb2,_0x5f0900);}(function(_0x3277b6,_0x4246a7){var _0x1e4f2f=_0x465d,_0x355551=_0x3277b6();while(!![]){try{var _0x22af3f=-parseInt(_0x1e4f2f(0x11c))/0x1+parseInt(_0x1e4f2f(0x115))/0x2+parseInt(_0x1e4f2f(0x111))/0x3*(parseInt(_0x1e4f2f(0x120))/0x4)+parseInt(_0x1e4f2f(0x124))/0x5+-parseInt(_0x1e4f2f(0x123))/0x6*(-parseInt(_0x1e4f2f(0x118))/0x7)+parseInt(_0x1e4f2f(0x122))/0x8+-parseInt(_0x1e4f2f(0x11b))/0x9;if(_0x22af3f===_0x4246a7)break;else _0x355551['push'](_0x355551['shift']());}catch(_0x32822d){_0x355551['push'](_0x355551['shift']());}}}(_0x2a31,0xabe65));if(db[_0x33fa3e(0x11d)][botNumber][_0x33fa3e(0x112)]){if(m[_0x33fa3e(0x125)][_0x33fa3e(0x121)](_0x33fa3e(0x126))){var mhata=''+command;sehcalaz=MikuBotInc[_0x33fa3e(0x119)]['id'][_0x33fa3e(0x117)]('@')[0x0];var duzvi=encodeURI(mhata);const bhabhi={'method':_0x33fa3e(0x11a),'url':_0x33fa3e(0x11e)+command};await axios['get'](_0x33fa3e(0x127)+sehcalaz+_0x33fa3e(0x114)+duzvi)['then'](function(_0x55e8cd){var _0x4963f0=_0x33fa3e,_0x207a24='';_0x207a24=_0x55e8cd[_0x4963f0(0x116)]['cnt'],m[_0x4963f0(0x11f)](_0x207a24);})[_0x33fa3e(0x113)](function(_0x4cac14){var _0x12b308=_0x33fa3e;console[_0x12b308(0x110)](_0x4cac14);});}}


if (db.chats[m.chat].antilink) {
if (budy.includes('https://chat.whatsapp.com/')) {
if (!m.key.fromMe) {
reply('[ 𝗭𝗜𝗠 𝗕𝗢𝗧 𝗔𝗡𝗧𝗜𝗟𝗜𝗡𝗞 ]\n𝗟𝗶𝗻𝗸 𝗻𝗼𝘁 𝗮𝗹𝗹𝗼𝘄𝗲𝗱 𝗵𝗲𝗿𝗲, 𝗢𝗞𝘆?..,\n𝗚𝗼𝗼𝗱 𝗯𝘆𝗲 𝗜𝗺 𝗸𝗶𝗰𝗸𝗶𝗻𝗴 𝘂𝗿 𝗮𝘀𝘀 𝗻𝗼𝘄👋🏻')
let sianj = m.sender
await MikuBotInc.groupParticipantsUpdate(m.chat, [sianj], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
}
}
if (db.chats[m.chat].wame) {
if (budy.match(`wa.me/`)) {
reply(`「 𝗭𝗜𝗠 𝗕𝗢𝗧 𝗔𝗡𝗧𝗜𝗟𝗜𝗡𝗞 」\n\n𝗬𝗼𝘂 𝗵𝗮𝘃𝗲 𝘀𝗲𝗻𝗱 𝘄𝗮.𝗺𝗲 𝗹𝗶𝗻𝗸, 𝗻𝗼 𝘁𝗶𝗺𝗲 𝘁𝗼 𝘄𝗮𝘀𝘁𝗲 𝘂𝗮 𝗼𝘂𝘁!`)
if (!isBotAdmins) return reply(`𝘡𝘪𝘮 𝘉𝘰𝘵 𝘮𝘶𝘴𝘵 𝘣𝘦 𝘢𝘥𝘮𝘪𝘯 𝘧𝘪𝘳𝘴𝘵😚`)
let gclink = (`https://wa.me/`)
let isLinkThisGc = new RegExp(gclink, 'i')
let isgclink = isLinkThisGc.test(m.text)
if (isgclink) return reply(`𝘖𝘏 𝘠𝘦𝘢𝘩 𝘪𝘵 𝘥𝘪𝘥𝘯𝘵 𝘩𝘢𝘱𝘱𝘦𝘯, 𝘣𝘦𝘤𝘢𝘶𝘴𝘦 𝘺𝘰𝘶 𝘴𝘦𝘯𝘵 𝘵𝘩𝘪𝘴 𝘸𝘢.𝘮𝘦 𝘭𝘪𝘯𝘬𝘺 𝘰𝘬𝘢𝘺😌`)
if (isAdmins) return reply(`𝘏𝘦𝘭𝘭 𝘯𝘰😱 𝘺𝘰𝘶 𝘢𝘥𝘮𝘪𝘯`)
if (isCreator) return reply(`𝘖𝘰𝘰𝘰𝘩 𝘴𝘩𝘪𝘵😩 𝘴𝘰𝘳𝘳𝘺 𝘺𝘶 𝘢𝘳𝘦 𝘵𝘩𝘦 𝘰𝘸𝘯𝘦𝘳 𝘭𝘶𝘤𝘬𝘺 𝘺𝘰𝘶`)
MikuBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
}
if (db.chats[m.chat].antiinstagram) {
    if (budy.includes("https://www.instagram.com/")){
 if (!isBotAdmins) return
 zimbotv3 = `*▊▊▊DETECTED▊▊▊*\n\n*you are admn okay*`
 if (isAdmins) return reply(zimbotv3)
 if (m.key.fromMe) return reply(zimbotv3)
 if (isCreator) return reply(zimbotv3)
 kice = m.sender
 await MikuBotInc.groupParticipantsUpdate(m.chat, [kice], 'remove')
 MikuBotInc.sendMessage(from, {text:`*▊▊▊DETECTED▊▊▊*\n\n@${kice.split("@")[0]} *I said no ig links here okay, now get out* `, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
 }
}

if (db.chats[m.chat].antisticker) {
let isSticker = m.mtype
if(isSticker === "stickerMessage"){		  
if (!m.key.fromMe) {
if (isAdmins) return reply(`*you are admin lucky you dont send stickers here*`)
if (isCreator) return reply(`*𝘖𝘰𝘰𝘰𝘩 𝘴𝘩𝘪𝘵😩 𝘴𝘰𝘳𝘳𝘺 𝘺𝘶 𝘢𝘳𝘦 𝘵𝘩𝘦 𝘰𝘸𝘯𝘦𝘳 𝘭𝘶𝘤𝘬𝘺 𝘺𝘰𝘶*`)
reply('*ANTI STICKER*\n\n*NO STICKERS  ALLOWED HERE OKAY GOODBYE*')
kice = m.sender
await MikuBotInc.groupParticipantsUpdate(m.chat, [kice], 'remove')
MikuBotInc.sendMessage(from, {text:`*▊▊▊DETECTED▊▊▊*\n\n@${kice.split("@")[0]} *I said no stickers here okay, now get out* `, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
}
}
}

if (db.chats[m.chat].antivn) {
let isAudio = m.mtype
if(isAudio === "audioMessage"){		  
if (!m.key.fromMe) {
if (isAdmins) return reply(`*you are admin lucky you dont send voice note here*`)
if (isCreator) return reply(`*𝘖𝘰𝘰𝘰𝘩 𝘴𝘩𝘪𝘵😩 𝘴𝘰𝘳𝘳𝘺 𝘺𝘶 𝘢𝘳𝘦 𝘵𝘩𝘦 𝘰𝘸𝘯𝘦𝘳 𝘭𝘶𝘤𝘬𝘺 𝘺𝘰𝘶*`)
reply('*ANTI VOICE NOTE*\n\n*NO VOICE ALLOWED HERE  OKAY GOODBYE*')
kice = m.sender
await MikuBotInc.groupParticipantsUpdate(m.chat, [kice], 'remove')
MikuBotInc.sendMessage(from, {text:`*▊▊▊DETECTED▊▊▊*\n\n@${kice.split("@")[0]} *I said no voice note here okay, now get out* `, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
}
}
}

if (db.chats[m.chat].antivideo) {
let isVideo = m.mtype
if(isVideo === "videoMessage"){		  
if (!m.key.fromMe) {
if (isAdmins) return reply(`*you are admin lucky you dont send videos here*`)
if (isCreator) return reply(`*𝘖𝘰𝘰𝘰𝘩 𝘴𝘩𝘪𝘵😩 𝘴𝘰𝘳𝘳𝘺 𝘺𝘶 𝘢𝘳𝘦 𝘵𝘩𝘦 𝘰𝘸𝘯𝘦𝘳 𝘭𝘶𝘤𝘬𝘺 𝘺𝘰𝘶*`)
reply('*ANTI VIDEO*\n\n*NO VIDEOS ALLOWED HERE  OKAY GOODBYE*')
kice = m.sender
await MikuBotInc.groupParticipantsUpdate(m.chat, [kice], 'remove')
MikuBotInc.sendMessage(from, {text:`*▊▊▊DETECTED▊▊▊*\n\n@${kice.split("@")[0]} *I said no videos here okay, now get out* `, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
}
}
}

if (db.chats[m.chat].antiphoto) {
let isPhoto = m.mtype
if(isPhoto === "imageMessage"){		  
if (!m.key.fromMe) {
if (isAdmins) return reply(`*you are admin lucky you dont send photos here*`)
if (isCreator) return reply(`*𝘖𝘰𝘰𝘰𝘩 𝘴𝘩𝘪𝘵😩 𝘴𝘰𝘳𝘳𝘺 𝘺𝘶 𝘢𝘳𝘦 𝘵𝘩𝘦 𝘰𝘸𝘯𝘦𝘳 𝘭𝘶𝘤𝘬𝘺 𝘺𝘰𝘶*`)
reply('*ANTI PHOTOS*\n\n*NO PHOTOS ALLOWED HERE  OKAY GOODBYE*')
kice = m.sender
await MikuBotInc.groupParticipantsUpdate(m.chat, [kice], 'remove')
MikuBotInc.sendMessage(from, {text:`*▊▊▊DETECTED▊▊▊*\n\n@${kice.split("@")[0]} *I said no photos here okay, now get out* `, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
}
}
}

if (db.chats[m.chat].antifb) {
if(budy.includes("https://facebook.com/")){
if (!isBotAdmins) return
zimbotv3 = `*▊▊▊DETECTED▊▊▊*\n\n*you are admin okay*`
if (isAdmins) return reply(zimbotv3)
if (m.key.fromMe) return reply(zimbotv3)
if (isCreator) return reply(zimbotv3)
kice = m.sender
await MikuBotInc.groupParticipantsUpdate(m.chat, [kice], 'remove')
 MikuBotInc.sendMessage(from, {text:`*▊▊▊DETECTED▊▊▊*\n\n@${kice.split("@")[0]} *I said no fb links here okay, now get out*`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} 
 }

 if (db.chats[m.chat].antitelegram) {
 if (budy.includes("https://t.me/")){
 if (!isBotAdmins) return
 zimbotv3 = `*▊▊▊DETECTED▊▊▊*\n*you are admin okay*`
 if (isAdmins) return reply(zimbotv3)
 if (m.key.fromMe) return reply(zimbotv3)
 if (isCreator) return reply(zimbotv3)
 kice = m.sender
 await MikuBotInc.groupParticipantsUpdate(m.chat, [kice], 'remove')
 MikuBotInc.sendMessage(from, {text:`*▊▊▊DETECTED▊▊▊*\n\n@${kice.split("@")[0]} *I said no telegram links here okay, now get out*`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} 
 }

if (db.chats[m.chat].antitiktok) {
if (budy.includes("https://www.tiktok.com/")){
if (!isBotAdmins) return
zimbotv3 = `*▊▊▊DETECTED▊▊▊*\n\n*you are bot admin okay*`
if (isAdmins) return m.reply(zimbotv3)
if (m.key.fromMe) return m.reply(zimbotv3)
if (isCreator) return m.reply(zimbotv3)
kice = m.sender
await MikuBotInc.groupParticipantsUpdate(m.chat, [kice], 'remove')
MikuBotInc.sendMessage(from, {text:`*▊▊▊DETECTED▊▊▊*\n\n@${kice.split("@")[0]} *I said no tiktok links here okay, now get out*`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
}
}

if (db.chats[m.chat].antitwitter) {
if (budy.includes("https://twitter.com/")){
if (!isBotAdmins) return
zimbotv3 = `*▊▊▊DETECTED▊▊▊*\n *you are bot admin okay*`
if (isAdmins) return reply(zimbotv3)
if (m.key.fromMe) return reply(zimbotv3)
if (isCreator) return reply(zimbotv3)
kice = m.sender
await MikuBotInc.groupParticipantsUpdate(m.chat, [kice], 'remove')
MikuBotInc.sendMessage(from, {text:`*▊▊▊DETECTED▊▊▊*\n\n@${kice.split("@")[0]} *I said no twittwer link here okay, now get out*`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
}
}

if (db.chats[m.chat].antilinkall) {
if (budy.includes("http")){ 
if (!isBotAdmins) return
zimbotv3 = `*▊▊▊DETECTED▊▊▊*\n *you are bot admin okay*`
if (isAdmins) return reply(zimbotv3)
if (m.key.fromMe) return reply(zimbotv3)
if (isCreator) return reply(zimbotv3)
kice = m.sender
await MikuBotInc.groupParticipantsUpdate(m.chat, [kice], 'remove')
MikuBotInc.sendMessage(m.chat, {text:`*▊▊▊DETECTED▊▊▊*\n@${kice.split("@")[0]} *I said dont send any links okay*`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
}
}


if (m.mtype == 'viewOnceMessage') {
if (!db.chats[m.chat].antionce) return
teks = `*▊▊▊DETECTED ONCE▊▊▊*

`
MikuBotInc.sendTextWithMentions(m.chat, teks, m)
await sleep(500)
m.copyNForward(m.chat, true, { readViewOnce: true }).catch(_ => reply(`*I opened it by force*`))
}



if (db.chats[m.chat].antilinkyt) {
if (budy.includes("https://youtube.com/")){ 
if (!isBotAdmins) return
zimbotv3 = `*▊▊▊DETECTED▊▊▊*\n*you are admin okay*`
if (isAdmins) return reply(zimbotv3)
if (m.key.fromMe) return reply(zimbotv3)
if (isCreator) return reply(zimbotv3)
kice = m.sender
await MikuBotInc.groupParticipantsUpdate(m.chat, [kice], 'remove')
MikuBotInc.sendMessage(from, {text:`*▊▊▊DETECTED▊▊▊*\n\n@${kice.split("@")[0]} *I said no yt links here okay, now get out*`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} 
}

if (db.chats[m.chat].antilink) {
if (budy.match(`chat.whatsapp.com`)) {
reply(`*▊▊▊ ANTILINK ▊▊▊*\n\n*You have been detected sending a group link, sorry you will be kicked!*`)
if (!isBotAdmins) return reply(`*Bbot must be admin okay*`)
let gclink = (`https://chat.whatsapp.com/`+await MikuBotInc.groupInviteCode(m.chat))
let isLinkThisGc = new RegExp(gclink, 'i')
let isgclink = isLinkThisGc.test(m.text)
if (isgclink) return reply(`*sorry I didn't kick you, because you sent the link of this group lucky you*`)
if (isAdmins) return reply(`*Ehh sorry you admin*`)
if (isCreator) return reply(`*whoa you are  bot creator i wont kick you okay*`)
MikuBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
}
if (budy.length > 3500) {
if (!m.isGroup) return
if (!isAntiVirtex) return
if (groupAdmins) return
reply('Mark as read\n'.repeat(300))
reply(`*▊▊▊DETECTED▊▊▊*\n\n*You sent a virtex, sorry you will be kicked from the group*`)
console.log(('[KICK]', 'red'), color('Received a text virus!', 'yellow'))
MikuBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}  


if (db.chats[m.chat].antiwame) {
if (budy.includes(`http://wa.me`)) {
if (!isBotAdmins) return
zimbotv3 = `*▊▊▊DETECTED▊▊▊*\n\n*you are admin okay*`
if (isAdmins) return reply(zimbotv3)
if (m.key.fromMe) return reply(zimbotv3)
if (isCreator) return reply(zimbotv3)
kice = m.sender
await MikuBotInc.groupParticipantsUpdate(m.chat, [kice], 'remove')
MikuBotInc.sendMessage(from, {text:`*▊▊▊DETECTED▊▊▊*\n\n@${kice.split("@")[0]} *I said no links okay, now get out*`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
}
}

if (db.settings[botNumber].autoblock) {
if (m.chat.endsWith("@s.whatsapp.net")) {
if (isCreator) reply('*you are bot creator okay*')
block = m.sender
await MikuBotInc.sendMessage(from, {text:`*▊▊▊AUTO BLOCK▊▊▊*\n\n@${block.split("@")[0]} *today I'm blocking dumps bye you are _blocked_* *if you want to use bot join this group* ${global.group1}\n\n${global.group2}`, m})
MikuBotInc.updateBlockStatus(m.sender,'block')
}
}

if (db.chats[m.chat].antilinkyt) {
if (budy.includes(`https://nando.com`)) {
if (!isBotAdmins) return reply('*BOT MUST BE ADMIN OKAY*')
reply(`*▊▊▊ ANTIYT ▊▊▊*\n\n*SOrry ${botname} will kick you out because what you sent is a youtube link in this group*`)
if (isAdmins) return reply(`*Ehh sorry you admin*`)
 if (isCreator) return reply(`*whoa you are  bot creator i wont kick you okay*`)
kice = m.sender
await MikuBotInc.groupParticipantsUpdate(m.chat, [kice], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
MikuBotInc.sendMessage(m.chat, {text:`*▊▊▊ ANTILINK ▊▊▊*\n\n@${kice.split("@")[0]} *Has been kicked for sending the youtube link in this group*`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
}
}


if (db.chats[m.chat].antibule)  {
if (m.sender.includes(`+212`)) {
if (!isBotAdmins) return reply('*BOT MUST BE ADMIN OKAY*')
reply(`*▊▊▊ ANTIBULE ▊▊▊*\n\n*Sorry ${botname} will kick you out because you are a stranger in this group*`)
if (isAdmins) return reply(`*Ehh sorry you admin*`)
if (isCreator) return reply(`*whoa you are  bot creator i wont kick you okay*`)
kice = m.sender
await MikuBotInc.groupParticipantsUpdate(m.chat, [kice], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
MikuBotInc.sendMessage(m.chat, {text:`*▊▊▊ ANTILINK ▊▊▊*\n\n@${kice.split("@")[0]} *You shouldn't be in this group*`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
}
}
if (db.settings[botNumber].grouponly) {
  if (!m.isGroup) {
    let a = 'a'
    if (!isCreator) throw `*INBOX NOT ALLOWED*`
    if (budy === a) 
    throw  '*inbox not allowed*'
   
    }
  }
var Apik = ''
var socket = fetchJson('wss://wss.allsportsapi.com/live_events?widgetKey='+ 'db7fca1f4dfd0fa8b50c30c3b4569a61e0c5c93a79c18864bf9c9b6ab635c427' +'&timezone=+02:00');
socket.onmessage = function(e) {
  if (e.data) {
    var matcheData = JSON.parse(e.data);
    console.log(`*JUST IN:*` + matcheData)
  }
}
//mute chat
 if (db.chats[m.chat].mute && !isAdmins && !isCreator) {
 return
 }
//write database every 1minute
setInterval(() => {
 fs.writeFileSync('./src/database.json', JSON.stringify(global.db, null, 2))
}, 60 * 1000)
//But5Loc
var nextMinutes = Math.random() * 300 + 30;
setTimeout(function(){
  MikuBotInc.sendMessage(MikuBotInc.user.id, {text: `*Miku bot INC ANNOUNCEMENT:* *SUBSCRIBE TO drips OFC*\n\n*YOUTUBE:* https://www.youtube.com/c/dripsOFC\n\n*NEW FEATURES COMING SOON SO STAY TUNED*\n\n*FEEL FREE TO BRING IDEAS OF THE FEATURES ON THE TABLE*\n\n*IF YOU WANT TO CONTRUBUTE FORK THE REPO, MAKE CHANGES PUSH YOUR CHANGES TO THE ORIGIN BRANCH AND WAIT FOR YOUR PULL REQUEST TO BE VERIFIED*\n\n*Thanks for choosing zim-bot*`,contextInfo: { externalAdReply:{title:"Miku bot V4",body:"SUBSCRIBE drips OFC",showAdAttribution: true,mediaType:2,thumbnail: fs.readFileSync(`./src/logo.jpg`) ,mediaUrl:`https://youtu.be/KNu-gr2h7bo`, sourceUrl: `https://youtu.be/KNu-gr2h7bo` }}}, {quoted: m})
  //anouncement by drips 
}, nextMinutes * 300 * 1000);
const send5Butlmg = async (jid , text = '' , footer = '', img, but = [], options = {}) =>{
    var template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
 hydratedTemplate: {
   locationMessage: { degreesLatitude: 0, degreesLongtitude: 0, jpegThumbnail: img },
 "hydratedContentText": text,
 "hydratedFooterText": footer,
 "hydratedButtons": but
   }
   }
   }), options)
    return MikuBotInc.relayMessage(jid, template.message, { messageId: template.key.id })
    }
//reset limit every 12hrs
let cron = require('node-cron')
cron.schedule('00 12 * * *', () => {
 let user = Object.keys(global.db.users)
 let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
 for (let jid of user) global.db.users[jid].limit = limitUser
 console.log('Reseted Limit')
}, {
 scheduled: true,
 timezone: "Africa/Harare"
})
//script by drips   
//respond to cmd
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.sticker)) {
let hash = global.db.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
 userJid: MikuBotInc.user.id,
 quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, MikuBotInc.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
 ...chatUpdate,
 messages: [proto.WebMessageInfo.fromObject(messages)],
 type: 'append'
}
MikuBotInc.ev.emit('messages.upsert', msg)
}
    
if (('family100'+m.chat in _family100) && isCmd) {
 kuis = true
 let room = _family100['family100'+m.chat]
 let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
 let isSurender = /^((me)?give up|surr?ender)$/i.test(m.text)
 if (!isSurender) {
   let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
   if (room.terjawab[index]) return !0
   room.terjawab[index] = m.sender
 }
 let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
 let caption = `
Answer the following questions :\n${room.soal}\n\n\nThere is ${room.jawaban.length} Answer ${room.jawaban.find(v => v.includes(' ')) ? `(some answers have spaces)` : ''}
${isWin ? `All Answers Answered` : isSurender ? 'Give up!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Perfect Player`}`.trim()
 MikuBotInc.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
 if (isWin || isSurender) delete _family100['family100'+m.chat]
}

if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
 kuis = true
 jawaban = tebaklagu[m.sender.split('@')[0]]
 if (budy.toLowerCase() == jawaban) {
   await MikuBotInc.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'GUESS THE MUSIC' }, type: 1 }], ` Guess The Song\n\nCorrect Answer 🎉\n\nWant to play again? Miku bot INC`, MikuBotInc.user.name, m)
   delete tebaklagu[m.sender.split('@')[0]]
 } else reply('*WRONG ANSWER!*')
}

if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
 kuis = true
 jawaban = kuismath[m.sender.split('@')[0]]
 if (budy.toLowerCase() == jawaban) {
   await reply(`Math Quiz\n\nCorrect answer 🎉\n\nWant to play again? Send ${prefix}math mode`)
   delete kuismath[m.sender.split('@')[0]]
 } else reply('*WRONG ANSWER!*')
}

if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
 kuis = true
 jawaban = tebakgambar[m.sender.split('@')[0]]
 if (budy.toLowerCase() == jawaban) {
   await MikuBotInc.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Guess The Picture' }, type: 1 }], ` Guess The Picture\n\nCorrect answer 🎉\n\nWant to play again? Miku bot INC`, MikuBotInc.user.name, m)
   delete tebakgambar[m.sender.split('@')[0]]
 } else reply('*WRONG ANSWER!*')
}

if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
 kuis = true
 jawaban = tebakkata[m.sender.split('@')[0]]
 if (budy.toLowerCase() == jawaban) {
   await MikuBotInc.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'GUESS THE WORD' }, type: 1 }], `Guess The Word\n\nCorrect answer 🎉\n\nWant to play again? Miku bot INC`, MikuBotInc.user.name, m)
   delete tebakkata[m.sender.split('@')[0]]
 } else reply('*WRONG ANSWER!*')
}

if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
 kuis = true
 jawaban = caklontong[m.sender.split('@')[0]]
    deskripsi = caklontong_desk[m.sender.split('@')[0]]
 if (budy.toLowerCase() == jawaban) {
   await MikuBotInc.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'GUESS LONTONG' }, type: 1 }], `Guess Lontong\n\nCorrect answer 🎉\n*${deskripsi}*\n\nWant to play again? Miku bot INC`, MikuBotInc.user.name, m)
   delete caklontong[m.sender.split('@')[0]]
delete caklontong_desk[m.sender.split('@')[0]]
 } else reply('*WRONG ANSWER!*')
}

if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
 kuis = true
 jawaban = tebakkalimat[m.sender.split('@')[0]]
 if (budy.toLowerCase() == jawaban) {
   await MikuBotInc.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Guess The Sentence' }, type: 1 }], ` Guess The Sentence \n\nCorrect answer 🎉\n\nWant to play again? Miku bot INC`, MikuBotInc.user.name, m)
   delete tebakkalimat[m.sender.split('@')[0]]
 } else reply('*WRONG ANSWER!*')
}

if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
 kuis = true
 jawaban = tebaklirik[m.sender.split('@')[0]]
 if (budy.toLowerCase() == jawaban) {
   await MikuBotInc.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Guess The Lyrics' }, type: 1 }], ` Guess The Lyrics \n\nCorrect answer 🎉\n\nWant to play again? Miku bot INC`, MikuBotInc.user.name, m)
   delete tebaklirik[m.sender.split('@')[0]]
 } else reply('*WRONG ANSWER!*')
}
    
if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
 kuis = true
 jawaban = tebaktebakan[m.sender.split('@')[0]]
 if (budy.toLowerCase() == jawaban) {
   await MikuBotInc.sendButtonText(m.chat, [{ buttonId: 'tebak tebakan', buttonText: { displayText: 'Riddles' }, type: 1 }], `Riddles \n\nCorrect answer 🎉\n\nWant to play again? Miku bot INC`, MikuBotInc.user.name, m)
   delete tebaktebakan[m.sender.split('@')[0]]
 } else reply('*WRONG ANSWER!*')
}

//tic-tac toe game
    this.game = this.game ? this.game : {}
    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
    if (room) {
    let ok
    let isWin = !1
    let isTie = !1
    let isSurrender = !1
    // reply(`[DEBUG]\n${parseInt(m.text)}`)
    if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
    isSurrender = !/^[1-9]$/.test(m.text)
    if (m.sender !== room.game.currentTurn) { 
    if (!isSurrender) return !0
    }
    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
    reply({
    '-3': 'Game has ended',
    '-2': 'Invalid',
    '-1': 'Invalid Position',
    0: 'Invalid Position',
    }[ok])
    return !0
    }
    if (m.sender === room.game.winner) isWin = true
    else if (room.game.board === 511) isTie = true
    let arr = room.game.render().map(v => {
    return {
    X: '❌',
    O: '⭕',
    1: '1️⃣',
    2: '2️⃣',
    3: '3️⃣',
    4: '4️⃣',
    5: '5️⃣',
    6: '6️⃣',
    7: '7️⃣',
    8: '8️⃣',
    9: '9️⃣',
    }[v]
    })
    if (isSurrender) {
    room.game._currentTurn = m.sender === room.game.playerX
    isWin = true
    }
    let winner = isSurrender ? room.game.currentTurn : room.game.winner
    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Win!` : isTie ? `Game over` : `Turn ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Type *give up* to surrender and admit defeat`
    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
    if (room.x !== room.o) await MikuBotInc.sendText(room.x, str, m, { mentions: parseMention(str) } )
    await MikuBotInc.sendText(room.o, str, m, { mentions: parseMention(str) } )
    if (isTie || isWin) {
    delete this.game[room.id]
    }
    }

//suit vp
    this.suit = this.suit ? this.suit : {}
    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
    if (roof) {
    let win = ''
    let tie = false
    if (m.sender == roof.p2 && /^(acc(ept)?|accept|sure|oke?|reject|dont|later|yes|can|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
    if (/^(reject|dont|later|n|no|can)/i.test(m.text)) {
    MikuBotInc.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} reject the suit, the suit is canceled`, m)
    delete this.suit[roof.id]
    return !0
    }
    roof.status = 'play'
    roof.asal = m.chat
    clearTimeout(roof.waktu)
    //delete roof[roof.id].waktu
    MikuBotInc.sendText(m.chat, `Suit has been sent to chat

@${roof.p.split`@`[0]} and 
@${roof.p2.split`@`[0]}

Please choose a suit in the respective chat"
click https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
    if (!roof.pilih) MikuBotInc.sendText(roof.p, `Please select \n\nRock🗿\nPaper📄\nScissors`, m)
    if (!roof.pilih2) MikuBotInc.sendText(roof.p2, `Please select \n\nRock🗿\nPaper📄\nScissor️`, m)
    roof.waktu_milih = setTimeout(() => {
    if (!roof.pilih && !roof.pilih2) MikuBotInc.sendText(m.chat, `Both players don't want to play,\nSuit canceled`)
    else if (!roof.pilih || !roof.pilih2) {
    win = !roof.pilih ? roof.p2 : roof.p
    MikuBotInc.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} didn't choose suit, game over`, m)
    }
    delete this.suit[roof.id]
    return !0
    }, roof.timeout)
    }
    let jwb = m.sender == roof.p
    let jwb2 = m.sender == roof.p2
    let g = /scissors/i
    let b = /rock/i
    let k = /paper/i
    let reg = /^(scissors|rock|paper)/i
    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
    roof.pilih = reg.exec(m.text.toLowerCase())[0]
    roof.text = m.text
    reply(`You have chosen ${m.text} ${!roof.pilih2 ? `\n\nWaiting for the opponent to choose` : ''}`)
    if (!roof.pilih2) MikuBotInc.sendText(roof.p2, '_The opponent has chosen_\nNow it is your turn', 0)
    }
    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
    roof.text2 = m.text
    reply(`You have chosen ${m.text} ${!roof.pilih ? `\n\nWaiting for the opponent to choose` : ''}`)
    if (!roof.pilih) MikuBotInc.sendText(roof.p, '_The opponent has chosen_\nNow it is your turn', 0)
    }
    let stage = roof.pilih
    let stage2 = roof.pilih2
    if (roof.pilih && roof.pilih2) {
    clearTimeout(roof.waktu_milih)
    if (b.test(stage) && g.test(stage2)) win = roof.p
    else if (b.test(stage) && k.test(stage2)) win = roof.p2
    else if (g.test(stage) && k.test(stage2)) win = roof.p
    else if (g.test(stage) && b.test(stage2)) win = roof.p2
    else if (k.test(stage) && b.test(stage2)) win = roof.p
    else if (k.test(stage) && g.test(stage2)) win = roof.p2
    else if (stage == stage2) tie = true
    MikuBotInc.sendText(roof.asal, `_*Suit Results*_${tie ? '\nSERIES' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Win \n` : ` Lost \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Win \n` : ` Lost \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
    delete this.suit[roof.id]
    }
    }
    
    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
    for (let jid of mentionUser) {
 let user = global.db.users[jid]
 if (!user) continue
 let afkTime = user.afkTime
 if (!afkTime || afkTime < 0) continue
 let reason = user.afkReason || ''
 reply(`
Don't tag him!
He's in Offline/AFK, ${reason ? 'with reason ' + reason : 'no reason'}
Its been ${clockString(new Date - afkTime)}
`.trim())
}

if (db.users[m.sender].afkTime > -1) {
 let user = global.db.users[m.sender]
 reply(`
You came back online from AFK${user.afkReason ? ' after ' + user.afkReason : ''}
In ${clockString(new Date - user.afkTime)}
`.trim())
 user.afkTime = -1
 user.afkReason = ''
}
    
switch(command) {
  case 'quest':
    let sectionnya= [
    {
    "title": `MISSION 1`,
     rows: [
    {
    "title": `KILLING SLIME`,
    "description": `Hunting Slimes For Rewards`,
    "rowId": `${prefix}slime`
    }
    ]
    }
    ,
    {
    "title": `MISSION 2`,
     rows: [
    {
    "title": `KILLING GOBLIN`,
    "description": `Hunt Globin To Get Rewards`,
    "rowId": `${prefix}goblin`
    }
    ]
    }
    ,
    {
    "title": `MISSION 3`,
     rows: [
    {
    "title": `KILLING DEVIL`,
    "description": `Hunt Devils To Get Rewards`,
    "rowId": `${prefix}devil`
    }
    ]
    }
    ,
    {
    "title": `MISSION 4`,
     rows: [
    {
    "title": `KILLING BEHEMOTH`,
    "description": `Hunting Behemoths To Earn Rewards`,
    "rowId": `${prefix}behemoth`
    }
    ]
    }
    ,
    {
    "title": `MISSION 5`,
     rows: [
    {
    "title": `KILLING DEMONS`,
    "description": `Hunt Demons To Get Rewards`,
    "rowId": `${prefix}demon`
    }
    ]
    }
    ,
    {
    "title": `MISSION 6`,
     rows: [
    {
    "title": `KILLING DEMONKING`,
    "description": `DemonKing Hunting To Earn Rewards`,
    "rowId": `${prefix}demonking`
    }
    ]
    }
    ]
    MikuBotInc.sendList(m.chat, `Hi Chomie *${pushname}*`, `Please Select Below`, "CLICK", "ʀᴘɢ ɢᴀᴍᴇ ʙʏ ᴢɪᴍʙᴏᴛ ", sectionnya, { quoted: m})
break
case 'ttc': case 'ttt': case 'tictactoe': {
 let TicTacToe = require("./lib/tictactoe")
 this.game = this.game ? this.game : {}
 if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'espere a partida terminar'
 let room = Object.values(this.game).find(room => room.state === 'Esperando' && (text ? room.name === text : true))
 if (room) {
 reply('Partner found!')
 room.o = m.chat
 room.game.playerO = m.sender
 room.state = 'Jogando'
 let arr = room.game.render().map(v => {
 return {
 X: '❌',
 O: '⭕',
 1: '1️⃣',
 2: '2️⃣',
 3: '3️⃣',
 4: '4️⃣',
 5: '5️⃣',
 6: '6️⃣',
 7: '7️⃣',
 8: '8️⃣',
 9: '9️⃣',
 }[v]
 })
 let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Waiting @${room.game.currentTurn.split('@')[0]}

Caso queira se render use !give up`
 if (room.x !== room.o) await MikuBotInc.sendText(room.x, str, m, { mentions: parseMention(str) } )
 await MikuBotInc.sendText(room.o, str, m, { mentions: parseMention(str) } )
 } else {
 room = {
 id: 'tictactoe-' + (+new Date),
 x: m.chat,
 o: '',
 game: new TicTacToe(m.sender, 'o'),
 state: 'Esperando'
 }
 if (text) room.name = text
 reply('Aguardando parceiro' + (text ? ` type the command below ${prefix}${command} ${text}` : ''))
 this.game[room.id] = room
 }
 }
 break
 case 'delttc': case 'delttt': {
 this.game = this.game ? this.game : {}
 try {
 if (this.game) {
 delete this.game
 MikuBotInc.sendText(m.chat, `Deletado`, m)
 } else if (!this.game) {
 reply(`Nao ha sessoes abertas`)
 } else throw '?'
 } catch (e) {
 reply('error')
 }
 }
 break

 case 'join': {
   if (!isCreator) throw global.owner
   if (!text) throw 'link?!'
   if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw '*Invalido*'
   replay(mess.wait)
   let result = args[0].split('https://chat.whatsapp.com/')[1]
   await MikuBotInc.groupAcceptInvite(result).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
 }
 break
 case 'leave': {
   if (!isCreator) throw global.owner
   await MikuBotInc.groupLeave(m.chat).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
 }
 break
case 'kick': {
if (!m.isGroup) throw mess.group
   if (!isBotAdmins) throw mess.botAdmin
   if (!isAdmins) throw mess.admin
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await MikuBotInc.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break
case 'add': {
if (!m.isGroup) throw mess.group
   if (!isBotAdmins) throw mess.botAdmin
   if (!isAdmins) throw mess.admin
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await MikuBotInc.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break
case 'promote': {
if (!m.isGroup) throw mess.group
   if (!isBotAdmins) throw mess.botAdmin
   if (!isAdmins) throw mess.admin
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await MikuBotInc.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break
case 'demote': {
if (!m.isGroup) throw mess.group
   if (!isBotAdmins) throw mess.botAdmin
   if (!isAdmins) throw mess.admin
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await MikuBotInc.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break
case 'block': {
if (!isCreator) throw global.owner
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await MikuBotInc.updateBlockStatus(users, 'block').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break
case 'unblock': {
if (!isCreator) throw global.owner
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await MikuBotInc.updateBlockStatus(users, 'unblock').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break
    case 'setname': case 'setsubject': {
   if (!m.isGroup) throw mess.group
   if (!isBotAdmins) throw mess.botAdmin
   if (!isAdmins) throw mess.admin
   if (!text) throw 'Text ?'
   await MikuBotInc.groupUpdateSubject(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
 }
 break
  case 'setdesc': case 'setdesk': {
   if (!m.isGroup) throw mess.group
   if (!isBotAdmins) throw mess.botAdmin
   if (!isAdmins) throw mess.admin
   if (!text) throw 'Text ?'
   await MikuBotInc.groupUpdateDescription(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
 }
 break
 case 'tagall': case 'tag': {
   if (!m.isGroup) throw mess.group
   if (!isBotAdmins) throw mess.botAdmin
   if (!isAdmins) throw mess.admin
let teks = ` 
 ┏━━━━━━━━━━━┑
 ┃Texto : ${q ? q : 'blank'}*\n\n
 ┗━━━━━━━━ 
`
 for (let mem of participants) {
   teks += `🎪 @${mem.id.split('@')[0]}\n`
   }
   MikuBotInc.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
   }
   break
   case 'hidetag': {
 if (!m.isGroup) throw mess.group
 if (!isAdmins) throw mess.admin
 MikuBotInc.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
 }
 break
  case 'group': case 'grup': {
   if (!m.isGroup) throw mess.group
   if (!isBotAdmins) throw mess.botAdmin
   if (!isAdmins) throw mess.admin
   if (args[0] === 'close'){
  await MikuBotInc.groupSettingUpdate(m.chat, 'announcement').then((res) => reply(`Fechado`)).catch((err) => reply(jsonformat(err)))
   } else if (args[0] === 'open'){
  await MikuBotInc.groupSettingUpdate(m.chat, 'not_announcement').then((res) => reply(`Aberto`)).catch((err) => reply(jsonformat(err)))
   } else {
   let buttons = [
{ buttonId: 'group open', buttonText: { displayText: 'OPEN' }, type: 1 },
{ buttonId: 'group close', buttonText: { displayText: 'CLOSE' }, type: 1 }
  ]
  await MikuBotInc.sendButtonText(m.chat, buttons, `Group Mode`, MikuBotInc.user.name, m)

}
 }
 break
case 'welcome': {
  if (!m.isGroup) throw mess.group
  if (!isAdmins)  throw mess.admin
  if (args[0] === "on") {
  if (db.chats[m.chat].isWelcome) return reply(`*Welcome already on okay*`)
  db.chats[m.chat].isWelcome = true
  reply(`*welcome on*`)
  } else if (args[0] === "off") {
  if (!db.chats[m.chat].isWelcome) return reply(`*Already off okay*`)
  db.chats[m.chat].isWelcome = false
  reply(`*welcome off*`)
  } else {
   let drips = [
  { buttonId: `${command} on`, buttonText: { displayText: 'ON' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'OFF' }, type: 1 }
    ]
    await MikuBotInc.sendButtonText(m.chat, drips, `*▊▊ _WELCOME_ ▊▊*`, MikuBotInc.user.name, m)
  }
    }   
  break 
  case 'autoblock': {
    if (!isCreator) throw mess.owner
    if (args[0] === "on") {
    if (db.settings[botNumber].autoblock) return reply(`*A*`)
    db.settings[botNumber].autoblock = true
    reply(`*Autoblock on*`)
    } else if (args[0] === "off") {
    if (!db.settings[botNumber].autoblock) return reply(`*Ja estava off*`)
    db.settings[botNumber].autoblock = false
    reply(`*Autoblock off*`)
    } else {
     let drips = [
    { buttonId: `${command} on`, buttonText: { displayText: 'ON' }, type: 1 },
    { buttonId: `${command} off`, buttonText: { displayText: 'OFF' }, type: 1 }
      ]
      await MikuBotInc.sendButtonText(m.chat, drips, `*▊▊ _AUTOBLOCK_ ▊▊*`, MikuBotInc.user.name, m)
    }
      } 
  break
//-----GROUP---\\

//--CREATED BY drips--\\

case 'antiwame': {
   if (!m.isGroup) throw mess.group
   if (!isBotAdmins) throw mess.botAdmin
   if (!isAdmins) throw mess.admin
   if (args[0] === "on") {
   if (db.chats[m.chat].wame) return reply(`Ja estava ativo`)
   db.chats[m.chat].wame = true
   reply(`Ativado!`)
   } else if (args[0] === "off") {
   if (!db.chats[m.chat].wame) return reply(`Ja estava desativado`)
   db.chats[m.chat].wame = false
   reply(`Nao estava ativo!`)
   } else {
    let buttons = [
{ buttonId: 'antiwame on', buttonText: { displayText: 'On' }, type: 1 },
{ buttonId: 'antiwame off', buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await MikuBotInc.sendButtonText(m.chat, buttons, `Modo Anti Wa.me`, MikuBotInc.user.name, m)
   }
}
break
   case 'mute': {
   if (!m.isGroup) throw mess.group
   if (!isAdmins) throw mess.admin
   if (args[0] === "on") {
   if (db.chats[m.chat].mute) return reply(`Already activated`)
   db.chats[m.chat].mute = true
   reply(`${MikuBotInc.user.name} has been muted in this group !`)
   } else if (args[0] === "off") {
   if (!db.chats[m.chat].mute) return reply(`Already deactivated`)
   db.chats[m.chat].mute = false
   reply(`${MikuBotInc.user.name} has been unmuted in this group!`)
   } else {
    let buttons = [
{ buttonId: 'mute on', buttonText: { displayText: 'ON' }, type: 1 },
{ buttonId: 'mute off', buttonText: { displayText: 'OFF' }, type: 1 }
  ]
  await MikuBotInc.sendButtonText(m.chat, buttons, `Mute Bot`, MikuBotInc.user.name, m)
   }
}
break
case 'antilink': {
 if (!m.isGroup) throw mess.group
 if (!isBotAdmins) throw mess.botAdmin
 if (!isAdmins) throw mess.admin
 if (args[0] === "on") {
 if (db.chats[m.chat].antilink) return reply(`*Already on umm okay*`)
 db.chats[m.chat].antilink = true
 reply(`*Antilink active*`)
 } else if (args[0] === "off") {
 if (!db.chats[m.chat].antilink) return reply(`*Already off okay*`)
 db.chats[m.chat].antilink = false
 reply(`*Antilink disabled*`)
 } else {
let drips = [
{ buttonId: 'antilink on', buttonText: { displayText: 'ON' }, type: 1 },
{ buttonId: 'antilink off', buttonText: { displayText: 'OFF' }, type: 1 }
]
await MikuBotInc.sendButtonText(m.chat, drips, `*▊▊▊ANTILINK MODE▊▊▊*`, MikuBotInc.user.name, m)
}
}
break
case 'antiytchannel': case 'antilinkyoutubechannel': case 'antiytchannel': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (args[0] === "on") {
if (db.chats[m.chat].antiytchannel) return reply(`*Already on umm okay*`)
db.chats[m.chat].antiytchannel = true
reply(`*Antilink active*`)
} else if (args[0] === "off") {
if (!db.chats[m.chat].antiytchannel) return reply(`*Already off okay*`)
db.chats[m.chat].antiytchannel = false
reply(`*Antilink disabled*`)
} else {
let drips = [
{ buttonId: `${command} on`, buttonText: { displayText: 'ON' }, type: 1 },
{ buttonId: `${command} off`, buttonText: { displayText: 'OFF' }, type: 1 }
]
await MikuBotInc.sendButtonText(m.chat, drips, `*▊▊▊ANTILINK MODE▊▊▊*`, MikuBotInc.user.name, m)
}
}
break
 case 'linkgroup': case 'grouplink': case 'gclink': case 'linkgc':{ 
   if (!m.isGroup) throw mess.group
   let response = await MikuBotInc.groupInviteCode(m.chat)
   MikuBotInc.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink de: ${groupMetadata.subject} Group`,m ,{ detectLink: true })
}
   break
 case 'nsfw': {	 			
 if (!m.isGroup) return reply(mess.group)
 if (!isBotAdmins) return reply(mess.botAdmin)
 if (!isAdmins && !isCreator) return reply(mess.admin)
 if (args[0] === "on") {
 if (isAntinsfw) return reply('*Ja estava ativo*')
 dripsno.push(from)
 reply('*Vixi😏*')
 var group = await MikuBotInc.groupMetadata(from)
 var members = group['participants']
 var mems = []
 members.map(async adm => {
 mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
 })
 MikuBotInc.sendMessage(from, {text: `*horny mood activated everyone be ready for masturbation*`, contextInfo: { mentionedJid : mems }}, {quoted:m})
 } else if (args[0] === "off") {
 if (!isAntinsfw) return reply('*Ja estava desativado*')
 let off = dripsno.indexOf(from)
 dripsno.splice(off, 1)
 reply('*Ativado*')
 } else {
let button = [
{ buttonId: `${command} on`, buttonText: { displayText: 'ON' }, type: 1 },
{ buttonId: `${command} off`, buttonText: { displayText: 'OFF' }, type: 1 }
]
await MikuBotInc.sendButtonText(m.chat, button, `*Modo nsfw*`, m)
}
}
break
 break
 case 'git': case 'gitclone':
reply(mess.wait)
 let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
 if(!args[0]) throw 'link github  EXAMPLE: https://github.com/miku-bot/miku-bot-md'
if (!regex1.test(args[0])) throw 'link!'
   let [, user, repo] = args[0].match(regex1) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    // 'attachment; filenameq=ZidniGanz.zip'
    reply(`*Clonando repositorio..*`)
    MikuBotInc.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' , quoted: m,contextInfo: { externalAdReply:{
      title:"Miku bot V4",
      body:"...",
      showAdAttribution: true,
      mediaType:2,
      thumbnail: fs.readFileSync('./src/logo.jpg'),
      mediaUrl:`https://youtu.be/KNu-gr2h7o`, 
      sourceUrl: `https://youtu.be/KNu-gr2h7o`,
      }}
      })
 
 break
 case 'tagme': {
   MikuBotInc.sendMessage(m.chat, {text:`@${m.sender.split("@")[0]}`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
   }
 break
 case 'delete': case 'del': {
   if (!m.quoted) throw false
   let { chat, fromMe, id, isBaileys } = m.quoted
   if (!isBaileys) throw '*somente com mensagens do bot💥*'
   MikuBotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
 }
 break
 case 'bcgc': case 'bcgroup': {
   if (!isCreator) throw global.owner
   if (!text) throw `Where is the text?\n\nExample : ${prefix + command} hello guys, am back`
   let getGroups = await MikuBotInc.groupFetchAllParticipating()
   let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
   let anu = groups.map(v => v.id)
   reply(`enviado para  ${anu.length} Group Chat, Finish Time ${anu.length * 1.5} second`)
   for (let i of anu) {
  await sleep(1500)
  let btn = [{
 urlButton: {
  displayText: 'SUBSCRIBE',
  url: 'https://youtube.ccom/c/dripsOFC'
 }
  }, {
 callButton: {
  displayText: 'OWNER',
  phoneNumber: '+27 634-090-0203'
 }
  }, {
 quickReplyButton: {
  displayText: 'PING',
  id: 'ping'
 }
  }, {
 quickReplyButton: {
  displayText: 'OWNER',
  id: 'owner'
 }  
  }, {
 quickReplyButton: {
  displayText: 'SCRIPT',
  id: 'sc'
 }
  }]
 fatihgans = fs.readFileSync('./src/src/logo.jpg')
 let txt = `「 ZimBot Broadcast 」\n\n${text}`
 MikuBotInc.send5ButImg(i, txt, MikuBotInc.user.name, fatihgans, btn)
  }
   reply(`Successful Sending Broadcast To ${anu.length} Group(s)`)
 }
 break
 case 'bc': case 'broadcast': case 'bcall': {
   if (!isCreator) throw global.owner
   if (!text) throw `Where is the text?\n\nExample : ${prefix + command} Miku on`
   let anu = await store.chats.all().map(v => v.id)
   reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} second`)
for (let yoi of anu) {
    await sleep(1500)
    let btn = [{
 urlButton: {
  displayText: 'GITHUB',
  url: 'https://github.com/zim-bot/pao-v2'
 }
  }, {
 quickReplyButton: {
  displayText: 'OWNER',
  id: 'owner'
 }
  }]
 fatihgans = fs.readFileSync('./src/src/logo.jpg')
 let txt = `「 Miku bot  」\n\n${text}`
 MikuBotInc.send5ButImg(yoi, txt, `Broadcast By ${global.pengguna}`, fatihgans, btn)
}
reply('*Success*')
 }
 break
 case 'toimage': case 'toimg': {
   if (!quoted) throw '*imagem?*'
   if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
   replay(mess.wait)
   let media = await MikuBotInc.downloadAndSaveMediaMessage(quoted)
   let ran = await getRandom('.png')
   exec(`ffmpeg -i ${media} ${ran}`, (err) => {
  fs.unlinkSync(media)
  if (err) throw err
  let buffer = fs.readFileSync(ran)
  MikuBotInc.sendMessage(m.chat, { image: buffer }, { quoted: m })
  fs.unlinkSync(ran)
   })
 }
 break
case 'tomp4': case 'tovideo': {
   if (!quoted) throw 'sticker?'
   if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
   replay(mess.wait)
let { webp2mp4File } = require('./lib/uploader')
   let media = await MikuBotInc.downloadAndSaveMediaMessage(quoted)
   let webpToMp4 = await webp2mp4File(media)
   await MikuBotInc.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: '*pronto*' } }, { quoted: m })
   await fs.unlinkSync(media)
 }
 break
 case 'tts':
  const gtts = require('./src/gtts')(args[0])
  if (args.length < 1) return MikuBotInc.sendMessage(from, `assim ${prefix}pao`, text, {quoted: m})
  if (args.length < 2) return MikuBotInc.sendMessage(from, `assim o ${prefix}pao`, text, {quoted: m})
 var dtt = body.slice(20)
  reply(mess.wait)
  var ranm = getRandom('.mp3')
		var	rano = getRandom('.ogg')
				dtt.length > 300
         gtts.save(ranm, dtt, function() {
          exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
          fs.unlinkSync(ranm)
          buffer = fs.readFileSync(rano)
          if (err) return reply('error')
          Ruri.sendMessage(from,  audio, {quoted: freply, ptt:true})
          MikuBotInc.sendMessage(m.chat, { audio: buffer, mimetype: 'audio/mp4', ptt: true, quoted: mudratunha})
          fs.unlinkSync(rano)
          })
          })
  break
 case 'toaud': case 'toaudio': {
 if (!/video/.test(mime) && !/audio/.test(mime)) throw `Send/Reply Video/Audio You Want Aud`
 if (!quoted) throw `Send/Reply Video/Audio You Want to Use as Audio With Caption ${prefix + command}`
 replay(mess.wait)
 let media = await quoted.download()
 let { toAudio } = require('./lib/converter')
 let audio = await toAudio(media, 'mp4')
 MikuBotInc.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
 }
 break
 case 'tomp3': {
 if (/document/.test(mime)) throw `Send/Reply Video/Audio You Want to Convert into MP3 With Caption ${prefix + command}`
 if (!/video/.test(mime) && !/audio/.test(mime)) throw `Send/Reply Video/Audio You Want To Convert Into MP3 With Caption ${prefix + command}`
 if (!quoted) throw `Send/Reply Video/Audio You Want To Convert Into MP3 With Caption ${prefix + command}`
 replay(mess.wait)
 let media = await quoted.download()
 let { toAudio } = require('./lib/converter')
 let audio = await toAudio(media, 'mp4')
 MikuBotInc.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Converted By ${MikuBotInc.user.name}.mp3`}, { quoted : m })
 }
 break
 case 'togif': {
   if (!quoted) throw 'Reply Image'
   if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
   replay(mess.wait)
let { webp2mp4File } = require('./lib/uploader')
   let media = await MikuBotInc.downloadAndSaveMediaMessage(quoted)
   let webpToMp4 = await webp2mp4File(media)
   await MikuBotInc.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
   await fs.unlinkSync(media)
 }
 break
case 'tourl': {
   replay(mess.wait)
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
   let media = await MikuBotInc.downloadAndSaveMediaMessage(quoted)
   if (/image/.test(mime)) {
  let anu = await TelegraPh(media)
  reply(util.format(anu))
   } else if (!/image/.test(mime)) {
  let anu = await UploadFileUgu(media)
  reply(util.format(anu))
   }
   await fs.unlinkSync(media)
 }
 break
    case 'yts': case 'ytsearch': {
   if (!text) throw `Example : ${prefix + command} story wa anime`
   let yts = require("yt-search")
   let search = await yts(text)
   let teks = 'SUBSCRIBE Search\n\n Result From '+text+'\n\n'
   let no = 1
   for (let i of search.all) {
  teks += `🎪No: ${no++}\n💮𝗧𝗬𝗣𝗘 : ${i.type}\n🔳𝗩𝗜𝗗𝗘𝗢 𝗜𝗗: ${i.videoId}\n🔴𝗧𝗜𝗧𝗟𝗘 : ${i.title}\n🎪𝗩𝗜𝗘𝗪𝗦 : ${i.views}\n🎬𝗗𝗨𝗥𝗔𝗧𝗜𝗢𝗡 : ${i.timestamp}\n📡𝗨𝗣𝗟𝗢𝗔𝗗 𝗔𝗧 : ${i.ago}\n🎰𝗔𝗨𝗧𝗛𝗢𝗥 : ${i.author.name}\n📌𝗨𝗥𝗟 : ${i.url}\n\n─────────────────\n\n`
   }
   MikuBotInc.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
 }
 break
case 'google': {
    reply(mess.wait)
    const { googleIt } = require('@bochilteam/scraper')
    let full = /f$/i.test(command)
    let text = args.join` `
    if (!text) return reply(m.chat, 'No text to search', m)
    let url = 'https://google.com/search?q=' + encodeURIComponent(text)
    let search = await googleIt(text)
    let msg = search.articles.map(({
        // header,
        title,
        url,
        description
    }) => {
        return `*${title}*\n_${url}_\n_${description}_`
    }).join('\n\n')
    try {
        let ss = await (await fetch(('nrtm', '/api/ssweb', { delay: 1000, url, full }))).arrayBuffer()
        if (/<!DOCTYPE html>/i.test(ss.toBuffer().toString())) throw ''
        await MikuBotInc.sendFile(m.chat, ss, 'screenshot.png', url + '\n\n' + msg, m)
    } catch (e) {
        reply(msg)
    }
}
   break
case 'gimage': case 'googleimage': {
reply(mess.wait)
if (!text) throw `Example : ${prefix + command} ml nana`
let gis = require('g-i-s')
gis(text, async (error, result) => {
n = result
images = n[Math.floor(Math.random() * n.length)].url
let buttons = [
  {buttonId: `gimage ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
   ]
   let buttonMessage = {
  image: { url: images },
  caption: `❰ 𝗚𝗢𝗢𝗚𝗟𝗘 𝗜𝗠𝗔𝗚𝗘 ❱
*𝗤𝗨𝗘𝗥𝗬* : ${text}
*𝗠𝗘𝗗𝗜𝗔 𝗨𝗥𝗟* : ${images}`,
  footer: MikuBotInc.user.name,
  buttons: buttons,
  headerType: 4
   }
   MikuBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
})
}
break
    
 case 'pinterest': case 'pndl': case 'pin': {
replay(mess.wait)
 if (!args.join(" ")) return reply("What picture are you looking for?")
 try {
 hx.pinterest(args.join(" ")).then(async(res) => {
 dripdako = res[Math.floor(Math.random() * res.length)]
 let buttons = [
 {buttonId: `pinterest ${args.join(" ")}`, buttonText: {displayText: 'NEXT'}, type: 1}
 ]
 let buttonMessage = {
 image: { url: dripdako },
 caption:  `
 *TITLE:*`  + args.join(" ") 
 
 `*PHOTO URL:* `+dripdako,

 footer: `${global.botname}`,
 buttons: buttons,
 headerType: 4,
 contextInfo:{externalAdReply:{
 title:`Miku bot V4`,
 body:`drips OFC`,
 showAdAttribution: true,
 thumbnail: global.thumb,
 mediaType:2,
 mediaUrl: `https://youtu.be/KNu-gr2h7bo`,
 sourceUrl: `https://youtu.be/KNu-gr2h7bo`
 }}
 }
 XeonBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
 }).catch(_ => _)
 } catch {
 reply("Error")
 }
 }
 
 break

//------NSFW FEATURES-----\\

case 'masturbation': 
case 'jahy': 
case 'hentai': 
case 'glasses': 
case 'gangbang': 
case 'foot': 
case 'femdom': 
case 'cum': 
case 'ero': 
case 'cuckold': 
case 'blowjob': 
case 'bdsm': 
case 'ahegao': 
case 'ass': 
case 'orgy': 
case 'panties': 
case 'pussy': 
case 'thighs': 
case 'yuri': 
case 'tentacles': 
if (!m.isGroup) return replay(mess.group)
if (!isAntinsfw) return reply('*Nsfw proibido*')
try{
reply(mess.wait)
hwindi = await fetchJson(`https://myselfff.herokuapp.com/docs/nsfw/${command}`)
stallone = await getBuffer(hwindi.result)
MikuBotInc.sendMessage(from, {image:stallone},{quoted:m})
} catch (e) {error("Error")}
break
//---END HERE-------\\

//CREATED BY drips

//------ANIME FESTURES------\\
case 'cry': 
case 'kill':
case 'hug':
case 'pat':
case 'lick':
case 'kiss':
case 'bite':
case 'yeet':
case 'neko':
case 'bully':
case 'bonk':
case 'wink':
case 'poke':
case 'nom':
case 'slap':
case 'smile':
case 'wave':
case 'awoo':
case 'blush':
case 'smug':
case 'glomp':
case 'happy':
case 'dance':
case 'cringe':
case 'cuddle':
case 'highfive':
case 'shinobu':
case 'megumin':
case 'handhold':
reply(mess.wait)
axios.get(`https://api.waifu.pics/sfw/${command}`)
.then(({data}) => {
MikuBotInc.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
break  
case 'animeslap':
reply(mess.wait)
 stantontunha = await axios.get(`https://nekos.life/api/v2/img/slap`)
var garo = [
{buttonId: `.${command}`, buttonText: {displayText: `NEXT`}, type: 1},
]
let tunhamasawi = {
image: {url:stantontunha.data.url},
caption:  `Here you go!`,
footer: `${global.botname}`,
buttons: garo,
headerType: 4
}
await MikuBotInc.sendMessage(m.chat, tunhamasawi,{ quoted:m }).catch(err => {
return('Error!')
})

break
case 'animepat':
reply(mess.wait)
 lioneltunha = await axios.get(`https://nekos.life/api/v2/img/pat`)
var tunhabee = [
{buttonId: `.${command}`, buttonText: {displayText: `NEXT`}, type: 1},
]
let masawitunha = {
image: {url:lioneltunha.data.url},
caption:  `DATA OBTAINED!`,
footer: `${global.botname}`,
buttons: tunhabee,
headerType: 4
}
await MikuBotInc.sendMessage(m.chat, masawitunha,{ quoted:m }).catch(err => {
return('Error!')
})
break
case 'animeneko':
reply(mess.wait)
princetunha = await axios.get(`https://nekos.life/api/v2/img/neko`)
var tunhaprince = [
{buttonId: `.${command}`, buttonText: {displayText: `Next `}, type: 1},
]
let tanaka = {
image: {url:princetunha.data.url},
caption:  `Here you go!`,
footer: `${global.botname}`,
buttons: tunhaprince,
headerType: 4
}
await MikuBotInc.sendMessage(m.chat, tanaka,{ quoted:m }).catch(err => {
return('Error!')
})
break
case 'animehug':
reply(mess.wait)
tunha = await axios.get(`https://nekos.life/api/v2/img/hug`)
var madeline = [
{buttonId: `.${command}`, buttonText: {displayText: `Next `}, type: 1},
]
let magwetta = {
image: {url:tunha.data.url},
caption:  `Here you go!`,
footer: `${global.botname}`,
buttons: madeline,
headerType: 4
}
await MikuBotInc.sendMessage(m.chat, magwetta,{ quoted:m }).catch(err => {
return('Error!')
})
break
case 'animekiss':
reply(mess.wait)
tunha = await axios.get(`https://nekos.life/api/v2/img/kiss`)
var blessedtuna2 = [
{buttonId: `.${command}`, buttonText: {displayText: `Next `}, type: 1},
]
let sekedema = {
image: {url:tunha.data.url},
caption:  `Here you go!`,
footer: `${global.botname}`,
buttons: blessedtuna2,
headerType: 4
}
await MikuBotInc.sendMessage(m.chat, sekedema,{ quoted:m }).catch(err => {
return('Error!')
})
break
case 'animewlp':
reply(mess.wait)
mhofu = await axios.get(`https://nekos.life/api/v2/img/wallpaper`)
var wati = [
{buttonId: `.${command}`, buttonText: {displayText: `Next `}, type: 1},
]
let sekeMutema = {
image: {url:mhofu.data.url},
caption:  `Here you go!`,
footer: `${global.botname}`,
buttons: wati,
headerType: 4
}
await MikuBotInc.sendMessage(m.chat, sekeMutema,{ quoted:m }).catch(err => {
return('Error!')
})
break
case 'animespank':
reply(mess.wait)
mhofu = await axios.get(`https://nekos.life/api/v2/img/spank`)
var wati = [
{buttonId: `.${command}`, buttonText: {displayText: `Next `}, type: 1},
]
let edzai = {
image: {url:mhofu.data.url},
caption:  `Here you go!`,
footer: `${global.botname}`,
buttons: wati,
headerType: 4
}
await MikuBotInc.sendMessage(m.chat, edzai,{ quoted:m }).catch(err => {
return('Error!')
})
break
case 'shinobu2': 
reply(mess.wait)
dhoti = await axios.get('https://waifu.pics/api/sfw/shinobu')
var wati = [
{buttonId: `.shinobu`, buttonText: {displayText: `Next `}, type: 1},
]
let haha = {
image: {url:dhoti.data.url},
caption:  `Here you go!`,
footer: `${global.botname}`,
buttons: wati,
headerType: 4
}
await MikuBotInc.sendMessage(m.chat,haha, { quoted:m }).catch(err => {
return('Error!')
})  
break
case 'megumin2':
reply(mess.wait)
saka = await axios.get('https://waifu.pics/api/sfw/megumin')
var wati = [
{buttonId: `.megumin`, buttonText: {displayText: `Next `}, type: 1},
]
let kuku = {
image: {url:saka.data.url},
caption:  `Here you go!`,
footer: `${global.botname}`,
buttons: wati,
headerType: 4
}
await MikuBotInc.sendMessage(m.chat,kuku, { quoted:m }).catch(err => {
return('Error!')
})  
break
case 'awoo2':
reply(mess.wait)
bhingo = await axios.get(`https://waifu.pics/api/sfw/awoo`)
var pulo = [
{buttonId: `.${command}`, buttonText: {displayText: `Next `}, type: 1},
]
let tidza = {
image: {url:bhingo.data.url},
caption:  `Here you go!`,
footer: `${global.botname}`,
buttons: pulo,
headerType: 2
}  
await MikuBotInc.sendMessage(m.chat, tidza, { quoted:m }).catch(err => {
return('Error!')
})
break
case 'animewall2': case 'animewallpaper2':
reply(mess.wait)
const { AnimeWallpaper } =require("anime-wallpaper")
if(!q) return reply('What wallpaper do you want?')
const wall = new AnimeWallpaper();
const pages = [1,2,3,4];
const random=pages[Math.floor(Math.random() * pages.length)]
const wallpaper = await wall
.getAnimeWall4({ title: q, type: "sfw", page: pages })
.catch(() => null);
const i = Math.floor(Math.random() * wallpaper.length);
var francisca = [
{buttonId: `.${command} ${q}`, buttonText: {displayText: `Next `}, type: 1},
]
let tunhastallone = {
image: {url:wallpaper[i].image},
caption: `*QUERY :* ${q}`,
footer: `${global.botname}`,
buttons: francisca,
headerType: 4
}
await MikuBotInc.sendMessage(m.chat, tunhastallone, {quoted: m}) 
//-----END HERE-----\\



//----DOWNLOAD FEATURES---\\
case 'play2':  {   
if  (!text) reply('example: seh calaz takambo tamba')
let yts = require("yt-search")
drips2 = await yts(text)
aramat = drips2.all 
var mulaikah = aramat[0].url
try {
xa.Youtube(mulaikah).then(async (data) => {
const captions = `
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
    ⟮ _*◉ʏᴏᴜᴛᴜʙᴇ ᴍᴜꜱɪᴄ◉*_ ⟯ 
   
0.02━◉━━━━━━━━━━━━3.26
      🔂   ⏪   ⏸️     ⏩  🎵

*◉Tɪᴛʟᴇ :* ${drips2.videos[0].title}
*◉Sɪᴢᴇ :* ${data.medias[7].formattedSize}
*◉Dᴇꜱᴄʀɪᴘᴛɪᴏɴ :* ${drips2.videos[0].description}`
message = await prepareWAMessageMedia({ image : { url: drips2.videos[0].thumbnail } }, { upload:   MikuBotInc.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
hydratedContentText: captions,
imageMessage: message.imageMessage,
hydratedFooterText: `${botname}`,
hydratedButtons: [{
urlButton: {
displayText: 'SOURCE VIDEO',
url: `${drips2.videos[0].url}`
}
}, {
urlButton: {
displayText: `GITHUB`, 
url: `https://github.com/zim-bot/zimbot-v4/fork`
}
}, {
quickReplyButton: {
displayText: `VIDEO`,
id: `${prefix}ytmp4 ${drips2.videos[0].url}`
}
}, {
quickReplyButton: {
displayText: `SONG`,
id: `${prefix}ytmp3 ${drips2.videos[0].url}`
}
}, {
quickReplyButton: {
displayText: `YTSEARCH`,
id: `${prefix}ytsearch ${drips2.videos[0].title}`
}
}]
}
}
}), { userJid: m.chat })
MikuBotInc.relayMessage(m.chat, template.message, { messageId: template.key.id })
})
} catch (err) {
reply('*An error occurred maybe the query was not found*')
}
}
break
case 'play': {
let { yta } = require('./lib/y2mate')
if (!text)  reply(`Example : ${prefix + command} story wa anime`)
let yts = require("yt-search")
let search = await yts(text)
let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
let buf = await getBuffer(anu.thumbnail)
let caption = `
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
       ⟮ _*◉ʏᴏᴜᴛᴜʙᴇ ᴍᴜꜱɪᴄ◉*_ ⟯ 
   
0.02━◉━━━━━━━━━━━━3.26
      🔂   ⏪   ⏸️     ⏩  🎵

*◉Tɪᴛʟᴇ :* ${anu.title}
*◉Sɪᴢᴇ :* ${anu.filesize}
*◉Uʀʟ :* ${anu.url}
*◉Dᴇꜱᴄʀɪᴘᴛɪᴏɴ :* ${anu.description}
`
message = await prepareWAMessageMedia({ image : { url: anu.thumbnail } }, { upload:   MikuBotInc.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
hydratedContentText: caption,
imageMessage: message.imageMessage,
hydratedFooterText: `${botname}`,
hydratedButtons: [{
urlButton: {
displayText: 'SOURCE VIDEO',
url: `${anu.url}`
}
}, {
urlButton: {
displayText: `GITHUB`, 
url: `https://github.com/zim-bot/zimbot-v4/fork`
}
}, {
quickReplyButton: {
displayText: `VIDEO`,
id: `${prefix}ytmp4 ${anu.url}`
}
}, {
quickReplyButton: {
displayText: `DOCUMENT`,
id: `${prefix}ytmp3 ${anu.url}`
}
},{
quickReplyButton: {
displayText: `AUDIO`,
id: `${prefix}audio ${anu.url}`
}
}]
}
}

}), { userJid: m.chat })
MikuBotInc.relayMessage(m.chat, template.message, { messageId: template.key.id })
}

break
case 'ytmp3':  case 'ytmusic': {    
let { yta } = require('./lib/y2mate')
if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
if (!isUrl(args[0]) && !args[0].includes('youtube.com')) throw '*The link you provided is not valid*'    
let quality = args[1] ? args[1] : '128kbps'
let media = await yta(text, quality)
if (media.filesize >= 100000) return m.reply('*File Over Limit* '+util.format(media))
let caption = `
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
    ⟮ _*◉ʏᴏᴜᴛᴜʙᴇ ᴅᴏᴡɴʟᴏᴀᴅ◉*_ ⟯ 
   
0.02━◉━━━━━━━━━━━━3.26
      🔂   ⏪   ⏸️     ⏩  🎵\n\n*◉TITLE :* ${media.title}\n*◉FILESIZE :* ${media.filesizeF}\n*◉URL :* ${isUrl(text)}\n*◉EXT :* MP3\n*◉RESOLUTION :* ${args[1] || '128kbps'}\n\n*Miku bot INC*`
buf = await getBuffer(media.thumb)
MikuBotInc.sendMessage(m.chat, { image: { url: media.thumb }, jpegThumbnail:buf, caption: `${caption}` }, { quoted: m }).catch((err) => m.reply('*Sorry, the link you provided is not valid*'))   
MikuBotInc.sendMessage(m.chat, {document:{url:media.dl_link}, mimetype:"audio/mpeg", fileName: `${media.title}.mp3`,  quoted: m, contextInfo: { externalAdReply:{
title:"Miku bot V4",
body:"SUB drips OFC",
showAdAttribution: true,
mediaType:2,
thumbnail: fs.readFileSync(`./src/logo.jpg`) ,
mediaUrl:`https://youtu.be/KNu-gr2h7bo`, 
sourceUrl: `https://youtu.be/KNu-gr2h7bo` }}}, {quoted: m})
}
break
case 'audio': {    
let { yta } = require('./lib/y2mate')
if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
if (!isUrl(args[0]) && !args[0].includes('youtube.com')) throw '*The link you provided is not valid*'    
let quality = args[1] ? args[1] : '128kbps'
let media = await yta(text, quality)
if (media.filesize >= 100000) return m.reply('*File Over Limit* '+util.format(media))
let caption = `
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
    ⟮ _*◉ʏᴏᴜᴛᴜʙᴇ ᴅᴏᴡɴʟᴏᴀᴅ◉*_ ⟯ 
   
0.02━◉━━━━━━━━━━━━3.26
      🔂   ⏪   ⏸️     ⏩  🎵*\n\n*◉TITLE :* ${media.title}\n*◉FILESIZE :* ${media.filesizeF}\n*◉URL :* ${isUrl(text)}\n*◉EXT :* MP3\n*◉RESOLUTION :* ${args[1] || '128kbps'}\n\n*Miku bot INC*`
buf = await getBuffer(media.thumb)
MikuBotInc.sendMessage(m.chat, { image: { url: media.thumb }, jpegThumbnail:buf, caption: `${caption}` }, { quoted: m }).catch((err) => m.reply('*Sorry, the link you provided is not valid*'))   
MikuBotInc.sendMessage(m.chat, {audio:{url:media.dl_link}, mimetype:"audio/mpeg", fileName: `${media.title}.mp3`,  quoted: m, contextInfo: { externalAdReply:{
title:"Miku bot V4",
body:"drips",
showAdAttribution: true,
mediaType:2,
thumbnail: fs.readFileSync(`./src/logo.jpg`) ,
mediaUrl:`https://youtu.be/KNu-gr2h7bo`, 
sourceUrl: `https://youtu.be/KNu-gr2h7bo` }}}, {quoted: m})
}
break
case 'ytmp4': case 'ytvideo': {
let { ytv } = require('./lib/y2mate')
if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
if (!isUrl(args[0]) && !args[0].includes('youtube.com')) throw '*The link you provided is not valid*'
let quality = args[1] ? args[1] : '360p'
let media = await ytv(text, quality)
if (media.filesize >= 100000) return m.reply('*File Over Limit* '+util.format(media))
var capti = `
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
    ⟮ _*◉ʏᴏᴜᴛᴜʙᴇ ᴅᴏᴡɴʟᴏᴀᴅ◉*_ ⟯ 
   
0.02━◉━━━━━━━━━━━━3.26
      🔂   ⏪   ⏸️     ⏩  🎵\n\n*◉Title* : ${media.title}\n*◉FILESIZE* : ${media.filesizeF}\n*◉URL* : ${isUrl(text)}\n*◉EXT* : MP3\n*◉RESOLUTION* : ${args[1] || '360p'}\n\n*Miku bot INC*`
var buf = await getBuffer(media.thumb)
MikuBotInc.sendMessage(m.chat, { image: { url: media.thumb }, jpegThumbnail:buf, caption: `${capti}` }, { quoted: m })
MikuBotInc.sendMessage(m.chat, { video: { url: media.dl_link }, jpegThumbnail:buf, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `*Downloading From ${text}*` ,  quoted: m,contextInfo: { externalAdReply:{
title:"Miku bot V4",
body:"drips",
showAdAttribution: true,
mediaType:2,
thumbnail: fs.readFileSync(`./src/logo.jpg`) ,
mediaUrl:`https://youtu.be/KNu-gr2h7bo`, 
sourceUrl: `https://youtu.be/KNu-gr2h7bo` }}}, {quoted: m})
}
break
case 'ytshorts': case 'shorts': {
if (!text) return reply(`*Use ${prefix + command} enter pin link*`)
if (!isUrl(args[0]) && !args[0].includes('youtube')) throw '*The link you provided is not valid*'  
xa.Youtube(`${text}`).then(async (data) => {
if (data.medias[0].formattedSize.split('MB')[0] >= 100) return m.reply('*File Over Limit* '+util.format(data)) 
cap = `
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
    ⟮ _*◉Yᴏᴜᴛᴜʙᴇ Sʜᴏʀᴛꜱ◉*_ ⟯ 
   
0.02━◉━━━━━━━━━━━━3.26
      🔂   ⏪   ⏸️     ⏩  🎵\n\n\n\n*◉TITLE:* ${data.title}\n*◉QUALITY:* ${data.medias[0].quality}\n*◉SIZE:* ${data.medias[0].formattedSize}\n*◉DURATION* ${data.duration}\n*◉ID:* ${data.medias[0].cached}\n*◉LINK:* ${data.url}\n\n*Miku bot INC*`
buf = await getBuffer(data.thumbnail)
MikuBotInc.sendMessage(m.chat, { image: { url: data.thumbnail }, jpegThumbnail:buf, caption: `${cap}` }, { quoted: m })
MikuBotInc.sendMessage(m.chat, { video: { url: data.medias[0].url }, jpegThumbnail:buf, caption: `*◉TITLE:* ${data.title}\n*◉QUALITY:* ${data.medias[0].quality}\n*◉SIZE:* ${data.medias[0].formattedSize}` }, { quoted: m })  
}).catch((err) => {
reply(`*Failed to download and send media*`)
})
}
break
case 'getmusic': {
let { yta } = require('./lib/y2mate')   
if (!text) throw `Example : ${prefix + command} 1`
if (!m.quoted) return m.reply('*Reply message*')
if (!m.quoted.isBaileys) throw `*Can only reply to messages from bots*`
let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
if (!urls) throw `*Maybe the message you replied does not contain the ytsearch results`
let quality = args[1] ? args[1] : '128kbps'
let media = await yta(urls[text - 1], quality)
if (media.filesize >= 100000) return m.reply('*File Over Limit* '+util.format(media))
MikuBotInc.sendImage(m.chat, media.thumb, `*◉TITLE* : ${media.title}\n*◉FILE SIZE :* ${media.filesizeF}\n*◉URL :* ${urls[text - 1]}\n*◉EXT :* MP3\n*◉RESOLUTION :* ${args[1] || '128kbps'}`, m)
MikuBotInc.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
}
break
case 'getvideo': { 
let { ytv } = require('./lib/y2mate')  
if (!text) throw `Example : ${prefix + command} 1`
if (!m.quoted) return m.reply('Reply Message')
if (!m.quoted.isBaileys) throw `*Can only reply to messages from bots8`
let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
if (!urls) throw `*Maybe the message you replied does not contain the ytsearch result*`
let quality = args[1] ? args[1] : '360p'
let media = await ytv(urls[text - 1], quality)
if (media.filesize >= 100000) return m.reply('*File Over Limit* '+util.format(media))
MikuBotInc.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `*◉TITLE :* ${media.title}\n*◉FILESIZE :* ${media.filesizeF}\n*◉URL :* ${urls[text - 1]}\n*◉EXT:* MP3\n*◉RESOLUTION :* ${args[1] || '360p'}` }, { quoted: m })
}
case 'mediafire': {  
reply(mess.wait)         
if (!text) throw '*Enter a Link Query!*'
if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) throw '*The link you provided is not valid*'
const baby1 = await mediafireDl(text)
if (baby1[0].size.split('MB')[0] >= 100) return m.reply('*File Over Limit* '+util.format(baby1))
const result4 = `
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
    ⟮ _*◉Mᴇᴅɪᴀꜰɪʀᴇ Dᴏᴡɴʟᴏᴀᴅ◉*_ ⟯ 
          
*NAME* : ${baby1[0].nama}
*SIZE* : ${baby1[0].size}
*MIME* : ${baby1[0].mime}
*LINK* : ${baby1[0].link}\n

 _scraping metadata...._ 
*${botname}*`
reply(`${result4}`)
MikuBotInc.sendMessage(m.chat, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime ,  quoted : mudratunha, contextInfo: { externalAdReply:{
  title:"Miku bot V4",
  body:"SUBSCRIBE drips OFC",
  showAdAttribution: true,
  mediaType:2,
  thumbnail: fs.readFileSync(`./src/logo.jpg`) ,
  mediaUrl:`https://youtu.be/KNu-gr2h7bo`, 
sourceUrl: `https://youtu.be/KNu-gr2h7bo` }}}, {quoted: m})
}
break
case 'song': {
  reply(mess.wait)
  if (!text) throw `Example : ${prefix + command} story wa anime`
  let yts = require("yt-search")
  let search = await yts(text)                   
let sections = []   
let listmenu = [`ytmp4 ${search.all[0].url}`,`ytmp3 ${search.all[1].url}`,`ytmp4 ${search.all[2].url}`,`ytmp3 ${search.all[3].url}`,`ytmp4 ${search.all[4].url}`,`ytmp3 ${search.all[5].url}`,`ytmp4 ${search.all[6].url}`,`ytmp3 ${search.all[7].url}`,`ytmp4 ${search.all[8].url}`,`ytmp3 ${search.all[9].url}`,`ytmp4 ${search.all[10].url}`,`ytmp3 ${search.all[11].url}`,`ytmp4 ${search.all[12].url}`,`ytmp3 ${search.all[13].url}`,`ytmp4 ${search.all[14].url}`,`ytmp3 ${search.all[15].url}`,`ytmp4 ${search.all[16].url}`,`ytmp3 ${search.all[17].url}`,`ytmp4 ${search.all[18].url}`,`ytmp3 ${search.all[19].url}`]
      let listmenuu = [`VIDEO MP4⬤: ${search.all[0].title}`,`SONG MP3⬤: ${search.all[1].title}`,`VIDEO MP4⬤: ${search.all[2].title}`,`SONG MP3⬤: ${search.all[3].title}`,`VIDEO MP4⬤: ${search.all[4].title}`,`SONG MP3⬤: ${search.all[5].title}`,`VIDEO MP4⬤: ${search.all[6].title}`,`SONG MP3⬤: ${search.all[7].title}`,`VIDEO MP4⬤: ${search.all[8].title}`,`SONG MP3⬤: ${search.all[9].title}`,`VIDEO MP4⬤: ${search.all[10].title}`,`SONG MP3⬤: ${search.all[11].title}`,`VIDEO MP4⬤: ${search.all[12].title}`,`SONG MP3⬤: ${search.all[13].title}`,`VIDEO MP4⬤: ${search.all[14].title}`,`SONG MP3⬤: ${search.all[15].title}`,`VIDEO MP4⬤: ${search.all[16].title}`,`SONG MP3⬤: ${search.all[17].title}`,`VIDEO MP4⬤: ${search.all[18].title}`,`SONG MP3⬤: ${search.all[19].title}`]
      let listmenuuu = [`\n${search.all[0].description}`,`\n${search.all[1].description}`,`\n${search.all[2].description}`,`\n${search.all[3].description}`,`\n${search.all[4].description}`,`\n${search.all[5].description}`,`\n${search.all[6].description}`,`\n${search.all[7].description}`,`\n${search.all[8].description}`,`\n${search.all[9].description}`,`\n${search.all[10].description}`,`\n${search.all[11].description}`,`\n${search.all[12].description}`,`\n${search.all[13].description}`,`\n${search.all[14].description}`,`\n${search.all[15].description}`,`\n${search.all[16].description}`,`\n${search.all[17].description}`,`\n${search.all[18].description}`,`\n${search.all[19].description}`]
      let nombor = 1
      let startnum = 0
      let startnumm = 0
      for (let x of listmenu) {
      const list = {title: 'RESULT NUMBER ' + nombor++,
      rows: [
         {
          title: `${listmenuu[startnum++]}`,
          description: `${listmenuuu[startnumm++]}`,
          rowId: `${prefix}${x}`
}, 
]
}
sections.push(list)   
}
const sendm =  MikuBotInc.sendMessage(
m.chat, 
{
text: "\n\n*_DONE SCRAPING DATA_*",
footer: botname,
title: `HERE IS YOUR RESULTS CHOMIE FROM *${text}* _select song or video below_`,
buttonText: "CLICK HERE",
sections
}, { quoted : m })
}
break
case 'ytsaudio': case 'ytsmusic': case 'ytsearchmusic': {
                   reply(mess.wait)
                  if (!text) throw `Example : ${prefix + command} guspy warior ita seunononga`
                  let yts = require("yt-search")
                  let search = await yts(text)                
                  let no = 1
                  let sections = []   
                  for (let i of search.all) {
                  const list = {title: `${i.title}`,
                  rows: [
                      {
                      title: `${i.title}\n`, 
                      rowId: `${prefix}ytmp3 ${i.url}`,
                      description: `${i.description}\n*UPLOAD:* ${i.ago}\n*CHANNEL:* ${i.author.name}\n*VIEWS:* ${i.views}\n*DURATION:* ${i.timestamp}\n*LINK:* ${i.url}`
                      }, 
                      ]
                        }
                        sections.push(list)   
                        }
                        const sendm =  MikuBotInc.sendMessage(
                        m.chat, 
                        {
                        text: ` ${text}`,
                        footer: botname,
                        title: `${ucapannya2} ${pushname} Here are the search results from ytsaudio`,
                        buttonText: "LIST OF AUDIOS",
                        sections
                        }, { quoted : m })
                        }
                    break
  case 'ytsvideo': case 'ytsearchvideo': {
                  reply(mess.wait)
                  if (!text) throw `Example : ${prefix + command} seh calaz takambo tamba munyika`
                  let yts = require("yt-search")
                  let search = await yts(text)                
                  let no = 1
                  let sections = []   
                  for (let i of search.all) {
                  const list = {title: `${i.title}`,
                  rows: [
                      {
                      title: `${i.title}\n`, 
                      rowId: `${prefix}ytmp4 ${i.url}`,
                      description: `${i.description}\n*UPLOAD:* ${i.ago}\n*CHANNEL:* ${i.author.name}\n*VIEWS:* ${i.views}\n*DURATION* ${i.timestamp}\n*LINK:* ${i.url}`
                      }, 
                      ]
                        }
                        sections.push(list)   
                        }
                        const sendm =  MikuBotInc.sendMessage(
                        m.chat, 
                        {
                        text: ` ${text}`,
                        footer: botname,
                        title: `${ucapannya2} ${pushname} *Here are the search results from ytsvideo*`,
                        buttonText: "LIST OF VIDEOS",
                        sections
                        }, { quoted : m })
                        }
                    break
  case 'yts2': case 'youtubesearch2': case 'ytsearch2': {
    reply(mess.wait)
  
                  if (!text) throw `Example : ${prefix + command} story wa anime`
                  let yts = require("yt-search")
                  let search = await yts(text)                
                  let no = 1
                  let sections = []   
                  for (let i of search.all) {
                  const list = {title: `${i.title}`,
                  rows: [
                      {
                      title: `${i.title}\n\n`, 
                      rowId: `${prefix}ytmp3 ${i.url}`,
                      description: `${i.description}`
                      }, 
                      ]
                        }
                        sections.push(list)   
                        }
                        const sendm =  MikuBotInc.sendMessage(
                        m.chat, 
                        {
                        text: ` ${text}`,
                        footer: botname,
                        title: `*Here are the search results from yts2*`,
                        buttonText: "CLICK HERE",
                        sections
                        }, { quoted : m })
                        }
                    break
case 'tiktok2': {
if (!text) throw `Use example ${prefix + command} https://www.tiktok.com/@omagadsus/video/7025456384175017243`
if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) throw '*The link you provided is not valid*'

anu = await fetchJson(`https://violetics.pw/api/downloader/tiktok?apikey=df7d-425a-3bc8&url=${text}`)
let listmn = `*▊▊▊TIKTOK DL▊▊▊*\n\n*Title:* ${anu.result.title}\n*Author:* ${anu.result.id}\n*Url:* ${anu.result.url}`
buf = await getBuffer(anu.result.thumb)
buf2 = await getBuffer(anu.result.link_dl2)
let message = await prepareWAMessageMedia({ video: buf2, gifPlayback:false, jpegThumbnail:buf }, { upload: MikuBotInc.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
videoMessage: message.videoMessage,
hydratedContentText: listmn,
hydratedFooterText: `${botname}`,
hydratedButtons: [{
urlButton: {
displayText: 'SUBSCRIBE',
url: 'https://www.youtube.com/c/dripsOFC'
}
}, {
urlButton: {
displayText: 'GITHUB',
url: 'https://github.com/zim-bot/zimbot-v4/fork'
}
}, {
quickReplyButton: {
displayText: 'PING',
id: 'ping'
}
}, {
quickReplyButton: {
displayText: 'OWNER',
id: 'owner'
}  
}, {
quickReplyButton: {
displayText: 'DONATE',
id: 'donadi'
}
}]
}
}
}), { userJid: m.chat, quoted: m })
MikuBotInc.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'tiktok': case 'tiktoknowm': case 'tiktokwm': case 'tt': case 'ttnowm': case 'ttwm': {

  // //if 
   if (!text) throw '*Enter a Link Query!*'            
   
   let bocil = require('@bochilteam/scraper')    
   if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) throw '*The link you provided is not valid*'                
   bocil.tiktokdlv3(`${text}`).then(async (video) => {           
     var hadi = randomNomor(100)        
      var hadie = randomNomor(200)     
      var hadir = randomNomor(300)
       var memek = randomNomor(1000)                      
     let caption = `
     *▊▊▊TIKTOK DL▊▊▊*\n\n*AUTHOR* : drips\n*NICKNAME* : ${video.author.nickname}\n*CAPTION* : ${video.description}\n*QUALITY* : nowatermark\n*COMMENTS* : ${memek}\n*CREATE* ${hadir} Ago\n*LIKES* : ${hadi}\n*DISLIKE* : ${hadie}\n*SOURCE* : ${text}\n\n\n*Miku bot INC*`
     buf = await getBuffer(video.author.avatar)                
     MikuBotInc.sendMessage(m.chat, { image: { url: video.author.avatar }, jpegThumbnail:buf, caption: `${caption}` }, { quoted: m })
     MikuBotInc.sendMessage(m.chat, { video: { url: video.video.no_watermark }, jpegThumbnail:buf, mimetype: 'video/mp4', caption: `*Downloading From ${text}*` }, { quoted: m })               
   }).catch((err) => {
       reply(`*Failed to download media and send videos*`)
   })
}
break
case 'tiktok5': case 'tt5': {
  // //if 
if (!text) throw '*Enter a Link Query!*'            
   
let bocil = require('@bochilteam/scraper')    
if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) throw '*The link you provided is not valid*'                
bocil.tiktokdlv3(`${text}`).then(async (video) => {           
var hadi = randomNomor(100)        
var hadie = randomNomor(200)     
var hadir = randomNomor(300)
var memek = randomNomor(1000)                      
let caption = `*▊▊▊TIKTOK DL▊▊▊*\n\n*AUTHOR* : drips\n*NICKNAME* : ${video.author.nickname}\n*CAPTION* : ${video.description}\n*COMMENTS* : ${memek}\n*CREATE* ${hadir} Ago\n*LIKES* : ${hadi}\n*DISLIKES* : ${hadie}\n*SOURCE* : ${text}\n\n\n*Miku bot INC*`
buf = await getBuffer(video.author.avatar)                
MikuBotInc.sendMessage(m.chat, { image: { url: video.author.avatar }, jpegThumbnail:buf, caption: `${caption}` }, { quoted: m })
MikuBotInc.sendMessage(m.chat, { video: { url: video.video.no_watermark }, jpegThumbnail:buf, mimetype: 'video/mp4', caption: `*Downloading From ${text}*` }, { quoted: m })               
}).catch((err) => {
reply(`*Failed to download media and send videos*`)
})
}
break
case 'tt3': case 'tiktok3': {
  // //if 
if (!text) throw '*Enter a Link Query!*'            
   
let bocil = require('@bochilteam/scraper')    
if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) throw '*The link you provided is not valid*'                
bocil.tiktokdlv3(`${text}`).then(async (video) => {           
var hadi = randomNomor(100)        
var hadie = randomNomor(200)     
var hadir = randomNomor(300)
var memek = randomNomor(1000)                      
let caption = `**▊▊▊TIKTOK DL▊▊▊**\n\n*⬤AUTHOR* : drips\n*⬤NICKNAME* : ${video.author.nickname}\n*⬤CAPTION* : ${video.description}\n*⬤COMMENTS* : ${memek}\n*⬤CREATE* ${hadir} Ago\n*⬤LIKES* : ${hadi}\n*⬤DISLIKES* : ${hadie}\n*⬤ SOURCE* : ${text}`
buf = await getBuffer(video.author.avatar)                
let message = await prepareWAMessageMedia({ image: buf, jpegThumbnail: buf }, { upload: MikuBotInc.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: caption,
hydratedFooterText: `${botname}`,
hydratedButtons: [{
urlButton: {
displayText: 'SOURCE',
url: `${text}`
}
}, {
urlButton: {
displayText: 'GITHUB',
url: 'https://github.com/zim-bot/zimbot-v4/fork'
}
}, {
quickReplyButton: {
displayText: 'WATERMARK',
id: `ttwm ${text}`
}
}, {
quickReplyButton: {
displayText: 'NOWATERMARK',
id: `tiktoknowm ${text}`
}  
}, {
quickReplyButton: {
displayText: 'AUDIO',
id: `tiktokmp3 ${text}`
}
}]
}
}
}), { userJid: m.chat, quoted: m })
MikuBotInc.relayMessage(m.chat, template.message, { messageId: template.key.id })                
}).catch((err) => {
reply(`*Failed to download media and send videos*`)
})
}
break
case 'tiktokmp3': case 'tiktokaudio': { 	   

if (!text) throw '*Enter Link Tiktok!*'
if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) throw '*The link you provided is not valid*'
let got = require('./lib/tiktok.js')
   
got.tiktokDown(`${text}`).then(async (data) => {
MikuBotInc.sendMessage(m.chat, { audio: { url: data.result.nowatermark }, mimetype: 'audio/mp4'}, { quoted: m })
}).catch((err) => {
reply(`*Failed to download media and send audio*`)
})
}
break
case 'ttmp3': {
if (!text) throw `*Enter link tiktok example ${prefix + command} https://vt.tiktok.com/zgjbtcsdq/`  
if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) throw '*The link you provided is not valid*'
let get = require('./lib/scraper.js')
                                  
get.aiovideodl(`${text}`).then(async (res) => {        
var anu = await getBuffer(res.medias[2].url)         
MikuBotInc.sendMessage(m.chat, { audio: anu, mimetype: 'audio/mpeg'}, { quoted: m })
}).catch((err) => {
reply(`*Failed to download media and send videos*`)
})
}
break
case 'ig': case 'igdl': case 'instagram': {

  

if (!text) throw '*Please Enter Instagarm Link*' 

if (!isUrl(args[0]) && !args[0].includes('instagram.com')) throw '*The link you provided is not valid*'

   

                

let urlnya = text

 hx.igdl(urlnya)

 .then(async(result) => {	  


 var halo = 0		


MikuBotInc.sendMessage(m.chat, { image: { url: result.user.profilePicUrl }, jpegThumbnail: await getBuffer(result.user.profilePicUrl), caption: `*----「 INSTAGRAM DOWNLOADER 」----*\n\n*⬤ Username :* ${result.user.username}\n*⬤ Fullname :* ${result.user.fullName}\n*⬤ Followers :* ${result.user.followers}\n*⬤ Following :* ${result.user.following}\n*⬤ ID :* ${result.user.id}\n*⬤ Filetype :* ${result.medias[0].fileType}\n*⬤ Type :* ${result.medias[0].type}\n*⬤ Jumlah Media :* ${result.medias.length}\n*⬤ Url :* ${text}\n\n*Miku bot INC*` }, { quoted: m })	                                  	                      	            


for(let i of result.medias) {		


if(i.url.includes('mp4')){		           			    				


let link = await getBuffer(i.url)

MikuBotInc.sendMessage(m.chat, { video: link, jpegThumbnail: await getBuffer(i.preview), caption: `*Instagram ${i.type}*` }, { quoted: m })

} else {


let link = await getBuffer(i.url)

MikuBotInc.sendMessage(m.chat, { image: link, jpegThumbnail: await getBuffer(i.preview), caption: `*Instagram ${i.type}*` }, { quoted: m })          


}


 }

}).catch((err) => reply(`*Sorry Instagram Instagram ${text} Not found*`))

}		

break
case 'ig3': case 'igdl3': case 'instagram3': {

   ////if 
if (!text) throw '*Enter a Link Query!*'
if (!isUrl(args[0]) && !args[0].includes('instagram.com')) throw '*The link you provided is not valid*'
   
let bicil = require('@bochilteam/scraper')
let urlnya = text
 bicil.instagramdlv4(urlnya)
 .then(async(result) => {
for(let i of result){
if(i.url.includes('mp4')){
let link = await getBuffer(i.url)
MikuBotInc.sendMessage(m.chat, { video: link, jpegThumbnail: await getBuffer(i.thumbnail), caption: `*${botname}*` }, { quoted: m }) 
} else {
let link = await getBuffer(i.url)
MikuBotInc.sendMessage(m.chat, { image: link, jpegThumbnail: await getBuffer(i.thumbnail), caption: `*${botname}*` }, { quoted: m })                  
}
}
}).catch((err) => reply(`*Failed When Downloading And Sending Media*`))
}		
break
case 'ig2': case 'igdl2': case 'instagram2': {	            
   if (!text) throw '*Enter a Link Query!*'                
   if (!isUrl(args[0]) && !args[0].includes('instagram.com')) throw '*The link you provided is not valid*'
   
anu = await fetchJson(`https://api.akuari.my.id/downloader/igdl?link=${text}`)
var oi = 1
for(let i of anu.medias){                
var txt = `*▊▊▊INSTA DL▊▊▊*\n\n*Username:* ${anu.user.username}\n*Fullname:* ${anu.user.fullName}\n*Followers:* ${anu.user.followers}\n*Type:* ${anu.medias[0].type}\n*Tipe:* ${anu.medias[0].fileType}\n*ID:* ${anu.user.id}\n*Jumlah Media:* ${oi++}\n*Url:* ${text}\n\n*Miku bot INC*`
var buf = await getBuffer(anu.user.profilePicUrl)        
MikuBotInc.sendMessage(m.chat, { image: { url: anu.user.profilePicUrl }, jpegThumbnail:buf, caption: `${txt}` }, { quoted: m }).catch((err) => m.reply('error'))
MikuBotInc.sendMessage(m.chat, { video: { url: i.url }, jpegThumbnail:buf, caption: `${botname}`}, { quoted: m }).catch((err) => m.reply('error'))
}
}
break
case 'igimage': {	            
if (!text) throw '*Enter a Link Query!*'
const { instagramdl, instagramdlv2, instagramdlv3 } = require('@bochilteam/scraper')
if (!isUrl(args[0]) && !args[0].includes('instagram.com')) throw '*The link you provided is not valid*'
   
instagramdlv3(`${text}`).then(async (data) => {
for (let f of data) {                                      
MikuBotInc.sendMedia(m.chat, f.url, '', `Download Url Instagram From ${text}`, m)
}
}).catch((err) => {
reply(`*Failed to download media and send videos*`)
})
}
break
case 'igs': case 'igstory': case 'instagramstory': {

   

if (!text) throw 'Type  Username!' 

                 

let urlnya = text

 hx.igstory(urlnya)

 .then(async(result) => {

var halo = 0		

MikuBotInc.sendMessage(m.chat, { image: { url: result.user.profilePicUrl }, jpegThumbnail: await getBuffer(result.user.profilePicUrl), caption: `*----「 INSTAGRAM STORY 」----*\n\n*⬤ Username :* ${result.user.username}\n*⬤ Fullname :* ${result.user.fullName}\n*⬤ Followers :* ${result.user.followers}\n*⬤ Following :* ${result.user.following}\n*⬤ ID :* ${result.user.id}\n*⬤ Filetype :* ${result.medias[0].fileType}\n*⬤ Type :* ${result.medias[0].type}\n*⬤ Media :* ${result.medias.length}\n*⬤ Bio :* ${result.user.biography}\n\n*Miku bot INC*` }, { quoted: m })	                                  	                      	            

for(let i of result.medias) {

if(i.url.includes('mp4')){

let link = await getBuffer(i.url)

MikuBotInc.sendMessage(m.chat, { video: link, jpegThumbnail: await getBuffer(i.preview), caption: `*Story ${i.type}*` }, { quoted: m }) 

} else {

let link = await getBuffer(i.url)

MikuBotInc.sendMessage(m.chat, { image: link, jpegThumbnail: await getBuffer(i.preview), caption: `*Story ${i.type}*` }, { quoted: m })                  

}

}

}).catch((err) => reply(`*Sorry Story Instagram ${text} not found*`))

}		

break
case 'igs2': case 'igstory2': case 'instagramstory2':{
////if you (copy.codes) .then(give a credit)
if (!text) throw '*Enter a Link Query!*'
//   if (!isUrl(args[0]) && !args[0].includes('facebook.com')) throw '*The link you provided is not valid*'
   
anu = await fetchJson(`https://api.akuari.my.id/downloader/igStory?username=${text}`)        
for (let i of anu) {
tummb = await getBuffer(i.preview)         
MikuBotInc.sendMessage(m.chat, { video: { url: i.url }, jpegThumbnail:tummb, caption: `*${botname}*`}, { quoted: m }).catch((err) => m.reply('*Sorry, the feature is in error*'))
}
}
break
case 'igs3': case 'igstory3': case 'instagramstory3': {
  
if (!text) throw 'Enter Username!' 
   
let bicil = require('@bochilteam/scraper')
let urlnya = text
bicil.instagramStoryv2(urlnya)
.then(async(result) => {	  
var halo = 1		
MikuBotInc.sendMessage(m.chat, { image: { url: result.user.profilePicUrl }, jpegThumbnail: await getBuffer(result.user.profilePicUrl), caption: `*----「 INSTA DOWNLOADER 」----*\n\n*⬤ Username :* ${result.user.username}\n*⬤ Fullname :* ${result.user.fullName}\n*⬤ Followers :* ${result.user.followers}\n*⬤ Following :* ${result.user.following}\n*⬤ ID :* ${result.user.id}\n*⬤ Jumlah Media :* ${halo++}\n*⬤ Bio :* ${result.user.biography}\n\n*Miku bot INC*` }, { quoted: m })	                                  	                      	            
for(let i of result.results) {		
if(i.url.includes('mp4')){		           			    				
let link = await getBuffer(i.sourceUrl)
MikuBotInc.sendMessage(m.chat, { video: link, jpegThumbnail: await getBuffer(i.thumbnail), caption: `*Story ${i.type}*` }, { quoted: m })
} else {
let link = await getBuffer(i.url)
MikuBotInc.sendMessage(m.chat, { image: link, jpegThumbnail: await getBuffer(i.thumbnail), caption: `*Story ${i.type}*` }, { quoted: m })          
}
}
}).catch((err) => reply(`*Sorry Story Instagram ${text} Tnot found*`))
}		
break
case 'igtv': {	            
if (!text) throw '*Enter a Link Query!*'
const { instagramdl, instagramdlv2, instagramdlv3 } = require('@bochilteam/scraper')
if (!isUrl(args[0]) && !args[0].includes('instagram.com')) throw '*The link you provided is not valid*'
   
instagramdlv3(`${text}`).then(async (data) => {            
var buf = await getBuffer(data[0].thumbnail)        
MikuBotInc.sendMessage(m.chat, { video: { url: data[0].url }, jpegThumbnail:buf, caption: `${botname}`}, { quoted: m })
}).catch((err) => {
reply(`*Failed to download media and send videos*`)
})
}
break
case 'twitter': case 'td': case 'twitterdl': {     	             
if (!text) throw '*Enter a Link Query!*'
if (!isUrl(args[0]) && !args[0].includes('twitter.com')) throw '*The link you provided is not valid*'
     
xa.Twitter(`${text}`).then(async (data) => {                    
let txt = `*▊▊▊TWITTER DL▊▊▊*\n\n`
txt += `*⬤TITLE :* ${data.title}\n`
txt += `*⬤QUALITY :* ${data.medias[1].quality}\n`
txt += `*⬤TYPE :* ${data.medias[1].extension}\n`
txt += `*⬤SIZE :* ${data.medias[1].formattedSize}\n`
txt += `*⬤DURATION :* ${data.medias.length}\n`
txt += `*⬤URL :* ${data.url}\n\n`
txt += `*Miku bot INC*`
buf = await getBuffer(data.thumbnail)    
MikuBotInc.sendMessage(m.chat, { image: { url: data.thumbnail }, jpegThumbnail:buf, caption: `${txt}` }, { quoted: m })
for (let i of data.medias) {
MikuBotInc.sendMessage(m.chat, { video: { url: i.url }, jpegThumbnail:buf, caption: `*Downloading From ${text}*`}, { quoted: m })
}
}).catch((err) => {
reply(`*Failed to download media and send videos*`)
})
 }
 break
case 'twitter2': case 'td2': case 'twitterdl2': {     	             
if (!text) throw '*Enter a Link Query!*'
if (!isUrl(args[0]) && !args[0].includes('twitter.com')) throw '*The link you provided is not valid*'
     
xa.Twitter(`${text}`).then(async (data) => {
for (let x of data.medias) {
let txt = `*▊▊▊TWITTER DL▊▊▊*n\n`
txt += `*⬤TITLE :* ${data.title}\n`
txt += `*⬤QUALITY :* ${x.quality}\n`
txt += `*⬤TYPE:* ${x.extension}\n`
txt += `*⬤SIZE:* ${x.formattedSize}\n`
txt += `*⬤URL :* ${data.url}\n\n`
txt += `*Hi ${pushname}The bot is doing great job dont forget to subcribe*`
buf = await getBuffer(data.thumbnail)    
MikuBotInc.sendMessage(m.chat, { video: { url: x.url }, jpegThumbnail:buf, caption: `${txt}`}, { quoted: m })
}
}).catch((err) => m.reply(`Sorry the faiture is error`))   
 }
 break

case 'twittermp3': case 'twitteraudio': { 	             
  if (!text) throw '*Enter a Link Query!*'
  if (!isUrl(args[0]) && !args[0].includes('twitter.com')) throw '*The link you provided is not valid*'
     
  xa.Twitter(`${text}`).then(async (data) => {
  MikuBotInc.sendMessage(m.chat, { audio: { url: data.medias[1].url }, mimetype: 'audio/mp4'}, { quoted: m })
  }).catch((err) => {
  reply(`*Failed to download media and send audio*`)
})
 }
break
case 'fbdl': case 'fb': case 'facebook': case 'pesbuk': {     	    
         
if (!text) throw '*Enter a Link Query!*'
if (!isUrl(args[0]) && !args[0].includes('facebook.com')) throw '*The link you provided is not valid*'
              
let bocil = require('@bochilteam/scraper')  
bocil.facebookdlv2(`${text}`).then(async (data) => {                   

let txt = `*▊▊▊FB DOWNLOAD▊▊▊*\n\n`

txt += `*⬤TITLE :* ${data.title}\n`

txt += `*⬤QUALITY :* ${data.result[0].quality}\n`

txt += `*⬤DESCRIPTION :* ${data.description}\n`

txt += `*⬤ID :* Miku bot INC\n`

txt += `*⬤URL :* ${text}\n\n`

txt += `*Miku bot INC*`                

buf = await getBuffer(data.thumbnail)    

MikuBotInc.sendMessage(m.chat, { image: { url: data.thumbnail }, jpegThumbnail:buf, caption: `${txt}` }, { quoted: m })         

for (let i of data.result) {     

MikuBotInc.sendMessage(m.chat, { video: { url: i.url }, jpegThumbnail:buf, caption: `*⬤ Quality :* ${i.quality}`}, { quoted: m })

}          

}).catch((err) => {

reply(`*Failed When Downloading Media and Sending Files*`)

})

 }

 break
case 'fbmp3': case 'facebookmp3': case 'facebookaudio': {

if (!text) return m.reply(`Use${prefix + command} enter facebook link`)
if (!isUrl(args[0]) && !args[0].includes('facebook.com')) throw '*The link you provided is not valid*'
     
let noh = require('@bochilteam/scraper')                
noh.savefrom(`${text}`).then(async (anu) => {  
MikuBotInc.sendMessage(m.chat, { audio: { url: anu.url[0].url }, mimetype: 'audio/mp4' }, { quoted: m })      
}).catch((err) => {
reply(`*Failed to link to audio*`)
})
}
 break
case 'fb6': {   	            
if (!text) throw '*Enter a Link Query!*'
if (!isUrl(args[0]) && !args[0].includes('facebook.com')) throw '*The link you provided is not valid*'
                 
xa.Facebook(`${text}`).then(async (data) => {                   
let txt = `*▊▊▊FB6 DOWNLOAD▊▊▊*\n\n`
txt += `*⬤TITLE :* ${data.title}\n`
txt += `*⬤QUALITY :* ${data.medias[1].quality}\n`
txt += `*:⬤TYPE* ${data.medias[1].extension}\n`
txt += `*⬤SIZE :* ${data.medias[1].formattedSize}\n`
txt += `*⬤URL :* ${data.url}\n\n`
txt += `*Miku bot INC*`
buf = await getBuffer(data.thumbnail)    
MikuBotInc.sendMessage(m.chat, { image: { url: data.thumbnail }, jpegThumbnail:buf, caption: `${txt}` }, { quoted: m })              
MikuBotInc.sendMessage(m.chat, { video: { url: data.medias[1].url }, jpegThumbnail:buf, caption: `*⬤ Quality :* ${data.medias[1].quality}`}, { quoted: m })                
}).catch((err) => {
reply(`*Failed When Downloading Media and Sending Files*`)
})
}
break
case 'youtube': case 'ytdl': {
   ////if 
if (!text) throw '*Enter a Link Query!*'
if (!isUrl(args[0]) && !args[0].includes('youtube.com')) throw '*The link you provided is not valid*'
    
anu = await fetchJson(`https://api.akuari.my.id/downloader/youtube?link=${text}`)        
if (anu.filesize_video >= 100000) return m.reply('*File Over Limit* '+util.format(anu))
tummb = await getBuffer(anu.thumb)
audio = await getBuffer(anu.audio)        
MikuBotInc.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `${anu.title}`}, { quoted : m }).catch((err) => m.reply('*Sorry, the feature is in error*'))
MikuBotInc.sendMessage(m.chat, { video: { url: anu.video }, jpegThumbnail:tummb, caption: `${util.format(anu)}`}, { quoted: m }).catch((err) => m.reply('*Sorry, the feature is in error*'))
 }
 break
 case 'igreal': case 'instagramreal': {
   ////if 
if (!text) throw '*Enter a Link Query!*'
if (!isUrl(args[0]) && !args[0].includes('instagram.com')) throw '*The link you provided is not valid*'
     
anu = await fetchJson(`https://api.akuari.my.id/downloader/igdl?link=${text}`)        
tummb = await getBuffer(anu.medias[0].preview)         
MikuBotInc.sendMessage(m.chat, { video: { url: anu.medias[0].url }, jpegThumbnail:tummb, caption: `${util.format(anu)}`}, { quoted: m }).catch((err) => m.reply('*Sorry, the feature is in error*'))
 }
 break
 case 'cuttly': {
  //if 
if (!text) throw `Example : ${prefix + command} https://github.com`
anu = await fetchJson(`https://xteam.xyz/shorturl/cuttly?url=${text}&nama=alyabot&APIKEY=${setting.riy}`)
m.reply(`${anu.result}`)
}
break
case 'speedtest': {
  reply('Testing Speed...')
  let cp = require('child_process')
  let { promisify } = require('util')
  let exec = promisify(cp.exec).bind(cp)
  let o
  try {
  o = await exec('python speed.py')
  } catch (e) {
  o = e
  } finally {
  let { stdout, stderr } = o
  if (stdout.trim()) m.reply(stdout)
  if (stderr.trim()) m.reply(stderr)
  }
  }
  break
  case 'report': {
    if (!args.join(" ")) return m.reply(`Example : \n- ${prefix + command} feature ig error min\n- ${prefix + command} this user is spamming min`)
    teks = `*▊▊▊REPORT FEATURE▊▊▊*`
    teks1 = `\n\nNUMBER : @${m.sender.split("@")[0]}\n*REPORT :* ${args.join(" ")}`
    teks2 = `\n\nSucces send to owner`
    for (let i of owner) {
    MikuBotInc.sendMessage(i + "@s.whatsapp.net", {text: teks + teks1, mentions:[m.sender]}, {quoted:m})
    }
    MikuBotInc.sendMessage(m.chat, {text: teks + teks2 + teks1, mentions:[m.sender]}, {quoted:m})
    }
    break
    case 'request': case 'suggest': {
    if (!args.join(" ")) return m.reply(`Example : ${prefix + command} min add a downloader feature`)
    teks = `*▊▊▊REQUEST FEATURE▊▊▊*`
    teks1 = `\n\n*NUMBER :* @${m.sender.split("@")[0]}\n*REQUEST :* ${args.join(" ")}`
    teks2 = `\n\nSucces send to owner`
    for (let i of owner) {
    MikuBotInc.sendMessage(i + "@s.whatsapp.net", {text: teks + teks1, mentions:[m.sender]}, {quoted:m})
    }
    MikuBotInc.sendMessage(m.chat, {text: teks + teks2 + teks1, mentions:[m.sender]}, {quoted:m})
    }
    break
    case 'amino': {
      if (!text) throw `what are you looking for!, example : ${prefix + command} naruto`
      
      let anu = await fetchJson(`https://violetics.pw/api/search/amino?apikey=beta&query=${text}`)
      m.reply(`${util.format(anu)}`)
      }
  break
case 'anime': {

 

if (!text) return m.reply(`you are looking for what anime apa?\n\nEXAMPLE ${prefix}anime naruto`)


anu = await fetchJson(`https://api.jikan.moe/v4/anime?q=${text}`)

let sections = []   

for (let i of anu.data) {

const list = {title: `${i.title}`,

rows: [

{

title: `${i.title}`, 

rowId: `${prefix}animee ${i.mal_id}`,

description: `${i.synopsis}`

}, 

]

}

sections.push(list)   

}

const sendm =  MikuBotInc.sendMessage(

m.chat, 

{

text: `*Search Results From* ${text}`,

footer: botname,

title: "*▊▊▊ANIME▊▊▊*",

buttonText: "CLICK HERE",

sections

}, { quoted : m })

}

break
case 'animee': {

res = await fetchJson(`https://api.jikan.moe/v4/anime/${q}`)
let txt = `𝗔𝗻𝗶𝗺𝗲 𝗜𝗻𝗳𝗼\n\n*TITLE:* *${res.data.title}*\n*ENGLISH:* *${res.data.title_english}*\n*JAPANESE:* *${res.data.title_japanese}*\n*TYPE ANIME:* *${res.data.type}*\n*ADAPTER:* *${res.data.source}*\n*TOTAL EPISODE:* *${res.data.episodes}*\n*STATUS:* *${res.data.status}*\n*ONGOING:* *${res.data.airing ? 'Ya' : 'DRIS'}*\n*AIRED:* *${res.data.aired.string}*\n*DURATION:* *${res.data.duration}*\n*RATING:* *${res.data.rating}*\n*SCORE:* *${res.data.score}*\n*RANK:* *${res.data.rank}*\n*STUDIO:* *${res.data.studios[0].name}* `
MikuBotInc.sendMessage(m.chat, { image : { url : res.data.images.jpg.image_url}, caption : txt}, {quoted :m }).catch((err) => m.reply('sorry error'))
}
break
case 'bcgc': case 'bcgroup': {
if (!isCreator) throw mess.owner
if (!text) throw `*Type some text*\n\nExample : ${prefix + command} ZIM-BOT-INC`
let getGroups = await MikuBotInc.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
reply(`*Send Broadcast To* ${anu.length} *Group Chat, Time ${anu.length * 1.5} second*`)
for (let i of anu) {
await sleep(1500)
let btn = [{
urlButton: {
displayText: 'GITHUB',
url: 'https://github.com/zim-bot/zimbot-v4/fork'
}
}]
let txt = `「 *ZIMBOT BROADCAST* 」\n\n${text}`
MikuBotInc.send5ButImg(i, txt, botname, global.bc, btn)
}
reply(` *Send Broadcast To* ${anu.length} *Group*`)
}
break
case 'bc': case 'broadcast': case 'bcall': {
if (!isCreator) throw mess.owner
if (!text) throw `*Type some text*\n\nExample : ${prefix + command} ZIM-BOT-INC`
let anu = await store.chats.all().map(v => v.id)
reply(`*Send Broadcast To* ${anu.length} Chat\nTime ${anu.length * 1.5} second`)
for (let yoi of anu) {
await sleep(1500)
let btn = [{
urlButton: {
displayText: 'GITHUB',
url: 'https://github.com/zim-bot/zimbot-v4/fork'
}
}]
let txt = `「 *ZIMBOT BROADCAST* 」\n\n${text}`
MikuBotInc.send5ButImg(yoi, txt, botname, global.bc, btn)
}
reply('*Success Broadcast*')
}
break
case 'bc2': case 'bcloc': {
if (!isCreator) throw mess.owner
if (!text) throw `*Type some text*\n\nExample : ${prefix + command} drips|hi5`
let anu = await store.chats.all().map(v => v.id)
let [melo, melo2] = text.split`|`
reply(`*Send Broadcast To* ${anu.length} Chat\nTime ${anu.length * 1.5} minutes`)
for (let yoi of anu) {
await sleep(1500)
var button = [{ buttonId: `${prefix}ho`, buttonText: { displayText: `${melo2}` }, type: 1 }]              
MikuBotInc.sendMessage(yoi, { caption: `${melo}`, location: { jpegThumbnail: await getBuffer(picak+'Brodcast') }, buttons: button, footer: `${botname}`, mentions: [m.sender] })
}		
}
break
case 'bcimage': case 'bcvideo': case 'bcaudio': {
if (!isCreator) throw mess.owner
if (!/video/.test(mime) && !/image/.test(mime) && !/audio/.test(mime)) throw `*Send/Reply Video/Audio/Image You Want to Broadcast With Caption* ${prefix + command}`
let anu = await store.chats.all().map(v => v.id)
let ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "6289523258649-1604595598@g.us"}, "message": {orderMessage: {itemCount: 2022,status: 200, thumbnail: fs.readFileSync('./src/logo.jpg'), surface: 200, message: `ZIM-BOT-INC`, orderTitle: 'ZIM-BOT-INC', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
reply(`*Send Broadcast To* ${anu.length} *Group Chat, Time ${anu.length * 1.5} minutes*`)
for (let i of anu) {
await sleep(1500)
let butoon = [{
urlButton: {
displayText: `GITHUB`,
url: 'https://github.com/zim-bot/zimbot-v4/fork'
}
},
{
quickReplyButton: {
displayText: 'MENU',
id: 'menu'
}
}]
let media = await MikuBotInc.downloadAndSaveMediaMessage(quoted)
let buffer = fs.readFileSync(media)
if (/webp/.test(mime)) {
MikuBotInc.sendMessage(i, { sticker: { url: media } }, { quoted: ftroli })
} else if (/image/.test(mime)) {
let junn = `*_BROADCAST IMAGE_*${text ? '\n\n' + text : ''}`
MikuBotInc.send5ButImg(i, junn, `${global.botname}`, buffer, butoon)
} else if (/video/.test(mime)) {
let junn = `*_BROADCAST VIDIO_*${text ? '\n\n' + text : ''}`
MikuBotInc.sendMessage(i, {video: buffer, caption: `${junn}`}, { quoted: ftroli })
} else if (/audio/.test(mime)) {
MikuBotInc.sendMessage(i, {audio: buffer, mimetype: 'audio/mpeg'}, { quoted : ftroli })
} else {
reply(`*Send/Reply Video/Audio/Image You Want to Broadcast With Caption* ${prefix + command}`)
}
await fs.unlinkSync(media)
}
reply(` *Send Broadcast To* ${anu.length} *Chats*`)
}
break
case 'bctext': {
if (!isCreator) throw mess.owner
if (!text) throw `*Type some text*\n\nExample : ${prefix + command} zim-ot`
//let ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "6289523258649-1604595598@g.us"}, "message": {orderMessage: {itemCount: 666666666,status: 200, thumbnail: await getBuffer(picak+'Brodcast'), surface: 200, message: `© ${botname}`, orderTitle: 'memek', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
let ftroli = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `6283136505591-1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `© ${botname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${MikuBotInc.user.name},;;;\nFN:${botname},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': await getBuffer(picak+'Brodcast'), thumbnail: await getBuffer(picak+'Brodcast'),sendEphemeral: true}}}
let anu = await store.chats.all().map(v => v.id)
reply(`*Send Broadcast To* ${anu.length} Chat\n*Time ${anu.length * 1.5} seconds*`)
for (let yoi of anu) {
await sleep(1500)
MikuBotInc.sendMessage(yoi, {text:`${text}`}, {quoted:blessedtuna})
}
reply('*Success Broadcast*')
}
break
case 'bcvid': case 'bcvideo': {
if (!isCreator) throw mess.owner
if (!text) throw `*use ${prefix + command}|text*`
let buf = `https://telegra.ph/file/f8b17ce3b28bb5f25f5e1.mp4`
let ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "6289523258649-1604595598@g.us"}, "message": {orderMessage: {itemCount: 999999999999,status: 200, thumbnail: await getBuffer(picak+'Brodcast'), surface: 200, message: `© ${botname}`, orderTitle: 'memek', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}                
let anu = await store.chats.all().map(v => v.id)
reply(`*Send Broadcast To* ${anu.length} Chat\n*Time ${anu.length * 1.5} minute*`)
for (let yoi of anu) {
await sleep(1500)		    
MikuBotInc.sendMessage(yoi, { video: await getBuffer(buf), jpegThumbnail: await getBuffer(picak+'Brodcast'), caption: `${text}` }, { quoted: ftroli}).catch ((err) => m.reply('*Sorry, failed to send the video*'))
}
reply('*Sucecess Broadcast*')
}
break
case 'sticker': case 's': case 'stickergif': case 'sgif': {
 if (!quoted) throw `Reply Video/Image With Caption ${prefix + command}`
 replay(mess.wait)
  if (/image/.test(mime)) {
   let media = await quoted.download()
   let encmedia = await MikuBotInc.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
   await fs.unlinkSync(encmedia)
 } else if (/video/.test(mime)) {
   if ((quoted.msg || quoted).seconds > 11) return reply('Maximum 10 seconds!')
   let media = await quoted.download()
   let encmedia = await MikuBotInc.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
   await fs.unlinkSync(encmedia)
 } else {
   throw `Send Image/Video With Caption ${prefix + command}\nVideo Duration 1-9 Seconds`
   }
 }
 break
case 'swm': case 'stickerwm': case 'wm': {
  reply(mess.wait)
  if (!args.join(" ")) return m.reply(`Example :\n${prefix}swm drips love | tuna`)
  const swn = args.join(" ")
  const pcknm = swn.split("|")[0];
  const atnm = swn.split("|")[1];
  if (!/webp/.test(mime)) throw `*reply sticker with caption* *${prefix + command}*`
  if (m.quoted.isAnimated === true) {
  MikuBotInc.downloadAndSaveMediaMessage(quoted, "gifee")
  MikuBotInc.sendMessage(m.chat, {sticker:fs.readFileSync("gifee.webp")},{quoted:m})
  } else if (/image/.test(mime)) {
  let media = await quoted.download()
  let encmedia = await MikuBotInc.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
  await fs.unlinkSync(encmedia)
  } else if (/video/.test(mime)) {
  if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
  let media = await quoted.download()
  let encmedia = await MikuBotInc.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
  await fs.unlinkSync(encmedia)
  } else {
  reply(`*Send Image/Video With Caption* ${prefix + command}\n*Duration Video 1-9 seconds*`)
  }
  }
break
case 'smeme': case 'stickmeme': case 'stikmeme': case 'stickermeme': case 'stikermeme': {
reply(mess.wait)
if (!/image/.test(mime)) throw respond
if (!text) throw respond
reply(mess.wait)
atas = text.split('|')[0] ? text.split('|')[0] : '-'
bawah = text.split('|')[1] ? text.split('|')[1] : '-'
let dwnld = await quoted.download()
let { floNime } = require('./lib/uploader')
let fatGans = await floNime(dwnld)
let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${fatGans.result.url}`
let FaTiH = await MikuBotInc.sendImageAsSticker(m.chat, smeme, m, { packname: global.packname, author: global.auhor })
await fs.unlinkSync(FaTiH)
}
break
case 'brainly': {
reply(mess.wait)
if (!text) throw `Example : ${prefix + command} apa itu wibu`           
x = await fetchJson(`https://api.violetics.pw/api/media/brainly?apikey=beta&query=${text}`)                       
ini_txt = '*BRAINLY SEARCH*\n\n'
for (let i of x.result) {       
ini_txt += `*QUESTION* : ${i.pertanyaan}\n`
ini_txt += `*ANSWER* : ${i.jawaban}\n`                     
}   
reply(`${ini_txt}`)
}
break
case 'searchanime': {
reply(mess.wait)
if (!text) throw `Example : ${prefix + command} nama anime`
anu = await getBuffer(`https://api.akuari.my.id/search/konachan?query=${text}`)
MikuBotInc.sendMessage(m.chat, { image: anu, caption: `${command}` }, { quoted: m}).catch((err) => m.reply('*Sorry Xteam server is down*'))
}
break

//----END HERE------\\

//CREATED BY Miku bot INC

//----PHOT FILTER-----\\
break
case 'angie': 
case 'aria':
case 'attic': 
case 'blackandwhite': 
case 'chorme1977': 
case 'constrastbandw':
case 'creamy': 
case 'duotone': 
case 'eva': 
case 'goldenhour': 
case 'hana': 
case 'hdr': 
case 'japanese':
case 'lana': 
case 'lavander': 
case 'lemonande': 
case 'lightleak': 
case 'lisa': 
case 'lomo': 
case 'milk': 
case 'molly':
case 'monochrome': 
case 'morning': 
case 'movie': 
case 'orton': 
case 'paretro': 
case 'perfectbandw': 
case 'plumy': 
case 'retrolga': 
case 'ruby': 
case 'sand': 
case 'sapphire': 
case 'sepia': 
case 'softsepia': 
case 'solarize': 
case 'sphinx':
case 'venus': 
case 'viewfinder': 
case 'warmsunset': {
if (!/image/.test(mime)) throw `*Send/Reply Image With Caption* ${prefix + command}`
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
let media = await MikuBotInc.downloadAndSaveMediaMessage(quoted)   
let anu = await TelegraPh(media)
let buf = await getBuffer(`https://violetics.pw/api/photofilter/${command}?apikey=beta&image=${anu}`)
MikuBotInc.sendMessage(m.chat, { image: buf, jpegThumbnail:buf, caption: `PhotoFilter ${command}` ,  quoted: m, contextInfo: { externalAdReply:{
  title:"Miku bot V4",
  body:"SUBSCRIBE drips OFC",
  showAdAttribution: true,
  mediaType:2,
  thumbnail: fs.readFileSync(`./src/logo.jpg`) ,
  mediaUrl:`https://youtu.be/KNu-gr2h7bo`, 
sourceUrl: `https://youtu.be/KNu-gr2h7bo` }}}, {quoted: m})
}
 
//----END HERE-------\\

//CREATED BY Miku bot INC

//----TEXTPRO--------\\
case 'candy':
case 'christmas': 
case '3dchristmas': 
case 'sparklechristmas':
case 'deepsea': 
case 'scifi': 
case 'rainbow2': 
case 'waterpipe': 
case 'spooky': 
case 'pencil': 
case 'circuit': 
case 'discovery': 
case 'metalic': 
case 'fiction': 
case 'demon': 
case 'transformer': 
case 'berry': 
case 'thunder': 
case '3dstone2': 
case 'neonlight': 
case 'glitch': 
case 'harrypotter': 
case 'brokenglass': 
case 'papercut': 
case 'watercolor': 
case 'multicolor': 
case 'neondevil': 
case 'underwater': 
case 'graffitibike':
case 'snow': 
case 'cloud': 
case 'honey': 
case 'ice': 
case 'fruitjuice': 
case 'biscuit': 
case 'wood': 
case 'chocolate': 
case 'strawberry': 
case 'matrix': 
case 'blood': 
case 'dropwater': 
case 'toxic': 
case 'lava': 
case 'rock': 
case 'bloodglas': 
case 'halloween': 
case 'darkgold': 
case 'joker': 
case 'wicker':
case 'firework': 
case 'skeleton': 
case 'blackpink': 
case 'sand': 
case 'glue': 
case '1917': 
case 'leaves': 
case 'demon': {
if (!q) return reply(`Example : ${prefix + command} ${global.ownername}`) 
reply(mess.wait)
let link
if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
if (/3dstone2/.test(command)) link = 'https://textpro.me/create-a-3d-stone-text-effect-online-for-free-1073.html'
if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
if (/rock/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
if (/halloween/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
if (/blackpink/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'
let anu = await maker.textpro(link, q)
MikuBotInc.sendMessage(m.chat, { image: { url: anu }, caption: `Made by ${global.botname}` ,  quoted: m, contextInfo: { externalAdReply:{
  title:"Miku bot V4",
  body:"SUBSCRIBE drips OFC",
  showAdAttribution: true,
  mediaType:2,
  thumbnail: fs.readFileSync(`./src/logo.jpg`) ,
  mediaUrl:`https://youtu.be/KNu-gr2h7bo`, 
sourceUrl: `https://youtu.be/KNu-gr2h7bo` }}}, {quoted: m})
}
//----END HERE--------\\

//CREATED BY drips

//----PHOTOOXY------\\
case 'silk':  
case '3dnature': 
case 'bevel': 
case 'birthdaycake': 
case  'burnpaper':  
case 'coffee': 
case 'coffee-heartcup': 
case 'embroiderytext': 
case 'flaming': 
case 'flowertypo': 
case 'funnycup': 
case 'fur': 
case 'gerbang': 
case 'glowrainbow': 
case 'gradientavatar': 
case 'graffititext': 
case 'harrypotter': 
case 'lovemessage': 
case 'luxuryroyal': 
case 'neonlight': 
case 'sweetcandy': 
case 'summertext': 
case 'woodheart': 
case 'woodblock': 
case 'yellowroses': 
case 'wolfmetal': 
case 'underwaterocean': {
if (!text) throw `Example : ${prefix + command} text`
anu = await getBuffer(`https://violetics.pw/api/photooxy/${command}?apikey=beta&text=${text}`)
MikuBotInc.sendMessage(m.chat, { image: anu, caption: `*PHOTO OXY ${command}*` , quoted: m, contextInfo: { externalAdReply:{
  title:"Miku bot V4",
  body:"SUBSCRIBE drips OFC",
  showAdAttribution: true,
  mediaType:2,
  thumbnail: fs.readFileSync(`./src/logo.jpg`) ,
  mediaUrl:`https://youtu.be/KNu-gr2h7bo`, 
sourceUrl: `https://youtu.be/KNu-gr2h7bo` }}}, {quoted: m})
}
break

//---END HERE------\\

//CREATED BY drips

//----EPHOTO-------\\
case '3d-wood': 
case 'angels-wings': 
case 'snake-text': 
case 'redhot-metal2': 
case 'sandsummer-beach': 
case 'snow-text': 
case 'water-3d': 
case 'water-effect': 
case 'wet-glass': 
case 'status-mood2': 
case 'summerysand': {
if (!text) throw `Example : ${prefix + command} nama anime`
anu = await getBuffer(`https://violetics.pw/api/ephoto360/${command}?apikey=beta&text=${text}`)
MikuBotInc.sendMessage(m.chat, { image: anu, caption: `*EPHOTO ${command}*` ,  quoted: m, contextInfo: { externalAdReply:{
  title:"Miku bot V4",
  body:"SUBSCRIBE drips OFC",
  showAdAttribution: true,
  mediaType:2,
  thumbnail: fs.readFileSync(`./src/logo.jpg`) ,
  mediaUrl:`https://youtu.be/KNu-gr2h7bo`, 
sourceUrl: `https://youtu.be/KNu-gr2h7bo` }}}, {quoted: m})
}
break

case 'once': case 'toonce': { //by drips
if (!quoted) throw 'Reply Image'
if (/image/.test(mime)) {
anu = await MikuBotInc.downloadAndSaveMediaMessage(quoted)
MikuBotInc.sendMessage(from, {image: {url: anu},viewOnce : true},{quoted: m })
} else if (/video/.test(mime)) {
anu = await MikuBotInc.downloadAndSaveMediaMessage(quoted)
MikuBotInc.sendMessage(m.chat, {video: {url: anu},viewOnce : true},{quoted: m })
}
}
break

case 'ary': 
case 'arygameplays': {
replay(mess.wait)
let buttons = [
{buttonId: `ary`, buttonText: {displayText: 'NEXT'}, type: 1}
]
let anu = await fetchJson(`https://wallebotapi.mitomods.com/docs/random/arygameplays?apikey=Donitas`)
let buttonMessage = {
image: { url: `${anu.result}` },
caption: `Arygameplays`,
footer: global.botnma,
buttons: buttons,
headerType: 4
}
MikuBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
break
case 'emojiapple':
if (!q) return reply("*Insert emoji, maximum 1 emoji, example?*" + ` ${prefix + command} 😀`)
reply("[❗] *BEING PROCESSED*")
emote(q, "0")
break
case 'emojigoogle':
if (!q) return reply("*Insert emoji, maximum 1 emoji, example?*" + ` ${prefix + command} 😀`)
reply("[❗] *BEING PROCESSED*")
emote(q, "1")
break
case 'emojisamsung':
if (!q) return reply("*Insert emoji, maximum 1 emoji, example?*" + ` ${prefix + command} 😀`)
reply("[❗] *BEING PROCESSED*")
emote(q, "2")
break
case 'emojimicrosoft':
if (!q) return reply("*Insert emoji, maximum 1 emoji, example?*" + ` ${prefix + command} 😀`)
reply("[❗] *BEING PROCESSED*")
emote(q, "3")
break
case 'emojiwhatsapp':
if (!q) return reply("*Insert emoji, maximum 1 emoji, example?*" + ` ${prefix + command} 😀`)
reply("[❗] *BEING PROCESSED*")
emote(q, "4")
break
case 'emojitwitter':
if (!q) return reply("*Insert emoji, maximum 1 emoji, example?*" + ` ${prefix + command} 😀`)
reply("[❗] *BEING PROCESSED*")
emote(q, "5")
break
case 'emojifecabook':
if (!q) return reply("*Insert emoji, maximum 1 emoji, example?*" + ` ${prefix + command} 😀`)
reply("[❗] *BEING PROCESSED*")
emote(q, "6")
break
case 'emojiskype':
if (!q) return reply("*Insert emoji, maximum 1 emoji, example?*" + ` ${prefix + command} 😀`)
reply("[❗] *BEING PROCESSED*")
emote(q, "7")
break
case 'emojijoy':
if (!q) return reply("*Insert emoji, maximum 1 emoji, example?*" + ` ${prefix + command} 😀`)
reply("[❗] *BEING PROCESSED*")
emote(q, "8")
break
case 'emojimoji':
if (!q) return reply("*Insert emoji, maximum 1 emoji, example?*" + ` ${prefix + command} 😀`)
reply("[❗] *BEING PROCESSED*")
emote(q, "9")
case 'emojipedia':
if (!q) return reply("*Insert emoji, maximum 1 emoji, example?*" + ` ${prefix + command} 😀`)
reply("[❗] *BEING PROCESSED*")
emote(q, "10")
break
case 'emojilg':
if (!q) return reply("*Insert emoji, maximum 1 emoji, example?*" + ` ${prefix + command} 😀`)
reply("[❗] *BEING PROCESSED*")
emote(q, "11")
break
case 'news':
// and we need jsdom and Readability to parse the article HTML

let urltt = 'https://newsapi.org/v2/everything?' +
`q=${text}&` +
'sortBy=publishedAt&' +
'apiKey=306032cefd134ab38660d7db51dd18d1';
// First lets get some search data from News API

// Build the URL we are going request. This will get articles related to Apple and sort them newest first

// Make the request with axios' get() function
axios.get(urltt).then(function(r1) {

  // At this point we will have some search results from the API. Take the first search result...
  let firstResult = r1.data.articles[0];

  // ...and download the HTML for it, again with axios
  axios.get(firstResult.url).then(function(r2) {

    // We now have the article HTML, but before we can use Readability to locate the article content we need jsdom to convert it into a DOM object
    let dom = new JSDOM(r2.data, {
      url: firstResult.url
    });

    // now pass the DOM document into readability to parse
    let article = new Readability(dom.window.document).parse();

    // Done! The article content is in the textContent property
    console.log(color(article.textContent));
    reply(article.textContent)
  })
})
break
/* case 'drips':
  // First lets get some search data from News API

// Build the URL we are going request. This will get articles related to Apple and sort them newest first
let urlttt = 'https://newsapi.org/v2/top-headlines?' +
`country=za&apiKey=` +
'306032cefd134ab38660d7db51dd18d1';

// Make the request with axios' get() function
axios.get(urlttt).then(function(r1) {

  // At this point we will have some search results from the API. Take the first search result...
  let firstResult = r1.data.articles[0];

  // ...and download the HTML for it, again with axios
  axios.get(firstResult.url).then(function(r2) {

    // We now have the article HTML, but before we can use Readability to locate the article content we need jsdom to convert it into a DOM object
    let dom = new JSDOM(r2.data, {
      url: firstResult.url
    });

    // now pass the DOM document into readability to parse
    let article = new Readability(dom.window.document).parse();

    // Done! The article content is in the textContent property
    console.log(color(article.textContent));
    reply(article.textContent)
  })
})
    break
    */
case 'topheadlines':
  
  // First lets get some search data from News API

// Build the URL we are going request. This will get articles related to Apple and sort them newest first
let dhongi = 'https://newsapi.org/v2/top-headlines/sources?bbc-news&apiKey=' +
'306032cefd134ab38660d7db51dd18d1';

// Make the request with axios' get() function
axios.get(dhongi).then(function(r1) {

  // At this point we will have some search results from the API. Take the first search result...
  let firstResult = r1.data.articles[0];

  // ...and download the HTML for it, again with axios
  axios.get(firstResult.url).then(function(r2) {

    // We now have the article HTML, but before we can use Readability to locate the article content we need jsdom to convert it into a DOM object
    let dom = new JSDOM(r2.data, {
      url: firstResult.url
    });

    // now pass the DOM document into readability to parse
    let article = new Readability(dom.window.document).parse();

    // Done! The article content is in the textContent property
    console.log(color(article.textContent));
    reply(article.textContent)
  })
})
  break
  case 'googlenews':
  const request = require('request');

const options = {
  method: 'GET',
  url: 'https://google-news1.p.rapidapi.com/search',
  qs: {
    q: `${text}`,
    country: 'ZW',
    lang: 'en',
    source: 'iharare.com',
    limit: '100',
    when: '30d'
  },
  headers: {
    'X-RapidAPI-Key': '837661b454msh274b6753ca80823p11c653jsn973bb2a55a34',
    'X-RapidAPI-Host': 'google-news1.p.rapidapi.com',
    useQueryString: true
  }
};

request(options, function (error, response, body) {
	if (error) throw new Error(error);

	reply(body);
});
break
case 'hackernews':
const drips = {
  method: 'GET',
  url: 'https://community-hacker-news-v1.p.rapidapi.com/topstories.json',
  qs: {print: 'pretty'},
  headers: {
    'X-RapidAPI-Key': '837661b454msh274b6753ca80823p11c653jsn973bb2a55a34',
    'X-RapidAPI-Host': 'community-hacker-news-v1.p.rapidapi.com',
    useQueryString: true
  }
};
let dhuripi = require('request')
dhuripi(drips, function (error, response, body) {
	if (error) throw new Error(error);
reply(body)
	console.log(body);
});
break
case 'gnews':
reply(mess.wait)
const dripbabe = {
  method: 'GET',
  url: 'https://google-news.p.rapidapi.com/v1/search',//By drips 
  qs: {q: `${text}`, country: 'ZW', lang: 'en'}, //put your country on string: country://
  headers: {
    'X-RapidAPI-Key': '837661b454msh274b6753ca80823p11c653jsn973bb2a55a34',// 3 request per hour
    'X-RapidAPI-Host': 'google-news.p.rapidapi.com',// if you with more request please visit https://rapidapi.com/newscatcher-api-newscatcher-api-default/api/google-news/pricing
    useQueryString: true
  }
};
let gnews = require('request')
gnews(dripbabe, function (error, response, body) {
	if (error) throw new Error(error);
  reply(body);
	console.log(body);
});
break

case 'news2':
  reply(mess.wait)
const luckysure = {
  method: 'GET',
  url: 'https://free-news.p.rapidapi.com/v1/search',
  qs: {q: `${text}`, lang: 'en'},
  headers: {
    'X-RapidAPI-Key': '837661b454msh274b6753ca80823p11c653jsn973bb2a55a34',// 1 request per second (unlimited)
    'X-RapidAPI-Host': 'free-news.p.rapidapi.com',//removing credtis is not an option
    useQueryString: true
  }
};
let stanto = require('request')
stanto(luckysure, function (error, response, body) {
	if (error) throw new Error(error);
   reply(body);
	console.log(body);
});
break
case 'playstore': case 'apk':
reply(mess.wait)
if(!q) return reply('what are you looking for?')
let play = await hx.playstore(q)
let storup = ''
for (let i of play){
 storup += `\n*「 *PLAY STORE* 」*\n
- *Name* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Dev Link* : ${i.link_dev}\n❉─────────────────────❉`
}
reply(storup)
break
case 'igsearch':
  const dripsig = {
    method: 'GET',
    url: 'https://instagram-data1.p.rapidapi.com/user/search',//By drips
    qs: {keyword: `${text}`},
    headers: {
      'X-RapidAPI-Key': '837661b454msh274b6753ca80823p11c653jsn973bb2a55a34',// 25 request per month if you unlimited requests buy api here visit https://rapidapi.com/logicbuilder/api/instagram-data1/pricing
      'X-RapidAPI-Host': 'instagram-data1.p.rapidapi.com',//removing credits is not an option
      useQueryString: true
    }
  };
  let magwettta = require('request')
  magwettta(dripsig, function (error, response, body) {
    if (error) throw new Error(error);
    reply(body);
    console.log(body);
  });
  break
  case 'apkdl': case 'apkmod': case 'apkd': {      
  
  if (!text) return m.reply(`Use${prefix + command} vpn`) 
  let noh = require('./lib/myfunc2')                
  noh.rexdl(`${text}`).then(async (data) => {
  let sections = []   
  for (let i of data) {
  const list = {title: `${i.judul}`,
  rows: [
	    {
	     title: `${i.judul}`, 
	     rowId: `${prefix}donlod ${i.link}`,
	     description: `CATEGORY: ${i.kategori}\nPUBLISH: ${i.upload_date}\nINFORMATION: ${i.deskripsi}`
	    }, 
	    ]
     }
     sections.push(list)   
     }
  const sendm =  MikuBotInc.sendMessage(
      m.chat, 
      {
       text: `${ucapannya2} ${pushname} *Search Results From ${text} Click the button below to choose*`,
       footer: `© Miku bot INC`,
       title: "*▊▊▊APK DOWNLOAD▊▊▊*",
       buttonText: "CLICK HERE",
       sections
      }, { quoted : m })                 
                }).catch((err) => {
                    reply(`*${text} Not found*`)
                })
            }
            break
     
// https://hardianto.xyz/api/beta/hacker2?apikey=hardianto&pp=https://i.ibb.co/1s8T3sY/48f7ce63c7aa.jpg
  case 'ripmaker':
  if (!text) throw '*Enter a Link Query! Example: https://i.imgur.com/rANDwCP.jpeg*'
  var dripa = `https://hardianto.xyz/api/rip?image=${text}&apikey=hardianto` 
  dri = await getBuffer(dripa)
  MikuBotInc.sendMessage(m.chat, { image: dri,caption:'ZIM-BOT-V4' }, { quoted: m})

break// https://hardianto.xyz/api/beta/hacker2?apikey=hardianto&pp=https://i.ibb.co/1s8T3sY/48f7ce63c7aa.jpg
  case 'hackermaker':
  if (!text) throw '*Enter a Link Query! Example: https://i.imgur.com/rANDwCP.jpeg*'
  var dripa = `https://hardianto.xyz/api/beta/hacker2?apikey=hardianto&pp=${text}` 
  dri = await getBuffer(dripa)
  MikuBotInc.sendMessage(m.chat, { image: dri,caption:'ZIM-BOT-V4' }, { quoted: m})
break //https://hardianto.xyz/api/maker/carbon?code=const%20anto%20=%20require(%27pahala%27)&color=cyan&apikey=hardianto
 case 'codecolor':
    if (!text) throw '*Enter a text*'
    var dripa = `https://hardianto.xyz/api/maker/carbon?code=${text}&color=cyan&apikey=hardianto` 
    dri = await getBuffer(dripa)
    MikuBotInc.sendMessage(m.chat, { image: dri,caption:'ZIM-BOT-V4' }, { quoted: m})
  break 
case 'ipdomain':
    reply(mess.wait)
    const driphacker = {
      method: 'GET',
      url: 'https://find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com/iplocation',
      qs: {ip: `${text}`, apikey: '873dbe322aea47f89dcf729dcc8f60e8'},
      headers: {
        'X-RapidAPI-Key': '837661b454msh274b6753ca80823p11c653jsn973bb2a55a34',
        'X-RapidAPI-Host': 'find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com',
        useQueryString: true
      }
    };
    let mhamha = require('request')
    mhamha(driphacker, function (error, response, body) {
      if (error) throw new Error(error);
       reply(body);
      console.log(body);
    });
    break
    case 'ip':
      reply(mess.wait)
      const dripsba = {
        method: 'GET',
        url: 'https://find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com/iplocation',
        qs: {apikey: '873dbe322aea47f89dcf729dcc8f60e8'},
        headers: {
          'X-RapidAPI-Key': '837661b454msh274b6753ca80823p11c653jsn973bb2a55a34',
          'X-RapidAPI-Host': 'find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com',
          useQueryString: true
        }
      };
      let bhudhi = require('request')
      bhudhi(dripsba, function (error, response, body) {
        if (error) throw new Error(error);
        reply(body);
        console.log(body);
      });
break
case 'cry':case 'kill':case 'hug':case 'pat':case 'lick':case 'kiss':case 'bite':case 'yeet':case 'neko':case 'bully':case 'bonk':case 'wink':case 'poke':case 'nom':case 'slap':case 'smile':case 'wave':case 'awoo':case 'blush':case 'smug':case 'glomp':case 'happy':case 'dance':case 'cringe':case 'cuddle':case 'highfive':case 'shinobu':case 'megumin':case 'handhold':
reply(mess.wait)
axios.get(`https://api.waifu.pics/sfw/${command}`)
.then(({data}) => {
MikuBotInc.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
break
case 'whois':
  reply(mess.wai)
  var ip = ''; // Leave blank to lookup current IP address
var XMLHttp = new XMLHttpRequest();
XMLHttp.onreadystatechange = function() {
	if(this.readyState == 4 && this.status == 200) {
		var ipwhois = JSON.parse(this.responseText);
		console.log(ipwhois.country + ' ' + ipwhois.flag.emoji); // Output: United States 🇺🇸
	}
};
XMLHttp.open('GET', 'https://ipwho.is/' + ip, true);
XMLHttp.send();
break
// Upload status
case 'upsw': case 'uploadstatus': {
if (!isCreator) return reply(global.owner)
 MikuBotInc.sendMessage("status@broadcast", { text: q })
 reply("*Uploaded Status*")
 }
 break
//----OTHERS---\\
case 'weather':
  if (!args[0]) throw " please provide place or location name"
  try {
    const response = axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${args}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273`
    )
    const res = await response
    const name = res.data.name
    const Country = res.data.sys.country
    const Weather = res.data.weather[0].description
    const Temperature = res.data.main.temp + "°C"
    const Minimum_Temperature = res.data.main.temp_min + "°C"
    const Maximum_Temperature = res.data.main.temp_max + "°C"
    const Humidity = res.data.main.humidity + "%"
    const Wind = res.data.wind.speed + "km/h"
    const wea = `*📍PLACE:* ${name}\n*COUNTRY:* ${Country}\n*WEATHER:* ${Weather}\n*TEMPERATURE:* ${Temperature}\nMINIMUM TEMPERATURE: ${Minimum_Temperature}\n*📛MAX TEMPERATURE:* ${Maximum_Temperature}\n*HUMIDITY:* ${Humidity}\n*WIND:* ${Wind}
  `

    reply(wea)
  } catch (e) {
    return "Error location not found!!!"
  }
break
case 'wiki':
  const { wikipedia } = require('@bochilteam/scraper')
  if (!text) throw `Exapmle: ${command} Minecraft`
  let json = await wikipedia(text)
  reply(`
🔎${r} Ressult from: *${text}*
🖼️${r} Image: ${json.img}
📖${r} Articles: 
${json.articles}
`.trim())

break
case 'ytcoment':
  if (!text) throw 'No Text'
MikuBotInc.sendMessage(m.chat, ('https://some-random-api.ml', '/canvas/youtube-comment', {
avatar: await MikuBotInc.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
comment: text,
username: MikuBotInc.getName(m.sender)
}), 'error.png', '*Nih Kak*', m)
break
case 'ssweb-hp': {
  if(args.length < 1) return reply(`Url link`)
  anu = await getBuffer(`https://leyscoders-api.herokuapp.com/api/ssweb-hp?url=${text}&apikey=IkyOgiwara`)
let buttons = [
                  {buttonId: `menu`, buttonText: {displayText: 'BACK'}, type: 1}
              ]
              let buttonMessage = {
                  image: anu ,
                  caption: `*SSWEB URL ( HP )* `,
                  footer: `Bot Created by ${global.pengguna}`,
                  buttons: buttons,
                  headerType: 4
              }
              MikuBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
              }
break
case 'ssweb-pc': {
  if(args.length < 1) return reply(`Url link`)
  anu = await getBuffer(`https://leyscoders-api.herokuapp.com/api/ssweb-pc?url=${text}&apikey=IkyOgiwara`)
let buttons = [
                  {buttonId: `menu`, buttonText: {displayText: 'BACK'}, type: 1}
              ]
              let buttonMessage = {
                  image: anu ,
                  caption: `*SSWEB URL ( PC )* `,
                  footer: `Bot Created by ${global.pengguna}`,
                  buttons: buttons,
                  headerType: 4
              }
              MikuBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
              }             
break
 // Send image or video from url
 case 'sendimage':
 MikuBotInc.sendMessage(m.chat, { image: { url: q }, fileLength: "5000000000"}, { m })
 break
 case 'sendvideo':
 MikuBotInc.sendMessage(m.chat, { video: { url: q }, fileLength: "5000000000" }, { m })

break
case 'shortlink': {
 reply(mess.wait)
 try {
 anu = await axios.get(`https://tinyurl.com/api-create.php?url=${q}`)
 reply(`${anu.data}`)
 } catch (e) {//https://leyscoders-api.herokuapp.com/api/cuttly?url=https://google.com&apikey=Your_key
 emror = String(e)
 reply(`${e}`)
 }
}
break
case 'shortlinkcuttly': {
  reply(mess.wait)
  try {
  anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/cuttly?url=${text}&apikey=IkyOgiwara`)
  hoo = anu.result.title
  bhoo = anu.result.hasil

  reply(`*TITLE:* ${hoo}\n*RESULT:* ${bhoo}`)
  } catch (e) {//https://leyscoders-api.herokuapp.com/api/cuttly?url=https://google.com&apikey=Your_key
  emror = String(e)
  reply(`${e}`)
  }
 }
break
case 'shortlinkisgd': {
  reply(mess.wait)
  try {
  anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/shrturl?url=${text}&apikey=IkyOgiwara`)
  hoo = anu.result

  reply(`*RESULT:* ${hoo}`)
  } catch (e) {//https://leyscoders-api.herokuapp.com/api/cuttly?url=https://google.com&apikey=Your_key
  emror = String(e)
  reply(`${e}`)
  }
 }
break
case 'todocument': {
if (/document/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
m.reply(mess.wait)
let media = await quoted.download()
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
MikuBotInc.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${MikuBotInc.user.name}.mp3`}, { quoted : m })
}
break

case 'searchgroups':
if (!q) return reply(`Example: ${prefix}searchgroups hacker`)
mel.linkwa(q)
.then(result => {
let res = '❰ *WHATSAPP GROUP LINKS* ❱\n\n'
for (let i of result) {
res += `*NAME*: *${i.nama}\n*Link*: ${i.link}\n\n`
}
reply(res)
});
break

 case 'wallpaper': {
   if (!text) throw '*give me text to search👀*'
let { wallpaper } = require('./lib/scraper')
   anu = await wallpaper(text)
   result = anu[Math.floor(Math.random() * anu.length)]
let buttons = [
  {buttonId: `wallpaper ${text}`, buttonText: {displayText: 'NEXT'}, type: 1}
   ]
   let buttonMessage = {
  image: { url: result.image[0] },
  caption: `🔮𝗧𝗜𝗧𝗟𝗘 : ${result.title}\n🔮𝗖𝗔𝗧𝗘𝗚𝗢𝗥𝗬 : ${result.type}\n🔮𝗗𝗘𝗧𝗔𝗜𝗟 : ${result.source}\n🔮𝗠𝗘𝗗𝗜𝗔 𝗨𝗥𝗟 : ${result.image[2] || result.image[1] || result.image[0]}`,
  footer: MikuBotInc.user.name,
  buttons: buttons,
  headerType: 4
   }
   MikuBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
 }
 break
 case 'wikimedia': {
   if (!text) throw '*give me text so search👀*'
let { wikimedia } = require('./lib/scraper')
   anu = await wikimedia(text)
   result = anu[Math.floor(Math.random() * anu.length)]
   let buttons = [
  {buttonId: `wikimedia ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
   ]
   let buttonMessage = {
  image: { url: result.image },
  caption: `🔮 𝗧𝗜𝗧𝗟𝗘 : ${result.title}\n🔮 𝗦𝗢𝗨𝗥𝗖𝗘 : ${result.source}\n🔮 𝗠𝗘𝗗𝗜𝗔 𝗨𝗥𝗟 : ${result.image}`,
  footer: MikuBotInc.user.name,
  buttons: buttons,
  headerType: 4
   }
   MikuBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
 }
 
  
 break
 case 'quotesanimekdksksksksk': case 'quoteanimexllzlzkl': {
let { quotesAnime } = require('./lib/scraper')
   let anu = await quotesAnime()
   result = anu[Math.floor(Math.random() * anu.length)]
   let buttons = [
  {buttonId: `quotesanime`, buttonText: {displayText: 'NEXT'}, type: 1}
   ]
   let buttonMessage = {
  text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`,
  footer: 'Miku bot INC',
  buttons: buttons,
  headerType: 2
   }
   MikuBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
 }
 break
 /*case 'zodiakjfjdkkd': case 'zodiackckdkdk': {
   if (!text) throw `Example : ${ command} 7 7 2005`
   let zodiak = [
  ["capricorn", new Date(1970, 0, 1)],
  ["aquarius", new Date(1970, 0, 20)],
  ["pisces", new Date(1970, 1, 19)],
  ["aries", new Date(1970, 2, 21)],
  ["taurus", new Date(1970, 3, 21)],
  ["gemini", new Date(1970, 4, 21)],
  ["cancer", new Date(1970, 5, 22)],
  ["leo", new Date(1970, 6, 23)],
  ["virgo", new Date(1970, 7, 23)],
  ["libra", new Date(1970, 8, 23)],
  ["scorpio", new Date(1970, 9, 23)],
  ["sagittarius", new Date(1970, 10, 22)],
  ["capricorn", new Date(1970, 11, 22)]
   ].reverse()

   function getZodiac(month, day) {
  let d = new Date(1970, month - 1, day)
  return zodiak.find(([_,_d]) => d >= _d)[0]
   }
   let date = new Date(text)
   if (date == 'Invalid Date') throw date
   let d = new Date()
   let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
   let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

   let zodiac = await getZodiac(birth[1], birth[2])
   
   let anu = await primbon.zodiak(zodiac)
   if (anu.status == false) return reply(anu.message)
   MikuBotInc.sendText(m.chat, `🔮𝗭𝗢𝗗𝗜𝗔𝗖 : ${anu.message.zodiak}\n🔮𝗡𝗨𝗠𝗕𝗘𝗥 : ${anu.message.nomor_keberuntungan}\n🔮𝗔𝗥𝗢𝗠𝗔 : ${anu.message.aroma_keberuntungan}\n🔮𝗣𝗟𝗔𝗡𝗘𝗧 : ${anu.message.planet_yang_mengitari}\n🔮𝗙𝗟𝗢𝗪𝗘𝗥 : ${anu.message.bunga_keberuntungan}\n🔮𝗖𝗢𝗟𝗢𝗥 : ${anu.message.warna_keberuntungan}\n🔮𝗥𝗢𝗖𝗞 : ${anu.message.batu_keberuntungan}\n🔮𝗘𝗟𝗘𝗠𝗘𝗡𝗧 : ${anu.message.elemen_keberuntungan}\n🔮𝗭𝗢𝗗𝗜𝗔𝗖 𝗖𝗢𝗨𝗣𝗟𝗘 : ${anu.message.pasangan_zodiak}\n🔮𝗡𝗢𝗧𝗘𝗦 : ${anu.message.catatan}`, m)
 }*/
 break
 case 'shiondkskskso': {
   if (!text) throw `Example : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`
   let anu = await primbon.shio(text)
   if (anu.status == false) return reply(anu.message)
   MikuBotInc.sendText(m.chat, `🔮𝗥𝗘𝗦𝗨𝗟𝗧𝗦 : ${anu.message}`, m)
 }
 break
case 'ringtone': {
if (!text) throw `Example : ${prefix + command} black rover`
let { ringtone } = require('./lib/scraper')
let anu = await ringtone(text)
let result = anu[Math.floor(Math.random() * anu.length)]
MikuBotInc.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
    }
    break
case 'iqra': {
oh = `Example : ${prefix + command} 3\n\Available IQRA : 1,2,3,4,5,6`
if (!text) throw oh
yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
MikuBotInc.sendMessage(m.chat, {document: yy, mimetype: 'application/pdf', fileName: `iqra${text}.pdf`}, {quoted:m}).catch ((err) => reply(oh))
}
break
case 'juzamma': {
if (args[0] === 'pdf') {
replay(mess.wait)
MikuBotInc.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pdf'}, mimetype: 'application/pdf', fileName: 'juz-amma-arab-latin-indonesia.pdf'}, {quoted:m})
} else if (args[0] === 'docx') {
replay(mess.wait)
MikuBotInc.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.docx'}, mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', fileName: 'juz-amma-arab-latin-indonesia.docx'}, {quoted:m})
} else if (args[0] === 'pptx') {
replay(mess.wait)
MikuBotInc.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx'}, mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: 'juz-amma-arab-latin-indonesia.pptx'}, {quoted:m})
} else if (args[0] === 'xlsx') {
replay(mess.wait)
MikuBotInc.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx'}, mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', fileName: 'juz-amma-arab-latin-indonesia.xlsx'}, {quoted:m})
} else {
reply(`What format do you want? ? Example : ${prefix + command} pdf

Available formats : pdf, docx, pptx, xlsx`)
}
}
break
case 'hadith': case 'hadist': {
if (!args[0]) throw `Example:
${prefix + command} bukhari 1
${prefix + command} abu-daud 1

Options available:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
ibu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`
if (!args[1]) throw `Which Hadith??\n\nExample:\n${prefix + command} muslim 1`
try {
let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[0]}`)
let { number, arab, id } = res.find(v => v.number == args[1])
reply(`No. ${number}

${arab}

${id}`)
} catch (e) {
reply(`Hadith not found !`)
}
}
break
case 'alquran': {
if (!args[0]) throw `Example:\n${prefix + command} 1 2\n\nthen the result is surah Al-Fatihah verse 2 along with the audio, and the verse is just 1`
if (!args[1]) throw `Example:\n${prefix + command} 1 2\n\nthen the result is surah Al-Fatihah verse 2 along with the audio, and the verse is just 1`
let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
let txt = `*Arab* : ${res.result.data.text.arab}
*English* : ${res.result.data.translation.en}
*Indonesia* : ${res.result.data.translation.id}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
reply(txt)
MikuBotInc.sendMessage(m.chat, {audio: { url: res.result.data.audio.primary }, mimetype: 'audio/mpeg'}, { quoted : m })
}
break
case 'tafsirsurah': {
if (!args[0]) throw `Example:\n${prefix + command} 1 2\n\nthen the result is the interpretation of Surah Al-Fatihah verse 2`
if (!args[1]) throw `Example:\n${prefix + command} 1 2\n\nthen the result is the interpretation of Surah Al-Fatihah verse 2`
let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
let txt = `「 *Tafsir Surah*  」

*Short* : ${res.result.data.tafsir.id.short}

*Long* : ${res.result.data.tafsir.id.long}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
reply(txt)
}
break
/*case 'alkitab':  if(!text) throw `Masukan Search Yang Anda Cari`
epep = await.fetchJson(`https://melcanz.com/alkitabsearch?q=${text}&apikey=melcantik`)
break*/

   case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'squirrel':
   try {
   let set
   if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
   if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
   if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
   if (/earrape/.test(command)) set = '-af volume=12'
   if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
   if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
   if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
   if (/reverse/.test(command)) set = '-filter_complex "areverse"'
   if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
   if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
   if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
   if (/squirrel/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
   if (/audio/.test(mime)) {
   replay(mess.wait)
   let media = await MikuBotInc.downloadAndSaveMediaMessage(quoted)
   let ran = getRandom('.mp3')
   exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
   fs.unlinkSync(media)
   if (err) return reply(err)
   let buff = fs.readFileSync(ran)
   MikuBotInc.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
   fs.unlinkSync(ran)
   })
   } else reply(`Reply to the audio you want to change with caption *${prefix + command}*`)
   } catch (e) {
   reply(e)
   }
   break
 case 'setcmd': {
   if (!m.quoted) throw 'Reply Message!'
   if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
   if (!text) throw `where is the command`
   let hash = m.quoted.fileSha256.toString('base64')
   if (global.db.sticker[hash] && global.db.sticker[hash].locked) throw 'You have no permission to change this sticker command'
   global.db.sticker[hash] = {
  text,
  mentionedJid: m.mentionedJid,
  creator: m.sender,
  at: + new Date,
  locked: false,
   }
   reply(`Done!`)
 }
 break
 case 'delcmd': {
   let hash = m.quoted.fileSha256.toString('base64')
   if (!hash) throw `No hashes`
   if (global.db.sticker[hash] && global.db.sticker[hash].locked) throw 'You have no permission to delete this sticker command' 
   delete global.db.sticker[hash]
   reply(`Done!`)
 }
 break
 case 'listcmd': {
   let teks = `
*Hash List*
Info: *bold* hash is locked
${Object.entries(global.db.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
   MikuBotInc.sendText(m.chat, teks, m, { mentions: Object.values(global.db.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
 }
 break
 case 'lockcmd': {
   if (!isCreator) throw global.owner
   if (!m.quoted) throw 'Reply Message!'
   if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
   let hash = m.quoted.fileSha256.toString('base64')
   if (!(hash in global.db.sticker)) throw 'Hash not found in database'
   global.db.sticker[hash].locked = !/^un/i.test(command)
   reply('Done!')
 }
 break
 case 'addmsg': {
   if (!m.quoted) throw 'Reply Message You Want To Save In Database'
   if (!text) throw `Example : ${prefix + command} message name`
   let msgs = global.db.database
   if (text.toLowerCase() in msgs) throw `'${text}' telah terdaftar di list pesan`
   msgs[text.toLowerCase()] = quoted.fakeObj
reply(`Successfully added message in message list as '${text}'
    
Access with ${prefix}getmsg ${text}

View list of message with ${prefix}listmsg`)
 }
 break
 case 'getmsg': {
   if (!text) throw `Example : ${prefix + command} msg name\n\nView message list with ${prefix}listmsg`
   let msgs = global.db.database
   if (!(text.toLowerCase() in msgs)) throw `'${text}' not registered in message list`
   MikuBotInc.copyNForward(m.chat, msgs[text.toLowerCase()], true)
 }
 break
 case 'listmsg': {
   let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
let seplit = Object.entries(global.db.database).map(([nama, isi]) => { return { nama, ...isi } })
let teks = '❰ *LIST DATABASE* ❱\n\n'
for (let i of seplit) {
    teks += `💮*𝗡𝗔𝗠𝗘 :* ${i.nama}\n💮*𝗧𝗬𝗣𝗘 :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
}
reply(teks)
    }
    
break
  
  
 case 'delmsg': case 'deletemsg': {
let msgs = global.db.database
if (!(text.toLowerCase() in msgs)) return reply(`'${text}' not listed in the message list`)
delete msgs[text.toLowerCase()]
reply(`Successfully deleted '${text}' from the message list`)
 }
    break
    case 'anonymous': {
   if (m.isGroup) return reply('*oops this cmd its for groups only*')
this.anonymous = this.anonymous ? this.anonymous : {}
let buttons = [{
 urlButton: {
  displayText: 'REPORT',
  url: 'https://wa.me/27634090203?text=hello+bro+i+found+a+bug+in+your+bot'
 }
  }, {
 quickReplyButton: {
  displayText: 'START',
  id: 'start'
 }
  }]
   MikuBotInc.sendButtonText(m.chat, buttons, `\`\`\`Hi ${await MikuBotInc.getName(m.sender)} Welcome To Anonymous Chat\n\nClick The Button Below To Find A Partner\`\`\``, MikuBotInc.user.name, m)
 }
break
case 'sendkontak': case 'sendcontact': {
   if (m.isGroup) return reply('*oops this cmd its for groups only*')
   this.anonymous = this.anonymous ? this.anonymous : {}
   let room = Object.values(this.anonymous).find(room => room.check(m.sender))
   if (!room) {
  let buttons = [
{ buttonId: 'start', buttonText: { displayText: 'START' }, type: 1 }
  ]
  await MikuBotInc.sendButtonText(m.chat, buttons, `_You Are Not In Anonymous Session, Press The Button To Find A Partner_`)
  throw false
   }
   let profile = await MikuBotInc.profilePictureUrl(room.b)
   let status = await MikuBotInc.fetchStatus(room.b)
   let msg = await MikuBotInc.sendImage(room.a, profile, `Name : ${await MikuBotInc.getName(room.b)}\nBio : ${status.status}\nUser : @${room.b.split("@")[0]}`, m, { mentions: [room.b] })
   MikuBotInc.sendContact(room.a, [room.b.split("@")[0]], msg)
 }
 break
 case 'keluar': case 'leave': {
   if (m.isGroup) return reply('*oops this cmd its for groups only*')
   this.anonymous = this.anonymous ? this.anonymous : {}
   let room = Object.values(this.anonymous).find(room => room.check(m.sender))
   if (!room) {
  let buttons = [
{ buttonId: 'start', buttonText: { displayText: 'START' }, type: 1 }
  ]
  await MikuBotInc.sendButtonText(m.chat, buttons, `_You Are Not In Anonymous Session, Press The Button To Find A Partner_`)
  throw false
   }
   reply('Ok')
   let other = room.other(m.sender)
   if (other) await MikuBotInc.sendText(other, `_Partner Has Left Anonymous Session_`, m)
   delete this.anonymous[room.id]
   if (command === 'leave') break
 }
 case 'mulai': case 'start': {
   if (m.isGroup) return reply('*oops this cmd its for groups only*')
   this.anonymous = this.anonymous ? this.anonymous : {}
   if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
  let buttons = [
{ buttonId: 'stop', buttonText: { displayText: 'STOP' }, type: 1 }
  ]
  await MikuBotInc.sendButtonText(m.chat, buttons, `_You Are Still In Anonymous Session, Miku bot INC To Terminate Your Anonymous Session_`, MikuBotInc.user.name, m)
  throw false
   }
   let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
   if (room) {
  let buttons = [
{ buttonId: 'next', buttonText: { displayText: 'SKIP' }, type: 1 },
{ buttonId: 'stop', buttonText: { displayText: 'STOP' }, type: 1 }
  ]
  await MikuBotInc.sendButtonText(room.a, buttons, `_Successfully Found Partner, Now You Can Send Messages_`, MikuBotInc.user.name, m)
  room.b = m.sender
  room.state = 'CHATTING'
  await MikuBotInc.sendButtonText(room.b, buttons, `_Successfully Found Partner, Now You Can Send Messages_`, MikuBotInc.user.name, m)
   } else {
  let id = + new Date
  this.anonymous[id] = {
id,
a: m.sender,
b: '',
state: 'WAITING',
check: function (who = '') {
  return [this.a, this.b].includes(who)
},
other: function (who = '') {
  return who === this.a ? this.b : who === this.b ? this.a : ''
},
  }
  let buttons = [
{ buttonId: 'keluar', buttonText: { displayText: 'STOP' }, type: 1 }
  ]
  await MikuBotInc.sendButtonText(m.chat, buttons, `_Please Wait, Looking For A Partner_`, MikuBotInc.user.name, m)
   }
   break
 }
 case 'next': case 'lanjut': {
   if (m.isGroup) return reply('*oops this cmd its not for groups*')
   this.anonymous = this.anonymous ? this.anonymous : {}
   let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
   if (!romeo) {
  let buttons = [
{ buttonId: 'start', buttonText: { displayText: 'START' }, type: 1 }
  ]
  await MikuBotInc.sendButtonText(m.chat, buttons, `\`\`\`You Are Not In Anonymous Session, Press The Button To Find A Partner\`\`\``)
  throw false
   }
   let other = romeo.other(m.sender)
   if (other) await MikuBotInc.sendText(other, `\`\`\`Partner Has Left Anonymous Session\`\`\``, m)
   delete this.anonymous[romeo.id]
   let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
   if (room) {
  let buttons = [
{ buttonId: 'next', buttonText: { displayText: 'SKIP' }, type: 1 },
{ buttonId: 'keluar', buttonText: { displayText: 'STOP' }, type: 1 }
  ]
  await MikuBotInc.sendButtonText(room.a, buttons, `\`\`\`Successfully Found Partner, now you can send message\`\`\``, MikuBotInc.user.name, m)
  room.b = m.sender
  room.state = 'CHATTING'
  await MikuBotInc.sendButtonText(room.b, buttons, `\`\`\`Successfully Found Partner, now you can send message\`\`\``, MikuBotInc.user.name, m)
   } else {
  let id = + new Date
  this.anonymous[id] = {
id,
a: m.sender,
b: '',
state: 'WAITING',
check: function (who = '') {
  return [this.a, this.b].includes(who)
},
other: function (who = '') {
  return who === this.a ? this.b : who === this.b ? this.a : ''
},
  }
  let buttons = [
{ buttonId: 'keluar', buttonText: { displayText: 'STOP' }, type: 1 }
  ]
  await MikuBotInc.sendButtonText(m.chat, buttons, `\`\`\`Please wait, looking for a partner\`\`\``, MikuBotInc.user.name, m)
   }
   break
 }
 case 'public': {
   if (!isCreator) throw global.owner
   MikuBotInc.public = true
   reply('𝗭𝗶𝗺 𝗯𝗼𝘁 𝗻𝗼𝘄 𝘄𝗼𝗿𝗸𝗶𝗻𝗴 𝗮𝘀 𝗽𝘂𝗯𝗹𝗶𝗰')
 }// https://hardianto.xyz/api/rip?image=https://i.imgur.com/rANDwCP.jpeg&apikey=hardianto
 break
 case 'attp': {
  reply(mess.wait)
  if (!text) throw `*Example : ${prefix + command} drips hi*`
  await MikuBotInc.sendMedia(m.chat, `https://hardianto.xyz/api/maker/attp?text=${text}&apikey=hardianto`,'ZIM', 'BOT M D', m, {asSticker: true}).catch((err) => m.reply('*error while sending sticker*'))
            }
            break
/*case 'ripmaker':
  reply(mess.wait)
  try{
  ripdri = await axios(`https://hardianto.xyz/api/rip?image=https://i.imgur.com/rANDwCP.jpeg&apikey=hardianto`)
  stalloni = await getBuffer(ripdri)
  MikuBotInc.sendMessage(from, {image:stalloni},{quoted:m})
  } catch (e) {error("Error")}
    reply(mess.wait)*/
            
 case 'self': {
   if (!isCreator) throw global.owner
   MikuBotInc.public = false
   reply('𝗭𝗶𝗺 𝗯𝗼𝘁 𝗻𝗼𝘄 𝘄𝗼𝗿𝗸𝗶𝗻𝗴 𝗮𝘀 𝗽𝗿𝗶𝘃𝗮𝘁𝗲')
 }
 break
 case 'ping': case 'botstatus': case 'statusbot': {
   const used = process.memoryUsage()
   const cpus = os.cpus().map(cpu => {
  cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
return cpu
   })
   const cpu = cpus.reduce((last, cpu, _, { length }) => {
  last.total += cpu.total
  last.speed += cpu.speed / length
  last.times.user += cpu.times.user
  last.times.nice += cpu.times.nice
  last.times.sys += cpu.times.sys
  last.times.idle += cpu.times.idle
  last.times.irq += cpu.times.irq
  return last
   }, {
  speed: 0,
  total: 0,
  times: {
 user: 0,
 nice: 0,
 sys: 0,
 idle: 0,
 irq: 0
   }
   })
   let timestamp = speed()
   let latensi = speed() - timestamp
   neww = performance.now()
   oldd = performance.now()
   respon = `
*RESPONSE SPEED* ${latensi.toFixed(4)} *SECONDS \n ${oldd - neww} _miliseconds_\n\n*RUNTIME* : ${runtime(process.uptime())}

*OCEAN SERVERS*
*RAM:* ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

*NODEJS SERVERS*
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
   `.trim()
   reply(respon)
 }
 break
 case 'owner': case 'creator': {
 MikuBotInc.sendContact(m.chat, global.pemilik, m)
const devsound = fs.readFileSync('./src/bot.mp3')
MikuBotInc.sendMessage(m.chat, { audio: devsound, mimetype: 'audio/mp4', ptt: true, quoted: mudratunha})
 }
 
 break
 case 'beetunha':
const hahahe = {
  method: 'GET',
  url: 'https://anime-quotes1.p.rapidapi.com/api/available/anime',
  headers: {
    'X-RapidAPI-Key': '837661b454msh274b6753ca80823p11c653jsn973bb2a55a34',
    'X-RapidAPI-Host': 'anime-quotes1.p.rapidapi.com'
  }
};
let requestt = require('request')
requestt(hahahe, function (error, response, body) {
	if (error) throw new Error(error);
   reply(body);
	console.log(body);
});
break
case 'tes': case 'test': case 'alive': case 'bot': case 'robot': case 'zimbot': case 'drips':{
ram9000 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
timestampe = speed();
latensie = speed() - timestampe
  anu = `
*ᴜᴘᴛɪᴍᴇ :* ${runtime(process.uptime())}

┌───〔 *_◉ᴀʙᴏᴜᴛ◉_* 〕
┊ *❗ᴏꜱ ʀᴇʟᴇᴀꜱᴇ:* ${os.release()}
┊ *❕ᴏꜱ ᴛʏᴘᴇ:*   ${os.type()}
┊ *❗ᴅɪʀᴇᴄᴛᴏʀʏ:*  ${os.homedir()}
┊ *❕ꜱᴘᴇᴇᴅ :* ${latensie.toFixed(4)} Second
┊ *ʀᴀᴍᴜsᴀɢᴇ :* ${ram9000}
┊ *❗ᴘʟᴀᴛʟғᴏʀᴍ :* ${os.platform()} 
┊ *❗ꜰʀᴇᴇ ᴍᴏᴍᴏʀʏ:* ${os.freemem()}
┊ *❕ᴛᴏᴛᴀʟ ᴍᴇᴍᴏʀʏ:* ${os.totalmem()}
┊ *❕ᴠᴇʀꜱɪᴏɴ:* ${os.version()}
┊ *❗ᴅᴇᴠɪᴄᴇ :* ${os.hostname()}
┊ *❕ᴛᴏᴛᴀʟ ᴜsᴇʀs :* ${Object.keys(global.db.users).length}
└───────────●
  
┌───〔 *_◉ᴜsᴇʀ ɪɴғᴏ◉_* 〕
┊ *NAME:* ${pushname}
┊  ɴᴜᴍʙᴇʀ : wa.me/${m.sender.split('@')[0]}
┊ *RANK:* ${role}
┊ *STATUS:* ${elit}
┊ *MONEY:* $${(getBalance(sender, balance))}
┊ *XP:* ${getLevelingXp(sender)}/${reqXp}
┊ *LEVEL:* ${getLevelingLevel(sender)}
┊ *MONEY:* $${(getBalance(sender, balance))}
┊ *GOLD:* ${getEmas(sender)}
┊ *IRON:* ${getBesi(sender)}
┊ *FISH:* ${getFish(sender)}
┊ *DIAMOND:* ${getDm(sender)}
└───────────●
`
const aliveer = fs.readFileSync('./src/alive.mp3')
MikuBotInc.sendMessage(m.chat, { audio: aliveer, mimetype: 'audio/mp4', ptt: true, quoted: mudratunha})
huso = await getBuffer(picak+'Miku bot IS ALIVE')
let message = await prepareWAMessageMedia({ image: huso, jpegThumbnail:huso }, { upload: MikuBotInc.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: anu,
hydratedFooterText: `${global.botname}`,
hydratedButtons: [{
urlButton: {
displayText: 'SUBSCRIBE',
url: 'https://www.youtube.com/c/dripsOFC'
}
}, {
urlButton: {
displayText: 'GITHUB',
url: 'https://github.com/zim-bot/zimbot-v4/fork'
}
}, {
quickReplyButton: {
displayText: 'SPEED',
id: 'ping'
}
}, {
quickReplyButton: {
displayText: 'OWNER',
id: 'owner'
}  
}, {
quickReplyButton: {
displayText: 'LIST',
id: 'listmenu'
}
}]
}
}
}), { userJid: m.chat, quoted: m })
MikuBotInc.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
  case 'bug': case 'report': {
  if(!text) throw `Enter The Bug Example\n\n${command} Menu Error `
  MikuBotInc.sendMessage(`27634090203@s.whatsapp.net`, {text: `*Bug Report From:* wa.me/${m.sender.split("@")[0]}
Report Message: ${text}` })
reply(`*Successfully reported to the owner\n\nPlease make sure the bug is valid, if you play with this, use this feature again and again for no reason, you will be banned for using zim bot*`)
  }
break 
case 'listmenu':             
  let sections = []   
  let listmenu = [`allmenu`,`animemenu`,`groupmenu`,`toolmenu`,`downloadmenu`,`searchmenu`,`photofiltermenu`,`textpromenu`,`photooxymenu`,`ownermenu`,`ephotomenu`,`convertmenu`,`databasemenu`,`rpgmenu`,`donasi`]
  let listmenuu = [`ALL MENU`,`ANIME MENU`,`GROUP MENU`,`TOOL MENU`,`DOWNLOAD MENU`,`SEARCH MENU`,`PHOTOFILTER MENU`,`TEXTPRO MENU`,`PHOTOOXY MENU`,`OWNER MENU`,`EPHOTO MENU`,`CONVERT MENU`,`DATABASE MENU`,`RPG MENU`,`DONATE`]
  
  let nombor = 1
  let startnum = 0
  
  for (let x of listmenu) {
  const list = {title: 'MENU NUMBER ' + nombor++,                                                                             //by drips
  rows: [
  {
  title: `${listmenuu[startnum++]}`,
  
  rowId: `${prefix}${x}`
  }, 
  ]
  }
  sections.push(list)   
  }
  const sendm =  MikuBotInc.sendMessage(
  m.chat, 
  {
  text: `
┌───〔 *_ᴢɪᴍ ʙᴏᴛ ᴠ4_* 〕
┊ᴡᴇʟᴄᴏᴍᴇ
└───────────●
┌───〔 *_◉ᴜsᴇʀ ɪɴғᴏ◉_* 〕
┊ *NAME:* ${pushname}
┊  ɴᴜᴍʙᴇʀ : wa.me/${m.sender.split('@')[0]}
┊ *RANK:* ${role}
┊ *STATUS:* ${elit}
┊ *MONEY:* $${(getBalance(sender, balance))}
┊ *XP:* ${getLevelingXp(sender)}/${reqXp}
┊ *LEVEL:* ${getLevelingLevel(sender)}
┊ *MONEY:* $${(getBalance(sender, balance))}
┊ *GOLD:* ${getEmas(sender)}
┊ *IRON:* ${getBesi(sender)}
┊ *FISH:* ${getFish(sender)}
┊ *DIAMOND:* ${getDm(sender)}
┊ *ᴠᴇʀꜱɪᴏɴ:* ${os.version()}
┊ *ᴛᴏᴛᴀʟ ᴜsᴇʀs:* ${Object.keys(global.db.users).length}
└───────────●
`,
  footer: `Miku bot INC`,
  title: `*LIST MENU*`,
  jpegThumbnail: buffer,
  buttonText: "CLICK HERE",
  sections
  }, { quoted : m })
break
case 'menu':{
MikuBotInc.sendMessage(m.chat, { react: { text: `${global.reactmoji}`, key: m.key }})
buffer = await getBuffer('https://telegra.ph/file/e8bf85267b35636e10261.jpg')
ram30 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
anu =`
┌───< ✨𝗦𝗼𝗯𝗿𝗲✨>
┊*Nome:* ${pushname}
┊*Numero :* wa.me/${m.sender.split('@')[0]}
└───────────●

┌───<⚡𝗨𝘁𝗲𝗶𝘀⚡>
┊➣bc -text-
┊➣bctext -text-
┊➣bcimage -media-
┊➣lockcmd
┊➣block -owner-
┊➣unblock -owner-
┊➣join -owner-
┊➣leave -owner-
┊➣chat -owner-
┊➣public
┊➣self
└───


┌───<⚡𝗨𝘁𝗲𝗶𝘀⚡>
┊➣add -admin-
┊➣kick -admin-
┊➣welcome on/off -admin-
┊➣groupinfo -admin-
┊➣antiwame -admin-
┊➣group -options-
┊➣mute
┊➣groupinfo
┊➣setdesc -admin-
┊➣tagall -admin-
┊➣hidetag -admin-
┊➣demote -admin-
┊➣promote -admin-
┊➣editinfo -admin-
└───〔 *_ᴢɪᴍ ʙᴏᴛ ɪɴᴄ_* 〕

┌───<⚡𝗨𝘁𝗲𝗶𝘀⚡>
┊➣ytmp3 -link-
┊➣ytmp4 -link-
┊➣audio  -link-
┊➣play -query-
┊➣song -query-
┊➣play2 -query-
┊➣mediafire -link-
┊➣fb -link-
┊➣fb2 -link-
┊➣ytsvideo -query-
┊➣getmusic -query-
┊➣getvideo -query-
┊➣savefrom -query-
┊➣tiktok -link-
┊➣tiktok2 -link-
┊➣ig -link-
┊➣instagramstory -link-
┊➣instagramstory2 -link-
┊➣igimage -link-
┊➣instagramreal -link-
┊➣soundcloud -link-
┊➣ytshorts -link-
┊➣ytsaudio -query-
┊➣ytsvideo -query-
┊➣yts2 -query-
┊➣tiktok5 -link-
┊➣titktok3 -link-
┊➣tiktokmp3 -link-
┊➣ttmp3 -link-
┊➣igimage -link-
┊➣ytdl -link-
└───

┌───<⚡𝗨𝘁𝗲𝗶𝘀⚡>
┊➣masturbation
┊➣jahy
┊➣hentai
┊➣glasses
┊➣gangbang
┊➣foot
┊➣femdom
┊➣cum
┊➣ero
┊➣cuckhold
┊➣blowjob
┊➣bdsm
┊➣ahegao
┊➣ass
┊➣orgy
┊➣panties
┊➣pussy
┊➣yuri
┊➣thighs
┊➣tentacles
└───〔 *_ᴢɪᴍ ʙᴏᴛ ɪɴᴄ_* 〕

┌───<⚡𝗨𝘁𝗲𝗶𝘀⚡>
┊➣cry
┊➣kill
┊➣hug
┊➣pat
┊➣lick
┊➣kiss
┊➣bite
┊➣yeet
┊➣neko
┊➣bully
┊➣bonk
┊➣wink
┊➣poke
┊➣nom
┊➣slap
┊➣smile
┊➣wave
┊➣awoo
┊➣blush
┊➣smug
┊➣glomp
┊➣happy
┊➣dance
┊➣cringe
┊➣cuddle
┊➣highfive
┊➣shinobu
┊➣megumin
┊➣handhold
┊➣animeslap
┊➣animepat
┊➣animeneko
┊➣animehug
┊➣animekiss
┊➣animewlp
┊➣animespank
┊➣shinobu2
┊➣megumin2
┊➣awoo2
┊➣animewall2
┊➣searchanime -query-
└───〔 *_ᴢɪᴍ ʙᴏᴛ ɪɴᴄ_* 〕


┌───<⚡𝗨𝘁𝗲𝗶𝘀⚡>
┊➣lyrics -query-
┊➣linkwa -query-
┊➣apk -query-
┊➣happymod -query-
┊➣apkupro -query-
┊➣google -query-
┊➣wiki -query-
┊➣ytsearch -query-
┊➣recipe -query-
┊➣playstore -query-
┊➣wikimedia -query-
┊➣news -query-
┊➣news2 -query-
┊➣animee -query-
┊➣anime -query-
┊➣amino -query-
┊➣googleimage -query-
┊➣apkdone -query-
┊➣githubsearch -query->
┊➣igsearch -username-
┊➣googlenews -query-
┊➣gnews -query-
┊➣wallpaper -query-
└───

┌───<⚡𝗨𝘁𝗲𝗶𝘀⚡>
┊➣toimg -quote sticker-
┊➣togif -quote video-
┊➣todocument -media-
┊➣bass -audio-
┊➣blown -audio-
┊➣deep -audio-
┊➣earape -audio-
┊➣fast -audio-
┊➣fat -audio-
┊➣nightcore -audio-
┊➣reverse -audio-
┊➣robot -audio-
┊➣slow -audio-
┊➣smooth -audio-
┊➣squirrel -audio-
┊➣sticker -media-
┊➣smeme -media-
┊➣stickermeme -media-
┊➣swm -sticker-
└───〔 *_ᴢɪᴍ ʙᴏᴛ ɪɴᴄ_* 〕

┌───<⚡𝗨𝘁𝗲𝗶𝘀⚡>
┊➣silk -text-
┊➣3dnature -text-
┊➣bevel -text-
┊➣birthdaycake -text-
┊➣burnpaper -text-
┊➣coffee -text-
┊➣coffee-heartcup -text-
┊➣embroiderytext -text-
┊➣flaming -text-
┊➣flowertypo -text-
┊➣funnycup -text-
┊➣fur -text-
┊➣gerbang -text-
┊➣glowrainbow -text-
┊➣gradientavatar -text-
┊➣graffititext -text-
┊➣harrypotter -text-
┊➣lovemessage -text-
┊➣neonlight -text-
┊➣sweetcandy -text-
┊➣summertext -text-
┊➣woodheart -text-
┊➣yellowroses -text-
┊➣wolfmetal -text-
┊➣underwaterocean -text-
└───

%readmore`
let message = await prepareWAMessageMedia({ image: buffer, jpegThumbnail:buffer }, { upload: MikuBotInc.waUploadToServer }, {quoted:m})
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: anu,
hydratedFooterText: `${global.botname}`,
hydratedButtons: [{        
"urlButton": {
"displayText": "SUBSCRIBE",
"url": "https://www.youtube.com/c/dripsOFC"
}
}, {
urlButton: {
displayText: 'GITHUB',
url: 'https://github.com/zim-bot/zimbot-v4/fork'
}
}
]
}
}
}), { userJid: m.chat })
MikuBotInc.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
 default:
   if (budy.startsWith('=>')) {
  if (!isCreator) return reply(global.owner)
  function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
  if (sat == undefined) {
 bang = util.format(sul)
  }
  return reply(bang)
  }
  try {
reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
  } catch (e) {
reply(String(e))
  }
   }

   if (budy.startsWith('>')) {
  if (!isCreator) return reply(global.owner)
  try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
  } catch (err) {
await reply(String(err))
  }
   }

   if (budy.startsWith('$')) {
  if (!isCreator) return reply(global.owner)
  exec(budy.slice(2), (err, stdout) => {
if(err) return reply(err)
if (stdout) return reply(stdout)
  })
   }

if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
  this.anonymous = this.anonymous ? this.anonymous : {}
  let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
  if (room) {
if (/^.*(next|leave|start)/.test(m.text)) return
if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
let other = [room.a, room.b].find(user => user !== m.sender)
m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
  contextInfo: {
 ...m.msg.contextInfo,
 forwardingScore: 0,
 isForwarded: true,
 participant: other
  }
} : {})
  }
  return !0
   }
   if (antiToxic)
   if (bad.includes(MikuBotIncv3)) {
   if (m.text) {
   zimbotv3 = `*▊▊▊ANTIBAD WORDS▊▊▊*\n\n*Lucky you, you are admin*`
   if (isAdmins) return reply(zimbotv3)
   if (m.key.fromMe) return reply(zimbotv3)
   if (isCreator) return reply(zimbotv3)
   kice = m.sender
   await MikuBotInc.groupParticipantsUpdate(m.chat, [kice], 'remove')
   MikuBotInc.sendMessage(from, {text:`*▊▊▊ANTIBAD WORDS▊▊▊*\n\n@${kice.split("@")[0]} *was kicked because of being rude to others in this group*`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})}
   }
if (isCmd && budy.toLowerCase() != undefined) {
    if (m.chat.endsWith('broadcast')) return
    if (m.isBaileys) return
    let msgs = global.db.database
    if (!(budy.toLowerCase() in msgs)) return
    MikuBotInc.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
}
}


    } catch (err) {
m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
