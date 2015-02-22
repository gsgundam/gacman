// open link in blank page
function addBlankTargetForLinks () {
    $('a[href^="http"]').each(function(){
        $(this).attr('target', '_blank');
    });
}
$(document).bind('DOMNodeInserted', function(event) {
    addBlankTargetForLinks();
});