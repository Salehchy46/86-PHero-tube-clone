const loadButtons = async () => {
  try {
    const response = await fetch('https://openapi.programming-hero.com/api/videos/categories')
    const data = await response.json();

    const buttons = data.data || [];

    if (!Array.isArray(buttons)) {
      console.error(buttons);
      return;
    }

    diplayButtons(buttons);
  } catch (error) {
    console.error("Failed to load:", error);
  }
};

const diplayButtons = (buttons) => {
  const getButtons = document.getElementById('button-container')

  buttons.forEach(button => {
    const buttonShed = document.createElement('div');
    buttonShed.classList = `text-center mt-5 mx-3`;
    buttonShed.innerHTML = `
    <button onclick="${button.category_id}" class="btn btn-active hover:bg-slate-950 text-white">${button.category}</button>
    `
    getButtons.appendChild(buttonShed);
  });
}

const loadVideos = async () => {
  try {
    const res = await fetch('https://openapi.programming-hero.com/api/videos/category/1000');
    const data = await res.json();

    const videos = data.data || [];
    console.log(videos);
    if (!Array.isArray(videos)) {
      console.error("Videos can't be loaded", videos);
      return;
    }
    displayVideos(videos);
  } catch (error) {
    console.error("Failed to load", error);
  }
}

const displayVideos = (videos) => {
  const videoContainer = document.getElementById('videos-container');

  videos.forEach(video => {
    const videoCard = document.createElement('div');
    videoCard.classList = `card card-compact bg-gray-300 shadow-xl`;

    const varified = video.authors[0].verified;
    console.log(varified);


    videoCard.innerHTML = `
    <figure>
      <img
       src="${video.thumbnail}"
       alt="thumbnail" />
    </figure>
    <div class="card-body">
      <div class="flex">
        <img class="w-10 h-10 rounded-full mr-5" src="${video.authors[0].profile_picture}" alt=""/>
        <h2 class="card-title">${video.title}</h2>
        
      </div>
      <div class="flex">
        <p>${video.authors[0].profile_name}</p>
        ${varified ? '<p> <img class="" src="./fi_10629607.png"/> </p>' : ''}
      </div>
      <p>${video.others.views}</p>
    </div>
    `
    videoContainer.appendChild(videoCard)
  })
}

const nothingToShow = async () => {
  try {
    const resp = await fetch('https://openapi.programming-hero.com/api/videos/category/$%7Bid%7D');
    const none = await resp.json();

    const data = none;

    if (!Array.isArray(data)) {
      console.error('No data available', data);
      return;
    }
  } catch (error) {
    console.error(error);

  }
}

loadButtons();
loadVideos();
nothingToShow();

const allVideos = (video, button) => {
  document.getElementById(button.category_id = '1000').addEventListener('click', function(){
    loadVideos(video);
  })
}

allVideos();

const musicVideos = (button, video) => {
  document.getElementById(button.category_id = '1001').addEventListener('click', function(){
    try {
      const res = fetch('https://openapi.programming-hero.com/api/videos/category/1001');
      const data = res.json();
  
      const video = data.data || [];
      console.log(video);
      if (!Array.isArray(video)) {
        console.error("Videos can't be loaded", video);
        return;
      }
    } catch (error) {
      console.error("Failed to load", error);
    }
  })
  return video;
};

musicVideos();