import React from "react";
import { Box} from "@mui/material";

const MapPage = () => {
  return (
    <>
    <Box
          sx={{
            width: "100%",
            height: "60px",
            backgroundColor: "#eef5fc",
            display: "block", 
          }}
        ></Box>

        {/* Map Below the Form */}
        <Box sx={{ width: "100%", height: "450px" }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1944.2827915804478!2d80.2327208!3d12.9356189!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525cf9ae45a521%3A0xe3de88db478f38c9!2sVEDA!5e0!3m2!1sen!2sin!4v1738506742039!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Box>

        {/* Bottom Background Box */}
        <Box
          sx={{
            width: "100%",
            height: "60px",
            backgroundColor: "#eef5fc",
            display: "block",
          }}
        ></Box>
      </>
    

  );
};

export default MapPage;
