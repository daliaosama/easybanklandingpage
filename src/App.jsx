
import './App.css'
import logo from '../src/assets/images/logo.svg'
import mockup from '../src/assets/images/image-mockups.png'
import online from '../src/assets/images/icon-online.svg'
import budgeting from '../src/assets/images/icon-budgeting.svg'
import onboarding from '../src/assets/images/icon-onboarding.svg'
import api from '../src/assets/images/icon-api.svg'
import currency from '../src/assets/images/image-currency.jpg'
import restaurant from '../src/assets/images/image-restaurant.jpg'
import plane from '../src/assets/images/image-plane.jpg'
import confetti from '../src/assets/images/image-confetti.jpg'
import logo1 from '../src/assets/images/logo1.svg'
import facebook from '../src/assets/images/icon-facebook.svg'
import twitter from '../src/assets/images/icon-twitter.svg'
import youtube from '../src/assets/images/icon-youtube.svg'
import pinterest from '../src/assets/images/icon-pinterest.svg'
import instagram from '../src/assets/images/icon-instagram.svg'
import menu from '../src/assets/images/icon-hamburger.svg'
import { useState } from 'react'
import close from '../src/assets/images/icon-close.svg'
function App() {
    const handleClick = (item) => {
        setBorderColor(item);
      };
    const [borderColor, setBorderColor] = useState("transparent");
    const[img,setImg]=useState(menu)
    const [Menu,setMenu]=useState(false)
    const handleMenu=()=>{
        if(img==menu){
            setMenu(true)
            setImg(close)
        }
        else{
            setMenu(false)
            setImg(menu)
        }
    }
  return (
    <main>
     <header>
      <img src={logo} alt="logo" />
      <ul>
      <li className={borderColor === "item1" ? "borderColor" : ""}
        onClick={() => handleClick("item1")}>Home</li>
      <li className={borderColor === "item2" ? "borderColor" : ""}
        onClick={() => handleClick("item2")}>About</li>
      <li className={borderColor === "item3" ? "borderColor" : ""}
        onClick={() => handleClick("item3")}>Contact</li>
      <li className={borderColor === "item4" ? "borderColor" : ""}
        onClick={() => handleClick("item4")}>Blog</li>
      <li className={borderColor === "item5" ? "borderColor" : ""}
        onClick={() => handleClick("item5")}>Careers</li>
      </ul>
      <button className="btn">Request Invite</button>
      <img src={img} id="menu" onClick={handleMenu}/>
     </header>
     {Menu==true&&<div id="Menu">
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Blog</li>
            <li>Careers</li>
        </ul>
        </div>}
     <div id="top">
            <div id="left">
                <label  className="lab">Next generation</label>
                <label className="lab">digital banking</label>
                <p>Take your financial life online.Your Easybank account
                    will be a one-stop-shop for spending, saving, bugeting,investing,and much more.</p>
              
                <button className="btn">Request Invite</button>
            </div>
            <div id="right">
              <img src={mockup} id="img"/>
            </div>
    </div>
    <div id="middle">
            <div id="esybank">
                <label className="lab">Why choose Easybank? </label>
                <p>We leverage Open Banking to turn your bank account into your financial hub. Control 
                    your finances like never before.</p>
            </div>
            
                <div id="about">
                    <div className="mid">
                        <img src={online} className="img"/>
                        <label >Online Banking</label>
                        <p>Our modern web and mobile applications allow you to keep track of your finances 
                            wherever you are in the world.</p>
                    </div>
                    <div className="mid">
                        <img src={budgeting} className="img"/>
                        <label>Simple Budgeting</label>
                        <p>See exactly where your money goes each month. Receive notifications when you’re 
                            close to hitting your limits.
                          </p>
                    </div>
                    <div className="mid">
                        <img src={onboarding} className="img"/>
                        <label >Fast Onboarding</label>
                        <p> We don’t do branches. Open your account in minutes online and start taking control 
                            of your finances right away.</p>
                    </div>
                    <div className="mid">
                        <img src={api} className="img"/>
                        <label >Open API</label>
                        <p>
                            Manage your savings, investments, pension, and much more from one account. Tracking 
                          your money has never been easier.
                        </p>
                    </div>
                </div>
                
        </div>
        <div id="middle2">
            <div id="ar">
                <label className="lab">Latest Articles</label> 
            </div>
           
           <div id="article">
            <div className="mid1"><img src={currency} className="image"/>
                <label  className="lab1"> By Claire Robinson</label>
                <h4>Receive money in any currency with no fees</h4>
             <p>The world is getting smaller and we’re becoming more mobile. So why should you be 
                 forced to only receive money in a single …</p>
             </div>
             <div className="mid1">
                 <img src={restaurant} className="image"/>
                 <label className="lab1">By Wilson Hutton</label>
                 <h4>Treat yourself without worrying about money</h4>
                 <p>Our simple budgeting feature allows you to separate out your spending and set 
                    realistic limits each month. That means you …</p>
                 
             </div>
             <div className="mid1">
                <img src={plane} className="image"/>
                <label className="lab1">By Wilson Hutton</label>
                <h4>Take your Easybank card wherever you go</h4>
                <p>We want you to enjoy your travels. This is why we don’t charge any fees on purchases 
                    while you’re abroad. We’ll even show you …</p>
             </div>
             <div className="mid1">
                <img src={confetti} className="image"/>
                <label className="lab1">By Claire Robinson</label>
                <h4>Our invite-only Beta accounts are now live!</h4>
                <p>After a lot of hard work by the whole team, we’re excited to launch our closed beta. 
                    It’s easy to request an invite through the site ...</p>
             </div>
           </div>
           
        </div>
        <footer>
        <div id="abouteasy">
            <img src={logo1} id="logo"/>
            <div id="social">
                <img src={facebook}/>
                <img src={youtube}/>
                <img src={twitter}/>
                <img src={pinterest}/>
                <img src={instagram}/>
            </div>
        </div>
        <div id="list">
            <label>AboutUs</label>
            <label>Contact</label>
            <label>Blog</label>
        </div>
        <div id="list1">
            <label>Careers</label>
            <label>Support</label>
            <label>Privacy Policy</label>
        </div>
    <div id="invite">
        <button className="btn">Request Invite</button>
        <label >&#169;Easybank.All Rights Reserved</label>
    </div>    
    </footer>
    </main>
  )
}

export default App
