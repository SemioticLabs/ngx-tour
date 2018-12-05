(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{d312:function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),r=function(){return function(){}}(),e=u("pMnS"),o=u("9AJC"),b=u("aiOZ"),i=u("mrSG"),c=function(){function l(l){this.tourService=l}return l.prototype.ngOnInit=function(){this.tourService.register(this.tourAnchor,this)},l.prototype.ngOnDestroy=function(){this.tourService.unregister(this.tourAnchor)},l.prototype.showTourStep=function(l){console.group(l.title),console.log(l.content),console.log((l.placement||"above")+" "+this.tourAnchor),console.groupEnd()},l.prototype.hideTourStep=function(){},l}(),s=function(){function l(){}return l.forRoot=function(){return{ngModule:l,providers:Object(i.g)(b.b.forRoot().providers)}},l}(),a=u("ZYCi"),h=u("Ip0R"),d=t.pb({encapsulation:2,styles:[],data:{}});function p(l){return t.Ib(0,[t.Ab(null,0)],null,null)}var H=function(){return function(l){this.tourService=l,this.tourService.initialize([{anchorId:"start.tour",content:"Welcome to the Ngx-Tour tour!",placement:"below",title:"Welcome"},{anchorId:"angular-ui-tour",content:"Thanks to angular-ui-tour for the inspiration for the library",title:"angular-ui-tour"},{anchorId:"installation",content:"First, install the library...",title:"Installation"},{anchorId:"usage",content:"...then use it.",title:"Usage"},{anchorId:"tourService.start",content:"Don't forget to actually start the tour.",title:"Start the tour"},{anchorId:"config.anchorId",content:"Every step needs an anchor.",title:"Anchor"},{anchorId:"config.route",content:"Tours can span multiple routes.",title:"Route"},{anchorId:"another.route",content:"Like this!",route:"console/other",title:"Another Route"},{anchorId:"config.route",content:"And then back again.",placement:"below",title:"Route Return"},{anchorId:"config.placement.default",content:"Steps can be positioned around an anchor. You can even have multiple steps use the same anchor.",title:"Placement"},{anchorId:"config.placement.default",content:"Sliiide to the left.",placement:"left",title:"Placement"},{anchorId:"config.placement.default",content:"Sliiide to the right.",placement:"right",title:"Placement"},{anchorId:"config.placement.default",content:"Take it back now y'all.  One hop this time.",placement:"below",title:"Placement"},{anchorId:"hotkeys",content:"Try using the hotkeys to navigate through the tour.",title:"Hotkeys"},{anchorId:"events",content:"You can subscribe to events",title:"Events"}],{route:"console"}),this.tourService.start()}}(),f=t.pb({encapsulation:2,styles:[],data:{}});function g(l){return t.Ib(0,[(l()(),t.rb(0,0,null,null,1,"a",[["class","btn btn-default"],["href","https://github.com/isaacplmann/ng2-tour"]],null,null,null,null,null)),(l()(),t.Hb(-1,null,["View on GitHub"])),(l()(),t.rb(2,0,null,null,2,"a",[["class","btn btn-primary"],["style","cursor: pointer"],["tourAnchor","start.tour"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.tourService.toggle()&&t),t},null,null)),t.qb(3,212992,null,0,c,[b.c],{tourAnchor:[0,"tourAnchor"]},null),(l()(),t.Hb(-1,null,["Start Demo Tour"])),(l()(),t.rb(5,0,null,null,1,"a",[["class","btn btn-default"],["style","cursor: pointer"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.tourService.prev()&&t),t},null,null)),(l()(),t.Hb(-1,null,["Prev"])),(l()(),t.rb(7,0,null,null,1,"a",[["class","btn btn-default"],["style","cursor: pointer"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.tourService.next()&&t),t},null,null)),(l()(),t.Hb(-1,null,["Next"])),(l()(),t.rb(9,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),t.qb(10,212992,null,0,a.p,[a.b,t.Q,t.j,[8,null],t.h],null,null),(l()(),t.rb(11,0,null,null,1,"tour-hotkey-listener",[],null,[["window","keydown.Escape"],["window","keydown.ArrowRight"],["window","keydown.ArrowLeft"]],function(l,n,u){var r=!0;return"window:keydown.Escape"===n&&(r=!1!==t.Bb(l,12).onEscapeKey()&&r),"window:keydown.ArrowRight"===n&&(r=!1!==t.Bb(l,12).onArrowRightKey()&&r),"window:keydown.ArrowLeft"===n&&(r=!1!==t.Bb(l,12).onArrowLeftKey()&&r),r},p,d)),t.qb(12,49152,null,0,b.a,[b.c],null,null)],function(l,n){l(n,3,0,"start.tour"),l(n,10,0)},null)}function m(l){return t.Ib(0,[(l()(),t.rb(0,0,null,null,1,"console-route",[],null,null,null,g,f)),t.qb(1,49152,null,0,H,[b.c],null,null)],null,null)}var v=t.nb("console-route",H,m,{},{},[]),y=function(){return function(){}}(),w=t.pb({encapsulation:2,styles:[],data:{}});function A(l){return t.Ib(0,[(l()(),t.rb(0,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["About"])),(l()(),t.rb(2,0,null,null,5,"p",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["This is a product tour library built with Angular (2+). It's inspired by "])),(l()(),t.rb(4,0,null,null,2,"a",[["href","http://benmarch.github.io/angular-ui-tour"],["tourAnchor","angular-ui-tour"]],null,null,null,null,null)),t.qb(5,212992,null,0,c,[b.c],{tourAnchor:[0,"tourAnchor"]},null),(l()(),t.Hb(-1,null,["angular-ui-tour"])),(l()(),t.Hb(-1,null,["."])),(l()(),t.rb(8,0,null,null,3,"p",[],null,null,null,null,null)),(l()(),t.rb(9,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["TourConsoleModule"])),(l()(),t.Hb(-1,null,[" is a minimal implementation of the tour ui that uses only the browser's console to display tour steps."])),(l()(),t.rb(12,0,null,null,2,"h2",[["tourAnchor","installation"]],null,null,null,null,null)),t.qb(13,212992,null,0,c,[b.c],{tourAnchor:[0,"tourAnchor"]},null),(l()(),t.Hb(-1,null,["Installation"])),(l()(),t.rb(15,0,null,null,8,"ol",[],null,null,null,null,null)),(l()(),t.rb(16,0,null,null,2,"li",[],null,null,null,null,null)),(l()(),t.rb(17,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["npm install ngx-tour-core ngx-tour-console"])),(l()(),t.rb(19,0,null,null,4,"li",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["import "])),(l()(),t.rb(21,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["TourConsoleModule.forRoot()"])),(l()(),t.Hb(-1,null,[" into your app module"])),(l()(),t.rb(24,0,null,null,2,"h2",[["tourAnchor","usage"]],null,null,null,null,null)),t.qb(25,212992,null,0,c,[b.c],{tourAnchor:[0,"tourAnchor"]},null),(l()(),t.Hb(-1,null,["Usage"])),(l()(),t.rb(27,0,null,null,24,"ol",[],null,null,null,null,null)),(l()(),t.rb(28,0,null,null,7,"li",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,[" Define anchor points for the tour steps by adding the "])),(l()(),t.rb(30,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["tourAnchor"])),(l()(),t.Hb(-1,null,[" directive throughout your app. "])),(l()(),t.rb(33,0,null,null,2,"pre",[],null,null,null,null,null)),(l()(),t.rb(34,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,['<div tourAnchor="some.anchor.id">...</div>'])),(l()(),t.rb(36,0,null,null,5,"li",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,[" Define your tour steps using "])),(l()(),t.rb(38,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["tourService.initialize(steps)"])),(l()(),t.rb(40,0,null,null,1,"pre",[],null,null,null,null,null)),(l()(),t.Hb(41,null,["this.tourService.initialize([","\n  anchorId: 'some.anchor.id',\n  content: 'Some content',\n  title: 'First',\n}, ","\n  anchorId: 'another.anchor.id',\n  content: 'Other content',\n  title: 'Second',\n}]);"])),(l()(),t.rb(42,0,null,null,4,"li",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["Start the tour with "])),(l()(),t.rb(44,0,null,null,2,"code",[["tourAnchor","tourService.start"]],null,null,null,null,null)),t.qb(45,212992,null,0,c,[b.c],{tourAnchor:[0,"tourAnchor"]},null),(l()(),t.Hb(-1,null,["tourService.start()"])),(l()(),t.rb(47,0,null,null,4,"li",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["Check out the "])),(l()(),t.rb(49,0,null,null,1,"a",[["href","https://github.com/isaacplmann/ngx-tour/tree/master/src/app/console"]],null,null,null,null,null)),(l()(),t.Hb(-1,null,["demo source code"])),(l()(),t.Hb(-1,null,[" for an example."])),(l()(),t.rb(52,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["TourService"])),(l()(),t.rb(54,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["The "])),(l()(),t.rb(56,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["TourService"])),(l()(),t.Hb(-1,null,[" controls the tour. Some key functions include:"])),(l()(),t.rb(59,0,null,null,28,"dl",[],null,null,null,null,null)),(l()(),t.rb(60,0,null,null,1,"dt",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["start()"])),(l()(),t.rb(62,0,null,null,1,"dd",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["Starts the tour"])),(l()(),t.rb(64,0,null,null,1,"dt",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["startAt(stepId: number | string)"])),(l()(),t.rb(66,0,null,null,1,"dd",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["Start the tour at the step with stepId or at the specified index"])),(l()(),t.rb(68,0,null,null,1,"dt",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["end()"])),(l()(),t.rb(70,0,null,null,1,"dd",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["Ends the tour"])),(l()(),t.rb(72,0,null,null,1,"dt",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["pause()"])),(l()(),t.rb(74,0,null,null,1,"dd",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["Pauses the tour"])),(l()(),t.rb(76,0,null,null,1,"dt",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["resume()"])),(l()(),t.rb(78,0,null,null,1,"dd",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["Resumes the tour"])),(l()(),t.rb(80,0,null,null,1,"dt",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["next()"])),(l()(),t.rb(82,0,null,null,1,"dd",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["Goes to the next step"])),(l()(),t.rb(84,0,null,null,1,"dt",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["prev()"])),(l()(),t.rb(86,0,null,null,1,"dd",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["Goes to the previous step"])),(l()(),t.rb(88,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["Step Configuration"])),(l()(),t.rb(90,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["Each step can have the following properties."])),(l()(),t.rb(92,0,null,null,100,"table",[["class","table"]],null,null,null,null,null)),(l()(),t.rb(93,0,null,null,9,"thead",[],null,null,null,null,null)),(l()(),t.rb(94,0,null,null,8,"tr",[],null,null,null,null,null)),(l()(),t.rb(95,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["Name"])),(l()(),t.rb(97,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["Type"])),(l()(),t.rb(99,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["Default"])),(l()(),t.rb(101,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["Description"])),(l()(),t.rb(103,0,null,null,89,"tbody",[],null,null,null,null,null)),(l()(),t.rb(104,0,null,null,8,"tr",[],null,null,null,null,null)),(l()(),t.rb(105,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["stepId"])),(l()(),t.rb(107,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["string"])),(l()(),t.rb(109,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,['""'])),(l()(),t.rb(111,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["A unique identifier for the step"])),(l()(),t.rb(113,0,null,null,9,"tr",[["tourAnchor","config.anchorId"]],null,null,null,null,null)),t.qb(114,212992,null,0,c,[b.c],{tourAnchor:[0,"tourAnchor"]},null),(l()(),t.rb(115,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["anchorId"])),(l()(),t.rb(117,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["string"])),(l()(),t.rb(119,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["required"])),(l()(),t.rb(121,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["The anchor to which the step will be attached"])),(l()(),t.rb(123,0,null,null,8,"tr",[],null,null,null,null,null)),(l()(),t.rb(124,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["title"])),(l()(),t.rb(126,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["string"])),(l()(),t.rb(128,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,['""'])),(l()(),t.rb(130,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["The title of the tour step"])),(l()(),t.rb(132,0,null,null,8,"tr",[],null,null,null,null,null)),(l()(),t.rb(133,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["content"])),(l()(),t.rb(135,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["string"])),(l()(),t.rb(137,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,['""'])),(l()(),t.rb(139,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["The content text of the tour step"])),(l()(),t.rb(141,0,null,null,9,"tr",[["tourAnchor","config.route"]],null,null,null,null,null)),t.qb(142,212992,null,0,c,[b.c],{tourAnchor:[0,"tourAnchor"]},null),(l()(),t.rb(143,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["route"])),(l()(),t.rb(145,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["string | UrlSegment[]"])),(l()(),t.rb(147,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["undefined"])),(l()(),t.rb(149,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,[" The route to which the tour should navigate before attempting to show this tour step. If undefined, no navigation is attempted. "])),(l()(),t.rb(151,0,null,null,9,"tr",[["tourAnchor","config.nextStep"]],null,null,null,null,null)),t.qb(152,212992,null,0,c,[b.c],{tourAnchor:[0,"tourAnchor"]},null),(l()(),t.rb(153,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["nextStep"])),(l()(),t.rb(155,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["number | string"])),(l()(),t.rb(157,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["undefined"])),(l()(),t.rb(159,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["The step index or stepId of the next step. If undefined, the next step in the steps array is used."])),(l()(),t.rb(161,0,null,null,8,"tr",[],null,null,null,null,null)),(l()(),t.rb(162,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["prevStep"])),(l()(),t.rb(164,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["number | string"])),(l()(),t.rb(166,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["undefined"])),(l()(),t.rb(168,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["The step index or stepId of the previous step. If undefined, the previous step in the steps array is used."])),(l()(),t.rb(170,0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),t.rb(171,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["placement"])),(l()(),t.rb(173,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["'above' | 'below' | 'after' | 'before' | 'left' | 'right'"])),(l()(),t.rb(175,0,null,null,3,"td",[],null,null,null,null,null)),(l()(),t.rb(176,0,null,null,2,"span",[["tourAnchor","config.placement.default"]],null,null,null,null,null)),t.qb(177,212992,null,0,c,[b.c],{tourAnchor:[0,"tourAnchor"]},null),(l()(),t.Hb(-1,null,["'top'"])),(l()(),t.rb(179,0,null,null,4,"td",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,[" (* Ignored by "])),(l()(),t.rb(181,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["TourMdMenuModule"])),(l()(),t.Hb(-1,null,[") Where the tour step should placed with respect to the anchor. 'before' and 'after' are synonyms for 'left' and 'right' respectively. When RTL support is implemented, 'before' and 'after' will swap directions when RTL mode is enabled. "])),(l()(),t.rb(184,0,null,null,8,"tr",[],null,null,null,null,null)),(l()(),t.rb(185,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["preventScrolling"])),(l()(),t.rb(187,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["boolean"])),(l()(),t.rb(189,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["false"])),(l()(),t.rb(191,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,[" Tour steps automatically scroll to the middle of the screen, if they are off the screen when shown. Setting this value to true will disable the scroll behavior. "])),(l()(),t.rb(193,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["Defaults"])),(l()(),t.rb(195,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["You can set default values in the "])),(l()(),t.rb(197,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["TourService.initialize"])),(l()(),t.Hb(-1,null,[" function."])),(l()(),t.rb(200,0,null,null,1,"pre",[],null,null,null,null,null)),(l()(),t.Hb(201,null,["this.tourService.initialize(steps, ","\n  route: '',\n  placement: 'left',\n  preventScrolling: true,\n});\n"])),(l()(),t.rb(202,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["Any value explicitly defined in a step will override the default value."])),(l()(),t.rb(204,0,null,null,2,"h2",[["tourAnchor","hotkeys"]],null,null,null,null,null)),t.qb(205,212992,null,0,c,[b.c],{tourAnchor:[0,"tourAnchor"]},null),(l()(),t.Hb(-1,null,["Hotkeys"])),(l()(),t.rb(207,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,[" Hotkeys are provided using Angular's "])),(l()(),t.rb(209,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["@HostListener"])),(l()(),t.Hb(-1,null,[" decorator. Hotkeys are enabled when the tour starts and disabled when the tour ends.\n"])),(l()(),t.rb(212,0,null,null,15,"ul",[],null,null,null,null,null)),(l()(),t.rb(213,0,null,null,4,"li",[],null,null,null,null,null)),(l()(),t.rb(214,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["left arrow"])),(l()(),t.rb(216,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,[" - previous step"])),(l()(),t.rb(218,0,null,null,4,"li",[],null,null,null,null,null)),(l()(),t.rb(219,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["right arrow"])),(l()(),t.rb(221,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,[" - next step"])),(l()(),t.rb(223,0,null,null,4,"li",[],null,null,null,null,null)),(l()(),t.rb(224,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["esc"])),(l()(),t.rb(226,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,[" - end tour"])),(l()(),t.rb(228,0,null,null,6,"p",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,[" You can disable hotkeys by calling "])),(l()(),t.rb(230,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["tourService.disableHotkeys()"])),(l()(),t.Hb(-1,null,[" or re-enable with "])),(l()(),t.rb(233,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["tourService.enableHotkeys()"])),(l()(),t.rb(235,0,null,null,2,"h2",[["tourAnchor","events"]],null,null,null,null,null)),t.qb(236,212992,null,0,c,[b.c],{tourAnchor:[0,"tourAnchor"]},null),(l()(),t.Hb(-1,null,["Event Observables"])),(l()(),t.rb(238,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["The "])),(l()(),t.rb(240,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["TourService"])),(l()(),t.Hb(-1,null,[" emits events that can be subscribed to like this:"])),(l()(),t.rb(243,0,null,null,1,"pre",[],null,null,null,null,null)),(l()(),t.Hb(244,null,["this.tourService.initialize$.subscribe((steps: IStepOption[]) => ","\n  console.log('tour configured with these steps:', steps);\n});\n"])),(l()(),t.rb(245,0,null,null,72,"table",[["class","table"]],null,null,null,null,null)),(l()(),t.rb(246,0,null,null,7,"thead",[],null,null,null,null,null)),(l()(),t.rb(247,0,null,null,6,"tr",[],null,null,null,null,null)),(l()(),t.rb(248,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["Name"])),(l()(),t.rb(250,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["Payload"])),(l()(),t.rb(252,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["Emitted When"])),(l()(),t.rb(254,0,null,null,63,"tbody",[],null,null,null,null,null)),(l()(),t.rb(255,0,null,null,6,"tr",[],null,null,null,null,null)),(l()(),t.rb(256,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["stepShow$"])),(l()(),t.rb(258,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["IStepOption"])),(l()(),t.rb(260,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["A step is shown"])),(l()(),t.rb(262,0,null,null,6,"tr",[],null,null,null,null,null)),(l()(),t.rb(263,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["stepHide$"])),(l()(),t.rb(265,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["IStepOption"])),(l()(),t.rb(267,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["A step is hidden"])),(l()(),t.rb(269,0,null,null,6,"tr",[],null,null,null,null,null)),(l()(),t.rb(270,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["initialize$"])),(l()(),t.rb(272,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["IStepOption[]"])),(l()(),t.rb(274,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["The tour is configured with a set of steps"])),(l()(),t.rb(276,0,null,null,6,"tr",[],null,null,null,null,null)),(l()(),t.rb(277,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["start$"])),(l()(),t.rb(279,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["IStepOption"])),(l()(),t.rb(281,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["The tour begins"])),(l()(),t.rb(283,0,null,null,6,"tr",[],null,null,null,null,null)),(l()(),t.rb(284,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["end$"])),(l()(),t.rb(286,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["any"])),(l()(),t.rb(288,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["The tour ends"])),(l()(),t.rb(290,0,null,null,6,"tr",[],null,null,null,null,null)),(l()(),t.rb(291,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["pause$"])),(l()(),t.rb(293,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["IStepOption"])),(l()(),t.rb(295,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["The tour is paused"])),(l()(),t.rb(297,0,null,null,6,"tr",[],null,null,null,null,null)),(l()(),t.rb(298,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["resume$"])),(l()(),t.rb(300,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["IStepOption"])),(l()(),t.rb(302,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["The tour resumes"])),(l()(),t.rb(304,0,null,null,6,"tr",[],null,null,null,null,null)),(l()(),t.rb(305,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["anchorRegister$"])),(l()(),t.rb(307,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["string"])),(l()(),t.rb(309,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["An anchor is registered with the tour"])),(l()(),t.rb(311,0,null,null,6,"tr",[],null,null,null,null,null)),(l()(),t.rb(312,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["anchorUnregister$"])),(l()(),t.rb(314,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["string"])),(l()(),t.rb(316,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["An anchor is unregistered from the tour"]))],function(l,n){l(n,5,0,"angular-ui-tour"),l(n,13,0,"installation"),l(n,25,0,"usage"),l(n,45,0,"tourService.start"),l(n,114,0,"config.anchorId"),l(n,142,0,"config.route"),l(n,152,0,"config.nextStep"),l(n,177,0,"config.placement.default"),l(n,205,0,"hotkeys"),l(n,236,0,"events")},function(l,n){l(n,41,0,"{","{"),l(n,201,0,"{"),l(n,244,0,"{")})}function S(l){return t.Ib(0,[(l()(),t.rb(0,0,null,null,1,"docs",[],null,null,null,A,w)),t.qb(1,49152,null,0,y,[],null,null)],null,null)}var I=t.nb("docs",y,S,{},{},[]),k=function(){return function(){}}(),T=t.pb({encapsulation:2,styles:[],data:{}});function x(l){return t.Ib(0,[(l()(),t.rb(0,0,null,null,5,"p",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["This is the "])),(l()(),t.rb(2,0,null,null,2,"strong",[["tourAnchor","another.route"]],null,null,null,null,null)),t.qb(3,212992,null,0,c,[b.c],{tourAnchor:[0,"tourAnchor"]},null),(l()(),t.Hb(-1,null,["another"])),(l()(),t.Hb(-1,null,[" route"]))],function(l,n){l(n,3,0,"another.route")},null)}function q(l){return t.Ib(0,[(l()(),t.rb(0,0,null,null,1,"other-route",[],null,null,null,x,T)),t.qb(1,49152,null,0,k,[],null,null)],null,null)}var z=t.nb("other-route",k,q,{},{},[]),R=u("4GxJ");u.d(n,"ConsoleModuleNgFactory",function(){return O});var O=t.ob(r,[],function(l){return t.yb([t.zb(512,t.j,t.db,[[8,[e.a,o.a,v,I,z]],[3,t.j],t.y]),t.zb(4608,h.m,h.l,[t.v,[2,h.y]]),t.zb(4608,b.c,b.c,[a.l]),t.zb(1073742336,h.b,h.b,[]),t.zb(1073742336,a.o,a.o,[[2,a.u],[2,a.l]]),t.zb(1073742336,b.b,b.b,[]),t.zb(1073742336,R.C,R.C,[]),t.zb(1073742336,s,s,[]),t.zb(1073742336,r,r,[]),t.zb(1024,a.j,function(){return[[{component:H,path:"",children:[{component:y,path:""},{component:k,path:"other"}]}]]},[])])})}}]);