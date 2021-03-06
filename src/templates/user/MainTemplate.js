import _ from 'underscore';

export default _.template(`
<form class="form-inline">
  <div class="form-group">
    <label class="label-control">Name</label>
    <input type="text" id="name" class="form-control">
  </div>
  <button id="greet" class="btn btn-default">Click</button>
</form>
<div id="message-region"></div>
`);
