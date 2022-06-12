
function verify() {
    var obj = document.getElementById("password");//获取密码框
    var psw = obj.value;//密码值
    var len = psw.length;//密码长度
    var charNum = 0;//密码中含有多少个字母
    if (len >= 8) {
        for (var i = 0; i < psw.length; i++) {//遍历密码这个字符串
            // substr() 方法可在字符串中抽取从 start 下标开始的指定数目的字符。
            // stringObject.substr(start,length)
            //charCodeAt() 方法可返回指定位置的字符的 Unicode 编码
            var ascNum = psw.substr(i, 1).charCodeAt();
            //65-90:A-Z  97-122:a-z
            if ((ascNum >= 65 && ascNum <= 90) || (ascNum >= 97 && ascNum <= 122)) {
                charNum += 1
            }
        }
        if (charNum == 0) {
            alert("密码中必须有字母")
        } else {
            alert("密码长度为:" + len + "\n密码为：" + psw + "\n提交成功")
        }

    } else {
        alert("密码长度不可以小于8")
    }
}
