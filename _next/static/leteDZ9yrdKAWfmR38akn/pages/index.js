(window.webpackJsonp=window.webpackJsonp||[]).push([["d0a3"],{"25br":function(a,e,r){var t={"./coatedfogra27.json":["Ji1/","4fd0"],"./coatedfogra39.json":["h/g6","2e9f"],"./coatedgracol2006.json":["2GQT","c7bf"],"./japancolor2001coated.json":["3tR1","2ac6"],"./japancolor2001uncoated.json":["HNPe","7242"],"./japancolor2002newspaper.json":["nGQx","105c"],"./japancolor2003webcoated.json":["74Pz","bf9b"],"./japanwebcoated.json":["X/D8","5c6e"],"./uncoatedfogra29.json":["i0vc","195b"],"./usnewsprintsnap2007.json":["OAAe","0e3d"],"./ussheetfedcoated.json":["zEZN","4d05"],"./ussheetfeduncoated.json":["UnuE","13bc"],"./uswebcoatedswop.json":["AC5A","0466"],"./uswebuncoated.json":["y/LR","7c27"],"./webcoatedfogra28.json":["tI9N","08d9"],"./webcoatedswop2006grade3.json":["bVpx","d71b"],"./webcoatedswop2006grade5.json":["JXcF","74e3"]};function n(a){var e=t[a];return e?r.e(e[1]).then(function(){var a=e[0];return r.t(a,3)}):Promise.resolve().then(function(){var e=new Error("Cannot find module '"+a+"'");throw e.code="MODULE_NOT_FOUND",e})}n.keys=function(){return Object.keys(t)},n.id="25br",a.exports=n},L31u:function(a,e,r){!function(a){"use strict";function e(a,e){if("number"==typeof a)return 3===e?{mode:"rgb",r:(a>>8&15|a>>4&240)/255,g:(a>>4&15|240&a)/255,b:(15&a|a<<4&240)/255}:4===e?{mode:"rgb",r:(a>>12&15|a>>8&240)/255,g:(a>>8&15|a>>4&240)/255,b:(a>>4&15|240&a)/255,alpha:(15&a|a<<4&240)/255}:6===e?{mode:"rgb",r:(a>>16&255)/255,g:(a>>8&255)/255,b:(255&a)/255}:8===e?{mode:"rgb",r:(a>>24&255)/255,g:(a>>16&255)/255,b:(a>>8&255)/255,alpha:(255&a)/255}:void 0}var r={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},t=(/([+-]?\d*\.?\d+(?:[eE][+-]?\d+)?)/+"").replace(/^\/|\/$/g,""),n=t+"%",o="(?:"+t+"%|"+t+")",i="(?:"+t+"(deg|grad|rad|turn)|"+t+")",h="\\s*,\\s*",u="\\s+",l=new RegExp("^rgba?\\(\\s*"+t+h+t+h+t+"\\s*(?:,\\s*"+o+"\\s*)?\\)$"),c=new RegExp("^rgba?\\(\\s*"+n+h+n+h+n+"\\s*(?:,\\s*"+o+"\\s*)?\\)$"),d=new RegExp("^rgba?\\(\\s*"+t+u+t+u+t+"\\s*(?:\\/\\s*"+o+"\\s*)?\\)$"),s=new RegExp("^rgba?\\(\\s*"+n+u+n+u+n+"\\s*(?:\\/\\s*"+o+"\\s*)?\\)$"),p=new RegExp("^hsla?\\(\\s*"+i+h+n+h+n+"\\s*(?:,\\s*"+o+"\\s*)?\\)$"),b=new RegExp("^hsla?\\(\\s*"+i+u+n+u+n+"\\s*(?:\\/\\s*"+o+"\\s*)?\\)$"),f=/^#?([0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{4}|[0-9a-f]{3})$/i,v=new RegExp("^hwb\\(\\s*"+i+u+n+u+n+"\\s*(?:\\/\\s*"+o+"\\s*)?\\)$"),g=new RegExp("^lab\\(\\s*"+t+u+t+u+t+"\\s*(?:\\/\\s*"+o+"\\s*)?\\)$"),m=new RegExp("^lch\\(\\s*"+t+u+t+u+i+"\\s*(?:\\/\\s*"+o+"\\s*)?\\)$"),M=new RegExp("^gray\\(\\s*"+t+"()()\\s*(?:\\/\\s*"+o+"\\s*)?\\)$");function w(a){return a}var y=function(a){for(var e=[],r=0;r<a.length-1;r++){var t=a[r],n=a[r+1];void 0===t&&void 0===n?e.push(void 0):void 0!==t&&void 0!==n?e.push([t,n]):e.push(void 0!==t?[t,t]:[n,n])}return e};function k(a,e){return void 0===a&&(a=w),void 0===e&&(e=1),function(r){var t=(a||w)(r),n=y(t);return function(a){var r=(a=Math.pow(a,e))*n.length,t=1===a?n.length-1:Math.floor(r),o=n[t];return void 0===o?void 0:o[0]+(r-t)*(o[1]-o[0])}}}function j(a){return a.map(function(a,e,r){return void 0===a&&void 0!==r[e+1]?1:a})}var P={mode:"rgb",channels:["r","g","b","alpha"],parsers:[function(a){var r;return(r=a.match(f))?e(parseInt(r[1],16),r[1].length):void 0},function(a){var e,r;if(e=a.match(l)||a.match(d))r={mode:"rgb",r:e[1]/255,g:e[2]/255,b:e[3]/255};else{if(!(e=a.match(c)||a.match(s)))return;r={mode:"rgb",r:e[1]/100,g:e[2]/100,b:e[3]/100}}return void 0!==e[4]?r.alpha=e[4]/100:void 0!==e[5]&&(r.alpha=+e[5]),r},function(a){return"string"==typeof a&&e(r[a.toLowerCase()],6)||void 0},function(a){return"transparent"===a?e(0,8):void 0}],interpolate:{r:k(),g:k(),b:k(),alpha:k(j)}},q=function(a){return a<.04045?a/12.92:Math.pow((a+.055)/1.055,2.4)};function I(a){var e=a.r,r=a.g,t=a.b,n=a.alpha,o={mode:"lrgb",r:q(e),g:q(r),b:q(t)};return void 0!==n&&(o.alpha=n),o}var x=function(a){return a>.0031308?1.055*Math.pow(a,1/2.4)-.055:12.92*a};function E(a){var e=a.r,r=a.g,t=a.b,n=a.alpha,o={mode:"rgb",r:x(e),g:x(r),b:x(t)};return void 0!==n&&(o.alpha=n),o}var O={mode:"lrgb",output:{rgb:E},input:{rgb:I},channels:["r","g","b","alpha"],interpolate:{r:k(),g:k(),b:k(),alpha:k(j)}};function C(a){return(a%=360)<0?a+360:a}var S=function(a,e){switch(e){case"deg":return+a;case"rad":return a/Math.PI*180;case"grad":return a/10*9;case"turn":return 360*a}};function R(a){for(var e=[],r=0;r<a.length;r++)if(void 0!==a[r]){var t=C(a[r]),n=void 0;0!==r&&void 0!==(n=e[e.length-1])?e.push(Math.abs(t-n)>180?t-360*Math.sign(t-n):t):e.push(t)}else e.push(void 0);return e}var N={mode:"hsl",output:{rgb:function(a){var e=a.h,r=a.s,t=a.l,n=a.alpha;e=C(e);var o,i=t+r*(t<.5?t:1-t),h=i-2*(i-t)*Math.abs(e/60%2-1);switch(Math.floor(e/60)){case 0:o={r:i,g:h,b:2*t-i};break;case 1:o={r:h,g:i,b:2*t-i};break;case 2:o={r:2*t-i,g:i,b:h};break;case 3:o={r:2*t-i,g:h,b:i};break;case 4:o={r:h,g:2*t-i,b:i};break;case 5:o={r:i,g:2*t-i,b:h};break;default:o={r:2*t-i,g:2*t-i,b:2*t-i}}return o.mode="rgb",void 0!==n&&(o.alpha=n),o}},input:{rgb:function(a){var e=a.r,r=a.g,t=a.b,n=a.alpha,o=Math.max(e,r,t),i=Math.min(e,r,t),h={mode:"hsl",s:o===i?0:(o-i)/(1-Math.abs(o+i-1)),l:.5*(o+i)};return o-i!=0&&(h.h=60*(o===e?(r-t)/(o-i)+6*(r<t):o===r?(t-e)/(o-i)+2:(e-r)/(o-i)+4)),void 0!==n&&(h.alpha=n),h}},channels:["h","s","l","alpha"],ranges:{h:[0,360]},parsers:[function(a){if("string"==typeof a){var e=a.match(p)||a.match(b);if(e){var r={mode:"hsl",h:void 0===e[3]?S(e[1],e[2]):+e[3],s:Math.min(Math.max(0,e[4]/100),1),l:Math.min(Math.max(0,e[5]/100),1)};return void 0!==e[6]?r.alpha=e[6]/100:void 0!==e[7]&&(r.alpha=e[7]/255),r}}}],interpolate:{h:k(R),s:k(),l:k(),alpha:k(j)}};function A(a){var e=a.h,r=a.s,t=a.v,n=a.alpha;e=C(e);var o,i=Math.abs(e/60%2-1);switch(Math.floor(e/60)){case 0:o={r:t,g:t*(1-r*i),b:t*(1-r)};break;case 1:o={r:t*(1-r*i),g:t,b:t*(1-r)};break;case 2:o={r:t*(1-r),g:t,b:t*(1-r*i)};break;case 3:o={r:t*(1-r),g:t*(1-r*i),b:t};break;case 4:o={r:t*(1-r*i),g:t*(1-r),b:t};break;case 5:o={r:t,g:t*(1-r),b:t*(1-r*i)};break;default:o={r:t*(1-r),g:t*(1-r),b:t*(1-r)}}return o.mode="rgb",void 0!==n&&(o.alpha=n),o}function U(a){var e=a.r,r=a.g,t=a.b,n=a.alpha,o=Math.max(e,r,t),i=Math.min(e,r,t),h={mode:"hsv",s:0===o?0:1-i/o,v:o};return o-i!=0&&(h.h=60*(o===e?(r-t)/(o-i)+6*(r<t):o===r?(t-e)/(o-i)+2:(e-r)/(o-i)+4)),void 0!==n&&(h.alpha=n),h}var $={mode:"hsv",output:{rgb:A},input:{rgb:U},channels:["h","s","v","alpha"],ranges:{h:[0,360]},interpolate:{h:k(R),s:k(),v:k(),alpha:k(j)}},G={mode:"hsi",output:{rgb:function(a){var e=a.h,r=a.s,t=a.i,n=a.alpha;e=C(e);var o,i=Math.abs(e/60%2-1);switch(Math.floor(e/60)){case 0:o={r:t*(1+r*(3/(2-i)-1)),g:t*(1+r*(3*(1-i)/(2-i)-1)),b:t*(1-r)};break;case 1:o={r:t*(1+r*(3*(1-i)/(2-i)-1)),g:t*(1+r*(3/(2-i)-1)),b:t*(1-r)};break;case 2:o={r:t*(1-r),g:t*(1+r*(3/(2-i)-1)),b:t*(1+r*(3*(1-i)/(2-i)-1))};break;case 3:o={r:t*(1-r),g:t*(1+r*(3*(1-i)/(2-i)-1)),b:t*(1+r*(3/(2-i)-1))};break;case 4:o={r:t*(1+r*(3*(1-i)/(2-i)-1)),g:t*(1-r),b:t*(1+r*(3/(2-i)-1))};break;case 5:o={r:t*(1+r*(3/(2-i)-1)),g:t*(1-r),b:t*(1+r*(3*(1-i)/(2-i)-1))};break;default:o={r:t*(1-r),g:t*(1-r),b:t*(1-r)}}return o.mode="rgb",void 0!==n&&(o.alpha=n),o}},input:{rgb:function(a){var e=a.r,r=a.g,t=a.b,n=a.alpha,o=Math.max(e,r,t),i=Math.min(e,r,t),h={mode:"hsi",s:e+r+t===0?0:1-3*i/(e+r+t),i:(e+r+t)/3};return o-i!=0&&(h.h=60*(o===e?(r-t)/(o-i)+6*(r<t):o===r?(t-e)/(o-i)+2:(e-r)/(o-i)+4)),void 0!==n&&(h.alpha=n),h}},channels:["h","s","i","alpha"],ranges:{h:[0,360]},interpolate:{h:k(R),s:k(),i:k(),alpha:k(j)}},W={mode:"hwb",output:{rgb:function(a){var e=a.h,r=a.w,t=a.b;if(r+t>1){var n=r+t;r/=n,t/=n}return A({h:e,s:1===t?1:1-r/(1-t),v:1-t,alpha:a.alpha})}},input:{rgb:function(a){var e=U(a);if(void 0!==e){var r={mode:"hwb",w:(1-e.s)*e.v,b:1-e.v};return void 0!==e.h&&(r.h=e.h),void 0!==e.alpha&&(r.alpha=e.alpha),r}}},channels:["h","w","b","alpha"],ranges:{h:[0,360]},parsers:[function(a){if("string"==typeof a){var e=a.match(v);if(e){var r={mode:"hwb",h:void 0===e[3]?S(e[1],e[2]):+e[3],w:e[4]/100,b:e[5]/100};if(r.w+r.b>1){var t=r.w+r.b;r.w/=t,r.b/=t}return void 0!==e[6]?r.alpha=e[6]/100:void 0!==e[7]&&(r.alpha=e[7]/255),r}}}],interpolate:{h:k(R),w:k(),b:k(),alpha:k(j)}},_=.96422,J=1,L=.82521,z=Math.pow(29,3)/Math.pow(3,3),D=Math.pow(6,3)/Math.pow(29,3),F=function(a){return Math.pow(a,3)>D?Math.pow(a,3):(116*a-16)/z};function T(a){var e,r,t,n,o,i=function(a){var e=a.x,r=a.y,t=a.z;return E({r:3.1338561*e-1.6168667*r-.4906146*t,g:-.9787684*e+1.9161415*r+.033454*t,b:.0719453*e-.2289914*r+1.4052427*t})}((r=(e=a).l,t=e.a,o=(n=(r+16)/116)-e.b/200,{x:F(t/500+n)*_,y:F(n)*J,z:F(o)*L}));return i.mode="rgb",void 0!==a.alpha&&(i.alpha=a.alpha),i}var X=function(a){return a>D?Math.cbrt(a):(z*a+16)/116};function Q(a){var e,r,t,n,o,i,h=(e=function(a){var e=I(a),r=e.r,t=e.g,n=e.b;return{x:.4360747*r+.3850649*t+.1430804*n,y:.2225045*r+.7168786*t+.0606169*n,z:.0139322*r+.0971045*t+.7141733*n}}(a),r=e.x,t=e.y,n=e.z,o=X(r/_),{mode:"lab",l:116*(i=X(t/J))-16,a:500*(o-i),b:200*(i-X(n/L))});return a.r===a.b===a.g&&(h.a=h.b=0),void 0!==a.alpha&&(h.alpha=a.alpha),h}var B={mode:"lab",output:{rgb:T},input:{rgb:Q},channels:["l","a","b","alpha"],ranges:{l:[0,100],a:[-79.167,93.408],b:[-111.859,93.246]},parsers:[function(a){if("string"==typeof a){var e,r;if(e=a.match(g))r={mode:"lab",l:+e[1],a:+e[2],b:+e[3]};else{if(!(e=a.match(M)))return;r={mode:"lab",l:+e[1],a:0,b:0}}return void 0!==e[4]?r.alpha=e[4]/100:void 0!==e[5]&&(r.alpha=+e[5]),r}}],interpolate:{l:k(),a:k(),b:k(),alpha:k(j)}};function H(a){var e=a.l,r=a.a,t=a.b,n=a.alpha,o=Math.sqrt(r*r+t*t),i={mode:"lch",l:e,c:o};return o&&(i.h=C(180*Math.atan2(t,r)/Math.PI)),void 0!==n&&(i.alpha=n),i}function Z(a){var e=a.l,r=a.c,t=a.h,n=a.alpha,o={mode:"lab",l:e,a:0===r?0:r*Math.cos(t/180*Math.PI),b:0===r?0:r*Math.sin(t/180*Math.PI)};return void 0!==n&&(o.alpha=n),o}var K={mode:"lch",output:{lab:Z,rgb:function(a){return T(Z(a))}},input:{rgb:function(a){return H(Q(a))},lch:H},channels:["l","c","h","alpha"],ranges:{l:[0,100],c:[0,131.008],h:[0,360]},parsers:[function(a){if("string"==typeof a){var e=a.match(m);if(e){var r={mode:"lch",l:+e[1],c:Math.max(0,+e[2]),h:void 0===e[5]?S(e[3],e[4]):+e[5]};return void 0!==e[6]?r.alpha=e[6]/100:void 0!==e[7]&&(r.alpha=+e[7]),r}}}],interpolate:{h:k(R),c:k(),l:k(),alpha:k(j)}},V=[-.14861,1.78277,-.29227,-.90649,1.97294,0],Y=Math.PI/180,aa=180/Math.PI,ea=V[3]*V[4],ra=V[1]*V[4],ta=V[1]*V[2]-V[0]*V[3],na={mode:"cubehelix",channels:["h","s","l","alpha"],ranges:{h:[0,360],s:[0,4.6143]},input:{rgb:function(a){var e=a.r,r=a.g,t=a.b,n=a.alpha,o=(ta*t+e*ea-r*ra)/(ta+ea-ra),i=t-o,h=(V[4]*(r-o)-V[2]*i)/V[3],u={mode:"cubehelix",l:o,s:0===o||1===o?void 0:Math.sqrt(i*i+h*h)/(V[4]*o*(1-o))};return u.s&&(u.h=Math.atan2(h,i)*aa-120),void 0!==n&&(u.alpha=n),u}},output:{rgb:function(a){var e=a.h,r=a.s,t=a.l,n=a.alpha,o={mode:"rgb"};e=(void 0===e?0:e+120)*Y;var i=void 0===r?0:r*t*(1-t),h=Math.cos(e),u=Math.sin(e);return o.r=t+i*(V[0]*h+V[1]*u),o.g=t+i*(V[2]*h+V[3]*u),o.b=t+i*(V[4]*h+V[5]*u),void 0!==n&&(o.alpha=n),o}},interpolate:{h:k(R),s:k(),l:k(),alpha:k(j)}};function oa(a){var e=a.l,r=a.a,t=a.b,n=a.alpha,o=Math.sqrt(r*r+t*t),i={mode:"dlch",l:e,c:o};return o&&(i.h=C(180*Math.atan2(t,r)/Math.PI)),void 0!==n&&(i.alpha=n),i}var ia=1,ha=1,ua=26/180*Math.PI,la=Math.cos(ua),ca=Math.sin(ua),da=100/Math.log(1.39);function sa(a){var e=a.l,r=a.c,t=a.h,n=a.alpha,o={mode:"lab",l:(Math.exp(e*ia/da)-1)/.0039};if(void 0===t)o.a=o.b=0;else{var i=(Math.exp(.0435*r*ha*ia)-1)/.075,h=i*Math.cos(t/180*Math.PI-ua),u=i*Math.sin(t/180*Math.PI-ua);o.a=h*la-u/.83*ca,o.b=h*ca+u/.83*la}return void 0!==n&&(o.alpha=n),o}function pa(a){return sa(oa(a))}function ba(a){var e=a.l,r=a.a,t=a.b,n=a.alpha,o=r*la+t*ca,i=.83*(t*la-r*ca),h=Math.sqrt(o*o+i*i),u={mode:"dlch",l:da/ia*Math.log(1+.0039*e),c:Math.log(1+.075*h)/(.0435*ha*ia)};return u.c&&(u.h=(Math.atan2(i,o)+ua)/Math.PI*180),void 0!==n&&(u.alpha=n),u}function fa(a){var e=a.l,r=a.c,t=a.h,n=a.alpha,o={mode:"dlab",l:e,a:0===r?0:r*Math.cos(t/180*Math.PI),b:0===r?0:r*Math.sin(t/180*Math.PI)};return void 0!==n&&(o.alpha=n),o}function va(a){return fa(ba(a))}var ga={mode:"dlab",output:{lab:pa,rgb:function(a){return T(pa(a))}},input:{lab:va,rgb:function(a){return va(Q(a))}},channels:["l","a","b","alpha"],ranges:{l:[0,100],a:[-39.229,45.166],b:[-43.002,44.424]},interpolate:{l:k(),a:k(),b:k(),alpha:k(j)}},ma={mode:"dlch",output:{lab:sa,dlab:fa,rgb:function(a){return T(sa(a))}},input:{lab:ba,dlab:oa,rgb:function(a){return ba(Q(a))}},channels:["l","c","h","alpha"],ranges:{l:[0,100],c:[0,50.944],h:[0,360]},interpolate:{l:k(),c:k(),h:k(R),alpha:k(j)}},Ma={mode:"yiq",output:{rgb:function(a){var e=a.y,r=a.i,t=a.q;return E({r:e+.95608445*r+.6208885*t,g:e-.27137664*r-.6486059*t,b:e-1.10561724*r+1.70250126*t,alpha:a.alpha})}},input:{rgb:function(a){var e=I(a),r=e.r,t=e.g,n=e.b,o=e.alpha,i={mode:"yiq",y:.29889531*r+.58662247*t+.11448223*n,i:.59597799*r-.2741761*t-.32180189*n,q:.21147017*r-.52261711*t+.31114694*n};return void 0!==o&&(i.alpha=o),i}},channels:["y","i","q","alpha"],ranges:{i:[-.593,.593],q:[-.52,.52]},interpolate:{y:k(),i:k(),q:k(),alpha:k(j)}},wa={},ya={},ka=[],ja=function(a){wa[a.mode]=Object.assign(wa[a.mode]||{},a.output),Object.keys(a.input||{}).forEach(function(e){wa[e]||(wa[e]={}),wa[e][a.mode]=a.input[e]}),a.ranges||(a.ranges={}),a.channels.forEach(function(e){void 0===a.ranges[e]&&(a.ranges[e]=[0,1])}),ya[a.mode]=a,(a.parsers||[]).forEach(function(a){return ka.push(a)})},Pa=function(a){return ya[a]},qa=function(a){for(var e,r=0,t=ka.length;r<t&&void 0===(e=ka[r++](a)););return e},Ia=function(a){return void 0===a&&(a="rgb"),function(e){return void 0!==(e=function(a,e){return void 0===a?void 0:"object"!=typeof a?qa(a):void 0===a.mode?Object.assign({},a,{mode:e}):a}(e,a))?e.mode===a?e:wa[e.mode][a]?wa[e.mode][a](e):"rgb"===a?wa[e.mode].rgb(e):wa.rgb[a](wa[e.mode].rgb(e)):void 0}},xa=function(a,e){return Math.round(a*(e=Math.pow(10,e)))/e};function Ea(a){return void 0===a&&(a=4),function(e){return"number"==typeof e?xa(e,a):e}}function Oa(a){return Math.round(255*Math.max(0,Math.min(a,1)))}var Ca=Ia("rgb"),Sa=Ea(2);function Ra(a){return void 0===a&&(a=.5),function(e){return a<=0?1:a>=1?0:Math.pow(e,Math.log(.5)/Math.log(a))}}var Na=function(a,e,r,t,n){var o=n*n,i=o*n;return((1-3*n+3*o-i)*a+(4-6*o+3*i)*e+(1+3*n+3*o-3*i)*r+i*t)/6};function Aa(a,e,r){return void 0===a&&(a=w),void 0===e&&(e="default"),void 0===r&&(r=1),function(t){var n=(a||w)(t);return function(a){a=Math.pow(a,r);var t=n.length-1,o=1===a?t-1:Math.floor(a*t);switch(e){case"default":return Na(o>0?n[o-1]:2*n[o]-n[o+1],n[o],n[o+1],o<t-1?n[o+2]:2*n[o+1]-n[o],(a-o/t)*t);case"closed":return Na(n[(o-1+n.length)%n.length],n[o],n[(o+1)%n.length],n[(o+2)%n.length],(a-o/t)*t);case"open":throw new Error("open basis spline is not yet implemented")}}}}var Ua=function(a,e,r,t,n,o){var i=o*o,h=(r-a)/(2*n),u=(t-e)/(2*n),l=(r-e)/n;return(h+u-2*l)/(n*n)*(i*o)+(3*l-2*h-u)/n*i+h*o+e},$a=Ia("rgb");function Ga(a){var e=$a(a);return void 0!==e&&e.r>=0&&e.r<=1&&e.g>=0&&e.g<=1&&e.b>=0&&e.b<=1}var Wa=Ia("lch"),_a=Ia("rgb"),Ja=function(a){return Math.max(0,Math.min(a,1))},La=function(a){var e=_a(a);return e.r=Ja(e.r),e.g=Ja(e.g),e.b=Ja(e.b),e},za=function(a,e){void 0===a&&(a="rgb"),void 0===e&&(e=[1,1,1,0]);var r=Pa(a).channels,t=Ia(a);return function(a,n){var o=t(a),i=t(n);return Math.sqrt(r.reduce(function(a,r,t){var n,h,u,l,c="h"===r?(n=o[r],h=i[r],u=C(n),l=C(h),Math.abs(l-u)>180?u-(l-360*Math.sign(l-u)):u-l):o[r]-i[r];return a+(e[t]||0)*Math.pow(isNaN(c)?0:c,2)},0))}},Da=function(a){return a},Fa={normal:function(a,e){return e},multiply:function(a,e){return a*e},screen:function(a,e){return a+e-a*e},"hard-light":function(a,e){return e<.5?2*a*e:2*e*(1-a)-1},overlay:function(a,e){return a<.5?2*e*a:2*a*(1-e)-1},darken:function(a,e){return Math.min(a,e)},lighten:function(a,e){return Math.max(a,e)},"color-dodge":function(a,e){return 0===a?0:1===e?1:Math.min(1,a/(1-e))},"color-burn":function(a,e){return 1===a?1:0===e?0:1-Math.min(1,(1-a)/e)},"soft-light":function(a,e){return e<.5?a-(1-2*e)*a*(1-a):a+(2*e-1)*((a<.25?((16*a-12)*a+4)*a:Math.sqrt(a))-a)},difference:function(a,e){return Math.abs(a-e)},exclusion:function(a,e){return a+e-2*a*e}};ja(P),ja(O),ja(N),ja($),ja(G),ja(W),ja(B),ja(K),ja(na),ja(ga),ja(ma),ja(Ma);var Ta=Ia("rgb"),Xa=Ia("lrgb"),Qa=Ia("hsl"),Ba=Ia("hsv"),Ha=Ia("hsi"),Za=Ia("hwb"),Ka=Ia("lab"),Va=Ia("lch"),Ya=Ia("cubehelix"),ae=Ia("dlab"),ee=Ia("dlch"),re=Ia("yiq");a.defineMode=ja,a.converter=Ia,a.hsl=Qa,a.hsv=Ba,a.hsi=Ha,a.hwb=Za,a.rgb=Ta,a.lab=Ka,a.lch=Va,a.lrgb=Xa,a.cubehelix=Ya,a.dlab=ae,a.dlch=ee,a.yiq=re,a.formatter=function(a){return void 0===a&&(a="rgb"),function(e){var r=Ca(e);if(void 0!==r){var t=Oa(r.r),n=Oa(r.g),o=Oa(r.b);return"hex"===a?"#"+(1<<24|t<<16|n<<8|o).toString(16).slice(1):"rgb"===a?void 0===r.alpha||1===r.alpha?"rgb("+t+", "+n+", "+o+")":"rgba("+t+", "+n+", "+o+", "+Sa(r.alpha)+")":void 0}}},a.round=Ea,a.interpolate=function(a,e,r){void 0===e&&(e="rgb");var t=Pa(e),n=Ia(e),o=[],i=[],h={};a.forEach(function(a){Array.isArray(a)?(o.push(n(a[0])),i.push(a[1])):"number"==typeof a||"function"==typeof a?h[i.length]=a:(o.push(n(a)),i.push(void 0))}),function(a){void 0===a[0]&&(a[0]=0),void 0===a[a.length-1]&&(a[a.length-1]=1);for(var e,r,t,n,o=1;o<a.length;){if(void 0===a[o]){for(r=o,t=a[o-1],e=o;void 0===a[e];)e++;for(n=(a[e]-t)/(e-o+1);o<e;)a[o]=t+(o+1-r)*n,o++}else a[o]<a[o-1]&&(a[o]=a[o-1]);o++}}(i);var u=t.channels.reduce(function(a,e){return a[e]=o.map(function(a){return a[e]}),a},{}),l=t.channels.reduce(function(a,e){return a[e]=a[e](u[e]),a},Object.assign({},t.interpolate,r)),c=o.length-1;return function(a){if((a=Math.min(Math.max(0,a),1))<=i[0])return o[0];if(a>i[c])return o[c];for(var r=0;i[r]<a;)r++;var n=i[r-1],u=i[r]-n,d=(a-n)/u,s=h[r];void 0!==s&&("number"==typeof s&&(s=Ra((s-n)/u)),d=s(d));var p=(r-1+d)/c;return t.channels.reduce(function(a,e){var r=l[e](p);return void 0!==r&&(a[e]=r),a},{mode:e})}},a.interpolateHue=R,a.interpolateAlpha=j,a.interpolateLinear=k,a.interpolateCosine=function(a,e){return void 0===a&&(a=w),void 0===e&&(e=1),function(r){var t=(a||w)(t);return function(r){var n=(r=Math.pow(r,e))*(t.length-1),o=Math.floor(n),i=t[o],h=t[o+1],u=n-o,l=a([i,h],u);if("object"==typeof l){i=l[0],h=l[1];var c=(1-Math.cos(u*Math.PI))/2;return i*(1-c)+h*c}return l}}},a.interpolateSplineBasis=Aa,a.interpolateSplineNatural=function(a,e,r){return void 0===a&&(a=w),void 0===e&&(e="default"),void 0===r&&(r=1),function(t){var n=(a||w)(t);return Aa(w,e,r)(function(a){var e,r=a.length-1,t=new Array(r),n=new Array(r),o=new Array(r);for(t[1]=.25,n[1]=(6*a[1]-a[0])/4,e=2;e<r;++e)t[e]=1/(4-t[e-1]),n[e]=(6*a[e]-(e==r-1?a[r]:0)-n[e-1])*t[e];for(o[0]=a[0],o[r]=a[r],r-1>0&&(o[r-1]=n[r-1]),e=r-2;e>0;--e)o[e]=n[e]-t[e]*o[e+1];return o}(n))}},a.interpolateSplineMonotone=function(a,e,r){return void 0===a&&(a=w),void 0===e&&(e="default"),void 0===r&&(r=1),function(t){var n=(a||w)(t);return function(a){a=Math.pow(a,r);var t,o=n.length-1;switch(1===a?(t=o-1,a=1):t=Math.floor(a*o),e){case"default":return Ua(t>0?n[t-1]:2*n[t]-n[t+1],n[t],n[t+1],t<o-1?n[t+2]:2*n[t+1]-n[t],1/o,a-t/o);case"closed":return Ua(n[(t-1+n.length)%n.length],n[t],n[(t+1)%n.length],n[(t+2)%n.length],1/o,a-t/o);case"open":throw new Error("open monotone spline not implemented yet")}}}},a.samples=function(a,e){if(void 0===a&&(a=2),void 0===e&&(e=1),a<2)return a<1?[]:[Math.pow(.5,e)];for(var r=[],t=0;t<a;t++)r.push(Math.pow(t/(a-1),e));return r},a.displayable=Ga,a.clamp=function(a){return void 0===a&&(a="rgb"),function(e){if(void 0===(e=function(a){return void 0===a?void 0:"object"!=typeof a?qa(a):void 0===a.mode?void 0:a}(e))||Ga(e))return e;var r=Ia(e.mode);if("rgb"===a)return r(La(e));e=Wa(e);var t=Object.assign({},e,{c:0});if(!Ga(t))return r(La(t));for(var n=0,o=e.c;o-n>.01;)t.c=n+.5*(o-n),Ga(t)?n=t.c:o=t.c;return r(t)}},a.nearest=function(a,e,r){void 0===e&&(e=za()),void 0===r&&(r=Da);var t=a.map(function(a,e){return{color:r(a),i:e}});return function(r,n,o){return void 0===n&&(n=1),void 0===o&&(o=1/0),isFinite(n)&&(n=Math.max(1,Math.min(n,t.length-1))),t.forEach(function(a){a.d=e(r,a.color)}),t.sort(function(a,e){return a.d-e.d}).slice(0,n).filter(function(a){return a.d<o}).map(function(e){return a[e.i]})}},a.getModeDefinition=Pa,a.parse=qa,a.differenceEuclidean=za,a.differenceCie76=function(){return za("lab")},a.differenceCie94=function(a,e,r){void 0===a&&(a=1),void 0===e&&(e=.045),void 0===r&&(r=.015);var t=Ia("lab");return function(n,o){var i=t(n),h=t(o),u=i.l,l=i.a,c=i.b,d=Math.sqrt(l*l+c*c),s=h.l,p=h.a,b=h.b,f=Math.sqrt(p*p+b*b),v=Math.pow(u-s,2),g=Math.pow(d-f,2),m=Math.pow(l-p,2)+Math.pow(c-b,2)-g;return Math.sqrt(v/Math.pow(a,2)+g/Math.pow(1+e*d,2)+m/Math.pow(1+r*d,2))}},a.differenceCiede2000=function(a,e,r){void 0===a&&(a=1),void 0===e&&(e=1),void 0===r&&(r=1);var t=Ia("lab");return function(n,o){var i=t(n),h=t(o),u=i.l,l=i.a,c=i.b,d=Math.sqrt(l*l+c*c),s=h.l,p=h.a,b=h.b,f=(d+Math.sqrt(p*p+b*b))/2,v=.5*(1-Math.sqrt(Math.pow(f,7)/(Math.pow(f,7)+Math.pow(25,7)))),g=l*(1+v),m=p*(1+v),M=Math.sqrt(g*g+c*c),w=Math.sqrt(m*m+b*b),y=Math.abs(g)+Math.abs(c)===0?0:Math.atan2(c,g);y+=2*(y<0)*Math.PI;var k=Math.abs(m)+Math.abs(b)===0?0:Math.atan2(b,m);k+=2*(k<0)*Math.PI;var j=s-u,P=w-M,q=M*w==0?0:k-y;q-=2*(q>Math.PI)*Math.PI,q+=2*(q<-Math.PI)*Math.PI;var I,x=2*Math.sqrt(M*w)*Math.sin(q/2),E=(u+s)/2,O=(M+w)/2;M*w==0?I=y+k:(I=(y+k)/2,I-=(Math.abs(y-k)>Math.PI)*Math.PI,I+=2*(I<0)*Math.PI);var C=Math.pow(E-50,2),S=1-.17*Math.cos(I-Math.PI/6)+.24*Math.cos(2*I)+.32*Math.cos(3*I+Math.PI/30)-.2*Math.cos(4*I-63*Math.PI/180),R=1+.015*C/Math.sqrt(20+C),N=1+.045*O,A=1+.015*O*S,U=30*Math.PI/180*Math.exp(-1*Math.pow((180/Math.PI*I-275)/25,2)),$=2*Math.sqrt(Math.pow(O,7)/(Math.pow(O,7)+Math.pow(25,7))),G=-1*Math.sin(2*U)*$;return Math.sqrt(Math.pow(j/(a*R),2)+Math.pow(P/(e*N),2)+Math.pow(x/(r*A),2)+G*P/(e*N)*x/(r*A))}},a.differenceCmc=function(a,e){void 0===a&&(a=1),void 0===e&&(e=1);var r=Ia("lab");return function(t,n){var o=r(t),i=o.l,h=o.a,u=o.b,l=Math.sqrt(h*h+u*u),c=Math.atan2(u,h);c+=2*Math.PI*(c<0);var d=r(n),s=d.l,p=d.a,b=d.b,f=Math.sqrt(p*p+b*b),v=Math.pow(i-s,2),g=Math.pow(l-f,2),m=Math.pow(h-p,2)+Math.pow(u-b,2)-g,M=Math.sqrt(Math.pow(l,4)/(Math.pow(l,4)+1900)),w=i<16?.511:.040975*i/(1+.01765*i),y=.0638*l/(1+.0131*l)+.638,k=y*(M*(c>=164/180*Math.PI&&c<=345/180*Math.PI?.56+Math.abs(.2*Math.cos(c+168/180*Math.PI)):.36+Math.abs(.4*Math.cos(c+35/180*Math.PI)))+1-M);return Math.sqrt(v/Math.pow(a*w,2)+g/Math.pow(e*y,2)+m/Math.pow(k,2))}},a.differenceDin99o=function(){return za("dlab")},a.differenceKotsarenkoRamos=function(){return za("yiq",[.5053,.299,.1957])},a.colorsNamed=r,a.blend=function(a,e,r){void 0===e&&(e="normal"),void 0===r&&(r="rgb");var t="function"==typeof e?e:Fa[e],n=Ia(r),o=Pa(r).channels;return a.map(function(a){var e=n(a);return void 0===e.alpha&&(e.alpha=1),e}).reduce(function(a,e){if(void 0===a)return e;var n=e.alpha+a.alpha*(1-e.alpha);return o.reduce(function(r,o){return"alpha"!==o&&(0===n?r[o]=0:(r[o]=e.alpha*(1-a.alpha)*e[o]+e.alpha*a.alpha*t(a[o],e[o])+(1-e.alpha)*a.alpha*a[o],r[o]=Math.max(0,Math.min(1,r[o]/n)))),r},{mode:r,alpha:n})})},a.random=function(a,e){void 0===a&&(a="rgb"),void 0===e&&(e={});var r=Pa(a),t=function(a){return Object.keys(a).reduce(function(e,r){var t=a[r];return e[r]=Array.isArray(t)?t:[t,t],e},{})}(e);return r.channels.reduce(function(a,e){return(t.alpha||"alpha"!==e)&&(a[e]=function(a){var e=a[0],r=a[1];return e+Math.random()*(r-e)}(t[e]||r.ranges[e])),a},{mode:a})},a.easingMidpoint=Ra,a.easingSmoothstep=function(a){return a*a*(3-2*a)},a.easingSmootherstep=function(a){return a*a*a*(a*(6*a-15)+10)},Object.defineProperty(a,"__esModule",{value:!0})}(e)},RNiq:function(a,e,r){"use strict";r.r(e);var t=r("doui"),n=r("pLtp"),o=r.n(n),i=r("q1tI"),h=r.n(i),u=r("L31u"),l=(r("Qm5N"),function(a){var e=a.color;return h.a.createElement("div",{className:"swatch",style:{backgroundColor:e}})}),c=(r("Zpkv"),r("cd+U")),d=o()(u.colorsNamed).sort().filter(function(a){return!a.match(/grey/i)}).map(function(a){return{name:a,value:a}}),s=[{id:"srgb",name:"sRGB",colors:d}].concat(c);e.default=function(){var a=Object(i.useState)("srgb"),e=Object(t.default)(a,2),n=e[0],o=e[1],u=Object(i.useState)(d),c=Object(t.default)(u,2),p=c[0],b=c[1];return Object(i.useEffect)(function(){var a=s.find(function(a){return a.id===n});a&&(a.colors?b(a.colors):r("25br")("./".concat(a.id,".json")).then(function(e){var r=e.default.colors;a.colors=r,b(r)}))},[n]),h.a.createElement("article",null,h.a.createElement("select",{value:n,onChange:function(a){return o(a.target.value)}},s.map(function(a){return h.a.createElement("option",{key:a.id,value:a.id},a.name)})),h.a.createElement("div",{className:"swatches"},h.a.createElement("div",{className:"swatchlist"},p.map(function(a,e){var r=a.value;return h.a.createElement(l,{color:r,key:e})}))))}},"cd+U":function(a){a.exports=[{name:"Coated FOGRA27 (ISO 12647-2:2004)",id:"coatedfogra27"},{name:"Coated FOGRA39 (ISO 12647-2:2004)",id:"coatedfogra39"},{name:"Coated GRACoL 2006 (ISO 12647-2:2004)",id:"coatedgracol2006"},{name:"Japan Color 2001 Coated",id:"japancolor2001coated"},{name:"Japan Color 2001 Uncoated",id:"japancolor2001uncoated"},{name:"Japan Color 2002 Newspaper",id:"japancolor2002newspaper"},{name:"Japan Color 2003 Web Coated",id:"japancolor2003webcoated"},{name:"Japan Web Coated (Ad)",id:"japanwebcoated"},{name:"US Newsprint (SNAP 2007)",id:"usnewsprintsnap2007"},{name:"U.S. Sheetfed Coated v2",id:"ussheetfedcoated"},{name:"U.S. Sheetfed Uncoated v2",id:"ussheetfeduncoated"},{name:"U.S. Web Coated (SWOP) v2",id:"uswebcoatedswop"},{name:"U.S. Web Uncoated v2",id:"uswebuncoated"},{name:"Uncoated FOGRA29 (ISO 12647-2:2004)",id:"uncoatedfogra29"},{name:"Web Coated FOGRA28 (ISO 12647-2:2004)",id:"webcoatedfogra28"},{name:"Web Coated SWOP 2006 Grade 3 Paper",id:"webcoatedswop2006grade3"},{name:"Web Coated SWOP 2006 Grade 5 Paper",id:"webcoatedswop2006grade5"}]},vlRD:function(a,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){var a=r("RNiq");return{page:a.default||a}}])}},[["vlRD","5d41","9da1","ad9d"]]]);