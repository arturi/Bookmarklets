# Bookmarklets
Various bookmarklets for mobile and desktop browser that make the web a better place. 

### Installation

#### Desktop
Just drag the Install link to your bookmarks bar.

#### Mobile devices
1. Hold and copy the Install link or copy code from the source.
2. Create a bookmark on this page and save it.
3. Edit the bookmark and paste the code you’ve previously copied into the bookmark’s address field. Save.

The bookmark should automatically sync to all of your devices where you have syncing enabled.

## Darken 
![lumos maxima](http://img2.wikia.nocookie.net/__cb20090531122933/harrypotter/images/f/f4/Lumos_Maxima.gif)
Good for night browsing and reading. Unlike other solutions, Darken doesn’t invert colors or otherwise alter page content. Everything stays the same, only less bright.

*Install link*: [Darken](javascript:(function(){if(window.isDimmed===true){document.getElementsByTagName('html')[0].style.cssText='filter:none;-webkit-filter:none;-moz-filter:none;';window.isDimmed=false;}else{document.getElementsByTagName('html')[0].style.cssText='filter:brightness(0.3);-webkit-filter:brightness(0.3);-moz-filter:brightness(0.3);-webkit-transform:translateZ(0);';window.isDimmed=true;}})();)

## Fix Zoom 
Removes zooming restrictions that some websites have on mobile browsers.

*Install link*: [Fix Zoom](javascript:(function()%7Bvar%20e=document.getElementsByTagName(%22meta%22),t=e.length,n;while(t--)%7Bn=e%5Bt%5D;if%20(n.name.toLowerCase()==%22viewport%22)%7Bn.content=%22user-scalable=1,%20initial-scale=1,%20maximum-scale=10;%22;%7D%7D%7D)()).
