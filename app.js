const playVideo = () => {
  var player = document.getElementById("videoPlayer");
  var currentVideo = document.getElementById("currentVideo");
  var selectedLocalVideo = document.getElementById("localVideoFile").files[0];
  currentVideo.setAttribute("src", URL.createObjectURL(selectedLocalVideo));

  var currentSubtitle = document.getElementById("currentSubtitle");
  var selectedLocalSubtitle = document.getElementById("localSubtitleFile");
  currentSubtitle.setAttribute(
    "src",
    URL.createObjectURL(selectedLocalSubtitle)
  );

  player.load();
  player.play();
};
