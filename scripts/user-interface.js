$(document).ready(function() {
  var flags = $("ul.country li");
  flags.click(changeFlag);
  // $(flags[0]).css("display","none");
  // $(flags[0]).css("border","none");
  function changeFlag(e) {
    flags.css("display","block");
    // flags.css("border","1px solid rgb(27, 5, 127)");
    var target = $(e.target).parent();
    var url = $(target.find("img")[0]).attr("src");
    var country = $(target.find("span")[0]).text();
    var parent = target.parent().parent().parent();
    $(parent.find("img")[0]).attr("src", url);
    $(parent.find("span")[0]).text(country);
    // target.parent().css("display","none");
    // target.parent().css("border","none");
  }
});
