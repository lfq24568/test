var serve_url = ''; //url地址头

//ajax调用封装
function getAjax(url,data,callBack,async) { //地址,请求参数,成功回调
    var async = async===true ? true : false;
    var headers = {
        'Accept':'application/json',
        'Authorization': getLocal('token')
    };
    $.ajax({
        type: 'get',
        url: serve_url+'/futurechain/api/app/v1/'+url,
        dataType: "json",
        data: data,
        headers: headers,
        cache : false,
        async : async,
        timeout:3000,
        beforeSend: function(xml){

        },
        complete: function(xml){

        },
        success: function (res) {
            callBack(res);
        },
        error: function (res) {
            console.log(res);
        }
    });
}
function postAjax(url,data,callBack,async,errorCB) {
    var async = async===true ? true : false;
    var data = JSON.stringify(data);
    var headers = {
        'Content-Type': 'application/json; charset=UTF-8',
        'Accept':'application/json',
        'Authorization': getLocal('token')
    };
    $.ajax({
        type: 'post',
        url: serve_url+'/futurechain/api/app/v1/'+url,
        dataType: "json",
        data: data,
        headers: headers,
        cache : false,
        async : async,
        timeout:3000,
        beforeSend: function(xml){

        },
        complete: function(xml){

        },
        success: function (res) {
            callBack(res);
        },
        error: function (res) {
            if(typeof errorCB === "function"){
                errorCB(res);
            }
            console.log(res);
        }
    });
}

function formAjax(url,data,callBack,errorCB) {
    $.ajax({
        type: 'post',
        url: serve_url+'/futurechain/api/app/v1/'+url,
        dataType: "json",
        data: data,
        processData: false,  
        contentType: false,  
        // headers: headers,
        cache : false,
        async : false,
        timeout:3000,
        beforeSend: function(xml){

        },
        complete: function(xml){

        },
        success: function (res) {
            callBack(res);
        },
        error: function (res) {
            if(typeof errorCB === "function"){
                errorCB(res);
            }
            console.log(res);
        }
    });
}