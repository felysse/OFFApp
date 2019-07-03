
import HomePage from '../pages/home.vue';
import AboutPage from '../pages/about.vue';
import FormPage from '../pages/form.vue';
import SchedulePage from '../pages/schedule.vue'
import VendorsPage from '../pages/vendors.vue'
import LoungePage from '../pages/lounge.vue'
import MapPage from '../pages/map.vue'
import InfoPage from '../pages/info.vue'
import ReportPage from '../pages/report.vue'
import LinksPage from '../pages/links.vue'
import SponsorsPage from '../pages/sponsors.vue'
import FoodPage from '../pages/food.vue'
import CraftPage from '../pages/craft.vue'
import SupportPage from '../pages/support.vue'



import DynamicRoutePage from '../pages/dynamic-route.vue';
import RequestAndLoad from '../pages/request-and-load.vue';
import NotFoundPage from '../pages/404.vue';

var routes = [
  {
    path: '/',
    component: HomePage,
    keepAlive: true,
  },
  {
    path: '/about/',
    component: AboutPage,
  },
  {
    path: '/form/',
    component: FormPage,
  },
  {
    path: '/schedule/',
    component: SchedulePage,
    keepAlive: true,
  },
  {
    path: '/vendors/',
    component: VendorsPage,
  },
  {
    path: '/lounge/',
    component: LoungePage,
  },
  {
    path: '/map/',
    component: MapPage,
    keepAlive: true,
  },
  {
    path: '/info/',
    component: InfoPage,

  },
  {
    path: '/report/',
    component: ReportPage,
  },

  {
    path: '/sponsors/',
    component: SponsorsPage,
  },
  {
    path: '/food/',
    component: FoodPage,
  },
  {
    path: '/craft/',
    component: CraftPage,
  },
  {
    path: '/support/',
    async: function (routeTo, routeFrom, resolve, reject) {
      // Router instance
      var router = this;

      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();

      // User ID from request


      // Simulate Ajax Request
      setTimeout(function () {
        // We got user data from request
        var user = {


          more: 'Support Oakland First Fridays',
          links2: [
            {
              title: 'Donate',
              url: 'https://secure.squarespace.com/checkout/donate?donatePageId=5a8c9d92085229336036f459&ss_cid=e702a449-31b0-403d-a6c6-28ae11b45a66&ss_cvisit=1559254845736&ss_cvr=c0b21430-e79b-4aa6-8cd6-1ffce4f129f4%7C1554711350733%7C1559158626798%7C1559254847454%7C6',
              media: 'heart_fill'
            },
            {
              title: 'Sponsor',
              url: 'https://www.oaklandfirstfridays.org/sponsor',
              media: 'gift_fill'
            },
            {
              title: 'Volunteer',
              url: 'https://www.oaklandfirstfridays.org/volunteer',
              media: 'hand'
            },
            {
              title: 'Become A Vendor',
              url: 'https://pinnaclesfestivals.knack.com/oakff#home/',
              media: 'persons_round_fill'
            },
            {
              title: 'Become A Performer',
              url: 'https://pinnaclesfestivals.knack.com/oakff#home/',
              media: 'star_fill'
            },
            /*{
              title: 'Feedback',
              url: 'https://www.oaklandfirstfridays.org/connect',
              media: 'compose'
            }*/
          ]
        };
        // Hide Preloader
        app.preloader.hide();

        // Resolve route to load page
        resolve(
          {
            component: SupportPage,
          },
          {
            context: {
              user: user,
            }
          }
        );
      }, 1000);
    },
  },
  {
    path: '/links/',
    async: function (routeTo, routeFrom, resolve, reject) {
      // Router instance
      var router = this;

      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();

      // User ID from request


      // Simulate Ajax Request
      setTimeout(function () {
        // We got user data from request
        var user = {
          about: 'Keep In Touch With Us!',
          links: [
            {
              title: 'Event Website',
              url: 'https://www.oaklandfirstfridays.org/',
              media: 'world',

            },
            {
              title: 'After the Event',
              url: 'https://oaklandfirstfridays.org/afterwards',
              media: 'time_fill',

            },
            {
              title: 'Facebook',
              url: 'https://www.facebook.com/OakFirstFridays/',
              media: 'logo_facebook'
            },
            {
              title: 'Instagram',
              url: 'https://www.instagram.com/oakfirstfridays/',
              media: 'logo_instagram'
            },
            {
              title: 'Twitter',
              url: 'https://twitter.com/OakFirstFridays',
              media: 'logo_twitter'
            },
            /*{
              title: 'Newsletter',
              url: '',
              media: 'today_fill'
            },*/
            {
              title: 'Contact Us',
              url: 'mailto:event@oaklandfirstfridays.org?subject=Feedback on Oakland First Fridays',
              media: 'email_fill'
            },
          ],


        };
        // Hide Preloader
        app.preloader.hide();

        // Resolve route to load page
        resolve(
          {
            component: LinksPage,
          },
          {
            context: {
              user: user,
            }
          }
        );
      }, 1000);
    },
  },
  {
    path: '/forum/',
    url: 'http://framework7.io'
  },




  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: DynamicRoutePage,
  },
  {
    path: '/request-and-load/user/:userId/',
    async: function (routeTo, routeFrom, resolve, reject) {
      // Router instance
      var router = this;

      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();

      // User ID from request
      var userId = routeTo.params.userId;

      // Simulate Ajax Request
      setTimeout(function () {
        // We got user data from request
        var user = {
          about: 'Hello, i am creator of Framework7! Hope you like it!',
          links: [
            {
              title: 'Framework7 Website',
              url: 'http://framework7.io',
            },
            {
              title: 'Framework7 Forum',
              url: 'http://forum.framework7.io',
            },
          ]
        };
        // Hide Preloader
        app.preloader.hide();

        // Resolve route to load page
        resolve(
          {
            component: RequestAndLoad,
          },
          {
            context: {
              user: user,
            }
          }
        );
      }, 1000);
    },
  },

  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;
