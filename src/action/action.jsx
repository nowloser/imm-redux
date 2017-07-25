export const CHECK_PERSON = 'CHECK_PERSON'

export const CHECK_ALL_PERSON = 'CHECK_ALL_PERSON'

export function checkPerson(index,checked) {
    return {
        type: CHECK_PERSON,
        index,
        checked
    };
}




export function checkAllPerson(checked) {
    return {
        type: CHECK_ALL_PERSON,
        checked
    };
}


export function sendMessage(message) {
    console.log(message)
    const request = new Request("http://mb345.com:999/WS/BatchSend.aspx"+`?CorpID=CUBEUC000630&Pwd=987474&Mobile=${message.user.join(',')}&Content=${message.content}【安防网】`, {
        method: "GET",
        mode: "no-cors",
        //body:
    });
    fetch(request).then(
        function(res){
            console.log(res)
            if (res.ok) {
                res.json().then(function (data) {

                });
            }else {
                alert("发送失败")
                //return dispatch(failLoad([]))
            }
        },  function(e){
            console.log("error",e)
        }
    )
    //http://mb345.com:999/WS/BatchSend.aspx
}

