//地区二级联动
$('.select-value1').mPicker({
    level: 2,
    dataJson: dataJson,
    Linkage: true,
    rows: 6,
    idDefault: true,
    splitStr: '-',
    header: '<div class="mPicker-header">两级联动选择插件</div>',
    confirm: function (json) {
        console.info('当前选中json：', json);
        // var _this= this;
        // console.info('【json里有带value的情况】');
        //更新json
        // console.info('3s后更新json...');
        // setTimeout(function(){
        //     _this.container.data('mPicker').updateData.call(_this,level3);
        //     var json = getVal();
        //     var valArr = json.value;
        //     console.info('更新成功!!');
        //     console.info('更新后的value为空', valArr[0], valArr[1]);
        //     console.info('更新后的value拼接值为空', json.result);
        // },3000);
        
    },
    cancel: function (json) {
    }
})