const YoutubeVideo =({youTube}) =>{
    return(
        <iframe width="315" height="200" src={`https://www.youtube.com/embed/${youTube}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
        </iframe>
    )
}
export default YoutubeVideo