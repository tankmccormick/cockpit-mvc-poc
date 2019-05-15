using System;
using System.Web.Mvc;
using MVCCockpit.ViewModels;

namespace MVCCockpit.Controllers
{
    public class AuthenticationController : Controller
    {
        /// <summary>
        /// 
        /// </summary>
        /// <param name="returnUrl"></param>
        /// <returns></returns>
        [HttpGet]
        public ActionResult Login(string returnUrl)
        {
            var model = new LoginViewModel();
            if (Url.IsLocalUrl(returnUrl))
                model.ReturnUrl = returnUrl;

            return View();
        }

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        [ValidateAntiForgeryToken]
        [ActionName("Login")]
        public ActionResult LoginPost(LoginViewModel model)
        {
            Session["token"] = Guid.NewGuid().ToString();

            // redirect
            var redirectUrl = "/";
            if (Url.IsLocalUrl(model.ReturnUrl))
                redirectUrl = model.ReturnUrl;

            return Redirect(redirectUrl);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        public ActionResult Logout()
        {
            Session.Clear();
            Session.Abandon();
            return Redirect("/");
        }
    }
}