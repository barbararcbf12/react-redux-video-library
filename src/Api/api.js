export const leoLabVideos = (searchQuery) => {
  var SKINCOACHAPP_API_ENDPOINT = `http://video.skincoachapp.com/v1/_debug/`;

  return fetch(SKINCOACHAPP_API_ENDPOINT)
  .then(response => {
      return response.json();
    }).then(json => {
        let videos = [];
        json.map( x => {
          if(searchQuery !== ""){
            // videos.filter(v => v.title.toLowerCase().includes(searchQuery.toLowerCase()));
            // videos.filter(y => y.description.toLowerCase().includes(searchQuery.toLowerCase()));
            // videos.filter(z => z.tags.toLowerCase().includes(searchQuery.toLowerCase()));
            if(x.title.toLowerCase().includes(searchQuery.toLowerCase()) || x.description.toLowerCase().includes(searchQuery.toLowerCase())){ // || x.tags.toLowerCase().includes(searchQuery.toLowerCase())){
              console.log("x.title", x.title);
              console.log("x.description", x.description);
              console.log("x.tags", x.tags);
              videos.push(x);
              
            }else{
              x.tags.map( y => {
                if(y.toLowerCase() === searchQuery.toLowerCase()){
                  videos.push(x);
                }
                return videos;
              })
            }
            return videos;
          }
          else{
            videos = json;
            return videos;
          }
        });
               
        return videos.map(({ id, active, title, runningTime, thumbUrl, videoUrl, description, browseable, category, baseTags }) =>
          ({
            id,
            active, 
            title, 
            runningTime, 
            thumbUrl,
            mediaUrl: videoUrl,
            description, 
            browseable, 
            category, 
            baseTags
          })
        );
      })
  };
