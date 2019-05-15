using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace MVCCockpit.Helpers
{
    public class SessionAuthoriseAttribute : AuthorizeAttribute, IAuthorizationFilter
    {
        /// <summary>
        /// 
        /// </summary>
        /// <param name="filterContext"></param>
        public override void OnAuthorization(AuthorizationContext filterContext)
        {
            if (filterContext.ActionDescriptor.IsDefined(typeof(AllowAnonymousAttribute), true)
                || filterContext.ActionDescriptor.ControllerDescriptor.IsDefined(typeof(AllowAnonymousAttribute), true))
            {
                // Don't check for authorization as AllowAnonymous filter is applied to the action or controller
                return;
            }

            // Check for authorization
            if (HttpContext.Current.Session["token"] == null)
            {
                //filterContext.Result = new HttpUnauthorizedResult();
                var rvd = new RouteValueDictionary(new { controller = "Authentication", action = "Login" });
                var path = filterContext.HttpContext.Request.Url.LocalPath;
                if (path.Length > 1)
                    rvd.Add("ReturnUrl", path);

                filterContext.Result = new RedirectToRouteResult(rvd);
            }
        }
    }
}