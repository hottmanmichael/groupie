"use strict";!function(){function e(){t(),n(),a(),i()}function t(){var e=document.getElementById("page-title-artist-name");e.innerHTML=L.name}function n(){function e(e){var t=document.querySelector(".iframe-box.spotify-embed"),n=document.createElement("iframe");n.src="https://embed.spotify.com/?uri="+e,n.width="100%",n.height="100%",n.frameborder="0",n.style.border="none",n.allowtransparency="true",t.appendChild(n)}function t(){var e="album_type=album,single",t="&limit=10";new Ajax("GET",p+"/artists/"+L.id+"/albums?"+e+t,function(e,t){for(var i=0;i<t.items.length;i++)a(t.items[i],u.HEAR_IT.querySelector("#wheel-albums"));n(t.items)},null)}function n(e){var t=e.shift();new Ajax("GET",p+"/albums/"+t.id+"/tracks",function(t,a){return e.length>0?(r.push(a.items),void n(e)):void 0},null);var i=u.HEAR_IT.querySelector("#wheel-tracks");for(var l in r)for(var t=r[l],c=0;c<t.length;c++)a(t[c],i)}function a(e,t){var n=document.createElement("div");n.className=e.type+"-list-item",n.style.overflow="hidden";var a=document.createElement("h3");if(a.className="name","album"===e.type?("album"!==e.album_type&&(a.innerHTML=e.name+" ("+e.type+")"),a.innerHTML=e.name):a.innerHTML=e.name,"track"!==e.type&&e.images.length>0){var i=document.createElement("img");i.className="thumbnail",i.src=e.images[0].url,i.alt=e.name,i.height="40",i.width="40",n.appendChild(i)}var r=document.createElement("i");r.className="fa fa-play-circle-o play-item "+e.type,r.uri=e.uri,r.addEventListener("click",o),n.appendChild(a),n.appendChild(r),t.appendChild(n)}var i=p+"/artists/"+L.id;new Ajax("GET",i,function(n,a){e(a.uri),t()},null,!0);var r=[]}function a(){function e(e){var t=u.HEAR_IT.querySelector("#wheel-info"),n=0,a=document.createElement("div");a.className="topic";var i=document.createElement("h1");i.className="title",e.hasOwnProperty("name")?i.innerHTML=e.name:(i.innerHTML="Data not found.",n++);var r=document.createElement("p");r.className="description",e.hasOwnProperty("detailedDescription")?r.innerHTML=e.detailedDescription.articleBody:(r.innerHTML="No description available...",n++);var l=document.createElement("i");l.className="fa fa-globe",l.style["float"]="left",l.style.fontSize="2em",l.style.padding="5px";var c=document.createElement("a");e.hasOwnProperty("url")?(c.href=e.url,c.innerHTML=e.url.replace("http://","").replace("https://","")):(c.href="#",l.style.fontSize="0",n++),c.target="_blank",c.className="artist-website",c.style["float"]="left",c.style.fontSize="1.6em",c.style.padding="5px",c.style.textDecoration="none";var s=document.createElement("a");e.hasOwnProperty("detailedDescription")?(s.href=e.detailedDescription.url,s.innerHTML="Wikipedia"):(s.href="#",n++),s.target="_blank",r.appendChild(s);var o=document.createElement("a");e.hasOwnProperty("detailedDescription")?(o.href=e.detailedDescription.license,o.innerHTML="License: "+e.detailedDescription.license):(o.href="#",n++),o.className="wiki-license",o.target="_blank",5===n&&(r.innerHTML="This band is so hipster, you heard about them before Google did..."),a.appendChild(i),a.appendChild(r),a.appendChild(l),a.appendChild(c),a.appendChild(o);var d=document.createElement("div");d.className="image-box";var m=document.createElement("img");if(m.className="image-inner",e.hasOwnProperty("image")){m.src=e.image.contentUrl,m.alt=e.name;var p=document.createElement("a");p.innerHTML="Image License: "+e.image.license,p.target="_blank",d.appendChild(m),d.appendChild(p)}else a.style.width="100%",5===n&&(m.src="http://www.telegraph.co.uk/content/dam/men/2015/12/11/Cera1-large_trans++qVzuuqpFlyLIwiB6NTmJwZwVSIA7rSIkPn18jgFKEo0.jpg",m.alt="Hipster Michael Cera",a.style.width="65%",d.appendChild(m));t.appendChild(a),t.appendChild(d)}var t=L.name.replace(/(\W+)/g,"+").toLowerCase(),n=h.replace("ARTIST",t);new Ajax("GET",n,function(t,n){t||n.itemListElement.length>0&&e(n.itemListElement[0].result)},null)}function i(){var e=E.ARTIST.replace("ARTIST",L.name.replace(/\s/g,"%20")),t=T+encodeURIComponent(E.BASE+e);new Ajax("GET",t,function(e,t){e||(t.upcoming_event_count>0?r():c())},null)}function r(){var e=E.ALL_EVENTS.replace("ARTIST",L.name.replace(/\s/g,"%20")),t=T+encodeURIComponent(E.BASE+e);new Ajax("GET",t,function(e,t){e||l(t)},null)}function l(e){function t(e){var t=document.createElement("li");t.className="concert-item";var a=document.createElement("h3");a.className="concert-title item-inner",a.innerHTML=e.formatted_location;var i=document.createElement("h3");i.className="concert-datetime item-inner",i.innerHTML=e.formatted_datetime;var r=document.createElement("div"),l=document.createElement("h4");l.className="text","available"===e.ticket_status?(r.className="seemore item-inner tix-true",l.innerHTML="Tickets Available"):(r.className="seemore item-inner tix-false",l.innerHTML="Tickets Unavailable"),r.appendChild(l),r.addEventListener("click",function(t){s(e)}),r.addEventListener("mouseenter",function(e){e.target.classList.add("flip")}),r.addEventListener("mouseleave",function(e){e.target.classList.remove("flip")}),t.appendChild(a),t.appendChild(i),t.appendChild(r),n.appendChild(t)}var n=document.createElement("ul");n.className="concert-list";for(var a=0;a<e.length;a++)t(e[a]);u.SEE_IT.querySelector(".seeit-inner").appendChild(n)}function c(){}function s(e){var t=document.createElement("div");t.className="concert-info";var n=document.createElement("div");n.className="title",n.innerHTML="<h2>"+e.title+"</h2>";var a=document.createElement("div");if(a.className="date",a.innerHTML="<p>"+e.formatted_datetime+"</p>",e.description){var i=document.createElement("div");i.className="description",i.innerHTML="<p>Event Description: "+e.description+"</p>"}var r=document.createElement("div");r.className="venue";var l=document.createElement("p");l.className="venue-detail",l.innerHTML="Venue: "+e.venue.name;var c=document.createElement("p");c.className="venue-detail",c.innerHTML="Place: "+e.venue.place;var s=document.createElement("p");s.className="venue-detail",s.innerHTML="Location: "+e.venue.city+", "+e.venue.region,r.appendChild(l),r.appendChild(c),r.appendChild(s);var o=document.createElement("a");o.target="_blank";var d=document.createElement("div");d.className="tickets","available"===e.ticket_status?(o.href=e.ticket_url,d.innerHTML="Buy Tickets",d.classList.add("tix-true")):(d.innerHTML="Tickets Unavailable",d.classList.add("tix-false"),o.href="javascript: void(0)",o.style.pointerEvents="none"),o.appendChild(d);var m=document.createElement("a");m.target="_blank",m.href=e.facebook_rsvp_url;var p=document.createElement("div");p.className="fa fa-share share",m.appendChild(p),t.appendChild(n),t.appendChild(a),e.description&&t.appendChild(i),t.appendChild(r),t.appendChild(o),t.appendChild(m);new Modal(t).show()}function o(e){document.querySelector("iframe").src="https://embed.spotify.com/?uri="+e.target.uri,d()}function d(){document.body.scrollTop=v}function m(){for(var e=0;e<C.length;e++)C[e].addEventListener("click",function(e){if(!e.target.classList.contains("active")){for(var t=0;t<w.length;t++)w[t].classList.contains("active")&&(w[t].classList.remove("active"),C[t].classList.remove("active"));var n=e.target.attributes.isFor.value,a=document.getElementById("wheel-"+n);a.className+=" active fade",setTimeout(function(){a.classList.remove("fade")},10),e.target.className+=" active fade",setTimeout(function(){e.target.classList.remove("fade")},10)}})}var p="https://api.spotify.com/v1",u={HEAR_IT:document.getElementById("hearit"),SEE_IT:document.getElementById("seeit"),SING_IT:document.getElementById("singit"),DISCOVER_IT:document.getElementById("discoverit")},v=590,h="https://kgsearch.googleapis.com/v1/entities:search?query=ARTIST&key=AIzaSyAUrXU5tUMx8z9kuUq_uYKro-IHsTigorY&limit=5&indent=True&types=MusicGroup&types=Person",f="&app_id=Groupie",E={BASE:"http://api.bandsintown.com/artists/",ARTIST:"ARTIST.json?api_version=2.0"+f,ALL_EVENTS:"ARTIST/events.json?api_version=2.0"+f},T="https://jsonp.afeld.me/?url=",g=new User;g.authenticated()||g.create(),g.establish(g.fetchLocal("MODEL"));var y=g.fetchLocal("CURRENT_ARTIST");if(!y)return window.location.assign("/");var L=new Artist(y.id,y.name,y.slug);e();var w=document.querySelectorAll(".wheel-item"),C=document.querySelectorAll(".content-wheel .navigation .list .item");m();var b=document.querySelector("header");window.addEventListener("scroll",function(){window.scrollY>50?b.classList.contains("darken")||(b.className+=" darken"):b.classList.remove("darken")})}();