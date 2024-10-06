<!doctype html>
<html>
<head>
    <meta name="layout" content="main"/>
    <title>Edit Church Service</title>
</head>
<body>
    <h1>Edit Church Service</h1>
    <g:form action="update" id="${churchService.id}">
        <label for="name">Name:</label>
        <g:textField name="name" value="${churchService.name}" required=""/>
        <label for="description">Description:</label>
        <g:textField name="description" value="${churchService.description}"/>
        <g:submitButton name="update" value="Update"/>
    </g:form>
    <g:link action="index">Back to List</g:link>
</body>
</html>