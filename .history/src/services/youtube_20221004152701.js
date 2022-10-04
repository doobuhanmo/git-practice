class Youtube {
    constructor(key) {
        this.key = key;
        this.getRequestOption = {
            method: 'GET',
            redirect: 'follow'
        };
    }

    mostPopular() {
        return 
         fetch("https://www.googleapis.com/youtube/v3/videos/?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyDGBrIvbWKSu6Okhp_hN-ORO0cFgd_SvZo", this.getRequestOption)
        .then(response => response.json())
        .then(result => setVideos(result.items))
        .catch(error => console.log('error', error));
    }

    search(query) {
        return
        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=AIzaSyDGBrIvbWKSu6Okhp_hN-ORO0cFgd_SvZo`, this.getRequestOption)
        .then(response => response.json())
        .then(results => results.items.map(item => ({...item, id: item.id.videoId})))
        .then(items => setVideos(items))
        .catch(error => console.log('error', error));
    }
}

export default Youtube;