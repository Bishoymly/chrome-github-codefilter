var enableFilter = true;

function refreshFiles()
{
    var count = 0;
    $(".file-header a.link-gray-dark").each(function() {
        if(enableFilter){
            if($(this).attr("title").endsWith(".cs") == false || $(this).attr("title").endsWith(".Designer.cs")){
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
    $(".blob-num.blob-num-deletion.js-linkable-line-number").parent().hide();
    $("button.btn-link.muted-link.select-menu-button.js-menu-target").html("<strong>"+count+" files </strong>");
}

$(document).ready(function(){
    $(".diff-view.commentable").bind("DOMSubtreeModified", refreshFiles);
    refreshFiles();
});

