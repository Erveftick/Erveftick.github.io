goog.provide('reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__23312 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__23313 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__23313);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__23315 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__23316 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__23316);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__23315);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__23312);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__23324 = arguments.length;
switch (G__23324) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__23325 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23325,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23325,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__23338_23379 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__23339_23380 = null;
var count__23340_23381 = (0);
var i__23341_23382 = (0);
while(true){
if((i__23341_23382 < count__23340_23381)){
var vec__23362_23383 = chunk__23339_23380.cljs$core$IIndexed$_nth$arity$2(null,i__23341_23382);
var container_23384 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23362_23383,(0),null);
var comp_23385 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23362_23383,(1),null);
reagent.dom.re_render_component(comp_23385,container_23384);


var G__23386 = seq__23338_23379;
var G__23387 = chunk__23339_23380;
var G__23388 = count__23340_23381;
var G__23389 = (i__23341_23382 + (1));
seq__23338_23379 = G__23386;
chunk__23339_23380 = G__23387;
count__23340_23381 = G__23388;
i__23341_23382 = G__23389;
continue;
} else {
var temp__5804__auto___23390 = cljs.core.seq(seq__23338_23379);
if(temp__5804__auto___23390){
var seq__23338_23391__$1 = temp__5804__auto___23390;
if(cljs.core.chunked_seq_QMARK_(seq__23338_23391__$1)){
var c__5568__auto___23392 = cljs.core.chunk_first(seq__23338_23391__$1);
var G__23393 = cljs.core.chunk_rest(seq__23338_23391__$1);
var G__23394 = c__5568__auto___23392;
var G__23395 = cljs.core.count(c__5568__auto___23392);
var G__23396 = (0);
seq__23338_23379 = G__23393;
chunk__23339_23380 = G__23394;
count__23340_23381 = G__23395;
i__23341_23382 = G__23396;
continue;
} else {
var vec__23369_23397 = cljs.core.first(seq__23338_23391__$1);
var container_23398 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23369_23397,(0),null);
var comp_23399 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23369_23397,(1),null);
reagent.dom.re_render_component(comp_23399,container_23398);


var G__23400 = cljs.core.next(seq__23338_23391__$1);
var G__23401 = null;
var G__23402 = (0);
var G__23403 = (0);
seq__23338_23379 = G__23400;
chunk__23339_23380 = G__23401;
count__23340_23381 = G__23402;
i__23341_23382 = G__23403;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map
