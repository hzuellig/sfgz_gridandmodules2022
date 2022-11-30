# Testing Responsiveness

Zum Testen könnt ihr die Tools unten benutzen, probiert zwei unterschiedliche Möglichkeiten. <br/>
Checklist für das Testen von Responsiveness, worauf ist zu achten: <br/>
https://wishdesk.com/blog/how-test-responsiveness-website


## Entwicklertool Browser
Firefox und Chrome bieten in den Entwicklertools Device Testing an. 
Getestet werden fixe Grössen (Breakpoints) auf dem Browser selber. 
Unterschiede der Browser im Rendering der Schriften oder in der Interpretation von CSS werden hiermit nicht getestet. 

## Online Tools
* http://www.responsinator.com/
* https://screenfly.org/ 

Die obigen Links erlauben Onlinetesting, Screenshots für Präsentationen/Portfolios mit den Devices, sie testen aber nicht auf realen Geräten.

## Browserstack
* Testen auf realen Geräten und Browsern, nicht bloss von Breakpoints
* Debugging Tools der Browser verfügbar
* Free Trial Account, https://browserstack.com
* https://live.browserstack.com/

## remote iPhone on Safari debuggen
Gerät anschliessen (Safari Entwicklertools aktivieren). Unter dem Menü Entwickler das eigene Gerät auswählen. Die Entwicklertools greifen auf das iPhone zu. Nun könnt ihr das iPhone debuggen und CSS live anpassen. 

## remote Android auf Chrome debuggen
https://raygun.com/blog/debug-android-chrome/