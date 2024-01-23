(ns cljs-portfolio.events
  (:require
   [re-frame.core :as re-frame]
   [cljs-portfolio.db :as db]
   ))

(re-frame/reg-event-db
 ::initialize-db
 (fn [_ _]
   db/default-db))
