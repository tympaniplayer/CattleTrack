using CattleTrack.Data;
using CattleTrack.Data.EntityFramework;
using CattleTrack.Web.Controllers;
using CattleTrack.Web.Models;
using Microsoft.Practices.Unity;
using System;
using System.Data.Entity;
using System.Web.Http;
using System.Web.Http.Controllers;
using Unity.WebApi;

namespace CattleTrack.Web
{
    public static class UnityConfig
    {
        private static Lazy<IUnityContainer> _container = new Lazy<IUnityContainer>(() =>
       {
           var container = new UnityContainer();
           RegisterTypes(container);
           return container;
       });
        public static void RegisterComponents()
        {  
            
            GlobalConfiguration.Configuration.DependencyResolver = new UnityDependencyResolver(_container.Value);
        }        
        public static IUnityContainer GetConfiguredContainer()
        {
            return _container.Value;
        }
        public static void RegisterTypes(IUnityContainer container)
        {
            // register all your components with the container here
            // it is NOT necessary to register your controllers

            // e.g. container.RegisterType<ITestService, TestService>();
            container.RegisterType<DbContext, ApplicationDbContext>();
            container.RegisterType<ICattleRepository, CattleRepository>();
            container.RegisterType<IHttpController, CattleController>("Cattle");
        }
    }
}