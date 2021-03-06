/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
  /***************************************************************************
   *                                                                          *
   * Make the view located at `views/homepage.ejs` your home page.            *
   *                                                                          *
   * (Alternatively, remove this and add an `index.html` file in your         *
   * `assets` directory)                                                      *
   *                                                                          *
   ***************************************************************************/

  // "/": { view: "pages/homepage" },

  //View
  "GET /": "ViewController.login",
  "GET /home": "ViewController.home",
  "GET /signup": "ViewController.signup",



  //Room
  "GET /rooms": "RoomController.list",
  "GET /rooms/:id": "RoomController.show",

  "PUT /rooms/:id": "RoomController.update",
  "POST /rooms": "RoomController.store",
  "DELETE /rooms/:id": "RoomController.destroy",

  //Information
  "POST /rooms/:room_id/informations": "InformationController.store",

  //Messages
  "POST /rooms/:room_id/messages": "MessageController.store",
  "GET /rooms/:room_id/messages": "MessageController.list",

  //Sticker
  "GET /stickers": "StickerController.list",
  "POST /stickers/:id": "StickerController.store"
  // "POST /rooms/:room_id/stickers/:sticker_id": "StickerController.attch "

  /***************************************************************************
   *                                                                          *
   * More custom routes here...                                               *
   * (See https://sailsjs.com/config/routes for examples.)                    *
   *                                                                          *
   * If a request to a URL doesn't match any of the routes in this file, it   *
   * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
   * not match any of those, it is matched against static assets.             *
   *                                                                          *
   ***************************************************************************/
};
