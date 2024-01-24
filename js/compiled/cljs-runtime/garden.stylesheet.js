goog.provide('garden.stylesheet');
/**
 * Create a rule function for the given selector. The `selector`
 *   argument must be valid selector (ie. a keyword, string, or symbol).
 *   Additional arguments may consist of extra selectors or
 *   declarations.
 * 
 *   The returned function accepts any number of arguments which represent
 *   the rule's children.
 * 
 *   Ex.
 *    (let [text-field (rule "[type="text"])]
 *     (text-field {:border ["1px" :solid "black"]}))
 *    ;; => ["[type="text"] {:boder ["1px" :solid "black"]}]
 */
garden.stylesheet.rule = (function garden$stylesheet$rule(var_args){
var args__5775__auto__ = [];
var len__5769__auto___23304 = arguments.length;
var i__5770__auto___23305 = (0);
while(true){
if((i__5770__auto___23305 < len__5769__auto___23304)){
args__5775__auto__.push((arguments[i__5770__auto___23305]));

var G__23306 = (i__5770__auto___23305 + (1));
i__5770__auto___23305 = G__23306;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic = (function (selector,more){
if((!((((selector instanceof cljs.core.Keyword)) || (((typeof selector === 'string') || ((selector instanceof cljs.core.Symbol)))))))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Selector must be either a keyword, string, or symbol.",cljs.core.PersistentArrayMap.EMPTY);
} else {
return (function() { 
var G__23307__delegate = function (children){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,selector,more),children);
};
var G__23307 = function (var_args){
var children = null;
if (arguments.length > 0) {
var G__23308__i = 0, G__23308__a = new Array(arguments.length -  0);
while (G__23308__i < G__23308__a.length) {G__23308__a[G__23308__i] = arguments[G__23308__i + 0]; ++G__23308__i;}
  children = new cljs.core.IndexedSeq(G__23308__a,0,null);
} 
return G__23307__delegate.call(this,children);};
G__23307.cljs$lang$maxFixedArity = 0;
G__23307.cljs$lang$applyTo = (function (arglist__23309){
var children = cljs.core.seq(arglist__23309);
return G__23307__delegate(children);
});
G__23307.cljs$core$IFn$_invoke$arity$variadic = G__23307__delegate;
return G__23307;
})()
;
}
}));

(garden.stylesheet.rule.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(garden.stylesheet.rule.cljs$lang$applyTo = (function (seq23291){
var G__23292 = cljs.core.first(seq23291);
var seq23291__$1 = cljs.core.next(seq23291);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23292,seq23291__$1);
}));

garden.stylesheet.cssfn = (function garden$stylesheet$cssfn(fn_name){
return (function() { 
var G__23310__delegate = function (args){
return (new garden.types.CSSFunction(fn_name,args,null,null,null));
};
var G__23310 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23311__i = 0, G__23311__a = new Array(arguments.length -  0);
while (G__23311__i < G__23311__a.length) {G__23311__a[G__23311__i] = arguments[G__23311__i + 0]; ++G__23311__i;}
  args = new cljs.core.IndexedSeq(G__23311__a,0,null);
} 
return G__23310__delegate.call(this,args);};
G__23310.cljs$lang$maxFixedArity = 0;
G__23310.cljs$lang$applyTo = (function (arglist__23312){
var args = cljs.core.seq(arglist__23312);
return G__23310__delegate(args);
});
G__23310.cljs$core$IFn$_invoke$arity$variadic = G__23310__delegate;
return G__23310;
})()
;
});
garden.stylesheet.at_rule = (function garden$stylesheet$at_rule(identifier,value){
return (new garden.types.CSSAtRule(identifier,value,null,null,null));
});
/**
 * Create a CSS @font-face rule.
 */
garden.stylesheet.at_font_face = (function garden$stylesheet$at_font_face(var_args){
var args__5775__auto__ = [];
var len__5769__auto___23313 = arguments.length;
var i__5770__auto___23314 = (0);
while(true){
if((i__5770__auto___23314 < len__5769__auto___23313)){
args__5775__auto__.push((arguments[i__5770__auto___23314]));

var G__23315 = (i__5770__auto___23314 + (1));
i__5770__auto___23314 = G__23315;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic = (function (font_properties){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["@font-face",font_properties], null);
}));

(garden.stylesheet.at_font_face.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(garden.stylesheet.at_font_face.cljs$lang$applyTo = (function (seq23293){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq23293));
}));

/**
 * Create a CSS @import rule.
 */
garden.stylesheet.at_import = (function garden$stylesheet$at_import(var_args){
var G__23297 = arguments.length;
switch (G__23297) {
case 1:
return garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___23317 = arguments.length;
var i__5770__auto___23318 = (0);
while(true){
if((i__5770__auto___23318 < len__5769__auto___23317)){
args_arr__5794__auto__.push((arguments[i__5770__auto___23318]));

var G__23319 = (i__5770__auto___23318 + (1));
i__5770__auto___23318 = G__23319;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((1)),(0),null));
return garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5795__auto__);

}
});

(garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1 = (function (url){
return garden.stylesheet.at_rule(new cljs.core.Keyword(null,"import","import",-1399500709),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),null], null));
}));

(garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic = (function (url,media_queries){
return garden.stylesheet.at_rule(new cljs.core.Keyword(null,"import","import",-1399500709),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),media_queries], null));
}));

/** @this {Function} */
(garden.stylesheet.at_import.cljs$lang$applyTo = (function (seq23295){
var G__23296 = cljs.core.first(seq23295);
var seq23295__$1 = cljs.core.next(seq23295);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23296,seq23295__$1);
}));

(garden.stylesheet.at_import.cljs$lang$maxFixedArity = (1));

/**
 * Create a CSS @media rule.
 */
garden.stylesheet.at_media = (function garden$stylesheet$at_media(var_args){
var args__5775__auto__ = [];
var len__5769__auto___23320 = arguments.length;
var i__5770__auto___23321 = (0);
while(true){
if((i__5770__auto___23321 < len__5769__auto___23320)){
args__5775__auto__.push((arguments[i__5770__auto___23321]));

var G__23322 = (i__5770__auto___23321 + (1));
i__5770__auto___23321 = G__23322;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic = (function (media_queries,rules){
return garden.stylesheet.at_rule(new cljs.core.Keyword(null,"media","media",-1066138403),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),media_queries,new cljs.core.Keyword(null,"rules","rules",1198912366),rules], null));
}));

(garden.stylesheet.at_media.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(garden.stylesheet.at_media.cljs$lang$applyTo = (function (seq23298){
var G__23299 = cljs.core.first(seq23298);
var seq23298__$1 = cljs.core.next(seq23298);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23299,seq23298__$1);
}));

garden.stylesheet.at_supports = (function garden$stylesheet$at_supports(var_args){
var args__5775__auto__ = [];
var len__5769__auto___23323 = arguments.length;
var i__5770__auto___23324 = (0);
while(true){
if((i__5770__auto___23324 < len__5769__auto___23323)){
args__5775__auto__.push((arguments[i__5770__auto___23324]));

var G__23325 = (i__5770__auto___23324 + (1));
i__5770__auto___23324 = G__23325;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.at_supports.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(garden.stylesheet.at_supports.cljs$core$IFn$_invoke$arity$variadic = (function (feature_queries,rules){

return garden.stylesheet.at_rule(new cljs.core.Keyword(null,"feature","feature",27242652),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"feature-queries","feature-queries",-1340998408),feature_queries,new cljs.core.Keyword(null,"rules","rules",1198912366),rules], null));
}));

(garden.stylesheet.at_supports.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(garden.stylesheet.at_supports.cljs$lang$applyTo = (function (seq23300){
var G__23301 = cljs.core.first(seq23300);
var seq23300__$1 = cljs.core.next(seq23300);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23301,seq23300__$1);
}));

/**
 * Create a CSS @keyframes rule.
 */
garden.stylesheet.at_keyframes = (function garden$stylesheet$at_keyframes(var_args){
var args__5775__auto__ = [];
var len__5769__auto___23326 = arguments.length;
var i__5770__auto___23327 = (0);
while(true){
if((i__5770__auto___23327 < len__5769__auto___23326)){
args__5775__auto__.push((arguments[i__5770__auto___23327]));

var G__23328 = (i__5770__auto___23327 + (1));
i__5770__auto___23327 = G__23328;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic = (function (identifier,frames){
return garden.stylesheet.at_rule(new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"identifier","identifier",-805503498),identifier,new cljs.core.Keyword(null,"frames","frames",1765687497),frames], null));
}));

(garden.stylesheet.at_keyframes.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(garden.stylesheet.at_keyframes.cljs$lang$applyTo = (function (seq23302){
var G__23303 = cljs.core.first(seq23302);
var seq23302__$1 = cljs.core.next(seq23302);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23303,seq23302__$1);
}));

/**
 * Create a color from RGB values.
 */
garden.stylesheet.rgb = (function garden$stylesheet$rgb(r,g,b){
return garden.color.rgb.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null));
});
/**
 * Create a color from HSL values.
 */
garden.stylesheet.hsl = (function garden$stylesheet$hsl(h,s,l){
return garden.color.hsl.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,s,l], null));
});

//# sourceMappingURL=garden.stylesheet.js.map
