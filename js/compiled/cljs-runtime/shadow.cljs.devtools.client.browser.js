goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___22850 = arguments.length;
var i__5770__auto___22851 = (0);
while(true){
if((i__5770__auto___22851 < len__5769__auto___22850)){
args__5775__auto__.push((arguments[i__5770__auto___22851]));

var G__22852 = (i__5770__auto___22851 + (1));
i__5770__auto___22851 = G__22852;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq22432){
var G__22433 = cljs.core.first(seq22432);
var seq22432__$1 = cljs.core.next(seq22432);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22433,seq22432__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__22445 = cljs.core.seq(sources);
var chunk__22446 = null;
var count__22447 = (0);
var i__22448 = (0);
while(true){
if((i__22448 < count__22447)){
var map__22457 = chunk__22446.cljs$core$IIndexed$_nth$arity$2(null,i__22448);
var map__22457__$1 = cljs.core.__destructure_map(map__22457);
var src = map__22457__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22457__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22457__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22457__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22457__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e22460){var e_22855 = e22460;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_22855);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_22855.message)].join('')));
}

var G__22856 = seq__22445;
var G__22857 = chunk__22446;
var G__22858 = count__22447;
var G__22859 = (i__22448 + (1));
seq__22445 = G__22856;
chunk__22446 = G__22857;
count__22447 = G__22858;
i__22448 = G__22859;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22445);
if(temp__5804__auto__){
var seq__22445__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22445__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__22445__$1);
var G__22860 = cljs.core.chunk_rest(seq__22445__$1);
var G__22861 = c__5568__auto__;
var G__22862 = cljs.core.count(c__5568__auto__);
var G__22863 = (0);
seq__22445 = G__22860;
chunk__22446 = G__22861;
count__22447 = G__22862;
i__22448 = G__22863;
continue;
} else {
var map__22462 = cljs.core.first(seq__22445__$1);
var map__22462__$1 = cljs.core.__destructure_map(map__22462);
var src = map__22462__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22462__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22462__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22462__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22462__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e22463){var e_22866 = e22463;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_22866);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_22866.message)].join('')));
}

var G__22867 = cljs.core.next(seq__22445__$1);
var G__22868 = null;
var G__22869 = (0);
var G__22870 = (0);
seq__22445 = G__22867;
chunk__22446 = G__22868;
count__22447 = G__22869;
i__22448 = G__22870;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__22467 = cljs.core.seq(js_requires);
var chunk__22468 = null;
var count__22469 = (0);
var i__22470 = (0);
while(true){
if((i__22470 < count__22469)){
var js_ns = chunk__22468.cljs$core$IIndexed$_nth$arity$2(null,i__22470);
var require_str_22871 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_22871);


var G__22872 = seq__22467;
var G__22873 = chunk__22468;
var G__22874 = count__22469;
var G__22875 = (i__22470 + (1));
seq__22467 = G__22872;
chunk__22468 = G__22873;
count__22469 = G__22874;
i__22470 = G__22875;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22467);
if(temp__5804__auto__){
var seq__22467__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22467__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__22467__$1);
var G__22876 = cljs.core.chunk_rest(seq__22467__$1);
var G__22877 = c__5568__auto__;
var G__22878 = cljs.core.count(c__5568__auto__);
var G__22879 = (0);
seq__22467 = G__22876;
chunk__22468 = G__22877;
count__22469 = G__22878;
i__22470 = G__22879;
continue;
} else {
var js_ns = cljs.core.first(seq__22467__$1);
var require_str_22880 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_22880);


var G__22881 = cljs.core.next(seq__22467__$1);
var G__22882 = null;
var G__22883 = (0);
var G__22884 = (0);
seq__22467 = G__22881;
chunk__22468 = G__22882;
count__22469 = G__22883;
i__22470 = G__22884;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__22478){
var map__22479 = p__22478;
var map__22479__$1 = cljs.core.__destructure_map(map__22479);
var msg = map__22479__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22479__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22479__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22481(s__22482){
return (new cljs.core.LazySeq(null,(function (){
var s__22482__$1 = s__22482;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__22482__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__22488 = cljs.core.first(xs__6360__auto__);
var map__22488__$1 = cljs.core.__destructure_map(map__22488);
var src = map__22488__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22488__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22488__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__22482__$1,map__22488,map__22488__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__22479,map__22479__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22481_$_iter__22483(s__22484){
return (new cljs.core.LazySeq(null,((function (s__22482__$1,map__22488,map__22488__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__22479,map__22479__$1,msg,info,reload_info){
return (function (){
var s__22484__$1 = s__22484;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__22484__$1);
if(temp__5804__auto____$1){
var s__22484__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__22484__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__22484__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__22486 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__22485 = (0);
while(true){
if((i__22485 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__22485);
cljs.core.chunk_append(b__22486,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__22887 = (i__22485 + (1));
i__22485 = G__22887;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22486),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22481_$_iter__22483(cljs.core.chunk_rest(s__22484__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22486),null);
}
} else {
var warning = cljs.core.first(s__22484__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22481_$_iter__22483(cljs.core.rest(s__22484__$2)));
}
} else {
return null;
}
break;
}
});})(s__22482__$1,map__22488,map__22488__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__22479,map__22479__$1,msg,info,reload_info))
,null,null));
});})(s__22482__$1,map__22488,map__22488__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__22479,map__22479__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22481(cljs.core.rest(s__22482__$1)));
} else {
var G__22888 = cljs.core.rest(s__22482__$1);
s__22482__$1 = G__22888;
continue;
}
} else {
var G__22889 = cljs.core.rest(s__22482__$1);
s__22482__$1 = G__22889;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__22491_22890 = cljs.core.seq(warnings);
var chunk__22492_22891 = null;
var count__22493_22892 = (0);
var i__22494_22893 = (0);
while(true){
if((i__22494_22893 < count__22493_22892)){
var map__22507_22894 = chunk__22492_22891.cljs$core$IIndexed$_nth$arity$2(null,i__22494_22893);
var map__22507_22895__$1 = cljs.core.__destructure_map(map__22507_22894);
var w_22896 = map__22507_22895__$1;
var msg_22897__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22507_22895__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_22898 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22507_22895__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_22899 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22507_22895__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_22900 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22507_22895__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_22900)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_22898),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_22899),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_22897__$1)].join(''));


var G__22901 = seq__22491_22890;
var G__22902 = chunk__22492_22891;
var G__22903 = count__22493_22892;
var G__22904 = (i__22494_22893 + (1));
seq__22491_22890 = G__22901;
chunk__22492_22891 = G__22902;
count__22493_22892 = G__22903;
i__22494_22893 = G__22904;
continue;
} else {
var temp__5804__auto___22905 = cljs.core.seq(seq__22491_22890);
if(temp__5804__auto___22905){
var seq__22491_22906__$1 = temp__5804__auto___22905;
if(cljs.core.chunked_seq_QMARK_(seq__22491_22906__$1)){
var c__5568__auto___22907 = cljs.core.chunk_first(seq__22491_22906__$1);
var G__22908 = cljs.core.chunk_rest(seq__22491_22906__$1);
var G__22909 = c__5568__auto___22907;
var G__22910 = cljs.core.count(c__5568__auto___22907);
var G__22911 = (0);
seq__22491_22890 = G__22908;
chunk__22492_22891 = G__22909;
count__22493_22892 = G__22910;
i__22494_22893 = G__22911;
continue;
} else {
var map__22508_22912 = cljs.core.first(seq__22491_22906__$1);
var map__22508_22913__$1 = cljs.core.__destructure_map(map__22508_22912);
var w_22914 = map__22508_22913__$1;
var msg_22915__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22508_22913__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_22916 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22508_22913__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_22917 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22508_22913__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_22918 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22508_22913__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_22918)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_22916),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_22917),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_22915__$1)].join(''));


var G__22919 = cljs.core.next(seq__22491_22906__$1);
var G__22920 = null;
var G__22921 = (0);
var G__22922 = (0);
seq__22491_22890 = G__22919;
chunk__22492_22891 = G__22920;
count__22493_22892 = G__22921;
i__22494_22893 = G__22922;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__22477_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__22477_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__22515){
var map__22516 = p__22515;
var map__22516__$1 = cljs.core.__destructure_map(map__22516);
var msg = map__22516__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22516__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22516__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__22517 = cljs.core.seq(updates);
var chunk__22519 = null;
var count__22520 = (0);
var i__22521 = (0);
while(true){
if((i__22521 < count__22520)){
var path = chunk__22519.cljs$core$IIndexed$_nth$arity$2(null,i__22521);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__22671_22923 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__22675_22924 = null;
var count__22676_22925 = (0);
var i__22677_22926 = (0);
while(true){
if((i__22677_22926 < count__22676_22925)){
var node_22927 = chunk__22675_22924.cljs$core$IIndexed$_nth$arity$2(null,i__22677_22926);
if(cljs.core.not(node_22927.shadow$old)){
var path_match_22928 = shadow.cljs.devtools.client.browser.match_paths(node_22927.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22928)){
var new_link_22929 = (function (){var G__22712 = node_22927.cloneNode(true);
G__22712.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22928),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22712;
})();
(node_22927.shadow$old = true);

(new_link_22929.onload = ((function (seq__22671_22923,chunk__22675_22924,count__22676_22925,i__22677_22926,seq__22517,chunk__22519,count__22520,i__22521,new_link_22929,path_match_22928,node_22927,path,map__22516,map__22516__$1,msg,updates,reload_info){
return (function (e){
var seq__22713_22930 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__22715_22931 = null;
var count__22716_22932 = (0);
var i__22717_22933 = (0);
while(true){
if((i__22717_22933 < count__22716_22932)){
var map__22724_22934 = chunk__22715_22931.cljs$core$IIndexed$_nth$arity$2(null,i__22717_22933);
var map__22724_22935__$1 = cljs.core.__destructure_map(map__22724_22934);
var task_22936 = map__22724_22935__$1;
var fn_str_22937 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22724_22935__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22938 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22724_22935__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22939 = goog.getObjectByName(fn_str_22937,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22938)].join(''));

(fn_obj_22939.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22939.cljs$core$IFn$_invoke$arity$2(path,new_link_22929) : fn_obj_22939.call(null,path,new_link_22929));


var G__22940 = seq__22713_22930;
var G__22941 = chunk__22715_22931;
var G__22942 = count__22716_22932;
var G__22943 = (i__22717_22933 + (1));
seq__22713_22930 = G__22940;
chunk__22715_22931 = G__22941;
count__22716_22932 = G__22942;
i__22717_22933 = G__22943;
continue;
} else {
var temp__5804__auto___22944 = cljs.core.seq(seq__22713_22930);
if(temp__5804__auto___22944){
var seq__22713_22945__$1 = temp__5804__auto___22944;
if(cljs.core.chunked_seq_QMARK_(seq__22713_22945__$1)){
var c__5568__auto___22946 = cljs.core.chunk_first(seq__22713_22945__$1);
var G__22947 = cljs.core.chunk_rest(seq__22713_22945__$1);
var G__22948 = c__5568__auto___22946;
var G__22949 = cljs.core.count(c__5568__auto___22946);
var G__22950 = (0);
seq__22713_22930 = G__22947;
chunk__22715_22931 = G__22948;
count__22716_22932 = G__22949;
i__22717_22933 = G__22950;
continue;
} else {
var map__22727_22951 = cljs.core.first(seq__22713_22945__$1);
var map__22727_22952__$1 = cljs.core.__destructure_map(map__22727_22951);
var task_22953 = map__22727_22952__$1;
var fn_str_22954 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22727_22952__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22955 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22727_22952__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22956 = goog.getObjectByName(fn_str_22954,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22955)].join(''));

(fn_obj_22956.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22956.cljs$core$IFn$_invoke$arity$2(path,new_link_22929) : fn_obj_22956.call(null,path,new_link_22929));


var G__22957 = cljs.core.next(seq__22713_22945__$1);
var G__22958 = null;
var G__22959 = (0);
var G__22960 = (0);
seq__22713_22930 = G__22957;
chunk__22715_22931 = G__22958;
count__22716_22932 = G__22959;
i__22717_22933 = G__22960;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_22927);
});})(seq__22671_22923,chunk__22675_22924,count__22676_22925,i__22677_22926,seq__22517,chunk__22519,count__22520,i__22521,new_link_22929,path_match_22928,node_22927,path,map__22516,map__22516__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22928], 0));

goog.dom.insertSiblingAfter(new_link_22929,node_22927);


var G__22961 = seq__22671_22923;
var G__22962 = chunk__22675_22924;
var G__22963 = count__22676_22925;
var G__22964 = (i__22677_22926 + (1));
seq__22671_22923 = G__22961;
chunk__22675_22924 = G__22962;
count__22676_22925 = G__22963;
i__22677_22926 = G__22964;
continue;
} else {
var G__22965 = seq__22671_22923;
var G__22966 = chunk__22675_22924;
var G__22967 = count__22676_22925;
var G__22968 = (i__22677_22926 + (1));
seq__22671_22923 = G__22965;
chunk__22675_22924 = G__22966;
count__22676_22925 = G__22967;
i__22677_22926 = G__22968;
continue;
}
} else {
var G__22969 = seq__22671_22923;
var G__22970 = chunk__22675_22924;
var G__22971 = count__22676_22925;
var G__22972 = (i__22677_22926 + (1));
seq__22671_22923 = G__22969;
chunk__22675_22924 = G__22970;
count__22676_22925 = G__22971;
i__22677_22926 = G__22972;
continue;
}
} else {
var temp__5804__auto___22973 = cljs.core.seq(seq__22671_22923);
if(temp__5804__auto___22973){
var seq__22671_22974__$1 = temp__5804__auto___22973;
if(cljs.core.chunked_seq_QMARK_(seq__22671_22974__$1)){
var c__5568__auto___22975 = cljs.core.chunk_first(seq__22671_22974__$1);
var G__22976 = cljs.core.chunk_rest(seq__22671_22974__$1);
var G__22977 = c__5568__auto___22975;
var G__22978 = cljs.core.count(c__5568__auto___22975);
var G__22979 = (0);
seq__22671_22923 = G__22976;
chunk__22675_22924 = G__22977;
count__22676_22925 = G__22978;
i__22677_22926 = G__22979;
continue;
} else {
var node_22980 = cljs.core.first(seq__22671_22974__$1);
if(cljs.core.not(node_22980.shadow$old)){
var path_match_22981 = shadow.cljs.devtools.client.browser.match_paths(node_22980.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22981)){
var new_link_22982 = (function (){var G__22730 = node_22980.cloneNode(true);
G__22730.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22981),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22730;
})();
(node_22980.shadow$old = true);

(new_link_22982.onload = ((function (seq__22671_22923,chunk__22675_22924,count__22676_22925,i__22677_22926,seq__22517,chunk__22519,count__22520,i__22521,new_link_22982,path_match_22981,node_22980,seq__22671_22974__$1,temp__5804__auto___22973,path,map__22516,map__22516__$1,msg,updates,reload_info){
return (function (e){
var seq__22731_22983 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__22733_22984 = null;
var count__22734_22985 = (0);
var i__22735_22986 = (0);
while(true){
if((i__22735_22986 < count__22734_22985)){
var map__22739_22987 = chunk__22733_22984.cljs$core$IIndexed$_nth$arity$2(null,i__22735_22986);
var map__22739_22988__$1 = cljs.core.__destructure_map(map__22739_22987);
var task_22989 = map__22739_22988__$1;
var fn_str_22990 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22739_22988__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22991 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22739_22988__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22992 = goog.getObjectByName(fn_str_22990,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22991)].join(''));

(fn_obj_22992.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22992.cljs$core$IFn$_invoke$arity$2(path,new_link_22982) : fn_obj_22992.call(null,path,new_link_22982));


var G__22993 = seq__22731_22983;
var G__22994 = chunk__22733_22984;
var G__22995 = count__22734_22985;
var G__22996 = (i__22735_22986 + (1));
seq__22731_22983 = G__22993;
chunk__22733_22984 = G__22994;
count__22734_22985 = G__22995;
i__22735_22986 = G__22996;
continue;
} else {
var temp__5804__auto___22997__$1 = cljs.core.seq(seq__22731_22983);
if(temp__5804__auto___22997__$1){
var seq__22731_22998__$1 = temp__5804__auto___22997__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22731_22998__$1)){
var c__5568__auto___22999 = cljs.core.chunk_first(seq__22731_22998__$1);
var G__23000 = cljs.core.chunk_rest(seq__22731_22998__$1);
var G__23001 = c__5568__auto___22999;
var G__23002 = cljs.core.count(c__5568__auto___22999);
var G__23003 = (0);
seq__22731_22983 = G__23000;
chunk__22733_22984 = G__23001;
count__22734_22985 = G__23002;
i__22735_22986 = G__23003;
continue;
} else {
var map__22740_23004 = cljs.core.first(seq__22731_22998__$1);
var map__22740_23005__$1 = cljs.core.__destructure_map(map__22740_23004);
var task_23006 = map__22740_23005__$1;
var fn_str_23007 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22740_23005__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23008 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22740_23005__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23009 = goog.getObjectByName(fn_str_23007,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23008)].join(''));

(fn_obj_23009.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23009.cljs$core$IFn$_invoke$arity$2(path,new_link_22982) : fn_obj_23009.call(null,path,new_link_22982));


var G__23010 = cljs.core.next(seq__22731_22998__$1);
var G__23011 = null;
var G__23012 = (0);
var G__23013 = (0);
seq__22731_22983 = G__23010;
chunk__22733_22984 = G__23011;
count__22734_22985 = G__23012;
i__22735_22986 = G__23013;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_22980);
});})(seq__22671_22923,chunk__22675_22924,count__22676_22925,i__22677_22926,seq__22517,chunk__22519,count__22520,i__22521,new_link_22982,path_match_22981,node_22980,seq__22671_22974__$1,temp__5804__auto___22973,path,map__22516,map__22516__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22981], 0));

goog.dom.insertSiblingAfter(new_link_22982,node_22980);


var G__23014 = cljs.core.next(seq__22671_22974__$1);
var G__23015 = null;
var G__23016 = (0);
var G__23017 = (0);
seq__22671_22923 = G__23014;
chunk__22675_22924 = G__23015;
count__22676_22925 = G__23016;
i__22677_22926 = G__23017;
continue;
} else {
var G__23018 = cljs.core.next(seq__22671_22974__$1);
var G__23019 = null;
var G__23020 = (0);
var G__23021 = (0);
seq__22671_22923 = G__23018;
chunk__22675_22924 = G__23019;
count__22676_22925 = G__23020;
i__22677_22926 = G__23021;
continue;
}
} else {
var G__23022 = cljs.core.next(seq__22671_22974__$1);
var G__23023 = null;
var G__23024 = (0);
var G__23025 = (0);
seq__22671_22923 = G__23022;
chunk__22675_22924 = G__23023;
count__22676_22925 = G__23024;
i__22677_22926 = G__23025;
continue;
}
}
} else {
}
}
break;
}


var G__23026 = seq__22517;
var G__23027 = chunk__22519;
var G__23028 = count__22520;
var G__23029 = (i__22521 + (1));
seq__22517 = G__23026;
chunk__22519 = G__23027;
count__22520 = G__23028;
i__22521 = G__23029;
continue;
} else {
var G__23030 = seq__22517;
var G__23031 = chunk__22519;
var G__23032 = count__22520;
var G__23033 = (i__22521 + (1));
seq__22517 = G__23030;
chunk__22519 = G__23031;
count__22520 = G__23032;
i__22521 = G__23033;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22517);
if(temp__5804__auto__){
var seq__22517__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22517__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__22517__$1);
var G__23034 = cljs.core.chunk_rest(seq__22517__$1);
var G__23035 = c__5568__auto__;
var G__23036 = cljs.core.count(c__5568__auto__);
var G__23037 = (0);
seq__22517 = G__23034;
chunk__22519 = G__23035;
count__22520 = G__23036;
i__22521 = G__23037;
continue;
} else {
var path = cljs.core.first(seq__22517__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__22743_23038 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__22747_23039 = null;
var count__22748_23040 = (0);
var i__22749_23041 = (0);
while(true){
if((i__22749_23041 < count__22748_23040)){
var node_23042 = chunk__22747_23039.cljs$core$IIndexed$_nth$arity$2(null,i__22749_23041);
if(cljs.core.not(node_23042.shadow$old)){
var path_match_23043 = shadow.cljs.devtools.client.browser.match_paths(node_23042.getAttribute("href"),path);
if(cljs.core.truth_(path_match_23043)){
var new_link_23044 = (function (){var G__22784 = node_23042.cloneNode(true);
G__22784.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_23043),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22784;
})();
(node_23042.shadow$old = true);

(new_link_23044.onload = ((function (seq__22743_23038,chunk__22747_23039,count__22748_23040,i__22749_23041,seq__22517,chunk__22519,count__22520,i__22521,new_link_23044,path_match_23043,node_23042,path,seq__22517__$1,temp__5804__auto__,map__22516,map__22516__$1,msg,updates,reload_info){
return (function (e){
var seq__22785_23045 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__22787_23046 = null;
var count__22788_23047 = (0);
var i__22789_23048 = (0);
while(true){
if((i__22789_23048 < count__22788_23047)){
var map__22793_23049 = chunk__22787_23046.cljs$core$IIndexed$_nth$arity$2(null,i__22789_23048);
var map__22793_23050__$1 = cljs.core.__destructure_map(map__22793_23049);
var task_23051 = map__22793_23050__$1;
var fn_str_23052 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22793_23050__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23053 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22793_23050__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23054 = goog.getObjectByName(fn_str_23052,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23053)].join(''));

(fn_obj_23054.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23054.cljs$core$IFn$_invoke$arity$2(path,new_link_23044) : fn_obj_23054.call(null,path,new_link_23044));


var G__23055 = seq__22785_23045;
var G__23056 = chunk__22787_23046;
var G__23057 = count__22788_23047;
var G__23058 = (i__22789_23048 + (1));
seq__22785_23045 = G__23055;
chunk__22787_23046 = G__23056;
count__22788_23047 = G__23057;
i__22789_23048 = G__23058;
continue;
} else {
var temp__5804__auto___23059__$1 = cljs.core.seq(seq__22785_23045);
if(temp__5804__auto___23059__$1){
var seq__22785_23060__$1 = temp__5804__auto___23059__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22785_23060__$1)){
var c__5568__auto___23061 = cljs.core.chunk_first(seq__22785_23060__$1);
var G__23062 = cljs.core.chunk_rest(seq__22785_23060__$1);
var G__23063 = c__5568__auto___23061;
var G__23064 = cljs.core.count(c__5568__auto___23061);
var G__23065 = (0);
seq__22785_23045 = G__23062;
chunk__22787_23046 = G__23063;
count__22788_23047 = G__23064;
i__22789_23048 = G__23065;
continue;
} else {
var map__22794_23066 = cljs.core.first(seq__22785_23060__$1);
var map__22794_23067__$1 = cljs.core.__destructure_map(map__22794_23066);
var task_23068 = map__22794_23067__$1;
var fn_str_23069 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22794_23067__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23070 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22794_23067__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23071 = goog.getObjectByName(fn_str_23069,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23070)].join(''));

(fn_obj_23071.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23071.cljs$core$IFn$_invoke$arity$2(path,new_link_23044) : fn_obj_23071.call(null,path,new_link_23044));


var G__23072 = cljs.core.next(seq__22785_23060__$1);
var G__23073 = null;
var G__23074 = (0);
var G__23075 = (0);
seq__22785_23045 = G__23072;
chunk__22787_23046 = G__23073;
count__22788_23047 = G__23074;
i__22789_23048 = G__23075;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_23042);
});})(seq__22743_23038,chunk__22747_23039,count__22748_23040,i__22749_23041,seq__22517,chunk__22519,count__22520,i__22521,new_link_23044,path_match_23043,node_23042,path,seq__22517__$1,temp__5804__auto__,map__22516,map__22516__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_23043], 0));

goog.dom.insertSiblingAfter(new_link_23044,node_23042);


var G__23076 = seq__22743_23038;
var G__23077 = chunk__22747_23039;
var G__23078 = count__22748_23040;
var G__23079 = (i__22749_23041 + (1));
seq__22743_23038 = G__23076;
chunk__22747_23039 = G__23077;
count__22748_23040 = G__23078;
i__22749_23041 = G__23079;
continue;
} else {
var G__23080 = seq__22743_23038;
var G__23081 = chunk__22747_23039;
var G__23082 = count__22748_23040;
var G__23083 = (i__22749_23041 + (1));
seq__22743_23038 = G__23080;
chunk__22747_23039 = G__23081;
count__22748_23040 = G__23082;
i__22749_23041 = G__23083;
continue;
}
} else {
var G__23084 = seq__22743_23038;
var G__23085 = chunk__22747_23039;
var G__23086 = count__22748_23040;
var G__23087 = (i__22749_23041 + (1));
seq__22743_23038 = G__23084;
chunk__22747_23039 = G__23085;
count__22748_23040 = G__23086;
i__22749_23041 = G__23087;
continue;
}
} else {
var temp__5804__auto___23088__$1 = cljs.core.seq(seq__22743_23038);
if(temp__5804__auto___23088__$1){
var seq__22743_23089__$1 = temp__5804__auto___23088__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22743_23089__$1)){
var c__5568__auto___23090 = cljs.core.chunk_first(seq__22743_23089__$1);
var G__23091 = cljs.core.chunk_rest(seq__22743_23089__$1);
var G__23092 = c__5568__auto___23090;
var G__23093 = cljs.core.count(c__5568__auto___23090);
var G__23094 = (0);
seq__22743_23038 = G__23091;
chunk__22747_23039 = G__23092;
count__22748_23040 = G__23093;
i__22749_23041 = G__23094;
continue;
} else {
var node_23095 = cljs.core.first(seq__22743_23089__$1);
if(cljs.core.not(node_23095.shadow$old)){
var path_match_23096 = shadow.cljs.devtools.client.browser.match_paths(node_23095.getAttribute("href"),path);
if(cljs.core.truth_(path_match_23096)){
var new_link_23097 = (function (){var G__22795 = node_23095.cloneNode(true);
G__22795.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_23096),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22795;
})();
(node_23095.shadow$old = true);

(new_link_23097.onload = ((function (seq__22743_23038,chunk__22747_23039,count__22748_23040,i__22749_23041,seq__22517,chunk__22519,count__22520,i__22521,new_link_23097,path_match_23096,node_23095,seq__22743_23089__$1,temp__5804__auto___23088__$1,path,seq__22517__$1,temp__5804__auto__,map__22516,map__22516__$1,msg,updates,reload_info){
return (function (e){
var seq__22796_23098 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__22798_23099 = null;
var count__22799_23100 = (0);
var i__22800_23101 = (0);
while(true){
if((i__22800_23101 < count__22799_23100)){
var map__22804_23102 = chunk__22798_23099.cljs$core$IIndexed$_nth$arity$2(null,i__22800_23101);
var map__22804_23103__$1 = cljs.core.__destructure_map(map__22804_23102);
var task_23104 = map__22804_23103__$1;
var fn_str_23105 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22804_23103__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23106 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22804_23103__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23107 = goog.getObjectByName(fn_str_23105,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23106)].join(''));

(fn_obj_23107.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23107.cljs$core$IFn$_invoke$arity$2(path,new_link_23097) : fn_obj_23107.call(null,path,new_link_23097));


var G__23108 = seq__22796_23098;
var G__23109 = chunk__22798_23099;
var G__23110 = count__22799_23100;
var G__23111 = (i__22800_23101 + (1));
seq__22796_23098 = G__23108;
chunk__22798_23099 = G__23109;
count__22799_23100 = G__23110;
i__22800_23101 = G__23111;
continue;
} else {
var temp__5804__auto___23112__$2 = cljs.core.seq(seq__22796_23098);
if(temp__5804__auto___23112__$2){
var seq__22796_23113__$1 = temp__5804__auto___23112__$2;
if(cljs.core.chunked_seq_QMARK_(seq__22796_23113__$1)){
var c__5568__auto___23114 = cljs.core.chunk_first(seq__22796_23113__$1);
var G__23115 = cljs.core.chunk_rest(seq__22796_23113__$1);
var G__23116 = c__5568__auto___23114;
var G__23117 = cljs.core.count(c__5568__auto___23114);
var G__23118 = (0);
seq__22796_23098 = G__23115;
chunk__22798_23099 = G__23116;
count__22799_23100 = G__23117;
i__22800_23101 = G__23118;
continue;
} else {
var map__22805_23119 = cljs.core.first(seq__22796_23113__$1);
var map__22805_23120__$1 = cljs.core.__destructure_map(map__22805_23119);
var task_23121 = map__22805_23120__$1;
var fn_str_23122 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22805_23120__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23123 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22805_23120__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23124 = goog.getObjectByName(fn_str_23122,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23123)].join(''));

(fn_obj_23124.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23124.cljs$core$IFn$_invoke$arity$2(path,new_link_23097) : fn_obj_23124.call(null,path,new_link_23097));


var G__23125 = cljs.core.next(seq__22796_23113__$1);
var G__23126 = null;
var G__23127 = (0);
var G__23128 = (0);
seq__22796_23098 = G__23125;
chunk__22798_23099 = G__23126;
count__22799_23100 = G__23127;
i__22800_23101 = G__23128;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_23095);
});})(seq__22743_23038,chunk__22747_23039,count__22748_23040,i__22749_23041,seq__22517,chunk__22519,count__22520,i__22521,new_link_23097,path_match_23096,node_23095,seq__22743_23089__$1,temp__5804__auto___23088__$1,path,seq__22517__$1,temp__5804__auto__,map__22516,map__22516__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_23096], 0));

goog.dom.insertSiblingAfter(new_link_23097,node_23095);


var G__23129 = cljs.core.next(seq__22743_23089__$1);
var G__23130 = null;
var G__23131 = (0);
var G__23132 = (0);
seq__22743_23038 = G__23129;
chunk__22747_23039 = G__23130;
count__22748_23040 = G__23131;
i__22749_23041 = G__23132;
continue;
} else {
var G__23133 = cljs.core.next(seq__22743_23089__$1);
var G__23134 = null;
var G__23135 = (0);
var G__23136 = (0);
seq__22743_23038 = G__23133;
chunk__22747_23039 = G__23134;
count__22748_23040 = G__23135;
i__22749_23041 = G__23136;
continue;
}
} else {
var G__23137 = cljs.core.next(seq__22743_23089__$1);
var G__23138 = null;
var G__23139 = (0);
var G__23140 = (0);
seq__22743_23038 = G__23137;
chunk__22747_23039 = G__23138;
count__22748_23040 = G__23139;
i__22749_23041 = G__23140;
continue;
}
}
} else {
}
}
break;
}


var G__23141 = cljs.core.next(seq__22517__$1);
var G__23142 = null;
var G__23143 = (0);
var G__23144 = (0);
seq__22517 = G__23141;
chunk__22519 = G__23142;
count__22520 = G__23143;
i__22521 = G__23144;
continue;
} else {
var G__23145 = cljs.core.next(seq__22517__$1);
var G__23146 = null;
var G__23147 = (0);
var G__23148 = (0);
seq__22517 = G__23145;
chunk__22519 = G__23146;
count__22520 = G__23147;
i__22521 = G__23148;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__22806){
var map__22807 = p__22806;
var map__22807__$1 = cljs.core.__destructure_map(map__22807);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22807__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__22818){
var map__22819 = p__22818;
var map__22819__$1 = cljs.core.__destructure_map(map__22819);
var _ = map__22819__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22819__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__22820,done,error){
var map__22821 = p__22820;
var map__22821__$1 = cljs.core.__destructure_map(map__22821);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22821__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__22822,done,error){
var map__22824 = p__22822;
var map__22824__$1 = cljs.core.__destructure_map(map__22824);
var msg = map__22824__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22824__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22824__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22824__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__22827){
var map__22828 = p__22827;
var map__22828__$1 = cljs.core.__destructure_map(map__22828);
var src = map__22828__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22828__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__22829 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__22829) : done.call(null,G__22829));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__22830){
var map__22831 = p__22830;
var map__22831__$1 = cljs.core.__destructure_map(map__22831);
var msg__$1 = map__22831__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22831__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e22832){var ex = e22832;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__22837){
var map__22838 = p__22837;
var map__22838__$1 = cljs.core.__destructure_map(map__22838);
var env = map__22838__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22838__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__22846){
var map__22847 = p__22846;
var map__22847__$1 = cljs.core.__destructure_map(map__22847);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22847__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22847__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__22848){
var map__22849 = p__22848;
var map__22849__$1 = cljs.core.__destructure_map(map__22849);
var svc = map__22849__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22849__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
