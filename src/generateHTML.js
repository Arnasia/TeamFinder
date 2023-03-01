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