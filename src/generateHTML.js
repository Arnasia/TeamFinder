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
                            <li class="list-group-item">Email: <a href="mailto:${manager.email}"> ${manager.email}</li>
                            <li class="list-group-item">Office #: ${manager.officeNumber} </li>
                        </ul>
                    </div>
                </div>        
            </div>
            `;
}