//writing function to create team cards
const generateManager = function (manager) {
    return `
    <div class="col-4 mt-4">
                <div class="card h-100">
                    <div class="card-header bg-info">
                        <h3>${manager.name}</h3>
                        <h4>Manager</h4><i class="material-icons">content_paste</i>
                    </div>

                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${manager.id} </li>
                            <li class="list-group-item">Email: <a href="mailto:${manager.email}"> ${manager.email}</a></li>
                            <li class="list-group-item">Office #: ${manager.officeNumber} </li>
                        </ul>
                    </div>
                </div>        
            </div>
     `;
};

const generateEngineer = function (engineer) {
    return `
    <div class="col-4 mt-4">
                <div class="card h-100">
                    <div class="card-header bg-info">
                        <h3>${engineer.name}</h3>
                        <h4>Engineer</h4><i class="material-icons">laptop_mac</i>
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${engineer.id}</li>
                            <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
                            <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.github}">${engineer.github}</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            `;
};

const generateIntern = function (intern) {
    return `
    <div class="col-4 mt-4">
                <div class="card h-100">
                    <div class="card-header bg-info">
                        <h3>${intern.name}</h3>
                        <h4>Intern</h4><i class="fas fa-user-graduate mr-2"></i>
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${intern.id}</li>
                            <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
                            <li class="list-group-item">School: ${intern.school}</li>
                        </ul>
                    </div>
                </div>
            </div>         
    `;
};

generateHTML = (data) => {
    pageArray = [];

    for (let i = 0; i < data.length; i++) {
        const teamMember = data [i];
        const role = teamMember.getRole();

        if (role === 'Manager') {
            const managerCard = generateManager(teamMember);

            pageArray.push(managerCard);
        }

        if (role === 'Engineer') {
            const engineerCard = generateEngineer(teamMember);

            pageArray.push(engineerCard);
        }

        if (role === 'Intern') {
            const internCard = generateIntern(teamMember);

            pageArray.push(internCard);
        }
    }
    //joining forces lol... strings 
     const teamCards = pageArray.join('')

     //return to page
     const creatingTeam = createTeam(teamCards);
     return creatingTeam;
}

const createTeam = function (teamCards) {
    return`
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Finder</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header class="row">
            <div class="col-12 jumbotron mb-3 team-heading bg-secondary">
                <h1 class="text-center text-white">My Team</h1>
            </div>
    </header>
    <div class="container">
        <div class="row justify-content-center" id="team-cards">
        ${teamCards}
        </div>
    </div>

</body>
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://kit.fontawesome.com/c502137733.js"></script>
</html>


    `;
}

module.exports = generateHTML;
