const $video2 = document.querySelector("#video2")
const $play2 = document.querySelector("#Play2")
const $pause2 = document.querySelector("#Pause2")
const $forward2 = document.querySelector("#Forward2")
const $backward2 = document.querySelector("#Backward2")

$play2.addEventListener("click", handlePlay2)
$pause2.addEventListener("click", handlePause2)

function handlePlay2() {
	$video2.play()
	$play2.hidden = true
	$pause2.hidden = false
	console.log("Le diste play al vídeo")
}

function handlePause2() {
	$video2.pause()
	$pause2.hidden = true
	$play2.hidden = false
	console.log("Le diste pausa al vídeo")
}

$forward2.addEventListener("click", handleForward2)
$backward2.addEventListener("click", handleBackward2)

function handleForward2(){
	$video2.currentTime+=10
	console.log("para adelante 10 segundos", $video2.currentTime)
	
}

function handleBackward2(){
	$video2.currentTime=$video2.currentTime-10
	console.log("para atrás 10 segundos", $video2.currentTime)
	
}

/* ********************  player progress2 **********************/

const $progress2 = document.querySelector("#progress2")
$video2.addEventListener("loadedmetadata", handleLoaded2)
$video2.addEventListener("timeupdate", handleTimeUpdate2)

function handleLoaded2(){
	$progress2.max = $video2.duration
}

function handleTimeUpdate2(){
	$progress2.value = $video2.currentTime
}

$progress2.addEventListener("input", handleInput2)

function handleInput2(){
	$video2.currentTime = $progress2.value
}

/*const $progress2 = document.querySelector('#progress2')
$video2.addEventListener('loadedmetadata', handleLoaded2)
$video2.addEventListener('timeupdate', handleTimeUpdate2)

function handleLoaded2() {
  $progress2.max = $video2.duration
  console.log('ha cargado mi video', $video2.duration)
}

function handleTimeUpdate2() {
  $progress2.value = $video2.currentTime
  // console.log('tiempo actual', $video.currentTime)
}

$progress2.addEventListener('input', handleInput2)

function handleInput2() {
  $video2.currentTime = $progress2.value
  console.log($progress2.value)
}*/