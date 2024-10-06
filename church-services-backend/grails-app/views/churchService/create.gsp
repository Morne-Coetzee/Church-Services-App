<!doctype html>
<html>
<head>
    <meta name="layout" content="main"/>
    <title>Create Church Service</title>
</head>
<body>
    <h1>Create Church Service</h1>
    <g:form action="save">
        <label for="name">Name:</label>
        <g:textField name="name" required=""/>
        <label for="description">Description:</label>
        <g:textField name="description"/>
        <g:submitButton name="create" value="Create"/>
    </g:form>
    <g:link action="index">Back to List</g:link>
</body>
</html>