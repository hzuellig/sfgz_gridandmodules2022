# Programm
Morgen
* CSS Animationen

Beispiel Studentenarbeit animierte Plakate: <br/>
https://maxwerner-kickweb.netlify.app/plakat/sprint3/plakat

## Was sind CSS Animationen?
CSS Animationen sind mächtiger als Transitions. Im Unterschied zu Transitions können bei Animationen nicht nur Zustand A und Zustand B definiert werden, sondern X Zustände dazwischen, sogenannten Keyframes. 
<br/>
Eine Transition geht von Zustand A zu Zustand B. In den Developer Tools von Google Chrome könnt ihr über den Tabulator 'Animations' die Form der Animation anzeigen lassen.<br/>

<img src="../assets/transition-debug.png" width="600"/><br/>

Im Unterschied dazu können bei Animationen viele Zustände definiert werden. Die Darstellung einer Animation mit Keyframes bei 0%, 25% und 50% sieht so aus:
<br/>

<img src="../assets/anim-keyframes.png" width="600"/><br/>

## Wie sieht die Syntax aus?
Mit dem Schlüsselwort `@keyframes` wird eine Animation definiert. In der folgenden Namensgebung seid ihr frei (hier im Beispiel slidein).
In den geschweiften Klammern werden die Zustände der Properties zum Zeitpunkt der einzelnen Keyframes definiert. from ist der Keyframe zu 0%
to der zu 100%. Alternativ können auch die Prozente angegeben werden. 
Bei jedem Keyframe wird ein weiterer Block über die geschweiften Klammern geöffnet, dort schreibt ihr die CSS Eigenschaften, die ihr verändern und animieren wollt. Im Unterschied zu `transition` müsst ihr bei den Animationen über `@keyframes` nicht extra angeben, dass die Eigenschaften mit Übergangseffekten verändert werden. 

```css
/*Animation entwerfen*/
@keyframes slidein {
 from {
    transform: translateX(0%);
 }
 to {
    transform: translateX(100%);
 }
}
/*Animation zuweisen*/
.animierteklasse{
    animation-name:slidein;
    animation-duration:3s;
}
```
`animation` hat weitere Eigenschaften, über die gesteuert werden kann, wie eine Animation abläuft.

```css
.animierteklasse{
   animation-delay: 1s; /* Verzögerung */
   animation-iteration-count: 2; /* Wie oft die Animation abgespielt wird, default 1 Mal*/
   animation-direction: alternate;
   /*
   Mögliche Werte
   normal -> 
   Die Animation wird bei jedem Zyklus vorwärts abgespielt. Mit anderen Worten: Bei jedem Zyklus wird die Animation auf den Anfangszustand zurückgesetzt und beginnt von vorne. Dies ist der Standardwert. 
 
   reverse ->
   Die Animation wird bei jedem Zyklus rückwärts abgespielt. Mit anderen Worten: Bei jedem Zyklus wird die Animation zum Endzustand zurückgesetzt und beginnt von vorn. Die Animationsschritte werden rückwärts ausgeführt, und auch die Zeitfunktionen werden umgekehrt. 

   alternate ->
   Die Animation kehrt bei jedem Zyklus die Richtung um, wobei die erste Iteration vorwärts abgespielt wird. Die Zählung zur Bestimmung, ob ein Zyklus gerade oder ungerade ist, beginnt bei eins.

   alternate-reverse ->
   Die Animation kehrt bei jedem Zyklus die Richtung um, wobei die erste Iteration rückwärts abgespielt wird. 
   */
   animation-timing-function: ease-in-out;
   /* (Diese Eigenschaft entspricht transition-timing-function)
   Art und Weise wie die Übergänge gerechnet werden 
   https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timing-function*/
   animation-fill-mode: forwards;
   /* 
   Werte 
   forwards -> 
   Das Element behält den Endzustand nach Abspielen der Animation. (Oft ist das der gewünschte Zustand)
   Mehr Settings: https://developer.mozilla.org/en-US/docs/Web/CSS/animation-fill-mode
   */
   animation-play-state: paused;
   /*Werte 
   paused 
   running
   Bei der Wiederaufnahme einer angehaltenen Animation wird die Animation an der Stelle fortgesetzt, an der sie zum Zeitpunkt der Unterbrechung unterbrochen wurde, anstatt am Anfang der Animationssequenz neu zu beginnen.
   */

}
```

Die CSS-Eigenschaft `animation` ist ein Kürzel für alle Properties `animation-name`, `animation-duration`, `animation-timing-function`, `animation-delay`, `animation-iteration-count`, `animation-direction`, `animation-fill-mode` und `animation-play-state`. 

```css
/* @keyframes name | duration | easing-function | delay */
.animierteklasse{
 animation: slidein 3s linear 1s;
 }
```

### Üben
Arbeite dich zur Repetition durch diese Übungen durch: https://www.w3schools.com/css/exercise.asp?filename=exercise_css3_animations1 <br/><br/>
<img src="../assets/smiths.gif" width="300"/><br/>

Mache eine Kopie der Übung mit den drei S von Tag6. <br/> Generiere pro Buchstabe eine Animation, die dreimal wiederholt wird und dann auf dem Endpunkt stehen bleibt. Tipp: `animation-fill-mode: forwards;` 
Welche Eigenschaften willst du animieren? Farbe, Transparenz, Position?
