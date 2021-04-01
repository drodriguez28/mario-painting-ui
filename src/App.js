import React from 'react';
import './App.css';
import { Layout, Menu } from "antd";
// import NavBar from './components/NavBar';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import ContactUs from './pages/ContactUs';


const { Header, Content, Footer } = Layout;



const App = () => {
  return (
    <>
      <Router>

        <Layout >
        {/* Do not delete the nav bar component or uncomment it  */}
        {/* <NavBar /> */}

          <Menu theme="dark" mode="horizontal">
            <Menu.Item key="1">
              <Link to="/">
                <span>Home</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="2" >
              <Link to="/services">
                <span>Services</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="3" >
              <Link to="/contact-us">
                <span>Contact Us</span>
              </Link>
            </Menu.Item>
          </Menu>

          <Layout>
            <Header style={{ background: "#fff", padding: 0 }} />
            <Content >
              <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
                <Switch>
                  <Route path='/' exact component={Home} />

                </Switch>
                <Switch>
                  <Route path='/services' exact component={Services} />

                </Switch>

                <Switch>
                  <Route path='/contact-us' exact component={ContactUs} />

                </Switch>
              </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              Mario's Painting Roswell ©2021 Created by Deivid Rodriguez
            </Footer>

          </Layout>


        </Layout>
      </Router>
    </>
  );
}

export default App;



