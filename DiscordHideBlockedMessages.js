//META{"name":"DiscordHideBlockedMessages","description":"Hides blocked messages.","author":"Nos","version":"1.0","website":"https://discord.gg/Wre2C4H","source":"https://github.com/IAmNotNos/DiscordHideBlockedMessages/blob/master/DiscordHideBlockedMessages.js"}*//

// Description: This script hides the "Hides blocked messages." div.

/* -- SCRIPT START -- */

// Recursive IIFE (Immediately-Invoked Function Expression)
(function hideBlocked(){
	// Find all elements with class .message-group-blocked
	document.querySelectorAll('.message-group-blocked')
	
	// For each element found, apply an inline style that hides that element
	.forEach(div => div.setAttribute("style", "display: none;"));

	// Run again every half-second 
	setTimeout(hideBlocked,500);
})();
