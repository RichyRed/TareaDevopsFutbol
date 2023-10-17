# Tarea Devops
## Richard Rojas
## 55077

### Para ejecutar escriba el comando:
```
docker-compose up  
```
### Para entrar en la app, entre al siguiente link:
```
http://localhost:3000/
```
### Para entrar e nuestra base de datos, en otra terminal usamos:
```
docker exec -it mysqlcontainer bash
``` 
### Luego ponemos:
```
mysql -u root -p
```
### La contraseña es:
```
contra123
```

## Para la aplicacion se instalaron las siguientes dependencias:
```
npx create-react-app imagentareadevops
npm install react-router-dom
npm install axios
npm install mysql
npm install cors
npm install express
npm install material-ui
npm install @material-ui/icons
```

## Para la base de datos se instalaron las siguientes dependencias:
```
npm install mysql
npm install cors
npm install express
```
## Para la aplicacion use React y mi formulario de futbolistas tiene los siguientes campos:
```
Nombre
Apodo
Edad
Equipo
```
### Se eligió React para el desarrollo de la aplicación web debido a sus ventajas en la creación de interfaces de usuario eficientes y reutilizables. Además, React permite construir aplicaciones de una sola página (SPA) para una experiencia de usuario más rápida.

### Se eligió MySQL como sistema de gestión de bases de datos debido a su eficiencia y confiabilidad en el almacenamiento y recuperación de datos. Además, es una opción de código abierto ampliamente utilizada.

### El formulario de registro de futbolistas se seleccionó debido a su aplicabilidad en la vida real y su utilidad para diversas personas. Además, es un proyecto simple que permite aprender React y MySQL de manera efectiva.

### Este README proporciona información clave sobre cómo ejecutar y utilizar la aplicación, las dependencias utilizadas y las razones detrás de las elecciones tecnológicas.