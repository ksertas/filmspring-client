export default function IsAuthenticated() {
    return localStorage.getItem("token") && localStorage.getItem("avatarSrc");
}
