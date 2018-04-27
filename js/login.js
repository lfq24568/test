var authCode = '';  //保存验证码

// 手机验证码
$('.menu')
    .on('click','#getsms',function() {
        getCode();
        var get_code=$('#getsms');
        time(get_code);
    })
    .on('click','.menu-login',function() {
        getSubmit();
    })

// 获取验证码
function getCode() {
    var mobile = $("#mobile").val();
    var phone = $('#phone').val();
    if(!phone) {
        layer.msg('请先输入手机号');
        return false;
    }
    console.log(phone)
    $.ajax({
        type: "get",
        url: '/niwu/checkPhone',
        data: {"phone":phone},
        dataType: "json",
        success: function (res) {
            var data = JSON.parse(res.message);
            if(data.code === 200) {
                authCode = data.obj;
            }
        
        },
        error: function (result, status) { 
            layer.msg('系统错误');
        }
    });
}

// 验证码倒计时
var wait = 600;
function time(o,p) { //o为按钮对象,p为文字改变(可选)
    if(wait == 0) {
        o.removeAttr("disabled");
        o.text("获取验证码");
        // p.html("如果你在10分钟内")
        wait = 600;
    } else {
        o.attr('disabled', true); //倒计时时禁止点击按钮
        o.text(wait); //改变按钮中value的值
        wait--;
        setTimeout(function() {
            time(o,p) //循环调用
        },1000)
    }
}

// 用户提交
function getSubmit() {
    var formdata = new FormData();
    formdata.append('name',$('.name').val());
    formdata.append('phone',$('#phone').val());
    formdata.append('authCode',authCode);
    formdata.append('registrationCode',$('.registrationCode').val());
    formAjax('/addUser',formdata,function(res) {
        console.log(res);
    })
}