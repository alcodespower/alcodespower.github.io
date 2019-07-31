const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    audio: [
      {
        name: "红玫瑰",
        artist: '陈奕迅',
        url: 'http://other.web.ri01.sycdn.kuwo.cn/e8764f39f47763eb4750162fc9429cd3/5d412741/resource/n2/47/79/1762261471.mp3',
        cover: 'http://p1.music.126.net/o_OjL_NZNoeog9fIjBXAyw==/18782957139233959.jpg',
      },
      {
        name: 'Dream It possible',
        artist: 'Delacey',
        url: 'http://www.ytmp3.cn/down/36894.mp3',
        cover: 'http://p2.music.126.net/Gfq_eVuq7lgilBf0w1g5dg==/109951163088676710.jpg',
      },
      {
        name: '非人哉',
        artist: '洛天依',
        url: 'http://www.ytmp3.cn/down/52899.mp3',
        cover: 'http://p2.music.126.net/tO9-64uPOX4d9pl5KEiKvg==/109951163281881755.jpg',
      }
    ]
});