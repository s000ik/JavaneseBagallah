const DiscordMusicBot = require("./structures/DiscordMusicBot");
const client = new DiscordMusicBot();

const keepAlive = require("./server");

client.build();

module.exports = client; //;-;""