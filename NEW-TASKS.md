# Tasks

## 1️⃣ Alta Prioridad

1. Vincular con el registro de usuario en navegación

2. Realizar migración e integración de la Landing Page
3. Adaptar los diseños y estructura de la Landing Page

4. Implementar "datos extra" en cada formulario correspondiente

## 2️⃣ Media Prioridad

1. Crear componente "Checkbox"

2. Agregar la selección múltiple en el componente "Select"

3. Crear pantalla "SuccessPage"
4. Crear pantalla "ErrorPage"

5. Agregar sección "Ofertas Postuladas"
6. Agregar sección "Ofertas Guardadas"

7. Realizar correcciones solicitadas en el documento <https://docs.google.com/document/d/1ybcsDYYGLWyZ17lNWhDkZ6GD7UaOxRlX/edit?dls=true>

## 3️⃣ Baja Prioridad

1. Agregar "dependsOn" al select
2. Checkbox con una sola opción

3. Agregar la modificación de datos en el perfil de usuario

4. Implementar el "MultiStepForm"

5. Crear componente "AvatarInfo" para el componente "Header"

6. Crear componente "Dialog"

7. Agregar "onChange" a todos los inputs
8. Agregar "dependsOn" a todos los inputs

# Comentarios

- Agregar campo de estudios en la sección "Educación"
- Cuando es privado la oferta, se puede compartir con su link pero no está disponible en la búsqueda

# Requerimientos antiguos

- Datos Extra

```ts
type Field = {
  id: string
  label: string
  type: 'select' | 'text' | 'checkbox'
  options?: {
    id: string
    label: string
  }[]
}

type ExtraFields = Field[]

type FilledField = {
  id: string
  value: string
}
```

- LEO - Integrar ambos backends

- En el perfil, el candidato puede editar sus datos
  ![Alt text](image.png)

- El flujo es:

  1. El candidato presiona "Aplicar"
  2. Confirma o valida su información (solo visual)
     a. Si está confirmado, avanza a la siguiente pantalla
     b. Si no está confirmado, se redirige a la pantalla de "Editar Perfil"
  3. Si tiene datos extra la oferta, se muestra la pantalla de "Datos Extra"

- JAVIER - Revisar "filtros" en la pantalla de "Ofertas"
- JAVIER - Revisar "Ofertas Destacadas" en el "Listado de Ofertas"
- JAVIER - Cómo se aplicaría el Personaje de la Marca para comunicación?
- JAVIER - Carpeta de imágenes de todos los clientes y sus logos. Con fondo transparente. (png, webp, svg) - Vector
