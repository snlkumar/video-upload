tinyMCEPopup.requireLangPack();var PasteWordDialog={init:function(){var a=tinyMCEPopup.editor,b=document.getElementById("iframecontainer"),c,d,e,f="";b.innerHTML='<iframe id="iframe" src="javascript:\'\';" frameBorder="0" style="border: 1px solid gray"></iframe>',c=document.getElementById("iframe"),d=c.contentWindow.document,e=[a.baseURI.toAbsolute("themes/"+a.settings.theme+"/skins/"+a.settings.skin+"/content.css")],e=e.concat(tinymce.explode(a.settings.content_css)||[]),tinymce.each(e,function(b){f+='<link href="'+a.documentBaseURI.toAbsolute(""+b)+'" rel="stylesheet" type="text/css" />'}),d.open(),d.write("<html><head>"+f+'</head><body class="mceContentBody" spellcheck="false"></body></html>'),d.close(),d.designMode="on",this.resize(),window.setTimeout(function(){c.contentWindow.focus()},10)},insert:function(){var a=document.getElementById("iframe").contentWindow.document.body.innerHTML;tinyMCEPopup.editor.execCommand("mceInsertClipboardContent",!1,{content:a,wordContent:!0}),tinyMCEPopup.close()},resize:function(){var a=tinyMCEPopup.dom.getViewPort(window),b;b=document.getElementById("iframe"),b&&(b.style.width=a.w-20+"px",b.style.height=a.h-90+"px")}};tinyMCEPopup.onInit.add(PasteWordDialog.init,PasteWordDialog);