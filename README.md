La aplicación es un e-commers de una tienda de productos para embellecer las uñas.

Existen 3 tipos de productos para la venta:
.Esmaltes cremosos
.Esmaltes espejados
.Accesorios para adherir a las uñas

Se puede ver el detalle del producto seleccionado, presionando "ver detalle" y muestra la descripción del producto, más un contador para subir al carrito.

Se muestra el stock de cada producto y "sin stock" en caso que no tenga. 
Solo se permite mostrar el contador para subir al carrito si es que tiene stock.

Luego de terminar la compra, ésta se guarda en la DB y se muestra su identificación al usuario.

Perfiles de usuarios:
. A todo público, sin autenticarse podrán entrar y comprar.

. Con autenticación(es la de firebase) solo podrán entrar si en el navegador escriben localhost3000/login, se utilizó rutas protegidas, en esta página se pide email y password, se corrobora que exista en la DB, (tener en cuenta que la primera vez se debe ingresar en la DB manualmente, si existe entonces solo se permite acceder a dos lugares:

  . Registrar Administradores: en esta sección se permite dar de alta a personal de la empresa, que luego podrá acceder a actualizar la DB.

  . Actualizar DB: ésta está en desarrollo, ingresa personal autorizado para modificar, dar de baja, dar de alta, datos en la DB. 

Se utilizó :Firebase para la DB y el servicio de autenticación
           :Sweetalert2
           :Bootstrap

Quedó pendiente para la entrega final:
1- El ingreso por la web la primera vez de un usuario administrador, ya que para registrar administradores debe hacerlo un usuario ya dado de alta.
2- La actualización del stock desde la web.
3- Listado de órdenes.