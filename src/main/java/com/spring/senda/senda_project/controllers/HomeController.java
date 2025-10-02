package com.spring.senda.senda_project.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;


@Controller
@RequestMapping("/index")
public class HomeController {

    @GetMapping
    public String homePage(Model model) {
        model.addAttribute("Titulo", "Senda");
        return "index";
    }
    
    
}