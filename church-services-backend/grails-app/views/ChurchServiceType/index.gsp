<!doctype html>
<html>
<head>
    <meta name="layout" content="main"/>
    <title>Church Service Types</title>
</head>
<body>
    <h1>Church Service Types</h1>
    <g:link action="create">Create New Church Service Type</g:link>
    <table>
        <thead>
            <tr>
                <th>Type Name</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <g:each in="${churchServiceTypeList}" var="churchServiceType">
                <tr>
                    <td>${churchServiceType.typeName}</td>
                    <td>
                        <g:link action="show" id="${churchServiceType.id}">Show</g:link>
                        <g:link action="edit" id="${churchServiceType.id}">Edit</g:link>
                        <g:link action="delete" id="${churchServiceType.id}" method="DELETE">Delete</g:link>
                    </td>
                </tr>
            </g:each>
        </tbody>
    </table>
</body>
</html>