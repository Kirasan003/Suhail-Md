const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349137594086";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "true"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDcyLFxuICAgICAgICA0OCxcbiAgICAgICAgMTQxLFxuICAgICAgICA3MixcbiAgICAgICAgMTk4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTIzLFxuICAgICAgICA5OSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTksXG4gICAgICAgIDY3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTQyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDYyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTg5LFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTY3LFxuICAgICAgICA5NyxcbiAgICAgICAgMzUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTcxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDY1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTIzLFxuICAgICAgICA5MyxcbiAgICAgICAgOTYsXG4gICAgICAgIDI1MixcbiAgICAgICAgNjgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjM3LFxuICAgICAgICA4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDk4LFxuICAgICAgICAxNyxcbiAgICAgICAgMTE2LFxuICAgICAgICA0NSxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNzAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxODMsXG4gICAgICAgIDM3LFxuICAgICAgICAxODAsXG4gICAgICAgIDExLFxuICAgICAgICA1NCxcbiAgICAgICAgMTMsXG4gICAgICAgIDc2LFxuICAgICAgICAxMSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxODYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTE0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDk2LFxuICAgICAgICAzNixcbiAgICAgICAgMTE3LFxuICAgICAgICA2OCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE2NixcbiAgICAgICAgODAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjAsXG4gICAgICAgIDQsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcxLFxuICAgICAgICA1MSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyOCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyOCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTI1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDM3LFxuICAgICAgICAxNjksXG4gICAgICAgIDE4OCxcbiAgICAgICAgODIsXG4gICAgICAgIDk4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgOTAsXG4gICAgICAgIDM5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMzgsXG4gICAgICAgIDU3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMjI2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDkyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDExOSxcbiAgICAgICAgOTEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMDksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjExLFxuICAgICAgICA1NSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgODEsXG4gICAgICAgIDksXG4gICAgICAgIDE5NSxcbiAgICAgICAgODQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMzksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNSxcbiAgICAgICAgNyxcbiAgICAgICAgNzMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjQxLFxuICAgICAgICA1MyxcbiAgICAgICAgODgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjA4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgOTYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNDYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDExOFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTY5LFxuICAgICAgICA1MSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDMwLFxuICAgICAgICA4MixcbiAgICAgICAgMzgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjUwLFxuICAgICAgICA0MixcbiAgICAgICAgMzUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNTEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDg0LFxuICAgICAgICAyMTksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTUxLFxuICAgICAgICA4OSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxODYsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDkzLFxuICAgICAgICA4NyxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE1LFxuICAgICAgICA4OCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNjIsXG4gICAgICAgIDExMSxcbiAgICAgICAgNTksXG4gICAgICAgIDc4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDM0LFxuICAgICAgICAxNSxcbiAgICAgICAgMTE3LFxuICAgICAgICA5MixcbiAgICAgICAgMTM4LFxuICAgICAgICAzMSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMyxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTI0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDc0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE5MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJjeFhhcjNYWVgxaHBUYVdscVI1KzdJNk9MTGhTSGtHZ0k3SWYzQkRYYXJzPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJYSGh5Rnpzd1NIU3gxN1NYb013OVdnXCIsXG4gIFwicGhvbmVJZFwiOiBcImVmMWFmNjRhLTkxNTMtNDQ2OS1hNTYyLTQ4MjRlNzllOTAyOFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDksXG4gICAgICAyMzQsXG4gICAgICA2MyxcbiAgICAgIDU2LFxuICAgICAgOTUsXG4gICAgICAxMTQsXG4gICAgICAxMjksXG4gICAgICAyNSxcbiAgICAgIDksXG4gICAgICAyMDUsXG4gICAgICA5NixcbiAgICAgIDE4NCxcbiAgICAgIDE4MCxcbiAgICAgIDUyLFxuICAgICAgMTQyLFxuICAgICAgOCxcbiAgICAgIDEzOSxcbiAgICAgIDIzNCxcbiAgICAgIDI0NyxcbiAgICAgIDE5MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0NyxcbiAgICAgIDUyLFxuICAgICAgMTI2LFxuICAgICAgMzEsXG4gICAgICAyMTYsXG4gICAgICAzNixcbiAgICAgIDEzOCxcbiAgICAgIDI1MCxcbiAgICAgIDYxLFxuICAgICAgNTEsXG4gICAgICAxNjUsXG4gICAgICA3OSxcbiAgICAgIDE2MyxcbiAgICAgIDI0MixcbiAgICAgIDQzLFxuICAgICAgMTQ2LFxuICAgICAgMTk0LFxuICAgICAgMTYwLFxuICAgICAgMTcsXG4gICAgICAxMDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQTNTVjczRkhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxMzc1OTQwODY6MjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJFbW1hbnVlbFwiLFxuICAgIFwibGlkXCI6IFwiMjY1MjYwMzY3OTU1OTM6MjNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS2ZTMXVZRkVLZVY1YlFHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJNZ2JFTkxpc1crdEszK3ZBZjlRWlh6ZDJLVUVDSFkyS0p4ZXdNT0ZSdUMwPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInQvYnRmSWprUE03M1FJU0RqVjVEVWtRR00zTlRCSlcyT3NxbmJrSGgyekZlMElsVmpKSkxUY0l4eGxjR0JmQlB3WC9JM3FEMXgxMXVFaG5QYTFrM0FBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIndOOHlEZURHL0hoVjdnbnRMV1gyU2NOOE9sUkdUWGR2Y280NG0zUGdhQWlESXVwOFN1ay92U041VlgyS3lDSmhTeXRybGhvbllKdDVIWFphZlVlVmpBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxMzc1OTQwODY6MjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNDVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTMyMjE1NlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Қɪ尺Λ",
  packname: process.env.PACK_NAME || "Қɪ尺Λ",
  botname : process.env.BOT_NAME  || "Қɪ尺Λ-MD",
  ownername:process.env.OWNER_NAME|| "Қɪ尺Λ",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
