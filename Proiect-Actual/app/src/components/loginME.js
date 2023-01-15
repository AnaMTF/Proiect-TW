import React from 'react';

const LoginME = () => {
    return (
        <div>
            <head>
                <title></title>
                <link href="loginME.css" rel="stylesheet" type="text/css" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous" />
                <script src="index.js"></script>
            </head>
            <body>

            
            <h1>Log in Membru Echipa</h1>
            <div class="container">
            <br /><br /><br /><br />
            <label id="titlu" style="font-weight:bold;">Log in Membru Echipa</label>
            <br /><br />
            <br />
            <form>
                <label style={{"font-weight":"bold", "font-size":"20px", "font-family":"monospace", "color":"#560bad"}}>Email:</label>
                <input type="email" />
                <br />
                <label style={{"font-weight":"bold", "font-size":"20px", "font-family":"monospace", "color":"#560bad"}}>Password:</label>
                <input type="password" />
                <br />
                <button class="btn btn-primary m-3" id="loginMembruEchipa" onclick="login()">Log in</button>
                <button>Log in</button>
            </form>
            </div>
        </body>
        </div>
    );
};

export default LoginME;