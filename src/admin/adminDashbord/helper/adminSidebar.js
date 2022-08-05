import React from 'react'

function AdminSidebar() {
    return (
        <nav className="nav-admin-sidebar">
        <ul>
          <li><a href="#"><i className="fa fa-home"></i>&nbsp;  Home</a></li>
          <li><a href="#"><i className="fa fa-book"></i>&nbsp;  Book</a></li>
          <li><a href="#"><i className="fa fa-users"></i>&nbsp;  Users</a></li>
          <li><a href="#"><i className="fa fa-picture-o"></i>&nbsp;  Pictures</a></li>
          <li><a href="#"><i className="fa fa-phone"></i>&nbsp; Contact</a></li>
        </ul>
      </nav>
    )
}

export default AdminSidebar