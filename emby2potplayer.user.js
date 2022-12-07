// ==UserScript==
// @name         emby2potplayer
// @namespace    https://github.com/ThanatosDi/emby2potplayer
// @version      1.0
// @description:zh-tw  透過此腳本可將 emby 影片串流至 potplayer 進行播放
// @description  stream emby videos with potplayer
// @author       ThanatosDi
// @include       *emby*
// @icon         data:image/png;base64,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
// @run-at      document-start
// @grant       unsafeWindow
// ==/UserScript==

async function EmbyMediaInfo(mediaURL) {
    /**
     * EmbyMediaInfo
     * 
     */

    let response = await fetch(mediaURL);
    if (response.ok) {
        return await response.json();
    } else {
        throw new Error(response.statusText);
    }
}

function timeFilter(seconds) {
    var ss = parseInt(seconds) / 10000000
    var mm = 0 // 分
    var hh = 0 // 時
    if (ss > 60) {
        mm = parseInt(ss / 60)
        ss = parseInt(ss % 60)
    }
    if (mm > 60) {
        hh = parseInt(mm / 60)
        mm = parseInt(mm % 60)
    }
    var result = ('00' + parseInt(ss)).slice(-2)
    if (mm > 0) {
        result = ('00' + parseInt(mm)).slice(-2) + ':' + result
    } else {
        result = '00:' + result
    }
    if (hh > 0) {
        result = ('00' + parseInt(hh)).slice(-2) + ':' + result
    }

    return result
};

function getSeek(mediaURL) {
    /**
     * getSeek
     * 取得 emby 播放時間
     * @param {str} mediaURL emby 媒體網址
     */
    var seek = ''
    if (mediaURL.indexOf('StartTimeTicks') != -1) {
        var StartTimeTicks = new URL(mediaURL).searchParams.get('StartTimeTicks')
        if (StartTimeTicks != '0') {
            seek = timeFilter(StartTimeTicks)
        }
        console.log(seek)
        return seek
    }
}

async function EmbyMedia(mediaURL) {
    /**
     * EmbyMedia
     * 解析 emby 媒體網址
     * @param {str} mediaURL emby 媒體網址
     */
    var url = new URL(mediaURL)
    var media_id = url.pathname.match(/\d+/gm)[0]
    var host = window.location.host
    var subUrl = "";
    var token = url.searchParams.get("X-Emby-Token")

    let mediaInfoIndex = 0
    let mediaInfo = await EmbyMediaInfo(mediaURL);
    let MediaSources = mediaInfo.MediaSources[0]
    let mediaSourceID = MediaSources.Id
    /**
     * 二次解析檢查網址的 MediaSourceId 在 mediaInfo 中的位置
     * 有時候會有多個 MediaSources
     */
    if (mediaURL.indexOf('MediaSourceId') != -1) {
        mediaSourceID = url.searchParams.get("MediaSourceId")
        for (let index = 0; index < mediaInfo.MediaSources.length; index++) {
            if (mediaInfo.MediaSources[index].Id == mediaSourceID) {
                mediaInfoIndex = index;
            };
        }
    }

    let container = mediaInfo['MediaSources'][mediaInfoIndex]['Container'];
    let mediaPlaySessionID = mediaInfo.PlaySessionId
    let basicURL = `${url.protocol}//${host}/emby/videos/${media_id}`

    if (mediaURL.indexOf('SubtitleStreamIndex') != -1) {
        let SubtitleStreamIndex = parseInt(url.searchParams.get('SubtitleStreamIndex'))
        if (mediaInfo.MediaSources[mediaInfoIndex].MediaStreams[SubtitleStreamIndex]) {
            let subtitleCodec = mediaInfo.MediaSources[mediaInfoIndex].MediaStreams[SubtitleStreamIndex].Codec
            subUrl = `${basicURL}/${mediaSourceID}/Subtitles/${SubtitleStreamIndex}/${mediaInfoIndex}/Stream.${subtitleCodec}?X-Emby-Token=${token}`
        }
    }
    let streamURL = `${basicURL}/stream.${container}?X-Emby-Token=${token}&Static=true&MediaSourceId=${mediaSourceID}&PlaySessionId=${mediaPlaySessionID}`

    return Array(streamURL, subUrl)
}

async function embyPot(mediaURL) {
    /**
     * embyPot
     * @param {str} mediaURL emby 媒體網址
     */
    let mediaUrl = await EmbyMedia(mediaURL);
    let poturl = `potplayer://${encodeURI(mediaUrl[0])} /sub=${encodeURI(mediaUrl[1])} /current /seek=${getSeek(mediaURL)}`;
    console.log('=======embyPot=======', poturl);
    window.open(poturl, "_blank");
}

const originFetch = fetch;

unsafeWindow.fetch = (...arg) => {

    if (arg[0].indexOf('/PlaybackInfo?UserId') > -1 && arg[0].indexOf('IsPlayback=true') > -1) {

        embyPot(arg[0])
        return ''
    }
    else {
        return originFetch(...arg);
    }

}