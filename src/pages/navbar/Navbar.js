import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  TextField,
  useMediaQuery,
} from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import searchImage from "../../images/navbarimg/searchImage.png";
import CloseIcon from "@mui/icons-material/Close";
import logo from "../../images/navbarimg/Logo 1.png";
import "./Navbar.css";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
  const toggleSearch = () => setSearchOpen(!searchOpen);
  const isMobile = useMediaQuery("(max-width: 900px)");

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About us", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Careers", path: "/careers" },
    { label: "Case Studies", path: "/case-studies" },
    { label: "Our Approach", path: "/our-approach" },
    { label: "Blogs", path: "/blogs" },
    { label: "Contact us", path: "/contact" },
  ];

  return (
    <div>
      <AppBar position="static" className="navbar" sx={{ background: "#FFFFFF" }}>
        <Toolbar sx={{ paddingLeft: "5px !important", paddingRight: "10px" }}>
          {/* Logo */}
          <Link to="/">
            <img src={logo} alt="Compunet Logo" className="logo" />
          </Link>

          <Box sx={{ flexGrow: 1 }} />

          {/* Search Bar */}
          {searchOpen ? (
            <Box className="search-box">
              <TextField variant="outlined" size="small" placeholder="Search..." className="search-input" />
              <IconButton className="close-icon" onClick={toggleSearch}>
                <CloseIcon sx={{ fontSize: 15 }} />
              </IconButton>
            </Box>
          ) : (
            <img
              src={searchImage}
              alt="Search"
              height="30%"
              width="30%"
              className="search-img"
              onClick={toggleSearch}
            />
          )}

          {/* Desktop Navigation */}
          {!isMobile && (
            <Box className="nav-links">
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  component={Link}
                  to={item.path}
                  className={`nav-button ${activeTab === item.label ? "active" : ""}`}
                  onClick={() => setActiveTab(item.label)}
                >
                  {item.label}
                </Button>
              ))}
              {/* Fixed "Book a Call" button */}
              <Button
                component={Link}
                to="/Book"
                className={`book-call-btn ${activeTab === "Book a Call" ? "active" : ""}`}
                onClick={() => setActiveTab("Book a Call")}
              >
                Book a Call
              </Button>
            </Box>
          )}

          {/* Mobile Hamburger Menu */}
          {isMobile && (
            <IconButton edge="end" className="menu-icon" onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer Menu */}
      {isMobile && (
        <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
          <List>
            {navItems.map((item) => (
              <ListItem
                button
                key={item.label}
                component={Link}
                to={item.path}
                onClick={() => {
                  setActiveTab(item.label);
                  handleDrawerToggle();
                }}
              >
                <ListItemText primary={item.label} />
              </ListItem>
            ))}
            {/* Fixed "Book a Call" button inside mobile menu */}
            <ListItem>
              <Button
                component={Link}
                to="/Book"
                className="book-call-btn"
                onClick={() => {
                  setActiveTab("Book a Call");
                  handleDrawerToggle();
                }}
              >
                Book a Call
              </Button>
            </ListItem>
          </List>
        </Drawer>
      )}
    </div>
  );
};

export default Navbar;
