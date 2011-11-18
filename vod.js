(function(undefined) {
    var call = function(action) {
        console.log(action);
        var i = document.createElement('img');
        i.src = 'http://'+window.location.hostname+':8081/requests/vlm_cmd.xml?command='+encodeURIComponent(action);
        //console.log(i.src);
    };

    document.addEventListener('DOMContentLoaded', function () {
        player = document.getElementById('video-js');
        player.addEventListener('loadstart', function() {
            //call('setup VFV disabled');
            //call('setup VFV enabled');
        });

        player.addEventListener('play', function() {
            //call('setup VFV enabled');
            call('control VFV play');
            //player.getElementsByTagName('source')[0].src = player.getElementsByTagName('source')[0].src;
            //player.load();
        });

        player.addEventListener('pause', function() {
            call('control VFV pause');
        });

        player.addEventListener('seeking', function(event) {
            console.log(arguments);
            call('control VFV seek + 3s');
        });
     });
}());
