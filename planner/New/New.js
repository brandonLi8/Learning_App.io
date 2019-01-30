/**
 * Learning App
 * New.js
 *
 * @author Brandon Li <brandon.li820@icloud.com> 
 * Created on 1/20/19
 * Copyright © 2019 Brandon Li. All rights reserved.
 *
 * ## Functionality:
 *  - Display the contents to a new plan and send it to the model.
 */

 // import modules
import PlannerNode from "../Models/PlannerNode.js";
import PlannerModel from "../Models/PlannerModel.js"
import PlannerView from "../Views/PlannerView.js";
import ScreenView from "./../../ScreenView/ScreenView.js";
// modules
var screen = new ScreenView();
var model = new PlannerModel( );
var view = new PlannerView();
/**
 * Intance Data
 * Set up the header and its children.
 */
let header = view.addHeader( );

let plannerIcon = view.addImageToHeader( );
// add events
plannerIcon.setAttribute( "src", "./assets/plannerTBackground.png" );
// handle user input
plannerIcon.onmouseover = function() { 
  plannerIcon.setAttribute( "src", "./assets/plannerTBackgroundHover.png" );
};
plannerIcon.onmouseout = function() { 
  plannerIcon.setAttribute( "src", "./assets/plannerTBackground.png" );
};
// back to dashboard button
let backToDashboard = view.addLinkToHeader( "Back To Dashboard" );
backToDashboard.onclick = function(){
  window.open( "../dashboard.html", "_self" ) 
}
backToDashboard.style.border = "none";
// add the help button
let help = view.addLinkToHeader( "Help" )
help.onclick = function(){
  window.open( "./help.html", "_self" ) 
}
help.style.border = "none";
// add the new plan button
let newPlan = view.addLinkToHeader( "New" );
newPlan.style.border = "none";
// add the remove all
let removeAll = view.addLinkToHeader( "Remove All" )
removeAll.style.border = "none"
removeAll.onclick = function( ){
  model.clear();
};


// add the help button
function addReturnButton( src, url , hoverSrc, id ){
  // add the div to the wrapper
  let button = screen.addChildToParentId( 
                "div", id, 
                null, "", "planner_wrapper" 
              );
  // add the image to the button node
  let image = screen.addChildToParentNode( 
                "img", null, 
                "backToDashboard", "", button 
              );
  image.setAttribute( "src", src );
  // handle user input
  image.onmouseover = function() { 
    image.setAttribute( "src", hoverSrc );
    image.style.cursor = "pointer";
  };
  image.onmouseout = function() { 
    image.setAttribute( "src", src );
  };
  image.onclick = function() { 
    window.open(url, '_self');
  }
}
addReturnButton( "./assets/reset.png", 
                 "../planner.html", 
                 "./assets/resetHover.png",
                 "backToDashboardButton" )


screen.addChildToParentId( "div", "title", "title", "adfadsfa", "backToDashboardButton")