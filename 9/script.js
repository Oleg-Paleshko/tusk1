function test(n) {

    class userclas
    {
        constructor(idv, namev, agev)
        {
            this.id_u = idv;
            this.name_u = namev;
            this.age_u = agev;
        }
    }

    var userone;

    function createTable(arrayObj) {
        let inp_id = document.getElementById('idv');
        let inp_name = document.getElementById('name');
        let inp_age = document.getElementById('age');

        inp_id.value = '';
        inp_name.value = '';
        inp_age.value = '';

        userone = new userclas(arrayObj.id, arrayObj.name, arrayObj.age);

        inp_id.value = userone.id_u;
        inp_name.value = userone.name_u;
        inp_age.value = userone.age_u;
    }

    var requestURL;
    if(n == 1)
    {
    requestURL = 'http://127.0.0.1:3000/1'
    }
    else if(n == 2)
    {
    requestURL = 'http://127.0.0.1:3000/2'
    }

    function sendRequest(method, url, body = null) {
        const xmlRequest = new XMLHttpRequest()

        xmlRequest.open(method, url)

        xmlRequest.send();

        xmlRequest.onload = () => {
            if (xmlRequest.status != 200) {
                return xmlRequest.response
            } else {
                let data = xmlRequest.response
                const jdata = JSON.parse(data)
                createTable(jdata)

                console.log(data);

                return xmlRequest.response
            }
        }
    }
    sendRequest('GET', requestURL)
}