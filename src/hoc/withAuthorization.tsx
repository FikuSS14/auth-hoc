import { ComponentType } from 'react';
import AccessDenied from '../components/AccessDenied';
import { CurrentUser, UserRole } from '../types/user.types';

export function withAuthorization<P extends { currentUser?: CurrentUser | null }>(
  WrappedComponent: ComponentType<P>,
  allowedRoles: UserRole[]
) {
  const displayName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
  
  const AuthorizedComponent = (props: P) => {
    const { currentUser } = props;  // ← убрали restProps
    
    const hasAccess = currentUser !== null && 
      currentUser !== undefined &&
      currentUser.roles.some(role => allowedRoles.includes(role));
    
    if (!hasAccess) {
      return <AccessDenied requiredRoles={allowedRoles} userRoles={currentUser?.roles} />;
    }
    
    return <WrappedComponent {...props} />;  // ← передаём все пропсы целиком
  };
  
  AuthorizedComponent.displayName = `withAuthorization(${displayName})`;
  
  return AuthorizedComponent;
}

export default withAuthorization;