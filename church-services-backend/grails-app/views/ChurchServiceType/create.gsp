<!doctype html>
<html>
<head>
    <meta name="layout" content="main"/>
    <title>Create Church Service Type</title>
</head>
<body>
    <h1>Create Church Service Type</h1>
    <g:form action="save">
        <label for="typeName">Type Name:</label>
        <g:textField name="typeName" required=""/>
        <g:submitButton name="create" value="Create"/>
    </g:form>
    <g:link action="index">Back to List</g:link>
</body>
</html>