var htimestamp = new Date().getTime();
document.write("<script src='https://zz.bdstatic.com/linksubmit/push.js' type='text/javascript'></script>");/* 百度推送 */
document.write("<script src='https://tt.huatu.com/js/?r=" + htimestamp + "' type='text/javascript'></script>");/* 华图统计 */
document.write("<script src='https://hm.baidu.com/h.js?6970012c6f4e98321a1c31a9f0b2d0fa' type='text/javascript'></script>");/* 安徽百度 */
document.write("<script src='https://hm.baidu.com/h.js?c5b3a7bc9cfb4e1133c856fee205fabd' type='text/javascript'></script>");/* 总部百度 */
/* document.write("<script src='https://hm.baidu.com/hm.js?ea2a3e2121e285515d3ab43ab4f7c09f' type='text/javascript'></script>") */;/* 百度统计 */
/* document.write("<script src='https://jspassport.ssl.qhimg.com/11.0.1.js?d182b3f28525f2db83acfaaf6e696dba' id='sozz' type='text/javascript'></script>"); *//* 360推送 */
document.write("<span id='cnzz_stat_icon_443728'></span>
          <script src='https://v1.cnzz.com/stat.php?id=443728&show=pic' type='text/javascript'></script>");/* 总部CNZZ */
document.write("<span id='cnzz_stat_icon_1000494668'></span>
          <script src='https://s4.cnzz.com/z_stat.php?id=1000494668&show=pic' type='text/javascript'></script>");/* 安徽CNZZ */
document.write("<script src='https://u3.huatu.com/bigdata/shence/sensors.js' charset='utf-8' type='text/javascript'></script>");/* 神策统计 */
/* document.write("<script src='https://www.huatu.com/images/js/sc_com.js' charset='utf-8' type='text/javascript'></script>"); *//* 神策统计 */
/* document.write("<script src='https://www.huatu.com/z/js/huatu.min.js' type='text/javascript'></script>"); *//* 华图统计 */
var domain = window.location.host;
if(domain=='bm.huatu.com' || domain=='m.ah.huatu.com'){
	document.write("<script type=\'text/javascript\' src=\'https://ah.huatu.com/v/js/xbvb.js?r=" + htimestamp + "\'></script>");
}
/* document.write(unescape("%3Cscript src='//ah.huatu.com/z/tj/zt/qz-alert.js?r=" + Math.floor(Math.random() * (10000000))+"' charset='utf-8' type='text/javascript'%3E%3C/script%3E")); */