<!doctype html>
<html>
<head>
    <meta name="layout" content="main"/>
    <title>Show Church Service</title>
</head>
<body>
    <h1>Show Church Service</h1>
    <p>Name: ${churchService.name}</p>
    <p>Description: ${churchService.description}</p>
    <g:link action="edit" id="${churchService.id}">Edit</g:link>
    <g:link action="index">Back to List</g:link>
</body>
</html>