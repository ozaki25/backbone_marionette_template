import _ from 'underscore';

export default _.template(`
<td><%- id %></td>
<td><%- name %></td>
<td><%- age %></td>
<td>
  <a href="#" id="destroy" class="btn btn-link">
    <span class="glyphicon glyphicon-trash"></span>
  </a>
</td>
`);
