goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_20880 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_20880(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_20889 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_20889(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__19824 = coll;
var G__19825 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__19824,G__19825) : shadow.dom.lazy_native_coll_seq.call(null,G__19824,G__19825));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__19869 = arguments.length;
switch (G__19869) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__19878 = arguments.length;
switch (G__19878) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__19888 = arguments.length;
switch (G__19888) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__19896 = arguments.length;
switch (G__19896) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__19922 = arguments.length;
switch (G__19922) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__19936 = arguments.length;
switch (G__19936) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e19942){if((e19942 instanceof Object)){
var e = e19942;
return console.log("didnt support attachEvent",el,e);
} else {
throw e19942;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__19954 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__19955 = null;
var count__19956 = (0);
var i__19957 = (0);
while(true){
if((i__19957 < count__19956)){
var el = chunk__19955.cljs$core$IIndexed$_nth$arity$2(null,i__19957);
var handler_21011__$1 = ((function (seq__19954,chunk__19955,count__19956,i__19957,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__19954,chunk__19955,count__19956,i__19957,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_21011__$1);


var G__21012 = seq__19954;
var G__21013 = chunk__19955;
var G__21014 = count__19956;
var G__21015 = (i__19957 + (1));
seq__19954 = G__21012;
chunk__19955 = G__21013;
count__19956 = G__21014;
i__19957 = G__21015;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__19954);
if(temp__5804__auto__){
var seq__19954__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19954__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__19954__$1);
var G__21016 = cljs.core.chunk_rest(seq__19954__$1);
var G__21017 = c__5568__auto__;
var G__21018 = cljs.core.count(c__5568__auto__);
var G__21019 = (0);
seq__19954 = G__21016;
chunk__19955 = G__21017;
count__19956 = G__21018;
i__19957 = G__21019;
continue;
} else {
var el = cljs.core.first(seq__19954__$1);
var handler_21020__$1 = ((function (seq__19954,chunk__19955,count__19956,i__19957,el,seq__19954__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__19954,chunk__19955,count__19956,i__19957,el,seq__19954__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_21020__$1);


var G__21022 = cljs.core.next(seq__19954__$1);
var G__21023 = null;
var G__21024 = (0);
var G__21025 = (0);
seq__19954 = G__21022;
chunk__19955 = G__21023;
count__19956 = G__21024;
i__19957 = G__21025;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__19985 = arguments.length;
switch (G__19985) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__19994 = cljs.core.seq(events);
var chunk__19995 = null;
var count__19996 = (0);
var i__19997 = (0);
while(true){
if((i__19997 < count__19996)){
var vec__20008 = chunk__19995.cljs$core$IIndexed$_nth$arity$2(null,i__19997);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20008,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20008,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__21031 = seq__19994;
var G__21032 = chunk__19995;
var G__21033 = count__19996;
var G__21034 = (i__19997 + (1));
seq__19994 = G__21031;
chunk__19995 = G__21032;
count__19996 = G__21033;
i__19997 = G__21034;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__19994);
if(temp__5804__auto__){
var seq__19994__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19994__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__19994__$1);
var G__21035 = cljs.core.chunk_rest(seq__19994__$1);
var G__21036 = c__5568__auto__;
var G__21037 = cljs.core.count(c__5568__auto__);
var G__21038 = (0);
seq__19994 = G__21035;
chunk__19995 = G__21036;
count__19996 = G__21037;
i__19997 = G__21038;
continue;
} else {
var vec__20015 = cljs.core.first(seq__19994__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20015,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20015,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__21039 = cljs.core.next(seq__19994__$1);
var G__21040 = null;
var G__21041 = (0);
var G__21042 = (0);
seq__19994 = G__21039;
chunk__19995 = G__21040;
count__19996 = G__21041;
i__19997 = G__21042;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__20025 = cljs.core.seq(styles);
var chunk__20026 = null;
var count__20027 = (0);
var i__20028 = (0);
while(true){
if((i__20028 < count__20027)){
var vec__20046 = chunk__20026.cljs$core$IIndexed$_nth$arity$2(null,i__20028);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20046,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20046,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__21045 = seq__20025;
var G__21046 = chunk__20026;
var G__21047 = count__20027;
var G__21048 = (i__20028 + (1));
seq__20025 = G__21045;
chunk__20026 = G__21046;
count__20027 = G__21047;
i__20028 = G__21048;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20025);
if(temp__5804__auto__){
var seq__20025__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20025__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20025__$1);
var G__21049 = cljs.core.chunk_rest(seq__20025__$1);
var G__21050 = c__5568__auto__;
var G__21051 = cljs.core.count(c__5568__auto__);
var G__21052 = (0);
seq__20025 = G__21049;
chunk__20026 = G__21050;
count__20027 = G__21051;
i__20028 = G__21052;
continue;
} else {
var vec__20059 = cljs.core.first(seq__20025__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20059,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20059,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__21055 = cljs.core.next(seq__20025__$1);
var G__21056 = null;
var G__21057 = (0);
var G__21058 = (0);
seq__20025 = G__21055;
chunk__20026 = G__21056;
count__20027 = G__21057;
i__20028 = G__21058;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__20073_21059 = key;
var G__20073_21060__$1 = (((G__20073_21059 instanceof cljs.core.Keyword))?G__20073_21059.fqn:null);
switch (G__20073_21060__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_21062 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_21062,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_21062,"aria-");
}
})())){
el.setAttribute(ks_21062,value);
} else {
(el[ks_21062] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__20120){
var map__20122 = p__20120;
var map__20122__$1 = cljs.core.__destructure_map(map__20122);
var props = map__20122__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20122__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__20131 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20131,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20131,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20131,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__20136 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__20136,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__20136;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__20142 = arguments.length;
switch (G__20142) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__20157){
var vec__20159 = p__20157;
var seq__20160 = cljs.core.seq(vec__20159);
var first__20161 = cljs.core.first(seq__20160);
var seq__20160__$1 = cljs.core.next(seq__20160);
var nn = first__20161;
var first__20161__$1 = cljs.core.first(seq__20160__$1);
var seq__20160__$2 = cljs.core.next(seq__20160__$1);
var np = first__20161__$1;
var nc = seq__20160__$2;
var node = vec__20159;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__20166 = nn;
var G__20167 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__20166,G__20167) : create_fn.call(null,G__20166,G__20167));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__20169 = nn;
var G__20170 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__20169,G__20170) : create_fn.call(null,G__20169,G__20170));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__20177 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20177,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20177,(1),null);
var seq__20180_21083 = cljs.core.seq(node_children);
var chunk__20181_21084 = null;
var count__20182_21085 = (0);
var i__20183_21086 = (0);
while(true){
if((i__20183_21086 < count__20182_21085)){
var child_struct_21087 = chunk__20181_21084.cljs$core$IIndexed$_nth$arity$2(null,i__20183_21086);
var children_21088 = shadow.dom.dom_node(child_struct_21087);
if(cljs.core.seq_QMARK_(children_21088)){
var seq__20242_21089 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_21088));
var chunk__20244_21090 = null;
var count__20245_21091 = (0);
var i__20246_21092 = (0);
while(true){
if((i__20246_21092 < count__20245_21091)){
var child_21093 = chunk__20244_21090.cljs$core$IIndexed$_nth$arity$2(null,i__20246_21092);
if(cljs.core.truth_(child_21093)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_21093);


var G__21095 = seq__20242_21089;
var G__21096 = chunk__20244_21090;
var G__21097 = count__20245_21091;
var G__21098 = (i__20246_21092 + (1));
seq__20242_21089 = G__21095;
chunk__20244_21090 = G__21096;
count__20245_21091 = G__21097;
i__20246_21092 = G__21098;
continue;
} else {
var G__21100 = seq__20242_21089;
var G__21101 = chunk__20244_21090;
var G__21102 = count__20245_21091;
var G__21103 = (i__20246_21092 + (1));
seq__20242_21089 = G__21100;
chunk__20244_21090 = G__21101;
count__20245_21091 = G__21102;
i__20246_21092 = G__21103;
continue;
}
} else {
var temp__5804__auto___21104 = cljs.core.seq(seq__20242_21089);
if(temp__5804__auto___21104){
var seq__20242_21105__$1 = temp__5804__auto___21104;
if(cljs.core.chunked_seq_QMARK_(seq__20242_21105__$1)){
var c__5568__auto___21106 = cljs.core.chunk_first(seq__20242_21105__$1);
var G__21107 = cljs.core.chunk_rest(seq__20242_21105__$1);
var G__21108 = c__5568__auto___21106;
var G__21109 = cljs.core.count(c__5568__auto___21106);
var G__21110 = (0);
seq__20242_21089 = G__21107;
chunk__20244_21090 = G__21108;
count__20245_21091 = G__21109;
i__20246_21092 = G__21110;
continue;
} else {
var child_21111 = cljs.core.first(seq__20242_21105__$1);
if(cljs.core.truth_(child_21111)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_21111);


var G__21112 = cljs.core.next(seq__20242_21105__$1);
var G__21113 = null;
var G__21114 = (0);
var G__21115 = (0);
seq__20242_21089 = G__21112;
chunk__20244_21090 = G__21113;
count__20245_21091 = G__21114;
i__20246_21092 = G__21115;
continue;
} else {
var G__21116 = cljs.core.next(seq__20242_21105__$1);
var G__21117 = null;
var G__21118 = (0);
var G__21119 = (0);
seq__20242_21089 = G__21116;
chunk__20244_21090 = G__21117;
count__20245_21091 = G__21118;
i__20246_21092 = G__21119;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_21088);
}


var G__21121 = seq__20180_21083;
var G__21122 = chunk__20181_21084;
var G__21123 = count__20182_21085;
var G__21124 = (i__20183_21086 + (1));
seq__20180_21083 = G__21121;
chunk__20181_21084 = G__21122;
count__20182_21085 = G__21123;
i__20183_21086 = G__21124;
continue;
} else {
var temp__5804__auto___21126 = cljs.core.seq(seq__20180_21083);
if(temp__5804__auto___21126){
var seq__20180_21127__$1 = temp__5804__auto___21126;
if(cljs.core.chunked_seq_QMARK_(seq__20180_21127__$1)){
var c__5568__auto___21128 = cljs.core.chunk_first(seq__20180_21127__$1);
var G__21129 = cljs.core.chunk_rest(seq__20180_21127__$1);
var G__21130 = c__5568__auto___21128;
var G__21131 = cljs.core.count(c__5568__auto___21128);
var G__21132 = (0);
seq__20180_21083 = G__21129;
chunk__20181_21084 = G__21130;
count__20182_21085 = G__21131;
i__20183_21086 = G__21132;
continue;
} else {
var child_struct_21133 = cljs.core.first(seq__20180_21127__$1);
var children_21134 = shadow.dom.dom_node(child_struct_21133);
if(cljs.core.seq_QMARK_(children_21134)){
var seq__20255_21135 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_21134));
var chunk__20257_21136 = null;
var count__20258_21137 = (0);
var i__20259_21138 = (0);
while(true){
if((i__20259_21138 < count__20258_21137)){
var child_21139 = chunk__20257_21136.cljs$core$IIndexed$_nth$arity$2(null,i__20259_21138);
if(cljs.core.truth_(child_21139)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_21139);


var G__21142 = seq__20255_21135;
var G__21143 = chunk__20257_21136;
var G__21144 = count__20258_21137;
var G__21145 = (i__20259_21138 + (1));
seq__20255_21135 = G__21142;
chunk__20257_21136 = G__21143;
count__20258_21137 = G__21144;
i__20259_21138 = G__21145;
continue;
} else {
var G__21146 = seq__20255_21135;
var G__21147 = chunk__20257_21136;
var G__21148 = count__20258_21137;
var G__21149 = (i__20259_21138 + (1));
seq__20255_21135 = G__21146;
chunk__20257_21136 = G__21147;
count__20258_21137 = G__21148;
i__20259_21138 = G__21149;
continue;
}
} else {
var temp__5804__auto___21150__$1 = cljs.core.seq(seq__20255_21135);
if(temp__5804__auto___21150__$1){
var seq__20255_21151__$1 = temp__5804__auto___21150__$1;
if(cljs.core.chunked_seq_QMARK_(seq__20255_21151__$1)){
var c__5568__auto___21152 = cljs.core.chunk_first(seq__20255_21151__$1);
var G__21153 = cljs.core.chunk_rest(seq__20255_21151__$1);
var G__21154 = c__5568__auto___21152;
var G__21155 = cljs.core.count(c__5568__auto___21152);
var G__21156 = (0);
seq__20255_21135 = G__21153;
chunk__20257_21136 = G__21154;
count__20258_21137 = G__21155;
i__20259_21138 = G__21156;
continue;
} else {
var child_21157 = cljs.core.first(seq__20255_21151__$1);
if(cljs.core.truth_(child_21157)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_21157);


var G__21158 = cljs.core.next(seq__20255_21151__$1);
var G__21159 = null;
var G__21160 = (0);
var G__21161 = (0);
seq__20255_21135 = G__21158;
chunk__20257_21136 = G__21159;
count__20258_21137 = G__21160;
i__20259_21138 = G__21161;
continue;
} else {
var G__21162 = cljs.core.next(seq__20255_21151__$1);
var G__21163 = null;
var G__21164 = (0);
var G__21165 = (0);
seq__20255_21135 = G__21162;
chunk__20257_21136 = G__21163;
count__20258_21137 = G__21164;
i__20259_21138 = G__21165;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_21134);
}


var G__21166 = cljs.core.next(seq__20180_21127__$1);
var G__21167 = null;
var G__21168 = (0);
var G__21169 = (0);
seq__20180_21083 = G__21166;
chunk__20181_21084 = G__21167;
count__20182_21085 = G__21168;
i__20183_21086 = G__21169;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__20302 = cljs.core.seq(node);
var chunk__20303 = null;
var count__20304 = (0);
var i__20305 = (0);
while(true){
if((i__20305 < count__20304)){
var n = chunk__20303.cljs$core$IIndexed$_nth$arity$2(null,i__20305);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__21171 = seq__20302;
var G__21172 = chunk__20303;
var G__21173 = count__20304;
var G__21174 = (i__20305 + (1));
seq__20302 = G__21171;
chunk__20303 = G__21172;
count__20304 = G__21173;
i__20305 = G__21174;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20302);
if(temp__5804__auto__){
var seq__20302__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20302__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20302__$1);
var G__21175 = cljs.core.chunk_rest(seq__20302__$1);
var G__21176 = c__5568__auto__;
var G__21177 = cljs.core.count(c__5568__auto__);
var G__21178 = (0);
seq__20302 = G__21175;
chunk__20303 = G__21176;
count__20304 = G__21177;
i__20305 = G__21178;
continue;
} else {
var n = cljs.core.first(seq__20302__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__21179 = cljs.core.next(seq__20302__$1);
var G__21180 = null;
var G__21181 = (0);
var G__21182 = (0);
seq__20302 = G__21179;
chunk__20303 = G__21180;
count__20304 = G__21181;
i__20305 = G__21182;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__20327 = arguments.length;
switch (G__20327) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__20337 = arguments.length;
switch (G__20337) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__20346 = arguments.length;
switch (G__20346) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___21222 = arguments.length;
var i__5770__auto___21223 = (0);
while(true){
if((i__5770__auto___21223 < len__5769__auto___21222)){
args__5775__auto__.push((arguments[i__5770__auto___21223]));

var G__21224 = (i__5770__auto___21223 + (1));
i__5770__auto___21223 = G__21224;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__20365_21231 = cljs.core.seq(nodes);
var chunk__20366_21232 = null;
var count__20367_21233 = (0);
var i__20368_21234 = (0);
while(true){
if((i__20368_21234 < count__20367_21233)){
var node_21237 = chunk__20366_21232.cljs$core$IIndexed$_nth$arity$2(null,i__20368_21234);
fragment.appendChild(shadow.dom._to_dom(node_21237));


var G__21239 = seq__20365_21231;
var G__21240 = chunk__20366_21232;
var G__21241 = count__20367_21233;
var G__21242 = (i__20368_21234 + (1));
seq__20365_21231 = G__21239;
chunk__20366_21232 = G__21240;
count__20367_21233 = G__21241;
i__20368_21234 = G__21242;
continue;
} else {
var temp__5804__auto___21244 = cljs.core.seq(seq__20365_21231);
if(temp__5804__auto___21244){
var seq__20365_21249__$1 = temp__5804__auto___21244;
if(cljs.core.chunked_seq_QMARK_(seq__20365_21249__$1)){
var c__5568__auto___21250 = cljs.core.chunk_first(seq__20365_21249__$1);
var G__21251 = cljs.core.chunk_rest(seq__20365_21249__$1);
var G__21252 = c__5568__auto___21250;
var G__21253 = cljs.core.count(c__5568__auto___21250);
var G__21254 = (0);
seq__20365_21231 = G__21251;
chunk__20366_21232 = G__21252;
count__20367_21233 = G__21253;
i__20368_21234 = G__21254;
continue;
} else {
var node_21255 = cljs.core.first(seq__20365_21249__$1);
fragment.appendChild(shadow.dom._to_dom(node_21255));


var G__21256 = cljs.core.next(seq__20365_21249__$1);
var G__21257 = null;
var G__21258 = (0);
var G__21259 = (0);
seq__20365_21231 = G__21256;
chunk__20366_21232 = G__21257;
count__20367_21233 = G__21258;
i__20368_21234 = G__21259;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq20360){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20360));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__20378_21260 = cljs.core.seq(scripts);
var chunk__20379_21261 = null;
var count__20380_21262 = (0);
var i__20381_21263 = (0);
while(true){
if((i__20381_21263 < count__20380_21262)){
var vec__20398_21264 = chunk__20379_21261.cljs$core$IIndexed$_nth$arity$2(null,i__20381_21263);
var script_tag_21265 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20398_21264,(0),null);
var script_body_21266 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20398_21264,(1),null);
eval(script_body_21266);


var G__21267 = seq__20378_21260;
var G__21268 = chunk__20379_21261;
var G__21269 = count__20380_21262;
var G__21270 = (i__20381_21263 + (1));
seq__20378_21260 = G__21267;
chunk__20379_21261 = G__21268;
count__20380_21262 = G__21269;
i__20381_21263 = G__21270;
continue;
} else {
var temp__5804__auto___21271 = cljs.core.seq(seq__20378_21260);
if(temp__5804__auto___21271){
var seq__20378_21272__$1 = temp__5804__auto___21271;
if(cljs.core.chunked_seq_QMARK_(seq__20378_21272__$1)){
var c__5568__auto___21273 = cljs.core.chunk_first(seq__20378_21272__$1);
var G__21274 = cljs.core.chunk_rest(seq__20378_21272__$1);
var G__21275 = c__5568__auto___21273;
var G__21276 = cljs.core.count(c__5568__auto___21273);
var G__21277 = (0);
seq__20378_21260 = G__21274;
chunk__20379_21261 = G__21275;
count__20380_21262 = G__21276;
i__20381_21263 = G__21277;
continue;
} else {
var vec__20405_21282 = cljs.core.first(seq__20378_21272__$1);
var script_tag_21283 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20405_21282,(0),null);
var script_body_21284 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20405_21282,(1),null);
eval(script_body_21284);


var G__21285 = cljs.core.next(seq__20378_21272__$1);
var G__21286 = null;
var G__21287 = (0);
var G__21288 = (0);
seq__20378_21260 = G__21285;
chunk__20379_21261 = G__21286;
count__20380_21262 = G__21287;
i__20381_21263 = G__21288;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__20409){
var vec__20410 = p__20409;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20410,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20410,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__20423 = arguments.length;
switch (G__20423) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__20445 = cljs.core.seq(style_keys);
var chunk__20446 = null;
var count__20447 = (0);
var i__20448 = (0);
while(true){
if((i__20448 < count__20447)){
var it = chunk__20446.cljs$core$IIndexed$_nth$arity$2(null,i__20448);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__21291 = seq__20445;
var G__21292 = chunk__20446;
var G__21293 = count__20447;
var G__21294 = (i__20448 + (1));
seq__20445 = G__21291;
chunk__20446 = G__21292;
count__20447 = G__21293;
i__20448 = G__21294;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20445);
if(temp__5804__auto__){
var seq__20445__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20445__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20445__$1);
var G__21299 = cljs.core.chunk_rest(seq__20445__$1);
var G__21300 = c__5568__auto__;
var G__21301 = cljs.core.count(c__5568__auto__);
var G__21302 = (0);
seq__20445 = G__21299;
chunk__20446 = G__21300;
count__20447 = G__21301;
i__20448 = G__21302;
continue;
} else {
var it = cljs.core.first(seq__20445__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__21304 = cljs.core.next(seq__20445__$1);
var G__21305 = null;
var G__21306 = (0);
var G__21307 = (0);
seq__20445 = G__21304;
chunk__20446 = G__21305;
count__20447 = G__21306;
i__20448 = G__21307;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k20459,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__20469 = k20459;
var G__20469__$1 = (((G__20469 instanceof cljs.core.Keyword))?G__20469.fqn:null);
switch (G__20469__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k20459,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__20473){
var vec__20474 = p__20473;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20474,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20474,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20458){
var self__ = this;
var G__20458__$1 = this;
return (new cljs.core.RecordIter((0),G__20458__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this20460,other20461){
var self__ = this;
var this20460__$1 = this;
return (((!((other20461 == null)))) && ((((this20460__$1.constructor === other20461.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20460__$1.x,other20461.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20460__$1.y,other20461.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20460__$1.__extmap,other20461.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k20459){
var self__ = this;
var this__5350__auto____$1 = this;
var G__20493 = k20459;
var G__20493__$1 = (((G__20493 instanceof cljs.core.Keyword))?G__20493.fqn:null);
switch (G__20493__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k20459);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__20458){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__20496 = cljs.core.keyword_identical_QMARK_;
var expr__20497 = k__5352__auto__;
if(cljs.core.truth_((pred__20496.cljs$core$IFn$_invoke$arity$2 ? pred__20496.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__20497) : pred__20496.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__20497)))){
return (new shadow.dom.Coordinate(G__20458,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__20496.cljs$core$IFn$_invoke$arity$2 ? pred__20496.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__20497) : pred__20496.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__20497)))){
return (new shadow.dom.Coordinate(self__.x,G__20458,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__20458),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__20458){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__20458,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__20464){
var extmap__5385__auto__ = (function (){var G__20503 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__20464,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__20464)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__20503);
} else {
return G__20503;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__20464),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__20464),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k20506,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__20510 = k20506;
var G__20510__$1 = (((G__20510 instanceof cljs.core.Keyword))?G__20510.fqn:null);
switch (G__20510__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k20506,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__20516){
var vec__20518 = p__20516;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20518,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20518,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20505){
var self__ = this;
var G__20505__$1 = this;
return (new cljs.core.RecordIter((0),G__20505__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this20507,other20508){
var self__ = this;
var this20507__$1 = this;
return (((!((other20508 == null)))) && ((((this20507__$1.constructor === other20508.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20507__$1.w,other20508.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20507__$1.h,other20508.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20507__$1.__extmap,other20508.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k20506){
var self__ = this;
var this__5350__auto____$1 = this;
var G__20535 = k20506;
var G__20535__$1 = (((G__20535 instanceof cljs.core.Keyword))?G__20535.fqn:null);
switch (G__20535__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k20506);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__20505){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__20539 = cljs.core.keyword_identical_QMARK_;
var expr__20540 = k__5352__auto__;
if(cljs.core.truth_((pred__20539.cljs$core$IFn$_invoke$arity$2 ? pred__20539.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__20540) : pred__20539.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__20540)))){
return (new shadow.dom.Size(G__20505,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__20539.cljs$core$IFn$_invoke$arity$2 ? pred__20539.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__20540) : pred__20539.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__20540)))){
return (new shadow.dom.Size(self__.w,G__20505,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__20505),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__20505){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__20505,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__20509){
var extmap__5385__auto__ = (function (){var G__20554 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__20509,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__20509)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__20554);
} else {
return G__20554;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__20509),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__20509),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__21345 = (i + (1));
var G__21346 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__21345;
ret = G__21346;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__20585){
var vec__20586 = p__20585;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20586,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20586,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__20594 = arguments.length;
switch (G__20594) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__21353 = ps;
var G__21354 = (i + (1));
el__$1 = G__21353;
i = G__21354;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__20619 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20619,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20619,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20619,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__20623_21358 = cljs.core.seq(props);
var chunk__20624_21359 = null;
var count__20625_21360 = (0);
var i__20626_21361 = (0);
while(true){
if((i__20626_21361 < count__20625_21360)){
var vec__20640_21362 = chunk__20624_21359.cljs$core$IIndexed$_nth$arity$2(null,i__20626_21361);
var k_21363 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20640_21362,(0),null);
var v_21364 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20640_21362,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_21363);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_21363),v_21364);


var G__21366 = seq__20623_21358;
var G__21367 = chunk__20624_21359;
var G__21368 = count__20625_21360;
var G__21369 = (i__20626_21361 + (1));
seq__20623_21358 = G__21366;
chunk__20624_21359 = G__21367;
count__20625_21360 = G__21368;
i__20626_21361 = G__21369;
continue;
} else {
var temp__5804__auto___21370 = cljs.core.seq(seq__20623_21358);
if(temp__5804__auto___21370){
var seq__20623_21371__$1 = temp__5804__auto___21370;
if(cljs.core.chunked_seq_QMARK_(seq__20623_21371__$1)){
var c__5568__auto___21374 = cljs.core.chunk_first(seq__20623_21371__$1);
var G__21375 = cljs.core.chunk_rest(seq__20623_21371__$1);
var G__21376 = c__5568__auto___21374;
var G__21377 = cljs.core.count(c__5568__auto___21374);
var G__21378 = (0);
seq__20623_21358 = G__21375;
chunk__20624_21359 = G__21376;
count__20625_21360 = G__21377;
i__20626_21361 = G__21378;
continue;
} else {
var vec__20649_21379 = cljs.core.first(seq__20623_21371__$1);
var k_21380 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20649_21379,(0),null);
var v_21381 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20649_21379,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_21380);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_21380),v_21381);


var G__21382 = cljs.core.next(seq__20623_21371__$1);
var G__21383 = null;
var G__21384 = (0);
var G__21385 = (0);
seq__20623_21358 = G__21382;
chunk__20624_21359 = G__21383;
count__20625_21360 = G__21384;
i__20626_21361 = G__21385;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__20661 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20661,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20661,(1),null);
var seq__20664_21387 = cljs.core.seq(node_children);
var chunk__20666_21388 = null;
var count__20667_21389 = (0);
var i__20668_21390 = (0);
while(true){
if((i__20668_21390 < count__20667_21389)){
var child_struct_21394 = chunk__20666_21388.cljs$core$IIndexed$_nth$arity$2(null,i__20668_21390);
if((!((child_struct_21394 == null)))){
if(typeof child_struct_21394 === 'string'){
var text_21395 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_21395),child_struct_21394].join(''));
} else {
var children_21396 = shadow.dom.svg_node(child_struct_21394);
if(cljs.core.seq_QMARK_(children_21396)){
var seq__20700_21400 = cljs.core.seq(children_21396);
var chunk__20702_21401 = null;
var count__20703_21402 = (0);
var i__20704_21403 = (0);
while(true){
if((i__20704_21403 < count__20703_21402)){
var child_21404 = chunk__20702_21401.cljs$core$IIndexed$_nth$arity$2(null,i__20704_21403);
if(cljs.core.truth_(child_21404)){
node.appendChild(child_21404);


var G__21405 = seq__20700_21400;
var G__21406 = chunk__20702_21401;
var G__21407 = count__20703_21402;
var G__21408 = (i__20704_21403 + (1));
seq__20700_21400 = G__21405;
chunk__20702_21401 = G__21406;
count__20703_21402 = G__21407;
i__20704_21403 = G__21408;
continue;
} else {
var G__21414 = seq__20700_21400;
var G__21415 = chunk__20702_21401;
var G__21416 = count__20703_21402;
var G__21417 = (i__20704_21403 + (1));
seq__20700_21400 = G__21414;
chunk__20702_21401 = G__21415;
count__20703_21402 = G__21416;
i__20704_21403 = G__21417;
continue;
}
} else {
var temp__5804__auto___21421 = cljs.core.seq(seq__20700_21400);
if(temp__5804__auto___21421){
var seq__20700_21422__$1 = temp__5804__auto___21421;
if(cljs.core.chunked_seq_QMARK_(seq__20700_21422__$1)){
var c__5568__auto___21423 = cljs.core.chunk_first(seq__20700_21422__$1);
var G__21424 = cljs.core.chunk_rest(seq__20700_21422__$1);
var G__21425 = c__5568__auto___21423;
var G__21426 = cljs.core.count(c__5568__auto___21423);
var G__21427 = (0);
seq__20700_21400 = G__21424;
chunk__20702_21401 = G__21425;
count__20703_21402 = G__21426;
i__20704_21403 = G__21427;
continue;
} else {
var child_21428 = cljs.core.first(seq__20700_21422__$1);
if(cljs.core.truth_(child_21428)){
node.appendChild(child_21428);


var G__21429 = cljs.core.next(seq__20700_21422__$1);
var G__21430 = null;
var G__21431 = (0);
var G__21432 = (0);
seq__20700_21400 = G__21429;
chunk__20702_21401 = G__21430;
count__20703_21402 = G__21431;
i__20704_21403 = G__21432;
continue;
} else {
var G__21433 = cljs.core.next(seq__20700_21422__$1);
var G__21434 = null;
var G__21435 = (0);
var G__21436 = (0);
seq__20700_21400 = G__21433;
chunk__20702_21401 = G__21434;
count__20703_21402 = G__21435;
i__20704_21403 = G__21436;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_21396);
}
}


var G__21437 = seq__20664_21387;
var G__21438 = chunk__20666_21388;
var G__21439 = count__20667_21389;
var G__21440 = (i__20668_21390 + (1));
seq__20664_21387 = G__21437;
chunk__20666_21388 = G__21438;
count__20667_21389 = G__21439;
i__20668_21390 = G__21440;
continue;
} else {
var G__21441 = seq__20664_21387;
var G__21442 = chunk__20666_21388;
var G__21443 = count__20667_21389;
var G__21444 = (i__20668_21390 + (1));
seq__20664_21387 = G__21441;
chunk__20666_21388 = G__21442;
count__20667_21389 = G__21443;
i__20668_21390 = G__21444;
continue;
}
} else {
var temp__5804__auto___21445 = cljs.core.seq(seq__20664_21387);
if(temp__5804__auto___21445){
var seq__20664_21446__$1 = temp__5804__auto___21445;
if(cljs.core.chunked_seq_QMARK_(seq__20664_21446__$1)){
var c__5568__auto___21447 = cljs.core.chunk_first(seq__20664_21446__$1);
var G__21448 = cljs.core.chunk_rest(seq__20664_21446__$1);
var G__21449 = c__5568__auto___21447;
var G__21450 = cljs.core.count(c__5568__auto___21447);
var G__21451 = (0);
seq__20664_21387 = G__21448;
chunk__20666_21388 = G__21449;
count__20667_21389 = G__21450;
i__20668_21390 = G__21451;
continue;
} else {
var child_struct_21452 = cljs.core.first(seq__20664_21446__$1);
if((!((child_struct_21452 == null)))){
if(typeof child_struct_21452 === 'string'){
var text_21453 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_21453),child_struct_21452].join(''));
} else {
var children_21457 = shadow.dom.svg_node(child_struct_21452);
if(cljs.core.seq_QMARK_(children_21457)){
var seq__20722_21458 = cljs.core.seq(children_21457);
var chunk__20724_21459 = null;
var count__20725_21460 = (0);
var i__20726_21461 = (0);
while(true){
if((i__20726_21461 < count__20725_21460)){
var child_21462 = chunk__20724_21459.cljs$core$IIndexed$_nth$arity$2(null,i__20726_21461);
if(cljs.core.truth_(child_21462)){
node.appendChild(child_21462);


var G__21463 = seq__20722_21458;
var G__21464 = chunk__20724_21459;
var G__21465 = count__20725_21460;
var G__21466 = (i__20726_21461 + (1));
seq__20722_21458 = G__21463;
chunk__20724_21459 = G__21464;
count__20725_21460 = G__21465;
i__20726_21461 = G__21466;
continue;
} else {
var G__21467 = seq__20722_21458;
var G__21468 = chunk__20724_21459;
var G__21469 = count__20725_21460;
var G__21470 = (i__20726_21461 + (1));
seq__20722_21458 = G__21467;
chunk__20724_21459 = G__21468;
count__20725_21460 = G__21469;
i__20726_21461 = G__21470;
continue;
}
} else {
var temp__5804__auto___21471__$1 = cljs.core.seq(seq__20722_21458);
if(temp__5804__auto___21471__$1){
var seq__20722_21472__$1 = temp__5804__auto___21471__$1;
if(cljs.core.chunked_seq_QMARK_(seq__20722_21472__$1)){
var c__5568__auto___21473 = cljs.core.chunk_first(seq__20722_21472__$1);
var G__21474 = cljs.core.chunk_rest(seq__20722_21472__$1);
var G__21475 = c__5568__auto___21473;
var G__21476 = cljs.core.count(c__5568__auto___21473);
var G__21477 = (0);
seq__20722_21458 = G__21474;
chunk__20724_21459 = G__21475;
count__20725_21460 = G__21476;
i__20726_21461 = G__21477;
continue;
} else {
var child_21478 = cljs.core.first(seq__20722_21472__$1);
if(cljs.core.truth_(child_21478)){
node.appendChild(child_21478);


var G__21481 = cljs.core.next(seq__20722_21472__$1);
var G__21482 = null;
var G__21483 = (0);
var G__21484 = (0);
seq__20722_21458 = G__21481;
chunk__20724_21459 = G__21482;
count__20725_21460 = G__21483;
i__20726_21461 = G__21484;
continue;
} else {
var G__21487 = cljs.core.next(seq__20722_21472__$1);
var G__21488 = null;
var G__21489 = (0);
var G__21490 = (0);
seq__20722_21458 = G__21487;
chunk__20724_21459 = G__21488;
count__20725_21460 = G__21489;
i__20726_21461 = G__21490;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_21457);
}
}


var G__21491 = cljs.core.next(seq__20664_21446__$1);
var G__21492 = null;
var G__21493 = (0);
var G__21494 = (0);
seq__20664_21387 = G__21491;
chunk__20666_21388 = G__21492;
count__20667_21389 = G__21493;
i__20668_21390 = G__21494;
continue;
} else {
var G__21495 = cljs.core.next(seq__20664_21446__$1);
var G__21496 = null;
var G__21497 = (0);
var G__21498 = (0);
seq__20664_21387 = G__21495;
chunk__20666_21388 = G__21496;
count__20667_21389 = G__21497;
i__20668_21390 = G__21498;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___21503 = arguments.length;
var i__5770__auto___21504 = (0);
while(true){
if((i__5770__auto___21504 < len__5769__auto___21503)){
args__5775__auto__.push((arguments[i__5770__auto___21504]));

var G__21506 = (i__5770__auto___21504 + (1));
i__5770__auto___21504 = G__21506;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq20741){
var G__20742 = cljs.core.first(seq20741);
var seq20741__$1 = cljs.core.next(seq20741);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20742,seq20741__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__20744 = arguments.length;
switch (G__20744) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__17427__auto___21536 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17428__auto__ = (function (){var switch__17279__auto__ = (function (state_20779){
var state_val_20780 = (state_20779[(1)]);
if((state_val_20780 === (1))){
var state_20779__$1 = state_20779;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20779__$1,(2),once_or_cleanup);
} else {
if((state_val_20780 === (2))){
var inst_20776 = (state_20779[(2)]);
var inst_20777 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_20779__$1 = (function (){var statearr_20790 = state_20779;
(statearr_20790[(7)] = inst_20776);

return statearr_20790;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_20779__$1,inst_20777);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__17280__auto__ = null;
var shadow$dom$state_machine__17280__auto____0 = (function (){
var statearr_20800 = [null,null,null,null,null,null,null,null];
(statearr_20800[(0)] = shadow$dom$state_machine__17280__auto__);

(statearr_20800[(1)] = (1));

return statearr_20800;
});
var shadow$dom$state_machine__17280__auto____1 = (function (state_20779){
while(true){
var ret_value__17281__auto__ = (function (){try{while(true){
var result__17282__auto__ = switch__17279__auto__(state_20779);
if(cljs.core.keyword_identical_QMARK_(result__17282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17282__auto__;
}
break;
}
}catch (e20806){var ex__17283__auto__ = e20806;
var statearr_20812_21542 = state_20779;
(statearr_20812_21542[(2)] = ex__17283__auto__);


if(cljs.core.seq((state_20779[(4)]))){
var statearr_20815_21543 = state_20779;
(statearr_20815_21543[(1)] = cljs.core.first((state_20779[(4)])));

} else {
throw ex__17283__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21544 = state_20779;
state_20779 = G__21544;
continue;
} else {
return ret_value__17281__auto__;
}
break;
}
});
shadow$dom$state_machine__17280__auto__ = function(state_20779){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__17280__auto____0.call(this);
case 1:
return shadow$dom$state_machine__17280__auto____1.call(this,state_20779);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__17280__auto____0;
shadow$dom$state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__17280__auto____1;
return shadow$dom$state_machine__17280__auto__;
})()
})();
var state__17429__auto__ = (function (){var statearr_20833 = f__17428__auto__();
(statearr_20833[(6)] = c__17427__auto___21536);

return statearr_20833;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17429__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
