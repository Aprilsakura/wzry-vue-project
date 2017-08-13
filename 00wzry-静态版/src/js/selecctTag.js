/**
 * Created by WCM on 2017/6/25.
 */
function selectTag(dom,cName){
    for (var i = 0; i < dom.length; i++) {
        dom[i].addEventListener("click", function () {
            for (var j = 0; j < dom.length; j++) {
                dom[j].className = "";
            }
            this.className = cName;

        })
    }
}