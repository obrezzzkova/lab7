$(onLoad);

function onLoad() {
    $('button').on('click', function(e) {
        e.preventDefault();
        var const_points = [], i, j, x, k = 0;
        var from = parseFloat($('.from').val());
        var to = parseFloat($('.to').val());
        var fun = $('.fun').val()


        for (i=0; i<=to-from; i+=0.5){
            const_points[k]=new Array();
            for (j = 0; j < 2; j++){
                 const_points[k][j]=0;
            }
            k++;
        }
        k = 0;

        for (i = to-from; i>= 0; i-=0.5){
                const_points[k][0] = to - i;
                x = to - i;
                const_points[k][1] = eval(fun);
                k++;
            }
        var data = [{label: fun, data: const_points}];
        var options = {
            series: {
                    lines: { show: true },
                    }
                };

        $.plot($('.graph'), data, options);
    });
}

