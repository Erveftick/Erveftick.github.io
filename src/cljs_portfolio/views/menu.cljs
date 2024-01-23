(ns cljs-portfolio.views.menu)

(def nav-menu-items
  [{:href "#about" :title "About"}
   {:href "#work-experience" :title "Skills"}
   {:href "#projects" :title "Projects"}
   {:href "#edu" :title "Education"}
   {:href "#leadership" :title "Leadership"}
   {:href "#contact" :title "Contact"}])

(defn nav-menu []
  [:div.menu__item.menu__main_nav_item {:data-direction "bt"}
   [:div.menu__item-inner
    [:div.mainmenu
     (for [{:keys [href title]} nav-menu-items]
       [:a.mainmenu__item {:href href} title])]
    [:p.label.label--topleft.label--vert-mirror "Navigation menu"]
    [:p.label.label--bottomright.label--vert "Edward Kvashyn"]]])

(defn menu []
  [:nav.menu
   [nav-menu]
   ;; [:div.menu__item.menu__item--2 {:data-direction "lr"}
   ;;  [:div.menu__item-inner
   ;;   [:div.menu__item-map]
   ;;   [:a.menu__item-hoverlink {:href "#"}]]]
   ;; [:div.menu__item.menu__item--3 {:data-direction "bt"}
   ;;  [:div.menu__item-inner
   ;;   [:div.sidemenu
   ;;    [:a.sidemenu__item {:href "#"} [:span.sidemenu__item-inner "The Gameplay"]]
   ;;    [:a.sidemenu__item {:href "#"} [:span.sidemenu__item-inner "About LARP"]]
   ;;    [:a.sidemenu__item {:href "#"} [:span.sidemenu__item-inner "The Rules"]]
   ;;    [:a.sidemenu__item {:href "#"} [:span.sidemenu__item-inner "History"]]
   ;;    [:a.sidemenu__item {:href "#"} [:span.sidemenu__item-inner "People"]]
   ;;    [:a.sidemenu__item {:href "#"} [:span.sidemenu__item-inner "Join"]]
   ;;    [:a.sidemenu__item {:href "#"} [:span.sidemenu__item-inner "..."]]]]]
   ;; [:div.menu__item.menu__item--4 {:data-direction "rl"}
   ;;  [:div.menu__item-inner
   ;;   [:p.label.label--topleft.label--line "Join us now"]
   ;;   [:a.menu__item-link {:href "#"} "Learn how to" [:br] "participate"]]]
   ;; [:div.menu__item.menu__item--5 {:data-direction "tb"}
   ;;  [:div.menu__item-inner
   ;;   [:p.quote "\"It is possible to commit no mistakes and still lose. That is not a weakness. That is life.\" - Jean-Luc Picard "]]]
   [:button.action.action--menu [:svg.icon.icon--menu [:use {:xlinkHref "#icon-menu"}]]]
   [:button.action.action--close [:svg.icon.icon--close [:use {:xlinkHref "#icon-close"}]]]
   ])
