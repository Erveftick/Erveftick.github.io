(ns cljs-portfolio.views.header
  (:require
   [garden.core :refer [css]]
   [garden.stylesheet :as gs]
   [tick.core :as t]
   [tick.locale-en-us]))

(def header-styles
  [:body
   [:.header
    {:height      :70px
     :text-align  :left
     :width       :100%
     :margin      0
     :padding     :1.5rem
     :position    :fixed
     :z-index     :100
     :display     :flex
     :align-items :center}
    [:&_logo
     {:font-size   :1.3rem
      :line-height :1
      :font-weight :normal
      :margin      "0 1rem"}]
    [:&_content
     {:color       :#bbbbbb
      :font-size   :0.95rem
      :margin-left :auto!important
      :margin      "0 1rem"}]
    [:&_button
     {:margin "0 1em"}]
    [:&_bond
     {:display :block}]]
   (gs/at-media {:max-width :587px}
                [:.header
                 {:display    :block
                  :text-align :left}]
                [:.header_logo
                 {:margin 0}])])

(defn header-logo []
      [:h3.header_logo.wow.fadeInUp "Edward Kvashyn"])

(defn header-content []
      (let [start-year (t/year "2020")
            curr-year (t/year)]
           [:label.header_content.wow.fadeInUp (str start-year "—" curr-year " · Software Developer")]))

(defn header-menu []
      [:div.header_button
       [:svg.hidden {:data-wow-delay "3s"}
        [:symbol#icon-menu {:viewBox "0 0 119 25"}
         [:title "menu"]
         [:path {:d "M36,8 L36,0 L100,0 L100,0 L36,0 Z M0,8 L0,0 L24,0 L24,8 L0,8 Z M0,28 L0,20 L71,20 L71,28 L0,28 Z M0,8 L0,0 L24,0 L24,8 L0,8 Z"}]]
        [:symbol#icon-close {:viewBox "0 0 24 24"}
         [:title "close"]
         [:path {:d "M24 1.485L22.515 0 12 10.515 1.485 0 0 1.485 10.515 12 0 22.515 1.485 24 12 13.484 22.515 24 24 22.515 13.484 12z"}]]]])



(defn header []
  [:div.header
       [:style (css header-styles)]
       [header-logo]
       [header-content]
       [header-menu]])
