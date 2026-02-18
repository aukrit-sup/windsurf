package com.example.demo.controller;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
public class UserControllerTest {

    @Autowired
    private WebApplicationContext webApplicationContext;

    @Test
    public void testGetAllUsers_ReturnsJsonArray() throws Exception {
        MockMvc mockMvc = MockMvcBuilders.webAppContextSetup(webApplicationContext).build();
        
        mockMvc.perform(get("/api/users"))
                .andExpect(status().isOk())
                .andExpect(content().contentType("application/json"))
                .andExpect(jsonPath("$").isArray())
                .andExpect(jsonPath("$.length()").value(3));
    }

    @Test
    public void testGetAllUsers_FirstUserFields() throws Exception {
        MockMvc mockMvc = MockMvcBuilders.webAppContextSetup(webApplicationContext).build();
        
        mockMvc.perform(get("/api/users"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].id").value(1))
                .andExpect(jsonPath("$[0].name").value("สมชาย ใจดี"))
                .andExpect(jsonPath("$[0].email").value("somchai@example.com"));
    }

    @Test
    public void testGetAllUsers_SecondUserFields() throws Exception {
        MockMvc mockMvc = MockMvcBuilders.webAppContextSetup(webApplicationContext).build();
        
        mockMvc.perform(get("/api/users"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[1].id").value(2))
                .andExpect(jsonPath("$[1].name").value("สมศรี รักดี"))
                .andExpect(jsonPath("$[1].email").value("somsri@example.com"));
    }

    @Test
    public void testGetAllUsers_ThirdUserFields() throws Exception {
        MockMvc mockMvc = MockMvcBuilders.webAppContextSetup(webApplicationContext).build();
        
        mockMvc.perform(get("/api/users"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[2].id").value(3))
                .andExpect(jsonPath("$[2].name").value("วิชัย มั่นคง"))
                .andExpect(jsonPath("$[2].email").value("wichai@example.com"));
    }

    @Test
    public void testGetAllUsers_JsonStructure() throws Exception {
        MockMvc mockMvc = MockMvcBuilders.webAppContextSetup(webApplicationContext).build();
        
        MvcResult result = mockMvc.perform(get("/api/users"))
                .andExpect(status().isOk())
                .andReturn();

        String content = result.getResponse().getContentAsString();
        
        // Verify JSON contains expected user data
        assertTrue(content.contains("\"id\":1"));
        assertTrue(content.contains("สมชาย ใจดี"));
        assertTrue(content.contains("somchai@example.com"));
        assertTrue(content.contains("\"id\":2"));
        assertTrue(content.contains("สมศรี รักดี"));
        assertTrue(content.contains("somsri@example.com"));
        assertTrue(content.contains("\"id\":3"));
        assertTrue(content.contains("วิชัย มั่นคง"));
        assertTrue(content.contains("wichai@example.com"));
    }
}
