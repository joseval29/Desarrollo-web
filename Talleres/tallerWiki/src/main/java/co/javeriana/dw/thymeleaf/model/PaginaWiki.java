package co.javeriana.dw.thymeleaf.model;

public class PaginaWiki {

    private String titulo;
    private String contenido;

    public PaginaWiki(String titulo, String contenido) {
        this.titulo = titulo;
        this.contenido = contenido;
    }

    public String getTitulo() {
        return titulo;
    }

    public String getContenido() {
        return contenido;
    }
}
