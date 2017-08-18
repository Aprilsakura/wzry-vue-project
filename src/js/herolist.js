
window.onload = function () {
    heroListBanner();
};

function heroListBanner(){
    var spBannerLi = $("#spBanner  li");
    var spBannerId = $('#spBannerIdea li');
    spBannerLi.click(function () {
        var $this = $(this);
        var $t = $this.index();
        spBannerLi.removeClass();
        $this.addClass('current');
        spBannerId.removeClass().eq($t).addClass('current');

        //改变背景
        $(".sp_banner").css({"background":'url('+$(this).attr("dataImg")+')'})
    });

    //播放音频控制
    $("#playBtn").click(function(){
        var music =document.getElementById("heroVoice");
        if (music.paused){
            music.play();
        }
        else{
            music.pause();
        }
    })

    /*点击皮肤按钮*/
    //var spBannerLilength = spBannerLi.length;
    //$('#spBanF').click(function () {
    //    if(spBannerLilength > 5){
    //        $('#spBanF>img').attr("src","http://game.gtimg.cn/images/yxzj/m/m201606/cp/j_08.png");
    //    }
    //});
    var isH3Click = false;
    var spAP = $('#spAP');
    $('#spAh3').click(function () {
        if(isH3Click){
            spAP.addClass('sp_pCont');
            $('#zk').show();
            $('#sh').hide();
            isH3Click = false;
        }else {
            spAP.removeClass();
            $('#zk').hide();
            $('#sh').show();
            isH3Click = true;
        }
    });
	var ishisClick = false;
    var spHP = $('#spHisP');
    $('#spHish3').click(function () {
        if(ishisClick){
            spHP.addClass('sp_hCont');
            $('#hzk').show();
            $('#hsh').hide();
            ishisClick = false;
        }else {
            spHP.removeClass();
            $('#hzk').hide();
            $('#hsh').show();
            ishisClick = true;
        }
    });

    //技能介绍
    var spCLi = $("#spCLi li");
    var spBT = $("#spBT li");
    spCLi.click(function(){
        var $this = $(this);
        var $t = $this.index();
        spCLi.removeClass();
        $this.addClass('current');
        spBT.hide().eq($t).show();
    });

    //技能如果大于五个的css
    if(spCLi.length==5){
        $(".sp_bContTop").attr("class","sp_nbContTop");
    }else{
        $(".sp_bContTop").attr("class","sp_bContTop");
    }



}