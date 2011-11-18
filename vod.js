(function(undefined) {
    var call = function(action) {
        console.log(action);
        var i = document.createElement('img');
        i.src = 'http://'+ window.location.hostname +':8081/requests/vlm_cmd.xml?command='+encodeURIComponent(action);
    };

    var getMediaName = function() {
        return window.location.hash.replace('#', '');
    };

    document.addEventListener('DOMContentLoaded', function () {
        player = document.getElementById('video-js');
        call('setup '+ getMediaName() +' disabled');
        call('setup '+ getMediaName() +' enabled');

        player.src = 'http://'+ window.location.hostname +':8090/stream.ogg';
        player.load();

        player.addEventListener('play', function() {
            //call('setup VFV enabled');
            call('control '+ getMediaName() +' play');
        });

        player.addEventListener('pause', function() {
            call('control '+ getMediaName() +' pause');
        });

        player.addEventListener('seeking', function(event) {
            //console.log(arguments);
            call('control '+ getMediaName() +' seek + 3s');
        });
     });
}());
