!function(){var e,n,a;a=function(){var e,n;return e=document.querySelector("#header"),n=new Headroom(e,{offset:300,tolerance:10,classes:{initial:"animated",pinned:"headroom--pinned",unpinned:"headroom--unpinned"}}),n.init()},n=function(){var e,n;e=$("#header-menu").width(),n=$("#header-menu-list").width()+30,n>e?($("#header").removeClass("large"),$("#header").addClass("small")):($("#header").removeClass("small"),$("#header").addClass("large"))},e=function(){$("#header-menu-button").click(function(){var e;return e=parseInt($("#header-menu").css("top")),0===e?($("#header-menu").css({top:"-100vh"}),$("#header-menu").css({opacity:"0"}),$("#header-menu-button").removeClass("open"),$("#header-menu-button").addClass("close")):($("#header-menu").css({top:"0"}),$("#header-menu").css({opacity:"1"}),$("#header-menu-button").removeClass("close"),$("#header-menu-button").addClass("open"))})},$(document).ready(function(){return a(),n(),e()})}.call(this);