var islike = true;
var num = 0;
$('.message-list')
    .on('click','.message-print-list .message-share .like',function() {
        $(this).toggleClass('likes');
        if(islike) {
            num++;
            $('.number').text(num);
            islike = false;
        } else {
            num--;
            $('.number').text(num);
            islike = true;
        }
    })
