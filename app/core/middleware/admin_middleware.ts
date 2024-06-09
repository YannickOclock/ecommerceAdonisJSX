import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'
import { UserRole } from '#admin/user/enums/user_role'
import { errors as authErrors } from '@adonisjs/auth'

/**
 * Auth middleware is used authenticate HTTP requests and deny
 * access to unauthenticated users.
 */
export default class AdminAuthMiddleware {
  /**
   * The URL to redirect to, when authentication fails
   */
  redirectTo = '/login'

  async handle(ctx: HttpContext, next: NextFn) {
    const user = ctx.auth.getUserOrFail()
    if (!user.role || user.role !== UserRole.Admin) {
      throw new authErrors.E_INVALID_CREDENTIALS()
    }
    return next()
  }
}
