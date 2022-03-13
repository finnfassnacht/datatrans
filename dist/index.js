
function sender(){
    function post_func() {
        var us_data = document.getElementById("data").value;
        const data = {"data":us_data}
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }
        fetch("/.netlify/functions/index/data_in", options)
    }
    post_func()
}

function getter() {
    async function getData(){
        const response = await fetch("/.netlify/functions/index/data_out")
        const data = await response.json()
        for (item of data){
            var finale = (data.data)
            console.log("server says this: " + finale)
        }
    }
    getData()
}