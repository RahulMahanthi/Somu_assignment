import React, { useContext } from 'react';
import { Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const Sidebar = () => {
  const { user } = useContext(AuthContext);
  const location = useLocation();

  return (
    <div className="sidebar">
      <h5 className="mb-3">Navigation</h5>
      <Nav className="flex-column">
        <Nav.Link as={Link} to="/dashboard" active={location.pathname === '/dashboard'}>
          Dashboard
        </Nav.Link>
        
        {/* Employee Links */}
        {user && (user.role === 'Employee' || user.role === 'Admin') && (
          <>
            <Nav.Link as={Link} to="/request-access" active={location.pathname === '/request-access'}>
              Request Access
            </Nav.Link>
            <Nav.Link as={Link} to="/my-requests" active={location.pathname === '/my-requests'}>
              My Requests
            </Nav.Link>
          </>
        )}
        
        {/* Manager Links */}
        {user && (user.role === 'Manager' || user.role === 'Admin') && (
          <Nav.Link as={Link} to="/pending-requests" active={location.pathname === '/pending-requests'}>
            Pending Requests
          </Nav.Link>
        )}
        
        {/* Admin Links */}
        {user && user.role === 'Admin' && (
          <>
            <Nav.Link as={Link} to="/create-software" active={location.pathname === '/create-software'}>
              Create Software
            </Nav.Link>
            <Nav.Link as={Link} to="/software-list" active={location.pathname === '/software-list'}>
              Software List
            </Nav.Link>
          </>
        )}
      </Nav>
    </div>
  );
};

export default Sidebar;