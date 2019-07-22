const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    audio: [
      {
        name: "红玫瑰",
        artist: '陈奕迅',
        url: 'http://m10.music.126.net/20190722113303/2eb8c6b3063209786f37ba5e8314d7b4/ymusic/6cf9/3003/9e72/d9dab50f0aa723753c5652dd73a04daf.mp3',
        cover: 'http://p1.music.126.net/o_OjL_NZNoeog9fIjBXAyw==/18782957139233959.jpg',
      },
      {
        name: 'Dream It possible',
        artist: 'Delacey',
        url: 'http://m10.music.126.net/20190722113525/fef89195fc01df1eb885daa3e86c0a90/ymusic/5353/050b/0158/d939e091532a0c45cd5b6292ea285200.mp3',
        cover: 'http://p2.music.126.net/Gfq_eVuq7lgilBf0w1g5dg==/109951163088676710.jpg',
      },
      {
        name: '非人哉',
        artist: '洛天依',
        url: 'http://m10.music.126.net/20190722113733/c4a0ff0432c9ac2976ec438ab708d12e/ymusic/3c72/478d/2ad0/de9b50a61ec2d2bb35cf0357cd4ca503.mp3',
        cover: 'http://p2.music.126.net/tO9-64uPOX4d9pl5KEiKvg==/109951163281881755.jpg',
      },
      {
        name: 'Sunshine in the Rain',
        artist: 'BwO',
        url: 'http://m10.music.126.net/20190722114102/28cc128fc3fc8d4549b51420c1c1f781/ymusic/df2f/a6f2/e4ce/f6170c246a8feaa0b03726499445d482.mp3',
        cover: 'http://p2.music.126.net/4wCUqHV9yRupm5WRlPiV8w==/2035196023046217.jpg',
      }
     
    ]
});