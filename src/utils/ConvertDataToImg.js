export default function ConvertDataToImg(avatar) {

    let image = new Image();
    image.src = `data:${avatar.type};base64,${avatar.data}`;
    return image;

}
