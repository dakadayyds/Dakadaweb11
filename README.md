# dakadaweb


小码王某作品的js部分的仓库


***


查看example.js获取项目模板


关于数据库的事情，dakada专门做了一个处理引擎，可参考使用


***


# pycloud


网址：https://dakada.pythonanywhere.com/pycloud


请求：POST请求


请求示例:
~~~
{
  cmd:"command(save/load/add,保存/加载/新增云空间)",
  name:"云空间名称"，
  data:"any value"    //尽量不要是数字，会有你意想不到的结果，当cmd为load时，此项可不填
}
~~~


响应示例:
~~~
{
  status:"su/err/pythonerr"
  msg:"any msg"
}
//status为su时，msg里就会有你想要的东西
//status为err时，msg为错误信息，一般是add时云空间名已存在等错误
//status为pythonerr时，msg为错误信息，此时应根据msg检查你的请求，比如是否请求时漏填键值，数据类型python无法处理等
~~~


***

## 若有任何bug，请赶紧给我发issue!!!!
