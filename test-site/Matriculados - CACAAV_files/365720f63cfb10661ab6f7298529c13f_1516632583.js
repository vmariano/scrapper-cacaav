
$.backToTop();
var HEADER_HEIGHT = 200;
var HEADER_HEIGHT_SCROLLED = 120;
$('.Header').fixedHeader({
threshold: HEADER_HEIGHT-HEADER_HEIGHT_SCROLLED
});
$.runJS.now(function($context){
$('[data-send-once]', $context).sendOnce();
$('[data-popover]', $context).popover();
});
$.runJS.onFonts([
{name: 'Oxygen', weight: 300},
{name: 'Oxygen', weight: 400},
{name: 'Oxygen', weight: 600},
], function($context, done){
if(done) {
sessionStorage.fonts = true;
document.documentElement.classList.add("fonts-loaded");
}
});
$("[data-carousel]").carousel({
swipe: true,
});
$(".Gallery").gallery();
$(".sectionMapa").smoothScroll({
offset: 0
});
$(document).ready(function(){
$('.filter #provincia').change(function(){
var localidadesSelect = $('.filter #localidad');
var provinciaID = $(this).val();
var localidadID = localidadesSelect.val();
localidadesSelect.empty().append("<option value=''>Todas</option>");
if(provinciaID ){
$.getJSON(ROOT_URL+'/matriculados/localidades/'+provinciaID, function(localidades){
for(var i = 0; i < localidades.length; i++){
localidadesSelect.append("<option value='"+localidades[i][0]+"'>"+localidades[i][1]+"</option>");
}
if(localidadID) localidadesSelect.val(localidadID);
});
}
}).trigger('change');
});
