/**
 * Интерфейс для ролей пользователя
 */
export type UserRole = 'admin' | 'user' | 'guest' | 'moderator';

/**
 * Интерфейс для текущего пользователя
 */
export interface CurrentUser {
  id: string;
  name: string;
  roles: UserRole[];
}

/**
 * Пропсы, которые принимает HOC withAuthorization
 */
export interface WithAuthorizationProps {
  currentUser: CurrentUser | null;
}

/**
 * Пропсы для компонента AccessDenied
 */
export interface AccessDeniedProps {
  requiredRoles?: UserRole[];
  userRoles?: UserRole[];
}

/**
 * Пропсы для компонента LoginSimulator
 */
export interface LoginSimulatorProps {
  onLogin: (user: CurrentUser) => void;
  onLogout: () => void;
  currentUser: CurrentUser | null;
}