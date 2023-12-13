const fetchImages = () => 
    fetch("/api/getImages", {
        cache: "no-store"
    }).then((res) => res.json()); // fetching and returning a promise


export default fetchImages;