---
title: Image Capturer | Video SDK
hide_title: true
hide_table_of_contents: false
description: Stream Image Capturer.
sidebar_label: Image Capturer
pagination_label: Image Capturer
keywords:
  - image capturer
  - stream image capturer
image: img/videosdklive-thumbnail.jpg
sidebar_position: 1
slug: image-capturer
---

# Image Capturer.

In this guide, we will see how you can capture images from participants video streams. For that, we will create a button, and when it's clicked, we will use the ImageCapture API of the browser to capture the image, which we will then render in Canvas.

```js
const [image, setImage] = useState(null);

const onCapture = () => {
  const track = new MediaStream();
  track.addTrack(webcamStream.track);
  let imageCapture = new ImageCapture(track.getVideoTracks()[0]);
  imageCapture
    .grabFrame()
    .then((imageBitmap) => {
      setImage(imageBitmap);
    })
    .catch((error) => console.log("image capture", error));
};

const canvasRef = useRef();

useEffect(() => {
  if (open && image) {
    let canvas = canvasRef.current;

    if (canvas) {
      canvas.width = image.width;
      canvas.height = image.height;

      let ratio = 16 / 9;
      let x = (canvas.width - image.width * ratio) / 2;
      let y = (canvas.height - image.height * ratio) / 2;
      canvas.getContext("2d").clearRect(0, 0, x / 2, y / 2);
      canvas.getContext("2d").drawImage(image, 0, 0);

      var url = canvas.toDataURL("image/png");

      setImageSrc(url);

      setDrawComplete(true);
    }
  }
}, [image, canvasRef.current]);

return (
  <canvas
    ref={canvasRef}
    id='previewCanvas'
    className='object-contain h-1/2 w-1/2'
  />
);
```

## API Reference

The API references for all the methods utilized in this guide are provided below.

- [useParticipant](/react/api/sdk-reference/use-participant/properties)
