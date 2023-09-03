package com.onlineshopping.controller;

import com.onlineshopping.dto.EmailDto;
import com.onlineshopping.service.OtpService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api")
@CrossOrigin(origins = "http://localhost:3000")
public class ForgotPasswordController {

    @Autowired
    private OtpService otpService;
    @Autowired
    private JavaMailSender javaMailSender;

    //@PostMapping("send-otp")
    public ApiResponse sendOtp(@RequestBody EmailRequest emailRequest) {
        String email = emailRequest.getEmail();
        // Validate email and send OTP
        boolean success = otpService.sendOtp(email);
        
        if (success) {
            return new ApiResponse(true, "OTP sent successfully");
        } else {
            return new ApiResponse(false, "Failed to send OTP");
        }
    }
    @PostMapping("send-otp")
    public String sendEmail(@RequestBody EmailDto emailDto) {
    	SimpleMailMessage smm=new SimpleMailMessage();
    	smm.setTo("prashantdelha@gmail.com");
    	smm.setSubject("OTP AUth");
    	smm.setText("123456");
    	javaMailSender.send(smm);
    	return "Sent";
    }
}

class EmailRequest {
    private String email;

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}

class ApiResponse {
    private boolean success;
    private String message;

    public ApiResponse(boolean success, String message) {
        this.success = success;
        this.message = message;
    }

    public boolean isSuccess() {
        return success;
    }

    public String getMessage() {
        return message;
    }
}
