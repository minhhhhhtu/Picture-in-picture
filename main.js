const videoElement = document.getElementById('video');
const button = document.getElementById('button');

async function render() {
    try {
        const mediaStrean = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStrean;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (e) {   
        console.log('Opps!', e)
    }
}

//Click button 

button.addEventListener('click', async () => {
    button.disabled = true;
    await videoElement.requestPictureInPicture();
    button.disabled = false;
});
//Loading
render()

