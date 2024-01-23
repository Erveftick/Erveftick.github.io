(ns cljs-portfolio.views.views
  (:require
   [cljs-portfolio.views.header :refer [header]]
   [cljs-portfolio.views.menu :refer [menu]]
   [cljs-portfolio.views.about :refer [about]]
   [garden.core :refer [css]]
   [garden.stylesheet :as gs]
   [tick.core :as t]
   [tick.locale-en-us]))

(def style-rules
  [:html
   {:margin      0
    :padding     0
    :color       :#fff
    :font-family "\"Muli\",\"Philosopher\", sans-serif"}

   [:canvas
    {:position :absolute
     :top      :-20em
     :right    :-25em}]

   [:.content
    {:text-align      :left
     :position        :relative
     :z-index         :100
     :height          :100vh
     :display         :flex
     :flex-direction  :column
     :justify-content :center ;
     :align-items     :center
     :margin-top      "0 auto"}]

   [:.main-label-block
    {:padding "0 10em"
     :display :contents}]

   [:.background
    {:perspective         :300px ;
     :position            :absolute ;
     :top                 :0
     :width               :100%
     :height              :100%
     :right               :0 ;
     :background-position "0% 50%"
     :background-size     :cover
     :z-index             :1 ;
     }]

   [:.background__copy
    {:position            :fixed ;
     :width               :90% ;
     :height              :80% ;
     :bottom              :7em ;
     :left                :10em ;
     :background-image    "url(../img/hands-me.jpg)" ;
     :background-position "0% 25%"
     :background-size     "contain" ;
     :background-repeat   :no-repeat ;
     :z-index             :1
     :opacity             :0.3}]

   [:.content_label
    {:font-family    "\"Philosopher\", serif"
     :font-size      :12vw
     :font-weight    :normal
     :mix-blend-mode :screen
     :line-height    :0.8
     :text-transform :uppercase
     :margin         :0
     :color          :#fbd54a
     :z-index        :9
     :position       :inherit}
    [:&_left
     {:margin-left :-1em}]]

   (gs/at-media {:max-width :1200px}
                [:body])

   (gs/at-media {:max-width :996px}
                [:body
                 [:.background__copy
                  {;:bottom :-1em ;
                   :left   :4em}]])

   (gs/at-media {:max-width :576px}
                [:body
                 [:canvas
                  {:position :absolute
                   :top      :-28em
                   :right    :-11em}]
                 [:.background__copy
                  {:bottom :3em ;
                   :left   :0em}]])

   (gs/at-media
    {:min-width :53em}
    [:.content
     {:display         :flex
      :flex-direction  :column
      :justify-content :center ;
      :align-items     :center
      :margin-top      "0 auto"
      :min-height      :100vh
      :text-align      :left}])])

(def portfolio-labels
  (map-indexed (fn [idx itm] [(inc idx) itm]) ["Portfolio" "from" "Waterloo," "Canada"]))

(defn social-links []
  [:div.d-flex
   [:a {:href "https://www.linkedin.com/in/ekvashyn/"} [:i.fab.fa-linkedin]]
   [:a {:href "https://github.com/Erveftick/"} [:i.fab.fa-github]]
   [:a {:href "mailto:edwardkvashin@gmail.com"} [:i.fas.fa-envelope]]])

(defn app []
  [:main
   [menu]
   [header]
   [:canvas.wow.fadeIn]
   [:style (css style-rules)]
   [:div.content
    [:div.background]
    (into
     [:div.main-label-block]
     (for [[idx title] portfolio-labels]
       [:label.wow.fadeInUp.content_label
        (cond-> {:key idx}
          (> idx 2) (assoc :class "content_label_left"))
        title]))]
   [about]])

;; <div class= "content" >
;; <div class= "background" style= "background-image: url(img/1bnn.jpg)" ></div>
;; <h2 class= "content__title1 wow fadeInUp" >Portfolio</h2>
;; <h2 class= "content__title2 wow fadeInUp" >from</h2>
;; <h2 class= "content__title3 wow fadeInUp" >Kyiv,<br>Ukraine</h2>
;; </div>

(defn main-page [])
