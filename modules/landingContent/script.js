function module_landingContent(o,i){this.html=String('<h1>Built for developers<\/h1><p> RockJS is a JavaScript framework inspired by the way you work.<br \/> From open source to business, you can build a powerful and fast crossplatform software alongside millions of other developers. <\/p><a class="button" href="#\/doc">Get Started<\/a><a class="button" href="https:\/\/github.com\/w3core\/RockJS\/archive\/master.zip">Download RockJS<\/a>');this.css=String('html,body{background-color:#202225!important}.content-area:before{content:"";width:100%;height:0;display:block;position:absolute;bottom:0;left:0;box-shadow:0 0 50em 6em #000;border-radius:50%;z-index:2}.content-area:after{content:"";position:absolute;z-index:1;bottom:0;left:0;width:100%;height:40%;background:url(.\/bg.png) no-repeat center bottom;background-size:contain}.module-docHeader{background-color:#202225;box-shadow:none}.module-docHeader .brand{text-shadow:0 0 .5em;color:#98c379}.module-docHeader .brand:active{color:#fff}@media (max-width:800px){.module-docHeader .logo{position:relative!important}.module-docHeader .expander{position:absolute;right:0}.module-docHeader .menu{display:block;position:absolute;right:.5em;top:100%;margin:0;border-radius:.5em;box-shadow:0 0 1em #000;background:#202225;transform-origin:top right;transform:scale(0);opacity:0;transition:transform .2s,opacity .2s}.module-docHeader .menu:before{content:"";display:block;position:absolute;width:1em;height:1em;right:.7em;transform-origin:top right;transform:rotate(45deg);background:#202225;box-shadow:-.17em -.17em .3em rgba(0,0,0,.5)}.module-docHeader .menu.active{transform:scale(1);opacity:1}.module-docHeader .menu>*{position:relative;display:block;padding:0 1em}#this p{text-align:justify}}.module-docHeader .menu a{color:#66666f}.module-docHeader .menu a:hover{color:#98c379;text-shadow:0 0 1em}.module-docHeader .menu a:active{color:#fff;background:none}.sidebar-area{display:none}.module-docSearchResults{z-index:4;top:0;background:rgba(32,34,37,.9)}.module-docSearchResults .entry{padding:.5em 1em}.module-docSearchResults .entry .title{color:#98c379;transition:color .2s}.module-docSearchResults .entry:hover .title{color:#fff}.module-docSearchResults .entry .num{display:none}#this{position:absolute;z-index:3;top:45%;left:50%;transform:translate(-50%,-45%);text-align:center}#this h1{font-family:monospace;margin:0}#this>.button{display:inline-block;margin:1em .5em 0;padding:.7em 1.4em;min-width:12em;color:#98c379;border:1px solid #98c379;border-radius:.5em;background-color:rgba(0,0,0,.2);font-family:monospace;text-transform:uppercase;text-align:center}html:not(.mobile) #this>.button:hover,html.mobile #this>.button:active{background:#98c379;color:#202225}@media (max-height:400px){.content-area{overflow:hidden;padding:0}#this{position:relative;top:0;left:0;transform:none;overflow:auto;max-height:100%;padding:1em}}');var e='active';this.onShow=function(){o.on('menu.toggle',a);o.tools.on('click',document,n)};this.onHide=function(){o.off('menu.toggle',a);o.tools.off('click',document,n)};function t(){return document.querySelector('.module-docHeader .menu')};function a(){var a=t();r(!o.tools.hasClass(a,e))};function r(a){var r=t();if(r){o.tools[a?'addClass':'removeClass'](r,e)}};function n(){r()}};