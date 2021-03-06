import _ from 'underscore';

export default _.template(`
<div class="panel-body">
  <form class="form-inline">
    <div class="form-group">
      <label class="control-label">Name</label>
      <input type="text" id="name" class="form-control" name="name">
      <span class="help-inline text-danger"><span>
    </div>
    <div class="form-group">
      <label class="control-label">Age</label>
      <input type="text" id="age" class="form-control" name="age">
      <span class="help-inline text-danger"><span>
    </div>
    <button id="create" class="btn btn-default">Submit</button>
  </form>
</div>
`);
