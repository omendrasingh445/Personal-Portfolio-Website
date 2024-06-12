@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;1,200;1,300&display=swap');
 
:root{
    --header-height: 3.5rem;

    /* colors */

    --color-white: hsl(252,30%,100%);
    --color-light: hsl(252,30%,92%);
    --color-gray: hsl(252,15%,65%);
    --color-primary: rgb(235, 53, 77);
    --color-dark: hsl(252,30%,17%);

    /* font and topography */
     /* .5rem = 8px | 1rem =16px */

    --body-font: 'Poppins', sans-serif;
    --h1-font-size: 2.25rem;
    --h2-font-size: 1.75rem;
    --h3-font-size: 1.25rem;
    --normal-font-size: 1rem;
    --small-font-size: .875rem;

    /* font weight */

    --font-medium: 400;
    --font-semi-bold: 600;

     /* Margenes bottom  */
     /* .5rem = 8px | 1rem =16px */

     --m-0-5: .5rem;
     --m-0-75: .75rem;
     --m-1: 1rem;
     --m-1-5: 1.5 rem;
     --m-2: 2 rem;
     --m-2-5: 2.5rem;

     /* card padding */
      
     --card-padding: 2rem 1rem;
       

       /* Border radius */

       --border-radius: 1.25rem;

       /* box shadow */
         --box-shadow: 0px 5px 20px 0px rgba(69,67,96,0.1);

}
/* responsive typography */
@media screen and (max-width:88%)
 {
     :root
     {
         --h1-font-size: 1.75rem;
         --h2-font-size: 1.5rem;
         --h3-font-size: 1rem;
         --normal-font-size: .9rem;
         --small-font-size: .813rem;
     }
}

/* BASE */



*
{
    margin: .4;
    padding: 0;
    box-sizing: border-box;
} 

html{
    scroll-behavior: smooth;
}

body,
button,
input,textarea
{
    font-family: var(--body-font);
    font-size: var(--normal-font-size);
}

body{
   
    background: rgb(164, 233, 164);
    background: radial-gradient(circle, rgba(211, 156, 139, 5) 0%,rgb(191, 223, 200)35%, rgb(214, 235, 243) 100%);

    animation: effect 11s ease-in-out infinite;
    background-size: 200%;
    line-height: 1.7;
    font-weight: var(--font-medium);
}
 @keyframes effect{
     0%{
         background-position: 0%,50%;
     }
     50%{
        background-position: 100%,50%;
    }
    100%{
        background-position: 0%,50%;
    }
 }

img{
    max-width: 100%;
    height: auto;
    vertical-align: middle;
}

ul
{
    list-style:none ;
}

a
{
    text-decoration: none;
    color: var(--color-dark);
}

h1,h2,h3
{
  font-weight: var(--font-semi-bold);
}

h1{
    font-size:var(--h1-font-size) ;
}

h2
{
    font-size: var(--h2-font-size) ;
}

h3
{
    font-size: var(--h3-font-size) ;
}

/* LAYOUT */

.container{
    max-width: 80%;
    margin: auto;
    position: relative;
}

.row{
    
    display: flex ;
    flex-wrap: wrap;
}


/* reusable css classes */
.section .container{
    padding-top: 3.90rem;
    padding-bottom: 4.75rem;

}

.section-title{
    font-size: 2.25rem;
    margin-left: var(--m-0-75);
    margin-bottom: var(--m-2-5);
}

.padd-15{
    padding-left: 15px;
    padding-right: 15px;

}

/* buttons  */
.btn
{
    padding: 0.75rem;
    line-height: 1.3;
    border-radius: var(--border-radius);
    position: relative;

}
.btn:focus{
    outline: 0;
}
 .btn-default
 {
     color: rgb(2, 22, 27);
     display: inline-block;
     background-color: var(--color-primary) ;
     transform: perspective(1px) translateZ(0);
 }
.btn-default:hover
{
animation-name: button-push;
animation-duration: 0.4s;
animation-timing-function: linear;
animation-iteration-count: 1 ;
 }

 @keyframes button-push
 {
     50%{
         transform: scale(0.8);
     }
     100%{
        transform: scale(1);
    }
 }

.cv-btn .btn{
    right: 2rem;
    margin: 2rem;
    position: relative;
 }
/* header  */
.header{
   
    width: 100%;
    background-color: var(--color-light);
    position: fixed;
    top: 0;
    left: 0;
    z-index:100;
    box-shadow: 1px 1px 1px 1px rgb(231, 188, 48);
}

/* navbar */

.nav
{
    height: calc(var(--header-height)+.1.5rem);
    display: flex;
    justify-content: space-between;
    align-items:center ;
    column-gap: 5rem;

}

.nav-logo
{
    font-size: var(--h2-font-size);
    font-weight: var(--font-semi-bold);
    letter-spacing: 0.175rem;
    position: relative;

}

.nav-logo::after{
position: absolute;
content: '' ;
width: 0.3rem ;
height: 0.3rem;
border-radius: 50%;
background-color: var(--color-primary);
top: 56%;
right: -0.25rem;

}

.nav-list
{
    display: flex;
    column-gap: 3rem;
}

.nav-link
{
    font-weight: var(--font-medium);
    transition: .3s

}

.nav-link:hover
{
color: var(--color-primary);

}

.nav-close
{
   font-size: 1.3rem;
   position: absolute;
   top: 1.2rem;
   right: 1.25rem;
   cursor: pointer; 
}
.nav-btns
{
    display: inline-flex;
    align-items: center;
    column-gap: rem
}

.nav-toggle
{
    font-size: 1.8rem;
    cursor: pointer;
    color: rgb(170, 36, 3);  
}

.nav-close,
.nav-toggle
{
    display: none;
}

.active-link
{
 position: relative;
}

.active-link::before 
{
    content: '';
    position: absolute;
    top: 100%;
    left: 0;
    width: 2rem;
    height: .2rem;
    background-color: var(--color-primary);
    border-radius: 50%;
}
.scroll-header
{
    box-shadow: 0 1px 4px rgba(165,125,125,0.02) ;
}


.home{
    display: flex ;
    justify-content: center;
    height: 98vh;
    min-height: 98vh;
    padding: 5rem;
}

.home .intro
{
   
    max-width: 400px;
    text-align: center;
}

.home .intro img{
    margin-bottom: var(--m-1);
}

.home .intro .social-icons
{
    margin-top: var(--m-1);
    margin-bottom: var(--m-1);
}

.home .intro .social-icons li
{
    display: inline-block;
}

.home .intro .social-icons li:not(:last-child)
{
    margin-right: var(--m-2-5) ;
}

.home .intro .social-icons a
{
    font-size: var(--h3-font-size);
}


@keyframes ani-mouse
{
0%
{
    top:29%;
}
15%
{
    top:50%;
}
0%
{
    top:50%;
}
100%
{
    top:29%;
}
}

.scroll-down
{
    position: relative;
    bottom: var(--m-2-5);
    width: auto;
    left: 0;
    top: 8rem ;  
    width: 100%;
}

.mouse-wrapper
{
    font-size: var(--small-font-size);
    display: block;
    margin: auto;
    max-width: 100px;
    text-align: center;
}


.mouse{
    border: 3px solid var(--color-dark);
    display: block;
    height: 1.75rem;
    width: 1.25rem;
    margin: auto;
    margin-top: var(--m-1-5);
    border-radius: var(--border-radius);
    position: relative;
}

.mouse .wheel{
    background-color: var(--color-dark);
    border-radius: 50% ;
    width: 0.25rem;
    height:0.2rem;
    position: absolute;
    top: var(--m-1-5);
    left: 40%;
    display: block;
    animation: ani-mouse 2s linear infinite;
}

.about-img{
    border-radius: 50%;
    flex :0% 0% 25%;
    max-width: 25%;
}


.about img{
    opacity: 0.6;
    image-rendering: pixelated;
    border: 2px groove #DFF5FF;
    transform:scaleX(-1);  
    border-radius:50%;
}

.about-content{
    flex :0% 0% 75%;
    max-width: 75%;

}

.about-content .about-text,
.about-content .skills
{
    flex: 0 0 50%;
    max-width: 50%;
}

.rounded{
   
   background-color :#DFF5FF;
   border: 0.15rem groove rgba(67, 83, 138, 0.733);
   padding:2rem 4rem;
   border-radius: var(--border-radius);
}

.about-text p{
    text-align: justify;
    margin-bottom: var(--m-2);
    width: 100%;

}

.about-content .skills .skill-item
{
    flex: 0 0 100%;
}

.about-content .skills .skill-item h4{
    margin-bottom: var(--m-0-75);
}

.about-content .skills .skill-item .progress
{
    background-color: var(--color-light);
    height: 1.3rem;
    border-radius: var(--border-radius);
    width: 100%;
    position: relative;
}

.about-content .skills .skill-item:not(last-child)
{
    margin-bottom: var(--m-1-5);
}

.about-content .skills .skill-item .progress .progress-in
{
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    border-radius: var(--border-radius);
}

.about-content .skills .skill-item .skill-percent
{
    position: absolute;
    right: 0;
    top: -2.5rem;
}

.fact-item
{
        display: inline-flex;
        padding-left: 3rem;
        margin-left:2rem; 
    }
    
.fact-item-row{
     display: flex;
    }  

.fact-item i{
    
    font-size: 2rem;
    color: var(--color-dark);
}


/* expereince */

.education
{
    flex:  0 50%;
    max-width: 50%;
}

.experience
{
    flex:0 0 50%;
    max-width: 50%;
}

.timeline-box
{
    flex: 0 0 100%;
    max-width: 100%;
    
}

.timeline
{
background-color: #DFF5FF;
padding: 1.7rem 0.9rem;
border-radius: var(--border-radius);
width: 92%;
height: 95%;
position: relative;
}

.timeline .timeline-item
{
    position: relative;
    padding-left: 2.4rem;
    padding-bottom:1.6rem;
}

.timeline .timeline-item:last-child
{
    padding-bottom: 0;
}

.timeline .timeline-item::before{
    content: '';
    width: 1px;
    position:absolute;
    height: 100%;
    left:var(--m-0-5);
    background-color: var(--color-primary);
    top:0;
}

.timeline .timeline-icon
{
    position: absolute;
    left: -0.25rem;
    top: 0;
    font-size: 1rem;
    background-color:#DFF5FF;
    color: var(--color-primary);
}

.timeline .timeline-date
{
    font-size: var(--small-font-size) ;
    color: var(--color-gray);
}
.timeline .timeline-date .lni
{
    margin-right: 0.3rem;
}

.timeline .timeline-title
{
    margin: var(--m-0-5) 0;

}

/* portfolio */

.portfolio .portfolio-filter
{
    flex:0  0 100%;
    max-width: 100%;
    text-align: center;
    margin-bottom: var(--m-2-5);
}

.portfolio .portfolio-filter button
{
    border: none;
    background-color: transparent;
    font-weight: var(--font-semi-bold);
    text-transform: capitalize;
    margin: 1rem var(--m-0-75);
    cursor: pointer;
    white-space: nowrap;
    transition: 0.3s;

}

.portfolio .portfolio-filter button.active
{
color: var(--color-primary);
position: relative;

}

.portfolio .portfolio-filter button.active::before
{
    content: '' ;
    position: absolute;
    width: 65% ;
    height: .15rem;
    left: 0%;
    bottom: -0.25rem;
    background-color: var(--color-primary);
    border-radius: 50%;
}

.portfolio-item
{
    flex:0 0 33.33%;
    max-width: 33.33%;
    margin-bottom: var(--m-2-5);
}

.portfolio-item.hide
{
    display: none;
}
.portfolio-item.show
{
    display: block;
    animation: showItem 0.5s ease;
}
@keyframes showitem {
    0%
    {
        transform: scale(0.6);
        opacity: 0;
    }
   100%
    {
        transform: scale(1);
        opacity: 1;
    }
}

.portfolio-item-inner
{
    position: relative;
    overflow: hidden;   
    padding-bottom: 0;  

}

.portfolio-item-thumbnail
{
   height: 100%;
   width: 100%;
}

.portfolio-item-inner .portfolio-item-thumbnail img
{
    width:100%;
    height:25em;
    object-fit: cover;
    border: 2px groove rgb(141, 175, 189);
}

.portfolio-item .mask
{
    background: rgba(99, 196, 175, 0.747);
    position: absolute;
   
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: 0.3s;
}



.portfolio-item-inner:hover .mask
{
  opacity: 0.8 ;
}

.portfolio-item .term
{
    color: #fff;
    background: var(--color-primary);
    border-bottom-left-radius: 0.98rem;
    border-bottom-right-radius: 0.98rem;
    position: absolute;
    top: 0;
    left: var(--m-1-5);
    font-size: var(--small-font-size);
    display: inline-block;
    padding: 0.19rem 0.625rem;
    transform: translateY(-40px);
    transition: 0.3s;
}

.portfolio-item h3
{
    color: #fff;
    font-size: 1.25rem;
    margin:  0 0 0.98rem;
    padding: 0 1.25rem;
    position: absolute;
    top: 3.75rem;
    transform: translateY(30px);
    opacity: 0;
}

.portfolio-item .more-button
{
    color:#fff;
    position: absolute;
    bottom: var(--m-1);
    left: var(--m-0-5);
    font-size: 1.6rem;
    display: block;
    background: var(--color-primary);
    height: 2.5rem;
    width: 2.5rem;
    cursor: pointer;
    border-radius: 50%;
    text-align: center;
    line-height: 28px;
    transition:0.3s;
    opacity:0;
  
}

.portfolio-item-inner:hover h3 ,
.portfolio-item-inner:hover span
{
    opacity: 1;
    transform: translateY(0);
}

/* contact me  */


.contact-box
{
    flex: 0 0 40%;
    max-width: 40%;
   
}

.contact-form
{
    flex: 0 0 60%;
    max-width: 60%;
    padding-bottom: 3rem;
}

.contact-data
{
    display: grid;
    row-gap: 2rem;
}

.contact-subtitle
{
    margin-bottom: var(--m-0-5);
}

.contact-description
{
    display: inline-flex;
    align-items: center;
    column-gap: .5rem;

}

.contact-icon
{
    font-size: 1.2rem;
}

.contacts-inputs
{
    display: grid;
    row-gap: 2rem;
    margin-bottom: var(--m-2-5);
}

.contact-content
{
    position: relative;
    height: 4.5rem;
    margin-bottom: 1.5rem;
    border-bottom: 2px solid var(--color-gray);

}

.contact-content span{
    position: absolute;
    bottom: 1px;
    left: 0;
    content: '';
    height: 2px;
    width: 0;
    transition: .5s;
    background: var(--color-primary);
}

.contact-input:focus ~ span
{
    width:100%;
}

.contact-input
{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 3rem 1rem 1rem 0;
    background: none;
    color: rgb(12, 143, 231);
    outline: none;
    border: none;
    z-index: 1;
}

.contact-label
{
    position: absolute;
    top: .50rem;
    width: 100%;
    font-size: var(--small-font-size);
    transform: .3s;
}

.contact-area
{
    height: 10rem;

}

.contact-area textarea
{
    resize: none;
}

.contact-input:focus  +  .contact-label
{
    top: -.75rem;
    left: 0;
    z-index: 10;
    color :var(--color-primary);
}

footer{
max-width: 100%;
max-height: 100%;

}

.footer-text {
    border: 2px hidden rgba(32, 94, 209, 0.678);
    background-color: rgba(124, 123, 24, 0.39);
    font-size:1.3rem;
    margin-top: 15rem;
    margin-bottom: 0;
    text-align: center;
    font-weight: var(--font-semi-bold);
    color: #38728d;
    }
   
.footer-text:hover { color: #030b11ea; }

 @media only screen and (max-width:986px)
 {
     .about-content,
     .about-img
     {
        flex: 0 0 100%;
         max-width: 100%;
     }

     .about-img
     {
         text-align: center;
         margin-bottom: var(--m-2-5);
     }

     .services .service-item
     {
        flex: 0 0 50%;
        max-width: 50%;
        margin-bottom: var(--m-2-5);
    }

    .portfolio-item.best
    {
        padding: var(--card-padding)  ;
    }
 }

 @media only screen and (max-width: 840px){
  
    .services .service-item
    {

       flex: 0 0 100%;
       max-width: 100%;
       margin-bottom: var(--m-2-5);
   }

   body{
    margin: var(--header-height) 0 0 0;
}
.container
{
   max-width:  500px;
}
.nav
{
    height: var(--header-height);
   
}

.nav-list
{
    flex-direction: column;
    row-gap: 2rem;
}

.nav-menu
{
    position: fixed;
    background: linear-gradient(to right ,#8ed6db ,#e2bacfd7 );
    width: 80%;
    height: 100%;
    top: 0;
    right: -100%;
    padding: 4rem 0 0 3rem;
    box-shadow: -3px 0 3px var(--color-dark);
    border-radius: 1rem 0 0 1rem;
    z-index: 100;
    transition: .3s;
}

/* show-menu */

.show-menu{
    right: 1rem;
}

.nav-close,
.nav-toggle
{
    display: inline-flex;
}
.about-img,
.about-img img{
    width:50%;
    height:50%;
}
 }

 @media only screen and (max-width:688px)
    {
    .container
      {
       max-width:  0px;
      }
     .services .service-item-inner{
        margin: auto;
        max-width: 80%;
        align-items: center;
   }

   .timeline-box{
       margin: auto;
       align-items: center;
       padding: 0;
   }


     .contact-data,
     .contact-form,
     .education ,
     .experience ,
     .services .service-item,
     .about-content .about-text,
     .about-content .skills{
           flex: 0 0 100%;
           max-width: 100%;
           
     }
     
     .fact-item,
     .portfolio-item
     {
         flex: 0 0 50%;
         max-width: 50%;
        
     }
     .about-content .about-text
     {
         margin-bottom: var(--m-1-5) ;
     }
      .education,
      .contact-data
          {
         margin-bottom: var(--m-2-5) ;
         }

 }

 @media only screen and (max-width:750px)
 {
    .container
    {
       max-width:  80%;
    }
     .nav h2{
        font-size: 1.3rem;
     }
     .social-icons
     {
         display: inline-flex;
     }
     .cv-btn .btn{
         width: 90%;
         top:1rem;
        margin: 2rem;
        position: relative;
     }

     .contact-data,
     .contact-form,
     .education ,
     .experience ,
     .services .service-item,
     .about-content .about-text,
     .about-content .skills{
           flex: 0 0 100%;
           max-width: 100%;
     }
    
     .services ,
     .service-item-inner{
    
        margin-bottom:  1rem;
        max-width: 100%;
        
   }
     .portfolio-item,
     .portfolio-item-inner,
     .portfolio-item-inner h3
     {

         flex: 0 0 100%;
         max-width: 100%;
     }

 }

 @media only screen and (max-width: 510px)
 {
    .container
    {
       max-width:  80%;
    }
    .home{
        display: block;
    }
    .intro img{
        top:-2rem;
        padding:0;
        margin: 0;
    }

    .social-icons
    {
        display: inline-flex;
    }

    .services{
         padding: 0;
    }

    .about-content .rounded,
    .about-content .rounded .about-text,
    .services .service-item 
    {
      padding: 1px;
      
    }
    .service-item,
    .service-item-inner img{
        width: 100%;
        height: 10%;
    }

     .skills .skill-item .skill-percent{
       
       align-items: center;

    }

    .cv-btn
    {
      text-align: center;
    }

   
}