(ns cljs-portfolio.views
  (:require
   [garden.core :refer [css]]
   [garden.stylesheet :as gs]
   [tick.core :as t]
   [tick.locale-en-us]))

(def style-rules
  [:html
   {:margin 0
    :padding 0
    :color :#fff
    :font-family "\"Muli\",\"Philosopher\", sans-serif"}

   [:body
    {:overflow-x :hidden}]

   [:canvas
    {:position :absolute
     :top :-20em
     :right :-25em}]

   [:.content
    {:text-align :center
     :position :relative
     :z-index :100
     :height :100vh}]

   (gs/at-media
    {:max-width :53em}
    [:.content
     {:margin-top :10rem}])

   (gs/at-media
    {:min-width :53em}
    [:.content
     {:display :flex
      :flex-direction :column
      :justify-content :center;
      :align-items :center
      :margin-top "0 auto"
      :min-height :100vh
      :text-align :left}])

   [:.content_label
    {:font-family "\"Philosopher\", serif"
     :font-size :15vw
     :font-weight :normal
     :mix-blend-mode :screen
     :line-height :0.8
     :text-transform :uppercase
     :margin :0
     :color :#fbd54a
     :z-index :9
     :position :inherit}
    [:&_left
     {:margin-left :-1em}]]])


(def portfolio-labels
  (map-indexed (fn [idx itm] [(inc idx) itm]) ["Portfolio" "from" "Kyiv," "Ukraine"]))

(defn app []
  [:main
   [header]
   [:canvas.wow.fadeIn]
   [:style (css style-rules)]
   [:div.content
    [:div.background]
    (for [[idx title] portfolio-labels]
      [:label.wow.fadeInUp.content_label
       (cond-> {:key idx}
         (> idx 2) (assoc :class "content_label_left"))
       title])]])



;; <div class= "content" >
;; <div class= "background" style= "background-image: url(img/1bnn.jpg)" ></div>
;; <h2 class= "content__title1 wow fadeInUp" >Portfolio</h2>
;; <h2 class= "content__title2 wow fadeInUp" >from</h2>
;; <h2 class= "content__title3 wow fadeInUp" >Kyiv,<br>Ukraine</h2>
;; </div>

(defn main-page [])