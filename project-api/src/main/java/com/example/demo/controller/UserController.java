package com.example.demo.controller;

import com.example.demo.model.User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @GetMapping
    public List<User> getAllUsers() {
        User user1 = new User();
        user1.setId(1L);
        user1.setName("สมชาย ใจดี");
        user1.setEmail("somchai@example.com");

        User user2 = new User();
        user2.setId(2L);
        user2.setName("สมศรี รักดี");
        user2.setEmail("somsri@example.com");

        User user3 = new User();
        user3.setId(3L);
        user3.setName("วิชัย มั่นคง");
        user3.setEmail("wichai@example.com");

        return Arrays.asList(user1, user2, user3);
    }
}
