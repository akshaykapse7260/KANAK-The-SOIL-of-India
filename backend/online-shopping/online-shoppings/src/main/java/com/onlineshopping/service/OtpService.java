package com.onlineshopping.service;

import org.springframework.stereotype.Service;

@Service
public class OtpService {

    public boolean sendOtp(String email) {
        // Generate and send OTP logic here
        // Example: Generate a random OTP and send it to the provided email
        
        // Simulate sending OTP
        String otp = generateRandomOtp();
        System.out.println("OTP for " + email + ": " + otp);
        
        // Return success (you can implement actual email sending logic)
        return true;
    }

    private String generateRandomOtp() {
        // Generate random OTP logic here
        // Example: Generate a 6-digit random number
        return String.valueOf((int) ((Math.random() * 900000) + 100000));
    }
}
