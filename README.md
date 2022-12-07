# emby2potplayer
透過此腳本可將 emby 影片串流至 potplayer 進行播放  
此腳本以 @tanxp的 emby2Potplayer 為基礎修正錯誤及不使用額外套件而成的

原腳本透過 purl.js 進行網址的解析，但此方法有 BUG 導致解析後無法正常去得媒體的數字 ID

故透過 Javascript 中的 [URL](https://developer.mozilla.org/zh-TW/docs/Web/API/URL) 重構

如果螢幕比較好(60Hz↑)的人可以透過 SVP4 進行補幀(我沒有收 SVP4 的錢 QQ，真心好用大推)

# 安裝
1. 請先確認瀏覽器有安裝 Tampermonkey
2. [點擊這邊安裝](https://github.com/ThanatosDi/emby2potplayer/raw/main/emby2potplayer.user.js)
3. enjoy