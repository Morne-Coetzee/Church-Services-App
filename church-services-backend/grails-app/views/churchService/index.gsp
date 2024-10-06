<!doctype html>
<html>
<head>
    <meta name="layout" content="main"/>
    <title>Church Services</title>
</head>
<body>
    <h1>Church Services</h1>
    <g:link action="create">Create New Church Service</g:link>
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <g:each in="${churchServiceList}" var="churchService">
                <tr>
                    <td>${churchService.name}</td>
                    <td>${churchService.description}</td>
                    <td>
                        <g:link action="show" id="${churchService.id}">Show</g:link>
                        <g:link action="edit" id="${churchService.id}">Edit</g:link>
                        <g:link action="delete" id="${churchService.id}" method="DELETE">Delete</g:link>
                    </td>
                </tr>
            </g:each>
        </tbody>
    </table>
</body>
</html>