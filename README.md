## striim

A video/audio on demand setup using vlc and html5 video.

### install

git clone https://github.com/docteurklein/striim.git
cd striim
git submodule update --init

### use

Setup a vod file based on vlm configuration ( vlm.conf.dist is a simple example).

Launch vlc using:

    vlc --ttl 12 -vvv --color -I http --http-host localhost:8081 --vlm-conf vlm.conf


Open index.html in your browser.

Enjoy.
