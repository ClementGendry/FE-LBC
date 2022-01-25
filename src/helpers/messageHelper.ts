export const submitMessage = (e, inputVal, id, nextrouter) => {
    e.preventDefault();
    
    const Router = nextrouter;
    let timestamp = new Date().getTime();

    if (inputVal !== "") {
        fetch(`http://localhost:3005/messages/${id}`, {
        method: "POST",
        body: JSON.stringify({
            'conversationId': id,
            'timestamp': timestamp,
            'body': inputVal,
        }),
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json'}
        })
        .then(response =>  {response.json()})
        .catch(err => console.log(err));

        Router.reload();
    } else {
        alert(`Don't forget to write something`);
    }
}