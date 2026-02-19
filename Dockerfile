# Imagen base con Java 21 (incluye el runtime necesario para ejecutar Spring Boot)
FROM eclipse-temurin:21-jdk

# Define el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el archivo jar generado por Maven desde target al contenedor
COPY target/*.jar app.jar

# Expone el puerto 8080 del contenedor para acceder a la aplicacion
EXPOSE 8080

# Comando que se ejecuta cuando inicia el contenedor para levantar la app Spring Boot
CMD ["java", "-jar", "app.jar"]