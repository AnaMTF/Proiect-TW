import React from 'react';

const CreateME = () => {
    return (
        <div>

    <head>
    <title></title>
    <link href="createME.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous" />
    <script src="index.js"></script>
</head>
<body>
        <div class="container">
        <br /><br /><br /><br />
        <label id="titlu" style="font-weight:bold;">Create Membru Echipa account</label>
        <br /><br />
        <br />
        <div class="row">
            <div class="col" id="grad1" style="border: 0.2px solid #560bad;">
                <br />
                <label style={{"font-weight":"bold" ,"font-size":"20px", "font-family":"monospace", "color":"#560bad"}}>Nume:</label>
                <input type="text"/>
                <br /><br />
                <label style={{"font-weight":"bold" ,"font-size":"20px", "font-family":"monospace", "color":"#560bad"}}>Prenume:</label>
                <input type="text"/>
                <br /><br />
                <label style={{"font-weight":"bold" ,"font-size":"20px", "font-family":"monospace", "color":"#560bad"}}>Email:</label>
                <input type="email"/>
                <br /><br />
                <label style={{"font-weight":"bold" ,"font-size":"20px", "font-family":"monospace", "color":"#560bad"}}>Password:</label>
                <input type="password"/>
                <br /><br />
                <button class="btn btn-primary m-3" id="createMembruEchipa" onclick="create()">Create account</button>
                <br />
            </div>
        </div>
        </div>
</body>
</div>
    );
};

export default CreateME;
