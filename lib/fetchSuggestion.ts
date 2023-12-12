// fetching suggestions from chatGPT

const fetchSuggestion = () => 
    fetch("/api/suggestion", {
        cache: "no-store"
    }).then((res) => res.json()); // fetching and returning a promise


export default fetchSuggestion;