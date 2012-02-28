(function(){tinymce.create("tinymce.plugins.WordCount",{block:0,id:null,countre:null,cleanre:null,init:function(a,b){var c=this,d=0;c.countre=a.getParam("wordcount_countregex",/[\w\u2019\'-]+/g),c.cleanre=a.getParam("wordcount_cleanregex",/[0-9.(),;:!?%#$?\'\"_+=\\\/-]*/g),c.id=a.id+"-word-count",a.onPostRender.add(function(a,b){var d,e;e=a.getParam("wordcount_target_id"),e?tinymce.DOM.add(e,"span",{},'<span id="'+c.id+'">0</span>'):(d=tinymce.DOM.get(a.id+"_path_row"),d&&tinymce.DOM.add(d.parentNode,"div",{style:"float: right"},a.getLang("wordcount.words","Words: ")+'<span id="'+c.id+'">0</span>'))}),a.onInit.add(function(a){a.selection.onSetContent.add(function(){c._count(a)}),c._count(a)}),a.onSetContent.add(function(a){c._count(a)}),a.onKeyUp.add(function(a,b){if(b.keyCode==d)return;(13==b.keyCode||8==d||46==d)&&c._count(a),d=b.keyCode})},_getCount:function(a){var b=0,c=a.getContent({format:"raw"});if(c){c=c.replace(/\.\.\./g," "),c=c.replace(/<.[^<>]*?>/g," ").replace(/&nbsp;|&#160;/gi," "),c=c.replace(/(\w+)(&.+?;)+(\w+)/,"$1$3").replace(/&.+?;/g," "),c=c.replace(this.cleanre,"");var d=c.match(this.countre);d&&(b=d.length)}return b},_count:function(a){var b=this;if(b.block)return;b.block=1,setTimeout(function(){if(!a.destroyed){var c=b._getCount(a);tinymce.DOM.setHTML(b.id,c.toString()),setTimeout(function(){b.block=0},2e3)}},1)},getInfo:function(){return{longname:"Word Count plugin",author:"Moxiecode Systems AB",authorurl:"http://tinymce.moxiecode.com",infourl:"http://wiki.moxiecode.com/index.php/TinyMCE:Plugins/wordcount",version:tinymce.majorVersion+"."+tinymce.minorVersion}}}),tinymce.PluginManager.add("wordcount",tinymce.plugins.WordCount)})();