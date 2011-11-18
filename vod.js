(function(undefined) {
    var call = function(action) {
        console.log(action);
        var i = document.createElement('img');
        i.src = 'http://'+ window.location.hostname +':8081/requests/vlm_cmd.xml?command='+encodeURIComponent(action);
    };

    document.addEventListener('DOMContentLoaded', function () {
        player = document.getElementById('video-js');
        call('setup VFV disabled');
        call('setup VFV enabled');

        player.addEventListener('play', function() {
            //call('setup VFV enabled');
            call('control '+ window.location.hash +' play');
            //player.getElementsByTagName('source')[0].src = player.getElementsByTagName('source')[0].src;
            //player.load();
        });

        player.addEventListener('pause', function() {
            call('control '+ window.location.hash +' pause');
        });

        player.addEventListener('seeking', function(event) {
            //console.log(arguments);
            call('control '+ window.location.hash +' seek + 3s');
        });
     });
}());
