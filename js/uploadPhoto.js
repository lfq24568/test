// 图片上传
function changepic(input) {
    if(!input.files[0]) {
        $('#img').attr('src','../image/3.jpg');
        return false;
    }
    var newsrc = getObjectURL(input.files[0]);
    $('#img').attr('src',newsrc);
}

function changepics(input) {
    if(!input.files[0]) {
        $('#imgs').attr('src','../image/3.jpg');
        return false;
    }
    var newsrc = getObjectURL(input.files[0]);
    $('#imgs').attr('src',newsrc);
}

// 建立一个可存取到该file的url
function getObjectURL(file) {
    var url = null;
    //兼容各个浏览器
    if(window.createObjectURL != undefined) {
        url = window.createObjectURL(file);
    } else if(window.URL != undefined) {
        url = window.URL.createObjectURL(file);
    } else if(window.webkitURL != undefined) {
        url = window.webkitURL.createObjectURL(file);
    }
    return url;
}