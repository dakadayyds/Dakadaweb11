/*1，记得写完一行语句加分号*/
/*2，记得用这样的注释（一定要用！）*/
this.webObject=class{
  constructor(){
    /*设置你的属性*/
  }
  Info(){
    /*获取信息*/
    return{
      index:{HTML:this.index,script:this.contentscript},  /*指令：open projectname or projectname@index，script见下方注释*/
      /*testpage:this.method //open projectname@testpage*/
      /*{error500:method1}
      {error404:method2}
      ↑触发404或500错误时dakadaweb将调用error404或error500，如果没有定义则显示默认页面↑*/
    }
  }
    index(){
        /*页面模板*/
        return `<h1>hello!</h1><p>dakadaweb's example page</p>`;
    }
  contentscript(){
          /*待html加载完毕后内嵌于网页执行的脚本，保密性较强*/
              console.log("hello")
      }
    /*method(){return `something...`}*/

}
