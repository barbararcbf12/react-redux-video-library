//Fetching data from laoLab's API and checking if resultant JSON's 
//keys 'title', 'description' and ' tags' contain a string typed by the user
// export const fetchChildrenGroup = (searchQuery) => {
//   var SKINCOACHAPP_API_ENDPOINT = `http://video.skincoachapp.com/v1/_debug/`;

//   return fetch(SKINCOACHAPP_API_ENDPOINT)
//   .then(response => {
//       return response.json();
//     }).then(json => {
//         let videos = [];
//         json.map( x => {
//           if(searchQuery !== ""){
//             if(x.title.toLowerCase().includes(searchQuery.toLowerCase()) || x.description.toLowerCase().includes(searchQuery.toLowerCase())){ 
//               videos.push(x);
              
//             }else{
//               x.tags.map( y => {
//                 if(y.toLowerCase() === searchQuery.toLowerCase()){
//                   videos.push(x);
//                 }
//                 return videos;
//               })
//             }
//             return videos;
//           }
//           else{
//             videos = json;
//             return videos;
//           }
//         });
               
//         return videos.map(({ id, active, title, runningTime, thumbUrl, videoUrl, description, browseable, category, baseTags }) =>
//           ({
//             id,
//             active, 
//             title, 
//             runningTime, 
//             thumbUrl,
//             mediaUrl: videoUrl,
//             description, 
//             browseable, 
//             category, 
//             baseTags
//           })
//         );
//       })
//   };

  var accessToken = '234ffdb8-0889-4be3-b096-97ab1679752c';
  var groupId = '11fc220c-ebba-4e55-9346-cd1eed714620';
  var institutionId = 'fb6c8114-387e-4051-8cf7-4e388a77b673';
  
  export const fetchChildrenGroup = () => {
  
    // var FAMLY_API_GETENDPOINT = 'https://tryfamly.co/api/daycare/tablet/group?accessToken=234ffdb8-0889-4be3-b096-97ab1679752c&groupId=11fc220c-ebba-4e55-9346-cd1eed714620&institutionId=fb6c8114-387e-4051-8cf7-4e388a77b673'
      var FAMLY_API_GETENDPOINT = `https://tryfamly.co/api/daycare/tablet/group?accessToken=${accessToken}&groupId=${groupId}&institutionId=${institutionId}`;
    
      return fetch(FAMLY_API_GETENDPOINT)
      .then(response => {
          return response.json();
        }).then(json => { 
          console.log("json: " + json.children[0].childId);
          // return json;
            return json.children.map(({ childId, name, birthday, image, checkedIn, pickupTime }) =>
              ({
                childId,
                name,
                birthday,
                image,
                checkedIn,
                pickupTime
              })
            );
          })
  };


  export const checkInChild = ( childId, pickupTime ) => {

    var FAMLY_API_POSTCHECKIN = `https://tryfamly.co/api/v2/children/${childId}/checkins?accessToken=${accessToken}`;
  
    return fetch( FAMLY_API_POSTCHECKIN, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        checkedIn: true,
        pickupTime: pickupTime
      })
    })
  
  };
  
  
  export const checkOutChild = ( child ) => {
  
    var FAMLY_API_POSTCHECKOUT = `https://tryfamly.co/api/v2/children/${child.childId}/checkout?accessToken=${accessToken}`;
  
    return fetch( FAMLY_API_POSTCHECKOUT, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({
        checkedIn: false
      })
    })
  
  };  