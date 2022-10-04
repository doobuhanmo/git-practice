class Youtube {
    constructor(key) {
        this.key = key;
        this.getRequestOption = {
            method: 'GET',
            redirect: 'follow'
        };
    }

    mostPopular() {
        fetch("https://www.googleapis.com/youtube/v3/videos/?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyDGBrIvbWKSu6Okhp_hN-ORO0cFgd_SvZo", this.getRequestOption)
        .then(response => response.json())
        .then(result => setVideos(result.items))
        .catch(error => console.log('error', error));
    }

    onSearch(query) {
        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=AIzaSyDGBrIvbWKSu6Okhp_hN-ORO0cFgd_SvZo`, this.getRequestOption)
        .then(response => response.json())
        .then(results => results.items.map(item => ({...item, id: item.id.videoId})))
        .then(items => setVideos(items))
        .catch(error => console.log('error', error));
    }
}