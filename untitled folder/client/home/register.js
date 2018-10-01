<!DOCTYPE html>
<html>
<head>
  <!-- Standard Meta -->
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">

  <!-- Site Properties -->
  <title>Login to FSE chatroom!</title>
  <link rel="stylesheet" type="text/css" href="/css/reset.css">
  <link rel="stylesheet" type="text/css" href="/css/site.css">

  <link rel="stylesheet" type="text/css" href="/css/container.css">
  <link rel="stylesheet" type="text/css" href="/css/grid.css">
  <link rel="stylesheet" type="text/css" href="/css/header.css">
  <link rel="stylesheet" type="text/css" href="/css/image.css">
  <link rel="stylesheet" type="text/css" href="/css/menu.css">

  <link rel="stylesheet" type="text/css" href="/css/divider.css">
  <link rel="stylesheet" type="text/css" href="/css/segment.css">
  <link rel="stylesheet" type="text/css" href="/css/form.css">
  <link rel="stylesheet" type="text/css" href="/css/input.css">
  <link rel="stylesheet" type="text/css" href="/css/button.css">
  <link rel="stylesheet" type="text/css" href="/css/list.css">
  <link rel="stylesheet" type="text/css" href="/css/message.css">
  <link rel="stylesheet" type="text/css" href="/css/icon.css">

  <script src="/javascript/form.js"></script>
  <script src="./transition.js"></script>
  <style type="text/css">
    body {
      background-color: #FFFFFF
    }
    body > .grid {
      height: 100%;
    }
    .image {
      margin-top: -100px;
    }
    .column {
      max-width: 450px;
    }
  </style>
</head>
<body>
<div class="ui middle aligned center aligned grid">
<div class="column">
<h1>Register your account here!</h1>
    <a href="/login"> Go to login </a>
        <form action="/register" method="post" class="ui form">
            <p>
                <label for="username"><h3>Username</h3></label>
                <input type="text" id="username" name="username" placeholder="username">
            </p>
            <p>
                <label for="password"><h3>Password</h3></label>
                <input type="text" id="password" name="password" placeholder="password">
            </p>
            <p>
                <input type="submit" value="register" class = "ui inverted brown button">
            </p>
        </form>

</div>
</div>
</body>

