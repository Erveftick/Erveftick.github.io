goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__20688){
var map__20689 = p__20688;
var map__20689__$1 = cljs.core.__destructure_map(map__20689);
var m = map__20689__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20689__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20689__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__20690_20924 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__20691_20925 = null;
var count__20692_20926 = (0);
var i__20693_20927 = (0);
while(true){
if((i__20693_20927 < count__20692_20926)){
var f_20929 = chunk__20691_20925.cljs$core$IIndexed$_nth$arity$2(null,i__20693_20927);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_20929], 0));


var G__20930 = seq__20690_20924;
var G__20931 = chunk__20691_20925;
var G__20932 = count__20692_20926;
var G__20933 = (i__20693_20927 + (1));
seq__20690_20924 = G__20930;
chunk__20691_20925 = G__20931;
count__20692_20926 = G__20932;
i__20693_20927 = G__20933;
continue;
} else {
var temp__5804__auto___20934 = cljs.core.seq(seq__20690_20924);
if(temp__5804__auto___20934){
var seq__20690_20935__$1 = temp__5804__auto___20934;
if(cljs.core.chunked_seq_QMARK_(seq__20690_20935__$1)){
var c__5568__auto___20937 = cljs.core.chunk_first(seq__20690_20935__$1);
var G__20938 = cljs.core.chunk_rest(seq__20690_20935__$1);
var G__20939 = c__5568__auto___20937;
var G__20940 = cljs.core.count(c__5568__auto___20937);
var G__20941 = (0);
seq__20690_20924 = G__20938;
chunk__20691_20925 = G__20939;
count__20692_20926 = G__20940;
i__20693_20927 = G__20941;
continue;
} else {
var f_20942 = cljs.core.first(seq__20690_20935__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_20942], 0));


var G__20943 = cljs.core.next(seq__20690_20935__$1);
var G__20944 = null;
var G__20945 = (0);
var G__20946 = (0);
seq__20690_20924 = G__20943;
chunk__20691_20925 = G__20944;
count__20692_20926 = G__20945;
i__20693_20927 = G__20946;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_20948 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_20948], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_20948)))?cljs.core.second(arglists_20948):arglists_20948)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__20706_20949 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__20707_20950 = null;
var count__20708_20951 = (0);
var i__20709_20952 = (0);
while(true){
if((i__20709_20952 < count__20708_20951)){
var vec__20718_20953 = chunk__20707_20950.cljs$core$IIndexed$_nth$arity$2(null,i__20709_20952);
var name_20954 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20718_20953,(0),null);
var map__20721_20955 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20718_20953,(1),null);
var map__20721_20956__$1 = cljs.core.__destructure_map(map__20721_20955);
var doc_20957 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20721_20956__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_20958 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20721_20956__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_20954], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_20958], 0));

if(cljs.core.truth_(doc_20957)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_20957], 0));
} else {
}


var G__20959 = seq__20706_20949;
var G__20960 = chunk__20707_20950;
var G__20961 = count__20708_20951;
var G__20962 = (i__20709_20952 + (1));
seq__20706_20949 = G__20959;
chunk__20707_20950 = G__20960;
count__20708_20951 = G__20961;
i__20709_20952 = G__20962;
continue;
} else {
var temp__5804__auto___20963 = cljs.core.seq(seq__20706_20949);
if(temp__5804__auto___20963){
var seq__20706_20964__$1 = temp__5804__auto___20963;
if(cljs.core.chunked_seq_QMARK_(seq__20706_20964__$1)){
var c__5568__auto___20966 = cljs.core.chunk_first(seq__20706_20964__$1);
var G__20967 = cljs.core.chunk_rest(seq__20706_20964__$1);
var G__20968 = c__5568__auto___20966;
var G__20969 = cljs.core.count(c__5568__auto___20966);
var G__20970 = (0);
seq__20706_20949 = G__20967;
chunk__20707_20950 = G__20968;
count__20708_20951 = G__20969;
i__20709_20952 = G__20970;
continue;
} else {
var vec__20728_20971 = cljs.core.first(seq__20706_20964__$1);
var name_20972 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20728_20971,(0),null);
var map__20731_20973 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20728_20971,(1),null);
var map__20731_20974__$1 = cljs.core.__destructure_map(map__20731_20973);
var doc_20975 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20731_20974__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_20976 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20731_20974__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_20972], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_20976], 0));

if(cljs.core.truth_(doc_20975)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_20975], 0));
} else {
}


var G__20977 = cljs.core.next(seq__20706_20964__$1);
var G__20978 = null;
var G__20979 = (0);
var G__20980 = (0);
seq__20706_20949 = G__20977;
chunk__20707_20950 = G__20978;
count__20708_20951 = G__20979;
i__20709_20952 = G__20980;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__20734 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__20735 = null;
var count__20736 = (0);
var i__20737 = (0);
while(true){
if((i__20737 < count__20736)){
var role = chunk__20735.cljs$core$IIndexed$_nth$arity$2(null,i__20737);
var temp__5804__auto___20981__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___20981__$1)){
var spec_20982 = temp__5804__auto___20981__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_20982)], 0));
} else {
}


var G__20983 = seq__20734;
var G__20984 = chunk__20735;
var G__20985 = count__20736;
var G__20986 = (i__20737 + (1));
seq__20734 = G__20983;
chunk__20735 = G__20984;
count__20736 = G__20985;
i__20737 = G__20986;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__20734);
if(temp__5804__auto____$1){
var seq__20734__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__20734__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20734__$1);
var G__20987 = cljs.core.chunk_rest(seq__20734__$1);
var G__20988 = c__5568__auto__;
var G__20989 = cljs.core.count(c__5568__auto__);
var G__20990 = (0);
seq__20734 = G__20987;
chunk__20735 = G__20988;
count__20736 = G__20989;
i__20737 = G__20990;
continue;
} else {
var role = cljs.core.first(seq__20734__$1);
var temp__5804__auto___20991__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___20991__$2)){
var spec_20992 = temp__5804__auto___20991__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_20992)], 0));
} else {
}


var G__20993 = cljs.core.next(seq__20734__$1);
var G__20994 = null;
var G__20995 = (0);
var G__20996 = (0);
seq__20734 = G__20993;
chunk__20735 = G__20994;
count__20736 = G__20995;
i__20737 = G__20996;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__20997 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__20998 = cljs.core.ex_cause(t);
via = G__20997;
t = G__20998;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__20764 = datafied_throwable;
var map__20764__$1 = cljs.core.__destructure_map(map__20764);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20764__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20764__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20764__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__20765 = cljs.core.last(via);
var map__20765__$1 = cljs.core.__destructure_map(map__20765);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20765__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20765__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20765__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__20766 = data;
var map__20766__$1 = cljs.core.__destructure_map(map__20766);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20766__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20766__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20766__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__20767 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__20767__$1 = cljs.core.__destructure_map(map__20767);
var top_data = map__20767__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20767__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__20781 = phase;
var G__20781__$1 = (((G__20781 instanceof cljs.core.Keyword))?G__20781.fqn:null);
switch (G__20781__$1) {
case "read-source":
var map__20782 = data;
var map__20782__$1 = cljs.core.__destructure_map(map__20782);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20782__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20782__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__20788 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__20788__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20788,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__20788);
var G__20788__$2 = (cljs.core.truth_((function (){var fexpr__20799 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__20799.cljs$core$IFn$_invoke$arity$1 ? fexpr__20799.cljs$core$IFn$_invoke$arity$1(source) : fexpr__20799.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__20788__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__20788__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20788__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__20788__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__20801 = top_data;
var G__20801__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20801,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__20801);
var G__20801__$2 = (cljs.core.truth_((function (){var fexpr__20807 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__20807.cljs$core$IFn$_invoke$arity$1 ? fexpr__20807.cljs$core$IFn$_invoke$arity$1(source) : fexpr__20807.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__20801__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__20801__$1);
var G__20801__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20801__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__20801__$2);
var G__20801__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20801__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__20801__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20801__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__20801__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__20830 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20830,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20830,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20830,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20830,(3),null);
var G__20834 = top_data;
var G__20834__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20834,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__20834);
var G__20834__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20834__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__20834__$1);
var G__20834__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20834__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__20834__$2);
var G__20834__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20834__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__20834__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20834__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__20834__$4;
}

break;
case "execution":
var vec__20842 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20842,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20842,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20842,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20842,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__20754_SHARP_){
var or__5045__auto__ = (p1__20754_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__20851 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__20851.cljs$core$IFn$_invoke$arity$1 ? fexpr__20851.cljs$core$IFn$_invoke$arity$1(p1__20754_SHARP_) : fexpr__20851.call(null,p1__20754_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__20860 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__20860__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20860,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__20860);
var G__20860__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20860__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__20860__$1);
var G__20860__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20860__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__20860__$2);
var G__20860__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20860__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__20860__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20860__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__20860__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20781__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__20875){
var map__20877 = p__20875;
var map__20877__$1 = cljs.core.__destructure_map(map__20877);
var triage_data = map__20877__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20877__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20877__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20877__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20877__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20877__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20877__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20877__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20877__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__20879 = phase;
var G__20879__$1 = (((G__20879 instanceof cljs.core.Keyword))?G__20879.fqn:null);
switch (G__20879__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__20881 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__20882 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20883 = loc;
var G__20884 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__20885_21068 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__20886_21069 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__20887_21070 = true;
var _STAR_print_fn_STAR__temp_val__20888_21071 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__20887_21070);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__20888_21071);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20873_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__20873_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__20886_21069);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__20885_21068);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__20881,G__20882,G__20883,G__20884) : format.call(null,G__20881,G__20882,G__20883,G__20884));

break;
case "macroexpansion":
var G__20890 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__20891 = cause_type;
var G__20893 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20894 = loc;
var G__20895 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20890,G__20891,G__20893,G__20894,G__20895) : format.call(null,G__20890,G__20891,G__20893,G__20894,G__20895));

break;
case "compile-syntax-check":
var G__20896 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__20897 = cause_type;
var G__20898 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20899 = loc;
var G__20900 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20896,G__20897,G__20898,G__20899,G__20900) : format.call(null,G__20896,G__20897,G__20898,G__20899,G__20900));

break;
case "compilation":
var G__20901 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__20902 = cause_type;
var G__20903 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20904 = loc;
var G__20905 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20901,G__20902,G__20903,G__20904,G__20905) : format.call(null,G__20901,G__20902,G__20903,G__20904,G__20905));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__20906 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__20907 = symbol;
var G__20908 = loc;
var G__20909 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__20910_21072 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__20911_21073 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__20912_21074 = true;
var _STAR_print_fn_STAR__temp_val__20913_21075 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__20912_21074);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__20913_21075);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20874_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__20874_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__20911_21073);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__20910_21072);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__20906,G__20907,G__20908,G__20909) : format.call(null,G__20906,G__20907,G__20908,G__20909));
} else {
var G__20915 = "Execution error%s at %s(%s).\n%s\n";
var G__20916 = cause_type;
var G__20917 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20918 = loc;
var G__20919 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20915,G__20916,G__20917,G__20918,G__20919) : format.call(null,G__20915,G__20916,G__20917,G__20918,G__20919));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20879__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
