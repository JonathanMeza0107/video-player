const $video = document.querySelector("#video")
const $play = document.querySelector("#Play")
const $pause = document.querySelector("#Pause")
const $forward = document.querySelector("#Forward")
const $backward = document.querySelector("#Backward")

$play.addEventListener("click", handlePlay)
$pause.addEventListener("click", handlePause)

function handlePlay() {
	$video.play()
	$play.hidden = true
	$pause.hidden = false
	console.log("Le diste play al vídeo")
}

function handlePause() {
	$video.pause()
	$pause.hidden = true
	$play.hidden = false
	console.log("Le diste pausa al vídeo")
}

$forward.addEventListener("click", handleForward)
$backward.addEventListener("click", handleBackward)

function handleForward(){
	$video.currentTime+=30
	console.log("para adelante 10 segundos", $video.currentTime)
	
}

function handleBackward(){
	$video.currentTime=$video.currentTime-30
	console.log("para atrás 10 segundos", $video.currentTime)
	
}

/* ********************  player progress **********************/

const $progress = document.querySelector("#progress")
$video.addEventListener("loadedmetadata", handleLoaded)
$video.addEventListener("timeupdate", handleTimeUpdate)

function handleLoaded(){
	$progress.max = $video.duration
}

function handleTimeUpdate(){
	$progress.value = $video.currentTime
}

$progress.addEventListener("input", handleInput)

function handleInput(){
	$video.currentTime = $progress.value
}

/*const $progress = document.querySelector('#progress')
$video.addEventListener('loadedmetadata', handleLoaded)
$video.addEventListener('timeupdate', handleTimeUpdate)

function handleLoaded() {
  $progress.max = $video.duration
  console.log('ha cargado mi video', $video.duration)
}

function handleTimeUpdate() {
  $progress.value = $video.currentTime
  // console.log('tiempo actual', $video.currentTime)
}

$progress.addEventListener('input', handleInput)

function handleInput() {
  $video.currentTime = $progress.value
  console.log($progress.value)
}*/