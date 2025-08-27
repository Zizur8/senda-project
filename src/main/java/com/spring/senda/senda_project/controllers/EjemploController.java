package com.spring.senda.senda_project.controllers;


import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;



@Controller
public class EjemploController {

    @GetMapping("/detalles_info")
    public String info(Model model){

        model.addAttribute("Titulo", "Servidor en linea");
        model.addAttribute("Contenido", "Este es un mensaje de contenido.");

        return "detalles_info";
    }


    
}
