import { AccessDeniedProps, UserRole } from '../types/user.types';

/**
 * Компонент-заглушка, отображаемый при отсутствии доступа
 * 
 * @param requiredRoles - роли, необходимые для доступа
 * @param userRoles - роли текущего пользователя
 */
function AccessDenied({ requiredRoles, userRoles }: AccessDeniedProps) {
  const roleNames: Record<UserRole, string> = {
    admin: 'администратора',
    user: 'пользователя',
    guest: 'гостя',
    moderator: 'модератора'
  };
  
  const requiredRolesText = requiredRoles 
    ? requiredRoles.map(r => roleNames[r]).join(' или ')
    : 'определённые';
  
  return (
    <div className="access-denied">
      <div className="access-denied-icon"></div>
      <h3>Доступ запрещён</h3>
      <p>У вас нет прав для просмотра этого раздела.</p>
      {userRoles && userRoles.length > 0 && (
        <p className="access-denied-hint">
          Ваши роли: {userRoles.map(r => roleNames[r]).join(', ')}<br />
          Требуются права: {requiredRolesText}
        </p>
      )}
    </div>
  );
}

export default AccessDenied;