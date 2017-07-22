var enableFilter = true;

function refreshFiles()
{
    var count = 0;
    $(".file-header a.link-gray-dark").each(function() {
        if(enableFilter){
            if($(this).attr("title").endsWith(".cs") == false){
                $(this).parent().parent().parent().hide();
            }
            else{
                count++;
            }
        } else {
            $(this).parent().parent().parent().show();
            count++
        }
    });
    $("button.btn-link.muted-link.select-menu-button.js-menu-target").html("<strong>"+count+" files </strong>");
}

$(document).ready(function(){
    $(".diff-view.commentable").bind("DOMSubtreeModified", refreshFiles);
    refreshFiles();
});

