package co.javeriana.dw.thymeleaf.controller;

import co.javeriana.dw.thymeleaf.model.PaginaWiki;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@Controller
public class WikiController {

    @GetMapping("/wiki")
    public String wiki(Model model) {

        List<PaginaWiki> paginas = List.of(
            new PaginaWiki(
                "Introducción",
                "Esta Wiki documenta el uso de Thymeleaf en una aplicación Spring Boot."
            ),
            new PaginaWiki(
                "Arquitectura MVC",
                "El proyecto sigue el patrón Modelo-Vista-Controlador."
            ),
            new PaginaWiki(
                "Thymeleaf",
                "Thymeleaf permite renderizar vistas dinámicas del lado del servidor."
            )
        );

        model.addAttribute("paginas", paginas);
        return "wiki";
    }
}
