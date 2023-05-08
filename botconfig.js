module.exports = {
  Admins: ["UserID", "UserID"], //Admins of the bot
  ExpressServer: true,//If you wanted to make the website run or not
  DefaultPrefix: process.env.Prefix || ">", //Default prefix, Server Admins can change the prefix
  Port: 3000, //Which port website gonna be hosted
  SupportServer: "https://discord.gg/CShZn7pqTW", //Support Server Link
  Token: process.env.Token || "OTIxMDg4OTYyMzY4NTAzOTM4.Ybt08Q.IuyGvxc7IOQayqzaOOsoqdLsze4", //Discord Bot Token
  ClientID: process.env.Discord_ClientID || "921088962368503938", //Discord Client ID
  ClientSecret: process.env.Discord_ClientSecret || "j1I_xfHxmahkGCFYpCYquf56UKkih6qx", //Discord Client Secret
  Scopes: ["identify", "guilds", "applications.commands"], //Discord OAuth2 Scopes
  CallbackURL: "/api/callback", //Discord OAuth2 Callback URL
  "24/7": true, //If you want the bot to be stay in the vc 24/7
  CookieSecret: "Pikachu is cute", //A Secret like a password
  IconURL:
    "https://cdn.discordapp.com/attachments/736000471747264673/888812099764121710/ezgif-4-91a592668d96.gif", //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  EmbedColor: "#ffc0cb", //Color of most embeds | Dont edit unless you want a specific color instead of a random one each time
  Permissions: 2205280576, //Bot Inviting Permissions
  Website: process.env.Website || "http://localhost", //Website where it was hosted at includes http or https || Use "0.0.0.0" if you using Heroku

  //Lavalink
   Lavalink: {
    id: "Main",
    host: "lava.link",
    port: 80,
    pass: "lalisaloveme", 
    secure: false, // Set this to true if you're self-hosting lavalink on replit.
  },


  //Please go to https://developer.spotify.com/dashboard/
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "c527969139234307acb617b279c9d472", //Spotify Client ID
    ClientSecret: process.env.Spotify_ClientSecret || "8a36f2d920744cdf90f2b76690e1ba22", //Spotify Client Secret
  },
};