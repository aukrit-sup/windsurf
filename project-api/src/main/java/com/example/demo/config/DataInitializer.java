package com.example.demo.config;

import com.example.demo.entity.User;
import com.example.demo.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class DataInitializer implements CommandLineRunner {

    private final UserRepository userRepository;

    @Override
    public void run(String... args) throws Exception {
        // Clear existing data
        userRepository.deleteAll();
        
        // Add demo users
        User user1 = new User();
        user1.setName("สมชาย ใจดี");
        user1.setEmail("somchai@example.com");
        
        User user2 = new User();
        user2.setName("สมศรี รักดี");
        user2.setEmail("somsri@example.com");
        
        User user3 = new User();
        user3.setName("วิชัย มั่นคง");
        user3.setEmail("wichai@example.com");
        
        userRepository.save(user1);
        userRepository.save(user2);
        userRepository.save(user3);
        
        System.out.println("Demo data initialized: 3 users added");
    }
}
