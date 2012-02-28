(function(a){var b=a.DOM,c=a.dom.Event,d=a.extend,e=a.each,f=a.util.Cookie,g,h=a.explode;a.ThemeManager.requireLangPack("advanced"),a.create("tinymce.themes.AdvancedTheme",{sizes:[8,10,12,14,18,24,36],controls:{bold:["bold_desc","Bold"],italic:["italic_desc","Italic"],underline:["underline_desc","Underline"],strikethrough:["striketrough_desc","Strikethrough"],justifyleft:["justifyleft_desc","JustifyLeft"],justifycenter:["justifycenter_desc","JustifyCenter"],justifyright:["justifyright_desc","JustifyRight"],justifyfull:["justifyfull_desc","JustifyFull"],bullist:["bullist_desc","InsertUnorderedList"],numlist:["numlist_desc","InsertOrderedList"],outdent:["outdent_desc","Outdent"],indent:["indent_desc","Indent"],cut:["cut_desc","Cut"],copy:["copy_desc","Copy"],paste:["paste_desc","Paste"],undo:["undo_desc","Undo"],redo:["redo_desc","Redo"],link:["link_desc","mceLink"],unlink:["unlink_desc","unlink"],image:["image_desc","mceImage"],cleanup:["cleanup_desc","mceCleanup"],help:["help_desc","mceHelp"],code:["code_desc","mceCodeEditor"],hr:["hr_desc","InsertHorizontalRule"],removeformat:["removeformat_desc","RemoveFormat"],sub:["sub_desc","subscript"],sup:["sup_desc","superscript"],forecolor:["forecolor_desc","ForeColor"],forecolorpicker:["forecolor_desc","mceForeColor"],backcolor:["backcolor_desc","HiliteColor"],backcolorpicker:["backcolor_desc","mceBackColor"],charmap:["charmap_desc","mceCharMap"],visualaid:["visualaid_desc","mceToggleVisualAid"],anchor:["anchor_desc","mceInsertAnchor"],newdocument:["newdocument_desc","mceNewDocument"],blockquote:["blockquote_desc","mceBlockQuote"]},stateControls:["bold","italic","underline","strikethrough","bullist","numlist","justifyleft","justifycenter","justifyright","justifyfull","sub","sup","blockquote"],init:function(c,f){var g=this,h,i,j;g.editor=c,g.url=f,g.onResolveName=new a.util.Dispatcher(this),c.forcedHighContrastMode=c.settings.detect_highcontrast&&g._isHighContrast(),c.settings.skin=c.forcedHighContrastMode?"highcontrast":c.settings.skin,g.settings=h=d({theme_advanced_path:!0,theme_advanced_toolbar_location:"bottom",theme_advanced_buttons1:"bold,italic,underline,strikethrough,|,justifyleft,justifycenter,justifyright,justifyfull,|,styleselect,formatselect",theme_advanced_buttons2:"bullist,numlist,|,outdent,indent,|,undo,redo,|,link,unlink,anchor,image,cleanup,help,code",theme_advanced_buttons3:"hr,removeformat,visualaid,|,sub,sup,|,charmap",theme_advanced_blockformats:"p,address,pre,h1,h2,h3,h4,h5,h6",theme_advanced_toolbar_align:"center",theme_advanced_fonts:"Andale Mono=andale mono,times;Arial=arial,helvetica,sans-serif;Arial Black=arial black,avant garde;Book Antiqua=book antiqua,palatino;Comic Sans MS=comic sans ms,sans-serif;Courier New=courier new,courier;Georgia=georgia,palatino;Helvetica=helvetica;Impact=impact,chicago;Symbol=symbol;Tahoma=tahoma,arial,helvetica,sans-serif;Terminal=terminal,monaco;Times New Roman=times new roman,times;Trebuchet MS=trebuchet ms,geneva;Verdana=verdana,geneva;Webdings=webdings;Wingdings=wingdings,zapf dingbats",theme_advanced_more_colors:1,theme_advanced_row_height:23,theme_advanced_resize_horizontal:1,theme_advanced_resizing_use_cookie:1,theme_advanced_font_sizes:"1,2,3,4,5,6,7",theme_advanced_font_selector:"span",theme_advanced_show_current_color:0,readonly:c.settings.readonly},c.settings),h.font_size_style_values||(h.font_size_style_values="8pt,10pt,12pt,14pt,18pt,24pt,36pt"),a.is(h.theme_advanced_font_sizes,"string")&&(h.font_size_style_values=a.explode(h.font_size_style_values),h.font_size_classes=a.explode(h.font_size_classes||""),j={},c.settings.theme_advanced_font_sizes=h.theme_advanced_font_sizes,e(c.getParam("theme_advanced_font_sizes","","hash"),function(a,b){var c;b==a&&a>=1&&a<=7&&(b=a+" ("+g.sizes[a-1]+"pt)",c=h.font_size_classes[a-1],a=h.font_size_style_values[a-1]||g.sizes[a-1]+"pt"),/^\s*\./.test(a)&&(c=a.replace(/\./g,"")),j[b]=c?{"class":c}:{fontSize:a}}),h.theme_advanced_font_sizes=j),(i=h.theme_advanced_path_location)&&i!="none"&&(h.theme_advanced_statusbar_location=h.theme_advanced_path_location),h.theme_advanced_statusbar_location=="none"&&(h.theme_advanced_statusbar_location=0),c.settings.content_css!==!1&&c.contentCSS.push(c.baseURI.toAbsolute(f+"/skins/"+c.settings.skin+"/content.css")),c.onInit.add(function(){c.settings.readonly||(c.onNodeChange.add(g._nodeChanged,g),c.onKeyUp.add(g._updateUndoStatus,g),c.onMouseUp.add(g._updateUndoStatus,g),c.dom.bind(c.dom.getRoot(),"dragend",function(){g._updateUndoStatus(c)}))}),c.onSetProgressState.add(function(a,c,d){var e,f=a.id,h;c?g.progressTimer=setTimeout(function(){e=a.getContainer(),e=e.insertBefore(b.create("DIV",{style:"position:relative"}),e.firstChild),h=b.get(a.id+"_tbl"),b.add(e,"div",{id:f+"_blocker","class":"mceBlocker",style:{width:h.clientWidth+2,height:h.clientHeight+2}}),b.add(e,"div",{id:f+"_progress","class":"mceProgress",style:{left:h.clientWidth/2,top:h.clientHeight/2}})},d||0):(b.remove(f+"_blocker"),b.remove(f+"_progress"),clearTimeout(g.progressTimer))}),b.loadCSS(h.editor_css?c.documentBaseURI.toAbsolute(h.editor_css):f+"/skins/"+c.settings.skin+"/ui.css"),h.skin_variant&&b.loadCSS(f+"/skins/"+c.settings.skin+"/ui_"+h.skin_variant+".css")},_isHighContrast:function(){var a,c=b.add(b.getRoot(),"div",{style:"background-color: rgb(171,239,86);"});return a=(b.getStyle(c,"background-color",!0)+"").toLowerCase().replace(/ /g,""),b.remove(c),a!="rgb(171,239,86)"&&a!="#abef56"},createControl:function(a,b){var c,d;if(d=b.createControl(a))return d;switch(a){case"styleselect":return this._createStyleSelect();case"formatselect":return this._createBlockFormats();case"fontselect":return this._createFontSelect();case"fontsizeselect":return this._createFontSizeSelect();case"forecolor":return this._createForeColorMenu();case"backcolor":return this._createBackColorMenu()}if(c=this.controls[a])return b.createButton(a,{title:"advanced."+c[0],cmd:c[1],ui:c[2],value:c[3]})},execCommand:function(a,b,c){var d=this["_"+a];return d?(d.call(this,b,c),!0):!1},_importClasses:function(a){var b=this.editor,c=b.controlManager.get("styleselect");c.getLength()==0&&e(b.dom.getClasses(),function(a,d){var e="style_"+d;b.formatter.register(e,{inline:"span",attributes:{"class":a["class"]},selector:"*"}),c.add(a["class"],e)})},_createStyleSelect:function(a){var b=this,d=b.editor,f=d.controlManager,g;return g=f.createListBox("styleselect",{title:"advanced.style_select",onselect:function(a){var b,c=[];return e(g.items,function(a){c.push(a.value)}),d.focus(),d.undoManager.add(),b=d.formatter.matchAll(c),!a||b[0]==a?b[0]&&d.formatter.remove(b[0]):d.formatter.apply(a),d.undoManager.add(),d.nodeChanged(),!1}}),d.onInit.add(function(){var a=0,c=d.getParam("style_formats");c?e(c,function(b){var c,f=0;e(b,function(){f++}),f>1?(c=b.name=b.name||"style_"+a++,d.formatter.register(c,b),g.add(b.title,c)):g.add(b.title)}):e(d.getParam("theme_advanced_styles","","hash"),function(c,e){var f;c&&(f="style_"+a++,d.formatter.register(f,{inline:"span",classes:c,selector:"*"}),g.add(b.editor.translate(e),f))})}),g.getLength()==0&&g.onPostRender.add(function(a,d){g.NativeListBox?c.add(d.id,"focus",b._importClasses,b):(c.add(d.id+"_text","focus",b._importClasses,b),c.add(d.id+"_text","mousedown",b._importClasses,b),c.add(d.id+"_open","focus",b._importClasses,b),c.add(d.id+"_open","mousedown",b._importClasses,b))}),g},_createFontSelect:function(){var a,b=this,c=b.editor;return a=c.controlManager.createListBox("fontselect",{title:"advanced.fontdefault",onselect:function(b){var d=a.items[a.selectedIndex];if(!b&&d){c.execCommand("FontName",!1,d.value);return}return c.execCommand("FontName",!1,b),a.select(function(a){return b==a}),d&&d.value==b&&a.select(null),!1}}),a&&e(c.getParam("theme_advanced_fonts",b.settings.theme_advanced_fonts,"hash"),function(b,d){a.add(c.translate(d),b,{style:b.indexOf("dings")==-1?"font-family:"+b:""})}),a},_createFontSizeSelect:function(){var a=this,b=a.editor,c,d=0,f=[];return c=b.controlManager.createListBox("fontsizeselect",{title:"advanced.font_size",onselect:function(a){var d=c.items[c.selectedIndex];if(!a&&d){d=d.value,d["class"]?(b.formatter.toggle("fontsize_class",{value:d["class"]}),b.undoManager.add(),b.nodeChanged()):b.execCommand("FontSize",!1,d.fontSize);return}return a["class"]?(b.focus(),b.undoManager.add(),b.formatter.toggle("fontsize_class",{value:a["class"]}),b.undoManager.add(),b.nodeChanged()):b.execCommand("FontSize",!1,a.fontSize),c.select(function(b){return a==b}),d&&(d.value.fontSize==a.fontSize||d.value["class"]&&d.value["class"]==a["class"])&&c.select(null),!1}}),c&&e(a.settings.theme_advanced_font_sizes,function(b,e){var f=b.fontSize;f>=1&&f<=7&&(f=a.sizes[parseInt(f)-1]+"pt"),c.add(e,b,{style:"font-size:"+f,"class":"mceFontSize"+d++ +(" "+(b["class"]||""))})}),c},_createBlockFormats:function(){var a,b={p:"advanced.paragraph",address:"advanced.address",pre:"advanced.pre",h1:"advanced.h1",h2:"advanced.h2",h3:"advanced.h3",h4:"advanced.h4",h5:"advanced.h5",h6:"advanced.h6",div:"advanced.div",blockquote:"advanced.blockquote",code:"advanced.code",dt:"advanced.dt",dd:"advanced.dd",samp:"advanced.samp"},c=this;return a=c.editor.controlManager.createListBox("formatselect",{title:"advanced.block",onselect:function(a){return c.editor.execCommand("FormatBlock",!1,a),!1}}),a&&e(c.editor.getParam("theme_advanced_blockformats",c.settings.theme_advanced_blockformats,"hash"),function(d,e){a.add(c.editor.translate(e!=d?e:b[d]),d,{"class":"mce_formatPreview mce_"+d})}),a},_createForeColorMenu:function(){var a,b=this,c=b.settings,d={},e;c.theme_advanced_more_colors&&(d.more_colors_func=function(){b._mceColorPicker(0,{color:a.value,func:function(b){a.setColor(b)}})});if(e=c.theme_advanced_text_colors)d.colors=e;return c.theme_advanced_default_foreground_color&&(d.default_color=c.theme_advanced_default_foreground_color),d.title="advanced.forecolor_desc",d.cmd="ForeColor",d.scope=this,a=b.editor.controlManager.createColorSplitButton("forecolor",d),a},_createBackColorMenu:function(){var a,b=this,c=b.settings,d={},e;c.theme_advanced_more_colors&&(d.more_colors_func=function(){b._mceColorPicker(0,{color:a.value,func:function(b){a.setColor(b)}})});if(e=c.theme_advanced_background_colors)d.colors=e;return c.theme_advanced_default_background_color&&(d.default_color=c.theme_advanced_default_background_color),d.title="advanced.backcolor_desc",d.cmd="HiliteColor",d.scope=this,a=b.editor.controlManager.createColorSplitButton("backcolor",d),a},renderUI:function(d){var f,g,h,i=this,j=i.editor,k=i.settings,l,m,n;j.settings&&(j.settings.aria_label=k.aria_label+j.getLang("advanced.help_shortcut")),f=m=b.create("span",{role:"application","aria-labelledby":j.id+"_voice",id:j.id+"_parent","class":"mceEditor "+j.settings.skin+"Skin"+(k.skin_variant?" "+j.settings.skin+"Skin"+i._ufirst(k.skin_variant):"")}),b.add(f,"span",{"class":"mceVoiceLabel",style:"display:none;",id:j.id+"_voice"},k.aria_label),b.boxModel||(f=b.add(f,"div",{"class":"mceOldBoxModel"})),f=l=b.add(f,"table",{role:"presentation",id:j.id+"_tbl","class":"mceLayout",cellSpacing:0,cellPadding:0}),f=h=b.add(f,"tbody");switch((k.theme_advanced_layout_manager||"").toLowerCase()){case"rowlayout":g=i._rowLayout(k,h,d);break;case"customlayout":g=j.execCallback("theme_advanced_custom_layout",k,h,d,m);break;default:g=i._simpleLayout(k,h,d,m)}return f=d.targetNode,n=l.rows,b.addClass(n[0],"mceFirst"),b.addClass(n[n.length-1],"mceLast"),e(b.select("tr",h),function(a){b.addClass(a.firstChild,"mceFirst"),b.addClass(a.childNodes[a.childNodes.length-1],"mceLast")}),b.get(k.theme_advanced_toolbar_container)?b.get(k.theme_advanced_toolbar_container).appendChild(m):b.insertAfter(m,f),c.add(j.id+"_path_row","click",function(a){a=a.target;if(a.nodeName=="A")return i._sel(a.className.replace(/^.*mcePath_([0-9]+).*$/,"$1")),c.cancel(a)}),j.getParam("accessibility_focus")||c.add(b.add(m,"a",{href:"#"},"<!-- IE -->"),"focus",function(){tinyMCE.get(j.id).focus()}),k.theme_advanced_toolbar_location=="external"&&(d.deltaHeight=0),i.deltaHeight=d.deltaHeight,d.targetNode=null,j.onKeyDown.add(function(d,e){var f=121,g=122;if(e.altKey){if(e.keyCode===f)return a.isWebKit&&window.focus(),i.toolbarGroup.focus(),c.cancel(e);if(e.keyCode===g)return b.get(d.id+"_path_row").focus(),c.cancel(e)}}),j.addShortcut("alt+0","","mceShortcuts",i),{iframeContainer:g,editorContainer:j.id+"_parent",sizeContainer:l,deltaHeight:d.deltaHeight}},getInfo:function(){return{longname:"Advanced theme",author:"Moxiecode Systems AB",authorurl:"http://tinymce.moxiecode.com",version:a.majorVersion+"."+a.minorVersion}},resizeBy:function(a,c){var d=b.get(this.editor.id+"_ifr");this.resizeTo(d.clientWidth+a,d.clientHeight+c)},resizeTo:function(a,c,d){var e=this.editor,g=this.settings,h=b.get(e.id+"_tbl"),i=b.get(e.id+"_ifr");a=Math.max(g.theme_advanced_resizing_min_width||100,a),c=Math.max(g.theme_advanced_resizing_min_height||100,c),a=Math.min(g.theme_advanced_resizing_max_width||65535,a),c=Math.min(g.theme_advanced_resizing_max_height||65535,c),b.setStyle(h,"height",""),b.setStyle(i,"height",c),g.theme_advanced_resize_horizontal&&(b.setStyle(h,"width",""),b.setStyle(i,"width",a),a<h.clientWidth&&(a=h.clientWidth,b.setStyle(i,"width",h.clientWidth))),d&&g.theme_advanced_resizing_use_cookie&&f.setHash("TinyMCE_"+e.id+"_size",{cw:a,ch:c})},destroy:function(){var a=this.editor.id;c.clear(a+"_resize"),c.clear(a+"_path_row"),c.clear(a+"_external_close")},_simpleLayout:function(a,d,e,f){var h=this,i=h.editor,j=a.theme_advanced_toolbar_location,k=a.theme_advanced_statusbar_location,l,m,n,o;return a.readonly?(l=b.add(d,"tr"),l=m=b.add(l,"td",{"class":"mceIframeContainer"}),m):(j=="top"&&h._addToolbars(d,e),j=="external"&&(l=o=b.create("div",{style:"position:relative"}),l=b.add(l,"div",{id:i.id+"_external","class":"mceExternalToolbar"}),b.add(l,"a",{id:i.id+"_external_close",href:"javascript:;","class":"mceExternalClose"}),l=b.add(l,"table",{id:i.id+"_tblext",cellSpacing:0,cellPadding:0}),n=b.add(l,"tbody"),f.firstChild.className=="mceOldBoxModel"?f.firstChild.appendChild(o):f.insertBefore(o,f.firstChild),h._addToolbars(n,e),i.onMouseUp.add(function(){var a=b.get(i.id+"_external");b.show(a),b.hide(g);var d=c.add(i.id+"_external_close","click",function(){b.hide(i.id+"_external"),c.remove(i.id+"_external_close","click",d)});b.show(a),b.setStyle(a,"top",0-b.getRect(i.id+"_tblext").h-1),b.hide(a),b.show(a),a.style.filter="",g=i.id+"_external",a=null})),k=="top"&&h._addStatusBar(d,e),a.theme_advanced_toolbar_container||(l=b.add(d,"tr"),l=m=b.add(l,"td",{"class":"mceIframeContainer"})),j=="bottom"&&h._addToolbars(d,e),k=="bottom"&&h._addStatusBar(d,e),m)},_rowLayout:function(a,c,d){var f=this,g=f.editor,i,j,k=g.controlManager,l,m,n,o;return i=a.theme_advanced_containers_default_class||"",j=a.theme_advanced_containers_default_align||"center",e(h(a.theme_advanced_containers||""),function(e,g){var h=a["theme_advanced_container_"+e]||"";switch(e.toLowerCase()){case"mceeditor":l=b.add(c,"tr"),l=m=b.add(l,"td",{"class":"mceIframeContainer"});break;case"mceelementpath":f._addStatusBar(c,d);break;default:o=(a["theme_advanced_container_"+e+"_align"]||j).toLowerCase(),o="mce"+f._ufirst(o),l=b.add(b.add(c,"tr"),"td",{"class":"mceToolbar "+(a["theme_advanced_container_"+e+"_class"]||i)+" "+o||j}),n=k.createToolbar("toolbar"+g),f._addControls(h,n),b.setHTML(l,n.renderHTML()),d.deltaHeight-=a.theme_advanced_row_height}}),m},_addControls:function(a,b){var c=this,d=c.settings,f,g=c.editor.controlManager;d.theme_advanced_disable&&!c._disabled?(f={},e(h(d.theme_advanced_disable),function(a){f[a]=1}),c._disabled=f):f=c._disabled,e(h(a),function(a){var d;if(f&&f[a])return;if(a=="tablecontrols"){e(["table","|","row_props","cell_props","|","row_before","row_after","delete_row","|","col_before","col_after","delete_col","|","split_cells","merge_cells"],function(a){a=c.createControl(a,g),a&&b.add(a)});return}d=c.createControl(a,g),d&&b.add(d)})},_addToolbars:function(a,c){var d=this,e,f,g=d.editor,h=d.settings,i,j=g.controlManager,k,l,m=[],n,o;o=j.createToolbarGroup("toolbargroup",{name:g.getLang("advanced.toolbar"),tab_focus_toolbar:g.getParam("theme_advanced_tab_focus_toolbar")}),d.toolbarGroup=o,n=h.theme_advanced_toolbar_align.toLowerCase(),n="mce"+d._ufirst(n),l=b.add(b.add(a,"tr",{role:"presentation"}),"td",{"class":"mceToolbar "+n,role:"presentation"});for(e=1;i=h["theme_advanced_buttons"+e];e++)f=j.createToolbar("toolbar"+e,{"class":"mceToolbarRow"+e}),h["theme_advanced_buttons"+e+"_add"]&&(i+=","+h["theme_advanced_buttons"+e+"_add"]),h["theme_advanced_buttons"+e+"_add_before"]&&(i=h["theme_advanced_buttons"+e+"_add_before"]+","+i),d._addControls(i,f),o.add(f),c.deltaHeight-=h.theme_advanced_row_height;m.push(o.renderHTML()),m.push(b.createHTML("a",{href:"#",accesskey:"z",title:g.getLang("advanced.toolbar_focus"),onfocus:"tinyMCE.getInstanceById('"+g.id+"').focus();"},"<!-- IE -->")),b.setHTML(l,m.join(""))},_addStatusBar:function(a,d){var e,g=this,h=g.editor,i=g.settings,j,k,l,m;e=b.add(a,"tr"),e=m=b.add(e,"td",{"class":"mceStatusbar"}),e=b.add(e,"div",{id:h.id+"_path_row",role:"group","aria-labelledby":h.id+"_path_voice"}),i.theme_advanced_path?(b.add(e,"span",{id:h.id+"_path_voice"},h.translate("advanced.path")),b.add(e,"span",{},": ")):b.add(e,"span",{},"&#160;"),i.theme_advanced_resizing&&(b.add(m,"a",{id:h.id+"_resize",href:"javascript:;",onclick:"return false;","class":"mceResize",tabIndex:"-1"}),i.theme_advanced_resizing_use_cookie&&h.onPostRender.add(function(){var a=f.getHash("TinyMCE_"+h.id+"_size"),c=b.get(h.id+"_tbl");if(!a)return;g.resizeTo(a.cw,a.ch)}),h.onPostRender.add(function(){c.add(h.id+"_resize","click",function(a){a.preventDefault()}),c.add(h.id+"_resize","mousedown",function(a){function r(a){a.preventDefault(),n=l+(a.screenX-j),o=m+(a.screenY-k),g.resizeTo(n,o)}function s(a){c.remove(b.doc,"mousemove",d),c.remove(h.getDoc(),"mousemove",e),c.remove(b.doc,"mouseup",f),c.remove(h.getDoc(),"mouseup",i),n=l+(a.screenX-j),o=m+(a.screenY-k),g.resizeTo(n,o,!0)}var d,e,f,i,j,k,l,m,n,o,q;a.preventDefault(),j=a.screenX,k=a.screenY,q=b.get(g.editor.id+"_ifr"),l=n=q.clientWidth,m=o=q.clientHeight,d=c.add(b.doc,"mousemove",r),e=c.add(h.getDoc(),"mousemove",r),f=c.add(b.doc,"mouseup",s),i=c.add(h.getDoc(),"mouseup",s)})})),d.deltaHeight-=21,e=a=null},_updateUndoStatus:function(a){var b=a.controlManager,c=a.undoManager;b.setDisabled("undo",!c.hasUndo()&&!c.typing),b.setDisabled("redo",!c.hasRedo())},_nodeChanged:function(c,d,f,g,h){function v(a){var b,c=h.parents,d=a;typeof a=="string"&&(d=function(b){return b.nodeName==a});for(b=0;b<c.length;b++)if(d(c[b]))return c[b]}var i=this,j,k=0,l,m,n=i.settings,o,p,q,r,s,t,u;a.each(i.stateControls,function(a){d.setActive(a,c.queryCommandState(i.controls[a][1]))}),d.setActive("visualaid",c.hasVisual),i._updateUndoStatus(c),d.setDisabled("outdent",!c.queryCommandState("Outdent")),j=v("A");if(m=d.get("link"))if(!j||!j.name)m.setDisabled(!j&&g),m.setActive(!!j);if(m=d.get("unlink"))m.setDisabled(!j&&g),m.setActive(!!j&&!j.name);(m=d.get("anchor"))&&m.setActive(!g&&!!j&&j.name),j=v("IMG"),(m=d.get("image"))&&m.setActive(!g&&!!j&&f.className.indexOf("mceItem")==-1);if(m=d.get("styleselect"))i._importClasses(),t=[],e(m.items,function(a){t.push(a.value)}),u=c.formatter.matchAll(t),m.select(u[0]);if(m=d.get("formatselect"))j=v(b.isBlock),j&&m.select(j.nodeName.toLowerCase());v(function(a){return a.nodeName==="SPAN"&&!o&&a.className&&(o=a.className),c.dom.is(a,n.theme_advanced_font_selector)&&(!p&&a.style.fontSize&&(p=a.style.fontSize),!q&&a.style.fontFamily&&(q=a.style.fontFamily.replace(/[\"\']+/g,"").replace(/^([^,]+).*/,"$1").toLowerCase()),!r&&a.style.color&&(r=a.style.color),!s&&a.style.backgroundColor&&(s=a.style.backgroundColor)),!1}),(m=d.get("fontselect"))&&m.select(function(a){return a.replace(/^([^,]+).*/,"$1").toLowerCase()==q});if(m=d.get("fontsizeselect"))n.theme_advanced_runtime_fontsize&&!p&&!o&&(p=c.dom.getStyle(f,"fontSize",!0)),m.select(function(a){if(a.fontSize&&a.fontSize===p)return!0;if(a["class"]&&a["class"]===o)return!0});if(n.theme_advanced_show_current_color){function w(a,b){if(m=d.get(a))b||(b=m.settings.default_color),b!==m.value&&m.displayColor(b)}w("forecolor",r),w("backcolor",s)}if(n.theme_advanced_show_current_color){function w(a,b){if(m=d.get(a))b||(b=m.settings.default_color),b!==m.value&&m.displayColor(b)}w("forecolor",r),w("backcolor",s)}n.theme_advanced_path&&n.theme_advanced_statusbar_location&&(j=b.get(c.id+"_path")||b.add(c.id+"_path_row","span",{id:c.id+"_path"}),i.statusKeyboardNavigation&&(i.statusKeyboardNavigation.destroy(),i.statusKeyboardNavigation=null),b.setHTML(j,""),v(function(c){var d=c.nodeName.toLowerCase(),e,f,g="";if(c.nodeType!=1||d==="br"||c.getAttribute("data-mce-bogus")||b.hasClass(c,"mceItemHidden")||b.hasClass(c,"mceItemRemoved"))return;a.isIE&&c.scopeName!=="HTML"&&(d=c.scopeName+":"+d),d=d.replace(/mce\:/g,"");switch(d){case"b":d="strong";break;case"i":d="em";break;case"img":if(l=b.getAttrib(c,"src"))g+="src: "+l+" ";break;case"a":if(l=b.getAttrib(c,"name"))g+="name: "+l+" ",d+="#"+l;if(l=b.getAttrib(c,"href"))g+="href: "+l+" ";break;case"font":if(l=b.getAttrib(c,"face"))g+="font: "+l+" ";if(l=b.getAttrib(c,"size"))g+="size: "+l+" ";if(l=b.getAttrib(c,"color"))g+="color: "+l+" ";break;case"span":if(l=b.getAttrib(c,"style"))g+="style: "+l+" "}if(l=b.getAttrib(c,"id"))g+="id: "+l+" ";if(l=c.className){l=l.replace(/\b\s*(webkit|mce|Apple-)\w+\s*\b/g,"");if(l){g+="class: "+l+" ";if(b.isBlock(c)||d=="img"||d=="span")d+="."+l}}d=d.replace(/(html:)/g,""),d={name:d,node:c,title:g},i.onResolveName.dispatch(i,d),g=d.title,d=d.name,f=b.create("a",{href:"javascript:;",role:"button",onmousedown:"return false;",title:g,"class":"mcePath_"+k++},d),j.hasChildNodes()?(j.insertBefore(b.create("span",{"aria-hidden":"true"}," » "),j.firstChild),j.insertBefore(f,j.firstChild)):j.appendChild(f)},c.getBody()),b.select("a",j).length>0&&(i.statusKeyboardNavigation=new a.ui.KeyboardNavigation({root:c.id+"_path_row",items:b.select("a",j),excludeFromTabOrder:!0,onCancel:function(){c.focus()}},b)))},_sel:function(a){this.editor.execCommand("mceSelectNodeDepth",!1,a)},_mceInsertAnchor:function(a,b){var c=this.editor;c.windowManager.open({url:this.url+"/anchor.htm",width:320+parseInt(c.getLang("advanced.anchor_delta_width",0)),height:90+parseInt(c.getLang("advanced.anchor_delta_height",0)),inline:!0},{theme_url:this.url})},_mceCharMap:function(){var a=this.editor;a.windowManager.open({url:this.url+"/charmap.htm",width:550+parseInt(a.getLang("advanced.charmap_delta_width",0)),height:265+parseInt(a.getLang("advanced.charmap_delta_height",0)),inline:!0},{theme_url:this.url})},_mceHelp:function(){var a=this.editor;a.windowManager.open({url:this.url+"/about.htm",width:480,height:380,inline:!0},{theme_url:this.url})},_mceShortcuts:function(){var a=this.editor;a.windowManager.open({url:this.url+"/shortcuts.htm",width:480,height:380,inline:!0},{theme_url:this.url})},_mceColorPicker:function(a,b){var c=this.editor;b=b||{},c.windowManager.open({url:this.url+"/color_picker.htm",width:375+parseInt(c.getLang("advanced.colorpicker_delta_width",0)),height:250+parseInt(c.getLang("advanced.colorpicker_delta_height",0)),close_previous:!1,inline:!0},{input_color:b.color,func:b.func,theme_url:this.url})},_mceCodeEditor:function(a,b){var c=this.editor;c.windowManager.open({url:this.url+"/source_editor.htm",width:parseInt(c.getParam("theme_advanced_source_editor_width",720)),height:parseInt(c.getParam("theme_advanced_source_editor_height",580)),inline:!0,resizable:!0,maximizable:!0},{theme_url:this.url})},_mceImage:function(a,b){var c=this.editor;if(c.dom.getAttrib(c.selection.getNode(),"class").indexOf("mceItem")!=-1)return;c.windowManager.open({url:this.url+"/image.htm",width:355+parseInt(c.getLang("advanced.image_delta_width",0)),height:275+parseInt(c.getLang("advanced.image_delta_height",0)),inline:!0},{theme_url:this.url})},_mceLink:function(a,b){var c=this.editor;c.windowManager.open({url:this.url+"/link.htm",width:310+parseInt(c.getLang("advanced.link_delta_width",0)),height:200+parseInt(c.getLang("advanced.link_delta_height",0)),inline:!0},{theme_url:this.url})},_mceNewDocument:function(){var a=this.editor;a.windowManager.confirm("advanced.newdocument",function(b){b&&a.execCommand("mceSetContent",!1,"")})},_mceForeColor:function(){var a=this;this._mceColorPicker(0,{color:a.fgColor,func:function(b){a.fgColor=b,a.editor.execCommand("ForeColor",!1,b)}})},_mceBackColor:function(){var a=this;this._mceColorPicker(0,{color:a.bgColor,func:function(b){a.bgColor=b,a.editor.execCommand("HiliteColor",!1,b)}})},_ufirst:function(a){return a.substring(0,1).toUpperCase()+a.substring(1)}}),a.ThemeManager.add("advanced",a.themes.AdvancedTheme)})(tinymce);