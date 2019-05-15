using System.Web.Mvc;
using System.Web.Routing;

namespace MVCCockpit
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                name: "FraudTracker",
                url: "fraud-tracker/{*ignore}",
                defaults: new { controller = "FraudTracker", action = "Index" }
            );

            routes.MapRoute(
                name: "CustomerJourney",
                url: "customer-journey/{*ignore}",
                defaults: new { controller = "CustomerJourney", action = "Index" }
            );

            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}
