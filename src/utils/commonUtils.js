import consts from './consts';
import Song from '../images/song.png'
export default class commonUtils {

    static millisToMinutesAndSeconds(millis) {
        var minutes = Math.floor(millis / 60000);
        var seconds = ((millis % 60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
      }
      
    static setItems(spotifyItems, type) {
        if(spotifyItems && spotifyItems.length > 0) {
            let items = [];

            spotifyItems.forEach(elm => {

                let _obj = {};
                _obj.name = elm.name;
                _obj.artists = elm.artists.map(elem => { return elem.name;}).join(", ");
                _obj.time = type == consts.FilterTypes.Track ? this.millisToMinutesAndSeconds (elm.duration_ms) : new Date(elm.release_date).getFullYear();
                _obj.url = elm.external_urls.spotify;
                _obj.type = elm.type;
                _obj.img =  this.setImage(type == consts.FilterTypes.Track ? elm.album.images: elm.images);;
                items.push(_obj);
            });
            //this.sortByName(items,'name');
            return items

        }
    }

    static setImage(images) {
        let image = "";
        if(images && images.length > 0) {
            let img = images.filter( obj =>{ return obj.width === 300});
            if(img && img.length > 0) {
                image = img.shift();
            }
        }
        return image.url
    }
    static sortByName(arr, attr) {
        arr.sort(function (a, b) {
            return ('' + a[attr]).localeCompare(b[attr]);
        })
    }
    static sortByTime(arr) {
        arr.sort(function (a, b) {
            return ('' + a.time).localeCompare(b.time);
        })
    }
}
