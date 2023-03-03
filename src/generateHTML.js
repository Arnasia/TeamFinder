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
        const employee = data [i];
        const role = employee.getRole();

        if (role === 'Manager') {
            const managerCard = generateManager(employee);

            pageArray.push(managerCard);
        }
    }
}
