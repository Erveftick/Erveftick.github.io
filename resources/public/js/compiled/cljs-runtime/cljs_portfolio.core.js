goog.provide('cljs_portfolio.core');
cljs_portfolio.core.dev_setup = (function cljs_portfolio$core$dev_setup(){
if(cljs_portfolio.config.debug_QMARK_){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["dev mode"], 0));
} else {
return null;
}
});
cljs_portfolio.core.mount_root = (function cljs_portfolio$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_();

var root_el = document.getElementById("app");
reagent.dom.unmount_component_at_node(root_el);

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_portfolio.views.views.app], null),root_el);
});
cljs_portfolio.core.init = (function cljs_portfolio$core$init(){
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs-portfolio.events","initialize-db","cljs-portfolio.events/initialize-db",-1002059054)], null));

cljs_portfolio.core.dev_setup();

return cljs_portfolio.core.mount_root();
});

//# sourceMappingURL=cljs_portfolio.core.js.map
