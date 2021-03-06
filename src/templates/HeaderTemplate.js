import _ from 'underscore';

export default _.template(`
<nav class="navbar navbar-default">
  <div class="container">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-links">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a href="#" class="navbar-brand">Backbone Marionette Template</a>
    </div>
    <div class="collapse navbar-collapse" id="navbar-links">
      <ul class="nav navbar-nav">
        <li><a href="#hello">Hello</a></li>
        <li><a href="#user">User</a></li>
        <li><a href="#users">Users</a></li>
      </ul>
    </div>
  </div>
</nav>
`);
