import { Lib } from "./lib";

// the data powering the chart
// please keep in the same order as Discord's docs (https://discord.dev/topics/community-resources#libraries-discord-libraries):
// sort language alphabetically and then name alphabetically

export const libs: Lib[] = [
	{
		name: 'Orca',
		url: 'https://github.com/cee-studio/orca',
		language: 'C',
		apiVer: 9,
		gwVer: 9,
		applicationCommands: {
			slashCommands: 'Yes',
			contextMenus: 'Yes',
			autocomplete: 'No'
		},
		messageComponents: {
			buttons: 'Yes',
			selectMenus: 'Yes'
		},
		threads: 'Yes',
		guildStickers: 'No'
	},
	{
		name: 'Discord .Net Labs',
		url: 'https://github.com/Discord-Net-Labs/Discord.Net-Labs',
		language: 'C#',
		apiVer: 9,
		gwVer: 9,
		applicationCommands: {
			slashCommands: 'Yes',
			contextMenus: 'Yes',
			autocomplete: 'Yes'
		},
		messageComponents: {
			buttons: 'Yes',
			selectMenus: 'Yes'
		},
		threads: 'Yes',
		guildStickers: 'Yes'
	},
	{
		name: 'aegis.cpp 🪦',
		url: 'https://github.com/zeroxs/aegis.cpp',
		language: 'C++',
		apiVer: 6,
		gwVer: 6,
		applicationCommands: {
			slashCommands: 'No',
			contextMenus: 'No',
			autocomplete: 'No'
		},
		messageComponents: {
			buttons: 'No',
			selectMenus: 'No'
		},
		threads: 'No',
		guildStickers: 'No'
	},
	{
		name: 'D++',
		url: 'https://github.com/brainboxdotcc/DPP',
		language: 'C++',
		apiVer: 9,
		gwVer: 9,
		applicationCommands: {
			slashCommands: 'Yes',
			contextMenus: 'Yes',
			autocomplete: 'Yes'
		},
		messageComponents: {
			buttons: 'Yes',
			selectMenus: 'Yes'
		},
		threads: 'Yes',
		guildStickers: 'Yes'
	},
	{
		name: 'Discord++',
		url: 'https://github.com/DiscordPP/discordpp',
		language: 'C++',
		apiVer: 9,
		gwVer: 9,
		applicationCommands: {
			slashCommands: 'Yes',
			contextMenus: 'Yes',
			autocomplete: 'No'
		},
		messageComponents: {
			buttons: 'Yes',
			selectMenus: 'Yes'
		},
		threads: 'Yes',
		guildStickers: 'Yes'
	},
	{
		name: 'Sleepy Discord',
		url: 'https://github.com/yourWaifu/sleepy-discord',
		language: 'C++',
		apiVer: '6 stable, 8 dev',
		gwVer: '6 stable, 8 dev',
		applicationCommands: {
			slashCommands: 'Dev Version',
			contextMenus: 'Dev Version',
			autocomplete: 'No'
		},
		messageComponents: {
			buttons: 'Dev Version',
			selectMenus: 'Dev Version'
		},
		threads: 'No',
		guildStickers: 'No'
	},
	{
		name: 'DiscordGo',
		url: 'https://github.com/bwmarrin/discordgo',
		language: 'Go',
		apiVer: 8,
		gwVer: 8,
		applicationCommands: {
			slashCommands: 'Yes',
			contextMenus: 'Yes',
			autocomplete: {
				text: 'Has a PR',
				url: 'https://github.com/bwmarrin/discordgo/pull/1014'
			}
		},
		messageComponents: {
			buttons: 'Yes',
			selectMenus: 'Yes'
		},
		threads: {
			text: 'Has a PR',
			url: 'https://github.com/bwmarrin/discordgo/pull/982'
		},
		guildStickers: {
			text: 'Has a PR',
			url: 'https://github.com/bwmarrin/discordgo/pull/982'
		}
	},
	{
		name: 'disgo',
		url: 'https://github.com/DisgoOrg/disgo',
		language: 'Go',
		apiVer: 9,
		gwVer: 9,
		applicationCommands: {
			slashCommands: 'Yes',
			contextMenus: 'Yes',
			autocomplete: 'Yes'
		},
		messageComponents: {
			buttons: 'Yes',
			selectMenus: 'Yes'
		},
		threads: {
			text: 'Has a PR',
			url: 'https://github.com/DisgoOrg/disgo/pull/92'
		},
		guildStickers: 'Yes'
	},
	{
		name: 'Disgord',
		url: 'https://github.com/andersfylling/disgord',
		language: 'Go',
		apiVer: 9,
		gwVer: 9,
		applicationCommands: {
			slashCommands: 'Dev Version',
			contextMenus: 'Dev Version',
			autocomplete: 'No'
		},
		messageComponents: {
			buttons: 'Yes',
			selectMenus: 'No'
		},
		threads: 'No',
		guildStickers: 'Yes'
	},
	{
		name: 'Calamity',
		url: 'https://github.com/simmsb/calamity',
		language: 'Haskell',
		apiVer: 9,
		gwVer: 9,
		applicationCommands: {
			slashCommands: 'No',
			contextMenus: 'No',
			autocomplete: 'No'
		},
		messageComponents: {
			buttons: 'No',
			selectMenus: 'No'
		},
		threads: 'No',
		guildStickers: 'No'
	},
	{
		name: 'Discord4J',
		url: 'https://github.com/Discord4J/Discord4J',
		language: 'Java',
		apiVer: '8 stable, 9 dev',
		gwVer: '8 stable, 9 dev',
		applicationCommands: {
			slashCommands: 'Yes',
			contextMenus: 'Yes',
			autocomplete: 'Yes'
		},
		messageComponents: {
			buttons: 'Yes',
			selectMenus: 'Yes'
		},
		threads: {
			text: 'Dev Version',
			url: 'https://github.com/Discord4J/Discord4J/issues/958'
		},
		guildStickers: 'No'
	},
	{
		name: 'Javacord',
		url: 'https://github.com/Javacord/Javacord',
		language: 'Java',
		apiVer: 8,
		gwVer: 8,
		applicationCommands: {
			slashCommands: 'Yes',
			contextMenus: 'No',
			autocomplete: 'No'
		},
		messageComponents: {
			buttons: 'Yes',
			selectMenus: 'Yes'
		},
		threads: 'No',
		guildStickers: 'No'
	},
	{
		name: 'JDA',
		url: 'https://github.com/DV8FromTheWorld/JDA',
		language: 'Java',
		apiVer: 8,
		gwVer: 8,
		applicationCommands: {
			slashCommands: 'Yes',
			contextMenus: {
				text: 'Has a PR',
				url: 'https://github.com/DV8FromTheWorld/JDA/pull/1769'
			},
			autocomplete: {
				text: 'Has a PR',
				url: 'https://github.com/DV8FromTheWorld/JDA/pull/1868'
			}
		},
		messageComponents: {
			buttons: 'Yes',
			selectMenus: 'Yes'
		},
		threads: {
			text: 'Has a PR',
			url: 'https://github.com/DV8FromTheWorld/JDA/pull/1613'
		},
		guildStickers: 'No',
	},
	{
		name: 'Detritus',
		url: 'https://github.com/detritusjs/client',
		language: 'JavaScript',
		apiVer: 9,
		gwVer: 9,
		applicationCommands: {
			slashCommands: 'Yes',
			contextMenus: 'Yes',
			autocomplete: 'No'
		},
		messageComponents: {
			buttons: 'Yes',
			selectMenus: 'Yes'
		},
		threads: 'Yes',
		guildStickers: 'Yes'
	},
	{
		name: 'Discordeno',
		url: 'https://github.com/discordeno/discordeno',
		language: 'JavaScript',
		apiVer: 9,
		gwVer: 9,
		applicationCommands: {
			slashCommands: 'Yes',
			contextMenus: 'Yes',
			autocomplete: 'Yes'
		},
		messageComponents: {
			buttons: 'Yes',
			selectMenus: 'Yes'
		},
		threads: 'Yes',
		guildStickers: 'Yes',
	},
	{
		name: 'discord.js',
		url: 'https://github.com/discordjs/discord.js',
		language: 'JavaScript',
		apiVer: 9,
		gwVer: 9,
		applicationCommands: {
			slashCommands: 'Yes',
			contextMenus: 'Yes',
			autocomplete: 'Yes'
		},
		messageComponents: {
			buttons: 'Yes',
			selectMenus: 'Yes'
		},
		threads: 'Yes',
		guildStickers: 'Yes'
	},
	{
		name: 'droff',
		url: 'https://github.com/tim-smart/droff',
		language: 'JavaScript',
		apiVer: 9,
		gwVer: 9,
		applicationCommands: {
			slashCommands: 'Yes',
			contextMenus: 'Yes',
			autocomplete: 'No'
		},
		messageComponents: {
			buttons: 'Yes',
			selectMenus: 'Yes'
		},
		threads: 'Yes',
		guildStickers: 'Yes'
	},
	{
		name: 'Eris',
		url: 'https://github.com/abalabahaha/eris',
		language: 'JavaScript',
		apiVer: 9,
		gwVer: 9,
		applicationCommands: {
			slashCommands: 'Yes',
			contextMenus: 'Yes',
			autocomplete: 'Yes'
		},
		messageComponents: {
			buttons: 'Yes',
			selectMenus: 'Yes'
		},
		threads: 'Yes',
		guildStickers: 'Yes'
	},
	{
		name: 'Harmony',
		url: 'https://github.com/harmonyland/harmony',
		language: 'JavaScript',
		apiVer: 9,
		gwVer: 9,
		applicationCommands: {
			slashCommands: 'Yes',
			contextMenus: 'Yes',
			autocomplete: 'Yes'
		},
		messageComponents: {
			buttons: 'Yes',
			selectMenus: 'Yes'
		},
		threads: 'Yes',
		guildStickers: 'Yes'
	},
	{
		name: 'Kord',
		url: 'https://github.com/kordlib/kord',
		language: 'Kotlin',
		apiVer: '8 stable, 9 dev',
		gwVer: '8 stable, 9 dev',
		applicationCommands: {
			slashCommands: 'Yes',
			contextMenus: 'Dev Version',
			autocomplete: {
				text: 'Has a PR',
				url: 'https://github.com/kordlib/kord/pull/435'
			}
		},
		messageComponents: {
			buttons: 'Yes',
			selectMenus: 'Yes'
		},
		threads: 'Dev Version',
		guildStickers: {
			text: 'Has a PR',
			url: 'https://github.com/kordlib/kord/pull/328'
		}
	},
	{
		name: 'Discordia',
		url: 'https://github.com/SinisterRectus/Discordia',
		language: 'Lua',
		apiVer: '7 stable, 8 dev',
		gwVer: '6 stable, 8 dev',
		applicationCommands: {
			slashCommands: 'No',
			contextMenus: 'No',
			autocomplete: 'No'
		},
		messageComponents: {
			buttons: 'No',
			selectMenus: 'No'
		},
		threads: 'No',
		guildStickers: 'No'
	},
	{
		name: 'Dimscord',
		url: 'https://github.com/krisppurg/dimscord',
		language: 'Nim',
		apiVer: '6, 8, and 9',
		gwVer: '8 and 9',
		applicationCommands: {
			slashCommands: 'Yes',
			contextMenus: 'Yes',
			autocomplete: 'Dev Version'
		},
		messageComponents: {
			buttons: 'Yes',
			selectMenus: 'Yes'
		},
		threads: 'Yes',
		guildStickers: 'Yes'
	},
	{
		name: 'DiscordPHP',
		url: 'https://github.com/discord-php/DiscordPHP',
		language: 'PHP',
		apiVer: 8,
		gwVer: 8,
		applicationCommands: {
			slashCommands: 'No',
			contextMenus: 'No',
			autocomplete: 'No'
		},
		messageComponents: {
			buttons: 'Yes',
			selectMenus: 'Yes'
		},
		threads: 'Yes',
		guildStickers: 'Yes',
	},
	{
		name: 'discord.py 🪦',
		url: 'https://github.com/Rapptz/discord.py',
		language: 'Python',
		apiVer: '7 stable, 8 dev',
		gwVer: '6 stable, 9 dev',
		applicationCommands: {
			slashCommands: 'No',
			contextMenus: 'No',
			autocomplete: 'No'
		},
		messageComponents: {
			buttons: 'Dev Version',
			selectMenus: 'Dev Version'
		},
		threads: 'Dev Version',
		guildStickers: 'Dev Version',
	},
	{
		name: 'hata',
		url: 'https://github.com/HuyaneMatsu/hata',
		language: 'Python',
		apiVer: '6, 7, 8, and 9',
		gwVer: '6, 7, 8, and 9',
		applicationCommands: {
			slashCommands: 'Yes',
			contextMenus: 'Yes',
			autocomplete: 'Yes'
		},
		messageComponents: {
			buttons: 'Yes',
			selectMenus: 'Yes'
		},
		threads: 'Yes',
		guildStickers: 'Yes',
	},
	{
		name: 'hikari',
		url: 'https://github.com/hikari-py/hikari',
		language: 'Python',
		apiVer: 8,
		gwVer: 8,
		applicationCommands: {
			slashCommands: 'Yes',
			contextMenus: 'No',
			autocomplete: 'No'
		},
		messageComponents: {
			buttons: 'Dev Version',
			selectMenus: 'Dev Version'
		},
		threads: 'No',
		guildStickers: 'Yes'
	},
	{
		name: 'discordrb',
		url: 'https://github.com/shardlab/discordrb',
		language: 'Ruby',
		apiVer: 8,
		gwVer: 8,
		applicationCommands: {
			slashCommands: 'Yes',
			contextMenus: 'Yes',
			autocomplete: 'No'
		},
		messageComponents: {
			buttons: 'Yes',
			selectMenus: 'Yes'
		},
		threads: 'No',
		guildStickers: 'No'
	},
	{
		name: 'Serenity',
		url: 'https://github.com/serenity-rs/serenity',
		language: 'Rust',
		apiVer: 9,
		gwVer: 9,
		applicationCommands: {
			slashCommands: 'Yes',
			contextMenus: 'Dev Version',
			autocomplete: 'Dev Version'
		},
		messageComponents: {
			buttons: 'Yes',
			selectMenus: 'Yes'
		},
		threads: 'Yes',
		guildStickers: 'Yes'
	},
	{
		name: 'Twilight',
		url: 'https://github.com/twilight-rs/twilight',
		language: 'Rust',
		apiVer: 8,
		gwVer: 8,
		applicationCommands: {
			slashCommands: 'Yes',
			contextMenus: 'No',
			autocomplete: {
				text: 'Has a PR',
				url: 'https://github.com/twilight-rs/twilight/pull/1228'
			}
		},
		messageComponents: {
			buttons: 'Yes',
			selectMenus: 'Yes'
		},
		threads: 'Yes',
		guildStickers: 'Yes'
	},
	{
		name: 'AckCord',
		url: 'https://github.com/Katrix/AckCord',
		language: 'Scala',
		apiVer: '6 stable, 9 dev',
		gwVer: '6 stable, 9 dev',
		applicationCommands: {
			slashCommands: 'Dev Version',
			contextMenus: 'No',
			autocomplete: 'No'
		},
		messageComponents: {
			buttons: 'Dev Version',
			selectMenus: 'Dev Version'
		},
		threads: 'Dev Version',
		guildStickers: 'Dev Version'
	}
]
