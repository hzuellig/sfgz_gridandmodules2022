

# Einführung Flexbox 
Die Property `display:flex` wird für das Parent Element gesetzt.
```css
.parentcontainer{
    display:flex; 
}
.child{
    border:1px dotted blue;
    padding:1rem;
    margin:1rem;
}
```
```html
<div class="parentcontainer">
    <div class="child">1</div>
    <div class="child">2</div>
    <div class="child">3</div>
    <div class="child">4</div>
</div
```
### flex-direction und Achsen 
Richtung des Layouts: standardmässig werden die Elemente in der Schreibrichtung (bei uns von links nach rechts) ausgelegt. Das ist die Hauptachse. `flex-direction:row` wäre die explizite Angabe dazu. Die Querachse ist dann von oben nach unten.

Mit `flex-direction:column` (beim parentcontainer) ändert ihr die Hauptachse und die Elemente werden in einer Spalte von oben nach unten dargestellt. Die Querachse ist entsprechend von links nach rechts (in der westlichen Schreibrichtung).

<br/><br/>
<img src="assets/flex-direction.png" width="300"/><br/>

<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox" target="_blank">Mozilla Referenz</a>

### justify-content 
Die Property `justify-content` definiert, wie der Browser den Platz zwischen und um Inhaltselemente entlang der Hauptachse eines Flex-Containers verteilt. Ein paar Varianten:
```css
.parentcontainer{
    /* Positional alignment */
    justify-content: center; /* Pack items around the center */
    /* justify-content: start; /* Pack items from the start */
    /* justify-content: end; /* Pack items from the end */
    /* justify-content: space-between; /* Raum gleichmässig zwischen den Items verteilen. Das erste hat links keinen Raum, das letze hat rechts keinen */
}
```
<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content" target="_blank">Mozilla Referenz</a>

### align-items
Die Property `align-items` definiert, wie der Browser die Inhaltselemente entlang der Querachse eines Flex-Containers verteilt. Ein paar Varianten:
```css
.parentcontainer{
    /* Positional alignment */
    align-items: center; /* Pack items around the center */
    /*align-items: start; /* Pack items from the start */
    /*align-items: end; /* Pack items from the end */
}
```
<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/align-items" target="_blank">Mozilla Referenz</a>
<br/><br/>

Übungen zu zweit, Task 1-3: https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox_skills<br/><br/>

Übung einzeln: Passe deine Navigation in process/index.html so an, dass die Items über flexbox eingemittet werden. Tipp, Task 1 in der Übung oben beachten!
<br/><br/>
Extended: https://flexboxfroggy.com/#de <br/><br/>