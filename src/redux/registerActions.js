
export function postUserActions(user) {
    return async function (dispatch) {
        const res = await fetch("https://jsonplaceholder.typicode.com/users", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        if (res.status > 200 && res.status < 204) {
            alert("вы зареганы")
        }
    }
}