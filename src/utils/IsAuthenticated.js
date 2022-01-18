

export default function IsAuthenticated() {
    return localStorage.getItem("token").length >= 10;
}
