(function(e,o,s,n){"use strict";let i=[],a=n.FindByProps("sendBotMessage"),r=n.FindByProps("sendMessage","receiveMessage");var c={onLoad:function(){o.logger.log("Registering commands..."),i=s.registerCommand({name:"ompinfo",displayName:"ompinfo",description:"Get information about function/callbacks from open.mp docs",displayDescription:"Get information about function/callbacks from open.mp docs",options:[{name:"term",displayName:"term",description:"The term you want to search from wiki",displayDescription:"The term you want to search from wiki",required:!0,type:3}],type:1,applicationId:"-1",inputType:1,execute:function(d,t){r.sendMessage(t.channel.id,{content:"Hello world!"}),a.sendMessage(t.channel.id,"Hello too!")}}),o.logger.log("Success registering /ompinfo commands.")},onUnload:function(){o.logger.log("Unload omp-wiki plugins."),i()}};return e.default=c,Object.defineProperty(e,"__esModule",{value:!0}),e})({},vendetta,vendetta.commands,vendetta.metro);
