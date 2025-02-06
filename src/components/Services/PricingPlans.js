import React, { useState } from "react";
import { Card, CardContent, Typography, Button, Grid, Box, MenuItem, Select } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

const plans = [
  {
    title: "Basic",
    subtitle: "For individuals",
    price: "$39",
    description:
      "Our Plan is designed for small to medium-sized businesses looking for a solid foundation in IT services.",
    features: ["Web Site Design", "Domain Registration", "Hosting", "SEO Friendly"],
    color: "#F8F9FA",
  },
  {
    title: "Premium",
    subtitle: "For startups",
    price: "$99",
    description:
      "Our Plan offers cutting-edge IT services for businesses demanding top-tier performance & reliability.",
    features: ["Web Site Design", "Domain Registration", "Hosting", "SEO Friendly"],
    color: "#D6E4FF",
    popular: true,
  },
  {
    title: "E-Commerce",
    subtitle: "For big companies",
    price: "$149",
    description: "Our plan ensures your platform operates smoothly and efficiently.",
    features: ["Web Site Design", "Domain Registration", "Hosting", "SEO Friendly"],
    color: "#F8F9FA",
  },
];

const PricingPlans = () => {
  const [currency, setCurrency] = useState("USD");

  return (
    <Box sx={{ textAlign: "center", padding: 4, maxWidth: "1200px", margin: "auto" }}>
      {/* Pricing Header */}
      <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: 1 }}>
        Our Pricing Plans
      </Typography>
      <Typography variant="body1" color="textSecondary" sx={{ marginBottom: 3 }}>
        We offer a range of plans that provide premium IT solutions, top-notch products, and exceptional customer service.
      </Typography>

      {/* Currency Selector */}
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 1, marginBottom: 4 }}>
        <img src="https://flagcdn.com/w40/us.png" alt="USD Flag" width="24" />
        <Select
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          variant="outlined"
          size="small"
          sx={{ minWidth: 100 }}
        >
          <MenuItem value="USD">USD</MenuItem>
          <MenuItem value="EUR">EUR</MenuItem>
          <MenuItem value="GBP">GBP</MenuItem>
        </Select>
      </Box>

      {/* Pricing Cards */}
      <Grid container spacing={3} justifyContent="center">
        {plans.map((plan, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: "flex" }}>
            <Card
              sx={{
                backgroundColor: plan.color,
                padding: 3,
                borderRadius: 3,
                textAlign: "center",
                boxShadow: 3,
                flexGrow: 1,
                display: "flex",
                flexDirection: "column",
              }}
            >
              {plan.popular && (
                <Typography
                  sx={{
                    position: "absolute",
                    top: 10,
                    right: 10,
                    background: "#2196F3",
                    color: "white",
                    padding: "4px 10px",
                    borderRadius: "5px",
                    fontSize: "12px",
                  }}
                >
                  Popular
                </Typography>
              )}
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="subtitle1" color="textSecondary">
                  {plan.subtitle}
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: "bold", marginTop: 1 }}>
                  {plan.title}
                </Typography>
                <Typography variant="h4" sx={{ fontWeight: "bold", marginTop: 1 }}>
                  {plan.price} <span style={{ fontSize: "16px" }}>/monthly</span>
                </Typography>
                <Typography variant="body2" sx={{ marginTop: 1 }}>
                  {plan.description}
                </Typography>

                <Typography variant="h6" sx={{ fontWeight: "bold", marginTop: 2 }}>
                  What's included
                </Typography>
                {plan.features.map((feature, i) => (
                  <Typography key={i} sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 1, marginTop: 1 }}>
                    <CheckCircle color="primary" fontSize="small" />
                    {feature}
                  </Typography>
                ))}
              </CardContent>

              <Button variant="contained" sx={{ marginTop: 3, borderRadius: 10 }}>
                Choose Plan
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PricingPlans;