goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__17788,res){
var map__17789 = p__17788;
var map__17789__$1 = cljs.core.__destructure_map(map__17789);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17789__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17789__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__17791 = res;
var G__17791__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17791,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__17791);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17791__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__17791__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__17796 = arguments.length;
switch (G__17796) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__17801,msg,handlers,timeout_after_ms){
var map__17803 = p__17801;
var map__17803__$1 = cljs.core.__destructure_map(map__17803);
var runtime = map__17803__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17803__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___18033 = arguments.length;
var i__5770__auto___18035 = (0);
while(true){
if((i__5770__auto___18035 < len__5769__auto___18033)){
args__5775__auto__.push((arguments[i__5770__auto___18035]));

var G__18036 = (i__5770__auto___18035 + (1));
i__5770__auto___18035 = G__18036;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__17831,ev,args){
var map__17832 = p__17831;
var map__17832__$1 = cljs.core.__destructure_map(map__17832);
var runtime = map__17832__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17832__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__17833 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__17836 = null;
var count__17837 = (0);
var i__17838 = (0);
while(true){
if((i__17838 < count__17837)){
var ext = chunk__17836.cljs$core$IIndexed$_nth$arity$2(null,i__17838);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__18037 = seq__17833;
var G__18038 = chunk__17836;
var G__18039 = count__17837;
var G__18040 = (i__17838 + (1));
seq__17833 = G__18037;
chunk__17836 = G__18038;
count__17837 = G__18039;
i__17838 = G__18040;
continue;
} else {
var G__18041 = seq__17833;
var G__18042 = chunk__17836;
var G__18043 = count__17837;
var G__18044 = (i__17838 + (1));
seq__17833 = G__18041;
chunk__17836 = G__18042;
count__17837 = G__18043;
i__17838 = G__18044;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17833);
if(temp__5804__auto__){
var seq__17833__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17833__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17833__$1);
var G__18045 = cljs.core.chunk_rest(seq__17833__$1);
var G__18046 = c__5568__auto__;
var G__18047 = cljs.core.count(c__5568__auto__);
var G__18048 = (0);
seq__17833 = G__18045;
chunk__17836 = G__18046;
count__17837 = G__18047;
i__17838 = G__18048;
continue;
} else {
var ext = cljs.core.first(seq__17833__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__18049 = cljs.core.next(seq__17833__$1);
var G__18050 = null;
var G__18051 = (0);
var G__18052 = (0);
seq__17833 = G__18049;
chunk__17836 = G__18050;
count__17837 = G__18051;
i__17838 = G__18052;
continue;
} else {
var G__18053 = cljs.core.next(seq__17833__$1);
var G__18054 = null;
var G__18055 = (0);
var G__18056 = (0);
seq__17833 = G__18053;
chunk__17836 = G__18054;
count__17837 = G__18055;
i__17838 = G__18056;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq17805){
var G__17806 = cljs.core.first(seq17805);
var seq17805__$1 = cljs.core.next(seq17805);
var G__17807 = cljs.core.first(seq17805__$1);
var seq17805__$2 = cljs.core.next(seq17805__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17806,G__17807,seq17805__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__17882,p__17883){
var map__17885 = p__17882;
var map__17885__$1 = cljs.core.__destructure_map(map__17885);
var runtime = map__17885__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17885__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__17886 = p__17883;
var map__17886__$1 = cljs.core.__destructure_map(map__17886);
var msg = map__17886__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17886__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__17894 = cljs.core.deref(state_ref);
var map__17894__$1 = cljs.core.__destructure_map(map__17894);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17894__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17894__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__17929){
var map__17930 = p__17929;
var map__17930__$1 = cljs.core.__destructure_map(map__17930);
var runtime = map__17930__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17930__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__17952,msg){
var map__17953 = p__17952;
var map__17953__$1 = cljs.core.__destructure_map(map__17953);
var runtime = map__17953__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17953__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__17955,key,p__17956){
var map__17957 = p__17955;
var map__17957__$1 = cljs.core.__destructure_map(map__17957);
var state = map__17957__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17957__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__17959 = p__17956;
var map__17959__$1 = cljs.core.__destructure_map(map__17959);
var spec = map__17959__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17959__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__17989,key,spec){
var map__17991 = p__17989;
var map__17991__$1 = cljs.core.__destructure_map(map__17991);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17991__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__17997_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__17997_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__17998_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__17998_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__17999_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__17999_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__18000_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__18000_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__18001_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__18001_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__18004,key){
var map__18005 = p__18004;
var map__18005__$1 = cljs.core.__destructure_map(map__18005);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18005__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__18006,msg){
var map__18007 = p__18006;
var map__18007__$1 = cljs.core.__destructure_map(map__18007);
var runtime = map__18007__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18007__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__18010,p__18011){
var map__18012 = p__18010;
var map__18012__$1 = cljs.core.__destructure_map(map__18012);
var runtime = map__18012__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18012__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__18013 = p__18011;
var map__18013__$1 = cljs.core.__destructure_map(map__18013);
var msg = map__18013__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18013__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18013__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__18016 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__18018 = null;
var count__18019 = (0);
var i__18020 = (0);
while(true){
if((i__18020 < count__18019)){
var map__18027 = chunk__18018.cljs$core$IIndexed$_nth$arity$2(null,i__18020);
var map__18027__$1 = cljs.core.__destructure_map(map__18027);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18027__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__18101 = seq__18016;
var G__18102 = chunk__18018;
var G__18103 = count__18019;
var G__18104 = (i__18020 + (1));
seq__18016 = G__18101;
chunk__18018 = G__18102;
count__18019 = G__18103;
i__18020 = G__18104;
continue;
} else {
var G__18105 = seq__18016;
var G__18106 = chunk__18018;
var G__18107 = count__18019;
var G__18108 = (i__18020 + (1));
seq__18016 = G__18105;
chunk__18018 = G__18106;
count__18019 = G__18107;
i__18020 = G__18108;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18016);
if(temp__5804__auto__){
var seq__18016__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18016__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__18016__$1);
var G__18111 = cljs.core.chunk_rest(seq__18016__$1);
var G__18112 = c__5568__auto__;
var G__18113 = cljs.core.count(c__5568__auto__);
var G__18114 = (0);
seq__18016 = G__18111;
chunk__18018 = G__18112;
count__18019 = G__18113;
i__18020 = G__18114;
continue;
} else {
var map__18028 = cljs.core.first(seq__18016__$1);
var map__18028__$1 = cljs.core.__destructure_map(map__18028);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18028__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__18116 = cljs.core.next(seq__18016__$1);
var G__18117 = null;
var G__18118 = (0);
var G__18119 = (0);
seq__18016 = G__18116;
chunk__18018 = G__18117;
count__18019 = G__18118;
i__18020 = G__18119;
continue;
} else {
var G__18120 = cljs.core.next(seq__18016__$1);
var G__18121 = null;
var G__18122 = (0);
var G__18123 = (0);
seq__18016 = G__18120;
chunk__18018 = G__18121;
count__18019 = G__18122;
i__18020 = G__18123;
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

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
