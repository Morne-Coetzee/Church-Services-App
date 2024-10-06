<!doctype html>
<html>
<head>
    <meta name="layout" content="main"/>
    <title>Edit Church Service Type</title>
</head>
<body>
    <h1>Edit Church Service Type</h1>
    <g:form action="update" id="${churchServiceType.id}">
        <label for="typeName">Type Name:</label>
        <g:textField name="typeName" value="${churchServiceType.typeName}" required=""/>
        <g:submitButton name="update" value="Update"/>
    </g:form>
    <g:link action="index">Back to List</g:link>
</body>
</html>