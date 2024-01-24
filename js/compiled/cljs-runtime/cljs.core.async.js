goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__17509 = arguments.length;
switch (G__17509) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17510 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17510 = (function (f,blockable,meta17511){
this.f = f;
this.blockable = blockable;
this.meta17511 = meta17511;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17510.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17512,meta17511__$1){
var self__ = this;
var _17512__$1 = this;
return (new cljs.core.async.t_cljs$core$async17510(self__.f,self__.blockable,meta17511__$1));
}));

(cljs.core.async.t_cljs$core$async17510.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17512){
var self__ = this;
var _17512__$1 = this;
return self__.meta17511;
}));

(cljs.core.async.t_cljs$core$async17510.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17510.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17510.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async17510.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async17510.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta17511","meta17511",135459297,null)], null);
}));

(cljs.core.async.t_cljs$core$async17510.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17510.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17510");

(cljs.core.async.t_cljs$core$async17510.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17510");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17510.
 */
cljs.core.async.__GT_t_cljs$core$async17510 = (function cljs$core$async$__GT_t_cljs$core$async17510(f__$1,blockable__$1,meta17511){
return (new cljs.core.async.t_cljs$core$async17510(f__$1,blockable__$1,meta17511));
});

}

return (new cljs.core.async.t_cljs$core$async17510(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__17538 = arguments.length;
switch (G__17538) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__17544 = arguments.length;
switch (G__17544) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__17550 = arguments.length;
switch (G__17550) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_19764 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_19764) : fn1.call(null,val_19764));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_19764) : fn1.call(null,val_19764));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__17552 = arguments.length;
switch (G__17552) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___19773 = n;
var x_19774 = (0);
while(true){
if((x_19774 < n__5636__auto___19773)){
(a[x_19774] = x_19774);

var G__19775 = (x_19774 + (1));
x_19774 = G__19775;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17573 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17573 = (function (flag,meta17574){
this.flag = flag;
this.meta17574 = meta17574;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17573.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17575,meta17574__$1){
var self__ = this;
var _17575__$1 = this;
return (new cljs.core.async.t_cljs$core$async17573(self__.flag,meta17574__$1));
}));

(cljs.core.async.t_cljs$core$async17573.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17575){
var self__ = this;
var _17575__$1 = this;
return self__.meta17574;
}));

(cljs.core.async.t_cljs$core$async17573.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17573.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async17573.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17573.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async17573.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta17574","meta17574",-1935430723,null)], null);
}));

(cljs.core.async.t_cljs$core$async17573.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17573.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17573");

(cljs.core.async.t_cljs$core$async17573.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17573");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17573.
 */
cljs.core.async.__GT_t_cljs$core$async17573 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async17573(flag__$1,meta17574){
return (new cljs.core.async.t_cljs$core$async17573(flag__$1,meta17574));
});

}

return (new cljs.core.async.t_cljs$core$async17573(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17587 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17587 = (function (flag,cb,meta17588){
this.flag = flag;
this.cb = cb;
this.meta17588 = meta17588;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17587.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17589,meta17588__$1){
var self__ = this;
var _17589__$1 = this;
return (new cljs.core.async.t_cljs$core$async17587(self__.flag,self__.cb,meta17588__$1));
}));

(cljs.core.async.t_cljs$core$async17587.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17589){
var self__ = this;
var _17589__$1 = this;
return self__.meta17588;
}));

(cljs.core.async.t_cljs$core$async17587.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17587.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async17587.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17587.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async17587.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta17588","meta17588",-2029923209,null)], null);
}));

(cljs.core.async.t_cljs$core$async17587.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17587.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17587");

(cljs.core.async.t_cljs$core$async17587.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17587");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17587.
 */
cljs.core.async.__GT_t_cljs$core$async17587 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async17587(flag__$1,cb__$1,meta17588){
return (new cljs.core.async.t_cljs$core$async17587(flag__$1,cb__$1,meta17588));
});

}

return (new cljs.core.async.t_cljs$core$async17587(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17595_SHARP_){
var G__17601 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17595_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__17601) : fret.call(null,G__17601));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17596_SHARP_){
var G__17602 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17596_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__17602) : fret.call(null,G__17602));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__19792 = (i + (1));
i = G__19792;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___19796 = arguments.length;
var i__5770__auto___19797 = (0);
while(true){
if((i__5770__auto___19797 < len__5769__auto___19796)){
args__5775__auto__.push((arguments[i__5770__auto___19797]));

var G__19798 = (i__5770__auto___19797 + (1));
i__5770__auto___19797 = G__19798;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__17609){
var map__17610 = p__17609;
var map__17610__$1 = cljs.core.__destructure_map(map__17610);
var opts = map__17610__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq17603){
var G__17604 = cljs.core.first(seq17603);
var seq17603__$1 = cljs.core.next(seq17603);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17604,seq17603__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__17612 = arguments.length;
switch (G__17612) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__17427__auto___19810 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17428__auto__ = (function (){var switch__17279__auto__ = (function (state_17639){
var state_val_17640 = (state_17639[(1)]);
if((state_val_17640 === (7))){
var inst_17634 = (state_17639[(2)]);
var state_17639__$1 = state_17639;
var statearr_17658_19811 = state_17639__$1;
(statearr_17658_19811[(2)] = inst_17634);

(statearr_17658_19811[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17640 === (1))){
var state_17639__$1 = state_17639;
var statearr_17659_19812 = state_17639__$1;
(statearr_17659_19812[(2)] = null);

(statearr_17659_19812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17640 === (4))){
var inst_17617 = (state_17639[(7)]);
var inst_17617__$1 = (state_17639[(2)]);
var inst_17618 = (inst_17617__$1 == null);
var state_17639__$1 = (function (){var statearr_17660 = state_17639;
(statearr_17660[(7)] = inst_17617__$1);

return statearr_17660;
})();
if(cljs.core.truth_(inst_17618)){
var statearr_17661_19813 = state_17639__$1;
(statearr_17661_19813[(1)] = (5));

} else {
var statearr_17662_19814 = state_17639__$1;
(statearr_17662_19814[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17640 === (13))){
var state_17639__$1 = state_17639;
var statearr_17665_19815 = state_17639__$1;
(statearr_17665_19815[(2)] = null);

(statearr_17665_19815[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17640 === (6))){
var inst_17617 = (state_17639[(7)]);
var state_17639__$1 = state_17639;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17639__$1,(11),to,inst_17617);
} else {
if((state_val_17640 === (3))){
var inst_17636 = (state_17639[(2)]);
var state_17639__$1 = state_17639;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17639__$1,inst_17636);
} else {
if((state_val_17640 === (12))){
var state_17639__$1 = state_17639;
var statearr_17666_19819 = state_17639__$1;
(statearr_17666_19819[(2)] = null);

(statearr_17666_19819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17640 === (2))){
var state_17639__$1 = state_17639;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17639__$1,(4),from);
} else {
if((state_val_17640 === (11))){
var inst_17627 = (state_17639[(2)]);
var state_17639__$1 = state_17639;
if(cljs.core.truth_(inst_17627)){
var statearr_17667_19826 = state_17639__$1;
(statearr_17667_19826[(1)] = (12));

} else {
var statearr_17671_19827 = state_17639__$1;
(statearr_17671_19827[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17640 === (9))){
var state_17639__$1 = state_17639;
var statearr_17672_19831 = state_17639__$1;
(statearr_17672_19831[(2)] = null);

(statearr_17672_19831[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17640 === (5))){
var state_17639__$1 = state_17639;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17673_19832 = state_17639__$1;
(statearr_17673_19832[(1)] = (8));

} else {
var statearr_17674_19833 = state_17639__$1;
(statearr_17674_19833[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17640 === (14))){
var inst_17632 = (state_17639[(2)]);
var state_17639__$1 = state_17639;
var statearr_17675_19837 = state_17639__$1;
(statearr_17675_19837[(2)] = inst_17632);

(statearr_17675_19837[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17640 === (10))){
var inst_17624 = (state_17639[(2)]);
var state_17639__$1 = state_17639;
var statearr_17676_19838 = state_17639__$1;
(statearr_17676_19838[(2)] = inst_17624);

(statearr_17676_19838[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17640 === (8))){
var inst_17621 = cljs.core.async.close_BANG_(to);
var state_17639__$1 = state_17639;
var statearr_17677_19843 = state_17639__$1;
(statearr_17677_19843[(2)] = inst_17621);

(statearr_17677_19843[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17280__auto__ = null;
var cljs$core$async$state_machine__17280__auto____0 = (function (){
var statearr_17678 = [null,null,null,null,null,null,null,null];
(statearr_17678[(0)] = cljs$core$async$state_machine__17280__auto__);

(statearr_17678[(1)] = (1));

return statearr_17678;
});
var cljs$core$async$state_machine__17280__auto____1 = (function (state_17639){
while(true){
var ret_value__17281__auto__ = (function (){try{while(true){
var result__17282__auto__ = switch__17279__auto__(state_17639);
if(cljs.core.keyword_identical_QMARK_(result__17282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17282__auto__;
}
break;
}
}catch (e17680){var ex__17283__auto__ = e17680;
var statearr_17681_19844 = state_17639;
(statearr_17681_19844[(2)] = ex__17283__auto__);


if(cljs.core.seq((state_17639[(4)]))){
var statearr_17682_19845 = state_17639;
(statearr_17682_19845[(1)] = cljs.core.first((state_17639[(4)])));

} else {
throw ex__17283__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19846 = state_17639;
state_17639 = G__19846;
continue;
} else {
return ret_value__17281__auto__;
}
break;
}
});
cljs$core$async$state_machine__17280__auto__ = function(state_17639){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17280__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17280__auto____1.call(this,state_17639);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17280__auto____0;
cljs$core$async$state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17280__auto____1;
return cljs$core$async$state_machine__17280__auto__;
})()
})();
var state__17429__auto__ = (function (){var statearr_17684 = f__17428__auto__();
(statearr_17684[(6)] = c__17427__auto___19810);

return statearr_17684;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17429__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__17685){
var vec__17686 = p__17685;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17686,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17686,(1),null);
var job = vec__17686;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__17427__auto___19849 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17428__auto__ = (function (){var switch__17279__auto__ = (function (state_17693){
var state_val_17694 = (state_17693[(1)]);
if((state_val_17694 === (1))){
var state_17693__$1 = state_17693;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17693__$1,(2),res,v);
} else {
if((state_val_17694 === (2))){
var inst_17690 = (state_17693[(2)]);
var inst_17691 = cljs.core.async.close_BANG_(res);
var state_17693__$1 = (function (){var statearr_17695 = state_17693;
(statearr_17695[(7)] = inst_17690);

return statearr_17695;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17693__$1,inst_17691);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17280__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17280__auto____0 = (function (){
var statearr_17696 = [null,null,null,null,null,null,null,null];
(statearr_17696[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17280__auto__);

(statearr_17696[(1)] = (1));

return statearr_17696;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17280__auto____1 = (function (state_17693){
while(true){
var ret_value__17281__auto__ = (function (){try{while(true){
var result__17282__auto__ = switch__17279__auto__(state_17693);
if(cljs.core.keyword_identical_QMARK_(result__17282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17282__auto__;
}
break;
}
}catch (e17697){var ex__17283__auto__ = e17697;
var statearr_17698_19850 = state_17693;
(statearr_17698_19850[(2)] = ex__17283__auto__);


if(cljs.core.seq((state_17693[(4)]))){
var statearr_17699_19851 = state_17693;
(statearr_17699_19851[(1)] = cljs.core.first((state_17693[(4)])));

} else {
throw ex__17283__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19852 = state_17693;
state_17693 = G__19852;
continue;
} else {
return ret_value__17281__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17280__auto__ = function(state_17693){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17280__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17280__auto____1.call(this,state_17693);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17280__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17280__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17280__auto__;
})()
})();
var state__17429__auto__ = (function (){var statearr_17701 = f__17428__auto__();
(statearr_17701[(6)] = c__17427__auto___19849);

return statearr_17701;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17429__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__17702){
var vec__17703 = p__17702;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17703,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17703,(1),null);
var job = vec__17703;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___19853 = n;
var __19854 = (0);
while(true){
if((__19854 < n__5636__auto___19853)){
var G__17706_19855 = type;
var G__17706_19856__$1 = (((G__17706_19855 instanceof cljs.core.Keyword))?G__17706_19855.fqn:null);
switch (G__17706_19856__$1) {
case "compute":
var c__17427__auto___19858 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__19854,c__17427__auto___19858,G__17706_19855,G__17706_19856__$1,n__5636__auto___19853,jobs,results,process__$1,async){
return (function (){
var f__17428__auto__ = (function (){var switch__17279__auto__ = ((function (__19854,c__17427__auto___19858,G__17706_19855,G__17706_19856__$1,n__5636__auto___19853,jobs,results,process__$1,async){
return (function (state_17719){
var state_val_17720 = (state_17719[(1)]);
if((state_val_17720 === (1))){
var state_17719__$1 = state_17719;
var statearr_17721_19859 = state_17719__$1;
(statearr_17721_19859[(2)] = null);

(statearr_17721_19859[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17720 === (2))){
var state_17719__$1 = state_17719;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17719__$1,(4),jobs);
} else {
if((state_val_17720 === (3))){
var inst_17717 = (state_17719[(2)]);
var state_17719__$1 = state_17719;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17719__$1,inst_17717);
} else {
if((state_val_17720 === (4))){
var inst_17709 = (state_17719[(2)]);
var inst_17710 = process__$1(inst_17709);
var state_17719__$1 = state_17719;
if(cljs.core.truth_(inst_17710)){
var statearr_17722_19861 = state_17719__$1;
(statearr_17722_19861[(1)] = (5));

} else {
var statearr_17723_19862 = state_17719__$1;
(statearr_17723_19862[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17720 === (5))){
var state_17719__$1 = state_17719;
var statearr_17724_19863 = state_17719__$1;
(statearr_17724_19863[(2)] = null);

(statearr_17724_19863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17720 === (6))){
var state_17719__$1 = state_17719;
var statearr_17725_19864 = state_17719__$1;
(statearr_17725_19864[(2)] = null);

(statearr_17725_19864[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17720 === (7))){
var inst_17715 = (state_17719[(2)]);
var state_17719__$1 = state_17719;
var statearr_17726_19865 = state_17719__$1;
(statearr_17726_19865[(2)] = inst_17715);

(statearr_17726_19865[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__19854,c__17427__auto___19858,G__17706_19855,G__17706_19856__$1,n__5636__auto___19853,jobs,results,process__$1,async))
;
return ((function (__19854,switch__17279__auto__,c__17427__auto___19858,G__17706_19855,G__17706_19856__$1,n__5636__auto___19853,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17280__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17280__auto____0 = (function (){
var statearr_17727 = [null,null,null,null,null,null,null];
(statearr_17727[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17280__auto__);

(statearr_17727[(1)] = (1));

return statearr_17727;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17280__auto____1 = (function (state_17719){
while(true){
var ret_value__17281__auto__ = (function (){try{while(true){
var result__17282__auto__ = switch__17279__auto__(state_17719);
if(cljs.core.keyword_identical_QMARK_(result__17282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17282__auto__;
}
break;
}
}catch (e17728){var ex__17283__auto__ = e17728;
var statearr_17729_19867 = state_17719;
(statearr_17729_19867[(2)] = ex__17283__auto__);


if(cljs.core.seq((state_17719[(4)]))){
var statearr_17730_19868 = state_17719;
(statearr_17730_19868[(1)] = cljs.core.first((state_17719[(4)])));

} else {
throw ex__17283__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19870 = state_17719;
state_17719 = G__19870;
continue;
} else {
return ret_value__17281__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17280__auto__ = function(state_17719){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17280__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17280__auto____1.call(this,state_17719);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17280__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17280__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17280__auto__;
})()
;})(__19854,switch__17279__auto__,c__17427__auto___19858,G__17706_19855,G__17706_19856__$1,n__5636__auto___19853,jobs,results,process__$1,async))
})();
var state__17429__auto__ = (function (){var statearr_17731 = f__17428__auto__();
(statearr_17731[(6)] = c__17427__auto___19858);

return statearr_17731;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17429__auto__);
});})(__19854,c__17427__auto___19858,G__17706_19855,G__17706_19856__$1,n__5636__auto___19853,jobs,results,process__$1,async))
);


break;
case "async":
var c__17427__auto___19871 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__19854,c__17427__auto___19871,G__17706_19855,G__17706_19856__$1,n__5636__auto___19853,jobs,results,process__$1,async){
return (function (){
var f__17428__auto__ = (function (){var switch__17279__auto__ = ((function (__19854,c__17427__auto___19871,G__17706_19855,G__17706_19856__$1,n__5636__auto___19853,jobs,results,process__$1,async){
return (function (state_17744){
var state_val_17745 = (state_17744[(1)]);
if((state_val_17745 === (1))){
var state_17744__$1 = state_17744;
var statearr_17746_19872 = state_17744__$1;
(statearr_17746_19872[(2)] = null);

(statearr_17746_19872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17745 === (2))){
var state_17744__$1 = state_17744;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17744__$1,(4),jobs);
} else {
if((state_val_17745 === (3))){
var inst_17742 = (state_17744[(2)]);
var state_17744__$1 = state_17744;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17744__$1,inst_17742);
} else {
if((state_val_17745 === (4))){
var inst_17734 = (state_17744[(2)]);
var inst_17735 = async(inst_17734);
var state_17744__$1 = state_17744;
if(cljs.core.truth_(inst_17735)){
var statearr_17747_19873 = state_17744__$1;
(statearr_17747_19873[(1)] = (5));

} else {
var statearr_17748_19874 = state_17744__$1;
(statearr_17748_19874[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17745 === (5))){
var state_17744__$1 = state_17744;
var statearr_17749_19875 = state_17744__$1;
(statearr_17749_19875[(2)] = null);

(statearr_17749_19875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17745 === (6))){
var state_17744__$1 = state_17744;
var statearr_17750_19877 = state_17744__$1;
(statearr_17750_19877[(2)] = null);

(statearr_17750_19877[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17745 === (7))){
var inst_17740 = (state_17744[(2)]);
var state_17744__$1 = state_17744;
var statearr_17751_19879 = state_17744__$1;
(statearr_17751_19879[(2)] = inst_17740);

(statearr_17751_19879[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__19854,c__17427__auto___19871,G__17706_19855,G__17706_19856__$1,n__5636__auto___19853,jobs,results,process__$1,async))
;
return ((function (__19854,switch__17279__auto__,c__17427__auto___19871,G__17706_19855,G__17706_19856__$1,n__5636__auto___19853,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17280__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17280__auto____0 = (function (){
var statearr_17752 = [null,null,null,null,null,null,null];
(statearr_17752[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17280__auto__);

(statearr_17752[(1)] = (1));

return statearr_17752;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17280__auto____1 = (function (state_17744){
while(true){
var ret_value__17281__auto__ = (function (){try{while(true){
var result__17282__auto__ = switch__17279__auto__(state_17744);
if(cljs.core.keyword_identical_QMARK_(result__17282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17282__auto__;
}
break;
}
}catch (e17754){var ex__17283__auto__ = e17754;
var statearr_17755_19880 = state_17744;
(statearr_17755_19880[(2)] = ex__17283__auto__);


if(cljs.core.seq((state_17744[(4)]))){
var statearr_17756_19881 = state_17744;
(statearr_17756_19881[(1)] = cljs.core.first((state_17744[(4)])));

} else {
throw ex__17283__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19882 = state_17744;
state_17744 = G__19882;
continue;
} else {
return ret_value__17281__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17280__auto__ = function(state_17744){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17280__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17280__auto____1.call(this,state_17744);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17280__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17280__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17280__auto__;
})()
;})(__19854,switch__17279__auto__,c__17427__auto___19871,G__17706_19855,G__17706_19856__$1,n__5636__auto___19853,jobs,results,process__$1,async))
})();
var state__17429__auto__ = (function (){var statearr_17757 = f__17428__auto__();
(statearr_17757[(6)] = c__17427__auto___19871);

return statearr_17757;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17429__auto__);
});})(__19854,c__17427__auto___19871,G__17706_19855,G__17706_19856__$1,n__5636__auto___19853,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17706_19856__$1)].join('')));

}

var G__19883 = (__19854 + (1));
__19854 = G__19883;
continue;
} else {
}
break;
}

var c__17427__auto___19884 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17428__auto__ = (function (){var switch__17279__auto__ = (function (state_17780){
var state_val_17781 = (state_17780[(1)]);
if((state_val_17781 === (7))){
var inst_17776 = (state_17780[(2)]);
var state_17780__$1 = state_17780;
var statearr_17782_19886 = state_17780__$1;
(statearr_17782_19886[(2)] = inst_17776);

(statearr_17782_19886[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17781 === (1))){
var state_17780__$1 = state_17780;
var statearr_17783_19887 = state_17780__$1;
(statearr_17783_19887[(2)] = null);

(statearr_17783_19887[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17781 === (4))){
var inst_17760 = (state_17780[(7)]);
var inst_17760__$1 = (state_17780[(2)]);
var inst_17761 = (inst_17760__$1 == null);
var state_17780__$1 = (function (){var statearr_17784 = state_17780;
(statearr_17784[(7)] = inst_17760__$1);

return statearr_17784;
})();
if(cljs.core.truth_(inst_17761)){
var statearr_17785_19889 = state_17780__$1;
(statearr_17785_19889[(1)] = (5));

} else {
var statearr_17786_19890 = state_17780__$1;
(statearr_17786_19890[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17781 === (6))){
var inst_17765 = (state_17780[(8)]);
var inst_17760 = (state_17780[(7)]);
var inst_17765__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_17766 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17767 = [inst_17760,inst_17765__$1];
var inst_17769 = (new cljs.core.PersistentVector(null,2,(5),inst_17766,inst_17767,null));
var state_17780__$1 = (function (){var statearr_17787 = state_17780;
(statearr_17787[(8)] = inst_17765__$1);

return statearr_17787;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17780__$1,(8),jobs,inst_17769);
} else {
if((state_val_17781 === (3))){
var inst_17778 = (state_17780[(2)]);
var state_17780__$1 = state_17780;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17780__$1,inst_17778);
} else {
if((state_val_17781 === (2))){
var state_17780__$1 = state_17780;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17780__$1,(4),from);
} else {
if((state_val_17781 === (9))){
var inst_17773 = (state_17780[(2)]);
var state_17780__$1 = (function (){var statearr_17790 = state_17780;
(statearr_17790[(9)] = inst_17773);

return statearr_17790;
})();
var statearr_17792_19893 = state_17780__$1;
(statearr_17792_19893[(2)] = null);

(statearr_17792_19893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17781 === (5))){
var inst_17763 = cljs.core.async.close_BANG_(jobs);
var state_17780__$1 = state_17780;
var statearr_17793_19894 = state_17780__$1;
(statearr_17793_19894[(2)] = inst_17763);

(statearr_17793_19894[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17781 === (8))){
var inst_17765 = (state_17780[(8)]);
var inst_17771 = (state_17780[(2)]);
var state_17780__$1 = (function (){var statearr_17794 = state_17780;
(statearr_17794[(10)] = inst_17771);

return statearr_17794;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17780__$1,(9),results,inst_17765);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17280__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17280__auto____0 = (function (){
var statearr_17797 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17797[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17280__auto__);

(statearr_17797[(1)] = (1));

return statearr_17797;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17280__auto____1 = (function (state_17780){
while(true){
var ret_value__17281__auto__ = (function (){try{while(true){
var result__17282__auto__ = switch__17279__auto__(state_17780);
if(cljs.core.keyword_identical_QMARK_(result__17282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17282__auto__;
}
break;
}
}catch (e17798){var ex__17283__auto__ = e17798;
var statearr_17799_19897 = state_17780;
(statearr_17799_19897[(2)] = ex__17283__auto__);


if(cljs.core.seq((state_17780[(4)]))){
var statearr_17800_19898 = state_17780;
(statearr_17800_19898[(1)] = cljs.core.first((state_17780[(4)])));

} else {
throw ex__17283__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19900 = state_17780;
state_17780 = G__19900;
continue;
} else {
return ret_value__17281__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17280__auto__ = function(state_17780){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17280__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17280__auto____1.call(this,state_17780);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17280__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17280__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17280__auto__;
})()
})();
var state__17429__auto__ = (function (){var statearr_17802 = f__17428__auto__();
(statearr_17802[(6)] = c__17427__auto___19884);

return statearr_17802;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17429__auto__);
}));


var c__17427__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17428__auto__ = (function (){var switch__17279__auto__ = (function (state_17927){
var state_val_17928 = (state_17927[(1)]);
if((state_val_17928 === (7))){
var inst_17906 = (state_17927[(2)]);
var state_17927__$1 = state_17927;
var statearr_17958_19911 = state_17927__$1;
(statearr_17958_19911[(2)] = inst_17906);

(statearr_17958_19911[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17928 === (20))){
var state_17927__$1 = state_17927;
var statearr_17960_19912 = state_17927__$1;
(statearr_17960_19912[(2)] = null);

(statearr_17960_19912[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17928 === (1))){
var state_17927__$1 = state_17927;
var statearr_17961_19913 = state_17927__$1;
(statearr_17961_19913[(2)] = null);

(statearr_17961_19913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17928 === (4))){
var inst_17843 = (state_17927[(7)]);
var inst_17843__$1 = (state_17927[(2)]);
var inst_17846 = (inst_17843__$1 == null);
var state_17927__$1 = (function (){var statearr_17962 = state_17927;
(statearr_17962[(7)] = inst_17843__$1);

return statearr_17962;
})();
if(cljs.core.truth_(inst_17846)){
var statearr_17963_19914 = state_17927__$1;
(statearr_17963_19914[(1)] = (5));

} else {
var statearr_17964_19915 = state_17927__$1;
(statearr_17964_19915[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17928 === (15))){
var inst_17863 = (state_17927[(8)]);
var state_17927__$1 = state_17927;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17927__$1,(18),to,inst_17863);
} else {
if((state_val_17928 === (21))){
var inst_17897 = (state_17927[(2)]);
var state_17927__$1 = state_17927;
var statearr_17973_19916 = state_17927__$1;
(statearr_17973_19916[(2)] = inst_17897);

(statearr_17973_19916[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17928 === (13))){
var inst_17899 = (state_17927[(2)]);
var state_17927__$1 = (function (){var statearr_17978 = state_17927;
(statearr_17978[(9)] = inst_17899);

return statearr_17978;
})();
var statearr_17979_19917 = state_17927__$1;
(statearr_17979_19917[(2)] = null);

(statearr_17979_19917[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17928 === (6))){
var inst_17843 = (state_17927[(7)]);
var state_17927__$1 = state_17927;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17927__$1,(11),inst_17843);
} else {
if((state_val_17928 === (17))){
var inst_17891 = (state_17927[(2)]);
var state_17927__$1 = state_17927;
if(cljs.core.truth_(inst_17891)){
var statearr_17981_19918 = state_17927__$1;
(statearr_17981_19918[(1)] = (19));

} else {
var statearr_17982_19921 = state_17927__$1;
(statearr_17982_19921[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17928 === (3))){
var inst_17908 = (state_17927[(2)]);
var state_17927__$1 = state_17927;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17927__$1,inst_17908);
} else {
if((state_val_17928 === (12))){
var inst_17855 = (state_17927[(10)]);
var state_17927__$1 = state_17927;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17927__$1,(14),inst_17855);
} else {
if((state_val_17928 === (2))){
var state_17927__$1 = state_17927;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17927__$1,(4),results);
} else {
if((state_val_17928 === (19))){
var state_17927__$1 = state_17927;
var statearr_17983_19923 = state_17927__$1;
(statearr_17983_19923[(2)] = null);

(statearr_17983_19923[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17928 === (11))){
var inst_17855 = (state_17927[(2)]);
var state_17927__$1 = (function (){var statearr_17984 = state_17927;
(statearr_17984[(10)] = inst_17855);

return statearr_17984;
})();
var statearr_17985_19925 = state_17927__$1;
(statearr_17985_19925[(2)] = null);

(statearr_17985_19925[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17928 === (9))){
var state_17927__$1 = state_17927;
var statearr_17986_19926 = state_17927__$1;
(statearr_17986_19926[(2)] = null);

(statearr_17986_19926[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17928 === (5))){
var state_17927__$1 = state_17927;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17987_19927 = state_17927__$1;
(statearr_17987_19927[(1)] = (8));

} else {
var statearr_17988_19928 = state_17927__$1;
(statearr_17988_19928[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17928 === (14))){
var inst_17881 = (state_17927[(11)]);
var inst_17863 = (state_17927[(8)]);
var inst_17863__$1 = (state_17927[(2)]);
var inst_17880 = (inst_17863__$1 == null);
var inst_17881__$1 = cljs.core.not(inst_17880);
var state_17927__$1 = (function (){var statearr_17990 = state_17927;
(statearr_17990[(11)] = inst_17881__$1);

(statearr_17990[(8)] = inst_17863__$1);

return statearr_17990;
})();
if(inst_17881__$1){
var statearr_17992_19929 = state_17927__$1;
(statearr_17992_19929[(1)] = (15));

} else {
var statearr_17993_19930 = state_17927__$1;
(statearr_17993_19930[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17928 === (16))){
var inst_17881 = (state_17927[(11)]);
var state_17927__$1 = state_17927;
var statearr_17994_19931 = state_17927__$1;
(statearr_17994_19931[(2)] = inst_17881);

(statearr_17994_19931[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17928 === (10))){
var inst_17852 = (state_17927[(2)]);
var state_17927__$1 = state_17927;
var statearr_17995_19932 = state_17927__$1;
(statearr_17995_19932[(2)] = inst_17852);

(statearr_17995_19932[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17928 === (18))){
var inst_17888 = (state_17927[(2)]);
var state_17927__$1 = state_17927;
var statearr_18002_19933 = state_17927__$1;
(statearr_18002_19933[(2)] = inst_17888);

(statearr_18002_19933[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17928 === (8))){
var inst_17849 = cljs.core.async.close_BANG_(to);
var state_17927__$1 = state_17927;
var statearr_18003_19934 = state_17927__$1;
(statearr_18003_19934[(2)] = inst_17849);

(statearr_18003_19934[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17280__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17280__auto____0 = (function (){
var statearr_18008 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18008[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17280__auto__);

(statearr_18008[(1)] = (1));

return statearr_18008;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17280__auto____1 = (function (state_17927){
while(true){
var ret_value__17281__auto__ = (function (){try{while(true){
var result__17282__auto__ = switch__17279__auto__(state_17927);
if(cljs.core.keyword_identical_QMARK_(result__17282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17282__auto__;
}
break;
}
}catch (e18009){var ex__17283__auto__ = e18009;
var statearr_18014_19937 = state_17927;
(statearr_18014_19937[(2)] = ex__17283__auto__);


if(cljs.core.seq((state_17927[(4)]))){
var statearr_18015_19938 = state_17927;
(statearr_18015_19938[(1)] = cljs.core.first((state_17927[(4)])));

} else {
throw ex__17283__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19939 = state_17927;
state_17927 = G__19939;
continue;
} else {
return ret_value__17281__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17280__auto__ = function(state_17927){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17280__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17280__auto____1.call(this,state_17927);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17280__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17280__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17280__auto__;
})()
})();
var state__17429__auto__ = (function (){var statearr_18023 = f__17428__auto__();
(statearr_18023[(6)] = c__17427__auto__);

return statearr_18023;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17429__auto__);
}));

return c__17427__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__18026 = arguments.length;
switch (G__18026) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__18030 = arguments.length;
switch (G__18030) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__18034 = arguments.length;
switch (G__18034) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__17427__auto___19944 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17428__auto__ = (function (){var switch__17279__auto__ = (function (state_18082){
var state_val_18083 = (state_18082[(1)]);
if((state_val_18083 === (7))){
var inst_18078 = (state_18082[(2)]);
var state_18082__$1 = state_18082;
var statearr_18084_19945 = state_18082__$1;
(statearr_18084_19945[(2)] = inst_18078);

(statearr_18084_19945[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18083 === (1))){
var state_18082__$1 = state_18082;
var statearr_18085_19946 = state_18082__$1;
(statearr_18085_19946[(2)] = null);

(statearr_18085_19946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18083 === (4))){
var inst_18059 = (state_18082[(7)]);
var inst_18059__$1 = (state_18082[(2)]);
var inst_18060 = (inst_18059__$1 == null);
var state_18082__$1 = (function (){var statearr_18086 = state_18082;
(statearr_18086[(7)] = inst_18059__$1);

return statearr_18086;
})();
if(cljs.core.truth_(inst_18060)){
var statearr_18087_19947 = state_18082__$1;
(statearr_18087_19947[(1)] = (5));

} else {
var statearr_18088_19948 = state_18082__$1;
(statearr_18088_19948[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18083 === (13))){
var state_18082__$1 = state_18082;
var statearr_18089_19950 = state_18082__$1;
(statearr_18089_19950[(2)] = null);

(statearr_18089_19950[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18083 === (6))){
var inst_18059 = (state_18082[(7)]);
var inst_18065 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_18059) : p.call(null,inst_18059));
var state_18082__$1 = state_18082;
if(cljs.core.truth_(inst_18065)){
var statearr_18090_19952 = state_18082__$1;
(statearr_18090_19952[(1)] = (9));

} else {
var statearr_18091_19953 = state_18082__$1;
(statearr_18091_19953[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18083 === (3))){
var inst_18080 = (state_18082[(2)]);
var state_18082__$1 = state_18082;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18082__$1,inst_18080);
} else {
if((state_val_18083 === (12))){
var state_18082__$1 = state_18082;
var statearr_18092_19958 = state_18082__$1;
(statearr_18092_19958[(2)] = null);

(statearr_18092_19958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18083 === (2))){
var state_18082__$1 = state_18082;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18082__$1,(4),ch);
} else {
if((state_val_18083 === (11))){
var inst_18059 = (state_18082[(7)]);
var inst_18069 = (state_18082[(2)]);
var state_18082__$1 = state_18082;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18082__$1,(8),inst_18069,inst_18059);
} else {
if((state_val_18083 === (9))){
var state_18082__$1 = state_18082;
var statearr_18093_19959 = state_18082__$1;
(statearr_18093_19959[(2)] = tc);

(statearr_18093_19959[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18083 === (5))){
var inst_18062 = cljs.core.async.close_BANG_(tc);
var inst_18063 = cljs.core.async.close_BANG_(fc);
var state_18082__$1 = (function (){var statearr_18094 = state_18082;
(statearr_18094[(8)] = inst_18062);

return statearr_18094;
})();
var statearr_18095_19961 = state_18082__$1;
(statearr_18095_19961[(2)] = inst_18063);

(statearr_18095_19961[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18083 === (14))){
var inst_18076 = (state_18082[(2)]);
var state_18082__$1 = state_18082;
var statearr_18096_19962 = state_18082__$1;
(statearr_18096_19962[(2)] = inst_18076);

(statearr_18096_19962[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18083 === (10))){
var state_18082__$1 = state_18082;
var statearr_18097_19963 = state_18082__$1;
(statearr_18097_19963[(2)] = fc);

(statearr_18097_19963[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18083 === (8))){
var inst_18071 = (state_18082[(2)]);
var state_18082__$1 = state_18082;
if(cljs.core.truth_(inst_18071)){
var statearr_18098_19964 = state_18082__$1;
(statearr_18098_19964[(1)] = (12));

} else {
var statearr_18099_19965 = state_18082__$1;
(statearr_18099_19965[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17280__auto__ = null;
var cljs$core$async$state_machine__17280__auto____0 = (function (){
var statearr_18100 = [null,null,null,null,null,null,null,null,null];
(statearr_18100[(0)] = cljs$core$async$state_machine__17280__auto__);

(statearr_18100[(1)] = (1));

return statearr_18100;
});
var cljs$core$async$state_machine__17280__auto____1 = (function (state_18082){
while(true){
var ret_value__17281__auto__ = (function (){try{while(true){
var result__17282__auto__ = switch__17279__auto__(state_18082);
if(cljs.core.keyword_identical_QMARK_(result__17282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17282__auto__;
}
break;
}
}catch (e18109){var ex__17283__auto__ = e18109;
var statearr_18110_19966 = state_18082;
(statearr_18110_19966[(2)] = ex__17283__auto__);


if(cljs.core.seq((state_18082[(4)]))){
var statearr_18115_19967 = state_18082;
(statearr_18115_19967[(1)] = cljs.core.first((state_18082[(4)])));

} else {
throw ex__17283__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19968 = state_18082;
state_18082 = G__19968;
continue;
} else {
return ret_value__17281__auto__;
}
break;
}
});
cljs$core$async$state_machine__17280__auto__ = function(state_18082){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17280__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17280__auto____1.call(this,state_18082);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17280__auto____0;
cljs$core$async$state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17280__auto____1;
return cljs$core$async$state_machine__17280__auto__;
})()
})();
var state__17429__auto__ = (function (){var statearr_18124 = f__17428__auto__();
(statearr_18124[(6)] = c__17427__auto___19944);

return statearr_18124;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17429__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__17427__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17428__auto__ = (function (){var switch__17279__auto__ = (function (state_18152){
var state_val_18153 = (state_18152[(1)]);
if((state_val_18153 === (7))){
var inst_18148 = (state_18152[(2)]);
var state_18152__$1 = state_18152;
var statearr_18155_19969 = state_18152__$1;
(statearr_18155_19969[(2)] = inst_18148);

(statearr_18155_19969[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18153 === (1))){
var inst_18130 = init;
var inst_18131 = inst_18130;
var state_18152__$1 = (function (){var statearr_18156 = state_18152;
(statearr_18156[(7)] = inst_18131);

return statearr_18156;
})();
var statearr_18157_19970 = state_18152__$1;
(statearr_18157_19970[(2)] = null);

(statearr_18157_19970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18153 === (4))){
var inst_18135 = (state_18152[(8)]);
var inst_18135__$1 = (state_18152[(2)]);
var inst_18136 = (inst_18135__$1 == null);
var state_18152__$1 = (function (){var statearr_18159 = state_18152;
(statearr_18159[(8)] = inst_18135__$1);

return statearr_18159;
})();
if(cljs.core.truth_(inst_18136)){
var statearr_18160_19980 = state_18152__$1;
(statearr_18160_19980[(1)] = (5));

} else {
var statearr_18161_19981 = state_18152__$1;
(statearr_18161_19981[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18153 === (6))){
var inst_18131 = (state_18152[(7)]);
var inst_18139 = (state_18152[(9)]);
var inst_18135 = (state_18152[(8)]);
var inst_18139__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_18131,inst_18135) : f.call(null,inst_18131,inst_18135));
var inst_18140 = cljs.core.reduced_QMARK_(inst_18139__$1);
var state_18152__$1 = (function (){var statearr_18163 = state_18152;
(statearr_18163[(9)] = inst_18139__$1);

return statearr_18163;
})();
if(inst_18140){
var statearr_18164_19983 = state_18152__$1;
(statearr_18164_19983[(1)] = (8));

} else {
var statearr_18165_19984 = state_18152__$1;
(statearr_18165_19984[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18153 === (3))){
var inst_18150 = (state_18152[(2)]);
var state_18152__$1 = state_18152;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18152__$1,inst_18150);
} else {
if((state_val_18153 === (2))){
var state_18152__$1 = state_18152;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18152__$1,(4),ch);
} else {
if((state_val_18153 === (9))){
var inst_18139 = (state_18152[(9)]);
var inst_18131 = inst_18139;
var state_18152__$1 = (function (){var statearr_18166 = state_18152;
(statearr_18166[(7)] = inst_18131);

return statearr_18166;
})();
var statearr_18167_19986 = state_18152__$1;
(statearr_18167_19986[(2)] = null);

(statearr_18167_19986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18153 === (5))){
var inst_18131 = (state_18152[(7)]);
var state_18152__$1 = state_18152;
var statearr_18168_19988 = state_18152__$1;
(statearr_18168_19988[(2)] = inst_18131);

(statearr_18168_19988[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18153 === (10))){
var inst_18146 = (state_18152[(2)]);
var state_18152__$1 = state_18152;
var statearr_18169_19989 = state_18152__$1;
(statearr_18169_19989[(2)] = inst_18146);

(statearr_18169_19989[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18153 === (8))){
var inst_18139 = (state_18152[(9)]);
var inst_18142 = cljs.core.deref(inst_18139);
var state_18152__$1 = state_18152;
var statearr_18170_19990 = state_18152__$1;
(statearr_18170_19990[(2)] = inst_18142);

(statearr_18170_19990[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__17280__auto__ = null;
var cljs$core$async$reduce_$_state_machine__17280__auto____0 = (function (){
var statearr_18171 = [null,null,null,null,null,null,null,null,null,null];
(statearr_18171[(0)] = cljs$core$async$reduce_$_state_machine__17280__auto__);

(statearr_18171[(1)] = (1));

return statearr_18171;
});
var cljs$core$async$reduce_$_state_machine__17280__auto____1 = (function (state_18152){
while(true){
var ret_value__17281__auto__ = (function (){try{while(true){
var result__17282__auto__ = switch__17279__auto__(state_18152);
if(cljs.core.keyword_identical_QMARK_(result__17282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17282__auto__;
}
break;
}
}catch (e18172){var ex__17283__auto__ = e18172;
var statearr_18173_19991 = state_18152;
(statearr_18173_19991[(2)] = ex__17283__auto__);


if(cljs.core.seq((state_18152[(4)]))){
var statearr_18174_19992 = state_18152;
(statearr_18174_19992[(1)] = cljs.core.first((state_18152[(4)])));

} else {
throw ex__17283__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19993 = state_18152;
state_18152 = G__19993;
continue;
} else {
return ret_value__17281__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__17280__auto__ = function(state_18152){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__17280__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__17280__auto____1.call(this,state_18152);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__17280__auto____0;
cljs$core$async$reduce_$_state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__17280__auto____1;
return cljs$core$async$reduce_$_state_machine__17280__auto__;
})()
})();
var state__17429__auto__ = (function (){var statearr_18175 = f__17428__auto__();
(statearr_18175[(6)] = c__17427__auto__);

return statearr_18175;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17429__auto__);
}));

return c__17427__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__17427__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17428__auto__ = (function (){var switch__17279__auto__ = (function (state_18181){
var state_val_18182 = (state_18181[(1)]);
if((state_val_18182 === (1))){
var inst_18176 = cljs.core.async.reduce(f__$1,init,ch);
var state_18181__$1 = state_18181;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18181__$1,(2),inst_18176);
} else {
if((state_val_18182 === (2))){
var inst_18178 = (state_18181[(2)]);
var inst_18179 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_18178) : f__$1.call(null,inst_18178));
var state_18181__$1 = state_18181;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18181__$1,inst_18179);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__17280__auto__ = null;
var cljs$core$async$transduce_$_state_machine__17280__auto____0 = (function (){
var statearr_18184 = [null,null,null,null,null,null,null];
(statearr_18184[(0)] = cljs$core$async$transduce_$_state_machine__17280__auto__);

(statearr_18184[(1)] = (1));

return statearr_18184;
});
var cljs$core$async$transduce_$_state_machine__17280__auto____1 = (function (state_18181){
while(true){
var ret_value__17281__auto__ = (function (){try{while(true){
var result__17282__auto__ = switch__17279__auto__(state_18181);
if(cljs.core.keyword_identical_QMARK_(result__17282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17282__auto__;
}
break;
}
}catch (e18185){var ex__17283__auto__ = e18185;
var statearr_18186_20000 = state_18181;
(statearr_18186_20000[(2)] = ex__17283__auto__);


if(cljs.core.seq((state_18181[(4)]))){
var statearr_18187_20002 = state_18181;
(statearr_18187_20002[(1)] = cljs.core.first((state_18181[(4)])));

} else {
throw ex__17283__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20003 = state_18181;
state_18181 = G__20003;
continue;
} else {
return ret_value__17281__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__17280__auto__ = function(state_18181){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__17280__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__17280__auto____1.call(this,state_18181);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__17280__auto____0;
cljs$core$async$transduce_$_state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__17280__auto____1;
return cljs$core$async$transduce_$_state_machine__17280__auto__;
})()
})();
var state__17429__auto__ = (function (){var statearr_18188 = f__17428__auto__();
(statearr_18188[(6)] = c__17427__auto__);

return statearr_18188;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17429__auto__);
}));

return c__17427__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__18190 = arguments.length;
switch (G__18190) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__17427__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17428__auto__ = (function (){var switch__17279__auto__ = (function (state_18216){
var state_val_18217 = (state_18216[(1)]);
if((state_val_18217 === (7))){
var inst_18198 = (state_18216[(2)]);
var state_18216__$1 = state_18216;
var statearr_18219_20011 = state_18216__$1;
(statearr_18219_20011[(2)] = inst_18198);

(statearr_18219_20011[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18217 === (1))){
var inst_18192 = cljs.core.seq(coll);
var inst_18193 = inst_18192;
var state_18216__$1 = (function (){var statearr_18220 = state_18216;
(statearr_18220[(7)] = inst_18193);

return statearr_18220;
})();
var statearr_18221_20014 = state_18216__$1;
(statearr_18221_20014[(2)] = null);

(statearr_18221_20014[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18217 === (4))){
var inst_18193 = (state_18216[(7)]);
var inst_18196 = cljs.core.first(inst_18193);
var state_18216__$1 = state_18216;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18216__$1,(7),ch,inst_18196);
} else {
if((state_val_18217 === (13))){
var inst_18210 = (state_18216[(2)]);
var state_18216__$1 = state_18216;
var statearr_18222_20018 = state_18216__$1;
(statearr_18222_20018[(2)] = inst_18210);

(statearr_18222_20018[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18217 === (6))){
var inst_18201 = (state_18216[(2)]);
var state_18216__$1 = state_18216;
if(cljs.core.truth_(inst_18201)){
var statearr_18223_20019 = state_18216__$1;
(statearr_18223_20019[(1)] = (8));

} else {
var statearr_18224_20020 = state_18216__$1;
(statearr_18224_20020[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18217 === (3))){
var inst_18214 = (state_18216[(2)]);
var state_18216__$1 = state_18216;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18216__$1,inst_18214);
} else {
if((state_val_18217 === (12))){
var state_18216__$1 = state_18216;
var statearr_18226_20021 = state_18216__$1;
(statearr_18226_20021[(2)] = null);

(statearr_18226_20021[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18217 === (2))){
var inst_18193 = (state_18216[(7)]);
var state_18216__$1 = state_18216;
if(cljs.core.truth_(inst_18193)){
var statearr_18227_20023 = state_18216__$1;
(statearr_18227_20023[(1)] = (4));

} else {
var statearr_18228_20024 = state_18216__$1;
(statearr_18228_20024[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18217 === (11))){
var inst_18207 = cljs.core.async.close_BANG_(ch);
var state_18216__$1 = state_18216;
var statearr_18229_20029 = state_18216__$1;
(statearr_18229_20029[(2)] = inst_18207);

(statearr_18229_20029[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18217 === (9))){
var state_18216__$1 = state_18216;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18230_20031 = state_18216__$1;
(statearr_18230_20031[(1)] = (11));

} else {
var statearr_18231_20032 = state_18216__$1;
(statearr_18231_20032[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18217 === (5))){
var inst_18193 = (state_18216[(7)]);
var state_18216__$1 = state_18216;
var statearr_18232_20036 = state_18216__$1;
(statearr_18232_20036[(2)] = inst_18193);

(statearr_18232_20036[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18217 === (10))){
var inst_18212 = (state_18216[(2)]);
var state_18216__$1 = state_18216;
var statearr_18233_20037 = state_18216__$1;
(statearr_18233_20037[(2)] = inst_18212);

(statearr_18233_20037[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18217 === (8))){
var inst_18193 = (state_18216[(7)]);
var inst_18203 = cljs.core.next(inst_18193);
var inst_18193__$1 = inst_18203;
var state_18216__$1 = (function (){var statearr_18235 = state_18216;
(statearr_18235[(7)] = inst_18193__$1);

return statearr_18235;
})();
var statearr_18236_20038 = state_18216__$1;
(statearr_18236_20038[(2)] = null);

(statearr_18236_20038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17280__auto__ = null;
var cljs$core$async$state_machine__17280__auto____0 = (function (){
var statearr_18237 = [null,null,null,null,null,null,null,null];
(statearr_18237[(0)] = cljs$core$async$state_machine__17280__auto__);

(statearr_18237[(1)] = (1));

return statearr_18237;
});
var cljs$core$async$state_machine__17280__auto____1 = (function (state_18216){
while(true){
var ret_value__17281__auto__ = (function (){try{while(true){
var result__17282__auto__ = switch__17279__auto__(state_18216);
if(cljs.core.keyword_identical_QMARK_(result__17282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17282__auto__;
}
break;
}
}catch (e18238){var ex__17283__auto__ = e18238;
var statearr_18239_20039 = state_18216;
(statearr_18239_20039[(2)] = ex__17283__auto__);


if(cljs.core.seq((state_18216[(4)]))){
var statearr_18240_20043 = state_18216;
(statearr_18240_20043[(1)] = cljs.core.first((state_18216[(4)])));

} else {
throw ex__17283__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20044 = state_18216;
state_18216 = G__20044;
continue;
} else {
return ret_value__17281__auto__;
}
break;
}
});
cljs$core$async$state_machine__17280__auto__ = function(state_18216){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17280__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17280__auto____1.call(this,state_18216);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17280__auto____0;
cljs$core$async$state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17280__auto____1;
return cljs$core$async$state_machine__17280__auto__;
})()
})();
var state__17429__auto__ = (function (){var statearr_18242 = f__17428__auto__();
(statearr_18242[(6)] = c__17427__auto__);

return statearr_18242;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17429__auto__);
}));

return c__17427__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__18244 = arguments.length;
switch (G__18244) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_20056 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_20056(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_20058 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_20058(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_20062 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_20062(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_20072 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_20072(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18249 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18249 = (function (ch,cs,meta18250){
this.ch = ch;
this.cs = cs;
this.meta18250 = meta18250;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18249.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18251,meta18250__$1){
var self__ = this;
var _18251__$1 = this;
return (new cljs.core.async.t_cljs$core$async18249(self__.ch,self__.cs,meta18250__$1));
}));

(cljs.core.async.t_cljs$core$async18249.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18251){
var self__ = this;
var _18251__$1 = this;
return self__.meta18250;
}));

(cljs.core.async.t_cljs$core$async18249.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18249.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async18249.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18249.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async18249.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async18249.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async18249.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta18250","meta18250",-237740565,null)], null);
}));

(cljs.core.async.t_cljs$core$async18249.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18249.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18249");

(cljs.core.async.t_cljs$core$async18249.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async18249");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18249.
 */
cljs.core.async.__GT_t_cljs$core$async18249 = (function cljs$core$async$mult_$___GT_t_cljs$core$async18249(ch__$1,cs__$1,meta18250){
return (new cljs.core.async.t_cljs$core$async18249(ch__$1,cs__$1,meta18250));
});

}

return (new cljs.core.async.t_cljs$core$async18249(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__17427__auto___20086 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17428__auto__ = (function (){var switch__17279__auto__ = (function (state_18388){
var state_val_18389 = (state_18388[(1)]);
if((state_val_18389 === (7))){
var inst_18384 = (state_18388[(2)]);
var state_18388__$1 = state_18388;
var statearr_18391_20087 = state_18388__$1;
(statearr_18391_20087[(2)] = inst_18384);

(statearr_18391_20087[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18389 === (20))){
var inst_18287 = (state_18388[(7)]);
var inst_18299 = cljs.core.first(inst_18287);
var inst_18301 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18299,(0),null);
var inst_18302 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18299,(1),null);
var state_18388__$1 = (function (){var statearr_18392 = state_18388;
(statearr_18392[(8)] = inst_18301);

return statearr_18392;
})();
if(cljs.core.truth_(inst_18302)){
var statearr_18393_20088 = state_18388__$1;
(statearr_18393_20088[(1)] = (22));

} else {
var statearr_18394_20089 = state_18388__$1;
(statearr_18394_20089[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18389 === (27))){
var inst_18337 = (state_18388[(9)]);
var inst_18330 = (state_18388[(10)]);
var inst_18332 = (state_18388[(11)]);
var inst_18256 = (state_18388[(12)]);
var inst_18337__$1 = cljs.core._nth(inst_18330,inst_18332);
var inst_18338 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_18337__$1,inst_18256,done);
var state_18388__$1 = (function (){var statearr_18395 = state_18388;
(statearr_18395[(9)] = inst_18337__$1);

return statearr_18395;
})();
if(cljs.core.truth_(inst_18338)){
var statearr_18396_20095 = state_18388__$1;
(statearr_18396_20095[(1)] = (30));

} else {
var statearr_18397_20096 = state_18388__$1;
(statearr_18397_20096[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18389 === (1))){
var state_18388__$1 = state_18388;
var statearr_18399_20099 = state_18388__$1;
(statearr_18399_20099[(2)] = null);

(statearr_18399_20099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18389 === (24))){
var inst_18287 = (state_18388[(7)]);
var inst_18307 = (state_18388[(2)]);
var inst_18308 = cljs.core.next(inst_18287);
var inst_18265 = inst_18308;
var inst_18266 = null;
var inst_18267 = (0);
var inst_18268 = (0);
var state_18388__$1 = (function (){var statearr_18400 = state_18388;
(statearr_18400[(13)] = inst_18268);

(statearr_18400[(14)] = inst_18266);

(statearr_18400[(15)] = inst_18265);

(statearr_18400[(16)] = inst_18307);

(statearr_18400[(17)] = inst_18267);

return statearr_18400;
})();
var statearr_18401_20100 = state_18388__$1;
(statearr_18401_20100[(2)] = null);

(statearr_18401_20100[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18389 === (39))){
var state_18388__$1 = state_18388;
var statearr_18405_20101 = state_18388__$1;
(statearr_18405_20101[(2)] = null);

(statearr_18405_20101[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18389 === (4))){
var inst_18256 = (state_18388[(12)]);
var inst_18256__$1 = (state_18388[(2)]);
var inst_18257 = (inst_18256__$1 == null);
var state_18388__$1 = (function (){var statearr_18406 = state_18388;
(statearr_18406[(12)] = inst_18256__$1);

return statearr_18406;
})();
if(cljs.core.truth_(inst_18257)){
var statearr_18407_20102 = state_18388__$1;
(statearr_18407_20102[(1)] = (5));

} else {
var statearr_18409_20103 = state_18388__$1;
(statearr_18409_20103[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18389 === (15))){
var inst_18268 = (state_18388[(13)]);
var inst_18266 = (state_18388[(14)]);
var inst_18265 = (state_18388[(15)]);
var inst_18267 = (state_18388[(17)]);
var inst_18283 = (state_18388[(2)]);
var inst_18284 = (inst_18268 + (1));
var tmp18402 = inst_18266;
var tmp18403 = inst_18265;
var tmp18404 = inst_18267;
var inst_18265__$1 = tmp18403;
var inst_18266__$1 = tmp18402;
var inst_18267__$1 = tmp18404;
var inst_18268__$1 = inst_18284;
var state_18388__$1 = (function (){var statearr_18410 = state_18388;
(statearr_18410[(18)] = inst_18283);

(statearr_18410[(13)] = inst_18268__$1);

(statearr_18410[(14)] = inst_18266__$1);

(statearr_18410[(15)] = inst_18265__$1);

(statearr_18410[(17)] = inst_18267__$1);

return statearr_18410;
})();
var statearr_18411_20108 = state_18388__$1;
(statearr_18411_20108[(2)] = null);

(statearr_18411_20108[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18389 === (21))){
var inst_18311 = (state_18388[(2)]);
var state_18388__$1 = state_18388;
var statearr_18415_20109 = state_18388__$1;
(statearr_18415_20109[(2)] = inst_18311);

(statearr_18415_20109[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18389 === (31))){
var inst_18337 = (state_18388[(9)]);
var inst_18341 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_18337);
var state_18388__$1 = state_18388;
var statearr_18416_20111 = state_18388__$1;
(statearr_18416_20111[(2)] = inst_18341);

(statearr_18416_20111[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18389 === (32))){
var inst_18330 = (state_18388[(10)]);
var inst_18331 = (state_18388[(19)]);
var inst_18332 = (state_18388[(11)]);
var inst_18329 = (state_18388[(20)]);
var inst_18343 = (state_18388[(2)]);
var inst_18345 = (inst_18332 + (1));
var tmp18412 = inst_18330;
var tmp18413 = inst_18331;
var tmp18414 = inst_18329;
var inst_18329__$1 = tmp18414;
var inst_18330__$1 = tmp18412;
var inst_18331__$1 = tmp18413;
var inst_18332__$1 = inst_18345;
var state_18388__$1 = (function (){var statearr_18417 = state_18388;
(statearr_18417[(21)] = inst_18343);

(statearr_18417[(10)] = inst_18330__$1);

(statearr_18417[(19)] = inst_18331__$1);

(statearr_18417[(11)] = inst_18332__$1);

(statearr_18417[(20)] = inst_18329__$1);

return statearr_18417;
})();
var statearr_18418_20112 = state_18388__$1;
(statearr_18418_20112[(2)] = null);

(statearr_18418_20112[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18389 === (40))){
var inst_18357 = (state_18388[(22)]);
var inst_18361 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_18357);
var state_18388__$1 = state_18388;
var statearr_18420_20113 = state_18388__$1;
(statearr_18420_20113[(2)] = inst_18361);

(statearr_18420_20113[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18389 === (33))){
var inst_18348 = (state_18388[(23)]);
var inst_18350 = cljs.core.chunked_seq_QMARK_(inst_18348);
var state_18388__$1 = state_18388;
if(inst_18350){
var statearr_18421_20114 = state_18388__$1;
(statearr_18421_20114[(1)] = (36));

} else {
var statearr_18422_20115 = state_18388__$1;
(statearr_18422_20115[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18389 === (13))){
var inst_18277 = (state_18388[(24)]);
var inst_18280 = cljs.core.async.close_BANG_(inst_18277);
var state_18388__$1 = state_18388;
var statearr_18423_20116 = state_18388__$1;
(statearr_18423_20116[(2)] = inst_18280);

(statearr_18423_20116[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18389 === (22))){
var inst_18301 = (state_18388[(8)]);
var inst_18304 = cljs.core.async.close_BANG_(inst_18301);
var state_18388__$1 = state_18388;
var statearr_18424_20117 = state_18388__$1;
(statearr_18424_20117[(2)] = inst_18304);

(statearr_18424_20117[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18389 === (36))){
var inst_18348 = (state_18388[(23)]);
var inst_18352 = cljs.core.chunk_first(inst_18348);
var inst_18353 = cljs.core.chunk_rest(inst_18348);
var inst_18354 = cljs.core.count(inst_18352);
var inst_18329 = inst_18353;
var inst_18330 = inst_18352;
var inst_18331 = inst_18354;
var inst_18332 = (0);
var state_18388__$1 = (function (){var statearr_18426 = state_18388;
(statearr_18426[(10)] = inst_18330);

(statearr_18426[(19)] = inst_18331);

(statearr_18426[(11)] = inst_18332);

(statearr_18426[(20)] = inst_18329);

return statearr_18426;
})();
var statearr_18427_20119 = state_18388__$1;
(statearr_18427_20119[(2)] = null);

(statearr_18427_20119[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18389 === (41))){
var inst_18348 = (state_18388[(23)]);
var inst_18363 = (state_18388[(2)]);
var inst_18364 = cljs.core.next(inst_18348);
var inst_18329 = inst_18364;
var inst_18330 = null;
var inst_18331 = (0);
var inst_18332 = (0);
var state_18388__$1 = (function (){var statearr_18428 = state_18388;
(statearr_18428[(25)] = inst_18363);

(statearr_18428[(10)] = inst_18330);

(statearr_18428[(19)] = inst_18331);

(statearr_18428[(11)] = inst_18332);

(statearr_18428[(20)] = inst_18329);

return statearr_18428;
})();
var statearr_18429_20121 = state_18388__$1;
(statearr_18429_20121[(2)] = null);

(statearr_18429_20121[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18389 === (43))){
var state_18388__$1 = state_18388;
var statearr_18430_20130 = state_18388__$1;
(statearr_18430_20130[(2)] = null);

(statearr_18430_20130[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18389 === (29))){
var inst_18372 = (state_18388[(2)]);
var state_18388__$1 = state_18388;
var statearr_18431_20134 = state_18388__$1;
(statearr_18431_20134[(2)] = inst_18372);

(statearr_18431_20134[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18389 === (44))){
var inst_18381 = (state_18388[(2)]);
var state_18388__$1 = (function (){var statearr_18432 = state_18388;
(statearr_18432[(26)] = inst_18381);

return statearr_18432;
})();
var statearr_18433_20135 = state_18388__$1;
(statearr_18433_20135[(2)] = null);

(statearr_18433_20135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18389 === (6))){
var inst_18321 = (state_18388[(27)]);
var inst_18320 = cljs.core.deref(cs);
var inst_18321__$1 = cljs.core.keys(inst_18320);
var inst_18322 = cljs.core.count(inst_18321__$1);
var inst_18323 = cljs.core.reset_BANG_(dctr,inst_18322);
var inst_18328 = cljs.core.seq(inst_18321__$1);
var inst_18329 = inst_18328;
var inst_18330 = null;
var inst_18331 = (0);
var inst_18332 = (0);
var state_18388__$1 = (function (){var statearr_18435 = state_18388;
(statearr_18435[(28)] = inst_18323);

(statearr_18435[(27)] = inst_18321__$1);

(statearr_18435[(10)] = inst_18330);

(statearr_18435[(19)] = inst_18331);

(statearr_18435[(11)] = inst_18332);

(statearr_18435[(20)] = inst_18329);

return statearr_18435;
})();
var statearr_18436_20138 = state_18388__$1;
(statearr_18436_20138[(2)] = null);

(statearr_18436_20138[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18389 === (28))){
var inst_18348 = (state_18388[(23)]);
var inst_18329 = (state_18388[(20)]);
var inst_18348__$1 = cljs.core.seq(inst_18329);
var state_18388__$1 = (function (){var statearr_18437 = state_18388;
(statearr_18437[(23)] = inst_18348__$1);

return statearr_18437;
})();
if(inst_18348__$1){
var statearr_18438_20140 = state_18388__$1;
(statearr_18438_20140[(1)] = (33));

} else {
var statearr_18439_20141 = state_18388__$1;
(statearr_18439_20141[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18389 === (25))){
var inst_18331 = (state_18388[(19)]);
var inst_18332 = (state_18388[(11)]);
var inst_18334 = (inst_18332 < inst_18331);
var inst_18335 = inst_18334;
var state_18388__$1 = state_18388;
if(cljs.core.truth_(inst_18335)){
var statearr_18440_20143 = state_18388__$1;
(statearr_18440_20143[(1)] = (27));

} else {
var statearr_18441_20144 = state_18388__$1;
(statearr_18441_20144[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18389 === (34))){
var state_18388__$1 = state_18388;
var statearr_18443_20145 = state_18388__$1;
(statearr_18443_20145[(2)] = null);

(statearr_18443_20145[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18389 === (17))){
var state_18388__$1 = state_18388;
var statearr_18445_20146 = state_18388__$1;
(statearr_18445_20146[(2)] = null);

(statearr_18445_20146[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18389 === (3))){
var inst_18386 = (state_18388[(2)]);
var state_18388__$1 = state_18388;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18388__$1,inst_18386);
} else {
if((state_val_18389 === (12))){
var inst_18316 = (state_18388[(2)]);
var state_18388__$1 = state_18388;
var statearr_18446_20147 = state_18388__$1;
(statearr_18446_20147[(2)] = inst_18316);

(statearr_18446_20147[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18389 === (2))){
var state_18388__$1 = state_18388;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18388__$1,(4),ch);
} else {
if((state_val_18389 === (23))){
var state_18388__$1 = state_18388;
var statearr_18447_20150 = state_18388__$1;
(statearr_18447_20150[(2)] = null);

(statearr_18447_20150[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18389 === (35))){
var inst_18370 = (state_18388[(2)]);
var state_18388__$1 = state_18388;
var statearr_18449_20151 = state_18388__$1;
(statearr_18449_20151[(2)] = inst_18370);

(statearr_18449_20151[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18389 === (19))){
var inst_18287 = (state_18388[(7)]);
var inst_18291 = cljs.core.chunk_first(inst_18287);
var inst_18292 = cljs.core.chunk_rest(inst_18287);
var inst_18293 = cljs.core.count(inst_18291);
var inst_18265 = inst_18292;
var inst_18266 = inst_18291;
var inst_18267 = inst_18293;
var inst_18268 = (0);
var state_18388__$1 = (function (){var statearr_18450 = state_18388;
(statearr_18450[(13)] = inst_18268);

(statearr_18450[(14)] = inst_18266);

(statearr_18450[(15)] = inst_18265);

(statearr_18450[(17)] = inst_18267);

return statearr_18450;
})();
var statearr_18451_20154 = state_18388__$1;
(statearr_18451_20154[(2)] = null);

(statearr_18451_20154[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18389 === (11))){
var inst_18287 = (state_18388[(7)]);
var inst_18265 = (state_18388[(15)]);
var inst_18287__$1 = cljs.core.seq(inst_18265);
var state_18388__$1 = (function (){var statearr_18452 = state_18388;
(statearr_18452[(7)] = inst_18287__$1);

return statearr_18452;
})();
if(inst_18287__$1){
var statearr_18453_20155 = state_18388__$1;
(statearr_18453_20155[(1)] = (16));

} else {
var statearr_18454_20156 = state_18388__$1;
(statearr_18454_20156[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18389 === (9))){
var inst_18318 = (state_18388[(2)]);
var state_18388__$1 = state_18388;
var statearr_18455_20158 = state_18388__$1;
(statearr_18455_20158[(2)] = inst_18318);

(statearr_18455_20158[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18389 === (5))){
var inst_18263 = cljs.core.deref(cs);
var inst_18264 = cljs.core.seq(inst_18263);
var inst_18265 = inst_18264;
var inst_18266 = null;
var inst_18267 = (0);
var inst_18268 = (0);
var state_18388__$1 = (function (){var statearr_18457 = state_18388;
(statearr_18457[(13)] = inst_18268);

(statearr_18457[(14)] = inst_18266);

(statearr_18457[(15)] = inst_18265);

(statearr_18457[(17)] = inst_18267);

return statearr_18457;
})();
var statearr_18458_20162 = state_18388__$1;
(statearr_18458_20162[(2)] = null);

(statearr_18458_20162[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18389 === (14))){
var state_18388__$1 = state_18388;
var statearr_18459_20163 = state_18388__$1;
(statearr_18459_20163[(2)] = null);

(statearr_18459_20163[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18389 === (45))){
var inst_18378 = (state_18388[(2)]);
var state_18388__$1 = state_18388;
var statearr_18460_20165 = state_18388__$1;
(statearr_18460_20165[(2)] = inst_18378);

(statearr_18460_20165[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18389 === (26))){
var inst_18321 = (state_18388[(27)]);
var inst_18374 = (state_18388[(2)]);
var inst_18375 = cljs.core.seq(inst_18321);
var state_18388__$1 = (function (){var statearr_18461 = state_18388;
(statearr_18461[(29)] = inst_18374);

return statearr_18461;
})();
if(inst_18375){
var statearr_18462_20168 = state_18388__$1;
(statearr_18462_20168[(1)] = (42));

} else {
var statearr_18463_20171 = state_18388__$1;
(statearr_18463_20171[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18389 === (16))){
var inst_18287 = (state_18388[(7)]);
var inst_18289 = cljs.core.chunked_seq_QMARK_(inst_18287);
var state_18388__$1 = state_18388;
if(inst_18289){
var statearr_18464_20173 = state_18388__$1;
(statearr_18464_20173[(1)] = (19));

} else {
var statearr_18465_20174 = state_18388__$1;
(statearr_18465_20174[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18389 === (38))){
var inst_18367 = (state_18388[(2)]);
var state_18388__$1 = state_18388;
var statearr_18466_20175 = state_18388__$1;
(statearr_18466_20175[(2)] = inst_18367);

(statearr_18466_20175[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18389 === (30))){
var state_18388__$1 = state_18388;
var statearr_18468_20176 = state_18388__$1;
(statearr_18468_20176[(2)] = null);

(statearr_18468_20176[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18389 === (10))){
var inst_18268 = (state_18388[(13)]);
var inst_18266 = (state_18388[(14)]);
var inst_18276 = cljs.core._nth(inst_18266,inst_18268);
var inst_18277 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18276,(0),null);
var inst_18278 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18276,(1),null);
var state_18388__$1 = (function (){var statearr_18469 = state_18388;
(statearr_18469[(24)] = inst_18277);

return statearr_18469;
})();
if(cljs.core.truth_(inst_18278)){
var statearr_18470_20184 = state_18388__$1;
(statearr_18470_20184[(1)] = (13));

} else {
var statearr_18471_20185 = state_18388__$1;
(statearr_18471_20185[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18389 === (18))){
var inst_18314 = (state_18388[(2)]);
var state_18388__$1 = state_18388;
var statearr_18472_20186 = state_18388__$1;
(statearr_18472_20186[(2)] = inst_18314);

(statearr_18472_20186[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18389 === (42))){
var state_18388__$1 = state_18388;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18388__$1,(45),dchan);
} else {
if((state_val_18389 === (37))){
var inst_18348 = (state_18388[(23)]);
var inst_18256 = (state_18388[(12)]);
var inst_18357 = (state_18388[(22)]);
var inst_18357__$1 = cljs.core.first(inst_18348);
var inst_18358 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_18357__$1,inst_18256,done);
var state_18388__$1 = (function (){var statearr_18473 = state_18388;
(statearr_18473[(22)] = inst_18357__$1);

return statearr_18473;
})();
if(cljs.core.truth_(inst_18358)){
var statearr_18475_20193 = state_18388__$1;
(statearr_18475_20193[(1)] = (39));

} else {
var statearr_18476_20194 = state_18388__$1;
(statearr_18476_20194[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18389 === (8))){
var inst_18268 = (state_18388[(13)]);
var inst_18267 = (state_18388[(17)]);
var inst_18270 = (inst_18268 < inst_18267);
var inst_18271 = inst_18270;
var state_18388__$1 = state_18388;
if(cljs.core.truth_(inst_18271)){
var statearr_18477_20195 = state_18388__$1;
(statearr_18477_20195[(1)] = (10));

} else {
var statearr_18478_20196 = state_18388__$1;
(statearr_18478_20196[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__17280__auto__ = null;
var cljs$core$async$mult_$_state_machine__17280__auto____0 = (function (){
var statearr_18479 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18479[(0)] = cljs$core$async$mult_$_state_machine__17280__auto__);

(statearr_18479[(1)] = (1));

return statearr_18479;
});
var cljs$core$async$mult_$_state_machine__17280__auto____1 = (function (state_18388){
while(true){
var ret_value__17281__auto__ = (function (){try{while(true){
var result__17282__auto__ = switch__17279__auto__(state_18388);
if(cljs.core.keyword_identical_QMARK_(result__17282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17282__auto__;
}
break;
}
}catch (e18480){var ex__17283__auto__ = e18480;
var statearr_18481_20197 = state_18388;
(statearr_18481_20197[(2)] = ex__17283__auto__);


if(cljs.core.seq((state_18388[(4)]))){
var statearr_18482_20198 = state_18388;
(statearr_18482_20198[(1)] = cljs.core.first((state_18388[(4)])));

} else {
throw ex__17283__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20199 = state_18388;
state_18388 = G__20199;
continue;
} else {
return ret_value__17281__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__17280__auto__ = function(state_18388){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__17280__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__17280__auto____1.call(this,state_18388);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__17280__auto____0;
cljs$core$async$mult_$_state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__17280__auto____1;
return cljs$core$async$mult_$_state_machine__17280__auto__;
})()
})();
var state__17429__auto__ = (function (){var statearr_18484 = f__17428__auto__();
(statearr_18484[(6)] = c__17427__auto___20086);

return statearr_18484;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17429__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__18486 = arguments.length;
switch (G__18486) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_20205 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_20205(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_20206 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_20206(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_20208 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_20208(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_20221 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_20221(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_20225 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_20225(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___20230 = arguments.length;
var i__5770__auto___20231 = (0);
while(true){
if((i__5770__auto___20231 < len__5769__auto___20230)){
args__5775__auto__.push((arguments[i__5770__auto___20231]));

var G__20232 = (i__5770__auto___20231 + (1));
i__5770__auto___20231 = G__20232;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__18499){
var map__18500 = p__18499;
var map__18500__$1 = cljs.core.__destructure_map(map__18500);
var opts = map__18500__$1;
var statearr_18501_20233 = state;
(statearr_18501_20233[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_18503_20234 = state;
(statearr_18503_20234[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_18504_20235 = state;
(statearr_18504_20235[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq18494){
var G__18495 = cljs.core.first(seq18494);
var seq18494__$1 = cljs.core.next(seq18494);
var G__18496 = cljs.core.first(seq18494__$1);
var seq18494__$2 = cljs.core.next(seq18494__$1);
var G__18497 = cljs.core.first(seq18494__$2);
var seq18494__$3 = cljs.core.next(seq18494__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18495,G__18496,G__18497,seq18494__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18509 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18509 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18510){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta18510 = meta18510;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18509.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18511,meta18510__$1){
var self__ = this;
var _18511__$1 = this;
return (new cljs.core.async.t_cljs$core$async18509(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta18510__$1));
}));

(cljs.core.async.t_cljs$core$async18509.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18511){
var self__ = this;
var _18511__$1 = this;
return self__.meta18510;
}));

(cljs.core.async.t_cljs$core$async18509.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18509.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async18509.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18509.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18509.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18509.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18509.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18509.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18509.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta18510","meta18510",2127276117,null)], null);
}));

(cljs.core.async.t_cljs$core$async18509.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18509.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18509");

(cljs.core.async.t_cljs$core$async18509.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async18509");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18509.
 */
cljs.core.async.__GT_t_cljs$core$async18509 = (function cljs$core$async$mix_$___GT_t_cljs$core$async18509(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18510){
return (new cljs.core.async.t_cljs$core$async18509(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18510));
});

}

return (new cljs.core.async.t_cljs$core$async18509(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__17427__auto___20262 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17428__auto__ = (function (){var switch__17279__auto__ = (function (state_18583){
var state_val_18584 = (state_18583[(1)]);
if((state_val_18584 === (7))){
var inst_18543 = (state_18583[(2)]);
var state_18583__$1 = state_18583;
if(cljs.core.truth_(inst_18543)){
var statearr_18585_20263 = state_18583__$1;
(statearr_18585_20263[(1)] = (8));

} else {
var statearr_18586_20264 = state_18583__$1;
(statearr_18586_20264[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18584 === (20))){
var inst_18535 = (state_18583[(7)]);
var state_18583__$1 = state_18583;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18583__$1,(23),out,inst_18535);
} else {
if((state_val_18584 === (1))){
var inst_18517 = calc_state();
var inst_18518 = cljs.core.__destructure_map(inst_18517);
var inst_18519 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18518,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18520 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18518,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18521 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18518,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_18522 = inst_18517;
var state_18583__$1 = (function (){var statearr_18587 = state_18583;
(statearr_18587[(8)] = inst_18521);

(statearr_18587[(9)] = inst_18520);

(statearr_18587[(10)] = inst_18519);

(statearr_18587[(11)] = inst_18522);

return statearr_18587;
})();
var statearr_18588_20270 = state_18583__$1;
(statearr_18588_20270[(2)] = null);

(statearr_18588_20270[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18584 === (24))){
var inst_18525 = (state_18583[(12)]);
var inst_18522 = inst_18525;
var state_18583__$1 = (function (){var statearr_18589 = state_18583;
(statearr_18589[(11)] = inst_18522);

return statearr_18589;
})();
var statearr_18590_20271 = state_18583__$1;
(statearr_18590_20271[(2)] = null);

(statearr_18590_20271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18584 === (4))){
var inst_18538 = (state_18583[(13)]);
var inst_18535 = (state_18583[(7)]);
var inst_18534 = (state_18583[(2)]);
var inst_18535__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18534,(0),null);
var inst_18536 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18534,(1),null);
var inst_18538__$1 = (inst_18535__$1 == null);
var state_18583__$1 = (function (){var statearr_18591 = state_18583;
(statearr_18591[(13)] = inst_18538__$1);

(statearr_18591[(14)] = inst_18536);

(statearr_18591[(7)] = inst_18535__$1);

return statearr_18591;
})();
if(cljs.core.truth_(inst_18538__$1)){
var statearr_18592_20277 = state_18583__$1;
(statearr_18592_20277[(1)] = (5));

} else {
var statearr_18593_20278 = state_18583__$1;
(statearr_18593_20278[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18584 === (15))){
var inst_18557 = (state_18583[(15)]);
var inst_18526 = (state_18583[(16)]);
var inst_18557__$1 = cljs.core.empty_QMARK_(inst_18526);
var state_18583__$1 = (function (){var statearr_18594 = state_18583;
(statearr_18594[(15)] = inst_18557__$1);

return statearr_18594;
})();
if(inst_18557__$1){
var statearr_18595_20279 = state_18583__$1;
(statearr_18595_20279[(1)] = (17));

} else {
var statearr_18598_20280 = state_18583__$1;
(statearr_18598_20280[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18584 === (21))){
var inst_18525 = (state_18583[(12)]);
var inst_18522 = inst_18525;
var state_18583__$1 = (function (){var statearr_18600 = state_18583;
(statearr_18600[(11)] = inst_18522);

return statearr_18600;
})();
var statearr_18601_20281 = state_18583__$1;
(statearr_18601_20281[(2)] = null);

(statearr_18601_20281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18584 === (13))){
var inst_18550 = (state_18583[(2)]);
var inst_18551 = calc_state();
var inst_18522 = inst_18551;
var state_18583__$1 = (function (){var statearr_18603 = state_18583;
(statearr_18603[(17)] = inst_18550);

(statearr_18603[(11)] = inst_18522);

return statearr_18603;
})();
var statearr_18606_20282 = state_18583__$1;
(statearr_18606_20282[(2)] = null);

(statearr_18606_20282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18584 === (22))){
var inst_18577 = (state_18583[(2)]);
var state_18583__$1 = state_18583;
var statearr_18608_20284 = state_18583__$1;
(statearr_18608_20284[(2)] = inst_18577);

(statearr_18608_20284[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18584 === (6))){
var inst_18536 = (state_18583[(14)]);
var inst_18541 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18536,change);
var state_18583__$1 = state_18583;
var statearr_18611_20285 = state_18583__$1;
(statearr_18611_20285[(2)] = inst_18541);

(statearr_18611_20285[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18584 === (25))){
var state_18583__$1 = state_18583;
var statearr_18612_20286 = state_18583__$1;
(statearr_18612_20286[(2)] = null);

(statearr_18612_20286[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18584 === (17))){
var inst_18536 = (state_18583[(14)]);
var inst_18527 = (state_18583[(18)]);
var inst_18559 = (inst_18527.cljs$core$IFn$_invoke$arity$1 ? inst_18527.cljs$core$IFn$_invoke$arity$1(inst_18536) : inst_18527.call(null,inst_18536));
var inst_18560 = cljs.core.not(inst_18559);
var state_18583__$1 = state_18583;
var statearr_18613_20288 = state_18583__$1;
(statearr_18613_20288[(2)] = inst_18560);

(statearr_18613_20288[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18584 === (3))){
var inst_18581 = (state_18583[(2)]);
var state_18583__$1 = state_18583;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18583__$1,inst_18581);
} else {
if((state_val_18584 === (12))){
var state_18583__$1 = state_18583;
var statearr_18615_20289 = state_18583__$1;
(statearr_18615_20289[(2)] = null);

(statearr_18615_20289[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18584 === (2))){
var inst_18525 = (state_18583[(12)]);
var inst_18522 = (state_18583[(11)]);
var inst_18525__$1 = cljs.core.__destructure_map(inst_18522);
var inst_18526 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18525__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18527 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18525__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18528 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18525__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_18583__$1 = (function (){var statearr_18623 = state_18583;
(statearr_18623[(12)] = inst_18525__$1);

(statearr_18623[(16)] = inst_18526);

(statearr_18623[(18)] = inst_18527);

return statearr_18623;
})();
return cljs.core.async.ioc_alts_BANG_(state_18583__$1,(4),inst_18528);
} else {
if((state_val_18584 === (23))){
var inst_18568 = (state_18583[(2)]);
var state_18583__$1 = state_18583;
if(cljs.core.truth_(inst_18568)){
var statearr_18625_20295 = state_18583__$1;
(statearr_18625_20295[(1)] = (24));

} else {
var statearr_18628_20296 = state_18583__$1;
(statearr_18628_20296[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18584 === (19))){
var inst_18563 = (state_18583[(2)]);
var state_18583__$1 = state_18583;
var statearr_18630_20297 = state_18583__$1;
(statearr_18630_20297[(2)] = inst_18563);

(statearr_18630_20297[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18584 === (11))){
var inst_18536 = (state_18583[(14)]);
var inst_18547 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_18536);
var state_18583__$1 = state_18583;
var statearr_18632_20298 = state_18583__$1;
(statearr_18632_20298[(2)] = inst_18547);

(statearr_18632_20298[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18584 === (9))){
var inst_18536 = (state_18583[(14)]);
var inst_18554 = (state_18583[(19)]);
var inst_18526 = (state_18583[(16)]);
var inst_18554__$1 = (inst_18526.cljs$core$IFn$_invoke$arity$1 ? inst_18526.cljs$core$IFn$_invoke$arity$1(inst_18536) : inst_18526.call(null,inst_18536));
var state_18583__$1 = (function (){var statearr_18634 = state_18583;
(statearr_18634[(19)] = inst_18554__$1);

return statearr_18634;
})();
if(cljs.core.truth_(inst_18554__$1)){
var statearr_18637_20300 = state_18583__$1;
(statearr_18637_20300[(1)] = (14));

} else {
var statearr_18638_20301 = state_18583__$1;
(statearr_18638_20301[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18584 === (5))){
var inst_18538 = (state_18583[(13)]);
var state_18583__$1 = state_18583;
var statearr_18639_20306 = state_18583__$1;
(statearr_18639_20306[(2)] = inst_18538);

(statearr_18639_20306[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18584 === (14))){
var inst_18554 = (state_18583[(19)]);
var state_18583__$1 = state_18583;
var statearr_18641_20307 = state_18583__$1;
(statearr_18641_20307[(2)] = inst_18554);

(statearr_18641_20307[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18584 === (26))){
var inst_18573 = (state_18583[(2)]);
var state_18583__$1 = state_18583;
var statearr_18645_20308 = state_18583__$1;
(statearr_18645_20308[(2)] = inst_18573);

(statearr_18645_20308[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18584 === (16))){
var inst_18565 = (state_18583[(2)]);
var state_18583__$1 = state_18583;
if(cljs.core.truth_(inst_18565)){
var statearr_18647_20309 = state_18583__$1;
(statearr_18647_20309[(1)] = (20));

} else {
var statearr_18648_20310 = state_18583__$1;
(statearr_18648_20310[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18584 === (10))){
var inst_18579 = (state_18583[(2)]);
var state_18583__$1 = state_18583;
var statearr_18652_20311 = state_18583__$1;
(statearr_18652_20311[(2)] = inst_18579);

(statearr_18652_20311[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18584 === (18))){
var inst_18557 = (state_18583[(15)]);
var state_18583__$1 = state_18583;
var statearr_18653_20312 = state_18583__$1;
(statearr_18653_20312[(2)] = inst_18557);

(statearr_18653_20312[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18584 === (8))){
var inst_18535 = (state_18583[(7)]);
var inst_18545 = (inst_18535 == null);
var state_18583__$1 = state_18583;
if(cljs.core.truth_(inst_18545)){
var statearr_18655_20314 = state_18583__$1;
(statearr_18655_20314[(1)] = (11));

} else {
var statearr_18658_20318 = state_18583__$1;
(statearr_18658_20318[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__17280__auto__ = null;
var cljs$core$async$mix_$_state_machine__17280__auto____0 = (function (){
var statearr_18663 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18663[(0)] = cljs$core$async$mix_$_state_machine__17280__auto__);

(statearr_18663[(1)] = (1));

return statearr_18663;
});
var cljs$core$async$mix_$_state_machine__17280__auto____1 = (function (state_18583){
while(true){
var ret_value__17281__auto__ = (function (){try{while(true){
var result__17282__auto__ = switch__17279__auto__(state_18583);
if(cljs.core.keyword_identical_QMARK_(result__17282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17282__auto__;
}
break;
}
}catch (e18665){var ex__17283__auto__ = e18665;
var statearr_18666_20319 = state_18583;
(statearr_18666_20319[(2)] = ex__17283__auto__);


if(cljs.core.seq((state_18583[(4)]))){
var statearr_18668_20320 = state_18583;
(statearr_18668_20320[(1)] = cljs.core.first((state_18583[(4)])));

} else {
throw ex__17283__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20321 = state_18583;
state_18583 = G__20321;
continue;
} else {
return ret_value__17281__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__17280__auto__ = function(state_18583){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__17280__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__17280__auto____1.call(this,state_18583);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__17280__auto____0;
cljs$core$async$mix_$_state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__17280__auto____1;
return cljs$core$async$mix_$_state_machine__17280__auto__;
})()
})();
var state__17429__auto__ = (function (){var statearr_18672 = f__17428__auto__();
(statearr_18672[(6)] = c__17427__auto___20262);

return statearr_18672;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17429__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_20331 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_20331(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_20335 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_20335(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_20338 = (function() {
var G__20339 = null;
var G__20339__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__20339__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__20339 = function(p,v){
switch(arguments.length){
case 1:
return G__20339__1.call(this,p);
case 2:
return G__20339__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__20339.cljs$core$IFn$_invoke$arity$1 = G__20339__1;
G__20339.cljs$core$IFn$_invoke$arity$2 = G__20339__2;
return G__20339;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__18702 = arguments.length;
switch (G__18702) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_20338(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_20338(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__18709 = arguments.length;
switch (G__18709) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__18706_SHARP_){
if(cljs.core.truth_((p1__18706_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__18706_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__18706_SHARP_.call(null,topic)))){
return p1__18706_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__18706_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18711 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18711 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta18712){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta18712 = meta18712;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18711.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18713,meta18712__$1){
var self__ = this;
var _18713__$1 = this;
return (new cljs.core.async.t_cljs$core$async18711(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta18712__$1));
}));

(cljs.core.async.t_cljs$core$async18711.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18713){
var self__ = this;
var _18713__$1 = this;
return self__.meta18712;
}));

(cljs.core.async.t_cljs$core$async18711.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18711.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async18711.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18711.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async18711.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async18711.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async18711.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async18711.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta18712","meta18712",-85015596,null)], null);
}));

(cljs.core.async.t_cljs$core$async18711.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18711.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18711");

(cljs.core.async.t_cljs$core$async18711.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async18711");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18711.
 */
cljs.core.async.__GT_t_cljs$core$async18711 = (function cljs$core$async$__GT_t_cljs$core$async18711(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta18712){
return (new cljs.core.async.t_cljs$core$async18711(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta18712));
});

}

return (new cljs.core.async.t_cljs$core$async18711(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__17427__auto___20347 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17428__auto__ = (function (){var switch__17279__auto__ = (function (state_18827){
var state_val_18828 = (state_18827[(1)]);
if((state_val_18828 === (7))){
var inst_18822 = (state_18827[(2)]);
var state_18827__$1 = state_18827;
var statearr_18833_20348 = state_18827__$1;
(statearr_18833_20348[(2)] = inst_18822);

(statearr_18833_20348[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18828 === (20))){
var state_18827__$1 = state_18827;
var statearr_18835_20349 = state_18827__$1;
(statearr_18835_20349[(2)] = null);

(statearr_18835_20349[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18828 === (1))){
var state_18827__$1 = state_18827;
var statearr_18839_20350 = state_18827__$1;
(statearr_18839_20350[(2)] = null);

(statearr_18839_20350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18828 === (24))){
var inst_18801 = (state_18827[(7)]);
var inst_18813 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_18801);
var state_18827__$1 = state_18827;
var statearr_18841_20351 = state_18827__$1;
(statearr_18841_20351[(2)] = inst_18813);

(statearr_18841_20351[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18828 === (4))){
var inst_18736 = (state_18827[(8)]);
var inst_18736__$1 = (state_18827[(2)]);
var inst_18737 = (inst_18736__$1 == null);
var state_18827__$1 = (function (){var statearr_18845 = state_18827;
(statearr_18845[(8)] = inst_18736__$1);

return statearr_18845;
})();
if(cljs.core.truth_(inst_18737)){
var statearr_18846_20352 = state_18827__$1;
(statearr_18846_20352[(1)] = (5));

} else {
var statearr_18848_20353 = state_18827__$1;
(statearr_18848_20353[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18828 === (15))){
var inst_18795 = (state_18827[(2)]);
var state_18827__$1 = state_18827;
var statearr_18851_20354 = state_18827__$1;
(statearr_18851_20354[(2)] = inst_18795);

(statearr_18851_20354[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18828 === (21))){
var inst_18818 = (state_18827[(2)]);
var state_18827__$1 = (function (){var statearr_18853 = state_18827;
(statearr_18853[(9)] = inst_18818);

return statearr_18853;
})();
var statearr_18855_20355 = state_18827__$1;
(statearr_18855_20355[(2)] = null);

(statearr_18855_20355[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18828 === (13))){
var inst_18769 = (state_18827[(10)]);
var inst_18775 = cljs.core.chunked_seq_QMARK_(inst_18769);
var state_18827__$1 = state_18827;
if(inst_18775){
var statearr_18858_20356 = state_18827__$1;
(statearr_18858_20356[(1)] = (16));

} else {
var statearr_18860_20357 = state_18827__$1;
(statearr_18860_20357[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18828 === (22))){
var inst_18809 = (state_18827[(2)]);
var state_18827__$1 = state_18827;
if(cljs.core.truth_(inst_18809)){
var statearr_18862_20358 = state_18827__$1;
(statearr_18862_20358[(1)] = (23));

} else {
var statearr_18863_20359 = state_18827__$1;
(statearr_18863_20359[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18828 === (6))){
var inst_18801 = (state_18827[(7)]);
var inst_18803 = (state_18827[(11)]);
var inst_18736 = (state_18827[(8)]);
var inst_18801__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_18736) : topic_fn.call(null,inst_18736));
var inst_18802 = cljs.core.deref(mults);
var inst_18803__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18802,inst_18801__$1);
var state_18827__$1 = (function (){var statearr_18868 = state_18827;
(statearr_18868[(7)] = inst_18801__$1);

(statearr_18868[(11)] = inst_18803__$1);

return statearr_18868;
})();
if(cljs.core.truth_(inst_18803__$1)){
var statearr_18870_20361 = state_18827__$1;
(statearr_18870_20361[(1)] = (19));

} else {
var statearr_18871_20362 = state_18827__$1;
(statearr_18871_20362[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18828 === (25))){
var inst_18815 = (state_18827[(2)]);
var state_18827__$1 = state_18827;
var statearr_18875_20363 = state_18827__$1;
(statearr_18875_20363[(2)] = inst_18815);

(statearr_18875_20363[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18828 === (17))){
var inst_18769 = (state_18827[(10)]);
var inst_18785 = cljs.core.first(inst_18769);
var inst_18786 = cljs.core.async.muxch_STAR_(inst_18785);
var inst_18787 = cljs.core.async.close_BANG_(inst_18786);
var inst_18788 = cljs.core.next(inst_18769);
var inst_18749 = inst_18788;
var inst_18750 = null;
var inst_18751 = (0);
var inst_18752 = (0);
var state_18827__$1 = (function (){var statearr_18880 = state_18827;
(statearr_18880[(12)] = inst_18751);

(statearr_18880[(13)] = inst_18787);

(statearr_18880[(14)] = inst_18752);

(statearr_18880[(15)] = inst_18749);

(statearr_18880[(16)] = inst_18750);

return statearr_18880;
})();
var statearr_18884_20364 = state_18827__$1;
(statearr_18884_20364[(2)] = null);

(statearr_18884_20364[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18828 === (3))){
var inst_18824 = (state_18827[(2)]);
var state_18827__$1 = state_18827;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18827__$1,inst_18824);
} else {
if((state_val_18828 === (12))){
var inst_18797 = (state_18827[(2)]);
var state_18827__$1 = state_18827;
var statearr_18886_20369 = state_18827__$1;
(statearr_18886_20369[(2)] = inst_18797);

(statearr_18886_20369[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18828 === (2))){
var state_18827__$1 = state_18827;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18827__$1,(4),ch);
} else {
if((state_val_18828 === (23))){
var state_18827__$1 = state_18827;
var statearr_18890_20370 = state_18827__$1;
(statearr_18890_20370[(2)] = null);

(statearr_18890_20370[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18828 === (19))){
var inst_18803 = (state_18827[(11)]);
var inst_18736 = (state_18827[(8)]);
var inst_18805 = cljs.core.async.muxch_STAR_(inst_18803);
var state_18827__$1 = state_18827;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18827__$1,(22),inst_18805,inst_18736);
} else {
if((state_val_18828 === (11))){
var inst_18749 = (state_18827[(15)]);
var inst_18769 = (state_18827[(10)]);
var inst_18769__$1 = cljs.core.seq(inst_18749);
var state_18827__$1 = (function (){var statearr_18895 = state_18827;
(statearr_18895[(10)] = inst_18769__$1);

return statearr_18895;
})();
if(inst_18769__$1){
var statearr_18897_20371 = state_18827__$1;
(statearr_18897_20371[(1)] = (13));

} else {
var statearr_18898_20372 = state_18827__$1;
(statearr_18898_20372[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18828 === (9))){
var inst_18799 = (state_18827[(2)]);
var state_18827__$1 = state_18827;
var statearr_18902_20373 = state_18827__$1;
(statearr_18902_20373[(2)] = inst_18799);

(statearr_18902_20373[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18828 === (5))){
var inst_18746 = cljs.core.deref(mults);
var inst_18747 = cljs.core.vals(inst_18746);
var inst_18748 = cljs.core.seq(inst_18747);
var inst_18749 = inst_18748;
var inst_18750 = null;
var inst_18751 = (0);
var inst_18752 = (0);
var state_18827__$1 = (function (){var statearr_18905 = state_18827;
(statearr_18905[(12)] = inst_18751);

(statearr_18905[(14)] = inst_18752);

(statearr_18905[(15)] = inst_18749);

(statearr_18905[(16)] = inst_18750);

return statearr_18905;
})();
var statearr_18910_20374 = state_18827__$1;
(statearr_18910_20374[(2)] = null);

(statearr_18910_20374[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18828 === (14))){
var state_18827__$1 = state_18827;
var statearr_18915_20375 = state_18827__$1;
(statearr_18915_20375[(2)] = null);

(statearr_18915_20375[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18828 === (16))){
var inst_18769 = (state_18827[(10)]);
var inst_18779 = cljs.core.chunk_first(inst_18769);
var inst_18781 = cljs.core.chunk_rest(inst_18769);
var inst_18782 = cljs.core.count(inst_18779);
var inst_18749 = inst_18781;
var inst_18750 = inst_18779;
var inst_18751 = inst_18782;
var inst_18752 = (0);
var state_18827__$1 = (function (){var statearr_18919 = state_18827;
(statearr_18919[(12)] = inst_18751);

(statearr_18919[(14)] = inst_18752);

(statearr_18919[(15)] = inst_18749);

(statearr_18919[(16)] = inst_18750);

return statearr_18919;
})();
var statearr_18921_20377 = state_18827__$1;
(statearr_18921_20377[(2)] = null);

(statearr_18921_20377[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18828 === (10))){
var inst_18751 = (state_18827[(12)]);
var inst_18752 = (state_18827[(14)]);
var inst_18749 = (state_18827[(15)]);
var inst_18750 = (state_18827[(16)]);
var inst_18757 = cljs.core._nth(inst_18750,inst_18752);
var inst_18759 = cljs.core.async.muxch_STAR_(inst_18757);
var inst_18760 = cljs.core.async.close_BANG_(inst_18759);
var inst_18761 = (inst_18752 + (1));
var tmp18911 = inst_18751;
var tmp18912 = inst_18749;
var tmp18913 = inst_18750;
var inst_18749__$1 = tmp18912;
var inst_18750__$1 = tmp18913;
var inst_18751__$1 = tmp18911;
var inst_18752__$1 = inst_18761;
var state_18827__$1 = (function (){var statearr_18925 = state_18827;
(statearr_18925[(12)] = inst_18751__$1);

(statearr_18925[(17)] = inst_18760);

(statearr_18925[(14)] = inst_18752__$1);

(statearr_18925[(15)] = inst_18749__$1);

(statearr_18925[(16)] = inst_18750__$1);

return statearr_18925;
})();
var statearr_18929_20382 = state_18827__$1;
(statearr_18929_20382[(2)] = null);

(statearr_18929_20382[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18828 === (18))){
var inst_18792 = (state_18827[(2)]);
var state_18827__$1 = state_18827;
var statearr_18930_20386 = state_18827__$1;
(statearr_18930_20386[(2)] = inst_18792);

(statearr_18930_20386[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18828 === (8))){
var inst_18751 = (state_18827[(12)]);
var inst_18752 = (state_18827[(14)]);
var inst_18754 = (inst_18752 < inst_18751);
var inst_18755 = inst_18754;
var state_18827__$1 = state_18827;
if(cljs.core.truth_(inst_18755)){
var statearr_18931_20390 = state_18827__$1;
(statearr_18931_20390[(1)] = (10));

} else {
var statearr_18932_20391 = state_18827__$1;
(statearr_18932_20391[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17280__auto__ = null;
var cljs$core$async$state_machine__17280__auto____0 = (function (){
var statearr_18933 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18933[(0)] = cljs$core$async$state_machine__17280__auto__);

(statearr_18933[(1)] = (1));

return statearr_18933;
});
var cljs$core$async$state_machine__17280__auto____1 = (function (state_18827){
while(true){
var ret_value__17281__auto__ = (function (){try{while(true){
var result__17282__auto__ = switch__17279__auto__(state_18827);
if(cljs.core.keyword_identical_QMARK_(result__17282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17282__auto__;
}
break;
}
}catch (e18934){var ex__17283__auto__ = e18934;
var statearr_18935_20392 = state_18827;
(statearr_18935_20392[(2)] = ex__17283__auto__);


if(cljs.core.seq((state_18827[(4)]))){
var statearr_18936_20396 = state_18827;
(statearr_18936_20396[(1)] = cljs.core.first((state_18827[(4)])));

} else {
throw ex__17283__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20397 = state_18827;
state_18827 = G__20397;
continue;
} else {
return ret_value__17281__auto__;
}
break;
}
});
cljs$core$async$state_machine__17280__auto__ = function(state_18827){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17280__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17280__auto____1.call(this,state_18827);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17280__auto____0;
cljs$core$async$state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17280__auto____1;
return cljs$core$async$state_machine__17280__auto__;
})()
})();
var state__17429__auto__ = (function (){var statearr_18937 = f__17428__auto__();
(statearr_18937[(6)] = c__17427__auto___20347);

return statearr_18937;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17429__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__18939 = arguments.length;
switch (G__18939) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__18943 = arguments.length;
switch (G__18943) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__18964 = arguments.length;
switch (G__18964) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__17427__auto___20414 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17428__auto__ = (function (){var switch__17279__auto__ = (function (state_19060){
var state_val_19061 = (state_19060[(1)]);
if((state_val_19061 === (7))){
var state_19060__$1 = state_19060;
var statearr_19063_20415 = state_19060__$1;
(statearr_19063_20415[(2)] = null);

(statearr_19063_20415[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19061 === (1))){
var state_19060__$1 = state_19060;
var statearr_19065_20416 = state_19060__$1;
(statearr_19065_20416[(2)] = null);

(statearr_19065_20416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19061 === (4))){
var inst_19001 = (state_19060[(7)]);
var inst_19002 = (state_19060[(8)]);
var inst_19004 = (inst_19002 < inst_19001);
var state_19060__$1 = state_19060;
if(cljs.core.truth_(inst_19004)){
var statearr_19066_20417 = state_19060__$1;
(statearr_19066_20417[(1)] = (6));

} else {
var statearr_19067_20418 = state_19060__$1;
(statearr_19067_20418[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19061 === (15))){
var inst_19043 = (state_19060[(9)]);
var inst_19048 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_19043);
var state_19060__$1 = state_19060;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19060__$1,(17),out,inst_19048);
} else {
if((state_val_19061 === (13))){
var inst_19043 = (state_19060[(9)]);
var inst_19043__$1 = (state_19060[(2)]);
var inst_19044 = cljs.core.some(cljs.core.nil_QMARK_,inst_19043__$1);
var state_19060__$1 = (function (){var statearr_19072 = state_19060;
(statearr_19072[(9)] = inst_19043__$1);

return statearr_19072;
})();
if(cljs.core.truth_(inst_19044)){
var statearr_19073_20419 = state_19060__$1;
(statearr_19073_20419[(1)] = (14));

} else {
var statearr_19077_20420 = state_19060__$1;
(statearr_19077_20420[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19061 === (6))){
var state_19060__$1 = state_19060;
var statearr_19079_20422 = state_19060__$1;
(statearr_19079_20422[(2)] = null);

(statearr_19079_20422[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19061 === (17))){
var inst_19050 = (state_19060[(2)]);
var state_19060__$1 = (function (){var statearr_19088 = state_19060;
(statearr_19088[(10)] = inst_19050);

return statearr_19088;
})();
var statearr_19090_20424 = state_19060__$1;
(statearr_19090_20424[(2)] = null);

(statearr_19090_20424[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19061 === (3))){
var inst_19055 = (state_19060[(2)]);
var state_19060__$1 = state_19060;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19060__$1,inst_19055);
} else {
if((state_val_19061 === (12))){
var _ = (function (){var statearr_19091 = state_19060;
(statearr_19091[(4)] = cljs.core.rest((state_19060[(4)])));

return statearr_19091;
})();
var state_19060__$1 = state_19060;
var ex19084 = (state_19060__$1[(2)]);
var statearr_19095_20426 = state_19060__$1;
(statearr_19095_20426[(5)] = ex19084);


if((ex19084 instanceof Object)){
var statearr_19097_20427 = state_19060__$1;
(statearr_19097_20427[(1)] = (11));

(statearr_19097_20427[(5)] = null);

} else {
throw ex19084;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19061 === (2))){
var inst_18999 = cljs.core.reset_BANG_(dctr,cnt);
var inst_19001 = cnt;
var inst_19002 = (0);
var state_19060__$1 = (function (){var statearr_19098 = state_19060;
(statearr_19098[(11)] = inst_18999);

(statearr_19098[(7)] = inst_19001);

(statearr_19098[(8)] = inst_19002);

return statearr_19098;
})();
var statearr_19099_20428 = state_19060__$1;
(statearr_19099_20428[(2)] = null);

(statearr_19099_20428[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19061 === (11))){
var inst_19017 = (state_19060[(2)]);
var inst_19019 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_19060__$1 = (function (){var statearr_19100 = state_19060;
(statearr_19100[(12)] = inst_19017);

return statearr_19100;
})();
var statearr_19101_20429 = state_19060__$1;
(statearr_19101_20429[(2)] = inst_19019);

(statearr_19101_20429[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19061 === (9))){
var inst_19002 = (state_19060[(8)]);
var _ = (function (){var statearr_19106 = state_19060;
(statearr_19106[(4)] = cljs.core.cons((12),(state_19060[(4)])));

return statearr_19106;
})();
var inst_19028 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_19002) : chs__$1.call(null,inst_19002));
var inst_19029 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_19002) : done.call(null,inst_19002));
var inst_19030 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_19028,inst_19029);
var ___$1 = (function (){var statearr_19107 = state_19060;
(statearr_19107[(4)] = cljs.core.rest((state_19060[(4)])));

return statearr_19107;
})();
var state_19060__$1 = state_19060;
var statearr_19108_20430 = state_19060__$1;
(statearr_19108_20430[(2)] = inst_19030);

(statearr_19108_20430[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19061 === (5))){
var inst_19041 = (state_19060[(2)]);
var state_19060__$1 = (function (){var statearr_19110 = state_19060;
(statearr_19110[(13)] = inst_19041);

return statearr_19110;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19060__$1,(13),dchan);
} else {
if((state_val_19061 === (14))){
var inst_19046 = cljs.core.async.close_BANG_(out);
var state_19060__$1 = state_19060;
var statearr_19111_20435 = state_19060__$1;
(statearr_19111_20435[(2)] = inst_19046);

(statearr_19111_20435[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19061 === (16))){
var inst_19053 = (state_19060[(2)]);
var state_19060__$1 = state_19060;
var statearr_19112_20436 = state_19060__$1;
(statearr_19112_20436[(2)] = inst_19053);

(statearr_19112_20436[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19061 === (10))){
var inst_19002 = (state_19060[(8)]);
var inst_19034 = (state_19060[(2)]);
var inst_19035 = (inst_19002 + (1));
var inst_19002__$1 = inst_19035;
var state_19060__$1 = (function (){var statearr_19113 = state_19060;
(statearr_19113[(14)] = inst_19034);

(statearr_19113[(8)] = inst_19002__$1);

return statearr_19113;
})();
var statearr_19114_20441 = state_19060__$1;
(statearr_19114_20441[(2)] = null);

(statearr_19114_20441[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19061 === (8))){
var inst_19039 = (state_19060[(2)]);
var state_19060__$1 = state_19060;
var statearr_19115_20442 = state_19060__$1;
(statearr_19115_20442[(2)] = inst_19039);

(statearr_19115_20442[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17280__auto__ = null;
var cljs$core$async$state_machine__17280__auto____0 = (function (){
var statearr_19116 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19116[(0)] = cljs$core$async$state_machine__17280__auto__);

(statearr_19116[(1)] = (1));

return statearr_19116;
});
var cljs$core$async$state_machine__17280__auto____1 = (function (state_19060){
while(true){
var ret_value__17281__auto__ = (function (){try{while(true){
var result__17282__auto__ = switch__17279__auto__(state_19060);
if(cljs.core.keyword_identical_QMARK_(result__17282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17282__auto__;
}
break;
}
}catch (e19117){var ex__17283__auto__ = e19117;
var statearr_19118_20443 = state_19060;
(statearr_19118_20443[(2)] = ex__17283__auto__);


if(cljs.core.seq((state_19060[(4)]))){
var statearr_19120_20444 = state_19060;
(statearr_19120_20444[(1)] = cljs.core.first((state_19060[(4)])));

} else {
throw ex__17283__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20449 = state_19060;
state_19060 = G__20449;
continue;
} else {
return ret_value__17281__auto__;
}
break;
}
});
cljs$core$async$state_machine__17280__auto__ = function(state_19060){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17280__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17280__auto____1.call(this,state_19060);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17280__auto____0;
cljs$core$async$state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17280__auto____1;
return cljs$core$async$state_machine__17280__auto__;
})()
})();
var state__17429__auto__ = (function (){var statearr_19121 = f__17428__auto__();
(statearr_19121[(6)] = c__17427__auto___20414);

return statearr_19121;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17429__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__19125 = arguments.length;
switch (G__19125) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17427__auto___20451 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17428__auto__ = (function (){var switch__17279__auto__ = (function (state_19157){
var state_val_19158 = (state_19157[(1)]);
if((state_val_19158 === (7))){
var inst_19137 = (state_19157[(7)]);
var inst_19136 = (state_19157[(8)]);
var inst_19136__$1 = (state_19157[(2)]);
var inst_19137__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19136__$1,(0),null);
var inst_19138 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19136__$1,(1),null);
var inst_19139 = (inst_19137__$1 == null);
var state_19157__$1 = (function (){var statearr_19159 = state_19157;
(statearr_19159[(9)] = inst_19138);

(statearr_19159[(7)] = inst_19137__$1);

(statearr_19159[(8)] = inst_19136__$1);

return statearr_19159;
})();
if(cljs.core.truth_(inst_19139)){
var statearr_19160_20452 = state_19157__$1;
(statearr_19160_20452[(1)] = (8));

} else {
var statearr_19161_20453 = state_19157__$1;
(statearr_19161_20453[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19158 === (1))){
var inst_19126 = cljs.core.vec(chs);
var inst_19127 = inst_19126;
var state_19157__$1 = (function (){var statearr_19162 = state_19157;
(statearr_19162[(10)] = inst_19127);

return statearr_19162;
})();
var statearr_19163_20454 = state_19157__$1;
(statearr_19163_20454[(2)] = null);

(statearr_19163_20454[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19158 === (4))){
var inst_19127 = (state_19157[(10)]);
var state_19157__$1 = state_19157;
return cljs.core.async.ioc_alts_BANG_(state_19157__$1,(7),inst_19127);
} else {
if((state_val_19158 === (6))){
var inst_19153 = (state_19157[(2)]);
var state_19157__$1 = state_19157;
var statearr_19164_20455 = state_19157__$1;
(statearr_19164_20455[(2)] = inst_19153);

(statearr_19164_20455[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19158 === (3))){
var inst_19155 = (state_19157[(2)]);
var state_19157__$1 = state_19157;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19157__$1,inst_19155);
} else {
if((state_val_19158 === (2))){
var inst_19127 = (state_19157[(10)]);
var inst_19129 = cljs.core.count(inst_19127);
var inst_19130 = (inst_19129 > (0));
var state_19157__$1 = state_19157;
if(cljs.core.truth_(inst_19130)){
var statearr_19166_20462 = state_19157__$1;
(statearr_19166_20462[(1)] = (4));

} else {
var statearr_19167_20463 = state_19157__$1;
(statearr_19167_20463[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19158 === (11))){
var inst_19127 = (state_19157[(10)]);
var inst_19146 = (state_19157[(2)]);
var tmp19165 = inst_19127;
var inst_19127__$1 = tmp19165;
var state_19157__$1 = (function (){var statearr_19168 = state_19157;
(statearr_19168[(11)] = inst_19146);

(statearr_19168[(10)] = inst_19127__$1);

return statearr_19168;
})();
var statearr_19169_20465 = state_19157__$1;
(statearr_19169_20465[(2)] = null);

(statearr_19169_20465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19158 === (9))){
var inst_19137 = (state_19157[(7)]);
var state_19157__$1 = state_19157;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19157__$1,(11),out,inst_19137);
} else {
if((state_val_19158 === (5))){
var inst_19151 = cljs.core.async.close_BANG_(out);
var state_19157__$1 = state_19157;
var statearr_19170_20466 = state_19157__$1;
(statearr_19170_20466[(2)] = inst_19151);

(statearr_19170_20466[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19158 === (10))){
var inst_19149 = (state_19157[(2)]);
var state_19157__$1 = state_19157;
var statearr_19171_20467 = state_19157__$1;
(statearr_19171_20467[(2)] = inst_19149);

(statearr_19171_20467[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19158 === (8))){
var inst_19138 = (state_19157[(9)]);
var inst_19137 = (state_19157[(7)]);
var inst_19136 = (state_19157[(8)]);
var inst_19127 = (state_19157[(10)]);
var inst_19141 = (function (){var cs = inst_19127;
var vec__19132 = inst_19136;
var v = inst_19137;
var c = inst_19138;
return (function (p1__19122_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__19122_SHARP_);
});
})();
var inst_19142 = cljs.core.filterv(inst_19141,inst_19127);
var inst_19127__$1 = inst_19142;
var state_19157__$1 = (function (){var statearr_19172 = state_19157;
(statearr_19172[(10)] = inst_19127__$1);

return statearr_19172;
})();
var statearr_19173_20468 = state_19157__$1;
(statearr_19173_20468[(2)] = null);

(statearr_19173_20468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17280__auto__ = null;
var cljs$core$async$state_machine__17280__auto____0 = (function (){
var statearr_19174 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19174[(0)] = cljs$core$async$state_machine__17280__auto__);

(statearr_19174[(1)] = (1));

return statearr_19174;
});
var cljs$core$async$state_machine__17280__auto____1 = (function (state_19157){
while(true){
var ret_value__17281__auto__ = (function (){try{while(true){
var result__17282__auto__ = switch__17279__auto__(state_19157);
if(cljs.core.keyword_identical_QMARK_(result__17282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17282__auto__;
}
break;
}
}catch (e19175){var ex__17283__auto__ = e19175;
var statearr_19176_20470 = state_19157;
(statearr_19176_20470[(2)] = ex__17283__auto__);


if(cljs.core.seq((state_19157[(4)]))){
var statearr_19177_20471 = state_19157;
(statearr_19177_20471[(1)] = cljs.core.first((state_19157[(4)])));

} else {
throw ex__17283__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20472 = state_19157;
state_19157 = G__20472;
continue;
} else {
return ret_value__17281__auto__;
}
break;
}
});
cljs$core$async$state_machine__17280__auto__ = function(state_19157){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17280__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17280__auto____1.call(this,state_19157);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17280__auto____0;
cljs$core$async$state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17280__auto____1;
return cljs$core$async$state_machine__17280__auto__;
})()
})();
var state__17429__auto__ = (function (){var statearr_19178 = f__17428__auto__();
(statearr_19178[(6)] = c__17427__auto___20451);

return statearr_19178;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17429__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__19184 = arguments.length;
switch (G__19184) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17427__auto___20478 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17428__auto__ = (function (){var switch__17279__auto__ = (function (state_19209){
var state_val_19210 = (state_19209[(1)]);
if((state_val_19210 === (7))){
var inst_19190 = (state_19209[(7)]);
var inst_19190__$1 = (state_19209[(2)]);
var inst_19191 = (inst_19190__$1 == null);
var inst_19192 = cljs.core.not(inst_19191);
var state_19209__$1 = (function (){var statearr_19212 = state_19209;
(statearr_19212[(7)] = inst_19190__$1);

return statearr_19212;
})();
if(inst_19192){
var statearr_19213_20479 = state_19209__$1;
(statearr_19213_20479[(1)] = (8));

} else {
var statearr_19214_20480 = state_19209__$1;
(statearr_19214_20480[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19210 === (1))){
var inst_19185 = (0);
var state_19209__$1 = (function (){var statearr_19215 = state_19209;
(statearr_19215[(8)] = inst_19185);

return statearr_19215;
})();
var statearr_19216_20481 = state_19209__$1;
(statearr_19216_20481[(2)] = null);

(statearr_19216_20481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19210 === (4))){
var state_19209__$1 = state_19209;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19209__$1,(7),ch);
} else {
if((state_val_19210 === (6))){
var inst_19204 = (state_19209[(2)]);
var state_19209__$1 = state_19209;
var statearr_19217_20482 = state_19209__$1;
(statearr_19217_20482[(2)] = inst_19204);

(statearr_19217_20482[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19210 === (3))){
var inst_19206 = (state_19209[(2)]);
var inst_19207 = cljs.core.async.close_BANG_(out);
var state_19209__$1 = (function (){var statearr_19218 = state_19209;
(statearr_19218[(9)] = inst_19206);

return statearr_19218;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19209__$1,inst_19207);
} else {
if((state_val_19210 === (2))){
var inst_19185 = (state_19209[(8)]);
var inst_19187 = (inst_19185 < n);
var state_19209__$1 = state_19209;
if(cljs.core.truth_(inst_19187)){
var statearr_19219_20483 = state_19209__$1;
(statearr_19219_20483[(1)] = (4));

} else {
var statearr_19220_20484 = state_19209__$1;
(statearr_19220_20484[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19210 === (11))){
var inst_19185 = (state_19209[(8)]);
var inst_19195 = (state_19209[(2)]);
var inst_19196 = (inst_19185 + (1));
var inst_19185__$1 = inst_19196;
var state_19209__$1 = (function (){var statearr_19222 = state_19209;
(statearr_19222[(10)] = inst_19195);

(statearr_19222[(8)] = inst_19185__$1);

return statearr_19222;
})();
var statearr_19224_20485 = state_19209__$1;
(statearr_19224_20485[(2)] = null);

(statearr_19224_20485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19210 === (9))){
var state_19209__$1 = state_19209;
var statearr_19225_20486 = state_19209__$1;
(statearr_19225_20486[(2)] = null);

(statearr_19225_20486[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19210 === (5))){
var state_19209__$1 = state_19209;
var statearr_19226_20487 = state_19209__$1;
(statearr_19226_20487[(2)] = null);

(statearr_19226_20487[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19210 === (10))){
var inst_19200 = (state_19209[(2)]);
var state_19209__$1 = state_19209;
var statearr_19227_20488 = state_19209__$1;
(statearr_19227_20488[(2)] = inst_19200);

(statearr_19227_20488[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19210 === (8))){
var inst_19190 = (state_19209[(7)]);
var state_19209__$1 = state_19209;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19209__$1,(11),out,inst_19190);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17280__auto__ = null;
var cljs$core$async$state_machine__17280__auto____0 = (function (){
var statearr_19232 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19232[(0)] = cljs$core$async$state_machine__17280__auto__);

(statearr_19232[(1)] = (1));

return statearr_19232;
});
var cljs$core$async$state_machine__17280__auto____1 = (function (state_19209){
while(true){
var ret_value__17281__auto__ = (function (){try{while(true){
var result__17282__auto__ = switch__17279__auto__(state_19209);
if(cljs.core.keyword_identical_QMARK_(result__17282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17282__auto__;
}
break;
}
}catch (e19233){var ex__17283__auto__ = e19233;
var statearr_19234_20494 = state_19209;
(statearr_19234_20494[(2)] = ex__17283__auto__);


if(cljs.core.seq((state_19209[(4)]))){
var statearr_19235_20495 = state_19209;
(statearr_19235_20495[(1)] = cljs.core.first((state_19209[(4)])));

} else {
throw ex__17283__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20499 = state_19209;
state_19209 = G__20499;
continue;
} else {
return ret_value__17281__auto__;
}
break;
}
});
cljs$core$async$state_machine__17280__auto__ = function(state_19209){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17280__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17280__auto____1.call(this,state_19209);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17280__auto____0;
cljs$core$async$state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17280__auto____1;
return cljs$core$async$state_machine__17280__auto__;
})()
})();
var state__17429__auto__ = (function (){var statearr_19237 = f__17428__auto__();
(statearr_19237[(6)] = c__17427__auto___20478);

return statearr_19237;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17429__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19240 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19240 = (function (f,ch,meta19241){
this.f = f;
this.ch = ch;
this.meta19241 = meta19241;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19240.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19242,meta19241__$1){
var self__ = this;
var _19242__$1 = this;
return (new cljs.core.async.t_cljs$core$async19240(self__.f,self__.ch,meta19241__$1));
}));

(cljs.core.async.t_cljs$core$async19240.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19242){
var self__ = this;
var _19242__$1 = this;
return self__.meta19241;
}));

(cljs.core.async.t_cljs$core$async19240.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19240.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19240.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19240.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19240.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19246 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19246 = (function (f,ch,meta19241,_,fn1,meta19247){
this.f = f;
this.ch = ch;
this.meta19241 = meta19241;
this._ = _;
this.fn1 = fn1;
this.meta19247 = meta19247;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19246.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19248,meta19247__$1){
var self__ = this;
var _19248__$1 = this;
return (new cljs.core.async.t_cljs$core$async19246(self__.f,self__.ch,self__.meta19241,self__._,self__.fn1,meta19247__$1));
}));

(cljs.core.async.t_cljs$core$async19246.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19248){
var self__ = this;
var _19248__$1 = this;
return self__.meta19247;
}));

(cljs.core.async.t_cljs$core$async19246.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19246.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async19246.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async19246.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__19238_SHARP_){
var G__19252 = (((p1__19238_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__19238_SHARP_) : self__.f.call(null,p1__19238_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__19252) : f1.call(null,G__19252));
});
}));

(cljs.core.async.t_cljs$core$async19246.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19241","meta19241",759774602,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async19240","cljs.core.async/t_cljs$core$async19240",-1789178105,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta19247","meta19247",-769698665,null)], null);
}));

(cljs.core.async.t_cljs$core$async19246.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19246.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19246");

(cljs.core.async.t_cljs$core$async19246.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async19246");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19246.
 */
cljs.core.async.__GT_t_cljs$core$async19246 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19246(f__$1,ch__$1,meta19241__$1,___$2,fn1__$1,meta19247){
return (new cljs.core.async.t_cljs$core$async19246(f__$1,ch__$1,meta19241__$1,___$2,fn1__$1,meta19247));
});

}

return (new cljs.core.async.t_cljs$core$async19246(self__.f,self__.ch,self__.meta19241,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__19272 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__19272) : self__.f.call(null,G__19272));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async19240.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19240.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async19240.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19241","meta19241",759774602,null)], null);
}));

(cljs.core.async.t_cljs$core$async19240.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19240.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19240");

(cljs.core.async.t_cljs$core$async19240.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async19240");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19240.
 */
cljs.core.async.__GT_t_cljs$core$async19240 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19240(f__$1,ch__$1,meta19241){
return (new cljs.core.async.t_cljs$core$async19240(f__$1,ch__$1,meta19241));
});

}

return (new cljs.core.async.t_cljs$core$async19240(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19283 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19283 = (function (f,ch,meta19284){
this.f = f;
this.ch = ch;
this.meta19284 = meta19284;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19283.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19285,meta19284__$1){
var self__ = this;
var _19285__$1 = this;
return (new cljs.core.async.t_cljs$core$async19283(self__.f,self__.ch,meta19284__$1));
}));

(cljs.core.async.t_cljs$core$async19283.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19285){
var self__ = this;
var _19285__$1 = this;
return self__.meta19284;
}));

(cljs.core.async.t_cljs$core$async19283.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19283.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19283.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19283.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async19283.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19283.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async19283.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19284","meta19284",1943654129,null)], null);
}));

(cljs.core.async.t_cljs$core$async19283.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19283.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19283");

(cljs.core.async.t_cljs$core$async19283.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async19283");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19283.
 */
cljs.core.async.__GT_t_cljs$core$async19283 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async19283(f__$1,ch__$1,meta19284){
return (new cljs.core.async.t_cljs$core$async19283(f__$1,ch__$1,meta19284));
});

}

return (new cljs.core.async.t_cljs$core$async19283(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19293 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19293 = (function (p,ch,meta19294){
this.p = p;
this.ch = ch;
this.meta19294 = meta19294;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19293.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19295,meta19294__$1){
var self__ = this;
var _19295__$1 = this;
return (new cljs.core.async.t_cljs$core$async19293(self__.p,self__.ch,meta19294__$1));
}));

(cljs.core.async.t_cljs$core$async19293.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19295){
var self__ = this;
var _19295__$1 = this;
return self__.meta19294;
}));

(cljs.core.async.t_cljs$core$async19293.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19293.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19293.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19293.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19293.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async19293.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19293.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async19293.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19294","meta19294",2024270393,null)], null);
}));

(cljs.core.async.t_cljs$core$async19293.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19293.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19293");

(cljs.core.async.t_cljs$core$async19293.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async19293");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19293.
 */
cljs.core.async.__GT_t_cljs$core$async19293 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async19293(p__$1,ch__$1,meta19294){
return (new cljs.core.async.t_cljs$core$async19293(p__$1,ch__$1,meta19294));
});

}

return (new cljs.core.async.t_cljs$core$async19293(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__19305 = arguments.length;
switch (G__19305) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17427__auto___20515 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17428__auto__ = (function (){var switch__17279__auto__ = (function (state_19326){
var state_val_19327 = (state_19326[(1)]);
if((state_val_19327 === (7))){
var inst_19322 = (state_19326[(2)]);
var state_19326__$1 = state_19326;
var statearr_19329_20517 = state_19326__$1;
(statearr_19329_20517[(2)] = inst_19322);

(statearr_19329_20517[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19327 === (1))){
var state_19326__$1 = state_19326;
var statearr_19331_20521 = state_19326__$1;
(statearr_19331_20521[(2)] = null);

(statearr_19331_20521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19327 === (4))){
var inst_19308 = (state_19326[(7)]);
var inst_19308__$1 = (state_19326[(2)]);
var inst_19309 = (inst_19308__$1 == null);
var state_19326__$1 = (function (){var statearr_19332 = state_19326;
(statearr_19332[(7)] = inst_19308__$1);

return statearr_19332;
})();
if(cljs.core.truth_(inst_19309)){
var statearr_19333_20522 = state_19326__$1;
(statearr_19333_20522[(1)] = (5));

} else {
var statearr_19334_20523 = state_19326__$1;
(statearr_19334_20523[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19327 === (6))){
var inst_19308 = (state_19326[(7)]);
var inst_19313 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_19308) : p.call(null,inst_19308));
var state_19326__$1 = state_19326;
if(cljs.core.truth_(inst_19313)){
var statearr_19335_20524 = state_19326__$1;
(statearr_19335_20524[(1)] = (8));

} else {
var statearr_19337_20525 = state_19326__$1;
(statearr_19337_20525[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19327 === (3))){
var inst_19324 = (state_19326[(2)]);
var state_19326__$1 = state_19326;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19326__$1,inst_19324);
} else {
if((state_val_19327 === (2))){
var state_19326__$1 = state_19326;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19326__$1,(4),ch);
} else {
if((state_val_19327 === (11))){
var inst_19316 = (state_19326[(2)]);
var state_19326__$1 = state_19326;
var statearr_19342_20526 = state_19326__$1;
(statearr_19342_20526[(2)] = inst_19316);

(statearr_19342_20526[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19327 === (9))){
var state_19326__$1 = state_19326;
var statearr_19343_20527 = state_19326__$1;
(statearr_19343_20527[(2)] = null);

(statearr_19343_20527[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19327 === (5))){
var inst_19311 = cljs.core.async.close_BANG_(out);
var state_19326__$1 = state_19326;
var statearr_19344_20528 = state_19326__$1;
(statearr_19344_20528[(2)] = inst_19311);

(statearr_19344_20528[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19327 === (10))){
var inst_19319 = (state_19326[(2)]);
var state_19326__$1 = (function (){var statearr_19345 = state_19326;
(statearr_19345[(8)] = inst_19319);

return statearr_19345;
})();
var statearr_19346_20529 = state_19326__$1;
(statearr_19346_20529[(2)] = null);

(statearr_19346_20529[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19327 === (8))){
var inst_19308 = (state_19326[(7)]);
var state_19326__$1 = state_19326;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19326__$1,(11),out,inst_19308);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17280__auto__ = null;
var cljs$core$async$state_machine__17280__auto____0 = (function (){
var statearr_19347 = [null,null,null,null,null,null,null,null,null];
(statearr_19347[(0)] = cljs$core$async$state_machine__17280__auto__);

(statearr_19347[(1)] = (1));

return statearr_19347;
});
var cljs$core$async$state_machine__17280__auto____1 = (function (state_19326){
while(true){
var ret_value__17281__auto__ = (function (){try{while(true){
var result__17282__auto__ = switch__17279__auto__(state_19326);
if(cljs.core.keyword_identical_QMARK_(result__17282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17282__auto__;
}
break;
}
}catch (e19348){var ex__17283__auto__ = e19348;
var statearr_19349_20530 = state_19326;
(statearr_19349_20530[(2)] = ex__17283__auto__);


if(cljs.core.seq((state_19326[(4)]))){
var statearr_19350_20531 = state_19326;
(statearr_19350_20531[(1)] = cljs.core.first((state_19326[(4)])));

} else {
throw ex__17283__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20532 = state_19326;
state_19326 = G__20532;
continue;
} else {
return ret_value__17281__auto__;
}
break;
}
});
cljs$core$async$state_machine__17280__auto__ = function(state_19326){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17280__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17280__auto____1.call(this,state_19326);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17280__auto____0;
cljs$core$async$state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17280__auto____1;
return cljs$core$async$state_machine__17280__auto__;
})()
})();
var state__17429__auto__ = (function (){var statearr_19351 = f__17428__auto__();
(statearr_19351[(6)] = c__17427__auto___20515);

return statearr_19351;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17429__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__19353 = arguments.length;
switch (G__19353) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__17427__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17428__auto__ = (function (){var switch__17279__auto__ = (function (state_19422){
var state_val_19423 = (state_19422[(1)]);
if((state_val_19423 === (7))){
var inst_19418 = (state_19422[(2)]);
var state_19422__$1 = state_19422;
var statearr_19426_20534 = state_19422__$1;
(statearr_19426_20534[(2)] = inst_19418);

(statearr_19426_20534[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19423 === (20))){
var inst_19386 = (state_19422[(7)]);
var inst_19399 = (state_19422[(2)]);
var inst_19400 = cljs.core.next(inst_19386);
var inst_19372 = inst_19400;
var inst_19373 = null;
var inst_19374 = (0);
var inst_19375 = (0);
var state_19422__$1 = (function (){var statearr_19430 = state_19422;
(statearr_19430[(8)] = inst_19372);

(statearr_19430[(9)] = inst_19374);

(statearr_19430[(10)] = inst_19373);

(statearr_19430[(11)] = inst_19375);

(statearr_19430[(12)] = inst_19399);

return statearr_19430;
})();
var statearr_19431_20536 = state_19422__$1;
(statearr_19431_20536[(2)] = null);

(statearr_19431_20536[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19423 === (1))){
var state_19422__$1 = state_19422;
var statearr_19432_20537 = state_19422__$1;
(statearr_19432_20537[(2)] = null);

(statearr_19432_20537[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19423 === (4))){
var inst_19360 = (state_19422[(13)]);
var inst_19360__$1 = (state_19422[(2)]);
var inst_19361 = (inst_19360__$1 == null);
var state_19422__$1 = (function (){var statearr_19433 = state_19422;
(statearr_19433[(13)] = inst_19360__$1);

return statearr_19433;
})();
if(cljs.core.truth_(inst_19361)){
var statearr_19434_20538 = state_19422__$1;
(statearr_19434_20538[(1)] = (5));

} else {
var statearr_19435_20542 = state_19422__$1;
(statearr_19435_20542[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19423 === (15))){
var state_19422__$1 = state_19422;
var statearr_19439_20544 = state_19422__$1;
(statearr_19439_20544[(2)] = null);

(statearr_19439_20544[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19423 === (21))){
var state_19422__$1 = state_19422;
var statearr_19440_20545 = state_19422__$1;
(statearr_19440_20545[(2)] = null);

(statearr_19440_20545[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19423 === (13))){
var inst_19372 = (state_19422[(8)]);
var inst_19374 = (state_19422[(9)]);
var inst_19373 = (state_19422[(10)]);
var inst_19375 = (state_19422[(11)]);
var inst_19382 = (state_19422[(2)]);
var inst_19383 = (inst_19375 + (1));
var tmp19436 = inst_19372;
var tmp19437 = inst_19374;
var tmp19438 = inst_19373;
var inst_19372__$1 = tmp19436;
var inst_19373__$1 = tmp19438;
var inst_19374__$1 = tmp19437;
var inst_19375__$1 = inst_19383;
var state_19422__$1 = (function (){var statearr_19441 = state_19422;
(statearr_19441[(8)] = inst_19372__$1);

(statearr_19441[(9)] = inst_19374__$1);

(statearr_19441[(10)] = inst_19373__$1);

(statearr_19441[(11)] = inst_19375__$1);

(statearr_19441[(14)] = inst_19382);

return statearr_19441;
})();
var statearr_19442_20548 = state_19422__$1;
(statearr_19442_20548[(2)] = null);

(statearr_19442_20548[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19423 === (22))){
var state_19422__$1 = state_19422;
var statearr_19443_20549 = state_19422__$1;
(statearr_19443_20549[(2)] = null);

(statearr_19443_20549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19423 === (6))){
var inst_19360 = (state_19422[(13)]);
var inst_19369 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_19360) : f.call(null,inst_19360));
var inst_19370 = cljs.core.seq(inst_19369);
var inst_19372 = inst_19370;
var inst_19373 = null;
var inst_19374 = (0);
var inst_19375 = (0);
var state_19422__$1 = (function (){var statearr_19444 = state_19422;
(statearr_19444[(8)] = inst_19372);

(statearr_19444[(9)] = inst_19374);

(statearr_19444[(10)] = inst_19373);

(statearr_19444[(11)] = inst_19375);

return statearr_19444;
})();
var statearr_19445_20550 = state_19422__$1;
(statearr_19445_20550[(2)] = null);

(statearr_19445_20550[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19423 === (17))){
var inst_19386 = (state_19422[(7)]);
var inst_19391 = cljs.core.chunk_first(inst_19386);
var inst_19393 = cljs.core.chunk_rest(inst_19386);
var inst_19394 = cljs.core.count(inst_19391);
var inst_19372 = inst_19393;
var inst_19373 = inst_19391;
var inst_19374 = inst_19394;
var inst_19375 = (0);
var state_19422__$1 = (function (){var statearr_19450 = state_19422;
(statearr_19450[(8)] = inst_19372);

(statearr_19450[(9)] = inst_19374);

(statearr_19450[(10)] = inst_19373);

(statearr_19450[(11)] = inst_19375);

return statearr_19450;
})();
var statearr_19451_20551 = state_19422__$1;
(statearr_19451_20551[(2)] = null);

(statearr_19451_20551[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19423 === (3))){
var inst_19420 = (state_19422[(2)]);
var state_19422__$1 = state_19422;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19422__$1,inst_19420);
} else {
if((state_val_19423 === (12))){
var inst_19408 = (state_19422[(2)]);
var state_19422__$1 = state_19422;
var statearr_19452_20552 = state_19422__$1;
(statearr_19452_20552[(2)] = inst_19408);

(statearr_19452_20552[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19423 === (2))){
var state_19422__$1 = state_19422;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19422__$1,(4),in$);
} else {
if((state_val_19423 === (23))){
var inst_19416 = (state_19422[(2)]);
var state_19422__$1 = state_19422;
var statearr_19457_20553 = state_19422__$1;
(statearr_19457_20553[(2)] = inst_19416);

(statearr_19457_20553[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19423 === (19))){
var inst_19403 = (state_19422[(2)]);
var state_19422__$1 = state_19422;
var statearr_19458_20555 = state_19422__$1;
(statearr_19458_20555[(2)] = inst_19403);

(statearr_19458_20555[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19423 === (11))){
var inst_19372 = (state_19422[(8)]);
var inst_19386 = (state_19422[(7)]);
var inst_19386__$1 = cljs.core.seq(inst_19372);
var state_19422__$1 = (function (){var statearr_19459 = state_19422;
(statearr_19459[(7)] = inst_19386__$1);

return statearr_19459;
})();
if(inst_19386__$1){
var statearr_19460_20556 = state_19422__$1;
(statearr_19460_20556[(1)] = (14));

} else {
var statearr_19461_20557 = state_19422__$1;
(statearr_19461_20557[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19423 === (9))){
var inst_19410 = (state_19422[(2)]);
var inst_19411 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_19422__$1 = (function (){var statearr_19462 = state_19422;
(statearr_19462[(15)] = inst_19410);

return statearr_19462;
})();
if(cljs.core.truth_(inst_19411)){
var statearr_19463_20558 = state_19422__$1;
(statearr_19463_20558[(1)] = (21));

} else {
var statearr_19464_20559 = state_19422__$1;
(statearr_19464_20559[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19423 === (5))){
var inst_19363 = cljs.core.async.close_BANG_(out);
var state_19422__$1 = state_19422;
var statearr_19465_20560 = state_19422__$1;
(statearr_19465_20560[(2)] = inst_19363);

(statearr_19465_20560[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19423 === (14))){
var inst_19386 = (state_19422[(7)]);
var inst_19389 = cljs.core.chunked_seq_QMARK_(inst_19386);
var state_19422__$1 = state_19422;
if(inst_19389){
var statearr_19466_20561 = state_19422__$1;
(statearr_19466_20561[(1)] = (17));

} else {
var statearr_19467_20562 = state_19422__$1;
(statearr_19467_20562[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19423 === (16))){
var inst_19406 = (state_19422[(2)]);
var state_19422__$1 = state_19422;
var statearr_19468_20563 = state_19422__$1;
(statearr_19468_20563[(2)] = inst_19406);

(statearr_19468_20563[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19423 === (10))){
var inst_19373 = (state_19422[(10)]);
var inst_19375 = (state_19422[(11)]);
var inst_19380 = cljs.core._nth(inst_19373,inst_19375);
var state_19422__$1 = state_19422;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19422__$1,(13),out,inst_19380);
} else {
if((state_val_19423 === (18))){
var inst_19386 = (state_19422[(7)]);
var inst_19397 = cljs.core.first(inst_19386);
var state_19422__$1 = state_19422;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19422__$1,(20),out,inst_19397);
} else {
if((state_val_19423 === (8))){
var inst_19374 = (state_19422[(9)]);
var inst_19375 = (state_19422[(11)]);
var inst_19377 = (inst_19375 < inst_19374);
var inst_19378 = inst_19377;
var state_19422__$1 = state_19422;
if(cljs.core.truth_(inst_19378)){
var statearr_19469_20564 = state_19422__$1;
(statearr_19469_20564[(1)] = (10));

} else {
var statearr_19470_20565 = state_19422__$1;
(statearr_19470_20565[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__17280__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__17280__auto____0 = (function (){
var statearr_19473 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19473[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__17280__auto__);

(statearr_19473[(1)] = (1));

return statearr_19473;
});
var cljs$core$async$mapcat_STAR__$_state_machine__17280__auto____1 = (function (state_19422){
while(true){
var ret_value__17281__auto__ = (function (){try{while(true){
var result__17282__auto__ = switch__17279__auto__(state_19422);
if(cljs.core.keyword_identical_QMARK_(result__17282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17282__auto__;
}
break;
}
}catch (e19474){var ex__17283__auto__ = e19474;
var statearr_19475_20566 = state_19422;
(statearr_19475_20566[(2)] = ex__17283__auto__);


if(cljs.core.seq((state_19422[(4)]))){
var statearr_19476_20567 = state_19422;
(statearr_19476_20567[(1)] = cljs.core.first((state_19422[(4)])));

} else {
throw ex__17283__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20568 = state_19422;
state_19422 = G__20568;
continue;
} else {
return ret_value__17281__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__17280__auto__ = function(state_19422){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__17280__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__17280__auto____1.call(this,state_19422);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__17280__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__17280__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__17280__auto__;
})()
})();
var state__17429__auto__ = (function (){var statearr_19477 = f__17428__auto__();
(statearr_19477[(6)] = c__17427__auto__);

return statearr_19477;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17429__auto__);
}));

return c__17427__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__19482 = arguments.length;
switch (G__19482) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__19484 = arguments.length;
switch (G__19484) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__19486 = arguments.length;
switch (G__19486) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17427__auto___20584 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17428__auto__ = (function (){var switch__17279__auto__ = (function (state_19510){
var state_val_19511 = (state_19510[(1)]);
if((state_val_19511 === (7))){
var inst_19505 = (state_19510[(2)]);
var state_19510__$1 = state_19510;
var statearr_19512_20589 = state_19510__$1;
(statearr_19512_20589[(2)] = inst_19505);

(statearr_19512_20589[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19511 === (1))){
var inst_19487 = null;
var state_19510__$1 = (function (){var statearr_19513 = state_19510;
(statearr_19513[(7)] = inst_19487);

return statearr_19513;
})();
var statearr_19514_20590 = state_19510__$1;
(statearr_19514_20590[(2)] = null);

(statearr_19514_20590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19511 === (4))){
var inst_19490 = (state_19510[(8)]);
var inst_19490__$1 = (state_19510[(2)]);
var inst_19491 = (inst_19490__$1 == null);
var inst_19492 = cljs.core.not(inst_19491);
var state_19510__$1 = (function (){var statearr_19515 = state_19510;
(statearr_19515[(8)] = inst_19490__$1);

return statearr_19515;
})();
if(inst_19492){
var statearr_19516_20592 = state_19510__$1;
(statearr_19516_20592[(1)] = (5));

} else {
var statearr_19517_20593 = state_19510__$1;
(statearr_19517_20593[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19511 === (6))){
var state_19510__$1 = state_19510;
var statearr_19518_20595 = state_19510__$1;
(statearr_19518_20595[(2)] = null);

(statearr_19518_20595[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19511 === (3))){
var inst_19507 = (state_19510[(2)]);
var inst_19508 = cljs.core.async.close_BANG_(out);
var state_19510__$1 = (function (){var statearr_19519 = state_19510;
(statearr_19519[(9)] = inst_19507);

return statearr_19519;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19510__$1,inst_19508);
} else {
if((state_val_19511 === (2))){
var state_19510__$1 = state_19510;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19510__$1,(4),ch);
} else {
if((state_val_19511 === (11))){
var inst_19490 = (state_19510[(8)]);
var inst_19499 = (state_19510[(2)]);
var inst_19487 = inst_19490;
var state_19510__$1 = (function (){var statearr_19520 = state_19510;
(statearr_19520[(10)] = inst_19499);

(statearr_19520[(7)] = inst_19487);

return statearr_19520;
})();
var statearr_19521_20596 = state_19510__$1;
(statearr_19521_20596[(2)] = null);

(statearr_19521_20596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19511 === (9))){
var inst_19490 = (state_19510[(8)]);
var state_19510__$1 = state_19510;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19510__$1,(11),out,inst_19490);
} else {
if((state_val_19511 === (5))){
var inst_19487 = (state_19510[(7)]);
var inst_19490 = (state_19510[(8)]);
var inst_19494 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19490,inst_19487);
var state_19510__$1 = state_19510;
if(inst_19494){
var statearr_19523_20597 = state_19510__$1;
(statearr_19523_20597[(1)] = (8));

} else {
var statearr_19524_20598 = state_19510__$1;
(statearr_19524_20598[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19511 === (10))){
var inst_19502 = (state_19510[(2)]);
var state_19510__$1 = state_19510;
var statearr_19525_20599 = state_19510__$1;
(statearr_19525_20599[(2)] = inst_19502);

(statearr_19525_20599[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19511 === (8))){
var inst_19487 = (state_19510[(7)]);
var tmp19522 = inst_19487;
var inst_19487__$1 = tmp19522;
var state_19510__$1 = (function (){var statearr_19526 = state_19510;
(statearr_19526[(7)] = inst_19487__$1);

return statearr_19526;
})();
var statearr_19527_20600 = state_19510__$1;
(statearr_19527_20600[(2)] = null);

(statearr_19527_20600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17280__auto__ = null;
var cljs$core$async$state_machine__17280__auto____0 = (function (){
var statearr_19529 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19529[(0)] = cljs$core$async$state_machine__17280__auto__);

(statearr_19529[(1)] = (1));

return statearr_19529;
});
var cljs$core$async$state_machine__17280__auto____1 = (function (state_19510){
while(true){
var ret_value__17281__auto__ = (function (){try{while(true){
var result__17282__auto__ = switch__17279__auto__(state_19510);
if(cljs.core.keyword_identical_QMARK_(result__17282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17282__auto__;
}
break;
}
}catch (e19530){var ex__17283__auto__ = e19530;
var statearr_19531_20601 = state_19510;
(statearr_19531_20601[(2)] = ex__17283__auto__);


if(cljs.core.seq((state_19510[(4)]))){
var statearr_19532_20602 = state_19510;
(statearr_19532_20602[(1)] = cljs.core.first((state_19510[(4)])));

} else {
throw ex__17283__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20603 = state_19510;
state_19510 = G__20603;
continue;
} else {
return ret_value__17281__auto__;
}
break;
}
});
cljs$core$async$state_machine__17280__auto__ = function(state_19510){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17280__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17280__auto____1.call(this,state_19510);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17280__auto____0;
cljs$core$async$state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17280__auto____1;
return cljs$core$async$state_machine__17280__auto__;
})()
})();
var state__17429__auto__ = (function (){var statearr_19533 = f__17428__auto__();
(statearr_19533[(6)] = c__17427__auto___20584);

return statearr_19533;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17429__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__19535 = arguments.length;
switch (G__19535) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17427__auto___20605 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17428__auto__ = (function (){var switch__17279__auto__ = (function (state_19577){
var state_val_19578 = (state_19577[(1)]);
if((state_val_19578 === (7))){
var inst_19572 = (state_19577[(2)]);
var state_19577__$1 = state_19577;
var statearr_19582_20606 = state_19577__$1;
(statearr_19582_20606[(2)] = inst_19572);

(statearr_19582_20606[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19578 === (1))){
var inst_19539 = (new Array(n));
var inst_19540 = inst_19539;
var inst_19541 = (0);
var state_19577__$1 = (function (){var statearr_19583 = state_19577;
(statearr_19583[(7)] = inst_19540);

(statearr_19583[(8)] = inst_19541);

return statearr_19583;
})();
var statearr_19584_20607 = state_19577__$1;
(statearr_19584_20607[(2)] = null);

(statearr_19584_20607[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19578 === (4))){
var inst_19544 = (state_19577[(9)]);
var inst_19544__$1 = (state_19577[(2)]);
var inst_19545 = (inst_19544__$1 == null);
var inst_19546 = cljs.core.not(inst_19545);
var state_19577__$1 = (function (){var statearr_19585 = state_19577;
(statearr_19585[(9)] = inst_19544__$1);

return statearr_19585;
})();
if(inst_19546){
var statearr_19586_20608 = state_19577__$1;
(statearr_19586_20608[(1)] = (5));

} else {
var statearr_19587_20609 = state_19577__$1;
(statearr_19587_20609[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19578 === (15))){
var inst_19566 = (state_19577[(2)]);
var state_19577__$1 = state_19577;
var statearr_19588_20610 = state_19577__$1;
(statearr_19588_20610[(2)] = inst_19566);

(statearr_19588_20610[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19578 === (13))){
var state_19577__$1 = state_19577;
var statearr_19589_20611 = state_19577__$1;
(statearr_19589_20611[(2)] = null);

(statearr_19589_20611[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19578 === (6))){
var inst_19541 = (state_19577[(8)]);
var inst_19562 = (inst_19541 > (0));
var state_19577__$1 = state_19577;
if(cljs.core.truth_(inst_19562)){
var statearr_19590_20612 = state_19577__$1;
(statearr_19590_20612[(1)] = (12));

} else {
var statearr_19591_20613 = state_19577__$1;
(statearr_19591_20613[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19578 === (3))){
var inst_19574 = (state_19577[(2)]);
var state_19577__$1 = state_19577;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19577__$1,inst_19574);
} else {
if((state_val_19578 === (12))){
var inst_19540 = (state_19577[(7)]);
var inst_19564 = cljs.core.vec(inst_19540);
var state_19577__$1 = state_19577;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19577__$1,(15),out,inst_19564);
} else {
if((state_val_19578 === (2))){
var state_19577__$1 = state_19577;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19577__$1,(4),ch);
} else {
if((state_val_19578 === (11))){
var inst_19556 = (state_19577[(2)]);
var inst_19557 = (new Array(n));
var inst_19540 = inst_19557;
var inst_19541 = (0);
var state_19577__$1 = (function (){var statearr_19592 = state_19577;
(statearr_19592[(10)] = inst_19556);

(statearr_19592[(7)] = inst_19540);

(statearr_19592[(8)] = inst_19541);

return statearr_19592;
})();
var statearr_19593_20614 = state_19577__$1;
(statearr_19593_20614[(2)] = null);

(statearr_19593_20614[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19578 === (9))){
var inst_19540 = (state_19577[(7)]);
var inst_19554 = cljs.core.vec(inst_19540);
var state_19577__$1 = state_19577;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19577__$1,(11),out,inst_19554);
} else {
if((state_val_19578 === (5))){
var inst_19544 = (state_19577[(9)]);
var inst_19540 = (state_19577[(7)]);
var inst_19541 = (state_19577[(8)]);
var inst_19549 = (state_19577[(11)]);
var inst_19548 = (inst_19540[inst_19541] = inst_19544);
var inst_19549__$1 = (inst_19541 + (1));
var inst_19550 = (inst_19549__$1 < n);
var state_19577__$1 = (function (){var statearr_19594 = state_19577;
(statearr_19594[(12)] = inst_19548);

(statearr_19594[(11)] = inst_19549__$1);

return statearr_19594;
})();
if(cljs.core.truth_(inst_19550)){
var statearr_19603_20615 = state_19577__$1;
(statearr_19603_20615[(1)] = (8));

} else {
var statearr_19610_20616 = state_19577__$1;
(statearr_19610_20616[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19578 === (14))){
var inst_19569 = (state_19577[(2)]);
var inst_19570 = cljs.core.async.close_BANG_(out);
var state_19577__$1 = (function (){var statearr_19612 = state_19577;
(statearr_19612[(13)] = inst_19569);

return statearr_19612;
})();
var statearr_19613_20617 = state_19577__$1;
(statearr_19613_20617[(2)] = inst_19570);

(statearr_19613_20617[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19578 === (10))){
var inst_19560 = (state_19577[(2)]);
var state_19577__$1 = state_19577;
var statearr_19620_20618 = state_19577__$1;
(statearr_19620_20618[(2)] = inst_19560);

(statearr_19620_20618[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19578 === (8))){
var inst_19540 = (state_19577[(7)]);
var inst_19549 = (state_19577[(11)]);
var tmp19611 = inst_19540;
var inst_19540__$1 = tmp19611;
var inst_19541 = inst_19549;
var state_19577__$1 = (function (){var statearr_19621 = state_19577;
(statearr_19621[(7)] = inst_19540__$1);

(statearr_19621[(8)] = inst_19541);

return statearr_19621;
})();
var statearr_19622_20622 = state_19577__$1;
(statearr_19622_20622[(2)] = null);

(statearr_19622_20622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17280__auto__ = null;
var cljs$core$async$state_machine__17280__auto____0 = (function (){
var statearr_19623 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19623[(0)] = cljs$core$async$state_machine__17280__auto__);

(statearr_19623[(1)] = (1));

return statearr_19623;
});
var cljs$core$async$state_machine__17280__auto____1 = (function (state_19577){
while(true){
var ret_value__17281__auto__ = (function (){try{while(true){
var result__17282__auto__ = switch__17279__auto__(state_19577);
if(cljs.core.keyword_identical_QMARK_(result__17282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17282__auto__;
}
break;
}
}catch (e19632){var ex__17283__auto__ = e19632;
var statearr_19639_20627 = state_19577;
(statearr_19639_20627[(2)] = ex__17283__auto__);


if(cljs.core.seq((state_19577[(4)]))){
var statearr_19640_20631 = state_19577;
(statearr_19640_20631[(1)] = cljs.core.first((state_19577[(4)])));

} else {
throw ex__17283__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20632 = state_19577;
state_19577 = G__20632;
continue;
} else {
return ret_value__17281__auto__;
}
break;
}
});
cljs$core$async$state_machine__17280__auto__ = function(state_19577){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17280__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17280__auto____1.call(this,state_19577);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17280__auto____0;
cljs$core$async$state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17280__auto____1;
return cljs$core$async$state_machine__17280__auto__;
})()
})();
var state__17429__auto__ = (function (){var statearr_19647 = f__17428__auto__();
(statearr_19647[(6)] = c__17427__auto___20605);

return statearr_19647;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17429__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__19650 = arguments.length;
switch (G__19650) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17427__auto___20634 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17428__auto__ = (function (){var switch__17279__auto__ = (function (state_19697){
var state_val_19698 = (state_19697[(1)]);
if((state_val_19698 === (7))){
var inst_19693 = (state_19697[(2)]);
var state_19697__$1 = state_19697;
var statearr_19702_20638 = state_19697__$1;
(statearr_19702_20638[(2)] = inst_19693);

(statearr_19702_20638[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19698 === (1))){
var inst_19653 = [];
var inst_19654 = inst_19653;
var inst_19655 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_19697__$1 = (function (){var statearr_19703 = state_19697;
(statearr_19703[(7)] = inst_19655);

(statearr_19703[(8)] = inst_19654);

return statearr_19703;
})();
var statearr_19704_20639 = state_19697__$1;
(statearr_19704_20639[(2)] = null);

(statearr_19704_20639[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19698 === (4))){
var inst_19658 = (state_19697[(9)]);
var inst_19658__$1 = (state_19697[(2)]);
var inst_19659 = (inst_19658__$1 == null);
var inst_19660 = cljs.core.not(inst_19659);
var state_19697__$1 = (function (){var statearr_19705 = state_19697;
(statearr_19705[(9)] = inst_19658__$1);

return statearr_19705;
})();
if(inst_19660){
var statearr_19706_20643 = state_19697__$1;
(statearr_19706_20643[(1)] = (5));

} else {
var statearr_19707_20644 = state_19697__$1;
(statearr_19707_20644[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19698 === (15))){
var inst_19654 = (state_19697[(8)]);
var inst_19685 = cljs.core.vec(inst_19654);
var state_19697__$1 = state_19697;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19697__$1,(18),out,inst_19685);
} else {
if((state_val_19698 === (13))){
var inst_19680 = (state_19697[(2)]);
var state_19697__$1 = state_19697;
var statearr_19708_20645 = state_19697__$1;
(statearr_19708_20645[(2)] = inst_19680);

(statearr_19708_20645[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19698 === (6))){
var inst_19654 = (state_19697[(8)]);
var inst_19682 = inst_19654.length;
var inst_19683 = (inst_19682 > (0));
var state_19697__$1 = state_19697;
if(cljs.core.truth_(inst_19683)){
var statearr_19709_20646 = state_19697__$1;
(statearr_19709_20646[(1)] = (15));

} else {
var statearr_19710_20647 = state_19697__$1;
(statearr_19710_20647[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19698 === (17))){
var inst_19690 = (state_19697[(2)]);
var inst_19691 = cljs.core.async.close_BANG_(out);
var state_19697__$1 = (function (){var statearr_19711 = state_19697;
(statearr_19711[(10)] = inst_19690);

return statearr_19711;
})();
var statearr_19712_20652 = state_19697__$1;
(statearr_19712_20652[(2)] = inst_19691);

(statearr_19712_20652[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19698 === (3))){
var inst_19695 = (state_19697[(2)]);
var state_19697__$1 = state_19697;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19697__$1,inst_19695);
} else {
if((state_val_19698 === (12))){
var inst_19654 = (state_19697[(8)]);
var inst_19673 = cljs.core.vec(inst_19654);
var state_19697__$1 = state_19697;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19697__$1,(14),out,inst_19673);
} else {
if((state_val_19698 === (2))){
var state_19697__$1 = state_19697;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19697__$1,(4),ch);
} else {
if((state_val_19698 === (11))){
var inst_19662 = (state_19697[(11)]);
var inst_19654 = (state_19697[(8)]);
var inst_19658 = (state_19697[(9)]);
var inst_19670 = inst_19654.push(inst_19658);
var tmp19713 = inst_19654;
var inst_19654__$1 = tmp19713;
var inst_19655 = inst_19662;
var state_19697__$1 = (function (){var statearr_19714 = state_19697;
(statearr_19714[(7)] = inst_19655);

(statearr_19714[(8)] = inst_19654__$1);

(statearr_19714[(12)] = inst_19670);

return statearr_19714;
})();
var statearr_19715_20654 = state_19697__$1;
(statearr_19715_20654[(2)] = null);

(statearr_19715_20654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19698 === (9))){
var inst_19655 = (state_19697[(7)]);
var inst_19666 = cljs.core.keyword_identical_QMARK_(inst_19655,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_19697__$1 = state_19697;
var statearr_19716_20656 = state_19697__$1;
(statearr_19716_20656[(2)] = inst_19666);

(statearr_19716_20656[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19698 === (5))){
var inst_19655 = (state_19697[(7)]);
var inst_19663 = (state_19697[(13)]);
var inst_19662 = (state_19697[(11)]);
var inst_19658 = (state_19697[(9)]);
var inst_19662__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_19658) : f.call(null,inst_19658));
var inst_19663__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19662__$1,inst_19655);
var state_19697__$1 = (function (){var statearr_19717 = state_19697;
(statearr_19717[(13)] = inst_19663__$1);

(statearr_19717[(11)] = inst_19662__$1);

return statearr_19717;
})();
if(inst_19663__$1){
var statearr_19718_20658 = state_19697__$1;
(statearr_19718_20658[(1)] = (8));

} else {
var statearr_19719_20659 = state_19697__$1;
(statearr_19719_20659[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19698 === (14))){
var inst_19662 = (state_19697[(11)]);
var inst_19658 = (state_19697[(9)]);
var inst_19675 = (state_19697[(2)]);
var inst_19676 = [];
var inst_19677 = inst_19676.push(inst_19658);
var inst_19654 = inst_19676;
var inst_19655 = inst_19662;
var state_19697__$1 = (function (){var statearr_19720 = state_19697;
(statearr_19720[(7)] = inst_19655);

(statearr_19720[(14)] = inst_19675);

(statearr_19720[(8)] = inst_19654);

(statearr_19720[(15)] = inst_19677);

return statearr_19720;
})();
var statearr_19721_20670 = state_19697__$1;
(statearr_19721_20670[(2)] = null);

(statearr_19721_20670[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19698 === (16))){
var state_19697__$1 = state_19697;
var statearr_19722_20671 = state_19697__$1;
(statearr_19722_20671[(2)] = null);

(statearr_19722_20671[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19698 === (10))){
var inst_19668 = (state_19697[(2)]);
var state_19697__$1 = state_19697;
if(cljs.core.truth_(inst_19668)){
var statearr_19723_20672 = state_19697__$1;
(statearr_19723_20672[(1)] = (11));

} else {
var statearr_19724_20673 = state_19697__$1;
(statearr_19724_20673[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19698 === (18))){
var inst_19687 = (state_19697[(2)]);
var state_19697__$1 = state_19697;
var statearr_19725_20681 = state_19697__$1;
(statearr_19725_20681[(2)] = inst_19687);

(statearr_19725_20681[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19698 === (8))){
var inst_19663 = (state_19697[(13)]);
var state_19697__$1 = state_19697;
var statearr_19726_20682 = state_19697__$1;
(statearr_19726_20682[(2)] = inst_19663);

(statearr_19726_20682[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17280__auto__ = null;
var cljs$core$async$state_machine__17280__auto____0 = (function (){
var statearr_19727 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19727[(0)] = cljs$core$async$state_machine__17280__auto__);

(statearr_19727[(1)] = (1));

return statearr_19727;
});
var cljs$core$async$state_machine__17280__auto____1 = (function (state_19697){
while(true){
var ret_value__17281__auto__ = (function (){try{while(true){
var result__17282__auto__ = switch__17279__auto__(state_19697);
if(cljs.core.keyword_identical_QMARK_(result__17282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17282__auto__;
}
break;
}
}catch (e19728){var ex__17283__auto__ = e19728;
var statearr_19729_20684 = state_19697;
(statearr_19729_20684[(2)] = ex__17283__auto__);


if(cljs.core.seq((state_19697[(4)]))){
var statearr_19730_20685 = state_19697;
(statearr_19730_20685[(1)] = cljs.core.first((state_19697[(4)])));

} else {
throw ex__17283__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20686 = state_19697;
state_19697 = G__20686;
continue;
} else {
return ret_value__17281__auto__;
}
break;
}
});
cljs$core$async$state_machine__17280__auto__ = function(state_19697){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17280__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17280__auto____1.call(this,state_19697);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17280__auto____0;
cljs$core$async$state_machine__17280__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17280__auto____1;
return cljs$core$async$state_machine__17280__auto__;
})()
})();
var state__17429__auto__ = (function (){var statearr_19731 = f__17428__auto__();
(statearr_19731[(6)] = c__17427__auto___20634);

return statearr_19731;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17429__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
